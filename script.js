// Log Status
function showLog() {
    console.log(`A: ${a}`);
    console.log(`Operator: "${operator}"`);
    console.log(`B: ${b}`);
    console.log(`Current display: ${display.value}`);
    console.log("====================================")
}

// Reset display
let shouldReset = false;

// Operations function block
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Function handler for the operations
const operate = function(numA, numB, operation) {
    let a = Number(numA);
    let b = Number(numB);

    console.log(`>>>OPERATE FUNCTION:`)
    console.log(`A(${a}) ${operator} B(${b})`);
    
    if (operation === "+") return add(a, b);
    if (operation === "-") return subtract(a, b);
    if (operation === "×") return multiply(a, b);
    if (operation === "÷") return b === 0 ? "Error": divide(a, b);
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
        if (operator !== null && display.value === "") { // Prevents activating the operator if the second number is empty
            operator = value; // Updates the operator if the user change it's mind
            return;
        } else if (operator !== null && display.value !== "") {
            // FLAG B
            console.log("FLAG B");
            b = display.value;
            a = operate(a, b, operator);
            display.value = a;
            shouldReset = true;
        } else {
            // FLAG A happens when operator === null and display.value is Empty
            console.log("FLAG A");
            a = display.value;
            display.value = "";
        }
        
        operator = value;
        

        console.log(`AFTER PRESSING "${value}"`);
        showLog();
        return;
    }

    if (value === "=") { // Saves the next value to "b" and calls the operator function
        b = display.value;
        console.log("---BEFORE EVALUATING");
        console.log(`A: ${a}`);

        a = operate(a, b, operator);

        if (!Number.isInteger(a)) {
                a = a.toFixed(5);
        }

        display.value = a;
        shouldReset = true;
        operator = null;

        console.log(`AFTER PRESSING "="`);
        showLog();
        return;
    }

    if (shouldReset) {
        display.value = value;
        shouldReset = false;
    } else if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
});