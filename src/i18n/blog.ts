import { getCollection, type CollectionEntry } from "astro:content";
import { defaultLocale, type Locale } from "./config";

// English posts live at src/content/blog/<slug>.md; translations live at
// src/content/blog/<lang>/<slug>.md, so their ids carry a "<lang>/" prefix.
export interface LocalizedPost {
	slug: string;
	entry: CollectionEntry<"blog">;
}

export async function getPosts(lang: Locale): Promise<LocalizedPost[]> {
	const posts = await getCollection("blog");
	const prefix = `${lang}/`;
	return posts
		.filter((p) => (lang === defaultLocale ? !p.id.includes("/") : p.id.startsWith(prefix)))
		.map((p) => ({ slug: lang === defaultLocale ? p.id : p.id.slice(prefix.length), entry: p }))
		.sort((a, b) => b.entry.data.publishDate.valueOf() - a.entry.data.publishDate.valueOf());
}
