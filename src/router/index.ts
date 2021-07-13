import { Dinamic } from "../pages/Dinamic";
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

  const DinamicView = () => Dinamic();

  const valueHash = getKeyValue(routes)(hash);

  valueHash
    ? valueHash()
    : hash.includes("#search")
    ? routes["#search"]()
    : DinamicView();

  // document.querySelector(".loader").style.display = "none";
}
