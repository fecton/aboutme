"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
	return (
		<motion.nav
			className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-surface backdrop-blur-[20px]"
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ type: "spring", stiffness: 300, damping: 30 }}
		>
			<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
				<Link
					href="/"
					className="text-lg font-bold tracking-tight text-foreground transition-colors hover:text-accent"
					aria-label="Go to homepage"
				>
					AL Tech Solutions
				</Link>
				<div className="flex items-center gap-8">
					<Link
						href="/#about"
						className="text-sm text-muted transition-colors hover:text-foreground"
					>
						About
					</Link>
					<Link
						href="/#experience"
						className="text-sm text-muted transition-colors hover:text-foreground"
					>
						Experience
					</Link>
					<Link
						href="/#contact"
						className="text-sm text-muted transition-colors hover:text-foreground"
					>
						Contact
					</Link>
					<Link
						href="/privacy-policy"
						className="text-sm text-muted transition-colors hover:text-foreground"
					>
						Privacy
					</Link>
					<ThemeToggle />
				</div>
			</div>
		</motion.nav>
	);
}
