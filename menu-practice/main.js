let navButton = document.querySelector(".dropdown");
let dropdown = document.querySelector(".navContainer");
let selects = dropdown.querySelectorAll("a");
navButton.addEventListener("click", handleDisplayDropdown);

function handleDisplayDropdown() {
  dropdown.classList.toggle("hidden");
  // slide in each dropdown DOM element
  selects.forEach((el) => {
    el.classList.toggle("fade-in");
  });
}
