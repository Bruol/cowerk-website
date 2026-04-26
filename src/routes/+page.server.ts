import { fail, type Actions } from '@sveltejs/kit';
import { sendMail, type SmtpConfig } from '$lib/server/smtp';

const MAX_FIELD_LENGTH = 2000;

function getString(formData: FormData, key: string) {
	const value = formData.get(key);
	if (typeof value !== 'string') return '';
	return value.trim().slice(0, MAX_FIELD_LENGTH);
}

function isEmail(value: string) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getIp(request: Request, getClientAddress: () => string) {
	return (
		request.headers.get('cf-connecting-ip') ??
		request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
		getClientAddress()
	);
}

function getSmtpConfig(env: Env): SmtpConfig {
	const username = env.SMTP_USER;
	const password = env.SMTP_PASSWORD;
	const from = username;
	const to = from;

	if (!username || !password || !from || !to) {
		throw new Error('Missing SMTP configuration');
	}

	return {
		host: env.SMTP_HOST ?? 'authsmtp.securemail.pro',
		port: Number(env.SMTP_PORT ?? 465),
		username,
		password,
		from,
		to
	};
}

function formatLines(lines: Array<[string, string | undefined]>) {
	return lines
		.filter(([, value]) => value)
		.map(([label, value]) => `${label}: ${value}`)
		.join('\n');
}

async function submitForm({
	request,
	platform,
	getClientAddress,
	type
}: {
	request: Request;
	platform: App.Platform | undefined;
	getClientAddress: () => string;
	type: 'trial' | 'contact';
}) {
	const formData = await request.formData();
	const honeypot = getString(formData, 'website');
	if (honeypot) {
		return { form: type, ok: true, message: 'Danke, wir melden uns bald.' };
	}

	const ip = getIp(request, getClientAddress);
	const name = getString(formData, 'name');
	const email = getString(formData, 'email');

	if (!platform?.env?.FORM_RATE_LIMITER) {
		throw new Error('Cloudflare rate limiter binding FORM_RATE_LIMITER is unavailable');
	}

	const rateLimitKey = `${type}:${ip}`;
	const { success } = await platform.env.FORM_RATE_LIMITER.limit({ key: rateLimitKey });
	if (!success) {
		return fail(429, {
			form: type,
			ok: false,
			message: 'Zu viele Anfragen. Bitte versuche es in einer Minute erneut.'
		});
	}

	if (!name || !isEmail(email)) {
		return fail(400, {
			form: type,
			ok: false,
			message: 'Bitte fülle Name und E-Mail korrekt aus.'
		});
	}

	if (!platform?.env) {
		throw new Error('Cloudflare Worker environment is unavailable');
	}

	const config = getSmtpConfig(platform.env);
	const userAgent = request.headers.get('user-agent') ?? 'unknown';
	const submittedAt = new Date().toISOString();

	if (type === 'trial') {
		const work = getString(formData, 'work');
		const seeking = getString(formData, 'seeking');
		const date = getString(formData, 'date');
		const source = getString(formData, 'source');

		await sendMail(config, {
			replyTo: email,
			subject: `co_werk5 Probewoche: ${name}`,
			text: formatLines([
				['Formular', 'Probewoche'],
				['Name', name],
				['E-Mail', email],
				['Womit arbeitest du?', work],
				['Was suchst du?', seeking],
				['Gewünschte Woche', date],
				['Quelle', source],
				['IP', ip],
				['User-Agent', userAgent],
				['Zeitpunkt', submittedAt]
			])
		});
	} else {
		const message = getString(formData, 'message');
		if (!message) {
			return fail(400, {
				form: type,
				ok: false,
				message: 'Bitte schreibe eine Nachricht.'
			});
		}

		await sendMail(config, {
			replyTo: email,
			subject: `co_werk5 Kontakt: ${name}`,
			text: formatLines([
				['Formular', 'Kontakt'],
				['Name', name],
				['E-Mail', email],
				['Nachricht', message],
				['IP', ip],
				['User-Agent', userAgent],
				['Zeitpunkt', submittedAt]
			])
		});
	}

	try {
		await sendMail({ ...config, to: email }, {
			subject: 'Thank you for your message',
			text: "Thank you for sending us an email. We've received your request. \nCheers, \nco_werk5"
		});
	} catch (error) {
		console.error('Failed to send confirmation email', error);
	}

	return { form: type, ok: true, message: 'Danke, wir melden uns bald.' };
}

export const actions: Actions = {
	trial: (event) => submitForm({ ...event, type: 'trial' }),
	contact: (event) => submitForm({ ...event, type: 'contact' })
};
