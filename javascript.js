function add(x, y) {
    var result = x + y;
    return result;
}

function subtract(x, y) {
    var result = x - y;
    return result;
}

function multiply(x, y) {
    var result = x * y;
    return result;
}

function divide(x, y) {
    var result = x / y;
    return result;
}

function operate(x, y, operand) {
    var result;
    switch (operand) {
        case "+":
            result = add(x, y);
            break;
        case "-":
            result = subtract(x, y);
            break;
        case "*":
            result = multiply(x, y);
            break;
        case "/":
            result = divide(x, y);
            break;
    }
    return result;
}

//initialize variables
let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let shouldReset = false;

//get references to html elements
const lastOperationScreen = document.getElementById("last");
const currentOperationScreen = document.getElementById("current");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const numberButton = document.querySelectorAll(["data-number"]);
const operatorButton = document.querySelectorAll(["data-operator"]);
const pointButton = document.getElementById("point-btn");
const equalsButton = document.getElementById("equals-btn");

//add event listeners to elements
clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteNumber);
pointButton.addEventListener("click", appendPoint);
equalsButton.addEventListener("click", evaluate);

numberButton.forEach((button) =>
    button.addEventListener("click", () => 
        appendNumber(button.textContent))
)

operatorButton.forEach((button) =>
    button.addEventListener("click", () => 
        setOperation(button.textContent))
)



function clear() {

}

function deleteNumber() {

}

function appendPoint() {

}

function evaluate() {

}

function appendNumber(number) {
    currentOperationScreen.textContent += number;
}

function setOperation() {

}