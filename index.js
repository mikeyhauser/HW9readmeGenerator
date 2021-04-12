const inquirer = require('inquirer');
const fs = require('fs')

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of this project?',
      name: 'title',
    },

    {
      type: 'input',
      message: 'What is the description of this project?',
      name: 'description',
    },
  


    {
      // 3
      type: 'input',
      message: 'What are the installation instructions',
      name: 'instructions',
    },
    {
      //4
      type: 'input',
      message: 'What is the usage information?',
      name: 'information',
    },
    {
      //5
      type: 'input',
      message: 'What are the contribution guidelines?',
      name: 'guidelines',
    },
    {
      //6
      type: 'input',
      message: 'Are there any questions?',
      name: 'questions',
    },

    {
      //7
      type: 'input',
      message: 'Are there any relevant tests?',
      name: 'tests',
    },
    {
      //8
      type: 'input',
      message: 'Are there any questions?',
      name: 'questions',
    },

    {
      //9
      type: 'list',
      message: 'Please input the license information for this project:',
      name: 'license',
      choices: [ "Licensed", "N/A", "Unlicensed" ]
    },
  


    {
      //10
      type: 'input',
      message: 'Enter email address:',
      name: 'email',
    },

    {
      //11
      type: 'input',
      message: 'Enter Github username:',
      name: 'github',
    },
  
  ]
  )
  .then((data) =>{

    var string = `## Project Title: ${data.title}<br><br><br><br>
    Table of Contents:  
[Project Description](#description)<br>
[Project Designers Contact/Github](#contact)<br><br><br><br>
    
    
## Description, Installation, Usage, Contributing, and Tests
#### (description)
<br><br>

Project Descrition: ${data.description}<br>
Installation Instructions:  ${data.instructions} <br>
Information Usage: ${data.information} <br>
Guidelines for Contributions to this Project:  ${data.guidelines} <br>
Relevant Tests: ${data.tests}<br><br>

## Contact, Github, Email, License
#### (contact)
Questions Regarding this Project and/or its Usage: ${data.questions}<br>
Project License: ${data.license}<br>
Email Project Designer: [${data.email}](${data.email}/)<br>
Designers Github Page: https://github.com/${data.github} `;

   fs.writeFileSync('README.md', string, err => err ? console.log(err) : console.log("write successfl"))

   
  });

  