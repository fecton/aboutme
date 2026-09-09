import { certificates } from "@/data/certificates";
import { hire } from "@/data/hire";

const SITE_URL = "https://alytvynenko.net";
const SITE_ORIGIN = `${SITE_URL}/`;
const HIRE_URL = `${SITE_URL}/hire/`;
const PROFILE_IMAGE = `${SITE_URL}/images/tm-easy-profile.webp`;

const personAddress = {
	"@type": "PostalAddress",
	addressLocality: "Częstochowa",
	addressRegion: "Silesian Voivodeship",
	addressCountry: "PL",
};

/**
 * Public Person node for JSON-LD. Omits email, employer `worksFor`, and
 * `seeks` / JobPosting — those do not belong on the public schema.
 */
export const person = {
	"@type": "Person",
	name: "Andrii Lytvynenko",
	jobTitle: "Senior DevOps & Cloud Engineer",
	url: SITE_ORIGIN,
	image: PROFILE_IMAGE,
	address: personAddress,
	sameAs: [
		"https://www.linkedin.com/in/andrii-fecton/",
		"https://github.com/fecton",
		"https://www.facebook.com/andrii.lytvynenko.official",
		"https://www.instagram.com/andrii.lytvynenko/",
		"https://t.me/fecton",
	],
	knowsAbout: [
		"DevOps",
		"Cloud Engineering",
		"AWS",
		"Terraform",
		"Kubernetes",
		"Docker",
		"CI/CD",
		"Infrastructure as Code",
		"Jenkins",
		"Python",
		"Bash",
		"Linux",
	],
	hasCredential: certificates
		.filter((cert) => Boolean(cert.link))
		.map((cert) => ({
			"@type": "EducationalOccupationalCredential",
			name: cert.title,
			credentialCategory: "Professional Certification",
		})),
};

export const personJsonLd = {
	"@context": "https://schema.org",
	...person,
};

export const professionalServiceJsonLd = {
	"@context": "https://schema.org",
	"@type": "ProfessionalService",
	name: "Andrii Lytvynenko - DevOps & Cloud Engineering Services",
	description:
		"Professional DevOps and Cloud Engineering services including AWS consulting, Kubernetes implementation, Terraform infrastructure as code, CI/CD pipeline development, and cloud migration.",
	url: HIRE_URL,
	image: PROFILE_IMAGE,
	priceRange: "$$-$$$",
	address: {
		"@type": "PostalAddress",
		addressLocality: "Częstochowa",
		addressCountry: "PL",
	},
	areaServed: [
		{ "@type": "Country", name: "Poland" },
		{ "@type": "Place", name: "European Union" },
		{ "@type": "Place", name: "Worldwide" },
	],
	serviceType: [
		"DevOps Consulting",
		"Cloud Infrastructure Design",
		"AWS Consulting",
		"Kubernetes Implementation",
		"Terraform Development",
		"CI/CD Pipeline Development",
		"Cloud Migration",
		"Infrastructure as Code",
		"Cloud Cost Optimization",
		"Security & Compliance",
	],
	sameAs: [
		"https://www.linkedin.com/in/andrii-fecton/",
		"https://github.com/fecton",
	],
	provider: person,
};

export const offerCatalogJsonLd = {
	"@context": "https://schema.org",
	"@type": "OfferCatalog",
	name: hire.packagesHeading,
	url: HIRE_URL,
	itemListElement: hire.packages.map((pkg, index) => ({
		"@type": "Offer",
		position: index + 1,
		itemOffered: {
			"@type": "Service",
			name: pkg.title,
			description: pkg.deliverables,
		},
	})),
};
