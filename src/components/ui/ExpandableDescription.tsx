"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";
import { useReduceEffects } from "@/components/providers/ReduceEffectsProvider";

const springTransition = {
	type: "spring" as const,
	stiffness: 180,
	damping: 28,
};

const instantTransition = { duration: 0 };

interface ExpandableDescriptionProps {
	html: string;
	maxBullets?: number;
	maxChars?: number;
	className?: string;
}

function truncateListHtml(html: string, maxBullets: number): {
	truncated: string;
	full: string;
	needsExpand: boolean;
} {
	const liMatches = html.match(/<li>[\s\S]*?<\/li>/g);
	if (!liMatches || liMatches.length <= maxBullets) {
		return { truncated: html, full: html, needsExpand: false };
	}
	const truncated = "<ul>" + liMatches.slice(0, maxBullets).join("") + "</ul>";
	return { truncated, full: html, needsExpand: true };
}

function truncatePlainText(html: string, maxChars: number): {
	truncated: string;
	full: string;
	needsExpand: boolean;
} {
	const stripped = html.replace(/<[^>]*>/g, "").trim();
	if (stripped.length <= maxChars) {
		return { truncated: html, full: html, needsExpand: false };
	}
	const truncated = stripped.slice(0, maxChars).trim() + "…";
	return {
		truncated: `<p>${truncated}</p>`,
		full: html,
		needsExpand: true,
	};
}

export function ExpandableDescription({
	html,
	maxBullets = 4,
	maxChars = 300,
	className = "",
}: ExpandableDescriptionProps) {
	const [isOpen, setIsOpen] = useState(false);
	const prefersReducedMotion = useReducedMotion();
	const { reduceEffects } = useReduceEffects();
	const skipAnimations = reduceEffects || prefersReducedMotion;
	const contentId = useId();
	const triggerId = useId();

	const isList = /<ul>[\s\S]*<\/ul>/.test(html);
	const { truncated, full, needsExpand } = isList
		? truncateListHtml(html, maxBullets)
		: truncatePlainText(html, maxChars);

	const displayHtml = needsExpand && !isOpen ? truncated : full;

	if (!html.trim()) return null;

	return (
		<div className={className}>
			<div
				id={contentId}
				className="prose prose-sm dark:prose-invert max-w-none text-muted [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1"
				dangerouslySetInnerHTML={{ __html: displayHtml }}
			/>
			<AnimatePresence initial={false}>
				{needsExpand && (
					<motion.div
						initial={false}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="mt-2"
					>
						<button
							type="button"
							onClick={() => setIsOpen(!isOpen)}
							aria-expanded={isOpen}
							aria-controls={contentId}
							aria-label={isOpen ? "Show less" : "Show more"}
							id={triggerId}
							className="group flex min-h-[44px] min-w-[44px] cursor-pointer items-center gap-2 rounded-lg py-2 font-medium text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
						>
							<span>{isOpen ? "Show less" : "Show more"}</span>
							<motion.span
								className="inline-block text-muted transition-colors group-hover:text-accent"
								animate={{ rotate: isOpen ? 180 : 0 }}
								transition={
									skipAnimations ? instantTransition : springTransition
								}
								aria-hidden
							>
								<svg
									className="h-4 w-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-hidden
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</motion.span>
						</button>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
