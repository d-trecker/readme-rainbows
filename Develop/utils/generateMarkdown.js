const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const selectLice = data.license[0];
  let thisLice = " "
  if (selectLice === 'MIT') {
    thisLice = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  };
   if (selectLice === 'GNU GPL v3') {
    thisLice = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  };
  if (selectLice === 'Apache') {
    thisLice = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  };
  if (selectLice === 'WTFPL') {
    thisLice = `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`
  };
  if (selectLice == null) {
    thisLice = `---`
  };
 return thisLice;
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) { 
  const selectLink = data.license[0];
  let thisLink = " "
  if (selectLink === 'MIT') {
    thisLink = `https://opensource.org/licenses/MIT`
  };
   if (selectLink === 'GNU GPL v3') {
    thisLink = `https://www.gnu.org/licenses/gpl-3.0`
  };
  if (selectLink === 'Apache') {
    thisLink = `https://opensource.org/licenses/Apache-2.0`
  };
  if (selectLink === 'WTFPL') {
    thisLink = `http://www.wtfpl.net/about/`
  };
  if (selectLink === ' ') {
    thisLink = `" "`
  };
 return thisLink;
};



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  const liceDisplay = data.license[0];
  let actualDisplay = " ";
  if (liceDisplay == null) {
    actualDisplay = ``; 
    console.log(actualDisplay);
  } else {
    actualDisplay = `## License 
    ${data.license}
    `
  }
return actualDisplay;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  Full Repository: https://github.com/${data.github}/${data.title}
  </br>
  ${renderLicenseBadge(data)}
  
  ## Table of Contents
  * [Description](#Description)
  * [Installation Instructions](#Installation)
  * [Usage](#Usage) 
  * [Contributors](#Contributions)
  * [Tests](#Tests)
  * [Questions](#Questions)
  * [License](#License) 
  ## Description
  ${data.description}
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## Contributions
  ${data.contribute}
  ## Tests
  ${data.test}
  ## Questions
  Have any questions? 
  - Contact me @: ${data.email}
  - Or find me on GitHub at: https://github.com/${data.github}
  ${renderLicenseSection(data)}
  ${renderLicenseLink(data)}


`;
}

module.exports = generateMarkdown;
