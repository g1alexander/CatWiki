import { SearchLogic } from "../components/SearchLogic";

export async function Search() {
  let $content = document.querySelector(".main"),
    $section = document.createElement("section");

  $section.classList.add("search");

  $section.innerHTML = `<h1>Top 10 most searched breeds</h1>`;
  $content.appendChild($section);

  await SearchLogic();

  return $content;
}
