"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { profile } from "@/data/profile";
import { motion, useReducedMotion } from "framer-motion";
import { useReduceEffects } from "@/components/providers/ReduceEffectsProvider";

const springTransition = {
	type: "spring" as const,
	stiffness: 300,
	damping: 30,
};

const highlightIconPaths: Record<string, string> = {
	briefcase:
		"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z",
	award: "M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H8v2h8v-2h-3v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z",
	chart: "M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z",
	shield:
		"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",
};

const highlightIcons = ["briefcase", "award", "chart", "shield"];

const trustBadgeIconPaths: Record<string, string> = {
	shield:
		"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",
	file: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z",
	briefcase:
		"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z",
	"map-marker":
		"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
};

export function HighlightsCard() {
	const { reduceEffects } = useReduceEffects();
	const prefersReducedMotion = useReducedMotion();
	const skipAnimations = reduceEffects || prefersReducedMotion;

	return (
		<GlassCard className="flex h-full flex-col">
			<h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
				Key Highlights
			</h2>
			<div className="flex min-h-0 flex-1 flex-col gap-6">
				<div className="grid min-h-0 flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
					{profile.highlights.map((highlight, index) => (
						<motion.div
							key={highlight.label}
							className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-surface p-4 text-center"
							initial={skipAnimations ? false : { opacity: 0, y: 10 }}
							animate={skipAnimations ? { opacity: 1, y: 0 } : undefined}
							whileInView={skipAnimations ? undefined : { opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ ...springTransition, delay: index * 0.05 }}
							whileHover={skipAnimations ? undefined : { scale: 1.03 }}
						>
							<svg
								className="h-5 w-5 shrink-0 text-accent"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-hidden
							>
								<path
									d={
										highlightIconPaths[
											highlightIcons[index] ?? "briefcase"
										] ?? ""
									}
								/>
							</svg>
							<div className="text-2xl font-bold text-accent md:text-3xl">
								{highlight.number}
							</div>
							<div className="text-sm text-muted">{highlight.label}</div>
						</motion.div>
					))}
				</div>
				<div className="border-t border-border pt-4">
					<h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
						Trust & Compliance
					</h3>
					<div className="flex flex-wrap gap-3">
						{profile.trustBadges.map((badge, index) => (
							<motion.span
								key={badge.title}
								className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-muted"
								title={badge.title}
								initial={skipAnimations ? false : { opacity: 0, y: 5 }}
								animate={skipAnimations ? { opacity: 1, y: 0 } : undefined}
								whileInView={skipAnimations ? undefined : { opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ ...springTransition, delay: 0.2 + index * 0.05 }}
							>
								<svg
									className="h-4 w-4 shrink-0 text-accent"
									fill="currentColor"
									viewBox="0 0 24 24"
									aria-hidden
								>
									<path
										d={
											trustBadgeIconPaths[badge.icon] ??
											trustBadgeIconPaths.shield
										}
									/>
								</svg>
								{badge.title}
							</motion.span>
						))}
					</div>
				</div>
			</div>
		</GlassCard>
	);
}
