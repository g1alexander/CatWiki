import HeroImagelg from "../assets/images/HeroImagelg.png";
import logo from "../assets/images/CatwikiLogo-white.svg";
import { validation } from "../helpers/validation";
import { AppState } from "../store/index";

const d = document;
let json: any = [],
  filtro: any = [];

const state = new AppState({
  el: "#dl",
  data: {
    search: [],
  },
  template: function (props) {
    let search = props.search
      .map(
        (item) =>
          /*html*/ `<dt><a href="#${item.name}" id="${item.id}">${item.name}</a></dt>`
      )
      .join("");
    return search;
  },
});

d.addEventListener("keyup", (e) => {
  const value: string = validation(e) || "";

  filtro = json.filter((el: any) => {
    const textApi = el.name.toLowerCase();
    if (textApi.includes(value.toLowerCase())) return el;
  });

  state.setState({
    search: filtro,
  });
});
d.addEventListener("search", (e) => validation(e));

export function Hero(props: any) {
  json = props;

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
        <dl id="dl"></dl>
      </div>
    </div>
  `;
  return $section;
}
