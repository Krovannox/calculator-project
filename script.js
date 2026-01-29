// Operations function block
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Modifiers function block
const percentage = (n) => n / 100;

// Variables used for the calculation
let a = 0;
let operator = null;
let b = null;

// Select and give display an initial value
let display = document.getElementById("display");
display.value = a;

// Clear function
const clear = function() {
    a = 0;
    operator = null;
    b = null;
    display.value = a;
}

// Event listener for the buttons
const buttons = document.getElementById("buttons-container");
buttons.addEventListener("click", (e) => {
    if (!e.target.classList.contains("btn")) return; // Don't act outside the target button

    if (e.target.dataset.value === "C") { // "C" button
        clear();
        return;
    };

    if (e.target.dataset.value === "%") { // "Percentage" button
        display.value = percentage(display.value);
        return;
    }

    display.value += e.target.dataset.value; // Displays the clicked value

    console.log(e.target.dataset.value);
    console.log(display.value);
});