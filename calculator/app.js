let inputBox = document.querySelector("#txt");
const buttons = document.querySelectorAll(".btn");

let str = "";
let justCalculate = false;

buttons.forEach((val) => {
    val.addEventListener("click", () => {
        if (val.textContent === "DEL") {
            str = str.slice(0, -1);
            inputBox.value = str;
        } 
        else if (val.textContent === "AC") {
            str = "";
            inputBox.value = str;
        } 
        else if (val.textContent === "=") {
            try {
                let result = Function('"use strict";return (' + str + ')')();
                inputBox.value = String(result);
                str = "";
                justCalculate = true;
            } catch (error) {
                inputBox.value = "Error";
                str = "";
            }
        } 
        else {
            if (justCalculate) {
                if (isNaN(val.textContent)) {
                    str = inputBox.value + val.textContent; 
                } else {
                    str = val.textContent; 
                }
                inputBox.value = str;
                justCalculate = false;
            } else {
                str += val.textContent;
                inputBox.value = str;
            }
        }
    });
});
