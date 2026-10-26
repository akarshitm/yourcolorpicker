import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { locales, defaultLocale, localeTags } from "../i18n/config";
import { localizePath } from "../i18n/utils";

const siteUrl = "https://www.yourcolorpicker.com";

const pages: { path: string; changefreq: string; priority: string }[] = [
	{ path: "/", changefreq: "weekly", priority: "1.0" },
	{ path: "/tools", changefreq: "monthly", priority: "0.8" },
	{ path: "/faq", changefreq: "weekly", priority: "0.8" },
	{ path: "/about", changefreq: "monthly", priority: "0.6" },
	{ path: "/contact", changefreq: "monthly", priority: "0.5" },
	{ path: "/color-converter", changefreq: "monthly", priority: "0.6" },
	{ path: "/gradient-maker", changefreq: "monthly", priority: "0.6" },
	{ path: "/contrast-checker", changefreq: "monthly", priority: "0.6" },
	{ path: "/color-blindness-simulator", changefreq: "monthly", priority: "0.6" },
	{ path: "/color-mixer", changefreq: "monthly", priority: "0.6" },
	{ path: "/shades-and-tints-generator", changefreq: "monthly", priority: "0.6" },
	{ path: "/random-color-generator", changefreq: "monthly", priority: "0.6" },
	{ path: "/color-names", changefreq: "monthly", priority: "0.6" },
	{ path: "/palette-generator", changefreq: "monthly", priority: "0.6" },
	{ path: "/eyedropper-tool", changefreq: "monthly", priority: "0.6" },
	{ path: "/hex-code-from-image", changefreq: "monthly", priority: "0.6" },
	{ path: "/games", changefreq: "weekly", priority: "0.8" },
	{ path: "/games/color-runner", changefreq: "monthly", priority: "0.7" },
	{ path: "/games/odd-color-out", changefreq: "monthly", priority: "0.7" },
	{ path: "/games/color-memory", changefreq: "monthly", priority: "0.7" },
	{ path: "/privacy-policy", changefreq: "monthly", priority: "0.3" },
	{ path: "/terms-and-conditions", changefreq: "monthly", priority: "0.3" },
];

const lastmod = "2026-10-26";

function absoluteUrl(locale: (typeof locales)[number], path: string) {
	return `${siteUrl}${localizePath(locale, path)}`;
}

// One <url> per locale, each listing every locale (plus x-default) as an
// hreflang alternate. Blog posts are translated into every locale too.
function localizedEntries(path: string, changefreq: string, priority: string) {
	const alternates = locales
		.map((altLocale) => `\t\t<xhtml:link rel="alternate" hreflang="${localeTags[altLocale]}" href="${absoluteUrl(altLocale, path)}" />`)
		.join("\n");
	const xDefault = `\t\t<xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(defaultLocale, path)}" />`;
	return locales.map((locale) =>
		[
			"\t<url>",
			`\t\t<loc>${absoluteUrl(locale, path)}</loc>`,
			`\t\t<lastmod>${lastmod}</lastmod>`,
			`\t\t<changefreq>${changefreq}</changefreq>`,
			`\t\t<priority>${priority}</priority>`,
			alternates,
			xDefault,
			"\t</url>",
		].join("\n"),
	);
}

export const GET: APIRoute = async () => {
	// English post ids have no locale prefix; translations share the same slug.
	const posts = (await getCollection("blog")).filter((post) => !post.id.includes("/"));
	const entries = [
		...pages.flatMap((page) => localizedEntries(page.path, page.changefreq, page.priority)),
		...localizedEntries("/blog", "weekly", "0.7"),
		...posts.flatMap((post) => localizedEntries(`/blog/${post.id}`, "yearly", "0.5")),
	].join("\n");

	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries}\n</urlset>\n`;

	return new Response(xml, {
		headers: { "Content-Type": "application/xml; charset=utf-8" },
	});
};
