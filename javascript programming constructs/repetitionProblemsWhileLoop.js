//Question 1
const prompt = require('prompt-sync')();
{
    let power=Number(prompt("Enter number to get power table of 2 :"));
    let i=1;
    let power_value=1;
    while(i<= power && power_value < 256){
        power_value=Math.pow(2,i)
        console.log("2 ^ "+i+" ="+power_value);
        i++;
    }
}

//Question 2
{
    console.log("Think any number between 1 to 100 :");
    let start=1;
    let end=100;
    let mid=0;
    let guess=0;
    while(start < end){
        mid=parseInt((start+end)/2);
        console.log("Your number is less(l)/equal(e)/greater(g) than :"+mid);
        guess=prompt("Enter option :");
        if(guess == 'l')
            end=mid;
        else if (guess == 'g')
            start=mid;
        else if (guess == 'e'){
            console.log("Your magic number is :"+mid);
            break;
        }
        else
            console.log("Wrong input")
    }
}

//Question 3
{
    let head_win=0
    let tail_win=0;
    while(head_win < 11 && tail_win < 11){
        let flip=Math.floor(Math.random()*10)%2;
        if(flip == 0)
            head_win=head_win+1;
        else
            tail_win=tail_win+1;
    }
    console.log("Head wins are :"+head_win+" tail wins are :"+tail_win);
}

//Question 4
{
    let money=100;
    const goal=200;
    const bet_money=1;
    let numOfBets=0;
    let win=0;
    while(money == 0 || money < goal){
        numOfBets+=1;
        if(Math.floor(Math.random()*10)%2 ==1){
            money+=bet_money;
            win+=1;
        }
        else
            money-=bet_money;
    }
    console.log("Out of "+numOfBets+" made, number of wins are :"+win);
}