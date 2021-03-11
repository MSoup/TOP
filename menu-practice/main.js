let navButton = document.querySelector(".dropdown");
let dropdown = document.querySelector(".navContainer");

navButton.addEventListener("click", handleDisplayDropdown);
dropdown.classList.toggle("hidden");

function handleDisplayDropdown() {
  dropdown.classList.toggle("hidden");
}
