"use client";

import { useCallback, useState } from "react";

interface ShareButtonsProps {
	slug: string;
}

const SITE_URL = "https://alytvynenko.net";

export function ShareButtons({ slug }: ShareButtonsProps) {
	const [copied, setCopied] = useState(false);
	const url = `${SITE_URL}/blog/${slug}/`;

	const handleCopyLink = useCallback(async () => {
		try {
			await navigator.clipboard.writeText(url);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch {
			/* clipboard API not available */
		}
	}, [url]);

	return (
		<button
			type="button"
			onClick={handleCopyLink}
			aria-label={copied ? "Link copied" : "Copy link"}
			className="flex h-9 items-center gap-1.5 rounded-lg border border-border bg-surface px-3 text-sm text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
		>
			{copied ? (
				<>
					<svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
					</svg>
					Copied!
				</>
			) : (
				<>
					<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
					</svg>
					Copy link
				</>
			)}
		</button>
	);
}
