// Cloudflare Worker entry point. Its only job beyond serving static assets is
// redirecting the bare apex domain to www — Cloudflare's static-assets
// `_redirects` file can't do hostname-level redirects, so this handles it.
interface Fetcher {
	fetch(request: Request): Promise<Response>;
}

interface Env {
	ASSETS: Fetcher;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const host = request.headers.get("host");
		if (host === "yourcolorpicker.com") {
			const url = new URL(request.url);
			url.hostname = "www.yourcolorpicker.com";
			return Response.redirect(url.toString(), 301);
		}
		return env.ASSETS.fetch(request);
	},
};
