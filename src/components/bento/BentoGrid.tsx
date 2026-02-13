"use client";

import { AboutCard } from "./AboutCard";
import { HighlightsCard } from "./HighlightsCard";
import { SkillsCard } from "./SkillsCard";
import { CertificationsCard } from "./CertificationsCard";
import { EducationCard } from "./EducationCard";
import { ExperienceCard } from "./ExperienceCard";
import { ContactCard } from "./ContactCard";

export function BentoGrid() {
	return (
		<div className="mx-auto max-w-6xl px-6 pb-24">
			<div className="flex flex-col gap-6">
				{/* About + Highlights - flex row, each 50%, same total width as Skills */}
				<div className="flex w-full min-w-0 flex-col gap-6 md:flex-row">
					<div className="flex min-w-0 flex-1" id="about">
						<AboutCard />
					</div>
					<div className="flex min-w-0 flex-1">
						<HighlightsCard />
					</div>
				</div>

				{/* Skills - full width, identical to About+Highlights row above */}
				<div className="flex w-full min-w-0">
					<SkillsCard />
				</div>

				{/* Certifications + Contact & Languages - equal height via grid */}
				<div className="grid w-full min-w-0 grid-cols-1 gap-6 md:grid-cols-[2fr_1fr]">
					<div className="flex min-h-0 min-w-0" id="certifications">
						<CertificationsCard />
					</div>
					<div className="flex min-h-0 min-w-0 flex-col" id="contact">
						<ContactCard />
					</div>
				</div>

				{/* Education */}
				<div className="w-full">
					<EducationCard />
				</div>

				{/* Experience */}
				<div className="w-full" id="experience">
					<ExperienceCard />
				</div>
			</div>
		</div>
	);
}
