// TODO: Include packages needed for this application
// using inquirer as requested by challenge 
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input

const questions = [
    /*
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Please provide a brief description of the project:'
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Give step by step instructions on how to get your program running:'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Provide instructions for for use:'
    },
    {
        name: 'appScreenshot',
        type: 'confirm',
        message: 'Would you like to include screenshots for you application?'
    },
    //placing a conditional to add screenshot
    {
        name: 'appPhoto',
        type: 'input',
        message:'Please place the path for your photo here: ',
        when:({ appScreenshot }) => 
        {
            if(appScreenshot)
            {
                return true;
            }
            else{
                return false;
            }
        }
    },*/
    {
        name: 'creditConfirm',
        type: 'confirm',
        message: 'Are there any collaborators with this project?'
    },
    {
        name: 'credit',
        type: 'input',
        message: 'Please enter github usernames affiliated with the project here:',
        when:({ creditConfirm }) =>
        {
           if(creditConfirm)
           {
               return true;
           }
           else
           {
            return false;
           }
        }
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
