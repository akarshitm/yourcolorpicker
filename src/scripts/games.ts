import type { RGB } from "./colorMath";

// Shared helpers for the color games: daily seeding, local stats, sharing,
// and a perceptual color-difference score.

const EPOCH = new Date(2026, 9, 24); // Daily puzzle #1 (local date).

export function el<T extends HTMLElement>(id: string): T {
	const found = document.getElementById(id);
	if (!found) throw new Error(`#${id} not found`);
	return found as T;
}

// Local-calendar day number, so everyone gets a fresh puzzle at their own midnight.
export function dayNumber(date = new Date()): number {
	const local = new Date(date.getFullYear(), date.getMonth(), date.getDate());
	return Math.round((local.getTime() - EPOCH.getTime()) / 86_400_000) + 1;
}

// mulberry32 — tiny deterministic PRNG so a seed always yields the same colors.
export function seededRandom(seed: number): () => number {
	let a = seed >>> 0;
	return () => {
		a = (a + 0x6d2b79f5) >>> 0;
		let t = a;
		t = Math.imul(t ^ (t >>> 15), t | 1);
		t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

export function loadJson<T>(key: string, fallback: T): T {
	try {
		const raw = localStorage.getItem(key);
		return raw ? { ...fallback, ...JSON.parse(raw) } : fallback;
	} catch {
		return fallback;
	}
}

export function saveJson(key: string, value: unknown): void {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch {
		// Storage can be blocked (private mode); the game still works, it just won't remember.
	}
}

export function fill(template: string, vars: Record<string, string | number>): string {
	return template.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? ""));
}

// Native share sheet on phones, clipboard everywhere else.
export async function shareResult(text: string, button: HTMLElement, copiedLabel: string): Promise<void> {
	if (navigator.share && matchMedia("(pointer: coarse)").matches) {
		try {
			await navigator.share({ text });
			return;
		} catch {
			// Cancelled or unsupported — fall through to the clipboard.
		}
	}
	try {
		await navigator.clipboard.writeText(text);
		const original = button.textContent;
		button.textContent = copiedLabel;
		setTimeout(() => (button.textContent = original), 2000);
	} catch {
		window.prompt("", text);
	}
}

export function gameUrl(path: string): string {
	return `https://www.yourcolorpicker.com${path}`;
}

// sRGB → CIELAB (D65), then plain Euclidean ΔE. Good enough to score "how
// close does this look" without pulling in a full CIEDE2000 implementation.
function toLab({ r, g, b }: RGB): [number, number, number] {
	const lin = (c: number) => {
		const v = c / 255;
		return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
	};
	const [R, G, B] = [lin(r), lin(g), lin(b)];
	const x = (R * 0.4124 + G * 0.3576 + B * 0.1805) / 0.95047;
	const y = R * 0.2126 + G * 0.7152 + B * 0.0722;
	const z = (R * 0.0193 + G * 0.1192 + B * 0.9505) / 1.08883;
	const f = (t: number) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
	const [fx, fy, fz] = [f(x), f(y), f(z)];
	return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)];
}

export function deltaE(a: RGB, b: RGB): number {
	const [l1, a1, b1] = toLab(a);
	const [l2, a2, b2] = toLab(b);
	return Math.hypot(l1 - l2, a1 - a2, b1 - b2);
}
