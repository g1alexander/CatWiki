export function Content() {
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
      <figure class="content-card">
        <img src="https://placeimg.com/200/200/animals" alt="tech" />
        <figcaption><a href="#">Bengal</a></figcaption>
      </figure>
      <figure class="content-card">
        <img src="https://placeimg.com/200/200/animals" alt="tech" />
        <figcaption><a href="#">Savannah</a></figcaption>
      </figure>
      <figure class="content-card">
        <img src="https://placeimg.com/200/200/animals" alt="tech" />
        <figcaption><a href="#">Norwegian Forest Cat</a></figcaption>
      </figure>
      <figure class="content-card">
        <img src="https://placeimg.com/200/200/animals" alt="tech" />
        <figcaption><a href="#">Selkirk Rex</a></figcaption>
      </figure>
    </div>
  `;
  return $section;
}
