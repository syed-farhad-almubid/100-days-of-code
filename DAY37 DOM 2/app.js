//DOM tree traversal

let a = document.getRootNode(); //getting the root node

console.log(a);

let b = a.childNodes[0]; //getting the html root element

console.log(b);

console.log(b.childNodes); //children of html element

const head = b.childNodes[0]; //getting the head element

console.log(head);

console.log(head.parentNode); //displaying the parent element of head

console.log(head.nextSibling); //displaying the next sibling of head element

console.log(head.nextSibling.nextSibling.textContent); //displaying the text content

console.log(head.nextElementSibling); //ignoring the text element


const heading = document.querySelector("h1");
const parentdiv = heading.parentNode;
parentdiv.style.backgroundColor = "red";