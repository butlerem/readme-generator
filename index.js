// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      name: "title",
      message: "Name your project."
    },{
      type: "input",
      name: "description",
      message: "Describe the purpose of this project, what problem it solves, and what you learned."
    },{
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use of the project."
    },{
      type: "input",
      name: "screenshot",
      message: "Provide the relative path to the image of a screenshot of the project."
    },{
      type: "input",
      name: "link",
      message: "Provide a URL where a user can access your deployed application."
    },{
      type: "input",
      name: "credits",
      message: "List any collaborators with links to their GitHub profiles and links to any third-party assets."
    },{
      type: "checkbox",
      name: "license",
      message: "Please select a license applicable to this project.",
      choices: ["MIT", "APACHE2.0", "GNU GPLv3", "none"]
    },{
      type: "input",
      name: "test",
      message: "Provide exaples of how to run any tests for your application.",
    },{
      type: "input",
      name: "creator",
      message: "Provide your GitHub username.",
      },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating Professional README.md File...");
    writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
  });
}
init();