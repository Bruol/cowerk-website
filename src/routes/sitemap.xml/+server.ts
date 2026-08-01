import type { RequestHandler } from './$types';

export const trailingSlash = 'never';

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://co-werk5.ch/</loc>
    <xhtml:link rel="alternate" hreflang="de-CH" href="https://co-werk5.ch/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://co-werk5.ch/en/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://co-werk5.ch/" />
  </url>
  <url>
    <loc>https://co-werk5.ch/en/</loc>
    <xhtml:link rel="alternate" hreflang="de-CH" href="https://co-werk5.ch/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://co-werk5.ch/en/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://co-werk5.ch/" />
  </url>
</urlset>
`;

export const GET: RequestHandler = () => {
	return new Response(sitemap, {
		headers: {
			'cache-control': 'public, max-age=3600',
			'content-type': 'application/xml; charset=utf-8'
		}
	});
};
