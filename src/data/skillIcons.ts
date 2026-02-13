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
} from "simple-icons";

// Cloud icon path (shared for AWS services - from Material Design)
const cloudPath =
	"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z";

// Manual SVG paths for icons not in simple-icons package
const manualPaths: Record<string, { path: string; title: string }> = {
	AWS: { path: cloudPath, title: "Amazon Web Services" },
	Azure: {
		path: "M5.483 21.3H24L14.025 4.013l-3.038 8.347 5.483 9.94zM13.23 2.7L6.105 8.677 0 19.253h5.505v.014L13.23 2.7z",
		title: "Microsoft Azure",
	},
	Terragrunt: { path: siHashicorp.path, title: "Terragrunt" },
	CloudFormation: { path: cloudPath, title: "AWS CloudFormation" },
	ECS: { path: cloudPath, title: "Amazon ECS" },
	CloudWatch: { path: cloudPath, title: "Amazon CloudWatch" },
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
	{ path: string; title: string }
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
};
