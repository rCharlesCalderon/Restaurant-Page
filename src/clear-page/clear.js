export function clearPage() {
  let contentMain = document.querySelector("main");
  while (contentMain.lastElementChild) {
    contentMain.removeChild(contentMain.lastElementChild);
  }
}
