import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://alytvynenko.net";
const PROFILE_IMAGE = `${SITE_URL}/images/tm-easy-profile.webp`;

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: "Andrii Lytvynenko - Senior DevOps & Cloud Engineer",
	description:
		"Hire a Senior DevOps & Cloud Engineer with 5+ years of experience. Expert in AWS, Terraform, Kubernetes, CI/CD. Available for B2B contracts and remote consulting worldwide. Based in Poland, EU.",
	keywords: [
		"DevOps consultant",
		"Cloud infrastructure consultant",
		"B2B DevOps contractor",
		"Remote DevOps engineer",
		"AWS consultant",
		"Kubernetes expert",
		"Terraform specialist",
		"DevOps Poland",
		"EU-based DevOps",
		"Cloud migration consultant",
		"Infrastructure as Code",
		"CI/CD pipeline expert",
	],
	authors: [{ name: "Andrii Lytvynenko" }],
	creator: "Andrii Lytvynenko",
	openGraph: {
		title: "Hire Senior DevOps & Cloud Engineer | AWS Certified | B2B Contracts",
		description:
			"Senior DevOps & Cloud Engineer with 5+ years of experience. Expert in AWS, Terraform, Kubernetes, CI/CD. Available for B2B contracts worldwide. Based in Poland, EU.",
		url: SITE_URL,
		siteName: "Andrii Lytvynenko - DevOps & Cloud Engineering Services",
		images: [
			{
				url: PROFILE_IMAGE,
				width: 250,
				height: 250,
				alt: "Andrii Lytvynenko - Senior DevOps Engineer with AWS and Kubernetes expertise",
			},
		],
		locale: "en_US",
		type: "profile",
	},
	twitter: {
		card: "summary_large_image",
		title: "Hire Senior DevOps & Cloud Engineer | AWS Certified",
		description:
			"5+ years experience | Expert in AWS, Kubernetes, Terraform, CI/CD | Available for B2B contracts worldwide",
		images: [PROFILE_IMAGE],
		creator: "@fecton",
	},
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: SITE_URL,
	},
	manifest: "/manifest.json",
	icons: {
		icon: "/images/favicon.ico",
		apple: "/images/favicon.ico",
	},
	themeColor: "#3366CC",
	appleWebApp: {
		statusBarStyle: "default",
	},
};

const personJsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Andrii Lytvynenko",
	jobTitle: "Senior DevOps & Cloud Engineer",
	description:
		"Senior DevOps & Cloud Engineer with 5+ years of experience in AWS, Terraform, Kubernetes, and cloud infrastructure. Available for B2B contracts and consulting worldwide.",
	url: SITE_URL,
	image: PROFILE_IMAGE,
	email: "a.v.lytvynenko2004@gmail.com",
	telephone: "+48-XXX-XXX-XXX",
	address: {
		"@type": "PostalAddress",
		addressLocality: "Czestochowa",
		addressRegion: "Silesian Voivodeship",
		addressCountry: "PL",
	},
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
	knowsLanguage: [
		{ "@type": "Language", name: "English", alternateName: "en" },
		{ "@type": "Language", name: "Ukrainian", alternateName: "uk" },
		{ "@type": "Language", name: "Russian", alternateName: "ru" },
		{ "@type": "Language", name: "Polish", alternateName: "pl" },
	],
	alumniOf: [
		{ "@type": "EducationalOrganization", name: "Kharkiv Aviation Institute", url: "https://khai.edu/en/" },
		{ "@type": "EducationalOrganization", name: "EPAM University", url: "https://www.epamglobalcampus.com/" },
	],
	worksFor: { "@type": "Organization", name: "Geniusee Inc.", url: "https://geniusee.com/" },
	hasCredential: [
		{ "@type": "EducationalOccupationalCredential", name: "AWS Certified Solutions Architect - Associate", credentialCategory: "Professional Certification" },
		{ "@type": "EducationalOccupationalCredential", name: "Certified Kubernetes Administrator (CKA)", credentialCategory: "Professional Certification" },
		{ "@type": "EducationalOccupationalCredential", name: "HashiCorp Certified: Terraform Associate", credentialCategory: "Professional Certification" },
	],
	seeks: {
		"@type": "JobPosting",
		hiringOrganization: { "@type": "Person", name: "Andrii Lytvynenko" },
		jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressCountry: "Worldwide - Remote" } },
		title: "B2B DevOps & Cloud Engineering Contracts",
		description: "Available for B2B contract work in DevOps, Cloud Infrastructure, AWS, Kubernetes, and Infrastructure as Code",
		employmentType: "CONTRACTOR",
	},
};

const professionalServiceJsonLd = {
	"@context": "https://schema.org",
	"@type": "ProfessionalService",
	name: "Andrii Lytvynenko - DevOps & Cloud Engineering Services",
	description:
		"Professional DevOps and Cloud Engineering services including AWS consulting, Kubernetes implementation, Terraform infrastructure as code, CI/CD pipeline development, and cloud migration.",
	url: SITE_URL,
	image: PROFILE_IMAGE,
	priceRange: "$$-$$$",
	email: "a.v.lytvynenko2004@gmail.com",
	address: { "@type": "PostalAddress", addressLocality: "Czestochowa", addressCountry: "Poland" },
	areaServed: [{ "@type": "Country", name: "Poland" }, { "@type": "Place", name: "European Union" }, { "@type": "Place", name: "Worldwide" }],
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
	sameAs: ["https://www.linkedin.com/in/andrii-fecton/", "https://github.com/fecton"],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<head>
				<link rel="author" href={`${SITE_URL}/humans.txt`} />
				<link rel="preconnect" href="https://www.googletagmanager.com" />
				<link rel="dns-prefetch" href="https://www.google-analytics.com" />
			</head>
			<body className="min-h-screen bg-background">
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-LKHDQT8Z81"
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-LKHDQT8Z81');
					`}
				</Script>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(personJsonLd),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(professionalServiceJsonLd),
					}}
				/>
				<a href="#main-content" className="skip-link">
					Skip to main content
				</a>
				{children}
			</body>
		</html>
	);
}
