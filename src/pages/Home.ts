import { Hero } from "../components/Hero";
import { Content } from "../components/Content";
import { Info } from "../components/Info";

export function Home() {
  const $home = document.querySelector(".main");

  $home.appendChild(Hero());
  $home.appendChild(Content());
  $home.appendChild(Info());

  return $home;
}
