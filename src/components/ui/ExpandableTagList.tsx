"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { softSpringTransition as springTransition, instantTransition } from "@/lib/animations";

interface ExpandableTagListProps {
	title: string;
	items: string[];
	className?: string;
	tagClassName?: string;
	getIcon?: (
		item: string
	) => { path: string; title?: string; viewBox?: string } | null;
}

export function ExpandableTagList({
	title,
	items,
	className = "",
	tagClassName = "",
	getIcon,
}: ExpandableTagListProps) {
	const [isOpen, setIsOpen] = useState(false);
	const prefersReducedMotion = useReducedMotion();
	const parsedItems = items
		.flatMap((s) => s.split(/,\s*/))
		.map((s) => s.trim().replace(/\.$/, ""))
		.filter(Boolean);

	if (parsedItems.length === 0) return null;

	return (
		<div className={`mt-4 ${className}`}>
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				aria-expanded={isOpen}
				aria-controls={`${title.replace(/\s+/g, "-").toLowerCase()}-content`}
				aria-label={isOpen ? `Collapse ${title}` : `Expand to show ${title}`}
				id={`${title.replace(/\s+/g, "-").toLowerCase()}-trigger`}
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
						id={`${title.replace(/\s+/g, "-").toLowerCase()}-content`}
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
							className="mt-2 flex flex-wrap gap-2"
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
							{parsedItems.map((item, index) => {
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
										transition={prefersReducedMotion ? instantTransition : springTransition}
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
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
