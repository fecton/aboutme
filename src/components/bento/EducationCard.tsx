"use client";

import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { ExpandableTagList } from "@/components/ui/ExpandableTagList";
import { educations } from "@/data/education";
import { motion, useReducedMotion } from "framer-motion";
import { useReduceEffects } from "@/components/providers/ReduceEffectsProvider";

const DIPLOMA_VIEWER_PATH = "/pdf/diploma.pdf";
const DIPLOMA_SUPPLEMENT_VIEWER_PATH = "/pdf/diploma-suplement.pdf";

const springTransition = {
	type: "spring" as const,
	stiffness: 300,
	damping: 30,
};

export function EducationCard() {
	const { reduceEffects } = useReduceEffects();
	const prefersReducedMotion = useReducedMotion();
	const skipAnimations = reduceEffects || prefersReducedMotion;

	return (
		<GlassCard>
			<h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
				Education
			</h2>
			<div className="space-y-6">
				{educations.map((edu, index) => (
					<motion.article
						key={edu.university_title + edu.specialty_title}
						className="rounded-xl border border-border bg-surface p-6"
						initial={skipAnimations ? false : { opacity: 0, y: 20 }}
						animate={skipAnimations ? { opacity: 1, y: 0 } : undefined}
						whileInView={skipAnimations ? undefined : { opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ ...springTransition, delay: index * 0.1 }}
					>
						<div className="mb-2 flex flex-wrap items-center justify-between gap-2">
							<h3 className="font-semibold text-foreground">
								{edu.specialty_title}
							</h3>
							<span className="rounded-full bg-accent/25 px-2 py-0.5 text-xs text-accent-dark dark:bg-accent/90 dark:text-white">
								Graduated
							</span>
						</div>
						<div className="mb-2">
							{edu.university_link ? (
								<a
									href={edu.university_link}
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted hover:text-accent"
								>
									{edu.university_title}
								</a>
							) : (
								<span className="text-muted">{edu.university_title}</span>
							)}
						</div>
						<p className="mb-4 text-sm text-muted">{edu.dates}</p>
						{(edu.diploma_pdf || edu.diploma_supplement_pdf) && (
							<div className="mb-4 flex gap-4">
								{edu.diploma_pdf &&
									(edu.diploma_pdf === DIPLOMA_VIEWER_PATH ? (
										<Link
											href="/viewer/diploma"
											className="text-sm text-accent hover:underline"
										>
											View Diploma
										</Link>
									) : (
										<a
											href={edu.diploma_pdf}
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm text-accent hover:underline"
										>
											View Diploma
										</a>
									))}
								{edu.diploma_supplement_pdf &&
									(edu.diploma_supplement_pdf === DIPLOMA_SUPPLEMENT_VIEWER_PATH ? (
										<Link
											href="/viewer/diploma-supplement"
											className="text-sm text-accent hover:underline"
										>
											View Diploma Supplement
										</Link>
									) : (
										<a
											href={edu.diploma_supplement_pdf}
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm text-accent hover:underline"
										>
											View Diploma Supplement
										</a>
									))}
							</div>
						)}
						<div
							className="prose prose-sm dark:prose-invert max-w-none text-muted"
							dangerouslySetInnerHTML={{ __html: edu.description }}
						/>
						{edu.disciplines && (
							<ExpandableTagList
								title="Courses & Disciplines"
								items={[edu.disciplines]}
							/>
						)}
					</motion.article>
				))}
			</div>
		</GlassCard>
	);
}
