"use client";

import { useEffect, useState } from "react";

export function ReadingToolbar() {
	const [showTop, setShowTop] = useState(false);

	useEffect(() => {
		const handleScroll = () => setShowTop(window.scrollY > 400);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	if (!showTop) return null;

	return (
		<div className="fixed bottom-6 right-6 z-40">
			<button
				type="button"
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				aria-label="Scroll to top"
				className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-muted shadow-lg backdrop-blur-[20px] transition-colors hover:bg-surface-hover hover:text-foreground"
			>
				<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
				</svg>
			</button>
		</div>
	);
}
