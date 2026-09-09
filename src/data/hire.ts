export interface HirePackage {
	id: string;
	title: string;
	pitch: string;
	bestForLabel: string;
	bestFor: string;
	footnote: string;
	ctaLabel: string;
	ctaHref: string;
}

export interface HireProofTeaser {
	id: string;
	line: string;
	linkLabel: string;
	href: string;
}

export interface HireBadge {
	label: string;
	href: string;
	ariaLabel: string;
}

/** Locked contact disclaimer. Concatenate before + link + after to rebuild the exact sentence. */
export const HIRE_CONTACT_DISCLAIMER =
	"B2B inquiries only. I’ll use your message to reply and talk through a possible engagement (pre-contract). Details in the Privacy Policy. No obligation until we agree scope in writing.";

export const hire = {
	availability: "Available for Q4 2026 Projects",
	headline: "Cloud infrastructure that costs less and stays up.",
	offer: "AWS & Kubernetes B2B from the EU.",
	ctaPrimary: "Let’s talk",
	ctaPrimaryHref: "#contact",
	ctaSecondary: "See full resume",
	ctaSecondaryHref: "/",
	packagesHeading: "AWS-first packages",
	packages: [
		{
			id: "cloud-finops-audit",
			title: "Cloud cost & reliability audit",
			pitch:
				"A focused AWS review of spend, reliability, and the highest-leverage fixes—so you know what to change first.",
			bestForLabel: "Best for",
			bestFor:
				"Teams staring at an AWS bill they cannot explain, or an environment that pages the same people every week.",
			footnote:
				"Cost and reliability outcomes depend on the current estate, baseline, and agreed scope — not a savings or uptime guarantee.",
			ctaLabel: "Let’s talk",
			ctaHref: "#contact",
		},
		{
			id: "iac-kubernetes",
			title: "IaC & Kubernetes platform",
			pitch:
				"Production-grade Terraform and Kubernetes on AWS: consistent environments, safer changes, and a platform your team can operate.",
			bestForLabel: "Best for",
			bestFor:
				"Teams that need Terraform and EKS they can hand over—not a snowflake cluster only one engineer understands.",
			footnote:
				"Delivery and operability depend on starting access, baseline, and agreed scope — not a timeline or outcome guarantee.",
			ctaLabel: "Let’s talk",
			ctaHref: "#contact",
		},
		{
			id: "cicd-observability",
			title: "CI/CD & observability",
			pitch:
				"CI/CD and observability on AWS so releases are repeatable and incidents are visible before users feel them.",
			bestForLabel: "Best for",
			bestFor:
				"Teams still shipping from a laptop, or finding out about outages from customers instead of Grafana.",
			footnote:
				"Signal quality and pipeline coverage depend on the systems in scope — not a coverage or incident-reduction guarantee.",
			ctaLabel: "Let’s talk",
			ctaHref: "#contact",
		},
	] as HirePackage[],
	proofHeading: "Proof",
	proofTeasers: [
		{
			id: "mercedes-incidents",
			line: "Luxoft / Mercedes-Benz: ~70% fewer incidents after a high-availability network redesign.",
			linkLabel: "View on resume",
			href: "/#experience",
		},
		{
			id: "luxoft-finops",
			line: "Luxoft FinOps: test-environment costs down 50% and production 20%, without performance degradation.",
			linkLabel: "View on resume",
			href: "/#experience",
		},
		{
			id: "terraform-migration",
			line: "Luxoft / Mercedes-Benz: Terraform Enterprise migration finished in 30% of the planned time.",
			linkLabel: "View on resume",
			href: "/#experience",
		},
		{
			id: "jpmorgan-platform",
			line: "JPMorgan Chase via Luxoft: Terraform across environments, with Dynatrace, Datadog, and CloudWatch.",
			linkLabel: "View on resume",
			href: "/#experience",
		},
	] as HireProofTeaser[],
	badges: [
		{
			label: "CKA",
			href: "/#certifications",
			ariaLabel: "Certified Kubernetes Administrator — view certifications on resume",
		},
		{
			label: "Terraform",
			href: "/#certifications",
			ariaLabel: "HashiCorp Terraform Associate — view certifications on resume",
		},
		{
			label: "SAA",
			href: "/#certifications",
			ariaLabel: "AWS Solutions Architect Associate — view certifications on resume",
		},
	] as HireBadge[],
	contactHeading: "Let’s talk",
	contactIntro: "B2B from Poland (EU). Pick a channel and I’ll reply.",
	contactCtaLabel: "Let’s talk",
	contactDisclaimerBefore:
		"B2B inquiries only. I’ll use your message to reply and talk through a possible engagement (pre-contract). Details in the ",
	contactDisclaimerLink: "Privacy Policy",
	contactDisclaimerAfter:
		". No obligation until we agree scope in writing.",
	privacyPolicyHref: "/privacy-policy",
};

export const hirePageMeta = {
	title: "Hire | AWS & Kubernetes B2B - Andrii Lytvynenko",
	description:
		"Hire AWS-first DevOps packages from the EU: a cost & reliability audit, IaC & Kubernetes, and CI/CD & observability. B2B only — proof is on the resume.",
};
