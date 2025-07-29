let addNumber = function(){ //function expression
    console.log(5+2);
}

addNumber();

let disp = (name)=>{  //fat arrow function
    console.log(`My name is ${name}`); 
}

disp("Farhad"); //calling function disp 
disp("Rakesh");
disp("Isaac Newton");


function multiply(a1,a2){  //function declaration
    return a1*a2;  //function returning value
}

let val = multiply(7,2); //passing two arguments
console.log(val);  //printing value of val



//function inside function

function myApp(){
    function disp(){
        console.log("This function is inside myApp");

    }

    function add(num1,num2){
        return num1+num2;
    }

    console.log("my App function");
    disp();
    console.log(add(6,5));
}

myApp();