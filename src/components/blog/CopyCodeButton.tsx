"use client";

import { useCallback, useRef, useState } from "react";

interface CodeBlockProps {
	children: React.ReactNode;
	className?: string;
	"data-language"?: string;
	[key: string]: unknown;
}

export function CodeBlock({
	children,
	"data-language": language,
	...props
}: CodeBlockProps) {
	const preRef = useRef<HTMLPreElement>(null);
	const [copied, setCopied] = useState(false);

	const handleCopy = useCallback(async () => {
		const text = (preRef.current?.textContent ?? "").trim();
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch {
			/* clipboard API not available */
		}
	}, []);

	return (
		<div className="group relative">
			{language && (
				<div className="absolute left-4 top-0 -translate-y-1/2 rounded-md bg-accent/15 px-2 py-0.5 text-xs font-medium text-accent">
					{language}
				</div>
			)}
			<pre ref={preRef} data-language={language} {...props}>
				{children}
			</pre>
			<button
				type="button"
				onClick={handleCopy}
				aria-label={copied ? "Copied" : "Copy code"}
				className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface text-muted opacity-0 transition-all hover:bg-surface-hover hover:text-foreground focus-visible:opacity-100 group-hover:opacity-100"
			>
				{copied ? (
					<svg
						className="h-4 w-4 text-green-500"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M5 13l4 4L19 7"
						/>
					</svg>
				) : (
					<svg
						className="h-4 w-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
						/>
					</svg>
				)}
			</button>
		</div>
	);
}
