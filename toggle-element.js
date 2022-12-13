const button = document.getElementById("js-toggle-button");
const menu = document.getElementById("js-menu");

button.addEventListener("click", () => {
  menu.classList.toggle("is-visible");
});