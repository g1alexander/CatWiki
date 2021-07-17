import { Cat } from "../pages/Cat";
import { Home } from "../pages/Home";
import { Search } from "../pages/Search";

export async function Router() {
  let { hash }: any = location;
  const getKeyValue =
    <T extends object, U extends keyof T>(obj: T) =>
    (key: U) =>
      obj[key];

  const routes: { [key: string]: () => void } = {
    "": () => Home(),
    "#": () => Home(),
    "#search": () => Search(),
  };

  const DinamicView = () => Cat();

  const valueHash = getKeyValue(routes)(hash);

  valueHash
    ? await valueHash()
    : hash.includes("#search")
    ? await routes["#search"]()
    : await DinamicView();

  const loader = document.querySelector(".loader") as HTMLImageElement;
  loader.style.display = "none";
}
