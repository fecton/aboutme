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
		description:
			"Professionally, a Bachelor in this field may hold positions in the information technologies industry such as Information Technology Expert, Technician on System Administration, Specialist in Software Design and Testing, Specialist in Computer Software Design, and Technician-Programmer in IT departments of educational institutions, scientific-research, design, production, public, private, and IT enterprises. The educational program has provided the ability to solve complex specialized and practical problems in computer science, apply legal frameworks and international standards, use modern programming languages to create system and application software, ensure information protection in computer systems, design, implement, and maintain computer systems and networks, and systematically administer and operate existing information technologies.",
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
		description:
			'Actively working with Linux Bash, MySQL, and Linux Networking, I have developed pipelines using Jenkins. I have also implemented Infrastructure as Code (IaC) principles with Terraform, configuring various services such as Amazon RDS (MySQL). My orchestration skills include managing instances with Ansible in both Microsoft Azure and Amazon Web Services environments. This comprehensive skill set was acquired through immersive hands-on experiences, practical application in real-world scenarios, and guidance from seasoned mentors. The documentation of the progress is available in the <a href="https://github.com/fecton/epam-devops-course" target="_blank" rel="noopener noreferrer">GitHub repository: EPAM DevOps Course</a>',
		disciplines:
			"Linux, Bash, MySQL, Linux Networking, Jenkins, Terraform, Amazon RDS, Ansible, Microsoft Azure, Amazon Web Services.",
		university_logo: "epam.webp",
	},
];
