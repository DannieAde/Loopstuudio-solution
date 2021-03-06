const button = document.querySelector(".btn--menu");
const icon = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".navbar__links");
const navbarMenu = document.querySelector(".navbar__menu");
const body = document.querySelector("body");
const active = () => {
  navbarMenu.classList.toggle("active");
  body.classList.toggle("disabled-scroll");
  if (navbarMenu.classList.contains("active")) {
    icon.src = "./images/icon-close.svg";
    button.setAttribute("aria-expanded", "true");
  } else {
    icon.src = "./images/icon-hamburger.svg";
    button.setAttribute("aria-expanded", "false");
  }
};
button.addEventListener("click", active);
