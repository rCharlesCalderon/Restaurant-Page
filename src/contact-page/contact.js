import minecraftMap from "../images/minecraft-map.gif";
export function contact() {
  let main = document.querySelector("main");
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");
  main.appendChild(contactContainer);
  const contactUs = document.createElement("h1");
  contactUs.textContent = "Contact Us!";
  contactUs.className = "contact-us";
  contactContainer.appendChild(contactUs);
  let coords = document.createElement("span");
  coords.className = "coords";
  coords.textContent = "X:117, Y:78, Z:340";
  contactContainer.appendChild(coords);
  let map = document.createElement("img");
  map.src = minecraftMap;
  map.className = "minecraft-map";
  contactContainer.appendChild(map);
}
