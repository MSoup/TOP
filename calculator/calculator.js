const container = document.querySelector(".container");
const numberPad = document.querySelector(".numberPad");
const mainScreen = document.querySelector(".mainScreenText");
const subScreen = document.querySelector(".subText");
const OPERATORS = ["+", "-", "/", "*", "="];

// generate buttons 1-9, period, clear
const generateNumberPad = () => {
  let button;
  // add numbers
  for (let i = 0; i < 10; i++) {
    button = document.createElement("button");
    button.className = "btn";
    button.value = i;
    button.textContent = i;
    numberPad.appendChild(button);
  }
  // add operators
  for (let i = 0; i < OPERATORS.length; i++) {
    button = document.createElement("button");
    button.className = "btn";
    button.textContent = OPERATORS[i];
    button.value = OPERATORS[i];
    numberPad.appendChild(button);
  }
  // add clear separately (below logic loops through operators so this is needed)
  button = document.createElement("button");
  button.className = "btn";
  button.textContent = "clear";
  button.value = "clear";
  numberPad.appendChild(button);
};

generateNumberPad();

// add event listeners to buttons
numberPad.onclick = function (event) {
  let target = event.target; // where was the click?
  if (target.className != "btn") {
    return;
  }
  capture(target.value);
};

// captures info from buttons being clicked, main logic
let stack = [];
const capture = function (input) {
  // do nothing if first input isn't an int
  if (!stack && !Number.isInteger(parseInt(input))) {
    return;
  }
  // do nothing if more than one operator was pressed sequentially
  if (!Number.isInteger(stack[stack.length - 1]) && input in OPERATORS) {
    return; // bad logic, currently clear cannot be pressed after an operator
  }

  // if number, push onto stack as a string for ez joining
  if (Number.isInteger(parseInt(input))) {
    display(input);
    stack.push(input);
  } else if (input == "clear") {
    stack = [];
  }

  // remaining possibility, operator
  else {
    let ls = stack.join("");
    let op = input;
  }
};

const display = function (input) {
  if (input == "clear") {
    subScreen.textContent = "Cleared";
  } else {
    subScreen.textContent += input + " ";
  }
};

const operate = function (a, b, op) {
  switch (op) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
      break;
    case "/":
      return a / b;
      break;
  }
};
