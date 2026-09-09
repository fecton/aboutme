export interface HirePackage {
	id: string;
	title: string;
	bestForLabel: string;
	bestFor: string;
	deliverables: string;
	footnote?: string;
	credentials?: string;
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
	headline: "Hire DevOps that cuts cloud cost and keeps systems up.",
	offer: "AWS & Kubernetes · B2B from the EU · Proof on the resume",
	trustLine: "B2B · GDPR · Poland (EU)",
	ctaPrimary: "Let’s talk",
	ctaPrimaryHref: "#contact",
	ctaSecondary: "See full resume",
	ctaSecondaryHref: "/",
	packagesHeading: "Packages",
	packages: [
		{
			id: "cloud-cost-audit",
			title: "Cloud cost & reliability audit",
			bestForLabel: "Best for",
			bestFor: "teams bleeding spend or flying blind on HA/monitoring",
			deliverables:
				"Cost Explorer + Savings Plans/rightsizing; HA & monitoring gap review; prioritized quick wins with $ or risk impact",
			footnote: "Outcomes are case-study style — not guaranteed %.",
			ctaLabel: "Let’s talk",
			ctaHref: "#contact",
		},
		{
			id: "iac-kubernetes",
			title: "IaC & Kubernetes platforms",
			bestForLabel: "Best for",
			bestFor: "Terraform/EKS (or ECS) delivery and migrations",
			deliverables:
				"Terraform/Terragrunt (TFE migration proof); EKS and/or ECS; HA (multi-AZ, ingress/LB, backup/restore)",
			credentials: "Terraform Assoc · CKA · SAA",
			ctaLabel: "Let’s talk",
			ctaHref: "#contact",
		},
		{
			id: "ci-cd-observability",
			title: "CI/CD & observability",
			bestForLabel: "Best for",
			bestFor: "pipeline + golden-signals maturity",
			deliverables:
				"build/test/deploy + IaC gates; Grafana/Prometheus/CloudWatch + OpenTelemetry; runbook-ready dashboards",
			footnote: "Tools used, not productized SKUs.",
			ctaLabel: "Let’s talk",
			ctaHref: "#contact",
		},
	] as HirePackage[],
	proofHeading: "Proof",
	proofTeasers: [
		{
			id: "tfe-migration",
			line: "TFE migration in ~1 mo vs 3 planned (Luxoft / Mercedes)",
			linkLabel: "View on resume",
			href: "/#experience",
		},
		{
			id: "network-ha",
			line: "Network HA redesign — ~70% fewer incidents (scoped)",
			linkLabel: "View on resume",
			href: "/#experience",
		},
		{
			id: "cloud-cost",
			line: "Cloud cost cut — up to 50% (via Luxoft engagements)",
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
			label: "Terraform Associate",
			href: "/#certifications",
			ariaLabel: "HashiCorp Terraform Associate — view certifications on resume",
		},
		{
			label: "AWS SAA",
			href: "/#certifications",
			ariaLabel: "AWS Solutions Architect Associate — view certifications on resume",
		},
	] as HireBadge[],
	contactHeading: "Let’s talk",
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
