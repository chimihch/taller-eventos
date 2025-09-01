document.addEventListener('DOMContentLoaded', () => {

const mdiv = document.getElementById("btn1");

mdiv.addEventListener("click", () => {
  alert("Hola! Soy el div");
});

const button = document.querySelector("button");
button.addEventListener("click", (event) => {
  event.stopPropagation();
  alert("Hola!");
});
});