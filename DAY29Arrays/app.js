//Array methods

const marks = [86,85,67,90];
console.log(marks);
marks.push(100); //100 will be added in the last

const numbers = [1,2,3,5];
console.log(numbers);
numbers.pop();
console.log(numbers); //5 will be removed from the last

const arr = [1,2,3,4,5,6,7];
console.log(arr);
arr.shift();
console.log(arr); //1 will be removed from the array
arr.unshift(100); //100 will be added in the first
console.log(arr);

const arr2 = [10,20,30,40,50,60];
console.log(arr2);
arr2.splice(3,1); //40 will be gone 
console.log(arr2);
const newarr2 = arr2.slice(1,2);
console.log(newarr2); //output will be 20
const arr3 = [2,3,4,5];
console.log(arr3.reverse()); //reverse