const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const newQuoteButton = document.querySelector("button");

async function getData(){
   try{
        const response = await fetch("https://quotes-api-self.vercel.app/quote");
        if(!response.ok){
            throw new Error(`Not found bro ${response.status}`);
        }
        const data = await response.json();
        quote.textContent = `"${data.quote}"`;
        author.textContent = data.author;
        console.log(data);
   }
   catch(error){
        console.error(error.message);
   }
}

window.addEventListener("DOMContentLoaded", () => {
    quote.textContent = "Loading...";
    author.textContent = "";
    getData();
});

newQuoteButton.addEventListener("click" , ()=>{
    quote.textContent = "Loading...";
    author.textContent = "";
    getData();
})