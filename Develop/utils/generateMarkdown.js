// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'APACHE2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GNU GPLv3': 'https://www.gnu.org/licenses/gpl-3.0.en.html'
  };
  const link = licenseLinks[license];
  return link ? link : '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSections = {
    'MIT': 'This project is licensed under the MIT License.',
    'APACHE2.0': 'This project is licensed under the Apache License 2.0.',
    'GNU GPLv3': 'This project is licensed under the GNU General Public License v3.0.'
  };
  const section = licenseSections[license];
  return section ? section : '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

## Description
${data.description}

## Usage
${data.usage}

![alt-text](${data.screenshot})

${data.link}

## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseBadge(data.license)}

## Credits
${data.credits}

## Testing
${data.test}

## Questions
Please send any questions to [github/${data.creator}](https://github.com/${data.creator}).
`;
}

module.exports = generateMarkdown;