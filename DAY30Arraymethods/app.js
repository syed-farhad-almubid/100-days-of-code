//forEach()

const arr = ["Rahul","Amir",56,"Jay"];
arr.forEach(function(name){
    console.log(name);
});


//printin the double using forEach
const numbers = [2,3,4,5];
numbers.forEach(function(value){
    console.log(value*value);
})

//Map() method

const arr1 = [3,4,6,1,8];

const newarr1 = arr1.map(function(value){
    return value*value;
})

console.log(newarr1);



const names = ["Farhad","Ron","Samir"];

const newnames = names.map(function(val){
    return "Hello "+val;
});

console.log(newnames);

const scores = [95, 82, 67, 45, 73];

const newscores = scores.map((function(mark){
    if(mark>=90)
        return "A";
    else if(mark>=75)
        return "B";
    else if(mark>=50)
        return "C";
    else
        return "F";
}))

console.log(newscores);




//Filter method
const arr2 = [1,3,2,6,4,8,10];

const newarr2 = arr2.filter(function(val){
    return val%2===0;
})

console.log(newarr2);

//filter method
const arr3 = [3,4,5,6,10,55,78,90,33,21];

const newarr3 = arr3.filter(function(value){
    return value>50;  //it will return those values to the new array which are greater than 50
})

console.log(newarr3);