"use strict";

// Error handling wrapper
try {
  const educationElements = document.getElementsByClassName("education");
  if (!educationElements || educationElements.length === 0) {
    console.error("Education section not found");
    throw new Error("Required DOM element not found");
  }

  const certificationElements = educationElements[0].getElementsByClassName("certification-content");
  if (!certificationElements || certificationElements.length === 0) {
    console.error("Certification content section not found");
    throw new Error("Required DOM element not found");
  }

  const certificates_section = certificationElements[0];
  certificates_section.innerHTML = "";

const cert_data = {
  "certificates": [
    {
      "title": "Terraform Certified Associate",
      "image": "terraform-associate.webp",
      "link": "https://www.credly.com/badges/bbaa3cd1-69fb-464c-99eb-aa93dd1333f1/public_url",
      "planned_year": ""
    },
    {
      "title": "AWS Certified AI Practitioner",
      "image": "aws-ai-practitioner.webp",
      "link": "https://www.credly.com/badges/e0e4b897-19c2-494e-a3a0-163c6a28965c/public_url",
      "planned_year": ""
    },
    {
      "title": "AWS Cloud Practitioner",
      "image": "aws-cloud-practitioner.webp",
      "link": "https://www.credly.com/badges/e3c8af2c-4778-46a5-b9f9-19e03097a6bb/public_url",
      "planned_year": ""
    },
    {
      "title": "Certified Kubernetes Administrator",
      "image": "cka.webp",
      "link": "https://www.credly.com/badges/5f99cf43-b5d3-4ad5-ab3e-e88014388aeb/public_url",
      "planned_year": ""
    },
    {
      "title": "AWS Certified SysOps Administrator - Associate",
      "image": "aws-sysops-administrator-associate.webp",
      "link": "",
      "planned_year": "2026"
    },
    {
      "title": "Cloud Digital Leader",
      "image": "google-cloud-digital-leader.webp",
      "link": "",
      "planned_year": "2026"
    },
    {
      "title": "AWS Certified Advanced Networking - Specialty",
      "image": "aws-advanced-networking-specialty.webp",
      "link": "",
      "planned_year": "2026"
    },
    {
      "title": "AWS Solutions Architect Associate",
      "image": "aws-solution-architect-associate.webp",
      "link": "",
      "planned_year": "2026"
    }
  ]
};

// Use DocumentFragment for better performance
const fragment = document.createDocumentFragment();

for (let i = 0; i < cert_data.certificates.length; i++) {
  const cert = cert_data.certificates[i];
  const certDiv = document.createElement("div");
  certDiv.className = "certificate";

  const certLink = document.createElement("a");
  certLink.href = cert.link || "#";
  certLink.target = "_blank";
  certLink.rel = "noopener noreferrer";
  certLink.setAttribute("aria-label", `View ${cert.title} certification`);

  const certImg = document.createElement("img");
  certImg.src = `./images/certification/${cert.image}`;
  certImg.alt = cert.title;
  certImg.loading = "lazy";
  certImg.width = 150;
  certImg.height = 150;

  certLink.appendChild(certImg);
  certDiv.appendChild(certLink);

  const certTitle = document.createElement("h4");
  certTitle.textContent = cert.title;
  certDiv.appendChild(certTitle);

  if (cert.planned_year && cert.planned_year.length !== 0) {
    const plannedYear = document.createElement("h5");
    plannedYear.className = "in-progress-text";
    plannedYear.textContent = `Planned: ${cert.planned_year}`;
    certDiv.appendChild(plannedYear);
  }

  fragment.appendChild(certDiv);
}

certificates_section.appendChild(fragment);

} catch (error) {
  console.error("Error loading certificates:", error);
  const errorMsg = document.querySelector(".certification-content");
  if (errorMsg) {
    errorMsg.textContent = "Unable to load certifications. Please refresh the page.";
  }
}
