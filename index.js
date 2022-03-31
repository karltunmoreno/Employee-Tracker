
const mysql = require('mysql2');
const inquirer = require('inquirer');
require('console.table');
const connection = require ('./db/connection')

class DB {
    constructor (connection){
        this.connection = connection
    }

}


// Create prompt with choices for employee tracking

function selectToDo () {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'selectToDo',
            message: 'What would you like to do?',
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role",
                "Exit"
            ],
        },
    ])
    .then((answers) => {
        switch (answers.selectToDo) {
            case "View all departments":
                selectAllDepartments().then(([rows, fields]) => {
                    console.table(rows);
                    wantToExit();
                });
            break;
            case "View all roles":
                selectAllRoles().then(([rows, fields]) => {
                    console.table(rows)
                    wantToExit();
                });
            break;
            case "View all employees":
                selectAllEmployees().then(([rows, fields]) => {
                    console.table(rows)
                    wantToExit();
                });
            break;
            case "Add a department":
                addDepartment();
    
            break;
            case "Add a role":
                addRole();
    
            break;
            case "Add an employee":
                addEmployee();
    
            break;
            case "Updated an employee":
                updateEmployee();
            
            break;
            default:
        }
    });
    };
    
    
    // function runs when view all departments is selected
    
    const selectAllDepartments = () => {
        return db.promise().execute("SELECT * FROM Departments;");
    };
    
    // function runs when view all roles is selected
    const selectAllRoles = () => {
        return db.promise().execute("SELECT * FROM Roles;");
    }
    
    // function runs when view all employees is selected
    const selectAllEmployees = () => {
        return db.promise().execute("SELECT * FROM Employees;");
    }
    
    
    // Adding department to DB
    
    const addDepartment = () => {
        inquirer
        .prompt([
            {
                type: "input",
                name: "deptName",
                message: "What is the name of the department?",
            },
        ])
        .then((answers) => {
            const queryResults = db.query(
                `INSERT INTO Departments (department_name) VALUES (?);`,
                answers.deptName,
                (err, results, fields) => {
                    if (err) {
                        console.log(`There was an error adding ${answers.deptName} to the database.`
                        );
                } else {
                    console.log(`${answers.deptName} was added to the database!`)
                }
                }
            );
    })
    }
    
    // Adding role to DB
    
    // Adding employee to DB
    
    // Update an employee to DB
    
    
    selectToDo()