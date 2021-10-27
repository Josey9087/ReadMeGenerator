// These are the requirments needed to run the code.
const inquirer = require('inquirer');
const fs = require('fs');
const license1 = require('./generateLicense.js');
// This code uses an input to then run a function which writes out the README.md file using the arguments given to it.
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
// The const questions will activate the inquirer which is able to prompt the user in the terminal for inputs and give them key names.
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
      message: 'Write about how users can install your code.',
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

// The .then line takes the answers form the inquirer prompt and allows them to be used in the rest of the code thats within the function.
// The switch interates through possibles cases that the key license from the answers could be. It sets copyright to the corresponding license.
// Thhe license1 uses the exports from the file generateLicense to give copyright its value.
  .then((answers) => {
    copyright=""
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
    // The const READMECONTENT uses the generateReadME function and gives it the answers from the inquirer prompt.
    const READMECONTENT = generateReadMe(answers);
    // The fs writes to the file by telling it what file it needs to write to or create, the content, and the callback.
    fs.writeFile('README.md', READMECONTENT, (err) =>
    // If an err is given as a response then it will be console logged otherwise it will write "Successfully created README.md!"
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
    // This appeneds the  copyright license of the chosen license to the bottom of the README file.
    fs.appendFile('README.md', copyright, (err) =>
    err ? console.log(err) : console.log('Successfully wrote licenses to README.md!') 
  );
  })

