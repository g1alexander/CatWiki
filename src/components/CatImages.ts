export function CatImages(props) {
  const $article = document.createElement("article");
  $article.classList.add("cat--images");

  let $html = "";

  props.forEach((el) => {
    $html += /*html*/ `<img src="${el.url}" width="200" height="200"/>`;
  });

  $article.innerHTML = /*html*/ `
    <h3>Other photos</h3>
    <div class="grid cat--grid">
      ${$html}
    </div>
  `;

  return $article;
}
