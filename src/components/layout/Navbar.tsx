"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Navbar() {
	return (
		<motion.nav
			className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/5 backdrop-blur-[20px]"
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ type: "spring", stiffness: 300, damping: 30 }}
		>
			<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
				<Link
					href="/"
					className="text-lg font-bold tracking-tight text-white transition-colors hover:text-accent"
					aria-label="Go to homepage"
				>
					AL Tech Solutions
				</Link>
				<div className="flex gap-8">
					<Link
						href="/#about"
						className="text-sm text-apple-gray transition-colors hover:text-white"
					>
						About
					</Link>
					<Link
						href="/#experience"
						className="text-sm text-apple-gray transition-colors hover:text-white"
					>
						Experience
					</Link>
					<Link
						href="/#contact"
						className="text-sm text-apple-gray transition-colors hover:text-white"
					>
						Contact
					</Link>
					<Link
						href="/privacy-policy"
						className="text-sm text-apple-gray transition-colors hover:text-white"
					>
						Privacy
					</Link>
				</div>
			</div>
		</motion.nav>
	);
}
