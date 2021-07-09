import HeroImagelg from "../assets/images/HeroImagelg.png";
import logo from "../assets/images/CatwikiLogo-white.svg";

export function Hero() {
  let $section = document.createElement("section");
  $section.classList.add("hero");
  $section.style.backgroundImage = `url(${HeroImagelg})`;
  $section.innerHTML = /*html*/ `
    <div class="hero--section">
      <img src="${logo}" width="340" height="100" alt="logo">
      <p>Get to know more about your cat breed</p>
      <div class="hero--section--input">
        <input type="search" placeholder="Enter your breed" id="search">
        <i class="fas fa-search"></i>
      </div>
    </div>
  `;
  return $section;
}
