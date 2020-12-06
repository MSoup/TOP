// make 16x16 grid of square divs
const container = document.querySelector(".container");

let numSquares = 16;
let option = "grey";

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

// add event listener for every pixel
const pixels = document.querySelectorAll(".pixel");

pixels.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = option;
    console.log("making square grey " + square.className);
  });
});

const changeColor = document.createElement("button");

// adding a button to experiment with changing colors
changeColor.textContent = "Change to Blue";
changeColor.addEventListener("click", () => (option = "blue"));

container.appendChild(changeColor);
