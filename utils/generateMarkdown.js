
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

//turned inquirer credit and tutorial input for user into an array
function creditTitle(credit)
{
  if(credit){  return '## Credits<br>'}
  else { return ' '}
}
function gitUsers(gitName)
{
  if(gitName){
  gitName=gitName.split(' ');
  gitName=gitName.map(users => `[${users}](https://github.com/${users})<br>`);
  gitName.join(' ');
  return gitName;
  }
  else
  {
    return ' ';
  }
}

function tutorials(tutorialName, tutorialLinks)
{
 
}
// TODO: Create a function to generate markdown for README
//figuring out how to add an image to Usage
function generateMarkdown(data) {

  return `# ${data.title}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ![alt text](${data.appPhoto})
  ${data.usage}

  ${creditTitle(data.credit)}
  ${gitUsers(data.credit)}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
  

  ## Badges

  ## Features

  ## Contributors
 
`;
}

