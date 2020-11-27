//Question 1
const prompt = require('prompt-sync')();

let number1=Number(prompt("Enter 1st three digit number :"));
let number2=Number(prompt("Enter 2nd three digit number :"));
let number3=Number(prompt("Enter 3rd three digit number :"));
let number4=Number(prompt("Enter 4th three digit number :"));
let number5=Number(prompt("Enter 5th three digit number :"));

let min=999;
let max=0;

if(number1 < min)
    min=number1;
else min=min;
if(number2 < min)
    min=number2;
else min=min;   
if(number3 < min)
    min=number3;
else min=min;   
if(number4 < min)
    min=number4;
else min=min;
if(number5 < min)
    min=number5;
else min=min;

if(number1 > max)
    max=number1;
else max=max;
if(number2 > max)
    max=number2;
else max=max;
if(number3 > max)
    max=number3;
else max=max;
if(number4 > max)
    max=number4;
else max=max;
if(number5 > max)
    max=number5;
else max=max;

console.log("Minimum number:"+min+" Maximum number:"+max);

//Question 2
let date=Number(prompt("Enter date :"));
let month=prompt("Enter month :");

if((month.toLowerCase() === 'march' && date > 20 && date< 31)
    || month.toLowerCase() === 'april' && date > 1 && date< 30
    || month.toLowerCase() === 'may' && date > 1 && date< 31
    || month.toLowerCase() === 'june' && date > 1 && date< 20)
    console.log("True.");
else
    console.log("False.");

//Question 3
let year=Number(prompt("Enter year :"));
if( ((year % 4) == 0 && (year%100) != 0) || year% 400 == 0)
    console.log("Leap year.");
else
    console.log("Not a leap year.");

//Question 4
let coin=Math.floor(Math.random()*10)%2;
const heads=1;
if ( coin == heads)
    console.log("HEADS.");
else
    console.log("TAILS.");