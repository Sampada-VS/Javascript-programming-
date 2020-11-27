//Question 1
const prompt = require('prompt-sync')();
{
    var array=new Array();
    for (let i=0;i<10;i++){
        let randomNumber=Math.floor(Math.random()*1000);
        if(randomNumber >=100 && randomNumber <=999)
            array[i]=randomNumber;
        else
            i-=1;
    }
    console.log("Generated array :"+array);
    let largest=array[0];
    let secondLargest=0;
    for (let i=1;i<=array.length;i++)
        if(largest < array[i]){
            secondLargest=largest;
            largest=array[i];
        }
        else if(secondLargest <array[i] && array[i] != largest){
            secondLargest=array[i];
        }
    console.log(" Second largest :"+secondLargest);

    let smallest=array[0];
    let secondSmallest=999;
    for (let i=1;i<=array.length;i++)
        if(smallest > array[i]){
            secondSmallest=smallest;
            smallest=array[i];
        }else if(secondSmallest > array[i] && array[i] != smallest){
            secondSmallest=array[i];
        }
    console.log(" Second smallest :"+secondSmallest);
}

//Question 2
{
    var array=new Array();
    for (let i=0;i<10;i++){
        let randomNumber=Math.floor(Math.random()*1000);
        if(randomNumber >=100 && randomNumber <=999)
            array[i]=randomNumber;
        else
            i-=1;
    }
    console.log("Generated array :"+array);
    array.sort();
    console.log("Sorted Array :"+array);
    console.log(" Second largest :"+array[array.length-2]);
    console.log(" Second smallest :"+array[1]);
}

//Question 3
{
    let number=Number(prompt("Enter number to compute its prime factors:"));
    let flag=1;
    var primeFactorsArray=new Array();
    array_counter=0;
    for(let i=2;i<=number;i++){
        if(number% i == 0){
            flag=1;
            for(let j=2;j<=i/2;j++){
                if(i % j == 0){
                    flag=0;
                    break;
                }
            }
            if (flag==1){
                primeFactorsArray[array_counter++]=i;
            }
        }
    }
    if(number == 1)
        console.log("1 has no prime factors.");
    else
        console.log("Prime factors of "+number+ " are :"+primeFactorsArray);
}

//Question 4
{
    let length=Number(prompt("Enter total numbers in array:"));
    console.log("Enter numbers to see if any three numbers adds to zero :");

    var array=new Array();
    for (let i=0;i<length;i++){
        array[i]=Number(prompt("Enter number "+(i+1)+" : "));
    }
    console.log("Array :"+array);
    let found=0;
    for(let i=0;i<array.length-2;i++)
        for(let j=i+1;j<array.length-1;j++)
            for(let k=j+1;k<array.length;k++)
                if( array[i]+array[j]+array[k] == 0){
                    console.log("Three integer which adds to zero are: "+array[i]+","+
                    array[j]+","+array[k]);
                    found=1;
                }
    if(found == 0)
        console.log("No three integer added to zero.");
}

//Question 5
{
    let start=Number(prompt("Enter start of range:"));
    let end=Number(prompt("Enter end of range:"));

    let found=1;
    let count=0;

    console.log("Numbers which have repeated digits are :");
    if(start < end){
        for(let number=start;number<=end;number++){
            let check_number=number;
            let digit=check_number%10;
            check_number=Math.floor(check_number/10);
            while(check_number > 0){
                let nextDigit=check_number%10;
                check_number=Math.floor(check_number/10);
                if(digit == nextDigit)
                    found=1;
                else{
                    found =0;
                    break;
                }
            }
            if (found == 1){
                count+=1;
                console.log(number);
            }
        }
        if (count == 0)
            console.log("Not found any.");
    }
    else
        console.log("Start of range value should ne less than end of range value.");
}