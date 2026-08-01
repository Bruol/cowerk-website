import type { Handle } from '@sveltejs/kit';
import type { Locale } from '$lib/i18n';

const CANONICAL_HOST = 'co-werk5.ch';

function isProductionHost(hostname: string) {
	return hostname === CANONICAL_HOST || hostname === `www.${CANONICAL_HOST}`;
}

export const handle: Handle = async ({ event, resolve }) => {
	const requestedLocale = event.url.searchParams.get('lang');
	const forwardedProtocol = event.request.headers.get('x-forwarded-proto');
	const requestProtocol = forwardedProtocol ?? event.url.protocol.replace(':', '');
	const needsHttps = isProductionHost(event.url.hostname) && requestProtocol === 'http';
	const needsCanonicalHost = event.url.hostname === `www.${CANONICAL_HOST}`;
	const needsLocaleRedirect = requestedLocale === 'de' || requestedLocale === 'en';

	if (needsHttps || needsCanonicalHost || needsLocaleRedirect) {
		const target = new URL(event.url);
		target.protocol = 'https:';
		target.hostname = CANONICAL_HOST;

		if (needsLocaleRedirect) {
			target.pathname = requestedLocale === 'en' ? '/en/' : '/';
			target.searchParams.delete('lang');
		}

		return new Response(null, {
			status: 308,
			headers: { location: target.toString() }
		});
	}

	event.locals.locale =
		event.url.pathname === '/en' || event.url.pathname.startsWith('/en/')
			? ('en' satisfies Locale)
			: ('de' satisfies Locale);

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', event.locals.locale)
	});
};
