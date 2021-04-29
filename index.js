// TODO: Include packages needed for this application
// using inquirer as requested by challenge, added fs so info gets transferred to README
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input


const validateInput = async(input) =>
        {
            if(input === '')
            {
                console.log('This is required');
            }
            else{
            return true;
            }
        }

const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project? (required)',
        validate: validateInput
    },
    {
        name: 'description',
        type: 'input',
        message: 'Please provide a brief description of the project:(required)',
        validate: validateInput
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Give step by step instructions on how to get your program running:(required)',
        validate: validateInput
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Provide instructions for for use:(required)',
        validate: validateInput
    },
    {
        name: 'appScreenshot',
        type: 'confirm',
        message: 'Would you like to include screenshots for you application?'
    },
    //placing a conditional to add screenshot
    {
        name: 'appPhoto',
        message:'Assets folder will be created. Remember to upload your screenshot. Press Enter to Continue.',
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
    },
    {
        name: 'creditConfirm',
        type: 'confirm',
        message: 'Are there any collaborators with this project?'
    },
    {
        name: 'credit',
        type: 'input',
        message: 'Please enter github usernames affiliated with the project here (separate by a comma):',
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
    },
    {
        name: 'tutorialConfirm',
        type: 'confirm',
        message: 'Did you follow any tutorials?'
    },
    {
        name: 'aboutTutorial',
        type: 'input',
        message: 'Place tutorial titles and author (separate by comma):',
        when:({ tutorialConfirm }) =>
        {
           if(tutorialConfirm)
           {
               return true;
           }
           else
           {
            return false;
           }
        }
    },
    {
        name: 'tutorial',
        type: 'input',
        message: 'Place links to tutorials here (separate by a comma in the order of titles and author entered previously): ',
        when:({ tutorialConfirm }) =>
        {
           if(tutorialConfirm)
           {
               return true;
           }
           else
           {
            return false;
           }
        }
    },
    {
        name: 'license',
        type: 'list',
        message: 'If you used a license please pick one of the options below. (Press <space> to select, enter to select none)',
        choices: ['MIT', 'GNU', 'Mozilla', 'Apache', 'Boost', 'None used.'],
    },
    {
        name: 'questions',
        type:'input',
        message: 'Enter your github username: (required)',
        validate: validateInput
    },
    {
        name: 'contactConfirm',
        type: 'confirm',
        message: 'Would you like to enter ways in which to contact you in regards to the project?: '
    },
    {
        name: 'email',
        type: 'input',
        message: 'Enter your email: ',
        when:({ contactConfirm }) =>
        {
            if(contactConfirm)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    },
    {
        name: 'instructions',
        type: 'input',
        message: 'Enter instructions on how to contact you if there are additional questions: ',
        when:({ contactConfirm }) =>
        {
            if(contactConfirm)
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
