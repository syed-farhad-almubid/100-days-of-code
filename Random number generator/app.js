const generate = document.querySelector(".button-wrapper .generate-button button");
console.log(generate);

const dispnumber = document.querySelector(".display-number");
console.log(dispnumber);

function rannumber(){
    let a = Math.floor(Math.random()*100)+1;
    return a;
}

generate.addEventListener("click" , ()=>{
    let randomnumber = rannumber();
    console.log(randomnumber);
    dispnumber.textContent = randomnumber;

})

const reset = document.querySelector(".button-wrapper .reset-button");
console.log(reset);

reset.addEventListener("click" , ()=>{
    dispnumber.textContent = 0;
})