// Cloudflare Worker entry point. Beyond serving static assets, it handles two
// redirects the static-assets config can't do on its own:
// - apex -> www (hostname-level; the `_redirects` file can't match on host)
// - trailing slash -> no trailing slash, for non-HTML files like sitemap.xml
//   or robots.txt (the assets config's `html_handling: drop-trailing-slash`
//   only normalizes HTML page routes, so "/sitemap.xml/" 404s without this)
interface Fetcher {
	fetch(request: Request): Promise<Response>;
}

interface Env {
	ASSETS: Fetcher;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);
		if (url.hostname === "yourcolorpicker.com") {
			url.hostname = "www.yourcolorpicker.com";
			return Response.redirect(url.toString(), 301);
		}
		if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
			url.pathname = url.pathname.replace(/\/+$/, "");
			return Response.redirect(url.toString(), 301);
		}
		return env.ASSETS.fetch(request);
	},
};
