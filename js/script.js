// Проверка работы js
let a = 2;
let b = 2;
console.log(a + b);
// Бургер меню
let burgerMenu = document.getElementById("header_burger_button");
let overlay = document.getElementById("header_burger_menu");

console.log(burgerMenu, overlay);

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("header_burger_button_close");
  overlay.classList.toggle("header_burger_menu_visibile");
});
