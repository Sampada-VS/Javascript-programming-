//Repeat UC7
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HRS=4;
const FULL_TIME_HRS=8;
const MAX_HRS=160;
const NUM_OF_WORKING_DAYS=20;
const WAGE_PER_HR=20;

function getWorkingHrs(employeeCheck){
    switch(employeeCheck){
        case IS_PART_TIME:  return PART_TIME_HRS;
        case IS_FULL_TIME:  return FULL_TIME_HRS;
        default:    return 0;
    }
}
function calculateDailyWage(employeeHrs){
    return employeeHrs * WAGE_PER_HR;
}

let totalEmployeeHrs=0;
let totalWorkingDays=0;
let employeeDailyHrsAndWageArray =new Array();
while(totalEmployeeHrs <= MAX_HRS && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let employeeCheck=Math.floor(Math.random()*10)%3;
    let employeeHrs=getWorkingHrs(employeeCheck);
    totalEmployeeHrs+=employeeHrs;
    employeeDailyHrsAndWageArray.push(
    {
        day:totalWorkingDays,
        dailyHrs:employeeHrs,
        dailyWage:calculateDailyWage(employeeHrs),
        toString(){
            return '\n Day '+this.day+' -> Working Hrs : '+this.dailyHrs+
                    ' , Wage Earned : '+this.dailyWage;
        },
    });
}
console.log("Employee Daily Hrs worked and Wage earned is : "+employeeDailyHrsAndWageArray);

//UC7 A
let totalWage=employeeDailyHrsAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage>0)
                .reduce((totalWage,dailyHrsAndWage) => totalWage+=dailyHrsAndWage.dailyWage,0);
console.log("\n Total Wage : "+totalWage);

//UC7 B
let dayAlongDailyWageMap=employeeDailyHrsAndWageArray.map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("\n Day along with daily wage of Employee : "+dayAlongDailyWageMap);

//UC7 C
console.log("\n Days of Full time wage : ");
employeeDailyHrsAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage == 160)
                            .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

//UC7 D
console.log("\nFirst occurence of Full time wage : ");
employeeDailyHrsAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage == 160)
                            .find(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

//UC7 E
let fullTimeWage=employeeDailyHrsAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage == 160)
                                            .map(dailyHrsAndWage => dailyHrsAndWage.dailyWage);
let flag=0;
fullTimeWage.forEach((dailyWage) =>
    {
        if(dailyWage == 160)
            flag=1;
    });
if(flag == 1)
    console.log("\nTruly holding full time wage..");
else
    console.log("\nNot truly holding full time wage..");

//UC7 F
let partTimeWorkingDays=employeeDailyHrsAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage == 80)
                                                    .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("\n Part Time Working Days : "+partTimeWorkingDays);

//UC7 G
let totalDaysWorked=employeeDailyHrsAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHrs>0)
                .reduce((totalDaysWorked) => totalDaysWorked+=1,0);
console.log("\n Number of days the Employee worked are : "+totalDaysWorked);                                                    