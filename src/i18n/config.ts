export const defaultLocale = "en";

export const locales = ["en", "es", "fr", "hi", "de", "ja", "it", "ar"] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
	en: "English",
	es: "Español",
	fr: "Français",
	hi: "हिन्दी",
	de: "Deutsch",
	ja: "日本語",
	it: "Italiano",
	ar: "العربية",
};

// BCP 47 tags for <html lang>, hreflang, and og:locale.
export const localeTags: Record<Locale, string> = {
	en: "en",
	es: "es",
	fr: "fr",
	hi: "hi",
	de: "de",
	ja: "ja",
	it: "it",
	ar: "ar",
};

// Text direction — only Arabic reads right-to-left on this site.
export const localeDirs: Record<Locale, "ltr" | "rtl"> = {
	en: "ltr",
	es: "ltr",
	fr: "ltr",
	hi: "ltr",
	de: "ltr",
	ja: "ltr",
	it: "ltr",
	ar: "rtl",
};
