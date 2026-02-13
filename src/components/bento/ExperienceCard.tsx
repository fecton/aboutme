"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { experiences } from "@/data/experiences";
import { motion } from "framer-motion";

const springTransition = {
	type: "spring" as const,
	stiffness: 300,
	damping: 30,
};

export function ExperienceCard() {
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
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ ...springTransition, delay: index * 0.05 }}
					>
						<div className="mb-2 flex flex-wrap items-center justify-between gap-2">
							<h3 className="font-semibold text-foreground">{exp.position}</h3>
							<div className="flex gap-2">
								{exp.present && (
									<span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700 dark:bg-green-500/20 dark:text-green-400">
										Current
									</span>
								)}
								<span
									className={`rounded-full px-2 py-0.5 text-xs ${
										exp.work_mode.toLowerCase() === "remote"
											? "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400"
											: "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400"
									}`}
								>
									{exp.work_mode}
								</span>
							</div>
						</div>
						<div className="mb-2 flex flex-wrap gap-2 text-sm text-muted">
							<span>
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
							<span>
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
						<div
							className="prose prose-sm dark:prose-invert max-w-none text-muted [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1"
							dangerouslySetInnerHTML={{ __html: exp.description }}
						/>
						{exp.disciplines && (
							<details className="mt-4">
								<summary className="cursor-pointer font-medium text-foreground">
									Technologies & Skills
								</summary>
								<div className="mt-2 flex flex-wrap gap-2">
									{exp.disciplines
										.split(/,\s*/)
										.filter((s) => s.trim())
										.map((skill, index) => (
											<span
												key={`${skill}-${index}`}
												className="rounded-lg border border-border bg-surface px-2 py-1 text-xs text-muted"
											>
												{skill.replace(/\.$/, "")}
											</span>
										))}
								</div>
							</details>
						)}
					</motion.article>
				))}
			</div>
		</GlassCard>
	);
}
