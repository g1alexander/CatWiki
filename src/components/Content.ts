import { useUrl } from "../helpers/useUrl";

export function Content(props: any[]) {
  let html = "";
  props.forEach(({ image, id, name }) => {
    html += /*html*/ `
      <figure class="content-card">
        <img src="${image.url}" width="220" height="220" alt="${name}" />
        <figcaption><a href="#${useUrl(
          name
        )}" id="event" data-id="${id}">${name}</a></figcaption>
      </figure>
    `;
  });

  let $section = document.createElement("section");
  $section.classList.add("content");
  $section.innerHTML = /*html*/ `
    <div class="content-most">
      <span>Most Searched Breeds</span><hr>
    </div>
    <div class="content-breeds">
      <h2>66+ Breeds For you to discover</h2>
      <a href="#search-top">SEE MORE <i class="fas fa-arrow-right"></i></a>
    </div>
    <div class="grid content-figures">
      ${html} 
    </div>
  `;

  return $section;
}
