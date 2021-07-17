import { Hero } from "../components/Hero";
import { Content } from "../components/Content";
import { Info } from "../components/Info";
import { ajax } from "../helpers/ajax";
import api from "../helpers/api";

export async function Home() {
  const $home = document.querySelector(".main");

  $home.appendChild(Hero());
  await ajax({
    url: `${api.URL}${api.SEARCH_TOP}0`,
    success: (res: any) => $home.appendChild(Content(res)),
  });

  $home.appendChild(Info());

  return $home;
}
