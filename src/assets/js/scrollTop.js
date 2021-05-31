import { toggleMenu } from "./toggleActive";

const aboutBtns = document.querySelectorAll(".js-about-btn");
const skillsBtns = document.querySelectorAll(".js-skills-btn");
const workBtns = document.querySelectorAll(".js-work-btn");
const contactBtns = document.querySelectorAll(".js-contact-btn");

const findTop = (box) => box.offsetTop;

function scrollToBox(box) {
  const targetBox = document.getElementById(box);
  const top = findTop(targetBox);

  if (window.innerWidth < 768) {
    window.scrollTo(0, top - 70);
    toggleMenu();
  } else {
    window.scrollTo(0, top - 100);
  }
}

aboutBtns.forEach((btn) =>
  btn.addEventListener("click", () => scrollToBox("aboutBox"))
);

skillsBtns.forEach((btn) =>
  btn.addEventListener("click", () => scrollToBox("skillsBox"))
);

workBtns.forEach((btn) =>
  btn.addEventListener("click", () => scrollToBox("workBox"))
);

contactBtns.forEach((btn) =>
  btn.addEventListener("click", () => scrollToBox("contactBox"))
);
