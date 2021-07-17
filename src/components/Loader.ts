import loader from "../assets/images/loader.svg";

export function Loader() {
  const $div = document.createElement("div");
  $div.className = "loader";

  $div.innerHTML = `
    <img src="${loader}" alt="loader">
  `;

  return $div;
}
