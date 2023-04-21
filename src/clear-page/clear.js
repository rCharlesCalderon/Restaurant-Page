export function clearPage() {
  let content = document.querySelector("#contents");
  while (content.lastElementChild) {
    content.removeChild(content.lastElementChild);
  }
}
