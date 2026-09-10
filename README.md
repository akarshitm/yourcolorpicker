# Your Color Picker

[yourcolorpicker.com](https://www.yourcolorpicker.com) — a free, private color picker and color finder from image. Upload a photo (or grab a color live from your screen) and get instant HEX, RGB, and HSL values, extracted palettes, harmony suggestions, and a WCAG contrast checker. Everything runs client-side — no image is ever uploaded to a server.

## Features

- **Image color picker** — upload, drag-and-drop, or paste an image; hover/click/tap to sample any pixel, with a zoomed loupe for precision
- **Live screen eyedropper & screenshot capture** — pick a color from anywhere on screen (Chromium browsers) or capture a screen region to sample from
- **Dominant color palette extraction** — median-cut quantization, adjustable 4–12 swatches
- **Image quality analysis** — flags overexposure, underexposure, low resolution, and JPEG compression artifacts that could make sampled colors unreliable
- **Color harmonies** — complementary, analogous, triadic, and monochromatic suggestions for any picked color
- **Contrast checker** — WCAG AA/AAA pass/fail for any two colors
- **Saved colors & palettes** — persisted to `localStorage`, with shareable palette URLs
- **Export** — CSS custom properties, Tailwind config snippet, JSON, or a PNG swatch strip
- **Standalone tools** — color converter, gradient maker, color mixer, shades & tints generator, random color generator, color names browser, palette generator, color blindness simulator
- **Blog** — English-language articles on color theory, WCAG contrast, and color blindness, linking back into the tools
- Fully localized into English, Spanish, French, Hindi, German, Japanese, Italian, and Arabic (with RTL support)

## Tech stack

- [Astro](https://astro.build) (static output) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- Deployed as static assets on Cloudflare Workers, with a small worker (`worker.ts`) handling host/protocol/trailing-slash normalization
- No backend, no database, no image ever leaves the browser

## Getting started

```sh
npm install
npm run dev       # http://localhost:4321
```

| Command             | Action                                               |
| -------------------- | ----------------------------------------------------- |
| `npm run dev`        | Start the local dev server                            |
| `npm run build`       | Build the production site to `./dist/`                |
| `npm run preview`     | Preview the production build locally                  |
| `npm run astro check` | Type-check `.astro` files                              |
| `npm run cf:preview`  | Build and run the Cloudflare Worker locally (wrangler) |
| `npm run deploy`      | Build and deploy to Cloudflare Workers                |

## Project structure

```
src/
├── components/        # Shared UI (Nav, Footer, ColorTool, HelpDialog, ...)
│   └── views/          # Per-page view components
├── content/blog/       # Blog posts (Astro content collections, English-only)
├── i18n/               # Locale config + translation dictionaries (en, es, fr, hi, de, ja, it, ar)
├── layouts/            # Layout.astro (head/meta/schema.org) + PageLayout.astro
├── pages/              # Routes — one set at the root (English) + a [lang] mirror for other locales
├── scripts/            # Client-side TypeScript: color math, quantization, image quality, storage, per-tool logic
└── styles/             # Global Tailwind styles
public/                 # Static assets (icons, manifest, robots.txt, demo image)
worker.ts               # Cloudflare Worker entry point (host/protocol/trailing-slash redirects)
wrangler.jsonc           # Cloudflare Workers config (static assets binding)
```

## Internationalization

The default locale (`en`) is unprefixed; other locales are served under `/{locale}/...` (`prefixDefaultLocale: false` in `astro.config.mjs`). Blog pages are English-only and skip hreflang alternates via a `singleLocale` flag on `Layout`/`PageLayout`.

## Deployment

The site builds to static output and is deployed to Cloudflare Workers via `wrangler`. `worker.ts` runs in front of the static assets to redirect `http → https`, apex → `www`, and strip trailing slashes, since Cloudflare's assets config alone can't cover all three.
