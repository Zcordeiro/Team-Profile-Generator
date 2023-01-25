const fs = require("fs");
const inquirer = require("inquirer");

const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const generateHtml = require("./src/generatehtml");

let teamArry = [];

// Function that prompts the user for information on team members
const userPrompts = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is this team member's name?",
        validate: function (name) {
          if (name) {
            return true;
          } else {
            return "Please enter a valid name.";
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is this team member's ID number?",
        validate: function (id) {
          if (!isNaN(id)) {
            return true;
          } else {
            return "Please enter a valid ID number.";
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is this team member's email?",
        validate: function (email) {
          if (email) {
            return true;
          } else {
            return "Please enter a valid email.";
          }
        },
      },
      {
        type: "list",
        name: "role",
        message: "What is this team member's role?",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then((data) => {
    if (data.role === "Engineer") {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "github",
              message: "What is this engineer's Github?",
            },
          ])
          .then((response) => {
            let TeamEngineer = new Engineer(
              data.name,
              data.id,
              data.email,
              response.github
            );
            teamArry.push(TeamEngineer);
            addTeam();
          });
      } else {
        return inquirer
          .prompt([
            {
              type: "input",
              name: "school",
              message: "What school is this inten from?",
            },
          ])
          .then((response) => {
            let TeamIntern = new Intern(
              data.name,
              data.id,
              data.email,
              response.school
            );
            teamArry.push(TeamIntern);
            addTeam();
          });
      }
    });
};
 // Function that prompts the user to add another member or ends the loop if they choose not to.
function addTeam() {
  return inquirer
    .prompt([
      {
        type: "confirm",
        name: "addStaff",
        message: "Would you like to add another team member?",
      },
    ])
    .then((response) => {
      if (response.addStaff === true) {
        userPrompts(teamArry);
      } else {
        writeToFile(
          "./dist/index.html",
          teamArry
        );
      }
    });
}

// Function that writes creates the Html file from the generateHtml in the src folder.
function writeToFile(fileName, arry) {
  fs.writeFile(fileName, generateHtml(arry), (err) =>
    err ? console.log(err) : console.log("Successfully created HTML!")
  );
}

// Function that initiates the app and prompts the user for the manager information.
function initManager() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is team manager's name?",
        validate: function (name) {
          if (name) {
            return true;
          } else {
            return "Please enter a valid name.";
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is this team manager's ID number?",
        validate: function (id) {
          if (!isNaN(id)) {
            return true;
          } else {
            return "Please enter a valid ID number.";
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is this team manager's email?",
        validate: function (email) {
          if (email) {
            return true;
          } else {
            return "Please enter a valid email.";
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is this managers office number?",
        validate: function (officeNumber) {
          if (!isNaN(officeNumber)) {
            return true;
          } else {
            return "Please enter a valid ID number.";
          }
        },
      },
    ]).then((data) => {
      let TeamManager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      teamArry.push(TeamManager);
      addTeam();
    });

}

initManager();