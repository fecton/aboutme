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
      "disciplines": "Linux, Bash, MySQL, Linux Networking, Jenkins, Terraform, Amazon RDS, Ansible, Microsoft Azure, Amazon Web Services."
    }
  ]
};


// Use DocumentFragment for better performance
const fragment = document.createDocumentFragment();

// Create timeline container
const timeline = document.createElement("div");
timeline.className = "education-timeline";

for (let i = 0; i < edu_data.educations.length; i++) {
  const edu = edu_data.educations[i];

  // Create education card
  const card = document.createElement("article");
  card.className = "education-card";

  // Header section with title and badge
  const header = document.createElement("div");
  header.className = "education-header";

  const titleWrapper = document.createElement("div");
  titleWrapper.className = "education-title-wrapper";

  const title = document.createElement("h3");
  title.className = "education-title";
  title.textContent = edu.specialty_title;
  titleWrapper.appendChild(title);

  header.appendChild(titleWrapper);

  // Graduated badge
  const graduatedBadge = document.createElement("span");
  graduatedBadge.className = "education-badge graduated";
  graduatedBadge.innerHTML = '<i class="fa fa-graduation-cap" aria-hidden="true"></i> Graduated';
  header.appendChild(graduatedBadge);

  card.appendChild(header);

  // Meta section (university)
  const meta = document.createElement("div");
  meta.className = "education-meta";

  // University
  const universityItem = document.createElement("div");
  universityItem.className = "education-meta-item";
  universityItem.innerHTML = '<i class="fa fa-university" aria-hidden="true"></i>';
  if (edu.university_link) {
    const universityLink = document.createElement("a");
    universityLink.href = edu.university_link;
    universityLink.target = "_blank";
    universityLink.rel = "noopener noreferrer";
    universityLink.textContent = edu.university_title;
    universityLink.setAttribute("aria-label", `Visit ${edu.university_title} website (opens in new tab)`);
    universityItem.appendChild(universityLink);
  } else {
    const universityText = document.createElement("span");
    universityText.textContent = edu.university_title;
    universityItem.appendChild(universityText);
  }
  meta.appendChild(universityItem);

  card.appendChild(meta);

  // Dates section
  const dates = document.createElement("div");
  dates.className = "education-dates";
  dates.innerHTML = `<i class="fa fa-calendar" aria-hidden="true"></i> ${edu.dates}`;
  card.appendChild(dates);

  // Documents section (diploma and supplement)
  const hasDocuments = (edu.diploma_pdf && edu.diploma_pdf !== "") || (edu.diploma_suplement_pdf && edu.diploma_suplement_pdf !== "");
  if (hasDocuments) {
    const documentsDiv = document.createElement("div");
    documentsDiv.className = "education-documents";

    if (edu.diploma_pdf && edu.diploma_pdf !== "") {
      const diplomaLink = document.createElement("a");
      diplomaLink.href = edu.diploma_pdf;
      diplomaLink.target = "_blank";
      diplomaLink.rel = "noopener noreferrer";
      diplomaLink.className = "education-document-link";
      diplomaLink.innerHTML = '<i class="fa fa-file-pdf-o" aria-hidden="true"></i> View Diploma';
      diplomaLink.setAttribute("aria-label", "View diploma PDF (opens in new tab)");
      documentsDiv.appendChild(diplomaLink);
    }

    if (edu.diploma_suplement_pdf && edu.diploma_suplement_pdf !== "") {
      const supplementLink = document.createElement("a");
      supplementLink.href = edu.diploma_suplement_pdf;
      supplementLink.target = "_blank";
      supplementLink.rel = "noopener noreferrer";
      supplementLink.className = "education-document-link";
      supplementLink.innerHTML = '<i class="fa fa-file-pdf-o" aria-hidden="true"></i> View Diploma Supplement';
      supplementLink.setAttribute("aria-label", "View diploma supplement PDF (opens in new tab)");
      documentsDiv.appendChild(supplementLink);
    }

    card.appendChild(documentsDiv);
  }

  // Description section
  if (edu.description && edu.description.trim() !== "") {
    const description = document.createElement("div");
    description.className = "education-description";
    description.innerHTML = edu.description;
    card.appendChild(description);
  }

  // Disciplines section
  if (edu.disciplines && edu.disciplines.trim() !== "") {
    const details = document.createElement("details");
    details.className = "education-disciplines-toggle";

    const summary = document.createElement("summary");
    summary.textContent = "Courses & Disciplines";
    details.appendChild(summary);

    const disciplinesContent = document.createElement("div");
    disciplinesContent.className = "education-disciplines-content";

    const disciplineTags = document.createElement("div");
    disciplineTags.className = "education-discipline-tags";

    // Parse disciplines string and create tags
    const disciplines = edu.disciplines.split(/,\s*/).filter(discipline => discipline.trim() !== "");
    disciplines.forEach(discipline => {
      const tag = document.createElement("span");
      tag.className = "education-discipline-tag";
      tag.textContent = discipline.trim().replace(/\.$/, ""); // Remove trailing period
      disciplineTags.appendChild(tag);
    });

    disciplinesContent.appendChild(disciplineTags);
    details.appendChild(disciplinesContent);
    card.appendChild(details);
  }

  timeline.appendChild(card);
}

fragment.appendChild(timeline);
education_section.appendChild(fragment);

} catch (error) {
  console.error("Error loading education section:", error);
  const errorMsg = document.querySelector(".education-content");
  if (errorMsg) {
    errorMsg.textContent = "Unable to load education information. Please refresh the page.";
  }
}
