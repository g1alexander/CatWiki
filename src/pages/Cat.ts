import { CatDescription } from "../components/CatDescription";
import { CatImages } from "../components/CatImages";
import { ajax } from "../helpers/ajax";
import api from "../helpers/api";

export async function Cat() {
  const $content = document.querySelector(".main");

  const $section = document.createElement("section");
  $section.classList.add("cat");

  let idCat = localStorage.getItem("id-cat");

  await ajax({
    url: `${api.URL}${api.CAT}${idCat}`,
    success: (data) => {
      $section.appendChild(CatDescription(data[0]));
      $section.appendChild(CatImages(data));
    },
  });

  $content.appendChild($section);

  return $content;
}
