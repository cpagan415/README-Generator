// TODO: Include packages needed for this application
// package.json has inquirer so I will use that 
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the name of your project?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Please provide a brief description of the project:'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Give step by step instruction on how to get your program running:'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Provide instructions and screenshot for your project:'
    },
    {
        name: 'credits',
        type: 'input',
        //this may change later on
        message: 'Is this project affiliated with a license?'
    },
    {
        name: 'badges',
        type: 'confirm',
        message: 'Would you like to include badges?'
    },
    {
        name: 'features',
        //this may change later on
        type: 'input',
        message: 'Please descrive the features of the project:'
    },
    {
        name: 'contributing',
        type: 'confirm',
        message: 'Is it ok to contribute to this project?'
    }
];


// TODO: Create a function to write README file
//had to add error parameter because callback error kept being called in terminal
//fs.writefile needs three parameters according to node.js doc 
function writeToFile(fileName, data, error) {
    fs.writeFile(fileName,data, error);
}




// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        writeToFile("README.md", generateMarkdown(data), error =>
        {
            if(error){
                console.log(err);
            }
            else
            {
                console.log('Readme file is complete.');
            }
        });
    });
}

// Function call to initialize app
init();
