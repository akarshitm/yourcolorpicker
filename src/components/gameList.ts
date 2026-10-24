import type { GameIconName } from "./GameIcon.astro";

// Single source of truth for the games: hub cards, "more games" links, nav
// banner, and sitemap all read from here.
export type GameKey = "runner" | "daily" | "odd" | "memory";

export const gameList: { key: GameKey; href: string; icon: GameIconName; daily: boolean }[] = [
	{ key: "runner", href: "/games/color-runner", icon: "runner", daily: false },
	{ key: "daily", href: "/games/daily-color", icon: "daily", daily: true },
	{ key: "odd", href: "/games/odd-color-out", icon: "odd", daily: false },
	{ key: "memory", href: "/games/color-memory", icon: "memory", daily: true },
];
