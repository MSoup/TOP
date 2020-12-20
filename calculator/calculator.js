const container = document.querySelector(".container");
const numberPad = document.querySelector(".numberPad");
const mainScreen = document.querySelector(".mainScreenText");
const subScreen = document.querySelector(".subText");
const OPERATORS = ["+", "-", "/", "*", "="];

// TODO
// 1) Finish UI
// 2) Finish logic
// 3) Connect keyboard input to calc

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

// MAIN LOGIC
let stack = [];
const capture = function (event) {
  let input = event.target;
  // make sure it's a button being pressed
  if (input.className != "btn") {
    return;
  }

  input = input.value;

  // first input isn't an int
  if (stack.length == 0 && !Number.isInteger(parseInt(input))) {
    mainScreen.textContent = "First entry must be a number";
    return;
  }
  // more than one operator was pressed
  let lastIndex = stack.length - 1;
  if (
    OPERATORS.indexOf(input) !== -1 &&
    OPERATORS.indexOf(stack[lastIndex]) !== -1
  ) {
    mainScreen.textContent = "Cannot press two operators in a row";
    return;
  }

  // if number, push onto stack as a string
  if (Number.isInteger(parseInt(input))) {
    stack.push(input);
    // clear
  } else if (input == "clear") {
    stack = [];
    mainScreen.textContent = "Cleared";
    subScreen.textContent = "";
    return;
    // if equals sign
  } else if (
    // TODO - change this part.
    // currently, pressing 5 * 5 * 5 will evaluate 5*5 but not do the *5 appropriately
    input == "=" ||
    (OPERATORS.indexOf(stack[1]) !== -1 && Number.isInteger(parseInt(stack[2])))
  ) {
    // if LS and operator exists, send LS, OP, RS to OPERATE
    if (
      Number.isInteger(parseInt(stack[0])) &&
      OPERATORS.indexOf(stack[1]) !== -1
    ) {
      let rs = stack.slice(2).join("");
      stack = stack.slice(0, 2);
      stack.push(rs);
      result = operate(parseInt(stack[0]), stack[1], parseInt(stack[2]));
      mainScreen.textContent = result;
      stack = [result];
      return;
    }
  }

  // remaining possibility, operator
  else {
    let ls = stack.join("");
    let op = input;
    stack = [ls, op];
  }
  display(input);
};

// add event listeners to buttons
numberPad.addEventListener("click", capture);

const display = function (input) {
  if (input == "clear") {
    subScreen.textContent = "Cleared";
  }
  subScreen.textContent = stack.join(" ");
};

const operate = function (a, op, b) {
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
