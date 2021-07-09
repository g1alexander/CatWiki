import logo from "../assets/images/CatwikiLogo-white.svg";

export function Footer() {
  const $footer = document.createElement("footer");
  $footer.classList.add("footer");

  $footer.innerHTML = /*html*/ `
    <img src="${logo}" alt="">
    <p>© created by <a href="https://github.com/g1alexander" target="_blank" rel="noopener noreferrer">@g1alexander</a> - devChallenge.io 2021</p>
  `;
  return $footer;
}
