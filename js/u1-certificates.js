certificates_section = document.getElementsByClassName("education")[0].getElementsByClassName("certification-content")[0]
certificates_section.innerHTML = "";

const cert_data = {
  "certificates": [
    {
      "title": "Terraform Certified Associate",
      "image": "terraform-associate.webp",
      "link": "https://www.credly.com/badges/bbaa3cd1-69fb-464c-99eb-aa93dd1333f1/public_url",
      "planned_year": "",
    },
    {
      "title": "AWS Certified AI Practitioner",
      "image": "aws-ai-practitioner.webp",
      "link": "https://www.credly.com/badges/e0e4b897-19c2-494e-a3a0-163c6a28965c/public_url",
      "planned_year": "",
    },
    {
      "title": "AWS Cloud Practitioner",
      "image": "aws-cloud-practitioner.webp",
      "link": "https://www.credly.com/badges/e3c8af2c-4778-46a5-b9f9-19e03097a6bb/public_url",
      "planned_year": "",
    },
    {
      "title": "Certified Kubernetes Administrator",
      "image": "cka.webp",
      "link": "https://www.credly.com/badges/5f99cf43-b5d3-4ad5-ab3e-e88014388aeb/public_url",
      "planned_year": "",
    },
    {
      "title": "AWS Certified SysOps Administrator - Associate",
      "image": "aws-sysops-administrator-associate.webp",
      "link": "",
      "planned_year": "2025",
    },
    {
      "title": "Cloud Digital Leader",
      "image": "google-cloud-digital-leader.webp",
      "link": "",
      "planned_year": "2025",
    },
    {
      "title": "AWS Certified Advanced Networking - Specialty",
      "image": "aws-advanced-networking-specialty.webp",
      "link": "",
      "planned_year": "2026",
    },
  ]
}

for (let i = 0; i < cert_data.certificates.length; i++) {
  const cert = cert_data.certificates[i];
  const certDiv = document.createElement("div");
  certDiv.className = "certificate";

  const certLink = document.createElement("a");
  certLink.href = cert.link;
  certLink.target = "_blank";

  const certImg = document.createElement("img");
  certImg.src = `./images/certification/${cert.image}`;
  certImg.alt = cert.image;

  certLink.appendChild(certImg);
  certDiv.appendChild(certLink);

  const certTitle = document.createElement("h4");
  certTitle.textContent = cert.title;
  certDiv.appendChild(certTitle);

  if (cert.planned_year.length != 0) { // String is empty
    const plannedYear = document.createElement("h5");
    plannedYear.className = "in-progress-text";
    plannedYear.textContent = `Planned: ${cert.planned_year}`;
    certDiv.appendChild(plannedYear);
  }

  certificates_section.appendChild(certDiv);
}

