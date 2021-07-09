import { Header } from "./layouts/Header";
import { Main } from "./layouts/Main";
import { Footer } from "./layouts/Footer";
import { Router } from "./router";

export function App() {
  const $app = document.getElementById("app");

  $app.innerHTML = null;

  $app.classList.add("wrapper");
  $app.appendChild(Header());
  $app.appendChild(Main());
  $app.appendChild(Footer());

  Router();
}
