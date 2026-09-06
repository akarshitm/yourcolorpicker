import type { APIRoute } from "astro";
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
	{ path: "/privacy-policy", changefreq: "monthly", priority: "0.3" },
	{ path: "/terms-and-conditions", changefreq: "monthly", priority: "0.3" },
];

const lastmod = "2026-09-06";

function absoluteUrl(locale: (typeof locales)[number], path: string) {
	return `${siteUrl}${localizePath(locale, path)}`;
}

export const GET: APIRoute = () => {
	const entries = pages
		.flatMap((page) =>
			locales.map((locale) => {
				const alternates = locales
					.map((altLocale) => `\t\t<xhtml:link rel="alternate" hreflang="${localeTags[altLocale]}" href="${absoluteUrl(altLocale, page.path)}" />`)
					.join("\n");
				const xDefault = `\t\t<xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(defaultLocale, page.path)}" />`;
				return [
					"\t<url>",
					`\t\t<loc>${absoluteUrl(locale, page.path)}</loc>`,
					`\t\t<lastmod>${lastmod}</lastmod>`,
					`\t\t<changefreq>${page.changefreq}</changefreq>`,
					`\t\t<priority>${page.priority}</priority>`,
					alternates,
					xDefault,
					"\t</url>",
				].join("\n");
			}),
		)
		.join("\n");

	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries}\n</urlset>\n`;

	return new Response(xml, {
		headers: { "Content-Type": "application/xml; charset=utf-8" },
	});
};
