import inquirer from "inquirer";
import fs from "fs";
import { generateMarkdown } from "./utils/generateMarkdown.js";
import licenses from "./utils/licenses.json" assert { type: "json" };

const licenseChoices = Object.keys(licenses);

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (input) => (input ? true : "Please provide a title."),
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project.",
    validate: (input) => (input ? true : "Please provide a description."),
  },
  {
    type: "input",
    name: "installation",
    message:
      "Please provide installation instructions for your project. (Leave empty for none)",
  },
  {
    type: "input",
    name: "usage",
    message:
      "Please provide usage information for your project. (Leave empty for none)",
  },
  {
    type: "input",
    name: "credits",
    message: "Please provide credits for your project. (Leave empty for none)",
  },
  {
    type: "list",
    name: "license",
    message: "What license does your project have?",
    choices: ["None", ...licenseChoices],
    loop: false,
  },
  {
    type: "confirm",
    name: "hasTableOfContents",
    message: "Would you like to include a table of contents?",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile("README.md", markdown);
    })
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
