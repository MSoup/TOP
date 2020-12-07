const container = document.querySelector(".container");
const clearButton = document.createElement("button");
let pixels;

let numSquares = 16;
let option = "grey";

clearButton.textContent = "Reset Canvas";
clearButton.addEventListener("click", () => {
  do {
    numSquares = window.prompt("Select new size (10-100, default is 16)", 16);
  } while (numSquares < 9 || numSquares > 100);
  removeBoard();
  generateBoard(numSquares);
});

container.appendChild(clearButton);

const changeColor = document.createElement("button");

// adding a button to experiment with changing colors
changeColor.textContent = "Change to Blue";
changeColor.addEventListener("click", () => (option = "blue"));

container.appendChild(changeColor);

const removeBoard = function () {
  while (container.lastChild.nodeName === "DIV") {
    container.removeChild(container.lastChild);
  }
};

const generateBoard = function (numSquares) {
  for (let i = 0; i < numSquares; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < numSquares; j++) {
      let pixel = document.createElement("div");
      pixel.classList.add(i + "-" + j);
      pixel.classList.add("pixel");
      row.appendChild(pixel);
    }
    container.appendChild(row);
  }
  pixels = document.querySelectorAll(".pixel");

  // add event listeners to each pixel after generation

  pixels.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = option;
      console.log("making square grey " + square.className);
    });
  });
};
