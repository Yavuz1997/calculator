const buttons = document.querySelectorAll(".calcButton");
const operation = document.querySelector("#operation");
const result = document.querySelector("#result");

const nums = [];
const fullOperation = [];
let numOne = 0;
let numTwo = 0;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        switch (button.textContent) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case ".":
                if(fullOperation.length == 0){
                    operation.textContent ="";
                }
                nums.push(button.textContent);
                result.textContent = nums.join("");
                break;
            case String.fromCharCode(247):
            case "x":
            case "-":
            case "+":
                operate(button.textContent);
                break;
            case "=":
                finishCalc();
                break;
            case "CE":
                if (nums.length == 0) {
                    if (fullOperation.length == 2) {
                        fullOperation.pop();
                        operation.textContent = fullOperation.join(" ");
                    }
                }
                nums.pop();
                result.textContent = nums.join("");
                break;
            case "C":
                emptyArray(nums);
                emptyArray(fullOperation);
                result.textContent = nums.join("");
                operation.textContent = fullOperation.join("");
                break;
        }

    })
});

function operate(operand) {
    if (nums.length > 0) {
        if (fullOperation.length == 2) {
            fullOperation.push(nums.join(""));
            numOne = Number(fullOperation[0]);
            numTwo = Number(fullOperation[2]);
            chooseOp();
            emptyArray(fullOperation);
            emptyArray(nums);
            fullOperation.push(numOne.toString());
            fullOperation.push(operand);
            operation.textContent = fullOperation.join(" ");
            result.textContent = "";
        }
        if (fullOperation.length == 0) {
            fullOperation.push(nums.join(""));
            fullOperation.push(operand);
            operation.textContent = fullOperation.join(" ");
            emptyArray(nums);
            result.textContent = "";
        }
    } else if (nums.length == 0) {
        if (fullOperation.length == 1) {
            fullOperation.push(operand);
            operation.textContent = fullOperation.join(" ");
        }
        if (fullOperation.length == 2) {
            fullOperation.pop()
            fullOperation.push(operand);
            operation.textContent = fullOperation.join(" ");
        }

    }

}

function finishCalc(){
    if(nums.length != 0 && fullOperation.length == 2){
        fullOperation.push(nums.join(""));
        operation.textContent = fullOperation.join(" ");
        numOne = Number(fullOperation[0]);
        numTwo = Number(fullOperation[2]);
        chooseOp();
        result.textContent = numOne;
        emptyArray(fullOperation);
        emptyArray(nums);
    }
}

function chooseOp(){
    switch (fullOperation[1]) {
        case String.fromCharCode(247):
            numOne = divide(numOne, numTwo);
            break;
        case "x":
            numOne = multiply(numOne, numTwo);
            break;
        case "-":
            numOne = subtract(numOne, numTwo);
            break;
        case "+":
            numOne = add(numOne, numTwo);
            break;
    }
}

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function emptyArray(array) {
    while (array.length > 0) {
        array.pop();
    }
}