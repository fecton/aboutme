export interface Highlight {
	number: string;
	label: string;
}

export interface SkillCategory {
	title: string;
	icon: string;
	skills: string[];
	primary?: string[];
}

export interface SocialLink {
	name: string;
	url: string;
	icon: string;
	ariaLabel: string;
}

export interface Language {
	flag: string;
	name: string;
	level: string;
	native?: boolean;
}

export const profile = {
	name: "Andrii Lytvynenko",
	title: "Senior DevOps & Cloud Engineer",
	subtitle: "AWS & Kubernetes Certified | B2B Contractor",
	availability: "Available for Q4 2027 Projects",
	profileImage: "/images/tm-easy-profile.webp",
	email: "a.v.lytvynenko2004@gmail.com",
	location: "Czestochowa, Poland (EU)",
	resumeUrl:
		"https://docs.google.com/document/d/1AU11pYNam32N1Ec1QJ9v6KIaw1pDx8PCoNXGfZNVU-4/export?format=pdf",
	coverLetterUrl:
		"https://docs.google.com/document/d/1VeKq8g9Dfarf_kg7ri5AN2mi3cp_UKVmjDLwLNKhP44/export?format=pdf",
	bio: {
		intro:
			"I'm a Senior DevOps & Cloud Engineer with 5+ years of experience designing, implementing, and optimizing cloud infrastructure for enterprise clients. I specialize in building scalable, secure, and cost-efficient solutions using AWS, Kubernetes, and Infrastructure as Code practices.",
		experience:
			"My experience spans working with Fortune 500 companies like JP Morgan Chase and Mercedes-Benz, where I've led critical infrastructure migrations, reduced cloud costs by up to 50%, and architected high-availability systems handling hundreds of thousands of requests per second.",
		passion:
			"I'm passionate about automation, continuous improvement, and mentoring teams. Whether it's a complex Terraform migration or implementing GenAI-powered monitoring solutions, I focus on delivering measurable business value.",
	},
	highlights: [
		{ number: "5+", label: "Years of Experience" },
		{ number: "4+", label: "Cloud Certifications" },
		{ number: "50%", label: "Cost Reduction Achieved" },
		{ number: "70%", label: "Incident Reduction" },
	] as Highlight[],
	skills: [
		{
			title: "Cloud Platforms",
			icon: "cloud",
			skills: ["AWS", "Azure", "GCP"],
			primary: ["AWS"],
		},
		{
			title: "Infrastructure as Code",
			icon: "cogs",
			skills: ["Terraform", "Terragrunt", "CloudFormation", "Ansible"],
			primary: ["Terraform"],
		},
		{
			title: "Containers & Orchestration",
			icon: "cubes",
			skills: ["Kubernetes", "Docker", "ECS", "Helm"],
			primary: ["Kubernetes", "Docker"],
		},
		{
			title: "CI/CD & Automation",
			icon: "refresh",
			skills: ["Jenkins", "GitHub Actions", "GitLab CI", "Spinnaker"],
			primary: ["Jenkins"],
		},
		{
			title: "Monitoring & Observability",
			icon: "chart",
			skills: ["Grafana", "Prometheus", "CloudWatch", "Datadog", "Dynatrace"],
			primary: ["Grafana", "Prometheus"],
		},
		{
			title: "Programming & Scripting",
			icon: "code",
			skills: ["Python", "Bash", "Groovy", "Java", "PowerShell"],
			primary: ["Python", "Bash"],
		},
	] as SkillCategory[],
	socialLinks: [
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/andrii-fecton/",
			icon: "linkedin",
			ariaLabel: "LinkedIn profile (opens in new tab)",
		},
		{
			name: "GitHub",
			url: "https://github.com/fecton",
			icon: "github",
			ariaLabel: "GitHub profile (opens in new tab)",
		},
		{
			name: "Telegram",
			url: "https://t.me/fecton",
			icon: "telegram",
			ariaLabel: "Telegram profile (opens in new tab)",
		},
		{
			name: "WhatsApp",
			url: "https://wa.link/kyuzw3",
			icon: "whatsapp",
			ariaLabel: "WhatsApp contact (opens in new tab)",
		},
	] as SocialLink[],
	footerSocialLinks: [
		{ name: "Facebook", url: "https://www.facebook.com/andrii.lytvynenko.official", icon: "facebook" },
		{ name: "Instagram", url: "https://www.instagram.com/andrii.lytvynenko/", icon: "instagram" },
		{ name: "GitHub", url: "https://github.com/fecton", icon: "github" },
		{ name: "LinkedIn", url: "https://www.linkedin.com/in/andrii-fecton/", icon: "linkedin" },
	],
	trustBadges: [
		{ title: "GDPR Compliant", icon: "shield" },
		{ title: "NDA Available", icon: "file" },
		{ title: "B2B Contracts", icon: "briefcase" },
		{ title: "EU-Based", icon: "map-marker" },
	],
	languages: [
		{ flag: "🇺🇸", name: "English", level: "Upper-Intermediate (B2)" },
		{ flag: "🇺🇦", name: "Ukrainian", level: "Native", native: true },
		{ flag: "🇷🇺", name: "Russian", level: "Native", native: true },
		{ flag: "🇵🇱", name: "Polish", level: "Upper-Intermediate (B2)" },
	] as Language[],
};
