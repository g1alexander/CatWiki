import { SearchCard } from "../components/SearchCard";

export function Search() {
  const $content = document.querySelector(".main");

  $content.innerHTML = /*html*/ `
    <section class="search">
      <h1>Top 10 most searched breeds</h1>
      ${SearchCard()}
    </section>
  `;

  return $content;
}
