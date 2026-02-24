export interface Education {
	specialty_title: string;
	university_title: string;
	university_link: string;
	dates: string;
	diploma_pdf: string;
	diploma_supplement_pdf: string;
	description: string;
	disciplines: string;
	university_logo?: string;
}

export const educations: Education[] = [
	{
		specialty_title: "Computer Engineering: Computer Networks and Systems",
		university_title: "Kharkiv Aviation Institute",
		university_link: "https://khai.edu/en/",
		dates: "2021 September - 2025 August",
		diploma_pdf: "/pdf/diploma.pdf",
		diploma_supplement_pdf: "/pdf/diploma-suplement.pdf",
		description: `<ul>
<li>Bachelor's degree in Computer Engineering with focus on computer networks and systems.</li>
<li>Developed skills in system and application software design using modern programming languages.</li>
<li>Studied information protection, computer system security, and cryptology fundamentals.</li>
<li>Designed, implemented, and maintained computer systems and networks.</li>
<li>Gained practical experience through educational and industrial practice placements.</li>
</ul>`,
		disciplines:
			"English Language (B1), Communication Skills Training, Fundamentals of Professional Ukrainian-Language Communication, Higher Mathematics, Discrete Mathematics, Fundamentals of Computer Operation, Programming Technologies, Law Studies, Physics, Computer Electronics, Educational Practice, Philosophy, Information and Coding Theory, Computer Architecture, Data Models and Structures, Computer Circuitry, Introductory Practice, Theoretical Foundations of Cryptology, Business Communication Psychology, Programming Technologies (Course Project), Programmable Systems-on-Chip, Computer Logic, Operating Systems, Mobile Programming, Embedded Systems, Web Technologies, Programming Artificial Intelligence Tools in Python, WEB/UI/UX Design, Java Technologies, Git Technology for Team Project Development, Databases, IoT Systems Programming, Fundamentals of Web UI Development (Front-End), Industrial Practice, Big Data Technologies, Information Security in Computer Systems, DevOps and Cloud Computing, Reliability and Fault Tolerance of Computer Systems, Web Development (Back-End), System Programming, Economics and IT Project Management, Software Architecture (Web), Microprocessor Control Systems Based on Arduino Platforms, Virtual and Augmented Reality Technologies, Testing and Quality Assurance",
		university_logo: "khai.webp",
	},
	{
		specialty_title: "Cloud & DevOps Preparation Program",
		university_title: "EPAM University",
		university_link: "https://www.epamglobalcampus.com/",
		dates: "2022 June - 2023 March",
		diploma_pdf: "",
		diploma_supplement_pdf: "",
		description: `<ul>
<li>Built CI/CD pipelines using Jenkins with Linux Bash scripting and MySQL databases.</li>
<li>Implemented Infrastructure as Code (IaC) with Terraform, configuring services such as Amazon RDS.</li>
<li>Managed and orchestrated instances with Ansible across Microsoft Azure and AWS environments.</li>
<li>Practiced Linux networking, system administration, and cloud platform fundamentals.</li>
<li>Documented all progress in the <a href="https://github.com/fecton/epam-devops-course" target="_blank" rel="noopener noreferrer">GitHub repository: EPAM DevOps Course</a>.</li>
</ul>`,
		disciplines:
			"Linux, Bash, MySQL, Linux Networking, Jenkins, Terraform, Amazon RDS, Ansible, Microsoft Azure, Amazon Web Services.",
		university_logo: "epam.webp",
	},
];
