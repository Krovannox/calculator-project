// Operations function block
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Function handler for the operations
const operate = function(numA, numB, operation) {
    let a = Number(numA);
    let b = Number(numB);
    
    if (operation === "+") {
        display.value = add(Number(a), Number(b));
    } else if (operation === "-") {
        display.value = subtract(Number(a), Number(b));
    } else if (operation === "×") {
        display.value = multiply(Number(a), Number(b));
    } else if (operation === "÷" && b === 0) {
        display.value = "Error";
    } else if (operation === "÷") {
        display.value = divide(Number(a), Number(b));
    }
    
    return;
}

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

    if (value === "%") { // "Percentage" button
        display.value = percentage(display.value);
        return;
    }
    
    if (value === "C") { // "Clear" button
        clear();
        return;
    }

    if (value === "⌫") { // "Return" button
        display.value = display.value.slice(0, -1) || "0";
        return;
    }

    if (value === "+/-") { // "Plus-Minus" button
        if (display.value === "0") {
            return;
        } else if (display.value.includes("-")) {
            display.value = display.value.slice(1);
            return;
        } else {
            display.value = "-" + display.value;
            return;
        }
    }

    if (value === ".") { // "Dot" button
        if (display.value.includes(".")) {
            return;
        } else if (display.value === "") {
            display.value = "0" + ".";
            return;
        } else {
            display.value = display.value + ".";
            return;
        }
    }

    if (e.target.classList.contains("operator") && value !== "=") { // Saves the value to "a" and the selected operator
        a = display.value;
        display.value = "";
        operator = value;
        console.log(`a: ${a}`);
        console.log(`operator: ${operator}`);
        console.log(`New display value: ${display.value}`);
        return;
    }

    if (value === "=") { // Saves the next value to "b" and calls the operator function
        b = display.value;
        console.log(`b: ${b}`);

        operate(a, b, operator);
        return;
    }

    if (display.value === "0") { // Remove the 0 if another number is pressed.
        display.value = value;
    } else {
        display.value += value;
    }

    console.log(`Display value: ${display.value}`);
});