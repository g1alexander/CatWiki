export function Dinamic() {
  const $content = document.querySelector(".main");

  $content.innerHTML = /*html*/ `
    <h1>Page Dinamic</h1>
  `;

  return $content;
}
