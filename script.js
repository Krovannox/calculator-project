// Operations function block
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Event listener for the buttons block
const buttons = document.querySelector("#container-buttons");
buttons.addEventListener("click", (e) => {
    if (!e.target.classList.contains("button")) return;

    console.log(e.target.dataset.value);
});