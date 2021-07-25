import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";

export function Info() {
  let $section = document.createElement("section");
  $section.classList.add("info");
  $section.innerHTML = /*html*/ `
    <div class="info-content">
      <hr>
      <h2>Why should you have a cat?</h2>
      <p>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
      <a href="https://icatcare.org/advice/thinking-of-getting-a-cat/" rel="noopener"
      target="_blank">READ MORE <i class="fas fa-arrow-right"></i></a>
    </div>
    <div class="info-images">
      <img src="${image2}" width="273" height="167" alt="image2">
      <img src="${image1}" width="195" height="293" alt="image1">
      <img src="${image3}" width="238" height="385" alt="image3">
    </div>
  `;
  return $section;
}
