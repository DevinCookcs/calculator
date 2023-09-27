function add(x, y){
    var result = x + y;
    return result;
}

function subtract(x, y){
    var result = x - y;
    return result;
}

function multiply(x, y){
    var result = x * y;
    return result;
}

function divide(x, y){
    var result = x / y;
    return result;
}

function operate(x, operand, y){
    var result;
    switch (operand){
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

var x;
var y;
var operand;