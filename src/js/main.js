var button = document.querySelector(".button");
var numbers = document.querySelector(".number");
function changeColor() {
  button.classList.toggle("is-active");
  numbers.classList.toggle("is-active");
}
button.addEventListener("click", changeColor);

// A finir (metre les animation js et nombre qui augmentent )
