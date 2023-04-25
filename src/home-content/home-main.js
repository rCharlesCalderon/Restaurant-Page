import { home } from "../home-page/home";

//THIS IS THE CONTENT THAT LOADS THE MAIN CONTENT LIKE THE STEVE IMG
export function loadMain() {
  let main = document.querySelector("main");
  let homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");
  main.appendChild(homeContainer);
  const span1 = document.createElement("span");
  span1.className = "home-text1";
  span1.textContent =
    "Food refers to any consumable items that, when eaten, restore hunger points and hunger saturation points";
  homeContainer.appendChild(span1);
  const steveImg = document.createElement("div");
  steveImg.className = "steve-img";
  homeContainer.appendChild(steveImg);
  const span2 = document.createElement("div");
  span2.textContent = "ALWAYS HUNGRY";
  span2.className = "home-text2";
  homeContainer.appendChild(span2);
}
