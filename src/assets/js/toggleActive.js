const menuBtn = document.getElementById("menuBtn");

export function toggleMenu() {
  const menu = document.getElementById("menu");
  const overlay = document.getElementById("overlay");

  menu.classList.toggle("is-active");
  overlay.classList.toggle("is-active");
}

function init() {
  menuBtn.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);
}

if (menu) {
  init();
}
