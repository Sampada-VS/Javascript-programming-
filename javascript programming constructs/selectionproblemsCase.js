//Question 1

const prompt = require('prompt-sync')();
{
    let number=Number(prompt("Enter single digit number :"));
    switch(number){
        case 0  :   console.log("Zero.");
                    break;
        case 1  :   console.log("One.");
                    break;
        case 2  :   console.log("Two.");
                    break;
        case 3  :   console.log("Three.");
                    break;
        case 4  :   console.log("Four.");
                    break;
        case 5  :   console.log("Five.");
                    break;
        case 6  :   console.log("Six.");
                    break;
        case 7  :   console.log("Seven.");
                    break;
        case 8  :   console.log("Eight.");
                    break;
        case 9  :   console.log("Nine.");
                    break;
        default :   console.log("Wrong input.");
    }
}

//Question 2
let day=Number(prompt("Enter week day number :"));
switch(day){
    case 1  :   console.log("Sunday");
                break;
    case 2  :   console.log("Monday");
                break;
    case 3  :   console.log("Tuesday");
                break;
    case 4  :   console.log("Wednesday");
                break;
    case 5  :   console.log("Thursday");
                break;
    case 6  :   console.log("Friday");
                break;
    case 7  :   console.log("Saturday");
                break;
    default :   console.log("Wrong input.");
}

//Question 3
{
    let number=Number(prompt("Enter any number from (1,10,100,..,100000) and get value:"));
    switch(number){
        case 1  :  console.log("Unit");
                    break; 
        case 10  :  console.log("Ten");
                    break; 
        case 100  :  console.log("Hundread");
                    break; 
        case 1000  :  console.log("Thousand");
                    break; 
        case 10000  :  console.log("Ten thousand");
                    break; 
        case 100000  :  console.log("Lakh");
                    break; 
        default :   console.log("Wrong input");
    }
}

//Question 4
{
    let length=Number(prompt("Enter length to convert :"));
    let convertInto=Number(prompt("Enter 1:Ft to Inch 2:Ft to Meter 3:Inch to Ft 4:Meter to Ft for conversion:"));
    const ftToInch=1;
    const ftToM=2;
    const inToFt=3;
    const mToFt=4;

    const ft_Inch=12;
    const ft_M=0.3048;
    const inch_ft=1/12;
    const m_ft=3.28084;

    switch(convertInto){
        case ftToInch   :   console.log(length+" ft ="+length*ft_Inch+" inch");
                            break;
        case ftToM   :   console.log(length+" ft ="+length*ft_M+" m");
                            break;
        case inToFt   :   console.log(length+" in ="+length*inch_ft+" ft");
                            break;
        case mToFt   :   console.log(length+" m ="+length*m_ft+" ft");
                            break;
        default :   console.log("Wrong input");
    }
}