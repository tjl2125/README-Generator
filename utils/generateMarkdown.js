// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadges = '';
  switch(license){
    case (license.includes('Apache 2.0 License')): {
    licenseBadges +=
      '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  break;}
    case (license.includes('BSD 3-Clause License')): {
    licenseBadges +=
      '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  break;}
  case (license.includes('BSD 2-Clause License')): {
    licenseBadges +=
      '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
  break;}
  case (license.includes('Eclipse Public License 1.0')): {
    licenseBadges +=
      '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
  break;}
  case (license.includes('GNU GPL v3')): {
    licenseBadges +=
      '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)';
  break;}
  case (license.includes('GNU GPL v2')): {
    licenseBadges +=
      '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://img.shields.io/badge/License-GPL%20v2-blue.svg)';
  break;}
  case (license.includes('GNU AGPL v3')): {
    licenseBadges +=
      '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)';
  break;}
  case (license.includes('GNU LGPL v3')): {
    licenseBadges +=
      '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](http://www.gnu.org/licenses/lgpl-3.0)';
  break;}
  case (license.includes('GNU FDL v1.3')): {
    licenseBadges +=
      '[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](http://www.gnu.org/licenses/fdl-1.3)';
  break;}
  case (license.includes('IBM')): {
    licenseBadges +=
      '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
  break;}
  case (license.includes('MIT')): {
    licenseBadges +=
      '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  break;}
  case (license.includes('Mozilla')): {
    licenseBadges +=
      '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  break;}
  case (license.includes('The zlib/libpng License')): {
    licenseBadges +=
      '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)';
  break;}

  if (license === []) {
    return '';
  } else {
    return licenseBadges;
  }
}

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLinks = '';
  switch(license){
  case (license.includes('Apache 2.0 License')): {
    licenseLinks += `- <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a>
`;
  break;}
  case (license.includes('BSD 3-Clause License')): {
    licenseLinks += `- <a href="https://opensource.org/licenses/BSD-3-Clause" target="_blank">BSD 3-Clause</a>
`;
  break;}
  case (license.includes('BSD 2-Clause License')): {
    licenseLinks += `- <a href="https://opensource.org/licenses/BSD-2-Clause" target="_blank">BSD 2-Clause</a>
`;
  break;}
  case (license.includes('Eclipse Public License 1.0')): {
    licenseLinks += `- <a href="https://www.eclipse.org/legal/epl-v10.html" target="_blank">Eclipse Public</a>
`;
  break;}
  case (license.includes('GNU GPL v3')): {
    licenseLinks += `- <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank">GNU GPL v3</a>
`;
  break;}
  case (license.includes('GNU GPL v2')): {
    licenseLinks += `- <a href="https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html" target="_blank">GNU GPL v2</a>
`;
  break;}
  case (license.includes('GNU AGPL v3')): {
    licenseLinks += `- <a href="https://www.gnu.org/licenses/agpl-3.0.en.html" target="_blank">GNU AGPL v3</a>
`;
  break;}
  case (license.includes('GNU LGPL v3')): {
    licenseLinks += `- <a href="https://www.gnu.org/licenses/lgpl-3.0.en.html" target="_blank">GNU LGPL v3</a>
`;
  break;}
  case (license.includes('GNU FDL v1.3')): {
    licenseLinks += `- <a href="https://www.gnu.org/licenses/fdl-1.3.en.html" target="_blank">GNU FDL v1.3</a>
`;
  break;}
  case (license.includes('IBM')): {
    licenseLinks += `- <a href="https://www-03.ibm.com/software/sla/sladb.nsf" target="_blank">IBM</a>
`;
  break;}
  case (license.includes('MIT')): {
    licenseLinks += `- <a href="https://opensource.org/licenses/MIT" target="_blank">MIT</a>
`;
  break;}
  case (license.includes('Mozilla')): {
    licenseLinks += `- <a href="https://www.mozilla.org/en-US/MPL/" target="_blank">Mozilla</a>
`;
  break;}
  case (license.includes('The zlib/libpng License')): {
    licenseLinks += `- <a href="https://opensource.org/licenses/Zlib" target="_blank">The zlib/libpng License</a>
`;
  break;}

  if (license === []) {
    return '';
  } else {
    return licenseLinks;
  }
}

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
};
