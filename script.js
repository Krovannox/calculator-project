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
    a = "0";
    operator = null;
    b = null;
    display.value = a;
}

// Event listener for the buttons
const buttons = document.getElementById("buttons-container");
buttons.addEventListener("click", (e) => {
    if (!e.target.classList.contains("btn")) return; // Don't act outside the target button

    const value = e.target.dataset.value;

    if (value === "C") { // "Clear" button
        clear();
        return;
    }

    if (value === "%") { // "Percentage" button
        display.value = percentage(display.value);
        return;
    }

    if (value === "⌫") { // "Return" button
        display.value = display.value.slice(0, -1) || "0";
        return;
    }

    display.value += value; // Displays the clicked value

    console.log(value);
    console.log(display.value);
});