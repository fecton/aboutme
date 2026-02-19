"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { ExpandableTagList } from "@/components/ui/ExpandableTagList";
import { projects } from "@/data/projects";
import { motion, useReducedMotion } from "framer-motion";
import { useReduceEffects } from "@/components/providers/ReduceEffectsProvider";

const springTransition = {
	type: "spring" as const,
	stiffness: 300,
	damping: 30,
};

export function PortfolioCard() {
	const { reduceEffects } = useReduceEffects();
	const prefersReducedMotion = useReducedMotion();
	const skipAnimations = reduceEffects || prefersReducedMotion;

	return (
		<GlassCard>
			<h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
				Portfolio
			</h2>
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{projects.map((project, index) => (
					<motion.article
						key={project.title + project.link}
						className="rounded-xl border border-border bg-surface p-4"
						initial={skipAnimations ? false : { opacity: 0, y: 10 }}
						animate={skipAnimations ? { opacity: 1, y: 0 } : undefined}
						whileInView={skipAnimations ? undefined : { opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ ...springTransition, delay: index * 0.05 }}
						whileHover={!skipAnimations ? { scale: 1.02 } : undefined}
					>
						<div className="mb-2 flex flex-wrap items-center justify-between gap-2">
							<h3 className="font-semibold text-foreground">{project.title}</h3>
							{project.year && (
								<span className="rounded-full border border-border bg-surface px-2 py-0.5 text-xs text-muted">
									{project.year}
								</span>
							)}
						</div>
						<p className="mb-4 text-sm text-muted">{project.description}</p>
						<ExpandableTagList
							title="Technologies"
							items={[project.technologies]}
							className="mb-4"
						/>
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="group inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-accent/25 px-3 py-1.5 text-center text-xs font-medium text-accent-dark transition-colors hover:bg-accent/35 hover:underline dark:bg-accent/50 dark:text-accent-light dark:hover:bg-accent/65"
							aria-label={`${project.linkLabel ?? "View project"} - ${project.title} (opens in new tab)`}
						>
							{project.linkLabel ?? "View on GitHub"}
						</a>
					</motion.article>
				))}
			</div>
		</GlassCard>
	);
}
