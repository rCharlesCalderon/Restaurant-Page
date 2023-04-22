export function menu() {
  let content = document.querySelector("main");
  let foodContainer = document.createElement("div");
  foodContainer.className = "food-container";
  content.appendChild(foodContainer);

  for (let i = 0; i <= 8; i++) {
    const cake = document.createElement("div");
    cake.className = "cake";
    foodContainer.appendChild(cake);
    //  const cake = document.createElement("div");
    cake.className = "cake";
    foodContainer.appendChild(cake);
  }

  //
}
