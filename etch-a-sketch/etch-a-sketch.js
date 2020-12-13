const container = document.querySelector(".container");
const buttonContainer = document.querySelector(".buttonContainer");
const colorIndicator = document.querySelector(".colorIndicator");

const defaultSelect = document.createElement("option");
const gridContainer = document.createElement("div");
const clearButton = document.createElement("button");
const eraser = document.createElement("button");
const changeColorDropdown = document.createElement("select");
const currentlySelected = document.createElement("h3");

buttonContainer.appendChild(changeColorDropdown);
buttonContainer.appendChild(clearButton);
buttonContainer.appendChild(eraser);
container.appendChild(gridContainer);

changeColorDropdown.add(defaultSelect);

// text node - displays currently selected
buttonContainer.parentNode.insertBefore(
  currentlySelected,
  buttonContainer.nextSibling
);

// event listeners
eraser.addEventListener("click", () => {
  option = "";
  currentlySelected.textContent = "Eraser currently selected.";
  colorIndicator.style.backgroundColor = "white";
});

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
  currentlySelected.textContent = capitalize(option) + " currently selected.";
});

// helpers
const capitalize = function (word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

function appendColors() {
  let color, option;
  for (let i = 0; i < selectList.length; i++) {
    color = capitalize(selectList[i]);
    option = document.createElement("option");
    option.value = color;
    option.textContent = color;
    option.color = color;
    changeColorDropdown.add(option);
  }
}

const removeBoard = function () {
  try {
    while (gridContainer.lastChild.nodeName === "DIV") {
      gridContainer.removeChild(gridContainer.lastChild);
    }
  } catch {
    return;
  }
};

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

// default settings
let numSquares = 16;
let option = "grey";
currentlySelected.textContent = capitalize(option) + " currently selected.";
defaultSelect.value = "";
defaultSelect.textContent = "Choose Color";
eraser.value = "";
eraser.textContent = "Eraser";

gridContainer.setAttribute("id", "gridContainer");
changeColorDropdown.className = "button";

// set up clearButton
clearButton.textContent = "Reset Canvas";
clearButton.className = "button";

const generateBoard = function (numSquares) {
  gridContainer.style.setProperty("--grid-rows", numSquares);
  gridContainer.style.setProperty("--grid-cols", numSquares);
  for (c = 0; c < numSquares * numSquares; c++) {
    let cell = document.createElement("div");
    gridContainer.appendChild(cell).className = "pixel";
  }

  let pixels = document.querySelectorAll(".pixel");

  pixels.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = option;
    });
  });
};

appendColors();
generateBoard(16);
