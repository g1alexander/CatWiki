export function SearchCard(num, props) {
  const $content = document.querySelector(".main");

  $content.innerHTML += /*html*/ `
      <article class="search--article">
        <img src="${
          props.image
            ? props.image.url
              ? props.image.url
              : "https://www.pinclipart.com/picdir/middle/522-5228692_black-cat-clipart-chococat-dibujos-de-gatos-tiernos.png"
            : "https://www.pinclipart.com/picdir/middle/522-5228692_black-cat-clipart-chococat-dibujos-de-gatos-tiernos.png"
        }" width="200" height="200" alt="${props.name}">
        <div>
          <a href="#${props.name}"><h3>${num++}. ${props.name}</h3></a>
          <p>${props.description}</p>
        </div>
      </article>
  `;

  return $content;
}
