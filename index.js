const fs = require('fs')
const inquirer = require('inquirer');

// Creating requires for the different job roles
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');



const userPrompts = () => {
    inquirer.prompt([
        {
        type: "input",
        name: "name",
        message: "What is this team member's name?",
        validate: function(name) {
            if(name){
                return true;
            } else {
                return 'Please enter a valid name.';
            }
        }
      },
      {
        type: "input",
        name: "id",
        message: "What is this team member's ID number?",
        validate: function(id) {
            if(!isNaN(id)){
                return true;
            } else {
                return 'Please enter a valid ID number.';
            }
        }
      },
      {
        type: "input",
        name: "email",
        message: "What is this team member's email?",
        validate: function(email) {
            if(email){
                return true;
            } else {
                return 'Please enter a valid email.';
            }
        }
      },
      {
        type: "list",
        name: "role",
        message: "What is this team member's role?",
        choices: ["Engineer", "Intern", "Manager"],
      },
    ])
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateHtml(data), (err) =>
      err ? console.log(err) : console.log("Successfully created HTML!")
    );
  }


function init() {
    userPrompts().then((answers) => {
        writeToFile("./dist/index.html", answers);
    });
}

