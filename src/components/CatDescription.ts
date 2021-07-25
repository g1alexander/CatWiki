import { useBreed } from "../helpers/useBreed";

export function CatDescription(props) {
  let { url, breeds } = props;
  let {
    adaptability,
    affection_level,
    child_friendly,
    grooming,
    intelligence,
    health_issues,
    social_needs,
    stranger_friendly,
  } = breeds[0];

  let breed = [
    { name: "Adaptability", por: adaptability },
    { name: "Affection level", por: affection_level },
    { name: "Child friendly", por: child_friendly },
    { name: "Grooming", por: grooming },
    { name: "Intelligence", por: intelligence },
    { name: "Health issues", por: health_issues },
    { name: "Social needs", por: social_needs },
    { name: "Stranger friendly", por: stranger_friendly },
  ];
  let $html = "";

  for (const { name, por } of breed) {
    $html += /*html*/ `
      <li>
        <span class="span">${name}:</span> 
        ${useBreed(por)}
      </li>
    `;
  }

  const $article = document.createElement("article");
  $article.classList.add("cat--description");

  $article.innerHTML = /*html*/ `
    <img src="${url}" width="300" height="300" alt="">
    <div>
      <h3>${breeds[0].name}</h3>
      <p>${breeds[0].description}</p>
      <ul id="ul">
        <li><span>Temperament:</span> ${breeds[0].temperament}</li>
        <li><span>Origin:</span> ${breeds[0].origin}</li>
        <li><span>Life Span:</span> ${breeds[0].life_span} years</li>
        ${$html}
      </ul>
    </div>
  `;

  return $article;
}
