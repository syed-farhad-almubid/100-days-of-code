// console.log("script start");

// setTimeout(()=>{
//     for(let i=0;i<1000;i++){
//         console.log("ok");
//     }
// },1000)

// console.log("script end");


// console.log("script start");

// const id = setTimeout(()=>{
//     console.log("Hello world inside settimeout");
// }, 3000)

// console.log("script end");

// console.log(id);

// clearTimeout(id);

// const body = document.body;
// const button = document.querySelector("button");
// console.log(body);

// function changeColor(){
//     const red = Math.floor(Math.random()*256);
//     const green = Math.floor(Math.random()*256);
//     const blue = Math.floor(Math.random()*256);
//     return `rgb(${red},${green},${blue})`;
// }

// const id = setInterval(()=>{
//     let a = changeColor();
//     body.style.backgroundColor = a;
// },1000)

// button.addEventListener("click" , ()=>{
//     body.style.backgroundColor = "white";
//     clearInterval(id);
//     button.textContent = a;
// })


// console.log("1. Pizza order ...");

// function makePizza(pizzaName, callback) {
//     console.log(`2. ${pizzaName} is making...`);

//     setTimeout(() => {
//         console.log(`3. ${pizzaName} ready!`);
//         callback(); // Calling call back
//     }, 2000); // 2 second delay
// }

// makePizza("Cheese Pizza", function () {
//     console.log("4. Pizza delivered");
// });

// console.log("5. Cold drink ready");




console.log("1. Download request sent  ...");

function downloadFile(fileName, callback) {
    console.log(`2. Starting download for ${fileName}...`);

    setTimeout(() => {
        console.log(`3. ${fileName} downloaded successfully `);
        callback(fileName);
    }, 3000); // 3 second delay
}

downloadFile("game.zip", function (file) {
    console.log(`4. Extracting ${file}...`);
    setTimeout(() => {
        console.log(`5. ${file} extracted successfully`);
    }, 1500);
});

console.log("6. You can browse other files while downloading...");
