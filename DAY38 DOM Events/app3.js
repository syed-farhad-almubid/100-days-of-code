function randomGenerator(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const random =  `rgb(${red},${green},${blue})`;
    return random;
}

const currentcolor = document.querySelector("span");

const head3 = document.querySelector("h3");
head3.addEventListener("click" , ()=>{
    const randomcolor = randomGenerator();
    document.body.style.backgroundColor = randomcolor;
    currentcolor.textContent = randomcolor;
})
