import type { Handle } from '@sveltejs/kit';
import type { Locale } from '$lib/i18n';

const SUPPORTED: Locale[] = ['de', 'en'];
const isSupported = (locale: string | null): locale is Locale =>
	SUPPORTED.includes(locale as Locale);

export const handle: Handle = async ({ event, resolve }) => {
	const requested = event.url.searchParams.get('lang');
	const saved = event.cookies.get('locale') ?? null;
	const header = event.request.headers.get('accept-language') ?? '';
	const preferred = header
		.split(',')
		.map((part) => {
			const [lang, q] = part.trim().split(';q=');
			return { lang: lang.trim().split('-')[0].toLowerCase(), q: q ? parseFloat(q) : 1 };
		})
		.sort((a, b) => b.q - a.q)
		.find((entry) => SUPPORTED.includes(entry.lang as Locale));

	event.locals.locale = isSupported(requested)
		? requested
		: isSupported(saved)
			? saved
			: ((preferred?.lang as Locale) ?? 'de');

	if (isSupported(requested)) {
		event.cookies.set('locale', requested, {
			path: '/',
			httpOnly: true,
			sameSite: 'lax',
			maxAge: 60 * 60 * 24 * 365
		});
	}

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', event.locals.locale)
	});
};
