export function clearPage() {
  let contentMain = document.querySelector("#home-cont");
  while (contentMain.lastElementChild) {
    contentMain.removeChild(contentMain.lastElementChild);
  }
}
