// higher order function
function greet(name) {
    return "Hello, " + name + "!";
  }
  
  function processUserInput(callback) {
    const name = "Farhad";
    return callback(name);
  }
  
  console.log(processUserInput(greet)); 


//pure function
function add(a, b) {
    return a + b;
}
  console.log(add(2, 3));

//impure function
let total = 0;

function addToTotal(value) {
  total += value;
  return total;
}

console.log(addToTotal(5)); 
console.log(addToTotal(3));



//closure
function outer() {
    let counter = 0;
  
    function inner() {
      counter++;
      return counter;
    }
  
    return inner;
  }
  
  const count = outer();
  console.log(count()); 
  console.log(count());

  //iife

  (function () {
    console.log("IIFE is ready!");
  })();