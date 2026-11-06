import type { RequestHandler } from './$types';

// First-party proxy for Plausible events, so content blockers that match
// `plausible.*/api/event` don't drop them.
const UPSTREAM = 'https://plausible.bruol.com/api/event';

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	const upstream = await fetch(UPSTREAM, {
		method: 'POST',
		headers: {
			'content-type': request.headers.get('content-type') ?? 'text/plain',
			'user-agent': request.headers.get('user-agent') ?? '',
			'x-forwarded-for': getClientAddress()
		},
		body: await request.text()
	});

	return new Response(upstream.body, {
		status: upstream.status,
		headers: { 'content-type': upstream.headers.get('content-type') ?? 'text/plain' }
	});
};
