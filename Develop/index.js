// TODO: Include packages needed for this application
const inquirer =  require('inquirer');
const fs = require('fs');
const Choice = require('inquirer/lib/objects/choice');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');
// TODO: Create an array of questions for user input
const questions = [ 
    
        {
            type: 'input',
            name: 'title',
            message: "What is your projects name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your projects name!');
                  return false;
                }
            }
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
            name: 'license',
            message: 'Please select a license.',
            choices: ['MIT', 'GNU GPL v3', 'Apache', 'WTFPL']
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
  
 ]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Your ReadMe has been generated! Please check out the __")
        }
    });
};
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("readMeRainbow.md", generateMarkdown(data));
            console.log(data);
        })
}

// Function call to initialize app
init();

