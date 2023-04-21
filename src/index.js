import _ from "lodash";
import { home } from "./home-page/home.js";
import "./style.css";

import { clearPage } from "./clear-page/clear";

import { menu } from "./menu-page/menu";
window.onload = home;
let home1 = document.getElementById("home");
home1.addEventListener("click", () => {
  console.log("awda");
});
