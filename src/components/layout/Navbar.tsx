"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LiteModeToggle } from "@/components/ui/LiteModeToggle";
import { useReduceEffects } from "@/components/providers/ReduceEffectsProvider";

const navLinks = [
	{ href: "/#about", label: "About" },
	{ href: "/#experience", label: "Experience" },
	{ href: "/#contact", label: "Contact" },
	{ href: "/privacy-policy", label: "Privacy" },
];

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();
	const { reduceEffects } = useReduceEffects();

	// Close menu on route change or when clicking a link
	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

	const closeMenu = () => setIsMenuOpen(false);

	return (
		<motion.nav
			className={`fixed left-0 right-0 top-0 z-50 border-b border-border ${
				reduceEffects ? "bg-background" : "bg-surface backdrop-blur-[20px]"
			}`}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ type: "spring", stiffness: 300, damping: 30 }}
		>
			<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
				<Link
					href="/"
					className="text-lg font-bold tracking-tight text-foreground transition-colors hover:text-accent"
					aria-label="Go to homepage"
				>
					AL Tech Solutions
				</Link>

				{/* Desktop nav - hidden below md */}
				<div className="hidden items-center gap-4 md:flex md:gap-8">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="text-sm text-muted transition-colors hover:text-foreground"
						>
							{link.label}
						</Link>
					))}
					<LiteModeToggle />
					<ThemeToggle />
				</div>

				{/* Mobile: hamburger + lite mode + theme toggle */}
				<div className="flex items-center gap-2 md:hidden">
					<LiteModeToggle />
					<ThemeToggle />
					<button
						type="button"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-expanded={isMenuOpen}
						aria-controls="mobile-menu"
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}
						className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
					>
						<svg
							className="h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden
						>
							{isMenuOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						id="mobile-menu"
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="overflow-hidden border-t border-border md:hidden"
					>
						<div className="flex flex-col gap-1 px-4 py-4">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									onClick={closeMenu}
									className="min-h-[44px] flex items-center rounded-lg px-4 text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
								>
									{link.label}
								</Link>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
}
