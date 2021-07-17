import HeroImagelg from "../assets/images/HeroImagelg.png";
import logo from "../assets/images/CatwikiLogo-white.svg";
import { validation } from "../helpers/validation";

const d = document;
d.addEventListener("keyup", (e) => {
  const value: string = validation(e) || "";

  console.log(value);
});
d.addEventListener("search", (e) => validation(e));

export function Hero() {
  let $section = document.createElement("section");
  $section.classList.add("hero");
  $section.style.backgroundImage = `url(${HeroImagelg})`;
  $section.innerHTML = /*html*/ `
    <div class="hero--section">
      <img src="${logo}" width="340" height="100" alt="logo">
      <p>Get to know more about your cat breed</p>
      <div class="hero--section--input">
        <input type="search" placeholder="Enter your breed" autocomplete="off" id="search">
        <i class="fas fa-search"></i>
      </div>
      <div class="hero--section--search hidden">
        <dl>
          <dt><a href="#search">search</a></dt>
          <dt><a href="#cat">cat</a></dt>
          <dt><a href="#cat">cat</a></dt>
          <dt><a href="#cat">cat</a></dt>
          <dt><a href="#cat">cat</a></dt>
          <dt><a href="#cat">cat</a></dt>
          <dt><a href="#cat">cat</a></dt>
          <dt><a href="#cat">cat</a></dt>
          <dt><a href="#cat">cat</a></dt>
          <dt><a href="#cat">cat</a></dt>
          <dt><a href="#cat">cat</a></dt>
          <dt><a href="#cat">cat</a></dt>
          <dt><a href="#cat">cat</a></dt>
          <dt><a href="#cat">cat</a></dt>
          <dt><a href="#cat">cat</a></dt>
          <dt><a href="#cat">cat</a></dt>
          <dt><a href="#cat">cat</a></dt>
          <dt><a href="#cat">cat</a></dt>
          <dt><a href="#cat">cat</a></dt>
          <dt><a href="#cat">cat</a></dt>
        </dl>
      </div>
    </div>
  `;
  return $section;
}
