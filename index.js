// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const license1 = require('./generateLicense.js')
// TODO: Create an array of questions for user input
const generateReadMe = ({ title, license, description, usage, installation, contributions, test, github, email, contact }) =>
  `
![License](https://img.shields.io/badge/License-${license}-blue.svg)

# ${title}


## Table of Contents:

1.[Description](#description)

2.[Usage](#usage)

3.[Installation](#installation)

4.[Contribution Guidelines](#contribution-guidelines)

5.[Testing Instuctions](#testing-instuctions)

6.[Questions](#questions)

7.[License](#license)



## Description:
${description}


## Usage: 
${usage}
    

## Installation: 
${installation}
    

## Contribution Guidelines:
${contributions}
    

## Testing Instuctions:
${test}
    

## Questions:
Github Username: ${github} Link to Github: https://github.com/${github}
Email: ${email} How to Reach Me: ${contact}



`
const questions = inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose your license.',
      choices: ["MIT", "Boost Software License 1.0", "Unlicense"]
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a brief description of your project.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Write about how to code should be used.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Write about how users can install and use your code.',
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'Write about any contribution guidlines.',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Write testing instuctions',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type:'input',
      name:'contact',
      message:'How should other reach out to you by email?',
    }
  ])

  // TODO: Create a function to write README file
  .then((answers) => {
    doit=""
    switch (answers.license) {
      case 'MIT':
        copyright = license1.MIT
        break;
      case 'Boost Software License 1.0':
        copyright = license1.Boost
        break;
      case 'Unlicense':
        copyright = license1.Unlicense
        break;

    }
    const READMECONTENT = generateReadMe(answers,);
    fs.writeFile('README.md', READMECONTENT, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
    fs.appendFile('README.md', copyright, (err) =>
    err ? console.log(err) : console.log('Successfully wrote licenses to README.md!') 
  );
  })




