"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { ExpandableDescription } from "@/components/ui/ExpandableDescription";
import { CategorizedTagList } from "@/components/ui/CategorizedTagList";
import { experiences } from "@/data/experiences";
import { getIconForDiscipline } from "@/data/skillIcons";
import { motion, useReducedMotion } from "framer-motion";
import { useReduceEffects } from "@/components/providers/ReduceEffectsProvider";
import { springTransition } from "@/lib/animations";

export function ExperienceCard() {
	const { reduceEffects } = useReduceEffects();
	const prefersReducedMotion = useReducedMotion();
	const skipAnimations = reduceEffects || prefersReducedMotion;

	return (
		<GlassCard>
			<h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
				Experience
			</h2>
			<div className="space-y-6">
				{experiences.map((exp, index) => (
					<motion.article
						key={exp.company + exp.position + exp.dates}
						className={`rounded-xl border p-6 ${
							exp.present
								? "border-accent/30 bg-accent/5"
								: "border-border bg-surface"
						}`}
						initial={skipAnimations ? false : { opacity: 0, y: 20 }}
						animate={skipAnimations ? { opacity: 1, y: 0 } : undefined}
						whileInView={skipAnimations ? undefined : { opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ ...springTransition, delay: index * 0.05 }}
					>
						<div className="mb-2 flex flex-wrap items-center justify-between gap-2">
							<h3 className="font-semibold text-foreground">{exp.position}</h3>
							<div className="flex gap-2">
								{exp.present && (
									<span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800 dark:bg-green-900/95 dark:text-green-100">
										Current
									</span>
								)}
								<span
									className={`rounded-full px-2 py-0.5 text-xs ${
										exp.work_mode.toLowerCase() === "remote"
											? "bg-blue-100 text-blue-800 dark:bg-blue-900/95 dark:text-blue-100"
											: "bg-amber-100 text-amber-800 dark:bg-amber-900/95 dark:text-amber-100"
									}`}
								>
									{exp.work_mode}
								</span>
							</div>
						</div>
						<div className="mb-2 flex flex-wrap items-center gap-2 text-sm text-muted">
							<span className="flex items-center gap-2">
								{exp.company_logo && (
									<img
										src={`/images/companies/${exp.company_logo}`}
										alt={`${exp.company} logo`}
										width={40}
										height={40}
										loading="lazy"
										className="shrink-0 rounded-lg"
									/>
								)}
								{exp.company_link ? (
									<a
										href={exp.company_link}
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-accent"
									>
										{exp.company}
									</a>
								) : (
									exp.company
								)}
							</span>
							<span>•</span>
							<span className="flex items-center gap-2">
								{exp.client_logo && (
									<img
										src={`/images/companies/${exp.client_logo}`}
										alt={`${exp.client} logo`}
										width={40}
										height={40}
										loading="lazy"
										className="shrink-0 rounded-lg"
									/>
								)}
								{exp.client_link ? (
									<a
										href={exp.client_link}
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-accent"
									>
										{exp.client}
									</a>
								) : (
									exp.client
								)}
							</span>
						</div>
						<p className="mb-4 text-sm text-muted">{exp.dates}</p>
						<ExpandableDescription html={exp.description} />
						{exp.disciplines && (
							<CategorizedTagList
								title="Technologies & Skills"
								items={[exp.disciplines]}
								getIcon={getIconForDiscipline}
							/>
						)}
					</motion.article>
				))}
			</div>
		</GlassCard>
	);
}
