education_section = document.getElementsByClassName("education-content")[0];

education_section.innerHTML = "";
education_section.innerText = "";

const edu_data = {
  "educations": [
    {
      "specialty_title": "Computer Engineering: Computer Networks and Systems",
      "university_title": "Kharkiv Aviation Institute",
      "university_link": "https://khai.edu/en/",
      "dates": "2021 September - 2025 August",
      "description": "Professionally, a Bachelor in this field may hold positions in the information technologies industry such as Information Technology Expert, Technician on System Administration, Specialist in Software Design and Testing, Specialist in Computer Software Design, and Technician-Programmer in IT departments of educational institutions, scientific-research, design, production, public, private, and IT enterprises. The educational program has provided the ability to solve complex specialized and practical problems in computer science , apply legal frameworks and international standards , use modern programming languages to create system and application software , ensure information protection in computer systems , design, implement, and maintain computer systems and networks , and systematically administer and operate existing information technologies.",
      "disciplines": "English Language (B1), Communication Skills Training, Fundamentals of Professional Ukrainian-Language Communication, Higher Mathematics, Discrete Mathematics, Fundamentals of Computer Operation, Programming Technologies, Law Studies, Physics, Computer Electronics, Educational Practice, Philosophy, Information and Coding Theory, Computer Architecture, Data Models and Structures, Computer Circuitry, Introductory Practice, Theoretical Foundations of Cryptology, Business Communication Psychology, Programming Technologies (Course Project), Programmable Systems-on-Chip, Computer Logic, Operating Systems, Mobile Programming, Embedded Systems, Web Technologies, Programming Artificial Intelligence Tools in Python, WEB/UI/UX Design, Java Technologies, Git Technology for Team Project Development, Databases, IoT Systems Programming, Fundamentals of Web UI Development (Front-End), Industrial Practice, Big Data Technologies, Information Security in Computer Systems, DevOps and Cloud Computing, Reliability and Fault Tolerance of Computer Systems, Web Development (Back-End), System Programming, Economics and IT Project Management, Software Arhictecture (Web), Microprocessor Control Systems Based on Arduino Platforms, Virtual and Augmented Reality Technologies, Testing and Quality Assurance",
    },
    {
      "specialty_title": "Cloud & DevOps Preparation Program",
      "university_title": "EPAM University",
      "university_link": "https://www.epamglobalcampus.com/",
      "dates": "2022 June - 2023 March",
      "description": "Actively working with Linux Bash, MySQL, and Linux Networking, I have developed pipelines using Jenkins. I have also implemented Infrastructure as Code (IaC) principles with Terraform, configuring various services such as Amazon RDS (MySQL). My orchestration skills include managing instances with Ansible in both Microsoft Azure and Amazon Web Services environments. This comprehensive skill set was acquired through immersive hands-on experiences, practical application in real-world scenarios, and guidance from seasoned mentors. The documentation of the progress is available in the GitHub repository: EPAM DevOps Course <a href=\"https://github.com/fecton/epam-devops-course\" target=\"_blank\">(CLICK-ME)</a>",
      "disciplines": "Linux, Bash, MySQL, Linux Networking, Jenkins, Terraform, Amazon RDS, Ansible, Microsoft Azure, Amazon Web Services.",
      "disciplines": "Linux, Bash, MySQL, Linux Networking, Jenkins, Terraform, Amazon RDS, Ansible, Microsoft Azure, Amazon Web Services.",
    }
  ]
}


for (let i = 0; i < edu_data.educations.length; i++) {
  const edu = edu_data.educations[i];

  const title = document.createElement("h4");
  title.className = "education-title accent";
  title.innerHTML = edu.specialty_title;
  education_section.appendChild(title);

  const schoolDiv = document.createElement("div");
  schoolDiv.className = "education-school";

  const schoolH5 = document.createElement("h5");
  schoolH5.innerHTML = `${edu.university_title} <a href="${edu.university_link}" target="_blank">(CLICK-ME)</a>`;
  schoolDiv.appendChild(schoolH5);

  const schoolSpan = document.createElement("span");
  schoolDiv.appendChild(schoolSpan);

  const statusU = document.createElement("u");
  statusU.innerHTML = "GRADUATED (100/100)";
  schoolDiv.appendChild(statusU);
  schoolDiv.appendChild(document.createElement("br"));

  const datesH5 = document.createElement("h5");
  datesH5.innerHTML = `&gt; ${edu.dates}`;
  schoolDiv.appendChild(datesH5);
  education_section.appendChild(schoolDiv);

  const descriptionP = document.createElement("p");
  descriptionP.className = "education-description";

  const descInnerP = document.createElement("p");
  descInnerP.innerHTML = edu.description;
  descriptionP.appendChild(descInnerP);

  const details = document.createElement("details");
  const summary = document.createElement("summary");
  const summaryH5 = document.createElement("h5");
  summaryH5.innerHTML = "<u>▼ Disciplines</u>";
  summary.appendChild(summaryH5);
  details.appendChild(summary);

  const disciplinesP = document.createElement("p");
  disciplinesP.innerHTML = edu.disciplines;
  details.appendChild(disciplinesP);
  descriptionP.appendChild(details);

  education_section.appendChild(descriptionP);

  if (i != edu_data.educations.length - 1) {
    const hr = document.createElement("hr");
    education_section.appendChild(hr);
  }
}
