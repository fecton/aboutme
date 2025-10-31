experience_section = document.getElementsByClassName("experience-content")[0];

console.log(experience_section);

experience_section.innerHTML = "";
experience_section.innerText = "";

const exp_data = {
  "experiences": [
    {
      "position": "Senior/Lead DevOps Engineer",
      "work_mode": "Remote",
      "company": "Luxoft Poland",
      "company_link": "https://www.luxoft.com/",
      "client": "JP Morgan Chase",
      "client_link": "https://www.chase.com/",
      "dates": "2025 August - 2025 October",
      "present": false,
      "description": `<ul>
  <li>
    Design, implement, and maintain scalable cloud infrastructure on AWS, leveraging services like ECS, AWS Managed workflows for Apache Airflow, Lambda, and S3;
  </li>

  <li>
    Develop and manage infrastructure-as-code using Terraform for efficient environment management;
  </li>

  <li>
    Build and maintain CI/CD pipelines using tools such as Jenkins, Jules or Spinnaker;
  </li>

  <li>
    Manage ECS clusters, including configuration, deployment, and monitoring (Airflow expertise preferred);
  </li>

  <li>
    Support and optimize Java-based applications (vanilla Java, Spring Boot) throughout the build, package, and deployment lifecycle;
  </li>

  <li>
    Ensure database reliability and performance through PostgreSQL management and optimization;
  </li>

  <li>
    Collaborate with cross-functional teams to troubleshoot and resolve infrastructure and deployment challenges.
  </li>
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
  <li>
    Led Terraform Enterprise migration, completing in half the planned time and with half the team;
  </li>

  <li>
    Led infrastructure and testing process documentation efforts;
  </li>

  <li>
    Created internal and client-facing presentations with architecture diagrams, upgrades, and other activities;
  </li>

  <li>
    Facilitated technical discussions and solution brainstorming within the team;
  </li>

  <li>
    Programming and scripting using Bash(Shell)/Python/Groovy, and Java;
  </li>

  <li>
    Cost optimization activities (FinOps): reduced test environment costs by 50%;
  </li>

  <li>
    Worked with AWS Lambda and AWS SDK: automating, debugging, and implementing new features, creating dynamics in IaC;
  </li>

  <li>
    Worked with AWS services for empowering high availability solutions: VPC, CloudFront, EC2, AutoScaling, Load Balancers, Transit Gateways, S3, Route53, CloudWatch, SNS, Lambda, etc.
  </li>

  <li>
    Maintained direct client communication to assess project status and support issue resolution;
  </li>

  <li>
    Planned and executed upgrades for Jenkins, Gerrit, Terraform, Grafana, Prometheus, and EKS (Kubernetes in AWS);
  </li>

  <li>
    Redesigned network architecture with high availability and reliability principles;
  </li>

  <li>
    Debugged Java-based applications, including Gerrit and Jenkins, and automation to support distributed systems for large-scale applications;
  </li>
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


for (let i = 0; i < exp_data.experiences.length; i++) {
  const exp = exp_data.experiences[i];

  const title = document.createElement("h4");
  title.className = "experience-title accent";
  title.innerHTML = exp.position;
  experience_section.appendChild(title);

  const companyDiv = document.createElement("div");
  companyDiv.className = "experience-company";

  const workModeH5 = document.createElement("h5");
  workModeH5.innerHTML = `Work mode: ${exp.work_mode}`;
  companyDiv.appendChild(workModeH5);

  let companyBr = document.createElement("br");
  companyDiv.appendChild(companyBr);

  const companyH5 = document.createElement("h5");
  if(exp.company_link == "") {
    companyH5.innerHTML = `Company: ${exp.company}`;
  } else {
    companyH5.innerHTML = `Company: ${exp.company} <a href="${exp.company_link}" target="_blank">(CLICK-ME)</a>`;
  }

  companyDiv.appendChild(companyH5);

  let companyBr2 = document.createElement("br");
  companyDiv.appendChild(companyBr2);

  const clientH5 = document.createElement("h5");
  if(exp.client_link == "") {
    clientH5.innerHTML = `Client: ${exp.client}`;
  } else {
    clientH5.innerHTML = `Client: ${exp.client} <a href="${exp.client_link}" target="_blank">(CLICK-ME)</a>`;
  }

  companyDiv.appendChild(clientH5);
  experience_section.appendChild(companyDiv);

  const datesH5 = document.createElement("h5");
  datesH5.innerHTML = `&gt; ${exp.dates}` + (exp.present ? ` <span class="in-progress-text">PRESENT</span>` : "");
  experience_section.appendChild(datesH5);

  const descriptionP = document.createElement("p");
  descriptionP.className = "education-description";
  descriptionP.innerHTML = exp.description;
  experience_section.appendChild(descriptionP);

  const details = document.createElement("details");
  const summary = document.createElement("summary");
  const summaryH5 = document.createElement("h5");
  summaryH5.innerHTML = "<u>▼ Stack of Technologies</u>";
  summary.appendChild(summaryH5);
  details.appendChild(summary);

  const disciplinesP = document.createElement("p");
  disciplinesP.innerHTML = exp.disciplines;
  details.appendChild(disciplinesP);
  experience_section.appendChild(details);

  if (i != exp_data.experiences.length - 1) {
    const hr = document.createElement("hr");
    experience_section.appendChild(hr);
  }
}

