"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState, useMemo } from "react";
import {
	getCategoryForDiscipline,
	getCanonicalForDiscipline,
	SKILL_CATEGORIES,
} from "@/data/skillIcons";

const springTransition = {
	type: "spring" as const,
	stiffness: 180,
	damping: 28,
};

const instantTransition = { duration: 0 };

interface CategorizedTagListProps {
	title: string;
	items: string[];
	className?: string;
	tagClassName?: string;
	getIcon?: (
		item: string
	) => { path: string; title?: string; viewBox?: string } | null;
}

export function CategorizedTagList({
	title,
	items,
	className = "",
	tagClassName = "",
	getIcon,
}: CategorizedTagListProps) {
	const [isOpen, setIsOpen] = useState(false);
	const prefersReducedMotion = useReducedMotion();

	const { parsedItems, groupedByCategory } = useMemo(() => {
		const parsed = items
			.flatMap((s) => s.split(/,\s*/))
			.map((s) => s.trim().replace(/\.$/, ""))
			.filter(Boolean);

		const grouped: Record<string, string[]> = {};
		const seen: Record<string, Set<string>> = {};

		for (const item of parsed) {
			const cat = getCategoryForDiscipline(item);
			const canonical = getCanonicalForDiscipline(item);
			if (!grouped[cat]) grouped[cat] = [];
			if (!seen[cat]) seen[cat] = new Set();
			if (seen[cat].has(canonical)) continue;
			seen[cat].add(canonical);
			grouped[cat].push(canonical !== item ? canonical : item);
		}

		return { parsedItems: parsed, groupedByCategory: grouped };
	}, [items]);

	if (parsedItems.length === 0) return null;

	// Ordered category ids (excluding empty; "other" last)
	const orderedCategories = SKILL_CATEGORIES.filter(
		(c) => groupedByCategory[c.id]?.length
	).map((c) => c.id);

	// Ensure "other" is last if present
	const otherIdx = orderedCategories.indexOf("other");
	if (otherIdx >= 0 && otherIdx < orderedCategories.length - 1) {
		orderedCategories.splice(otherIdx, 1);
		orderedCategories.push("other");
	}

	const contentId = `${title.replace(/\s+/g, "-").toLowerCase()}-content`;
	const triggerId = `${title.replace(/\s+/g, "-").toLowerCase()}-trigger`;

	return (
		<div className={`mt-4 ${className}`}>
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				aria-expanded={isOpen}
				aria-controls={contentId}
				aria-label={isOpen ? `Collapse ${title}` : `Expand to show ${title}`}
				id={triggerId}
				className="group flex w-full cursor-pointer items-center justify-between gap-2 rounded-lg py-1 font-medium text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
			>
				<span>{title}</span>
				<motion.span
					className="inline-block text-muted transition-colors group-hover:text-accent"
					animate={{ rotate: isOpen ? 180 : 0 }}
					transition={prefersReducedMotion ? instantTransition : springTransition}
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
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						id={contentId}
						initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
						animate={{
							height: "auto",
							opacity: 1,
							transition: prefersReducedMotion
								? instantTransition
								: {
										height: springTransition,
										opacity: { duration: 0.35 },
									},
						}}
						exit={
							prefersReducedMotion
								? { height: 0, opacity: 0, transition: instantTransition }
								: {
										height: 0,
										opacity: 0,
										transition: {
											height: { ...springTransition, stiffness: 350 },
											opacity: { duration: 0.25 },
										},
									}
						}
						className="overflow-hidden"
					>
						<motion.div
							className="mt-2 flex flex-col gap-4"
							initial="hidden"
							animate="visible"
							variants={{
								visible: {
									transition: prefersReducedMotion
										? {}
										: {
												staggerChildren: 0.065,
												delayChildren: 0.12,
											},
								},
								hidden: {},
							}}
						>
							{orderedCategories.map((catId) => {
								const cat = SKILL_CATEGORIES.find((c) => c.id === catId);
								const catItems = groupedByCategory[catId] ?? [];
								if (!cat || catItems.length === 0) return null;

								return (
									<motion.div
										key={catId}
										variants={{
											visible: {
												opacity: 1,
												scale: 1,
												y: 0,
											},
											hidden: prefersReducedMotion
												? { opacity: 1, scale: 1, y: 0 }
												: {
														opacity: 0,
														scale: 0.85,
														y: 4,
													},
										}}
										transition={
											prefersReducedMotion ? instantTransition : springTransition
										}
									>
										<h4 className="mb-1.5 text-sm font-medium text-muted">
											{cat.title}
										</h4>
										<div className="flex flex-wrap gap-2">
											{catItems.map((item, index) => {
												const iconData = getIcon?.(item);
												return (
													<motion.span
														key={`${item}-${index}`}
														variants={{
															visible: {
																opacity: 1,
																scale: 1,
																y: 0,
															},
															hidden: prefersReducedMotion
																? { opacity: 1, scale: 1, y: 0 }
																: {
																		opacity: 0,
																		scale: 0.85,
																		y: 4,
																	},
														}}
														transition={
															prefersReducedMotion
																? instantTransition
																: springTransition
														}
														className={`flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2 py-1 text-xs text-muted transition-colors hover:border-accent/30 hover:bg-accent/10 hover:text-foreground ${tagClassName}`}
													>
														{iconData && (
															<svg
																className="h-3.5 w-3.5 shrink-0"
																fill="currentColor"
																viewBox={iconData.viewBox ?? "0 0 24 24"}
																aria-hidden
															>
																<path d={iconData.path} />
															</svg>
														)}
														{item}
													</motion.span>
												);
											})}
										</div>
									</motion.div>
								);
							})}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
