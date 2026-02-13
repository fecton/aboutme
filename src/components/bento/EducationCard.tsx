"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { educations } from "@/data/education";
import { motion } from "framer-motion";

const springTransition = {
	type: "spring" as const,
	stiffness: 300,
	damping: 30,
};

export function EducationCard() {
	return (
		<GlassCard>
			<h2 className="mb-6 text-2xl font-bold tracking-tight text-white">
				Education
			</h2>
			<div className="space-y-6">
				{educations.map((edu, index) => (
					<motion.article
						key={edu.university_title + edu.specialty_title}
						className="rounded-xl border border-white/10 bg-white/5 p-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ ...springTransition, delay: index * 0.1 }}
					>
						<div className="mb-2 flex flex-wrap items-center justify-between gap-2">
							<h3 className="font-semibold text-white">
								{edu.specialty_title}
							</h3>
							<span className="rounded-full bg-accent/20 px-2 py-0.5 text-xs text-accent">
								Graduated
							</span>
						</div>
						<div className="mb-2">
							{edu.university_link ? (
								<a
									href={edu.university_link}
									target="_blank"
									rel="noopener noreferrer"
									className="text-apple-gray hover:text-accent"
								>
									{edu.university_title}
								</a>
							) : (
								<span className="text-apple-gray">{edu.university_title}</span>
							)}
						</div>
						<p className="mb-4 text-sm text-apple-gray">{edu.dates}</p>
						{(edu.diploma_pdf || edu.diploma_suplement_pdf) && (
							<div className="mb-4 flex gap-4">
								{edu.diploma_pdf && (
									<a
										href={edu.diploma_pdf}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm text-accent hover:underline"
									>
										View Diploma
									</a>
								)}
								{edu.diploma_suplement_pdf && (
									<a
										href={edu.diploma_suplement_pdf}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm text-accent hover:underline"
									>
										View Diploma Supplement
									</a>
								)}
							</div>
						)}
						<div
							className="prose prose-invert prose-sm max-w-none text-apple-gray"
							dangerouslySetInnerHTML={{ __html: edu.description }}
						/>
						{edu.disciplines && (
							<details className="mt-4">
								<summary className="cursor-pointer font-medium text-white">
									Courses & Disciplines
								</summary>
								<div className="mt-2 flex flex-wrap gap-2">
									{edu.disciplines
										.split(/,\s*/)
										.filter((d) => d.trim())
										.map((discipline, index) => (
											<span
												key={`${discipline}-${index}`}
												className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-apple-gray"
											>
												{discipline.replace(/\.$/, "")}
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
