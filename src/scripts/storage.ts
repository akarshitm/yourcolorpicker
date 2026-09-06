export interface SavedPalette {
	id: string;
	name: string;
	colors: string[]; // hex, without '#'
	createdAt: number;
}

export interface SavedColor {
	id: string;
	hex: string; // without '#'
	createdAt: number;
}

const STORAGE_KEY = "rcf:palettes";
const COLORS_STORAGE_KEY = "rcf:colors";
const SHARE_PARAM = "p";
const MAX_SAVED_COLORS = 20;

export function getSavedPalettes(): SavedPalette[] {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}

export function savePalette(name: string, colors: string[]): SavedPalette {
	const palette: SavedPalette = {
		id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
		name: name.trim() || "Untitled palette",
		colors: colors.map((c) => c.replace(/^#/, "").toUpperCase()),
		createdAt: Date.now(),
	};
	const all = getSavedPalettes();
	all.unshift(palette);
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(all.slice(0, 50)));
	} catch {
		// localStorage unavailable (private mode, quota) — fail silently.
	}
	return palette;
}

export function deletePalette(id: string): void {
	const all = getSavedPalettes().filter((p) => p.id !== id);
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
	} catch {
		// ignore
	}
}

export function getSavedColors(): SavedColor[] {
	try {
		const raw = localStorage.getItem(COLORS_STORAGE_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}

export function saveColorToHistory(hex: string): SavedColor {
	const color: SavedColor = {
		id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
		hex: hex.replace(/^#/, "").toUpperCase(),
		createdAt: Date.now(),
	};
	const all = getSavedColors();
	all.unshift(color);
	try {
		localStorage.setItem(COLORS_STORAGE_KEY, JSON.stringify(all.slice(0, MAX_SAVED_COLORS)));
	} catch {
		// localStorage unavailable (private mode, quota) — fail silently.
	}
	return color;
}

export function deleteSavedColor(id: string): void {
	const all = getSavedColors().filter((c) => c.id !== id);
	try {
		localStorage.setItem(COLORS_STORAGE_KEY, JSON.stringify(all));
	} catch {
		// ignore
	}
}

/** Encodes a palette into the current URL's query string, without a page reload. */
export function encodePaletteToUrl(colors: string[]): string {
	const url = new URL(window.location.href);
	const value = colors.map((c) => c.replace(/^#/, "")).join("-");
	url.searchParams.set(SHARE_PARAM, value);
	window.history.replaceState(null, "", url.toString());
	return url.toString();
}

export function decodePaletteFromUrl(): string[] | null {
	const params = new URLSearchParams(window.location.search);
	const value = params.get(SHARE_PARAM);
	if (!value) return null;
	const colors = value
		.split("-")
		.map((c) => c.trim())
		.filter((c) => /^[0-9a-fA-F]{6}$/.test(c));
	return colors.length ? colors : null;
}
