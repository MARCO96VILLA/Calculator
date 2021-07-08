let display = document.querySelector("#display");
let focus = () => document.querySelector("#display").focus();
let clear = document.querySelector("#clear");
let select = (num) => document.querySelector("#" + num);
let firstNum = "";
let operator = "";
display.value = "";
focus();

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
let memorize = () => {
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
};
let resetFocus = (op) => {
    display.value = "";
    operator = op;
    focus();
};
let addq = () => {
    memorize();
    resetFocus("+");
};
let subtq = () => {
    memorize();
    resetFocus("-");
};
let multq = () => {
    memorize();
    resetFocus("*");
};
let divideq = () => {
    memorize();
    resetFocus("/");
};
let powq = () => {
    memorize();
    resetFocus("**");
};
let equalq = () => {
    secondNum = display.value;
    display.value = operate(operator, firstNum, secondNum);
    firstNum = "";
    secondNum = "";
    operator = "";
    focus();
};
let clearq = () => {
    firstNum = "";
    operator = "";
    secondNum = "";
    display.value = "";
    focus();
};
let squareq = () => {
    firstNum = display.value
    display.value = sqrt(firstNum);
    firstNum = "";
    operator = "";
    focus();
};
let delq = () => {
    display.value = display.value.slice(0, -1);
    focus();
};
let pointq = () => {
    if (!display.value.includes(".")) {
        display.value = display.value + ".";
    }
    focus();
};
document.querySelectorAll(".number-input").forEach(el => {
    el.addEventListener("click", () => {
        display.value += el.value
    })
});

document.querySelector("#add").addEventListener("click", addq);
document.querySelector("#subt").addEventListener("click", subtq);
document.querySelector("#mult").addEventListener("click", multq);
document.querySelector("#divide").addEventListener("click", divideq);
document.querySelector("#pow").addEventListener("click", powq);
document.querySelector("#equal").addEventListener("click", equalq);
document.querySelector("#clear").addEventListener("click", clearq);
document.querySelector("#square").addEventListener("click", squareq);
document.querySelector("#del").addEventListener("click", delq);
document.querySelector("#point").addEventListener("click", pointq);
// keyboard support
document.addEventListener("keydown", (e) => {
    let key = e.key;
    if (key == "+") {
        addq();
    } else if (key == "-") {
        subtq();
    } else if (key == "x") {
        multq();
    } else if (key == "/") {
        divideq();
    } else if (key == "=") {
        equalq();
    } else if (key == "c") {
        clearq();
    } else if (key == "s") {
        squareq();
    }
})
function validate(evt) {
    var theEvent = evt || window.event;
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }
  
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