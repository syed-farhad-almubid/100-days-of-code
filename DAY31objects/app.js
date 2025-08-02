//Objects
const student = {
    "name" : "Farhad",
    "age" : 23,
    "grade" : "A",
    "hobbies" : ["coding","gaming"]  //array inside an object
};

console.log(student); 

//accessing the values of object using dot notation

console.log(student.age);
console.log(student.grade);
console.log(student.hobbies);

student.gender = "male"; //adding a new key value pair to the student object 

//accessing the values of object using bracket notation

console.log(student["gender"]);
console.log(student["name"]);

student["email"] = "syedfarhadalmubid@gmail.com";

//iteration of object

const student1 = {
    "name" : "John",
    "age" : 25,
    "grade" : "A",
    "hobbies" : ["coding","gaming"] 
};

console.log(student1);

for(let key in student1){
    console.log(`${key} : ${student1[key]}`);      //accessing the key value pairs using for in loop
}

//computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";
const obj = {[key1] : value1 , [key2] : value2};
console.log(obj);

//spread operator in objects

const obj1 = {
    key1 : "value1",
    key2 : "value2"
};

const obj2 = {
    key3 : "value3",
    key4 : "value4"
};

const newobj = {...obj1,...obj2}; //spread operator with object
console.log(newobj);

// object destructuring

// const user = {
//     name: "Farhad",
//     age: 23,
//     city: "Dibrugarh"
//   };
  
//   const { name, age } = user;
  
//   console.log(name); // "Farhad"
//   console.log(age);  // 23

  //objecs inside array

  const users = [
    {userId : 1, name:"John", age:29, gender:"male"},
    {userId : 2, name:"Rani", age:25, gender:"female"},
    {userId : 3, name:"Rahul", age:39, gender:"male"}
  ];

  console.log(users);
  
  for(let i=0;i<users.length;i++){
    console.log(users[i].name);  //accessing only the names 
  }

  // Nested destructuring

  const [{name}, ,{gender}] = users;

  console.log(gender);