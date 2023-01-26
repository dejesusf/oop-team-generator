//list all required files and packages 
const inquirer= require('inquirer');
const Employee= require('./Develop/lib/Employee');
const Engineer= require('./Develop/lib/Engineer');
const Intern= require('./Develop/lib/Intern');
const Manager= require('./Develop/lib/Manager');
const generateHtml= require('./Develop/util/generateHtml');
const fs= require('fs');
const { ADDRGETNETWORKPARAMS } = require('dns');
const { nextTick } = require('process');
const { start } = require('repl');

//empty string to store team members
const team= [];

//create engineer function
const createEng = () => {
  inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: "What is the engineer's name?",
    },
    {
      type: 'input',
      name: 'id',
      message: "What is their ID number?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is their email address?",
    },
    {
      type: 'input',
      name: 'github',
      message: "What is their github username?",
    },
  ]).then((response) => {
    const newEngineer= new Engineer(response.name, response.id, response.email, response.github);
    createCard(newEngineer, 'Engineer');
    team.push(newEngineer);
    next();
  })
}

//create intern function
const createIntern = () => {
  inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: "What is the intern's name?",
    },
    {
      type: 'input',
      name: 'id',
      message: "What is their ID number?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is their email address?",
    },
    {
      type: 'input',
      name: 'school',
      message: "What school are they attending?",
    },
  ]).then((response) => {
    const newIntern= new Intern(response.name, response.id, response.email, response.school);
    createCard(newIntern, 'Intern');
    team.push(newIntern);
    next();
  })
}

//create manger function
const createManager = () => {
  inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: "What is the manager's name?",
    },
    {
      type: 'input',
      name: 'id',
      message: "What is their ID number?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is their email address?",
    },
    {
      type: 'input',
      name: 'number',
      message: "What is their office number?",
    },
  ]).then((response) => {
    const newManager= new Manager(response.name, response.id, response.email, response.number);
    createCard(newManager, 'Manager');
    team.push(newManager);
    next();
  })
}

const next= () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'next',
      message: 'What do you want to do?',
      choices: ['Add Manager', 'Add Engineer', 'Add Intern', 'Done!'],
    }.then((response) => {
      console.log(response.next);
      switch (response.next) {
        case 'Add Manager':
          createManager();
          break;
        case 'Add Engineer':
          createEng();
          break;
        case 'Add Intern':
          createIntern();
          break;
        case 'Done!':
          generateWebsite();
      }
    })
  ])
}