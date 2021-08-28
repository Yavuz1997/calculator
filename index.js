const buttons = document.querySelectorAll(".calcButton");
const operation = document.querySelector("#operation");
const result = document.querySelector("#result");

const nums = [];
let currentOp = "";
const fullOperation = [];
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
                nums.push(button.textContent);
                result.textContent = nums.join("");
                break;
            case String.fromCharCode(247):
                if(nums.length>0){
                    if(fullOperation.length==2){
                        
                    }
                    if(fullOperation.length==0){
                        fullOperation.push(nums.join(""));
                        fullOperation.push(String.fromCharCode(247));
                        operation.textContent = fullOperation.join(" ");
                        while (nums.length > 0) {
                            nums.pop();
                        }
                        result.textContent = "";
                    }
                }
                break;
            case "x":
                break;
            case "-":
                break;
            case "+":
                break;
            case "=":
                break;
            case "CE":
                nums.pop();
                result.textContent = nums.join("");
                break;
            case "C":
                while (nums.length > 0) {
                    nums.pop();
                }
                result.textContent = nums.join("");
                break;
        }

    })
});



























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