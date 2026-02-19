export interface Project {
	title: string;
	description: string;
	link: string;
	linkLabel?: string;
	technologies: string;
	year?: string;
	image?: string;
}

export const projects: Project[] = [
	{
		title: "Terraform AWS ECS Module",
		description:
			"Reusable Terraform module for ECS Fargate with ALB, RDS, and CloudWatch integration.",
		link: "https://github.com/fecton/terraform-aws-ecs-module",
		linkLabel: "View on GitHub",
		technologies: "Terraform, AWS, ECS, Fargate, ALB, RDS, CloudWatch",
		year: "2024",
	},
	{
		title: "Kubernetes Monitoring Stack",
		description:
			"Prometheus, Grafana, and AlertManager manifests for Kubernetes cluster observability.",
		link: "https://github.com/fecton/k8s-monitoring-stack",
		linkLabel: "View on GitHub",
		technologies: "Kubernetes, Prometheus, Grafana, AlertManager",
		year: "2024",
	},
	{
		title: "CI/CD Pipeline Templates",
		description:
			"GitHub Actions workflows for build, test, and deploy stages with Docker support.",
		link: "https://github.com/fecton/github-actions-templates",
		linkLabel: "View on GitHub",
		technologies: "GitHub Actions, Docker, YAML",
		year: "2023",
	},
	{
		title: "Cost Optimization Scripts",
		description:
			"AWS Cost Explorer and Savings Plans automation for cloud cost analysis and optimization.",
		link: "https://github.com/fecton/aws-cost-optimization",
		linkLabel: "View on GitHub",
		technologies: "Python, boto3, AWS Cost Explorer, AWS Savings Plans",
		year: "2024",
	},
];
