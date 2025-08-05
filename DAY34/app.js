const numbers = [2,3,4];

numbers.forEach(value => console.log(value*value)); //printing squares


const fruits = ["APPLE","MANGO","BANANA"];

fruits.forEach(value => console.log(value.toLowerCase())); //converting strings into lower case

//array of objects
const results = [
    {
        name:"Ravi",
        score:78
    },
    {
        name:"Neha",
        score:92
    },
    {
        name:"Farhad",
        score:98
    },
]

results.forEach(value => console.log(`${value.name} scored ${value.score} marks`));


const students = [
    { name: "Amir", score: 45 },
    { name: "Simran", score: 80 },
    { name: "Tina", score: 60 }
];

students.forEach(value => value.passed = value.score>=50);

console.log(students);

const nums = [2,3,6];

const newnums = nums.map(value =>value**3);

console.log(newnums);

const users = [
    { name: "Sarah", age: 25 },
    { name: "Amir", age: 30 },
    { name: "Sahil", age: 22 },
];
  
const newusers = users.map(value => value.name);  //extracting names using map()
console.log(newusers);


const celsiusTemps = [0, 20, 30, 100];  //celsius to fahrenheit
const fahrenheit = celsiusTemps.map(c => c*9/5+32); 
console.log(fahrenheit);

// Given:
const stu = [
    { name: "Farhad", marks: 85 },
    { name: "John", marks: 45 },
    { name: "Alice", marks: 60 },  
];
  
const result = stu.map(student => {
    return {
      name: student.name,
      result: student.marks >= 50 ? "Passed" : "Failed"
    };
  });
  
console.log(result);