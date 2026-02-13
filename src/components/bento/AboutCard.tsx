"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { profile } from "@/data/profile";

export function AboutCard() {
	return (
		<GlassCard>
			<h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
				About Me
			</h2>
			<p className="mb-4 leading-relaxed text-apple-gray">
				{profile.bio.intro}
			</p>
			<p className="mb-4 leading-relaxed text-apple-gray">
				{profile.bio.experience}
			</p>
			<p className="leading-relaxed text-apple-gray">
				{profile.bio.passion}
			</p>
		</GlassCard>
	);
}
