//Question 1
const prompt = require('prompt-sync')();
{
    let power=Number(prompt("Enter number to get power table of 2 :"));
    for(let i=0;i<=power;i++)
        console.log("2 ^ "+i+" ="+Math.pow(2,i));
}

//Question 2
{
    let number=Number(prompt("Enter number to get harmonic number :"));
    let harmonicNumber=0
    for(let i=1;i<=number;i++){
        harmonicNumber=harmonicNumber+(1/i);
        console.log(i+" th Harmonic number :"+harmonicNumber);
    }
}

//Question 3
{
    let check_prime=Number(prompt("Enter number to check it is prime or not :"));
    let flag=1;
    for(let i=2;i<=(check_prime/2);i++)
        if(check_prime % i == 0){
            flag=0;
            break;
        }
    if(check_prime == 1)
        console.log("1 is not a prime number.");
    if(flag ==0)
        console.log(check_prime+" is not a prime number.");
    else
        console.log(check_prime+" is a prime number.");
}

//Question 4
{
    console.log("Enter range to print prime numbers :");
    let start=Number(prompt("Enter start of range:"));
    let end=Number(prompt("Enter end of range:"));
    let flag=1;
    let check_prime=0;
    console.log("Prime numbers in given range :");
    for(check_prime =start+1;check_prime<end;check_prime++){
        flag=1;
        for(i=2;i<=check_prime/2;i++)
            if(check_prime % i == 0){
                flag=0;
                break;
            }
        if (flag==1)
            console.log(check_prime);
    }   
}

//Question 5
{
    let number=Number(prompt("Enter number to compute its factorial:"));
    let factorial=1;
    for(let i=1; i<=number;i++)
        factorial=factorial*i;
    console.log("Factorial of "+number+" is :"+factorial);
}

//Question 6
{
    let number=Number(prompt("Enter number to compute its prime factors:"));
    let count=0;
    let flag=1;
    for(let i=2;i<number;i++){
        if(number% i == 0){
            flag=1;
            for(let j=2;j<=i/2;j++){
                if(i % j == 0){
                    flag=0;
                    break;
                }
            }
            if (flag==1){
                console.log("Prime factor :"+i);
                count=1;
            }
        }
    }
    if(count == 0)
        console.log("No prime factors..");
}