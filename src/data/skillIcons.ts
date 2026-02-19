/**
 * Skill icon mapping: display name -> { path, title } from Simple Icons.
 * Icons not in simple-icons use manual SVG paths (from simpleicons.org).
 */

import {
	siTerraform,
	siAnsible,
	siKubernetes,
	siDocker,
	siHelm,
	siJenkins,
	siGithubactions,
	siGitlab,
	siSpinnaker,
	siGrafana,
	siPrometheus,
	siDatadog,
	siDynatrace,
	siPython,
	siGnubash,
	siApachegroovy,
	siOpenjdk,
	siGooglecloud,
	siHashicorp,
	siGit,
	siPostgresql,
	siMysql,
	siNginx,
	siPhp,
	siLaravel,
	siJira,
	siConfluence,
	siJavascript,
	siHtml5,
	siCss,
	siDotnet,
	siApacheairflow,
	siApachekafka,
	siInfluxdb,
	siRedis,
	siDjango,
	siFlask,
	siGerrit,
	siSplunk,
	siOpentelemetry,
	siUbuntu,
	siCentos,
	siJquery,
	siSqlite,
	siMariadb,
	siMongodb,
	siCplusplus,
	siSpring,
	siSpringboot,
	siLinux,
	siYaml,
	siJson,
	siApache,
	siGithub,
	siVmware,
	siVirtualbox,
	siC,
	siCmake,
	siDebian,
	siArduino,
	siDiagramsdotnet,
} from "simple-icons";

// AWS logo path (smile/arrow from official AWS logo, viewBox 0 0 304 182)
const awsLogoPath =
	"M273.5,143.7c-32.9,24.3-80.7,37.2-121.8,37.2c-57.6,0-109.5-21.3-148.7-56.7c-3.1-2.8-0.3-6.6,3.4-4.4c42.4,24.6,94.7,39.5,148.8,39.5c36.5,0,76.6-7.6,113.5-23.2C274.2,133.6,278.9,139.7,273.5,143.7z M287.2,128.1c-4.2-5.4-27.8-2.6-38.5-1.3c-3.2,0.4-3.7-2.4-0.8-4.5c18.8-13.2,49.7-9.4,53.3-5c3.6,4.5-1,35.4-18.6,50.2c-2.7,2.3-5.3,1.1-4.1-1.9C282.5,155.7,291.4,133.4,287.2,128.1z";

// Manual SVG paths for icons not in simple-icons package
const manualPaths: Record<
	string,
	{ path: string; title: string; viewBox?: string }
> = {
	AWS: {
		path: awsLogoPath,
		title: "Amazon Web Services",
		viewBox: "0 0 304 182",
	},
	Azure: {
		path: "M5.483 21.3H24L14.025 4.013l-3.038 8.347 5.483 9.94zM13.23 2.7L6.105 8.677 0 19.253h5.505v.014L13.23 2.7z",
		title: "Microsoft Azure",
	},
	Terragrunt: { path: siHashicorp.path, title: "Terragrunt" },
	CloudFormation: {
		path: awsLogoPath,
		title: "AWS CloudFormation",
		viewBox: "0 0 304 182",
	},
	ECS: {
		path: awsLogoPath,
		title: "Amazon ECS",
		viewBox: "0 0 304 182",
	},
	CloudWatch: {
		path: awsLogoPath,
		title: "Amazon CloudWatch",
		viewBox: "0 0 304 182",
	},
	PowerShell: {
		path: "M11.571 11.513H0v1.255h11.571v-1.255zm0-5.756H0v1.255h11.571V5.757zm0 11.513H0v1.255h11.571v-1.255zM24 0v24H12.314V0H24z",
		title: "PowerShell",
	},
};

// Build skill icon map from simple-icons + manual overrides
const fromSimpleIcon = (
	icon: { path: string; title: string },
	title: string
) => ({ path: icon.path, title });

export const skillIconMap: Record<
	string,
	{ path: string; title: string; viewBox?: string }
> = {
	// Cloud Platforms
	AWS: manualPaths.AWS,
	Azure: manualPaths.Azure,
	GCP: fromSimpleIcon(siGooglecloud, "Google Cloud"),
	// IaC
	Terraform: fromSimpleIcon(siTerraform, "Terraform"),
	Terragrunt: manualPaths.Terragrunt,
	CloudFormation: manualPaths.CloudFormation,
	Ansible: fromSimpleIcon(siAnsible, "Ansible"),
	// Containers
	Kubernetes: fromSimpleIcon(siKubernetes, "Kubernetes"),
	Docker: fromSimpleIcon(siDocker, "Docker"),
	"Docker Compose": fromSimpleIcon(siDocker, "Docker Compose"),
	ECS: manualPaths.ECS,
	Helm: fromSimpleIcon(siHelm, "Helm"),
	// CI/CD
	Jenkins: fromSimpleIcon(siJenkins, "Jenkins"),
	"GitHub Actions": fromSimpleIcon(siGithubactions, "GitHub Actions"),
	"GitLab CI": fromSimpleIcon(siGitlab, "GitLab"),
	Spinnaker: fromSimpleIcon(siSpinnaker, "Spinnaker"),
	// Monitoring
	Grafana: fromSimpleIcon(siGrafana, "Grafana"),
	Prometheus: fromSimpleIcon(siPrometheus, "Prometheus"),
	CloudWatch: manualPaths.CloudWatch,
	Datadog: fromSimpleIcon(siDatadog, "Datadog"),
	Dynatrace: fromSimpleIcon(siDynatrace, "Dynatrace"),
	// Programming
	Python: fromSimpleIcon(siPython, "Python"),
	Bash: fromSimpleIcon(siGnubash, "Bash"),
	Groovy: fromSimpleIcon(siApachegroovy, "Apache Groovy"),
	Java: fromSimpleIcon(siOpenjdk, "OpenJDK"),
	PowerShell: manualPaths.PowerShell,
	// Databases
	PostgreSQL: fromSimpleIcon(siPostgresql, "PostgreSQL"),
	MySQL: fromSimpleIcon(siMysql, "MySQL"),
	Redis: fromSimpleIcon(siRedis, "Redis"),
	MongoDB: fromSimpleIcon(siMongodb, "MongoDB"),
	InfluxDB: fromSimpleIcon(siInfluxdb, "InfluxDB"),
	MariaDB: fromSimpleIcon(siMariadb, "MariaDB"),
	SQLite: fromSimpleIcon(siSqlite, "SQLite"),
	// Web/Dev
	Git: fromSimpleIcon(siGit, "Git"),
	Nginx: fromSimpleIcon(siNginx, "Nginx"),
	PHP: fromSimpleIcon(siPhp, "PHP"),
	Laravel: fromSimpleIcon(siLaravel, "Laravel"),
	jQuery: fromSimpleIcon(siJquery, "jQuery"),
	HTML: fromSimpleIcon(siHtml5, "HTML5"),
	JavaScript: fromSimpleIcon(siJavascript, "JavaScript"),
	CSS: fromSimpleIcon(siCss, "CSS"),
	Django: fromSimpleIcon(siDjango, "Django"),
	Flask: fromSimpleIcon(siFlask, "Flask"),
	".NET": fromSimpleIcon(siDotnet, ".NET"),
	".NET Core": fromSimpleIcon(siDotnet, ".NET Core"),
	"ASP.NET": fromSimpleIcon(siDotnet, "ASP.NET"),
	// Tools
	Jira: fromSimpleIcon(siJira, "Jira"),
	Confluence: fromSimpleIcon(siConfluence, "Confluence"),
	Splunk: fromSimpleIcon(siSplunk, "Splunk"),
	Gerrit: fromSimpleIcon(siGerrit, "Gerrit"),
	"Apache Airflow": fromSimpleIcon(siApacheairflow, "Apache Airflow"),
	"Apache Kafka": fromSimpleIcon(siApachekafka, "Apache Kafka"),
	Kafka: fromSimpleIcon(siApachekafka, "Apache Kafka"),
	// Platforms
	Ubuntu: fromSimpleIcon(siUbuntu, "Ubuntu"),
	CentOS: fromSimpleIcon(siCentos, "CentOS"),
	Linux: fromSimpleIcon(siLinux, "Linux"),
	// Other
	OpenTelemetry: fromSimpleIcon(siOpentelemetry, "OpenTelemetry"),
	"C++": fromSimpleIcon(siCplusplus, "C++"),
	Cpp: fromSimpleIcon(siCplusplus, "C++"),
	"Spring Boot": fromSimpleIcon(siSpringboot, "Spring Boot"),
	Spring: fromSimpleIcon(siSpring, "Spring"),
	YAML: fromSimpleIcon(siYaml, "YAML"),
	JSON: fromSimpleIcon(siJson, "JSON"),
	Apache: fromSimpleIcon(siApache, "Apache"),
	GitHub: fromSimpleIcon(siGithub, "GitHub"),
	VMware: fromSimpleIcon(siVmware, "VMware"),
	VirtualBox: fromSimpleIcon(siVirtualbox, "VirtualBox"),
	// Additional (from audit)
	"draw.io": fromSimpleIcon(siDiagramsdotnet, "diagrams.net"),
	C: fromSimpleIcon(siC, "C"),
	CMake: fromSimpleIcon(siCmake, "CMake"),
	Debian: fromSimpleIcon(siDebian, "Debian"),
	Arduino: fromSimpleIcon(siArduino, "Arduino"),
};

/** AWS service names that should use the AWS icon */
const AWS_SERVICES = new Set([
	"EC2",
	"ECS",
	"S3",
	"Lambda",
	"RDS",
	"VPC",
	"IAM",
	"EKS",
	"SNS",
	"SQS",
	"ECR",
	"DynamoDB",
	"ElastiCache",
	"CloudFront",
	"Route53",
	"CloudWatch",
	"EventBridge",
	"API Gateway",
	"Secrets Manager",
	"SSM Parameter Store",
	"Auto Scaling",
	"NAT Gateway",
	"Security Groups",
	"Cost Explorer",
	"Savings Plans",
	"Organizations",
	"Managed Grafana",
	"Managed Prometheus",
	"Transit Gateway",
	"Load Balancers",
	"ALB",
	"NLB",
	"EBS",
	"MWAA",
]);

/** Skill categories for grouped display (order preserved) */
export const SKILL_CATEGORIES = [
	{ id: "cloud", title: "Cloud & Infrastructure", order: 0 },
	{ id: "iac", title: "Infrastructure as Code", order: 1 },
	{ id: "containers", title: "Containers & Orchestration", order: 2 },
	{ id: "cicd", title: "CI/CD & Automation", order: 3 },
	{ id: "databases", title: "Databases", order: 4 },
	{ id: "monitoring", title: "Monitoring & Observability", order: 5 },
	{ id: "programming", title: "Programming & Scripting", order: 6 },
	{ id: "web", title: "Web & Frontend", order: 7 },
	{ id: "tools", title: "Tools & Platforms", order: 8 },
	{ id: "other", title: "Other", order: 9 },
] as const;

/** Skill -> category id mapping */
const skillCategoryMap: Record<string, string> = {
	// Cloud
	AWS: "cloud",
	Azure: "cloud",
	GCP: "cloud",
	CloudFormation: "cloud",
	ECS: "cloud",
	CloudWatch: "cloud",
	// IaC
	Terraform: "iac",
	Terragrunt: "iac",
	Ansible: "iac",
	// Containers
	Kubernetes: "containers",
	Docker: "containers",
	"Docker Compose": "containers",
	Helm: "containers",
	// CI/CD
	Jenkins: "cicd",
	"GitHub Actions": "cicd",
	"GitLab CI": "cicd",
	Spinnaker: "cicd",
	"Apache Airflow": "cicd",
	// Databases
	PostgreSQL: "databases",
	MySQL: "databases",
	Redis: "databases",
	MongoDB: "databases",
	InfluxDB: "databases",
	MariaDB: "databases",
	SQLite: "databases",
	// Monitoring
	Grafana: "monitoring",
	Prometheus: "monitoring",
	Datadog: "monitoring",
	Dynatrace: "monitoring",
	Splunk: "monitoring",
	OpenTelemetry: "monitoring",
	// Programming
	Python: "programming",
	Bash: "programming",
	Groovy: "programming",
	Java: "programming",
	PowerShell: "programming",
	C: "programming",
	"C++": "programming",
	Cpp: "programming",
	".NET": "programming",
	".NET Core": "programming",
	"ASP.NET": "programming",
	"Spring Boot": "programming",
	Spring: "programming",
	// Web
	HTML: "web",
	JavaScript: "web",
	CSS: "web",
	PHP: "web",
	Laravel: "web",
	jQuery: "web",
	Django: "web",
	Flask: "web",
	// Tools
	Git: "tools",
	GitHub: "tools",
	Nginx: "tools",
	Apache: "tools",
	Jira: "tools",
	Confluence: "tools",
	Gerrit: "tools",
	"draw.io": "tools",
	YAML: "tools",
	JSON: "tools",
	CMake: "tools",
	VMware: "tools",
	VirtualBox: "tools",
	Ubuntu: "tools",
	CentOS: "tools",
	Linux: "tools",
	Debian: "tools",
	Arduino: "tools",
	Kafka: "tools",
	"Apache Kafka": "tools",
	// Explicit uncategorized
	"Version Control": "tools",
	FinOps: "other",
	MSSQL: "databases",
	"SQL Server": "databases",
};

/** Alias map for discipline string variations (display text -> canonical key in skillIconMap) */
const disciplineAliases: Record<string, string> = {
	"Bash Shell": "Bash",
	"Bash (Shell)": "Bash",
	"GitLab CI": "GitLab CI",
	"GitHub Actions": "GitHub Actions",
	"GitHub CI": "GitHub Actions",
	"C#": ".NET",
	"Cascading Style Sheets (CSS)": "CSS",
	"Terraform Enterprise": "Terraform",
	"HashiCorp Terraform": "Terraform",
	"Apache WEB Server": "Apache",
	GITBash: "Git",
	"Jenkins Pipeline": "Jenkins",
	"Debian GNU/Linux": "Debian",
	"C Programming Language": "C",
	"Microsoft Azure DevOps": "Azure",
	"Microsoft Azure Pipelines": "Azure",
	MSSQL: "SQL Server",
	VMWare: "VMware",
	"VMWare Linux": "VMware",
};

// Add AWS services to cloud category
for (const svc of AWS_SERVICES) {
	skillCategoryMap[svc] = "cloud";
}

/**
 * Get category id for a discipline/skill string.
 * Normalizes via alias and first token; returns "other" if unknown.
 */
export function getCategoryForDiscipline(item: string): string {
	const trimmed = item.trim();
	if (!trimmed) return "other";

	// Exact match
	const exact = skillCategoryMap[trimmed];
	if (exact) return exact;

	// Alias: resolve to canonical key, then lookup category
	const alias = disciplineAliases[trimmed];
	if (alias && skillCategoryMap[alias]) return skillCategoryMap[alias];

	// First token (before space or parenthesis)
	const firstToken = trimmed.split(/[\s(]/)[0]?.trim();
	if (firstToken && skillCategoryMap[firstToken]) return skillCategoryMap[firstToken];

	// AWS prefix or known AWS services
	if (
		trimmed.startsWith("AWS ") ||
		trimmed.startsWith("AWS(") ||
		trimmed.startsWith("Amazon ")
	)
		return "cloud";
	if (AWS_SERVICES.has(trimmed) || AWS_SERVICES.has(firstToken || ""))
		return "cloud";

	return "other";
}

/**
 * Get canonical form for a discipline (for deduplication).
 * Returns alias target if mapped, otherwise the trimmed original.
 */
export function getCanonicalForDiscipline(item: string): string {
	const trimmed = item.trim();
	if (!trimmed) return "";
	const alias = disciplineAliases[trimmed];
	return alias ?? trimmed;
}

/**
 * Get icon for a discipline/skill string from experiences or education.
 * Tries exact match, normalized match (first word), and aliases.
 */
export function getIconForDiscipline(
	item: string
): { path: string; title?: string; viewBox?: string } | null {
	const trimmed = item.trim();
	if (!trimmed) return null;

	// Exact match
	const exact = skillIconMap[trimmed];
	if (exact) return exact;

	// Alias match
	const alias = disciplineAliases[trimmed];
	if (alias && skillIconMap[alias]) return skillIconMap[alias];

	// Normalized: first word before space or parenthesis
	const firstToken = trimmed.split(/[\s(]/)[0]?.trim();
	if (firstToken && skillIconMap[firstToken]) return skillIconMap[firstToken];

	// AWS services: items starting with "AWS" or "Amazon ", or known AWS service names
	if (
		trimmed.startsWith("AWS ") ||
		trimmed.startsWith("AWS(") ||
		trimmed.startsWith("Amazon ")
	)
		return skillIconMap.AWS;
	if (AWS_SERVICES.has(trimmed) || AWS_SERVICES.has(firstToken || ""))
		return skillIconMap.AWS;

	return null;
}
