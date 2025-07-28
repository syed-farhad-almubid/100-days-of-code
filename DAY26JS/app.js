let score = 80;

if(score>=90 && score<=100)
    console.log("A+");
else if(score>=80 && score<=89)
    console.log("A");
else if(score>=70 && score<=79)
    console.log("B");
else if(score>=60 && score<=69)
    console.log("C");
else if(score>=33 && score<=59)
    console.log("D");
else if(score>=0 && score<=32)
    console.log("Fail");
else
    console.log("Invalid marks");



let day = 3;
switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid");
}

//checking even or odd

let number = 12;
if(number%2===0)
    console.log("Even");
else
    console.log("Odd");


//voter eligibility check 
let yourAge = 24;
if(yourAge>=18)
    console.log("You are eligible to vote my friend");
else if(yourAge<18 && yourAge>0)
    console.log("You must be above aur equal to 18 years old to vote");
else
    console.log("Invalid number");