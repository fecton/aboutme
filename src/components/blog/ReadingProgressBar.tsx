"use client";

import { useEffect, useState } from "react";

interface ReadingProgressBarProps {
	targetId: string;
}

export function ReadingProgressBar({ targetId }: ReadingProgressBarProps) {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const update = () => {
			const el = document.getElementById(targetId);
			if (!el) return;

			const rect = el.getBoundingClientRect();
			const elTop = rect.top + window.scrollY;
			const elBottom = elTop + rect.height;
			const scrollBottom = window.scrollY + window.innerHeight;
			const trackable = elBottom - window.innerHeight;

			if (trackable <= elTop) {
				setProgress(1);
				return;
			}

			const pct = (window.scrollY - elTop) / (trackable - elTop);
			setProgress(Math.max(0, Math.min(pct, 1)));
		};

		update();
		window.addEventListener("scroll", update, { passive: true });
		window.addEventListener("resize", update, { passive: true });
		return () => {
			window.removeEventListener("scroll", update);
			window.removeEventListener("resize", update);
		};
	}, [targetId]);

	return (
		<div
			className="fixed left-0 top-0 z-[60] h-[3px] w-full"
			role="progressbar"
			aria-valuenow={Math.round(progress * 100)}
			aria-valuemin={0}
			aria-valuemax={100}
			aria-label="Reading progress"
		>
			<div
				className="h-full bg-accent transition-[width] duration-150 ease-out"
				style={{ width: `${progress * 100}%` }}
			/>
		</div>
	);
}
