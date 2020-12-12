const container = document.querySelector(".container");
let pixels;

const gridContainer = document.createElement("div");
const clearButton = document.createElement("button");
const changeColorDropdown = document.createElement("select");
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

// set up changeColorDropdown - default value "" and display text "choose color"
let defaultSelect = document.createElement("option");
defaultSelect.value = "";
defaultSelect.textContent = "Choose Color";
changeColorDropdown.add(defaultSelect);
container.appendChild(changeColorDropdown);

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

container.appendChild(clearButton);
container.appendChild(gridContainer);

gridContainer.setAttribute("id", "gridContainer");

// default is 16?
let numSquares = 16;
let option = "grey";

// set up clearButton
clearButton.textContent = "Reset Canvas";
clearButton.addEventListener("click", () => {
  do {
    numSquares = window.prompt("Select new size (10-100, default is 16)", 16);
  } while (numSquares < 9 || numSquares > 100);
  removeBoard();
  generateBoard(numSquares);
});

changeColorDropdown.addEventListener("change", (event) => {
  option = event.target.value;
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

  pixels = document.querySelectorAll(".pixel");

  pixels.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = option;
      console.log(`making square ${option}`);
    });
  });
};

generateBoard(16);
