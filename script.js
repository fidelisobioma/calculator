let display = document.querySelector(".display");
const operands = document.querySelectorAll(".btn");
let allSymbols = ["+", "-", "*", "/", "=", "AC", "del"];
let firstValue = "";
let secondValue = "";
let symbol = "";
let result = "";

// console.log(result);
operands.forEach((btn) => {
  btn.addEventListener("click", (btn) => {
    let target = btn.target.textContent;
    if (target !== "AC" && target !== "del") {
      display.textContent += target;
    }
    let isSymbol = allSymbols.includes(target);
    if (firstValue && isSymbol) {
      symbol = target;
    } else if (!symbol) {
      firstValue += target;
    } else if (symbol) {
      secondValue += target;
    }

    if (symbol === "+") result = +firstValue + +secondValue;
    if (symbol === "*") result = +firstValue * +secondValue;
    if (symbol === "/") result = +firstValue / +secondValue;
    if (symbol === "-") result = +firstValue - +secondValue;

    if (symbol == "=") {
      display.textContent = result;
      firstValue = +display.textContent;
      secondValue = "";
    }
    if (symbol === "AC") {
      location.reload();
    }
  });
});
