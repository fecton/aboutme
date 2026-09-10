"use client";

import {
	Children,
	isValidElement,
	useCallback,
	useState,
	type ReactNode,
} from "react";

interface WritingCodeBlockProps {
	children?: ReactNode;
	className?: string;
}

function extractLanguage(children: ReactNode): string | undefined {
	const child = Children.toArray(children)[0];
	if (!isValidElement(child)) {
		return undefined;
	}
	const className = (child.props as { className?: string }).className;
	const match = className?.match(/language-([a-zA-Z0-9_+-]+)/);
	return match?.[1];
}

async function copyText(text: string): Promise<boolean> {
	try {
		if (navigator.clipboard?.writeText) {
			await navigator.clipboard.writeText(text);
			return true;
		}
	} catch (error) {
		console.error("Clipboard API copy failed", error);
	}

	try {
		const textarea = document.createElement("textarea");
		textarea.value = text;
		textarea.setAttribute("readonly", "");
		textarea.style.position = "fixed";
		textarea.style.left = "-9999px";
		document.body.appendChild(textarea);
		textarea.select();
		const ok = document.execCommand("copy");
		document.body.removeChild(textarea);
		return ok;
	} catch (error) {
		console.error("Fallback copy failed", error);
		return false;
	}
}

export function WritingCodeBlock({
	children,
	className = "",
}: WritingCodeBlockProps) {
	const [copied, setCopied] = useState(false);
	const language = extractLanguage(children);

	const onCopy = useCallback(async () => {
		const text = codeTextFromChildren(children);
		if (!text) {
			return;
		}
		const ok = await copyText(text);
		if (!ok) {
			return;
		}
		setCopied(true);
		window.setTimeout(() => setCopied(false), 2000);
	}, [children]);

	return (
		<div className="not-prose my-6 overflow-hidden rounded-xl border border-border bg-surface-solid">
			<div className="flex h-11 items-center justify-between gap-3 border-b border-border px-3">
				<span className="font-mono text-xs tracking-wide text-muted">
					{language ?? "code"}
				</span>
				<button
					type="button"
					onClick={onCopy}
					className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-sm text-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
					aria-label={copied ? "Copied" : "Copy code"}
				>
					{copied ? "Copied" : "Copy"}
				</button>
			</div>
			<pre
				className={`overflow-x-auto p-4 font-mono text-sm leading-relaxed text-foreground ${className}`}
			>
				{children}
			</pre>
		</div>
	);
}

function codeTextFromChildren(children: ReactNode): string {
	const child = Children.toArray(children)[0];
	if (typeof child === "string") {
		return child;
	}
	if (!isValidElement(child)) {
		return collectText(children);
	}
	const nested = (child.props as { children?: ReactNode }).children;
	return collectText(nested ?? child);
}

function collectText(node: ReactNode): string {
	return Children.toArray(node)
		.map((child) => {
			if (typeof child === "string" || typeof child === "number") {
				return String(child);
			}
			if (isValidElement(child)) {
				return collectText((child.props as { children?: ReactNode }).children);
			}
			return "";
		})
		.join("");
}
