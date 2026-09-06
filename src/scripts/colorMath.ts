export interface RGB {
	r: number;
	g: number;
	b: number;
}

export interface HSL {
	h: number;
	s: number;
	l: number;
}

export interface HSV {
	h: number;
	s: number;
	v: number;
}

export function clamp(n: number, min: number, max: number): number {
	return Math.min(max, Math.max(min, n));
}

export function toHex2(n: number): string {
	return clamp(Math.round(n), 0, 255).toString(16).padStart(2, "0");
}

export function rgbToHex({ r, g, b }: RGB): string {
	return `#${toHex2(r)}${toHex2(g)}${toHex2(b)}`.toUpperCase();
}

export function hexToRgb(hex: string): RGB | null {
	const clean = hex.trim().replace(/^#/, "");
	const full =
		clean.length === 3
			? clean
					.split("")
					.map((c) => c + c)
					.join("")
			: clean;
	if (!/^[0-9a-fA-F]{6}$/.test(full)) return null;
	return {
		r: parseInt(full.slice(0, 2), 16),
		g: parseInt(full.slice(2, 4), 16),
		b: parseInt(full.slice(4, 6), 16),
	};
}

export function rgbToHsl({ r, g, b }: RGB): HSL {
	const rn = r / 255;
	const gn = g / 255;
	const bn = b / 255;
	const max = Math.max(rn, gn, bn);
	const min = Math.min(rn, gn, bn);
	const l = (max + min) / 2;
	if (max === min) {
		return { h: 0, s: 0, l: Math.round(l * 100) };
	}
	const d = max - min;
	const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
	let h: number;
	switch (max) {
		case rn:
			h = (gn - bn) / d + (gn < bn ? 6 : 0);
			break;
		case gn:
			h = (bn - rn) / d + 2;
			break;
		default:
			h = (rn - gn) / d + 4;
	}
	h *= 60;
	return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) };
}

export function hslToRgb({ h, s, l }: HSL): RGB {
	const sn = s / 100;
	const ln = l / 100;
	const k = (n: number) => (n + h / 30) % 12;
	const a = sn * Math.min(ln, 1 - ln);
	const f = (n: number) => ln - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
	return {
		r: Math.round(f(0) * 255),
		g: Math.round(f(8) * 255),
		b: Math.round(f(4) * 255),
	};
}

export function rgbToHsv({ r, g, b }: RGB): HSV {
	const rn = r / 255;
	const gn = g / 255;
	const bn = b / 255;
	const max = Math.max(rn, gn, bn);
	const min = Math.min(rn, gn, bn);
	const d = max - min;
	const v = max;
	const s = max === 0 ? 0 : d / max;
	let h: number;
	if (d === 0) {
		h = 0;
	} else {
		switch (max) {
			case rn:
				h = (gn - bn) / d + (gn < bn ? 6 : 0);
				break;
			case gn:
				h = (bn - rn) / d + 2;
				break;
			default:
				h = (rn - gn) / d + 4;
		}
		h *= 60;
	}
	return { h: Math.round(h), s: Math.round(s * 100), v: Math.round(v * 100) };
}

export function hsvToRgb({ h, s, v }: HSV): RGB {
	const sn = s / 100;
	const vn = v / 100;
	const c = vn * sn;
	const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
	const m = vn - c;
	let rp = 0;
	let gp = 0;
	let bp = 0;
	if (h < 60) [rp, gp, bp] = [c, x, 0];
	else if (h < 120) [rp, gp, bp] = [x, c, 0];
	else if (h < 180) [rp, gp, bp] = [0, c, x];
	else if (h < 240) [rp, gp, bp] = [0, x, c];
	else if (h < 300) [rp, gp, bp] = [x, 0, c];
	else [rp, gp, bp] = [c, 0, x];
	return {
		r: Math.round((rp + m) * 255),
		g: Math.round((gp + m) * 255),
		b: Math.round((bp + m) * 255),
	};
}

export function formatHsv({ h, s, v }: HSV): string {
	return `hsv(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(v)}%)`;
}

export function formatRgb({ r, g, b }: RGB): string {
	return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}

export function formatHsl({ h, s, l }: HSL): string {
	return `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
}

/** WCAG relative luminance, 0 (black) to 1 (white). */
export function relativeLuminance({ r, g, b }: RGB): number {
	const channel = (c: number) => {
		const cs = c / 255;
		return cs <= 0.03928 ? cs / 12.92 : Math.pow((cs + 0.055) / 1.055, 2.4);
	};
	return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

/** WCAG contrast ratio between two colors, 1 to 21. */
export function contrastRatio(a: RGB, b: RGB): number {
	const la = relativeLuminance(a);
	const lb = relativeLuminance(b);
	const lighter = Math.max(la, lb);
	const darker = Math.min(la, lb);
	return (lighter + 0.05) / (darker + 0.05);
}

export function contrastVerdict(ratio: number) {
	return {
		aaNormal: ratio >= 4.5,
		aaaNormal: ratio >= 7,
		aaLarge: ratio >= 3,
		aaaLarge: ratio >= 4.5,
	};
}
