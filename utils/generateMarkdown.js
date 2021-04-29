const fs = require('fs');


module.exports = generateMarkdown;
//Added more functions below to only make sections appear if user wants the section placed 

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var license = license.toString();
  
  if(license === 'MIT' || license === 'GNU' || license === 'Mozilla' || license === 'Apache' || license === 'Boost')
  {
    return `[![license](https://img.shields.io/badge/license-${license}-blue)]`;
  }
  else if(license === 'None used.')
  {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var license = license.toString();
  switch(license)
  {
    case 'MIT':
      return '(https://www.mit.edu/~amini/LICENSE.md)';
    case 'GNU':
      return '(https://www.gnu.org/licenses/gpl-3.0.txt)';
    case 'Mozilla':
      return 'https://www.mozilla.org/en-US/MPL/2.0/';
    case 'Apache':
      return '(https://www.apache.org/licenses/LICENSE-2.0.txt)';
    case 'Boost':
      return '(https://www.boost.org/LICENSE_1_0.txt)';
    default:
      return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) 
{
  var license = license.toString();
  if(license === 'MIT' || license === 'GNU' || license === 'Mozilla' || license === 'Apache' || license === 'Boost')
  {
    return '## License';
  }
  else if(license === 'None used.')
  {
    return ' ';
  }
}

//These are optional sections and will appear if user wants to add them
function creditTitle(credit)
{
  if(credit){  return '## Credits<br>'}
  else { return ' '}
}
function gitUsers(gitName)
{
  if(gitName){
  gitName=gitName.map(users => `[${users}](https://github.com/${users})<br>`);
 
  return gitName.join("");
  }
  else 
  {
    return ' ';
  }
}

//reference how to combine two arrays on stack overflow, wanted to give the user an option to list tutorial links with information
function tutorials(tutorialTitle, tutorialLinks)
{
  if(tutorialLinks)
  {
    var aboutTutorialArray = tutorialTitle;
    var links = tutorialLinks;

    var newArray = aboutTutorialArray.map((about, index)=>  `${about}:` + ' ' + `[(${links[index]})]`)
    return newArray;
  }
  else{
    return ' ';
  }
}

  //function to add screenshot 
  function addScreenshot(screenshot)
  {
    //adding directories so the user can upload a screenshot
    //used https://attacomsian.com/blog/nodejs-create-directory#:~:text=In%20a%20Node.,directory%20at%20the%20given%20location as a reference
    //based on the reference, 'recursive' would allow me to create parent directories such as assets in this instance
    var photoDir = "./assets/images";
    if(screenshot)
    {
      fs.mkdir(photoDir, { recursive: true}, (err) =>{
        if(err)
        {
          throw err;
        }
      })
      
    }
  };
 //generate table of Contacts for option categories such as credit and license
 function optionalSectionCredit(credit)
 {
   if(credit)
   {
     return '* [Credit](#Credit)'
   }
   else {return ' '}
 }

 function optionalSectionLicense(license)
 {
   if(license)
   {
     return '* [License](#License)'
   }
   else {return ' '}
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

addScreenshot(data.appScreenshot);

  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contacts
  * [Installation](#installation)
  * [Usage](#usage)
  ${optionalSectionCredit(data.credit)}
  ${optionalSectionLicense(data.license)}
  * [Questions](#Questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${creditTitle(data.credit)}
  ${gitUsers(data.credit.split(','))}
  ${tutorials(data.aboutTutorial.split(','), data.tutorial.split(','))}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
 
  ## Questions
  [${data.questions}](https://github.com/${data.questions})
  ${data.email}
  ${data.instructions}
`;
}

