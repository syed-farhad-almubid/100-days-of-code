//function declaration
function sum(num1,num2){
    return num1+num2;
}

console.log(sum(5,5));

//function expression
const subs = function(num1,num2){
    return num1-num2;
}

console.log(subs(7,6));

//fat arrow function

const a = (num1,num2)=> num1*num2;


console.log(a(20,10));

const isEven = num=>{
    if(num%2===0)
        return true;
    else
        return false;
}

console.log(isEven(3));

const greet = (na="bhai")=>{  //default parameter
    return `hello ${na}`;
}
console.log(greet());

const arr = [2,3,4];

const newarr = arr.map(function(val){
    return val*val;
})

console.log(newarr);

//Math

console.log(Math.max(5,40,2));
console.log(Math.min(2,3,-5));
console.log(Math.sqrt(16));
console.log(Math.pow(2, 3)); 


//filter method
const students = [
    { name: "Rahul", score: 86 },
    { name: "Amir", score: 45 },
    { name: "Sara", score: 72 },
    { name: "John", score: 30 }
];
  
// Filter students who passed (score >= 50)
const passedStudents = students.filter(student => student.score >= 50);
  
console.log(passedStudents);
  
const products = [
    { name: "Laptop", price: 60000 },
    { name: "Mouse", price: 500 },
    { name: "Phone", price: 25000 },
    { name: "Keyboard", price: 1500 }
  ];
  
// Filter products with price >= 5000
const expensive = products.filter(item => item.price >= 5000);
  
console.log(expensive);
  