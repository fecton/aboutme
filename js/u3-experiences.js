"use strict";

// Error handling wrapper
try {
  const experienceElements = document.getElementsByClassName("experience-content");
  if (!experienceElements || experienceElements.length === 0) {
    console.error("Experience content section not found");
    throw new Error("Required DOM element not found");
  }

  const experience_section = experienceElements[0];
  experience_section.innerHTML = "";

const exp_data = {
  "experiences": [
    {
      "position": "Senior DevOps Engineer",
      "work_mode": "Remote",
      "company": "Geniusee Inc.",
      "company_link": "https://geniusee.com/",
      "client": "Education platforms and logistics companies",
      "client_link": "",
      "dates": "2025 November - Present",
      "present": true,
      "description": "",
      "disciplines": "AWS (EC2, S3, Lambda, VPC, IAM, CloudWatch, RDS), Terraform, Terragrunt, C#, .NET, PowerShell, GitLab CI, GitHub Actions, Docker, Kubernetes, Git, Linux, Windows Server, Infrastructure as Code (IaC), CI/CD Pipelines, Grafana, Prometheus, Open Telemetry, Jira, Confluence."
    },
    {
      "position": "Senior/Lead DevOps Engineer",
      "work_mode": "Remote",
      "company": "Luxoft Poland",
      "company_link": "https://www.luxoft.com/",
      "client": "JP Morgan Chase",
      "client_link": "https://www.chase.com/",
      "dates": "2025 August - 2025 October (Contract successfully completed)",
      "present": false,
      "description": `<ul>
        <li>Delivered and maintained cloud infrastructure using Terraform in multiple dev environments, pre-prod, and prod environments with automatic scaling and serverless services, featuring multi-AZ deployments and multi-region S3 and RDS replications (active-passive) using AWS services (ECS, MWAA, and Lambda).</li>
        <br>
        <li>Implemented monitoring using Dynatrace, Datadog, and CloudWatch, including investigation of Lambda errors and resource utilization.</li>
        <br>
        <li>Developed CI/CD pipelines with Jules (a custom Jenkins) and Spinnaker integrated with Terraform Enterprise, covering build, test, and deploy stages involving Java (Vanilla Java, Spring Boot) and Docker.</li>
        <br>
        <li>Contributed to cloud architecture planning and continuous improvement of platform design.</li>
        <br>
        <li>Collaborated with cross-functional international teams including DevOps, QA, Developers, Architects, and Analysts.</li>
</ul>`,
      "disciplines": "HLASM, Java, Spring Boot, Python, AWS, EC2, Lambda, S3, Block Storage, Networking, Apache Airflow, Terraform, Jenkins, Jules, Spinnaker, PostgreSQL, Splunk, Dynatrace. "
    },
    {
      "position": "DevOps Engineer",
      "work_mode": "Remote",
      "company": "Luxoft Poland",
      "company_link": "https://www.luxoft.com/",
      "client": "3 projects - Mercedes-Benz User Experience (MBUX) NTG6 / NTG7 / Gen20x",
      "client_link": "https://www.mercedes-benz.com/",
      "dates": "2023 February - 2025 September",
      "present": false,
      "description": `<ul>
        <li>Led urgent and time-limited Terraform Enterprise migration from Terragrunt, completing it in 30% of the planned time (1 month instead of 3 months) with half the team size (3-5 instead of 10 engineers); provided daily reports to stakeholders on development status, performance tracking, and management via team calls, Jira comments, and Confluence pages.</li>
        <br>
        <li>Led network architecture redesign to eliminate Nginx network bottlenecks, applying high availability and reliability principles using AWS services (ALB, NLB, EC2, Route53, EKS, CloudFront, VPC, EventBridge), reworking legacy code, reducing incident frequency by 70%, and enabling the handling of high traffic peaks with hundreds of thousands of requests per second.</li>
        <br>
        <li>Led documentation initiatives to improve transparency for clients and newly onboarded staff, creating complete infrastructure and testing documentation and knowledge-sharing procedures, resulting in improved team efficiency and engagement.</li>
        <br>
        <li>Led urgent production Kubernetes cluster restoration during weekends following an incident, restoring from automated backups, implementing countermeasures, and documenting the event.</li>
        <br>
        <li>Regularly mentored a team of 10 members, providing one-to-one support sessions.</li>
        <br>
        <li>Implemented and maintained IAM policies, secrets management, and conducted regular security audits within the AWS environment.</li>
        <br>
        <li>Designed and implemented Gerrit High Availability Cluster architecture using Corosync, Pacemaker, and distributed storage (GFS2, DLM, LVM, lvmlockd) with automation, eliminating downtime during maintenance operations.</li>
        <br>
        <li>Optimized Gerrit infrastructure by migrating from a single large instance to a 3-node cluster, reducing EC2 costs by 40% (saving approximately $3,000 per month) and improving reliability.</li>
        <br>
        <li>Designed and implemented event streaming between multiple Gerrit instances using Kinesis, Kafka, and Zookeeper to handle peak traffic loads.</li>
        <br>
        <li>Delivered a comprehensive monitoring solution for Gerrit HA components (instances, metrics, ALB/NLB, EBS, RDS) using Prometheus and Grafana.</li>
        <br>
        <li>Implemented automated disaster recovery and backup/restoration strategies for Gerrit HA using EBS snapshots.</li>
        <br>
        <li>Delivered client-facing technical and architectural presentations to audiences ranging from 10 to 100 stakeholders.</li>
        <br>
        <li>Facilitated team-level technical discussions and solution brainstorming sessions across international teams, leading to performance optimizations and preemptive resolution of critical issues.</li>
        <br>
        <li>Conducted FinOps initiatives and analyses, reducing test environment costs by 50% and production costs by 20% without performance degradation, saving over $5,000 monthly using AWS Cost Explorer and Cost Optimizer.</li>
        <br>
        <li>Maintained and implemented Jira automation jobs, streamlining release procedures with Python.</li>
        <br>
        <li>Implemented build, test, and release pipelines using Java, Groovy, Python, AWS SDK, and Jenkins.</li>
        <br>
        <li>Developed monitoring and observability solutions: created dashboards with Grafana visualizations and alerts, prepared database queries in SQL and Flux for InfluxDB, and implemented Kubernetes and EC2 monitoring with Prometheus; automated incident ticket creation using Grafana, AlertManager, and Jira Alert.</li>
        <br>
        <li>Performed regular upgrades and maintenance for Jenkins, Gerrit, Kafka, Zookeeper, Terragrunt, Terraform, Terraform Enterprise, InfluxDB, Grafana, Prometheus, Kubernetes, Ubuntu, HAProxy, and Nginx.</li>
        <br>
        <li>Developed Single Sign-On (SSO) plugins for Gerrit in Java, enabling unified authentication across enterprise systems.</li>
        <br>
        <li>Implemented a GenAI-powered log analyzer using AWS Bedrock (OpenAI GPT-4.0), reducing incident investigation time by 60% through automated pattern recognition and root cause analysis.</li>
</ul>`,
      "disciplines": "Terraform Enterprise, Bash (Shell), Python, Groovy, Jenkins, Gerrit, AWS (Lambda, VPC, EC2, S3, CloudFront, Route53, CloudWatch, SNS, Auto Scaling, Load Balancers, Transit Gateway, EKS), Kubernetes (K8S), Grafana, Prometheus, AWS CloudWatch, Jenkins, Git, Gerrit, FinOps (Cost optimization practices), High Availability Architectures, Network Design & Redesign, Transit Gateway, Load Balancing, Java (application debugging), Python, Groovy, Bash (scripting and automation), Lucidchart, draw.io, Jira, Confluence."
    },
    {
      "position": "DevOps Engineer",
      "work_mode": "Remote",
      "company": "Self-Employed",
      "company_link": "",
      "client": "Freelance projects (web projects)",
      "client_link": "",
      "dates": "2021 January - 2023 January",
      "present": false,
      "description": "AWS/Azure Cloud engineering, Delivering continuous integration and deployment using GitOps and Cloud platforms. Automating processes with Jenkins, Terraform, Ansible, and Docker containerization. Operating different distributions like CentOS and Ubuntu administering and writing bash scripts for making backups, and auto-setup scripts for the Linux environment. Worked with different Python frameworks (Flask, Aiogram, Tkinter, etc.)", "disciplines": "Amazon DynamoDB, Amazon EC2, Amazon Elastic Container Registry (ECR), Amazon Elastic Kubernetes Service (Amazon EKS), Amazon Relational Database Service (RDS), Amazon S3, Amazon VPC (Virtual Private Cloud), Ansible, AWS, AWS Lambda, C Programming Language, C#, C++, CentOS, CI/CD, CI/CD  Fundamentals, CMake, Configuration Management, Continuous Deployment, Continuous Integration, Database Administration, Debian GNU/Linux, DevOps Fundamentals, DevOps Tools, Django, Docker, Docker Compose, Firewalls, Flask, Git, GITBash, GitHub, GitHub Actions, GitHub CI, Google Test, HashiCorp Terraform, Jenkins, Jenkins Pipeline, Kubernetes, Linux, Linux Virtualization, Load Balancing, MariaDB, Microservices, Microsoft Azure DevOps, Microsoft Azure Pipelines, Microsoft Visual Studio, Microsoft Windows, Microsoft Windows 10, MongoDB, MySQL, PostgreSQL, Python, Python Testing, Redis, SQL, SQLite, Version Control, VirtualBox, VM, VMware, VMWare Linux, VPN, Vulnerability Scanners, YAML.",
    },
    {
      "position": "Full-Stack Web Developer",
      "work_mode": "Remote",
      "company": "Self-Employed",
      "company_link": "",
      "client": "Freelance projects (web projects)",
      "client_link": "",
      "dates": "2020 April - 2021 June",
      "present": false,
      "description": "Creating static/dynamic websites and working with databases MySQL and Sqlite3.",
      "disciplines": "Apache WEB Server, Cascading Style Sheets (CSS), HTML, JavaScript, jQuery, Laravel, MySQL, Nginx, PHP, SQLite."
    },
    {
      "position": "System Administrator",
      "work_mode": "On site",
      "company": "Self-Employed",
      "company_link": "",
      "client": "Settlement Council",
      "client_link": "",
      "dates": "2019 January - 2020 February",
      "present": false,
      "description": "Creating local networks by commutators, hubs, and routers in schools with firewall rules that restrict access from external networks and make data publicly available.",
      "disciplines": "Bash Shell, Communication Skills, Domain Name System (DNS), IPTables, Linux, Network, Network Access Control, Network Administration, Network Configuration, Network Infrastructure, Network Management, Networking, Public Speaking, Team Lead, Team orientation, Virtualization."
    }
  ]
}


// Use DocumentFragment for better performance
const fragment = document.createDocumentFragment();

for (let i = 0; i < exp_data.experiences.length; i++) {
  const exp = exp_data.experiences[i];

  const title = document.createElement("h4");
  title.className = "experience-title accent";
  title.textContent = exp.position;
  fragment.appendChild(title);

  const companyDiv = document.createElement("div");
  companyDiv.className = "experience-company";

  const workModeH5 = document.createElement("h5");
  workModeH5.innerHTML = `Work mode: ${exp.work_mode}`;
  companyDiv.appendChild(workModeH5);

  let companyBr = document.createElement("br");
  companyDiv.appendChild(companyBr);

  const companyH5 = document.createElement("h5");
  const companyText = document.createTextNode("Company: " + exp.company + " ");
  companyH5.appendChild(companyText);

  if (exp.company_link && exp.company_link !== "") {
    const companyLink = document.createElement("a");
    companyLink.href = exp.company_link;
    companyLink.target = "_blank";
    companyLink.rel = "noopener noreferrer";
    companyLink.textContent = "(Visit Website)";
    companyLink.setAttribute("aria-label", `Visit ${exp.company} website (opens in new tab)`);
    companyH5.appendChild(companyLink);
  }

  companyDiv.appendChild(companyH5);

  let companyBr2 = document.createElement("br");
  companyDiv.appendChild(companyBr2);

  const clientH5 = document.createElement("h5");
  const clientText = document.createTextNode("Client: " + exp.client + " ");
  clientH5.appendChild(clientText);

  if (exp.client_link && exp.client_link !== "") {
    const clientLink = document.createElement("a");
    clientLink.href = exp.client_link;
    clientLink.target = "_blank";
    clientLink.rel = "noopener noreferrer";
    clientLink.textContent = "(Visit Website)";
    clientLink.setAttribute("aria-label", `Visit ${exp.client} website (opens in new tab)`);
    clientH5.appendChild(clientLink);
  }

  companyDiv.appendChild(clientH5);
  fragment.appendChild(companyDiv);

  const datesH5 = document.createElement("h5");
  datesH5.innerHTML = `&gt; ${exp.dates}` + (exp.present ? ` <span class="in-progress-text">PRESENT</span>` : "");
  fragment.appendChild(datesH5);

  const descriptionP = document.createElement("p");
  descriptionP.className = "education-description";
  descriptionP.innerHTML = exp.description;
  fragment.appendChild(descriptionP);

  const details = document.createElement("details");
  const summary = document.createElement("summary");
  const summaryH5 = document.createElement("h5");
  summaryH5.innerHTML = "<u>Stack of Technologies</u>";
  summary.appendChild(summaryH5);
  details.appendChild(summary);

  const disciplinesP = document.createElement("p");
  disciplinesP.textContent = exp.disciplines;
  details.appendChild(disciplinesP);
  fragment.appendChild(details);

  if (i !== exp_data.experiences.length - 1) {
    const hr = document.createElement("hr");
    fragment.appendChild(hr);
  }
}

experience_section.appendChild(fragment);

} catch (error) {
  console.error("Error loading experience section:", error);
  const errorMsg = document.querySelector(".experience-content");
  if (errorMsg) {
    errorMsg.textContent = "Unable to load experience information. Please refresh the page.";
  }
}
