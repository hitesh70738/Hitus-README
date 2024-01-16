const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// 1. Come up with README.md file structure
// 2. decide what questions to ask and the question format
// 3. Handle the user input 
// 4. Generate the README.md
// 5. Write to README.md file


// array of questions for user
const questions = [
    inquirer
    .createPromptModule([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?'
        },
        {
            type: 'input',
            name: 'Description',
            message: 'What is the description you want to add?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation steps?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage?'
        },
        {
            type: 'list',
            name: 'licence',
            message: 'What licence do you hold?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are the contribution guidelines'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the test instruction?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your github?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email?'
        },
    ])
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('readme', questions, (err))
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
