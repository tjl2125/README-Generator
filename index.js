const fs = require("fs");
const questions = require("./questions.js");
const inquirer = require("inquirer");

const generateREADME = (answers) =>

`# Title: ${answers.title}

# Table of Contents:
* [Title](#Title)
* [Description](#Description)
* [Usage](#Usage)
* [Installation](#Installation)
* [Contribution](#Contribution)
* [Tests](#Tests)
* [License](#License)
* [Github](#Github)
* [Email](#Email)

## Description:
${answers.description}

## Usage:
${answers.usage}

## Contribution:
${answers.contribution}

## Tests
Some of the tests that I ran for this project include: ${answers.tests}.

# License
This project is under the ${answers.license} License

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)

Copyright (c) 2021 ${answers.name}

# Questions
## Github
Here is my profile: https://github.com/https://github.com/Defy1x${answers.github}  if you want to see more of my work.

## Email
Here is my email: ${answers.email}. Feel free to reach me here.`;

inquirer
    .prompt(questions)
    .then((data) => {
        const filename = `myREADME.md`;
      
        fs.writeFile(filename, generateREADME(data), (err) =>
          err ? console.log(err) : console.log('Success!')
        );
      });