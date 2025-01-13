let Values = document.querySelector(".values");
let calculate = document.querySelector(".result");
let buttons = document.querySelector(".buttons");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";
let symbol = "- + * /";
buttons.addEventListener("click", (btn) => {
  let button = btn.target.textContent;
  // operator = "";
  let onlysymbols = symbol.includes(button);
  // console.log(onlysymbols);
  if (onlysymbols) {
    symbol = button;
    console.log("first" + symbol);
  } else if (symbol !== button) {
    firstNumber = button;
    console.log("first" + firstNumber);
  } else if (symbol) {
    secondNumber = button;
    console.log("second" + secondNumber);
  }

  if (secondNumber) {
    result = firstNumber + secondNumber;
    console.log(result);
  }

  // console.log(button);
});
