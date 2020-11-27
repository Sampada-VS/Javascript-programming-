//Question 1
const prompt = require('prompt-sync')();
{
    const cToF=1;
    const fToC=2;

    let temperature=Number(prompt("Enter temperature: "));
    let choice=Number(prompt("Convert temperature into 1.Fahreheit 2.Celsius: "));

    function getDegreeF(temperature){
        console.log(temperature+" C = "+(temperature*9/5+32).toFixed(3)+" F");
    }
    function getDegreeC(temperature){
        console.log(temperature+" F = "+((temperature-32)*5/9).toFixed(3)+" C");
    }

    switch(choice){
        case cToF   :   if(temperature >= 0 && temperature <=100)
                            getDegreeF(temperature);
                        else
                            console.log("Temperatoure should be within 0-100 C.");
                        break;
        case fToC   :   if(temperature >= 32 && temperature <=212)
                            getDegreeC(temperature);
                        else
                            console.log("Temperatoure should be within 32-212 F.");
                        break;
        default :   console.log("Wrong input.");
    }
}

//Question 2
{
    let number=Number(prompt("Enter number to check if it is palindrome or not : "));

    function palindromeOrNot(number){
        let num=number;
        let reversed=0;
        while(num != 0){
            let remainder=num%10;
            reversed=reversed*10+remainder;
            num=Math.floor(num/10);
        }
        if(number == reversed)
            console.log(number+" is a palindrome number.");
        else
            console.log(number+" is not a palindrome number.");
    }
    palindromeOrNot(number);
}

//Question 3
{
    let givenNumber=Number(prompt("Enter number :"));
    primeOrNot(givenNumber);
    palindromeOrNot(givenNumber);
    function primeOrNot(number){
        let flag=1;
        for(let i=2;i<=(givenNumber/2);i++)
            if(givenNumber % i == 0){
                flag=0;
                break;
            }
        if(givenNumber == 1)
            console.log("1 is not a prime number.");
        if(flag ==0)
            console.log(givenNumber+" is not a prime number.");
        else
            console.log(givenNumber+" is a prime number.");
    }
    function palindromeOrNot(number){
        let num=number;
        let reversed=0;
        while(num != 0){
            let remainder=num%10;
            reversed=reversed*10+remainder;
            num=Math.floor(num/10);
        }
        if(number == reversed){
            console.log(number+" is a palindrome number.");
            primeOrNot(reversed);
        }
        else
            console.log(number+" is not a palindrome number.");
    }
}
