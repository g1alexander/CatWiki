import { Header } from "./layouts/Header";
import { Main } from "./layouts/Main";
import { Router } from "./router";

export function App() {
  const $app = document.getElementById("app");

  $app.innerHTML = null;

  $app.appendChild(Header());
  $app.appendChild(Main());

  Router();
}
