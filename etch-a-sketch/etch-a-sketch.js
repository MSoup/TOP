const container = document.querySelector(".container");
const buttonContainer = document.querySelector(".buttonContainer");
const colorIndicator = document.querySelector(".colorIndicator");

const defaultSelect = document.createElement("option");
const gridContainer = document.createElement("div");
const clearButton = document.createElement("button");
const changeColorDropdown = document.createElement("select");

buttonContainer.appendChild(changeColorDropdown);
buttonContainer.appendChild(clearButton);
container.appendChild(gridContainer);

changeColorDropdown.add(defaultSelect);

// default settings
let numSquares = 16;
let option = "grey";

// available colors in drop down
const selectList = [
  "aqua",
  "black",
  "blue",
  "fuchsia",
  "gray",
  "green",
  "lime",
  "maroon",
  "navy",
  "olive",
  "purple",
  "red",
  "silver",
  "teal",
  "yellow",
];

// default drop down option
defaultSelect.value = "";
defaultSelect.textContent = "Choose Color";

// append colors
function appendColors() {
  let color, option;
  for (let i = 0; i < selectList.length; i++) {
    color = selectList[i];
    option = document.createElement("option");
    option.value = color;
    option.textContent = color;
    option.color = color;
    changeColorDropdown.add(option);
  }
}

// execute appendColors function to append colors to dropdown
appendColors();

gridContainer.setAttribute("id", "gridContainer");

changeColorDropdown.className = "button";

// set up clearButton
clearButton.textContent = "Reset Canvas";
clearButton.className = "button";
clearButton.addEventListener("click", () => {
  do {
    numSquares = window.prompt("Select new size (10-100, default is 16)", 16);
  } while (numSquares < 9 || numSquares > 100);
  removeBoard();
  generateBoard(numSquares);
});

changeColorDropdown.addEventListener("change", (event) => {
  option = event.target.value;
  colorIndicator.style.backgroundColor = option;
});

const removeBoard = function () {
  try {
    while (gridContainer.lastChild.nodeName === "DIV") {
      gridContainer.removeChild(gridContainer.lastChild);
    }
  } catch {
    return;
  }
};

const generateBoard = function (numSquares) {
  gridContainer.style.setProperty("--grid-rows", numSquares);
  gridContainer.style.setProperty("--grid-cols", numSquares);
  for (c = 0; c < numSquares * numSquares; c++) {
    let cell = document.createElement("div");
    // cell.innerText = c + 1;
    gridContainer.appendChild(cell).className = "pixel";
  }

  let pixels = document.querySelectorAll(".pixel");

  pixels.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = option;
      console.log(`making square ${option}`);
    });
  });
};

generateBoard(16);
