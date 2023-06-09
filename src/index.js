import _ from "lodash";
import { home } from "./home-page/home.js";
import "./style.css";

import { clearPage } from "./clear-page/clear";

import { menu } from "./menu-page/menu";
import { contact } from "./contact-page/contact.js";
import { loadMain } from "./home-content/home-main.js";
home();

let home1 = document.querySelector("#home");
home1.addEventListener("click", () => {
  clearPage();
  loadMain();
});

let menu1 = document.querySelector("#menu");
menu1.addEventListener("click", () => {
  clearPage();
  menu();
});

let contact1 = document.querySelector("#contact");
contact1.addEventListener("click", () => {
  clearPage();
  contact();
});