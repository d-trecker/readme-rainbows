// TODO: Include packages needed for this application
const inquirer =  require('inquirer');
const Choice = require('inquirer/lib/objects/choice');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'project',
            message: "What is your projects name?"
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a brief descritption of your project.'
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please include installation instructions'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please add usage information.'
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Please include and contributers.'
        },
        {
            type: 'input',
            name :'test',
            message: 'Please enter test instructions.'
        }, 
        {
            type: 'checkbox',
            name: 'badge',
            message: 'Please select a license.',
            choices: ['MIT', 'GNU']
        }, 
        {
            type:'input',
            name: 'github',
            message: 'Enter your GitHub user name.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.'
        }
    ])
};

questions();
console.log(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
