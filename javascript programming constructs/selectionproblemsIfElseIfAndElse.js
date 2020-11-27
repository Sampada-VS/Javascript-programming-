//Question 1

const prompt = require('prompt-sync')();
{
let number=Number(prompt("Enter single digit number :"));
if(number == 0)
    console.log("Zero.");
else if(number == 1)
    console.log("One.");
else if(number == 2)
    console.log("Two.");
else if(number == 3)
    console.log("Three.");
else if(number == 4)
    console.log("Four.");
else if(number == 5)
    console.log("Five.");
else if(number == 6)
    console.log("Six.");
else if(number == 7)
    console.log("Seven.");
else if(number == 8)
    console.log("Eight.");
else if(number == 9)
    console.log("Nine.");
else
    console.log("Wrong input.");
}

//Question 2
{
let day=Number(prompt("Enter week day number :"));
if(day == 1)
    console.log("Sunday.");
else if(day == 2)
    console.log("Monday.");
else if(day == 3)
    console.log("Tuesday.");
else if(day == 4)
    console.log("Wednesday.");
else if(day == 5)
    console.log("Thursday.");
else if(day == 6)
    console.log("Friday.");
else if(day == 7)
    console.log("Saturday.");
else
    console.log("Wrong input.");
}

//Question 3
{
let number=Number(prompt("Enter any number from (1,10,100,..,100000) and get value:"));
if(number == 1)
    console.log("Unit.");
else if(number == 10)
    console.log("Ten.");
else if(number == 100)
    console.log("Hundread.");
else if(number == 1000)
    console.log("Thousand.");
else if(number == 10000)
    console.log("Ten thousands.");
else if(number == 100000)
    console.log("Lakh.");
else
    console.log("Wrong input.");
}

//Question 4
{
let a=Number(prompt("Enter first number :"));
let b=Number(prompt("Enter second number :"));
let c=Number(prompt("Enter third number :"));

let operation1=a+b*c;
let operation2=a%b+c;
let operation3=c+a/b;
let operation4=a*b+c;

let max=a>b ? (a>c ? a : c) : (b>c ? b : c);
let min=a<b ? (a<c ? a : c) : (b<c ? b : c);
console.log("Maximum :"+max);
console.log("Minimum :"+min);
}