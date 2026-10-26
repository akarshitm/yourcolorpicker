import { defaultLocale, locales, type Locale } from "./config";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { hi } from "./hi";
import { de } from "./de";
import { ja } from "./ja";
import { it } from "./it";
import { ar } from "./ar";
import { pt } from "./pt";
import type { Dictionary } from "./en";

const dictionaries: Record<Locale, Dictionary> = { en, es, fr, hi, de, ja, it, ar, pt };

export function useTranslations(lang: Locale): Dictionary {
	return dictionaries[lang] ?? en;
}

export function isLocale(value: string): value is Locale {
	return (locales as readonly string[]).includes(value);
}

export function getLangFromUrl(url: URL): Locale {
	const [, maybeLocale] = url.pathname.split("/");
	if (maybeLocale && isLocale(maybeLocale)) return maybeLocale;
	return defaultLocale;
}

// Prefix a root-relative path with the locale segment for every locale
// except the default, matching astro.config.mjs's prefixDefaultLocale: false.
export function localizePath(lang: Locale, path: string): string {
	if (lang === defaultLocale) return path;
	return `/${lang}${path === "/" ? "" : path}`;
}

// Fills a "{{link}}" or "{{email}}" token in a translated string with plain text
// (used where the surrounding markup, e.g. an <a>, is composed by the caller).
export function splitOnToken(text: string, token: string): [string, string] {
	const parts = text.split(token);
	return [parts[0] ?? "", parts[1] ?? ""];
}
