//Question 1
{
    let total_One=0;
    let total_Two=0;
    let total_Three=0;
    let total_Four=0;
    let total_Five=0;
    let total_Six=0;

    let dice_roll=new Map();
    let dice_count=new Map();

    let number=1;
    while   (total_One <= 10 && total_Two <= 10 && total_Three <= 10 && 
            total_Four <= 10 && total_Five <= 10 && total_Six <= 10){
        let diceNumber=(Math.floor(Math.random()*10)%6)+1;
        dice_roll.set(number,diceNumber);
        switch(diceNumber){
            case 1  :   dice_count.set(1,total_One++);
                        break;
            case 2  :   dice_count.set(2,total_Two++);
                        break;
            case 3  :   dice_count.set(3,total_Three++);
                        break;
            case 4  :   dice_count.set(4,total_Four++);
                        break;
            case 5  :   dice_count.set(5,total_Five++);
                        break;
            default  :  dice_count.set(6,total_Six++);
        }
        number++;
    }
    console.log(dice_roll);
    console.log(dice_count);
    console.log("Number that reached maximum times :");
    console.log([...dice_count.entries()].reduce((a, e ) => e[1] > a[1] ? e : a));
    let min=Math.min(...dice_count.values());
    console.log("Number that reached minimum times ie for "+min +" times are :");
    for (let [diceNum,count] of dice_count.entries()) {
        if(count == min)
        console.log(diceNum);
    }
}

//Question 2
{
    var arrayOfMonths=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug",
                        "Sep","Oct","Nov","Dec"];
    let birthMonthMap=new Map();

    let people=1;
    let birthMonth="";
    let birthYear=0;
    while(people <= 50){
        birthMonth=arrayOfMonths[Math.floor(Math.random() * arrayOfMonths.length)];
        birthYear=(Math.floor(Math.random()*10)%2)+92;
        birthMonthMap.set(people,[birthMonth,birthYear]);
        people+=1;
    }
    console.log(birthMonthMap);
    console.log("People born in March :");
    getPeople("Mar");

    function getPeople(month){
        for (let [people,[birthMonth,birthYear]] of birthMonthMap.entries()) {
            if(birthMonth === month)
            console.log(people,[birthMonth,birthYear]);
        }
    }
}