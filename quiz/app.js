const questions = [{
    question : "Which is the largest animal in the world?",
    option : ["Elephant", "Blue Whale", "Shark", "Rhino"],
    answer : "Blue Whale"
},{
    question: "Which is the fastest land animal?",
    option: ["Cheetah", "Lion", "Horse", "Tiger"],
    answer: "Cheetah"
},{
    question: "Which is the smallest bird?",
    option: ["Humming Bird", "Kiwi", "Parrot", "Dove"],
    answer: "Humming Bird"
},{question: "Which is the largest planet in our solar system?",
    option: ["Saturn", "Jupiter", "Neptune", "Venus"],
    answer: "Jupiter"
},{
    question: "Olympus Mons is the mountain of?",
    option: ["Saturn", "Jupiter", "Neptune", "Mars"],
    answer: "Mars"
}]

const dispQuestion = document.querySelector("h3");
const options = document.querySelectorAll(".option");
const nextButton = document.querySelector(".next-button button");
const resetButton = document.querySelector(".reset");

resetButton.style.display = "none";
nextButton.disabled = true;
nextButton.style.cursor = "not-allowed";

function stop(){
    options.forEach(val =>{
        val.style.pointerEvents = "none";
    })
}


options.forEach(val=>{
    val.addEventListener("click" , ()=>{
        if(val.textContent === questions[index].answer){
            val.style.backgroundColor = "blue";
            val.style.color = "white";
            score +=1;
            nextButton.disabled = false;
            nextButton.style.cursor = "pointer";
            clickCount += 1;
            stop();
        }
        else{
            val.style.backgroundColor = "red";
            val.style.color = "white";
            nextButton.disabled = false;
            nextButton.style.cursor = "pointer";
            clickCount += 1;
            stop();
        }
    })
})
    


function nextQuestion(ind){
    options.forEach(val =>{
        val.style.pointerEvents = "auto";
    })
    dispQuestion.textContent = `${ind+1}. ${questions[ind].question}`;
    options.forEach((value,i)=>{
        value.textContent = questions[ind].option[i];
    })
}

let index = 0;
let score = 0;
let clickCount = 0;
dispQuestion.textContent = `${index+1}. ${questions[index].question}`;

options.forEach((opt, i) => {
    opt.textContent = questions[index].option[i];
});



nextButton.addEventListener("click" , ()=>{
    if(index === questions.length - 1){
        dispQuestion.textContent = `You scored ${score} out of 5`;
        options.forEach(val =>{
            val.style.display = "none"
            nextButton.style.display = "none";
            resetButton.style.display = "block";
        })
    }
    else{
        options.forEach(opt=>{
            opt.style.backgroundColor = "";
            opt.style.color = "";
        })
        nextButton.disabled = true;
        nextButton.style.cursor = "not-allowed";
        index = index+1;
        nextQuestion(index);
    }
})

resetButton.addEventListener("click" , ()=>{
    index = 0;
    score = 0;
    clickCount = 0;
    dispQuestion.textContent = `${index+1}. ${questions[index].question}`;
    options.forEach((opt, i) => {
        opt.textContent = questions[index].option[i];
    });
    
    nextButton.style.display = "block";
    nextButton.textContent = "Next";
    resetButton.style.display = "none";
    options.forEach(opt=>{
        opt.style.display = "block";
        opt.style.backgroundColor = "";
        opt.style.color = "";
        opt.style.pointerEvents = "auto";
    })
    nextButton.style.cursor = "not-allowed";
    nextButton.disabled = true;

})
