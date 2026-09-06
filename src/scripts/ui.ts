let toastStack: HTMLDivElement | null = null;

function getToastStack(): HTMLDivElement {
	if (toastStack) return toastStack;
	const stack = document.createElement("div");
	stack.style.cssText = "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);z-index:9999;display:flex;flex-direction:column;align-items:center;gap:8px;";
	document.body.appendChild(stack);
	toastStack = stack;
	return stack;
}

export function showToast(message: string, duration = 1600) {
	const toast = document.createElement("div");
	toast.textContent = message;
	toast.setAttribute("role", "status");
	toast.style.cssText =
		"background:#171717;color:#fff;padding:8px 16px;border-radius:100px;font:14px 'Geist Sans',Arial,sans-serif;box-shadow:0 8px 16px -4px rgba(0,0,0,0.2);max-width:min(90vw,420px);text-align:center;";
	getToastStack().appendChild(toast);
	setTimeout(() => toast.remove(), duration);
}

export async function copyText(text: string) {
	try {
		await navigator.clipboard.writeText(text);
		showToast("Copied to clipboard");
	} catch {
		showToast("Couldn't copy — copy it manually");
	}
}
