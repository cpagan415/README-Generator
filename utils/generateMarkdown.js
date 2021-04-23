
module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//figuring out how to add an image to Usage
function generateMarkdown(data) {
  //turned inquirer credit input for user into an array
  let users = data.credit.split(' ');
  //not sure how to place github user names on a new line
  users= users.map(gitName => `[${gitName}](https://github.com/${gitName})`);

  console.log(data);
  //printing out data for my reference
  return `# ${data.title}

  ##Description
  ${data.description}

  ##Installation
  ${data.installation}

  ##Usage
  ![alt text](${data.appPhoto})
  ${data.usage}

  ##Credits
  ${users}

  ##License

  ##Badges

  ##Features

  ##Contributors
 
`;
}

