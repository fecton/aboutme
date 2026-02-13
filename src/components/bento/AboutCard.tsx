"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { profile } from "@/data/profile";

export function AboutCard() {
	return (
		<GlassCard>
			<h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
				About Me
			</h2>
			<p className="mb-4 leading-relaxed text-muted">
				{profile.bio.intro}
			</p>
			<p className="mb-4 leading-relaxed text-muted">
				{profile.bio.experience}
			</p>
			<p className="leading-relaxed text-muted">
				{profile.bio.passion}
			</p>
		</GlassCard>
	);
}
