let add = (a, b) => Number(a) + Number(b);

let subtract = (a, b) => a - b;

let multiply = (a, b) => a * b;

let divide = (a, b) => b == 0 ? display.value = "ERROR" : a / b;

let sqrt = (a) => Math.sqrt(a);

let pow = (a, b) => a ** b;

let operate = (operator, a, b) => {
    if (operator == "+") {
        return add(a, b);
    } else if (operator == "-") {
        return subtract(a, b);
    } else if (operator == "*") {
        return multiply(a, b);
    } else if (operator == "/") {
        return divide(a, b);
    } else if (operator == "**") {
        return pow(a, b);
    }
};

let display = document.querySelector("#display");
let clear = document.querySelector("#clear");
let select = (num) => document.querySelector("#" + num);
let firstNum = "";
let operator = "";
display.value = "";

document.querySelectorAll(".number-input").forEach(el => {
    el.addEventListener("click", () => {
        display.value += el.value
    })
});

document.querySelector("#add").addEventListener("click", () => {
    if (firstNum !== "") {
        let res = "";
        if (operator == "+") {
            res = add(firstNum, display.value);
        } else if (operator == "-") {
            res = subtract(firstNum, display.value);
        } else if (operator == "*") {
            res = multiply(firstNum, display.value);
        } else if (operator == "/") {
            res = divide(firstNum, display.value);
        } else if (operator == "**") {
            res = pow(firstNum, display.value);
        }
        firstNum = res;
    } else {
        firstNum = display.value;
    }
    display.value = "";
    operator = "+";
})
document.querySelector("#subt").addEventListener("click", () => {
    if (firstNum !== "") {
        let res = "";
        if (operator == "+") {
            res = add(firstNum, display.value);
        } else if (operator == "-") {
            res = subtract(firstNum, display.value);
        } else if (operator == "*") {
            res = multiply(firstNum, display.value);
        } else if (operator == "/") {
            res = divide(firstNum, display.value);
        } else if (operator == "**") {
            res = pow(firstNum, display.value);
        }
        firstNum = res;
    } else {
        firstNum = display.value;
    }
    operator = "-";
    display.value = "";
})
document.querySelector("#mult").addEventListener("click", () => {
    if (firstNum !== "") {
        let res = "";
        if (operator == "+") {
            res = add(firstNum, display.value);
        } else if (operator == "-") {
            res = subtract(firstNum, display.value);
        } else if (operator == "*") {
            res = multiply(firstNum, display.value);
        } else if (operator == "/") {
            res = divide(firstNum, display.value);
        } else if (operator == "**") {
            res = pow(firstNum, display.value);
        }
        firstNum = res;
    } else {
        firstNum = display.value;
    }
    display.value = "";
    operator = "*";
})
document.querySelector("#divide").addEventListener("click", () => {
    if (firstNum !== "") {
        let res = "";
        if (operator == "+") {
            res = add(firstNum, display.value);
        } else if (operator == "-") {
            res = subtract(firstNum, display.value);
        } else if (operator == "*") {
            res = multiply(firstNum, display.value);
        } else if (operator == "/") {
            res = divide(firstNum, display.value);
        } else if (operator == "**") {
            res = pow(firstNum, display.value);
        }
        firstNum = res;
    } else {
        firstNum = display.value;
    }
    display.value = "";
    operator = "/";
})
document.querySelector("#pow").addEventListener("click", () => {
    if (firstNum !== "") {
        let res = "";
        if (operator == "+") {
            res = add(firstNum, display.value);
        } else if (operator == "-") {
            res = subtract(firstNum, display.value);
        } else if (operator == "*") {
            res = multiply(firstNum, display.value);
        } else if (operator == "/") {
            res = divide(firstNum, display.value);
        } else if (operator == "**") {
            res = pow(firstNum, display.value);
        }
        firstNum = res;
    } else {
        firstNum = display.value;
    }
    display.value = "";
    operator = "**";
})
document.querySelector("#equal").addEventListener("click", () => {
    secondNum = display.value;
    display.value = operate(operator, firstNum, secondNum);
    firstNum = "";
    secondNum = "";
    operator = "";
})
document.querySelector("#clear").addEventListener("click", () => {
    firstNum = "";
    operator = "";
    secondNum = "";
    display.value = "";
})
document.querySelector("#square").addEventListener("click", () => {
    firstNum = display.value
    display.value = sqrt(firstNum);
    firstNum = "";
    operator = "";
})
document.querySelector("#del").addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
})
document.querySelector("#point").addEventListener("click", () => {
    if (!display.value.includes(".")) {
        display.value = display.value + ".";
    }
})

/*
console.log(pow(3,4));
console.log(sqrt(64));
console.log(select("five"));
console.log(add(20, 5));
console.log(subtract(20, 5));
console.log(multiply(20, 5));
console.log(divide(20, 5));
console.log(operate("+", 20, 5));
console.log(operate("-", 20, 5));
console.log(operate("*", 20, 5));
console.log(operate("/", 20, 5));
*/