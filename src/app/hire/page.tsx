import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HireHero } from "@/components/hire/HireHero";
import { HireAudience } from "@/components/hire/HireAudience";
import { HirePackages } from "@/components/hire/HirePackages";
import { HireProof } from "@/components/hire/HireProof";
import { HireEngage } from "@/components/hire/HireEngage";
import { HireFaq } from "@/components/hire/HireFaq";
import { HireContact } from "@/components/hire/HireContact";
import { hirePageMeta } from "@/data/hire";

const SITE_URL = "https://alytvynenko.net";
const PROFILE_IMAGE = `${SITE_URL}/images/tm-easy-profile.webp`;
const HIRE_URL = `${SITE_URL}/hire/`;

export const metadata: Metadata = {
	title: hirePageMeta.title,
	description: hirePageMeta.description,
	robots: { index: true, follow: true },
	alternates: { canonical: HIRE_URL },
	openGraph: {
		title: hirePageMeta.title,
		description: hirePageMeta.description,
		url: HIRE_URL,
		images: [
			{
				url: PROFILE_IMAGE,
				width: 250,
				height: 250,
				alt: "Andrii Lytvynenko",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: hirePageMeta.title,
		description: hirePageMeta.description,
		images: [PROFILE_IMAGE],
	},
};

export default function HirePage() {
	return (
		<>
			<Navbar />
			<main id="main-content">
				<HireHero />
				<div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
					<div className="flex flex-col gap-12 md:gap-16">
						<HireAudience />
						<HirePackages />
						<HireProof />
						<HireEngage />
						<HireFaq />
						<HireContact />
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
