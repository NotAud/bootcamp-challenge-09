import licenses from "./licenses.json" assert { type: "json" };

// Generate license badge / link
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }

  const licenseInfo = licenses[license];

  return `## License\n[![License](${licenseInfo.badge})](${licenseInfo.url})\n\n`;
}

// Generate Table of Contents
function renderTableOfContents(data) {
  // Possible sections that can be generated if they exist in the data
  const possibleSections = ["installation", "usage", "credits"];

  let tableOfContents = "## Table of Contents\n";

  // Generate a table of contents entry for each section that exists in the data
  for (const key in data) {
    if (possibleSections.includes(key) && data[key]) {
      tableOfContents += `  - [${
        key.charAt(0).toUpperCase() + key.slice(1)
      }](#${key.toLowerCase()})\n`;
    }
  }

  // Add a newline after the table of contents
  return (tableOfContents += "\n");
}

// Render optional section
function renderOptionalSection(title, value) {
  if (!value) {
    return "";
  }

  return `## ${title}\n${value}\n\n`;
}

export function generateMarkdown(data) {
  // Destructure data
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

  // Table of contents is optional, so only render if it's requested
  if (hasTableOfContents) {
    markdown += renderTableOfContents(data);
  }

  markdown += renderOptionalSection("Installation", installation);
  markdown += renderOptionalSection("Usage", usage);
  markdown += renderOptionalSection("Credits", credits);
  markdown += renderLicenseSection(license);

  return markdown;
}
