import { ajax } from "../helpers/ajax";
import api from "../helpers/api";

export async function scroll(page, card, num) {
  const d = document;

  window.addEventListener("scroll", async (e) => {
    const { scrollTop, clientHeight, scrollHeight } = d.documentElement;
    const loader = document.querySelector(".loader") as HTMLImageElement;
    loader.style.display = "block";
    if (
      scrollTop + clientHeight >= scrollHeight &&
      page < 7 &&
      location.hash.includes("#search")
    ) {
      await ajax({
        url: `${api.URL}${api.SEARCH_TOP}${page++}&limit=10`,
        success: (response) => {
          let html = "";
          response.forEach((res) => (html += card(num++, res)));
          d.getElementById(".main").innerHTML += html;
        },
      });
    }
    loader.style.display = "none";
  });
}
