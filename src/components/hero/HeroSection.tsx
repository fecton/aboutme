"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const springTransition = {
	type: "spring" as const,
	stiffness: 300,
	damping: 30,
};

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: springTransition,
	},
};

export function HeroSection() {
	return (
		<section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
			{/* Gradient mesh background */}
			<div
				className="pointer-events-none absolute inset-0 opacity-30"
				aria-hidden
			>
				<div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-accent/20 blur-[120px]" />
				<div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />
				<div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[100px]" />
			</div>

			<div className="relative mx-auto max-w-6xl px-6">
				<motion.div
					className="flex flex-col items-center text-center"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					<motion.div variants={itemVariants} className="mb-6">
						<Image
							src={profile.profileImage}
							alt="Andrii Lytvynenko, Senior DevOps and Cloud Engineer with expertise in AWS, Kubernetes, and cloud infrastructure"
							width={250}
							height={250}
							priority
							className="rounded-full border-2 border-white/10 object-cover"
						/>
					</motion.div>

					<motion.div
						variants={itemVariants}
						className="mb-3 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-[20px]"
					>
						<span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
						<span className="text-sm text-apple-gray">{profile.availability}</span>
					</motion.div>

					<motion.h1
						variants={itemVariants}
						className="mb-2 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
					>
						Hello! I am {profile.name}
					</motion.h1>

					<motion.p
						variants={itemVariants}
						className="mb-1 text-xl font-bold text-white md:text-2xl"
					>
						{profile.title}
					</motion.p>

					<motion.p
						variants={itemVariants}
						className="mb-8 text-lg text-apple-gray"
					>
						{profile.subtitle}
					</motion.p>

					<motion.div
						variants={itemVariants}
						className="flex flex-wrap justify-center gap-4"
					>
						<a
							href={profile.resumeUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="rounded-xl border border-white/10 bg-accent px-6 py-3 font-medium text-white transition-all hover:bg-accent-dark focus-visible:ring-2 focus-visible:ring-white/20"
							download="Andrii_Lytvynenko_Resume.pdf"
						>
							Download Resume
						</a>
						<a
							href={profile.coverLetterUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur-[20px] transition-all hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/20"
							download="Andrii_Lytvynenko_Cover_Letter.pdf"
						>
							Download Cover Letter
						</a>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
