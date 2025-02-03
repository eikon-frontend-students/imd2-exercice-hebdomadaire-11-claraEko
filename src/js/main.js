var button = document.querySelector(".button");
var numbers = document.querySelector(".number");
var number = 147;

function changeColor() {
  button.classList.toggle("is-active");

  if (button.classList.contains("is-active")) {
    button.style.backgroundColor = "red";
    numbers.style.color = "white";
  } else {
    button.style.backgroundColor = "white";
    numbers.style.color = "black";
  }

  setTimeout(resetButton, 300);
}

function incrementNumber() {
  if (number < 200) {
    number++;
    numbers.textContent = number;
  }
}

function resetButton() {
  button.classList.remove("is-active");
  button.style.backgroundColor = "white";
  numbers.style.color = "black";
}
setTimeout(() => {
  numbers.style.color = "black";
}, 10);

button.addEventListener("click", changeColor);
button.addEventListener("click", incrementNumber);
