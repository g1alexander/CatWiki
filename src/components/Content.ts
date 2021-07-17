export function Content(props: any[]) {
  //FIXME: el estado reactivo esta fallando
  let html = "";
  props.forEach((el) => {
    let { image, id, name } = el;
    html += /*html*/ `
      <figure class="content-card">
        <img src="${image.url}" width="200" height="120" alt="${name}" />
        <figcaption><a href="#">${name}</a></figcaption>
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
      <a href="#">SEE MORE <i class="fas fa-arrow-right"></i></a>
    </div>
    <div class="grid content-figures">
      ${html} 
    </div>
  `;

  return $section;
}
