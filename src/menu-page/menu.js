import cakeItemNew from "../images/CakeItemNew.png";

export function menu() {
  let main = document.querySelector("main");
  let menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  main.appendChild(menuContainer);
  let cake = document.createElement("div");
  cake.className = "cake";
  menuContainer.appendChild(cake);
  let cakeImage = document.createElement("img");
  cakeImage.src = cakeItemNew;
  cake.appendChild(cakeImage);
}
