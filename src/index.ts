import "./assets/css/styles.css";
import favicon from "./assets/images/favicon.png";

import { App } from "./App";

document.addEventListener("DOMContentLoaded", (e) => {
  document.querySelector(
    ".head"
  ).innerHTML += /*html*/ `<link rel="shortcut icon" href="${favicon}" type="image/x-icon" />`;
  App();
});
window.addEventListener("hashchange", App);
