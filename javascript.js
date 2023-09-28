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


//get references to html elements
const lastOperationScreen = document.getElementById("last");
const currentOperationScreen = document.getElementById("current");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const pointButton = document.getElementById("point-btn");
const equalsButton = document.getElementById("equals-btn");
const numberButton = document.querySelectorAll("[data-number]");
const operatorButton = document.querySelectorAll("[data-operator]");

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
    currentOperationScreen.textContent = null;
    lastOperationScreen.textContent = null;
    firstOperand = "";
    secondOperand = "";
    currentOperation = null;
}

function deleteNumber() {

}

function appendPoint() {
    if (currentOperationScreen.textContent.includes(".")){
        return;
    }
    currentOperationScreen.textContent += ".";
}

function evaluate() {
    secondOperand = currentOperationScreen.textContent;
    lastOperationScreen.textContent += secondOperand;
    currentOperationScreen.textContent = ""
    currentOperationScreen.textContent += operate(firstOperand, secondOperand, currentOperation);
}

function appendNumber(number) {
    currentOperationScreen.textContent += number;
}

function setOperation(operation) {
    firstOperand = currentOperationScreen.textContent;
    currentOperation = operation;
    currentOperationScreen.textContent += operation;
    lastOperationScreen.textContent = firstOperand + " " + currentOperation;
    currentOperationScreen.textContent = "";
}