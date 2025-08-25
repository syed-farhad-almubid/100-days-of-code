const box1 = document.querySelectorAll(".box");
const turn = document.querySelector("span");
const win = document.querySelector("h2");
// console.log(turn);
console.log(box1);
let justClicked = false;
let clickedCount = 0;
box1.forEach((val) =>{
    val.addEventListener("click" , ()=>{
        if(val.textContent !== "") return;
        if(justClicked){
            val.textContent = "X";
            justClicked = false;
            turn.textContent = "O's";
            clickedCount++;
        }
        else{
            val.textContent = "O";
            justClicked = true;
            turn.textContent = "X's";
            clickedCount++;
        }
        if(box1[0].textContent === "O" && box1[1].textContent === "O" && box1[2].textContent === "O"){
           
            win.textContent = "player O WIN";

            
        }
        else if(box1[0].textContent === "X" && box1[1].textContent === "X" && box1[2].textContent === "X"){
           
            win.textContent = "player X WIN";
        }
        else if(box1[3].textContent === "O" && box1[4].textContent === "O" && box1[5].textContent === "O"){
           
             win.textContent = "player O WIN";
            

        }
         else if(box1[3].textContent === "X" && box1[4].textContent === "X" && box1[5].textContent === "X"){
            
            win.textContent = "player X WIN";
           

        }
         else if(box1[6].textContent === "O" && box1[7].textContent === "O" && box1[8].textContent === "O"){
            
            win.textContent = "player O WIN";
           

        }
         else if(box1[6].textContent === "X" && box1[7].textContent === "X" && box1[8].textContent === "X"){
           
            win.textContent = "player X WIN";
            

        }
        else if(box1[0].textContent === "O" && box1[3].textContent === "O" && box1[6].textContent === "O"){
            win.textContent = "player O WIN";
        }
           else if(box1[0].textContent === "X" && box1[3].textContent === "X" && box1[6].textContent === "X"){

            win.textContent = "player X WIN"
        }
        else if(box1[1].textContent === "O" && box1[4].textContent === "O" && box1[7].textContent === "O"){
           
            win.textContent = "player O WIN";
        }
         else if(box1[1].textContent === "X" && box1[4].textContent === "X" && box1[7].textContent === "X"){
           
            win.textContent = "player X WIN";
        }
         else if(box1[2].textContent === "O" && box1[5].textContent === "O" && box1[8].textContent === "O"){
           
            win.textContent = "player O WIN";
           

        }
         else if(box1[2].textContent === "X" && box1[5].textContent === "X" && box1[8].textContent === "X"){
            
            win.textContent = "player X WIN";
        }
         else if(box1[0].textContent === "O" && box1[4].textContent === "O" && box1[8].textContent === "O"){
            
            win.textContent = "player O WIN";
            box1[0].style.color = "red";
            box1[4].style.color = "red";
            box1[8].style.color = "red";
        }
        else if(box1[0].textContent === "X" && box1[4].textContent === "X" && box1[8].textContent === "X"){
           
            win.textContent = "player X WIN";
             box1[0].style.color = "red";
            box1[4].style.color = "red";
            box1[8].style.color = "red";

        }
        else if(box1[2].textContent === "O" && box1[4].textContent === "O" && box1[6].textContent === "O"){
            win.textContent = "player O WIN";

        }
        else if(box1[2].textContent === "X" && box1[4].textContent === "X" && box1[6].textContent === "X"){
            win.textContent = "player X WIN";
        }
        else{
            if(clickedCount === 9){
                win.textContent = "Draw";
            }
        }

    })
})
