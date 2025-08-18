const buttons = document.querySelectorAll(".btn");
const displayBox = document.querySelector(".display-box");

const plusButton = buttons[1];
const minusButton = buttons[0];


let count = 0;

function updateDisp(){
    if(count>0)
        displayBox.style.color = "green";
    else if(count<0)
        displayBox.style.color = "red";
    else
        displayBox.style.color = "black";
}

plusButton.addEventListener("click" , ()=>{
    count = count+1;
    displayBox.textContent = count;
    updateDisp();
})

minusButton.addEventListener("click" , ()=>{
    count = count-1;
    displayBox.textContent = count;
    updateDisp();
})