import { some } from "lodash";

export function menu() {
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  let footer = document.querySelector("footer");

  let something = document.createElement("div");
  something.className = "test";
  main.appendChild(something);
}
