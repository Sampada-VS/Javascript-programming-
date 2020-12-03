//UC14
const prompt = require('prompt-sync')();
let employeeId=Number(prompt("Enter employee Id :"));
let idRegex=RegExp('^[1-9]{1}[0-9]{0,3}$');
if(idRegex.test(employeeId))
    console.log("Valid employee id.");
else
    console.log("Employee id should be non zero positive.");

let salary=Number(prompt("Enter Salary :"));
let salaryRegex=RegExp('^[1-9]{1}[0-9]{4,7}.[0-9]{1,2}$')
if(salaryRegex.test(salary))
    console.log("Valid salary.");
else
    console.log("Salary should be non zero positive and upto two decimal.");

let gender=prompt("Enter Gender :");
let genderRegex=RegExp('^[M F]$');
if(genderRegex.test(gender))
    console.log("Valid gender.");
else
    console.log("Gender should be M or F.");

//Pin Code UC1,2,3
let pinCode=prompt("Enter pin code :");
let pinCodeRegex=RegExp('^[1-9]{1}[0-9]{5}$');
if(pinCodeRegex.test(pinCode))
    console.log("Valid pin code.");
else
    console.log("Pin code should be 6-digit number and without alphabets at start or end.");

//Pin Code UC4
let pinCode=prompt("Enter pin code :");
let pinCodeRegex=RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$');
if(pinCodeRegex.test(pinCode))
    console.log("Valid pin code.");
else
    console.log("Pin code should be 6-digit number and without alphabets at start or end.");

//Email UC1
let email=prompt("Enter email id :");
let emailRegex=RegExp('^[a-zA-Z0-9]{1,}$');
if(emailRegex.test(email))
    console.log("Valid email id.");
else
    console.log("Invalid email id.");

//Email UC2
let email=prompt("Enter email id :");
let emailRegex=RegExp('^[a-zA-Z0-9]{1,}@[a-zA-Z0-9]{2,}$');
if(emailRegex.test(email))
    console.log("Valid email id.");
else
    console.log("Invalid email id.");

//Email UC3
let email=prompt("Enter email id :");
let emailRegex=RegExp('^[a-zA-Z0-9]{1,}@[a-zA-Z0-9]{2,}.[a-z]{2,4}$');
if(emailRegex.test(email))
    console.log("Valid email id.");
else
    console.log("Invalid email id.");

//Email UC4
let email=prompt("Enter email id :");
let emailRegex=RegExp('^[a-zA-Z0-9]{1,}([_+-.][a-zA-Z0-9]+)*@[a-zA-Z0-9]{2,}.[a-z]{2,4}$');
if(emailRegex.test(email))
    console.log("Valid email id.");
else
    console.log("Invalid email id.");

//Email UC5
let email=prompt("Enter email id :");
let emailRegex=RegExp('^[a-zA-Z0-9]{1,}([_+-.][a-zA-Z0-9]+)*@[a-zA-Z0-9]{2,}.[a-z]{2,4}([.][a-zA-Z]{2})*$');
if(emailRegex.test(email))
    console.log("Valid email id.");
else
    console.log("Invalid email id.");
