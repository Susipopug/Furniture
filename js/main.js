import { catalogRender, changeCatalog } from "./catalog.js";
import { catalogData } from "./data.js";

const btn = document.querySelector(".discount__btn");
const discount = document.querySelector(".discount");

btn.addEventListener("click", () => {
  discount.classList.toggle("hide");
});

const burger = document.querySelector(".burger__menu-btn");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("open");

  if (nav.classList.contains("open")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
});

catalogRender(catalogData.slice(0, 6));
changeCatalog();
