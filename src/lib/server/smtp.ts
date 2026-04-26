export interface SmtpConfig {
	host: string;
	port: number;
	username: string;
	password: string;
	from: string;
	to: string;
}

interface Socket {
	readable: ReadableStream<Uint8Array>;
	writable: WritableStream<Uint8Array>;
	startTls(): Socket;
	close(): void;
}

export interface MailMessage {
	subject: string;
	replyTo?: string;
	text: string;
}

const encoder = new TextEncoder();
const decoder = new TextDecoder();

function encodeHeader(value: string) {
	if (/^[\x00-\x7F]*$/.test(value)) return value;
	const bytes = encoder.encode(value);
	let binary = '';
	for (const byte of bytes) binary += String.fromCharCode(byte);
	return `=?UTF-8?B?${btoa(binary)}?=`;
}

function normalizeAddress(address: string) {
	return address.trim();
}

function sanitizeHeader(value: string) {
	return value.replace(/[\r\n]+/g, ' ').trim();
}

function sanitizeBody(value: string) {
	return value.replace(/\r\n/g, '\n').replace(/\r/g, '\n').replace(/\n\./g, '\n..');
}

function toBase64(value: string) {
	const bytes = encoder.encode(value);
	let binary = '';
	for (const byte of bytes) binary += String.fromCharCode(byte);
	return btoa(binary);
}

function buildMessage(config: SmtpConfig, message: MailMessage) {
	const from = normalizeAddress(config.from);
	const to = normalizeAddress(config.to);
	const replyTo = message.replyTo ? sanitizeHeader(message.replyTo) : undefined;
	const subject = encodeHeader(sanitizeHeader(message.subject));
	const now = new Date();

	const headers = [
		`From: ${from}`,
		`To: ${to}`,
		replyTo ? `Reply-To: ${replyTo}` : undefined,
		`Subject: ${subject}`,
		`Date: ${now.toUTCString()}`,
		`Message-ID: <${crypto.randomUUID()}@co-werk5.local>`,
		'MIME-Version: 1.0',
		'Content-Type: text/plain; charset=UTF-8',
		'Content-Transfer-Encoding: 8bit'
	].filter(Boolean);

	return `${headers.join('\r\n')}\r\n\r\n${sanitizeBody(message.text)}\r\n`;
}

class SmtpSession {
	private socket: Socket;
	private reader: ReadableStreamDefaultReader<Uint8Array>;
	private writer: WritableStreamDefaultWriter<Uint8Array>;
	private buffer = '';

	constructor(socket: Socket) {
		this.socket = socket;
		this.reader = socket.readable.getReader();
		this.writer = socket.writable.getWriter();
	}

	async readResponse(expectedCodes: number[]) {
		while (true) {
			const { value, done } = await this.reader.read();
			if (done) throw new Error('SMTP connection closed unexpectedly');
			this.buffer += decoder.decode(value, { stream: true });

			if (!this.buffer.endsWith('\r\n')) continue;

			const lines = this.buffer.split('\r\n').filter(Boolean);
			const lastLine = lines.at(-1);
			const match = lastLine?.match(/^(\d{3})\s/);
			if (!match) continue;

			const code = Number(match[1]);
			const response = this.buffer.trimEnd();
			this.buffer = '';

			if (!expectedCodes.includes(code)) {
				throw new Error(`SMTP error ${code}: ${response}`);
			}

			return response;
		}
	}

	async command(command: string, expectedCodes: number[]) {
		await this.writer.write(encoder.encode(`${command}\r\n`));
		return this.readResponse(expectedCodes);
	}

	async writeData(data: string) {
		await this.writer.write(encoder.encode(data));
	}

	async startTls() {
		await this.reader.releaseLock();
		await this.writer.releaseLock();
		this.socket = this.socket.startTls();
		this.reader = this.socket.readable.getReader();
		this.writer = this.socket.writable.getWriter();
		this.buffer = '';
	}

	async close() {
		try {
			await this.command('QUIT', [221]);
		} finally {
			this.reader.releaseLock();
			this.writer.releaseLock();
			this.socket.close();
		}
	}
}

export async function sendMail(config: SmtpConfig, message: MailMessage) {
	const { connect } = await import('cloudflare:sockets');
	const host = config.host;
	const port = config.port;
	const secureTransport = port === 465 ? 'on' : port === 587 ? 'starttls' : 'off';
	const session = new SmtpSession(connect({ hostname: host, port }, { secureTransport }));
	const from = normalizeAddress(config.from);
	const to = normalizeAddress(config.to);

	await session.readResponse([220]);
	await session.command('EHLO co-werk5.local', [250]);

	if (port === 587) {
		await session.command('STARTTLS', [220]);
		await session.startTls();
		await session.command('EHLO co-werk5.local', [250]);
	}

	await session.command('AUTH LOGIN', [334]);
	await session.command(toBase64(config.username), [334]);
	await session.command(toBase64(config.password), [235]);
	await session.command(`MAIL FROM:<${from}>`, [250]);
	await session.command(`RCPT TO:<${to}>`, [250, 251]);
	await session.command('DATA', [354]);
	await session.writeData(`${buildMessage(config, message)}\r\n.\r\n`);
	await session.readResponse([250]);
	await session.close();
}
