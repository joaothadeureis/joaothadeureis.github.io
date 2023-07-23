let menu = document.querySelector(".menuPopup");
let ico = document.querySelector(".ico-menu");

function menuShow() {
  menu.classList.toggle("open");
  if (menu.classList.contains("open")) {
    ico.setAttribute("src", "/img/close.svg");
  } else {
    ico.setAttribute("src", "/img/menu_mobile.svg");
  }
}
