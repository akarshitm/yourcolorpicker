const STORAGE_KEY = "rcf:theme";

function currentTheme(): "light" | "dark" {
	return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

function setTheme(theme: "light" | "dark") {
	document.documentElement.setAttribute("data-theme", theme);
	try {
		localStorage.setItem(STORAGE_KEY, theme);
	} catch {
		// localStorage unavailable — theme just won't persist across visits.
	}
	updateToggleUI(theme);
}

function updateToggleUI(theme: "light" | "dark") {
	const btn = document.getElementById("theme-toggle");
	const sun = document.getElementById("theme-icon-sun");
	const moon = document.getElementById("theme-icon-moon");
	if (!btn) return;
	btn.setAttribute("aria-checked", String(theme === "dark"));
	btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
	btn.setAttribute("title", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
	sun?.classList.toggle("hidden", theme === "dark");
	moon?.classList.toggle("hidden", theme !== "dark");
	document.getElementById("theme-color-meta")?.setAttribute("content", theme === "dark" ? "#0a0a0a" : "#fafafa");
}

document.getElementById("theme-toggle")?.addEventListener("click", () => {
	setTheme(currentTheme() === "dark" ? "light" : "dark");
});

updateToggleUI(currentTheme());
