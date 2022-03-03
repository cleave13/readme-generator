const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the title of your application?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project:',
        name: 'description',
    },
    {
        type: 'checkbox',
        message: 'Select the sections you plan to incorporate into your README.md file.',
        choices: ['Title', 'Description', 'Table of Contents', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'],
        default: ['Title', 'Description', 'Table of Contents', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'],
        name: 'tableOfContents',
    },
    {
        type: 'input',
        message: 'How should users install your application?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Explain how this application should be used:',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Select a license for this project',
        choices: ['MIT', 'Apache License 2.0', 'GPLv3'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'How can others contribute to the application?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What tests should be run for this application?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter your full name:',
        name: 'fullName',
    },
    {
        type: 'input',
        message: 'Enter your Github username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter the exact name of your Github repository:',
        name: 'repoName',
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
    }
  ])
  .then((data) => {
    const filename = 'README.md';
    const {title, description, installation, usage, license, contributing, tests, fullName, github, repoName, email} = data;

    let licensePath = ''
    switch (license) {
        case 'MIT':
            licensePath = 'mit';
            break;
        case 'Apache License 2.0':
            licensePath = 'apache-2.0';
            break;
        case 'GPLv3':
            licensePath = 'gpl-3.0';
            break;
    }

    const content = 
`# ${title}

## Description

${description}

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

![license](https://img.shields.io/github/license/${github}/${repoName})

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

This project is licensed under the terms of the [${license} license](https://choosealicense.com/licenses/${licensePath}/).

## Contributing

${contributing}

## Tests

${tests}

## Questions

This application was created by [${fullName}](https://github.com/${github}). Any questions related to this application can be sent to ${email}`

    fs.writeFile(filename, content, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
    });

