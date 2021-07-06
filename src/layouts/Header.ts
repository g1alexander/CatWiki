import { Menu } from "../components/Menu";
import foto from "../assets/images/CatwikiLogo.svg";

export function Header() {
  const $header = document.createElement("header");
  $header.innerHTML = /*html*/ `
    <h4>Header component</h4>
    ${Menu()}
    <img src="${foto}" alt="">
  `;

  return $header;
}
