import logo from "../assets/images/CatwikiLogo.svg";

export function Header() {
  const $header = document.createElement("header");
  $header.classList.add("header");
  $header.innerHTML = /*html*/ `
    <a href="#"><img src="${logo}" alt="logo"></a>
  `;

  return $header;
}
