export function home() {
  //HOME HEADER
  let contents = document.querySelector("#contents");
  const header = document.createElement("header");
  contents.appendChild(header);
  let headerTitle = document.createElement("div");
  header.appendChild(headerTitle);
  headerTitle.classList.add("header-title");
  let h1 = document.createElement("h1");
  h1.textContent = "STEVE'S Steak O'block";
  headerTitle.appendChild(h1);
  let nav = document.createElement("nav");

  header.appendChild(nav);
  let ul = document.createElement("ul");
  nav.appendChild(ul);
  let li1 = document.createElement("li");
  li1.setAttribute("id", "home");
  li1.textContent = "Home";
  li1.classList.add("nav-text");
  let li2 = document.createElement("li");
  li2.classList.add("menu");
  li2.textContent = "Menu";
  li2.classList.add("nav-text");
  li2.setAttribute("id", "menu");
  let li3 = document.createElement("li");
  li3.classList.add("contact");
  li3.textContent = "Contact";
  li3.setAttribute("id", "contact");
  li3.classList.add("nav-text");
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  //END OF HOME HEADER
  //MAIN
  const main = document.createElement("main");
  contents.appendChild(main);

  let homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");
  homeContainer.setAttribute("id", "home-cont");
  main.appendChild(homeContainer);
  const span1 = document.createElement("span");
  span1.classList.add("home-text1");
  span1.textContent =
    "Welcome to Steve's, Steve has eaten lots of things and with that, we serve his favorites";
  homeContainer.appendChild(span1);
  const steveImg = document.createElement("div");
  steveImg.classList.add("steve-img");
  homeContainer.appendChild(steveImg);
  const span2 = document.createElement("div");
  span2.textContent = "ALWAYS HUNGRY";
  span2.classList.add("home-text2");
  homeContainer.appendChild(span2);
  //End of Main

  //Footer

  let footer = document.createElement("footer");
  contents.appendChild(footer);
  let copyRight = document.createElement("div");
  copyRight.className = "copy-right";
  copyRight.textContent = "Copyright © Mojang 2023 rCharlesCalderon";
  footer.appendChild(copyRight);
  //end of footer
}
