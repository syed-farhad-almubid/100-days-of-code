const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// setTimeout(()=>{
//     heading1.style.color = "violet";
//     setTimeout(()=>{
//         heading2.style.color = "purple";
//         setTimeout(()=>{
//             heading3.style.color = "blue";
//             setTimeout(()=>{
//                 heading4.style.color = "red";
//                 setTimeout(()=>{
//                     heading5.style.color = "green";
//                     setTimeout(()=>{
//                         heading6.style.color = "orange";
//                         setTimeout(()=>{
//                             heading7.style.color = "brown";
//                         },1000)
//                     },3000)
//                 },2000)
//             },1000)
//         },2000)
//     },2000)
// },1000)


//promise

// function myPromise(){
//     const bucket = ["sugar","milk","water","egg","vegetables"];
//     return new Promise((resolve,reject)=>{
//         if(bucket.includes("sugar") && bucket.includes("milk") && bucket.includes("water")){
//             resolve({value : "tea"});
//         } 
//         else{
//             reject("ingredient not found");
//         }
//     })
// }

// myPromise().then((val)=>{
//     console.log(val);
// }).catch((error)=>{
//     console.log(error);
// })



// function myPromise(){
//     return new Promise(resolve,reject)=>{
//         const movie = ["money","ticket"];
//         if(movie.includes("money") && movie.includes("ticket")){
//             resolve("Movie booked 😊");
//         }
//         else{
//             reject("Sorry");
//         }
//     })
// }

// myPromise().then((a)=>{
//     console.log(a);
// }).catch((b)=>{
//     console.log(b);
// })


// function myPromise() {
//     return new Promise((resolve, reject) => {
//         const movie = ["money", "ticket"];

//         console.log("Booking in process... ");

//         setTimeout(() => {
//             if (movie.includes("money") && movie.includes("ticket")) {
//                 resolve("Movie booked successfully 😊");
//             } else {
//                 reject("Booking failed sorry");
//             }
//         }, 2000); // 2 second delay
//     });
// }

// myPromise()
//     .then(msg => console.log(msg))
//     .catch(err => console.log(err));


function changeColor(element,txt,clr,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent = txt;
                element.style.color = clr;
                resolve();
            }
            else{
                reject("element not found");
            }
        },time)
    })
}

changeColor(heading1, "one", "blue", 1000)
    .then(() => changeColor(heading2, "two", "red", 1000))
    .then(() => changeColor(heading3, "three", "green", 1000))
    .then(() => changeColor(heading4, "four", "purple", 1000))
    .then(() => changeColor(heading5, "five", "orange", 1000))
    .then(() => changeColor(heading6, "six", "pink", 1000))
    .then(() => changeColor(heading7, "seven", "brown", 1000))
    .catch(err => console.log(err));