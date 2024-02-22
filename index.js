import inquirer from "inquirer";
import fs from "fs";
import { generateMarkdown } from "./utils/generateMarkdown.js";

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project.",
  },
  //   "Description",
  //   "Installation",
  //   "Usage",
  //   "License",
  //   "Credits",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      console.log(markdown);

      writeToFile("README.md", markdown);
    })
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
