"use strict";

// Error handling wrapper
try {
  const educationElements = document.getElementsByClassName("education-content");
  if (!educationElements || educationElements.length === 0) {
    console.error("Education content section not found");
    throw new Error("Required DOM element not found");
  }

  const education_section = educationElements[0];
  education_section.innerHTML = "";

const edu_data = {
  "educations": [
    {
      "specialty_title": "Computer Engineering: Computer Networks and Systems",
      "university_title": "Kharkiv Aviation Institute",
      "university_link": "https://khai.edu/en/",
      "dates": "2021 September - 2025 August",
      "diploma_pdf": "pdf/diploma.pdf",
      "diploma_suplement_pdf": "pdf/diploma-suplement.pdf",
      "description": "Professionally, a Bachelor in this field may hold positions in the information technologies industry such as Information Technology Expert, Technician on System Administration, Specialist in Software Design and Testing, Specialist in Computer Software Design, and Technician-Programmer in IT departments of educational institutions, scientific-research, design, production, public, private, and IT enterprises. The educational program has provided the ability to solve complex specialized and practical problems in computer science , apply legal frameworks and international standards , use modern programming languages to create system and application software , ensure information protection in computer systems , design, implement, and maintain computer systems and networks , and systematically administer and operate existing information technologies.",
      "disciplines": "English Language (B1), Communication Skills Training, Fundamentals of Professional Ukrainian-Language Communication, Higher Mathematics, Discrete Mathematics, Fundamentals of Computer Operation, Programming Technologies, Law Studies, Physics, Computer Electronics, Educational Practice, Philosophy, Information and Coding Theory, Computer Architecture, Data Models and Structures, Computer Circuitry, Introductory Practice, Theoretical Foundations of Cryptology, Business Communication Psychology, Programming Technologies (Course Project), Programmable Systems-on-Chip, Computer Logic, Operating Systems, Mobile Programming, Embedded Systems, Web Technologies, Programming Artificial Intelligence Tools in Python, WEB/UI/UX Design, Java Technologies, Git Technology for Team Project Development, Databases, IoT Systems Programming, Fundamentals of Web UI Development (Front-End), Industrial Practice, Big Data Technologies, Information Security in Computer Systems, DevOps and Cloud Computing, Reliability and Fault Tolerance of Computer Systems, Web Development (Back-End), System Programming, Economics and IT Project Management, Software Arhictecture (Web), Microprocessor Control Systems Based on Arduino Platforms, Virtual and Augmented Reality Technologies, Testing and Quality Assurance",
    },
    {
      "specialty_title": "Cloud & DevOps Preparation Program",
      "university_title": "EPAM University",
      "university_link": "https://www.epamglobalcampus.com/",
      "dates": "2022 June - 2023 March",
      "diploma_pdf": "",
      "diploma_suplement_pdf": "",
      "description": "Actively working with Linux Bash, MySQL, and Linux Networking, I have developed pipelines using Jenkins. I have also implemented Infrastructure as Code (IaC) principles with Terraform, configuring various services such as Amazon RDS (MySQL). My orchestration skills include managing instances with Ansible in both Microsoft Azure and Amazon Web Services environments. This comprehensive skill set was acquired through immersive hands-on experiences, practical application in real-world scenarios, and guidance from seasoned mentors. The documentation of the progress is available in the <a href=\"https://github.com/fecton/epam-devops-course\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub repository: EPAM DevOps Course</a>",
      "disciplines": "Linux, Bash, MySQL, Linux Networking, Jenkins, Terraform, Amazon RDS, Ansible, Microsoft Azure, Amazon Web Services.",
    }
  ]
}


// Use DocumentFragment for better performance
const fragment = document.createDocumentFragment();

for (let i = 0; i < edu_data.educations.length; i++) {
  const edu = edu_data.educations[i];

  const title = document.createElement("h4");
  title.className = "education-title accent";
  title.textContent = edu.specialty_title;
  fragment.appendChild(title);

  const schoolDiv = document.createElement("div");
  schoolDiv.className = "education-school";

  const schoolH5 = document.createElement("h5");
  const universityText = document.createTextNode(edu.university_title + " ");
  schoolH5.appendChild(universityText);

  if (edu.university_link) {
    const universityLink = document.createElement("a");
    universityLink.href = edu.university_link;
    universityLink.target = "_blank";
    universityLink.rel = "noopener noreferrer";
    universityLink.textContent = "(Visit Website)";
    universityLink.setAttribute("aria-label", `Visit ${edu.university_title} website (opens in new tab)`);
    schoolH5.appendChild(universityLink);
  }
  schoolDiv.appendChild(schoolH5);

  const statusU = document.createElement("u");
  statusU.textContent = "GRADUATED (100/100)";
  schoolDiv.appendChild(statusU);
  schoolDiv.appendChild(document.createElement("br"));

  if (edu.diploma_pdf && edu.diploma_pdf !== "") {
    const diploma_pdf = document.createElement("h5");
    const diplomaText = document.createTextNode("Diploma ");
    diploma_pdf.appendChild(diplomaText);

    const diplomaLink = document.createElement("a");
    diplomaLink.href = edu.diploma_pdf;
    diplomaLink.target = "_blank";
    diplomaLink.rel = "noopener noreferrer";
    diplomaLink.textContent = "(View PDF)";
    diplomaLink.setAttribute("aria-label", "View diploma PDF (opens in new tab)");
    diploma_pdf.appendChild(diplomaLink);

    fragment.appendChild(diploma_pdf);
    fragment.appendChild(document.createElement("span"));
  }

  if (edu.diploma_suplement_pdf && edu.diploma_suplement_pdf !== "") {
    const diploma_suplement_pdf = document.createElement("h5");
    const suplementText = document.createTextNode("Diploma Suplement ");
    diploma_suplement_pdf.appendChild(suplementText);

    const suplementLink = document.createElement("a");
    suplementLink.href = edu.diploma_suplement_pdf;
    suplementLink.target = "_blank";
    suplementLink.rel = "noopener noreferrer";
    suplementLink.textContent = "(View PDF)";
    suplementLink.setAttribute("aria-label", "View diploma supplement PDF (opens in new tab)");
    diploma_suplement_pdf.appendChild(suplementLink);

    fragment.appendChild(diploma_suplement_pdf);
  }

  const datesH5 = document.createElement("h5");
  datesH5.innerHTML = `&gt; ${edu.dates}`;
  schoolDiv.appendChild(datesH5);
  fragment.appendChild(schoolDiv);

  const descriptionP = document.createElement("p");
  descriptionP.className = "education-description";

  const descInnerP = document.createElement("p");
  descInnerP.innerHTML = edu.description;
  descriptionP.appendChild(descInnerP);

  const details = document.createElement("details");
  const summary = document.createElement("summary");
  const summaryH5 = document.createElement("h5");
  summaryH5.innerHTML = "<u>Disciplines</u>";
  summary.appendChild(summaryH5);
  details.appendChild(summary);

  const disciplinesP = document.createElement("p");
  disciplinesP.textContent = edu.disciplines;
  details.appendChild(disciplinesP);
  descriptionP.appendChild(details);

  fragment.appendChild(descriptionP);

  if (i !== edu_data.educations.length - 1) {
    const hr = document.createElement("hr");
    fragment.appendChild(hr);
  }
}

education_section.appendChild(fragment);

} catch (error) {
  console.error("Error loading education section:", error);
  const errorMsg = document.querySelector(".education-content");
  if (errorMsg) {
    errorMsg.textContent = "Unable to load education information. Please refresh the page.";
  }
}
