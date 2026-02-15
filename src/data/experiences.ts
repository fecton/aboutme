export interface Experience {
	position: string;
	work_mode: string;
	company: string;
	company_link: string;
	client: string;
	client_link: string;
	dates: string;
	present: boolean;
	description: string;
	disciplines: string;
}

export const experiences: Experience[] = [
	{
		position: "Senior DevOps Engineer",
		work_mode: "Remote",
		company: "Geniusee Inc.",
		company_link: "https://geniusee.com/",
		client: "Education platforms and logistics companies",
		client_link: "",
		dates: "2025 November - Present",
		present: true,
		description: `<ul>
<li>Focused on web projects using AWS services including ECS, EC2, Lambda, API Gateway, RDS, ElastiCache, CloudFront, Route53, SSM Parameter Store, and Secrets Manager, managing multiple AWS accounts using Terraform code.</li>
<li>Optimized cloud costs using AWS Cost Explorer and implementing savings plans to reduce infrastructure expenses.</li>
<li>Created monitoring infrastructure from scratch using Amazon Managed Grafana and Amazon Managed Prometheus integrated with CloudWatch.</li>
<li>Implemented custom monitoring solutions using node_exporter, windows_exporter, and sql_exporter with OpenTelemetry for Linux and Windows instances.</li>
<li>Deployed monitoring for MSSQL instances, ensuring comprehensive database observability and performance tracking.</li>
</ul>`,
		disciplines:
			"AWS (EC2, ECS, ECS Fargate, S3, Lambda, API Gateway, RDS, ElastiCache Redis, CloudFront, Route53, VPC, IAM, CloudWatch, SSM Parameter Store, Secrets Manager, SNS, SQS, EventBridge, Auto Scaling, Security Groups, NAT Gateway), AWS Cost Explorer, AWS Savings Plans, AWS Organizations, Terraform, Terragrunt, Terraform Modules, Amazon Managed Grafana, Amazon Managed Prometheus, Prometheus, PromQL, Grafana, CloudWatch Logs, CloudWatch Metrics, CloudWatch Alarms, OpenTelemetry, node_exporter, windows_exporter, sql_exporter, AlertManager, MSSQL, SQL Server, PostgreSQL, MySQL, C#, .NET, .NET Core, ASP.NET, PowerShell, Bash, Python, REST APIs, GitLab CI, GitHub Actions, Docker, Docker Compose, Kubernetes, Helm, YAML, JSON, Git, Linux (Ubuntu, Amazon Linux), Windows Server, Infrastructure as Code (IaC), CI/CD Pipelines, Multi-Account Strategy, FinOps, Cost Optimization, Serverless Architecture, Microservices, Monitoring & Observability, Log Aggregation, Jira, Confluence.",
	},
	{
		position: "Senior/Lead DevOps Engineer",
		work_mode: "Remote",
		company: "Luxoft Poland",
		company_link: "https://www.luxoft.com/",
		client: "JP Morgan Chase",
		client_link: "https://www.chase.com/",
		dates: "2025 August - 2025 October (Contract successfully completed)",
		present: false,
		description: `<ul>
<li>Delivered and maintained cloud infrastructure using Terraform in multiple dev environments, pre-prod, and prod environments with automatic scaling and serverless services, featuring multi-AZ deployments and multi-region S3 and RDS replications (active-passive) using AWS services (ECS, MWAA, and Lambda).</li>
<li>Implemented monitoring using Dynatrace, Datadog, and CloudWatch, including investigation of Lambda errors and resource utilization.</li>
<li>Developed CI/CD pipelines with Jules (a custom Jenkins) and Spinnaker integrated with Terraform Enterprise, covering build, test, and deploy stages involving Java (Vanilla Java, Spring Boot) and Docker.</li>
<li>Contributed to cloud architecture planning and continuous improvement of platform design.</li>
<li>Collaborated with cross-functional international teams including DevOps, QA, Developers, Architects, and Analysts.</li>
</ul>`,
		disciplines:
			"HLASM, Java, Spring Boot, Python, AWS, EC2, Lambda, S3, Block Storage, Networking, Apache Airflow, Terraform, Jenkins, Jules, Spinnaker, PostgreSQL, Splunk, Dynatrace.",
	},
	{
		position: "DevOps Engineer",
		work_mode: "Remote",
		company: "Luxoft Poland",
		company_link: "https://www.luxoft.com/",
		client: "3 projects - Mercedes-Benz User Experience (MBUX) NTG6 / NTG7 / Gen20x",
		client_link: "https://www.mercedes-benz.com/",
		dates: "2023 February - 2025 September",
		present: false,
		description: `<ul>
<li>Led urgent and time-limited Terraform Enterprise migration from Terragrunt, completing it in 30% of the planned time (1 month instead of 3 months) with half the team size (3-5 instead of 10 engineers); provided daily reports to stakeholders on development status, performance tracking, and management via team calls, Jira comments, and Confluence pages.</li>
<li>Led network architecture redesign to eliminate Nginx network bottlenecks, applying high availability and reliability principles using AWS services (ALB, NLB, EC2, Route53, EKS, CloudFront, VPC, EventBridge), reworking legacy code, reducing incident frequency by 70%, and enabling the handling of high traffic peaks with hundreds of thousands of requests per second.</li>
<li>Led documentation initiatives to improve transparency for clients and newly onboarded staff, creating complete infrastructure and testing documentation and knowledge-sharing procedures, resulting in improved team efficiency and engagement.</li>
<li>Led urgent production Kubernetes cluster restoration during weekends following an incident, restoring from automated backups, implementing countermeasures, and documenting the event.</li>
<li>Regularly mentored a team of 10 members, providing one-to-one support sessions.</li>
<li>Implemented and maintained IAM policies, secrets management, and conducted regular security audits within the AWS environment.</li>
<li>Designed and implemented Gerrit High Availability Cluster architecture using Corosync, Pacemaker, and distributed storage (GFS2, DLM, LVM, lvmlockd) with automation, eliminating downtime during maintenance operations.</li>
<li>Optimized Gerrit infrastructure by migrating from a single large instance to a 3-node cluster, reducing EC2 costs by 40% (saving approximately $3,000 per month) and improving reliability.</li>
<li>Designed and implemented event streaming between multiple Gerrit instances using Kinesis, Kafka, and Zookeeper to handle peak traffic loads.</li>
<li>Delivered a comprehensive monitoring solution for Gerrit HA components (instances, metrics, ALB/NLB, EBS, RDS) using Prometheus and Grafana.</li>
<li>Implemented automated disaster recovery and backup/restoration strategies for Gerrit HA using EBS snapshots.</li>
<li>Delivered client-facing technical and architectural presentations to audiences ranging from 10 to 100 stakeholders.</li>
<li>Facilitated team-level technical discussions and solution brainstorming sessions across international teams, leading to performance optimizations and preemptive resolution of critical issues.</li>
<li>Conducted FinOps initiatives and analyses, reducing test environment costs by 50% and production costs by 20% without performance degradation, saving over $5,000 monthly using AWS Cost Explorer and Cost Optimizer.</li>
<li>Maintained and implemented Jira automation jobs, streamlining release procedures with Python.</li>
<li>Implemented build, test, and release pipelines using Java, Groovy, Python, AWS SDK, and Jenkins.</li>
<li>Developed monitoring and observability solutions: created dashboards with Grafana visualizations and alerts, prepared database queries in SQL and Flux for InfluxDB, and implemented Kubernetes and EC2 monitoring with Prometheus; automated incident ticket creation using Grafana, AlertManager, and Jira Alert.</li>
<li>Performed regular upgrades and maintenance for Jenkins, Gerrit, Kafka, Zookeeper, Terragrunt, Terraform, Terraform Enterprise, InfluxDB, Grafana, Prometheus, Kubernetes, Ubuntu, HAProxy, and Nginx.</li>
<li>Developed Single Sign-On (SSO) plugins for Gerrit in Java, enabling unified authentication across enterprise systems.</li>
<li>Implemented a GenAI-powered log analyzer using AWS Bedrock (OpenAI GPT-4.0), reducing incident investigation time by 60% through automated pattern recognition and root cause analysis.</li>
</ul>`,
		disciplines:
			"Terraform Enterprise, Bash (Shell), Python, Groovy, Jenkins, Gerrit, AWS (Lambda, VPC, EC2, S3, CloudFront, Route53, CloudWatch, SNS, Auto Scaling, Load Balancers, Transit Gateway, EKS), Kubernetes (K8S), Grafana, Prometheus, AWS CloudWatch, Jenkins, Git, Gerrit, FinOps (Cost optimization practices), High Availability Architectures, Network Design & Redesign, Transit Gateway, Load Balancing, Java (application debugging), Python, Groovy, Bash (scripting and automation), Lucidchart, draw.io, Jira, Confluence.",
	},
	{
		position: "DevOps Engineer",
		work_mode: "Remote",
		company: "Self-Employed",
		company_link: "",
		client: "Freelance projects (web projects)",
		client_link: "",
		dates: "2021 January - 2023 January",
		present: false,
		description:
			"AWS/Azure Cloud engineering, Delivering continuous integration and deployment using GitOps and Cloud platforms. Automating processes with Jenkins, Terraform, Ansible, and Docker containerization. Operating different distributions like CentOS and Ubuntu administering and writing bash scripts for making backups, and auto-setup scripts for the Linux environment. Worked with different Python frameworks (Flask, Aiogram, Tkinter, etc.)",
		disciplines:
			"Amazon DynamoDB, Amazon EC2, Amazon Elastic Container Registry (ECR), Amazon Elastic Kubernetes Service (Amazon EKS), Amazon Relational Database Service (RDS), Amazon S3, Amazon VPC (Virtual Private Cloud), Ansible, AWS, AWS Lambda, C Programming Language, C#, C++, CentOS, CI/CD, CI/CD Fundamentals, CMake, Configuration Management, Continuous Deployment, Continuous Integration, Database Administration, Debian GNU/Linux, DevOps Fundamentals, DevOps Tools, Django, Docker, Docker Compose, Firewalls, Flask, Git, GITBash, GitHub, GitHub Actions, GitHub CI, Google Test, HashiCorp Terraform, Jenkins, Jenkins Pipeline, Kubernetes, Linux, Linux Virtualization, Load Balancing, MariaDB, Microservices, Microsoft Azure DevOps, Microsoft Azure Pipelines, Microsoft Visual Studio, Microsoft Windows, Microsoft Windows 10, MongoDB, MySQL, PostgreSQL, Python, Python Testing, Redis, SQL, SQLite, Version Control, VirtualBox, VM, VMware, VMWare Linux, VPN, Vulnerability Scanners, YAML.",
	},
	{
		position: "Full-Stack Web Developer",
		work_mode: "Remote",
		company: "Self-Employed",
		company_link: "",
		client: "Freelance projects (web projects)",
		client_link: "",
		dates: "2020 April - 2021 June",
		present: false,
		description: `<ul>
<li>Developed full-stack web applications using PHP and the Laravel framework for freelance clients.</li>
<li>Built responsive frontend interfaces with HTML, CSS, JavaScript, and jQuery for static and dynamic websites.</li>
<li>Designed and implemented database schemas with MySQL and SQLite for data persistence and retrieval.</li>
<li>Configured and deployed web servers (Apache, Nginx) for hosting and serving web applications.</li>
</ul>`,
		disciplines:
			"Apache WEB Server, Cascading Style Sheets (CSS), HTML, JavaScript, jQuery, Laravel, MySQL, Nginx, PHP, SQLite.",
	},
	{
		position: "System Administrator",
		work_mode: "On-site",
		company: "Self-Employed",
		company_link: "",
		client: "Settlement Council",
		client_link: "",
		dates: "2019 January - 2020 February",
		present: false,
		description: `<ul>
<li>Designed and implemented local network infrastructure for schools using switches, hubs, and routers for the Settlement Council.</li>
<li>Configured firewall rules (IPTables) to restrict access from external networks while enabling controlled public data availability.</li>
<li>Administered Linux systems and managed DNS configuration for network environments.</li>
<li>Utilized virtualization technologies for efficient resource management and isolated service deployment.</li>
<li>Led technical implementation and coordinated with stakeholders on network design and maintenance.</li>
</ul>`,
		disciplines:
			"Bash Shell, Communication Skills, Domain Name System (DNS), IPTables, Linux, Network, Network Access Control, Network Administration, Network Configuration, Network Infrastructure, Network Management, Networking, Public Speaking, Team Lead, Team orientation, Virtualization.",
	},
];
