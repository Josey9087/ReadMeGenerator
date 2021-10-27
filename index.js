// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const generateReadMe = ({ title, tableofcontents, description, usage, installation, contributions, test, github, email }) =>
`

# Title: 
${title}


Table of Contents:
[Title](#title)
[Description](#description)
[Usage](#usage)
[Installation](#installation)
[Contribution Guidelines](#contribution-guidelines)
[Testing Instuctions](#testing-instuctions)
[Questions](#questions)



# Description:
    ${description}


# Usage: 
${usage}
    

# Installation: 
${installation}
    

# Contribution Guidelines:
${contributions}
    

# Testing Instuctions:
${test}
    

# Questions:
${github} 
${email}
`
const questions = inquirer 
.prompt ([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'tableofcontents',
        message: 'Write a table of contents using this format:(1.Name)',
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
      }
])

// TODO: Create a function to write README file
.then((answers) => {
    const READMECONTENT = generateReadMe(answers);

    fs.writeFile('README.md', READMECONTENT, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
