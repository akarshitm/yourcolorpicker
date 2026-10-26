// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.yourcolorpicker.com',
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'es', 'fr', 'hi', 'de', 'ja', 'it', 'ar', 'pt'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
