// Operations function block
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let a = 0;
let operator = null;
let b = null;

let display = document.getElementById("display");
display.value = a;

const buttons = document.getElementById("buttons-container");
buttons.addEventListener("click", (e) => {
    if (!e.target.classList.contains("btn")) return;
    
    console.log(e.target.dataset.value);
});