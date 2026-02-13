"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { profile } from "@/data/profile";
import { skillIconMap } from "@/data/skillIcons";
import { motion, useReducedMotion } from "framer-motion";
import { useReduceEffects } from "@/components/providers/ReduceEffectsProvider";

const springTransition = {
	type: "spring" as const,
	stiffness: 300,
	damping: 30,
};

const iconPaths: Record<string, string> = {
	cloud: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z",
	cogs: "M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z",
	cubes: "M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 013 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9zM12 4.15L6.04 7.5 12 10.85l5.96-3.35L12 4.15zM5 15.91l6 3.38v-6.76L5 9.15v6.76zm14 0v-6.76l-6 3.38v6.76l6-3.38zm-6.5-9.41l5.96 3.35L12 10.85 6.04 7.5 12 4.15z",
	refresh: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z",
	chart: "M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z",
	code: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",
};

export function SkillsCard() {
	const { reduceEffects } = useReduceEffects();
	const prefersReducedMotion = useReducedMotion();
	const skipAnimations = reduceEffects || prefersReducedMotion;

	return (
		<GlassCard>
			<h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
				Technical Skills
			</h2>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{profile.skills.map((category, categoryIndex) => (
					<motion.div
						key={category.title}
						className="rounded-xl border border-border bg-surface p-4"
						initial={skipAnimations ? false : { opacity: 0, y: 10 }}
						animate={skipAnimations ? { opacity: 1, y: 0 } : undefined}
						whileInView={skipAnimations ? undefined : { opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ ...springTransition, delay: categoryIndex * 0.05 }}
					>
						<h4 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
							<svg
								className="h-4 w-4 text-accent"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d={iconPaths[category.icon] || ""} />
							</svg>
							{category.title}
						</h4>
						<div className="flex flex-wrap gap-2">
							{category.skills.map((skill) => {
								const iconData = skillIconMap[skill];
								return (
									<span
										key={skill}
										className="flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm border border-border bg-surface text-muted"
									>
										{iconData && (
											<svg
												className="h-3.5 w-3.5 shrink-0"
												fill="currentColor"
												viewBox="0 0 24 24"
												aria-hidden
											>
												<path d={iconData.path} />
											</svg>
										)}
										{skill}
									</span>
								);
							})}
						</div>
					</motion.div>
				))}
			</div>
		</GlassCard>
	);
}
