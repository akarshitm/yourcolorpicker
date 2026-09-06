import { clamp, hexToRgb, hslToRgb, rgbToHex, rgbToHsl } from "./colorMath";

export interface HarmonyScheme {
	label: string;
	colors: string[]; // hex
}

/**
 * Generates a few standard color-theory schemes (hue rotations on the HSL
 * wheel, plus a lightness ramp) that pair well with the given color.
 */
export function generateHarmonies(hex: string): HarmonyScheme[] {
	const rgb = hexToRgb(hex);
	if (!rgb) return [];
	const { h, s, l } = rgbToHsl(rgb);

	const rotate = (degrees: number) => rgbToHex(hslToRgb({ h: (((h + degrees) % 360) + 360) % 360, s, l }));
	const shade = (deltaL: number) => rgbToHex(hslToRgb({ h, s, l: clamp(l + deltaL, 4, 96) }));

	return [
		{ label: "Complementary", colors: [hex.toUpperCase(), rotate(180)] },
		{ label: "Analogous", colors: [rotate(-30), hex.toUpperCase(), rotate(30)] },
		{ label: "Triadic", colors: [hex.toUpperCase(), rotate(120), rotate(240)] },
		{ label: "Monochromatic", colors: [shade(-30), shade(-15), hex.toUpperCase(), shade(15), shade(30)] },
	];
}
