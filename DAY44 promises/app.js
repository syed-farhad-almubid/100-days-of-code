// const xhr = new XMLHttpRequest();
// console.log(xhr);

// xhr.open("GET","https://jsonplaceholder.typicode.com/users",true);

// xhr.onload = function(){
//     if(xhr.status === 200){
//         let data = JSON.parse(xhr.responseText);
//         console.log(`Data from server: ${JSON.stringify(data, null, 2)}`);

//     }
//     else{
//         console.log("Error");
//     }
// }

// xhr.send();


// const URL = "https://jsonplaceholder.typicode.com/users";

// function sendRequest() {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
        
//         //Request setup
//         xhr.open("GET", URL, true);
        
//         //Response handle
//         xhr.onload = function() {
//             if (xhr.status === 200) {
//                 resolve(JSON.parse(xhr.response)); 
//             } else {
//                 reject(new Error("Something went wrong")); 
//             }
//         };

//         xhr.onerror = function() {
//             reject(new Error("Network Error"));
//         };

//         //Send request
//         xhr.send();
//     });
// }

// sendRequest()
//     .then(data => {
//         console.log("Data from server:", data);
//     })
//     .catch(err => {
//         console.error("Error:", err.message);
//     });



// //fetch
// const URL = "https://jsonplaceholder.typicode.com/users";

// fetch(URL)
//   .then(response => response.json())  
//   .then(data => {
//       console.log("Users fetched from server:", data); 
//   })
//   .catch(error => {
//       console.error("Error:", error.message);  
//   });


const URL = "https://jsonplaceholder.typicode.com/users";

async function fetchUsers() {
    try {
        //Fetch request
        const response = await fetch(URL);

        //Check response status
        if (!response.ok) {
            throw new Error("Not responding");
        }

        //Convert response to JSON
        const data = await response.json();

        console.log("Users fetched from server:", data);
    } catch (error) {
        //Error handle
        console.error("Error:", error.message);
    }
}

// Call the async function
fetchUsers();
