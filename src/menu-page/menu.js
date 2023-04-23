export function menu() {
  let container = document.querySelector(".home-container");
  container.style.height = "auto";

  for (let i = 0; i <= 20; i++) {
    let test = document.createElement("div");
    test.className = "test";
    container.appendChild(test);
  }
}
