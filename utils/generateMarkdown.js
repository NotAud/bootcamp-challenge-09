import licenses from "./licenses.json" assert { type: "json" };

function renderLicenseSection(license) {
  if (!license) {
    return "";
  }

  const licenseInfo = licenses[license];

  return `## License\n[![License](${licenseInfo.badge})](${licenseInfo.url})\n\n`;
}

function renderTableOfContents(data) {
  const possibleSections = ["installation", "usage", "credits"];

  let tableOfContents = "## Table of Contents\n";
  for (const key in data) {
    if (possibleSections.includes(key)) {
      tableOfContents += `  - [${key}](#${key.toLowerCase()})\n`;
    }
  }

  return (tableOfContents += "\n");
}

function renderOptionalSection(title, value) {
  if (!value) {
    return "";
  }

  return `## ${title}\n${value}\n\n`;
}

export function generateMarkdown(data) {
  const {
    title,
    description,
    hasTableOfContents,
    installation,
    usage,
    credits,
    license,
  } = data;
  let markdown = `# ${title}\n\n`;

  markdown += renderOptionalSection("Description", description);

  if (hasTableOfContents) {
    markdown += renderTableOfContents(data);
  }

  markdown += renderOptionalSection("Installation", installation);
  markdown += renderOptionalSection("Usage", usage);
  markdown += renderOptionalSection("Credits", credits);
  markdown += renderLicenseSection(license);

  return markdown;
}
