import cakeItemNew from "../images/CakeItemNew.png";
import beetRootSoup from "../images/Beetroot_Soup.png";
import goldenApple from "../images/Golden_Apple.png";
import cookedPork from "../images/Cooked_Porkchop.png";
import cookedSteak from "../images/Cooked_steak.png";
import susStew from "../images/Suspicious_Stew.png";
import pumpkinPie from "../images/Pumpkin_Pie.png";
import rotflesh from "../images/Rotten_Flesh.png";
export function menu() {
  let main = document.querySelector("main");
  let menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  main.appendChild(menuContainer);
  cake(menuContainer);
  beetSoup(menuContainer);
  goldApple(menuContainer);
  porkMeat(menuContainer);
  wagyuiSteak(menuContainer);
  posionStew(menuContainer);
  pumpPie(menuContainer);
  rottenFlesh(menuContainer);
}

function cake(menuContainer) {
  let cake = document.createElement("div");
  cake.className = "cake";
  menuContainer.appendChild(cake);
  let cakeImage = document.createElement("img");
  cakeImage.className = "cakeImg";
  cakeImage.src = cakeItemNew;
  cake.appendChild(cakeImage);
  const cakeTitle = document.createElement("span");
  cakeTitle.textContent = "Cake";
  cake.appendChild(cakeTitle);
  cakeTitle.className = "cake-title";
  const cakeIng = document.createElement("span");
  cakeIng.textContent =
    "Three buckets of milk, two sugar, three wheat, one egg. ";
  cakeIng.className = "cake-ing";
  cake.appendChild(cakeIng);
}

function beetSoup(menuContainer) {
  let beet = document.createElement("div");
  beet.className = "beet";
  menuContainer.appendChild(beet);
  const beetImage = document.createElement("img");
  beetImage.className = "beetImg";
  beetImage.src = beetRootSoup;
  beet.appendChild(beetImage);
  const beetTitle = document.createElement("span");
  beetTitle.textContent = "Beetroot Soup";
  beet.appendChild(beetTitle);
  beetTitle.className = "beet-title";
  const beetIng = document.createElement("span");
  beetIng.textContent = "Six beetroots and one bowl served in a oak wood bowl.";
  beetIng.className = "beet-ing";
  beet.appendChild(beetIng);
}

function goldApple(menuContainer) {
  let apple = document.createElement("div");
  apple.className = "apple";
  menuContainer.appendChild(apple);
  const appleImage = document.createElement("img");
  appleImage.className = "appleImg";
  appleImage.src = goldenApple;
  apple.appendChild(appleImage);
  const appleTitle = document.createElement("span");
  appleTitle.textContent = "Golden Apple";
  apple.appendChild(appleTitle);
  appleTitle.className = "apple-title";
  const appleIng = document.createElement("span");
  appleIng.textContent = "Eight Gold Ingots and one Apple coated in magic.";
  appleIng.className = "apple-ing";
  apple.appendChild(appleIng);
}

function porkMeat(menuContainer) {
  let pork = document.createElement("div");
  pork.className = "pork";
  menuContainer.appendChild(pork);
  const porkImage = document.createElement("img");
  porkImage.className = "porkImg";
  porkImage.src = cookedPork;
  pork.appendChild(porkImage);
  const porkTitle = document.createElement("span");
  porkTitle.textContent = "Cooked PorkChop";
  pork.appendChild(porkTitle);
  porkTitle.className = "pork-title";
  const porkIng = document.createElement("span");
  porkIng.textContent = "Freshly roasted pig meat, no growth hormones.";
  porkIng.className = "pork-ing";
  pork.appendChild(porkIng);
}

function wagyuiSteak(menuContainer) {
  let wagyui = document.createElement("div");
  wagyui.className = "wagyui";
  menuContainer.appendChild(wagyui);
  const wagyuiImage = document.createElement("img");
  wagyuiImage.className = "wagyuiImg";
  wagyuiImage.src = cookedSteak;
  wagyui.appendChild(wagyuiImage);
  const wagyuiTitle = document.createElement("span");
  wagyuiTitle.textContent = "Wagyui";
  wagyui.appendChild(wagyuiTitle);
  wagyuiTitle.className = "wagyui-title";
  const wagyuiIng = document.createElement("span");
  wagyuiIng.textContent =
    "Cows raised in the Mushroom Fields, served with red mushrooms";
  wagyuiIng.className = "wagyui-ing";
  wagyui.appendChild(wagyuiIng);
}

function posionStew(menuContainer) {
  let stew = document.createElement("div");
  stew.className = "stew";
  menuContainer.appendChild(stew);
  const stewImage = document.createElement("img");
  stewImage.className = "stewImg";
  stewImage.src = susStew;
  stew.appendChild(stewImage);
  const stewTitle = document.createElement("span");
  stewTitle.textContent = "Suspicious Stew";
  stew.appendChild(stewTitle);
  stewTitle.className = "stew-title";
  const stewIng = document.createElement("span");
  stewIng.textContent =
    "Found in shipwreck chests, were not really sure whats in it,moup";
  stewIng.className = "stew-ing";
  stew.appendChild(stewIng);
}

function pumpPie(menuContainer) {
  let pie = document.createElement("div");
  pie.className = "pump-pie";
  menuContainer.appendChild(pie);
  const pieImage = document.createElement("img");
  pieImage.className = "pieImg";
  pieImage.src = pumpkinPie;
  pie.appendChild(pieImage);
  const pieTitle = document.createElement("span");
  pieTitle.textContent = "Pumpkin Pie";
  pie.appendChild(pieTitle);
  pieTitle.className = "pie-title";
  const pieIng = document.createElement("span");
  pieIng.textContent =
    "One pumpkin, one sugar and one egg made by Apprentice level farmer villagers";
  pieIng.className = "pie-ing";
  pie.appendChild(pieIng);
}

function rottenFlesh(menuContainer) {
  let flesh = document.createElement("div");
  flesh.className = "flesh";
  menuContainer.appendChild(flesh);
  const fleshImage = document.createElement("img");
  fleshImage.className = "fleshImg";
  fleshImage.src = rotflesh;
  flesh.appendChild(fleshImage);
  const fleshTitle = document.createElement("span");
  fleshTitle.textContent = "Rotten Flesh";
  flesh.appendChild(fleshTitle);
  fleshTitle.className = "flesh-title";
  const fleshIng = document.createElement("span");
  fleshIng.textContent =
    "Zombie flesh, desperate times call for desperate measures";
  fleshIng.className = "flesh-ing";
  flesh.appendChild(fleshIng);
}