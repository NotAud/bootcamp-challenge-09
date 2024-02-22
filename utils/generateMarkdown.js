// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
export function generateMarkdown(data) {
  console.log(data);
  const { title, description, installation, credits, license, badges } = data;
  let markdown = `# ${title}`;

  markdown += renderOptionalSection("Description", description);
  markdown += renderOptionalSection("Installation", installation);
  markdown += renderOptionalSection("Credits", credits);
  markdown += renderOptionalSection("License", license);
  markdown += renderOptionalSection("Badges", badges);

  return markdown;
}

function renderOptionalSection(title, value) {
  if (!value) {
    return "";
  }

  return `
  ## ${title}
  ${value}
  `;
}
