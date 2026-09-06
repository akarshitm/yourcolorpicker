// Cloudflare Worker entry point. Beyond serving static assets, it normalizes
// every request to one canonical URL before it ever reaches ASSETS, since the
// static-assets config alone can't do any of this:
// - http -> https (the zone's "Always Use HTTPS" toggle is off, so without
//   this, plain http:// serves the site directly instead of redirecting)
// - apex -> www (hostname-level; the `_redirects` file can't match on host)
// - trailing slash -> no trailing slash, for non-HTML files like sitemap.xml
//   or robots.txt (the assets config's `html_handling: drop-trailing-slash`
//   only normalizes HTML page routes, so "/sitemap.xml/" 404s without this)
// All three are collapsed into a single redirect rather than three chained
// ones, so a worst-case URL only ever costs the visitor one extra hop.
interface Fetcher {
	fetch(request: Request): Promise<Response>;
}

interface Env {
	ASSETS: Fetcher;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);
		let changed = false;

		if (url.protocol === "http:") {
			url.protocol = "https:";
			changed = true;
		}
		if (url.hostname === "yourcolorpicker.com") {
			url.hostname = "www.yourcolorpicker.com";
			changed = true;
		}
		if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
			url.pathname = url.pathname.replace(/\/+$/, "");
			changed = true;
		}

		if (changed) {
			return Response.redirect(url.toString(), 301);
		}
		return env.ASSETS.fetch(request);
	},
};
