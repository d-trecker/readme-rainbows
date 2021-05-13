const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  Full Repository: https://github.com/${data.github}/${data.title}
  ## Table of Contents
  * Description
  * Installation Instructions
  * Usage 
  * License 
  * Contributors
  * Tests
  * Questions
  ## Description
  ${data.description}
  ## Installation Instrutions
  ${data.install}
  ## Usage Information
  ${data.usage}
  ## License
  ${data.license}
  ## Contributions
  ${data.contribute}
  ## Tests
  ${data.test}
  ## Questions
  Have any questions? 
  - Contact me @: ${data.email}
  - Or find me on GitHub at: https://github.com/${data.github}


`;
}

module.exports = generateMarkdown;
