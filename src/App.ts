import { Header } from "./layouts/Header";
import { Main } from "./layouts/Main";
import { Loader } from "./components/Loader";
import { Footer } from "./layouts/Footer";
import { Router } from "./router";

export function App() {
  const $app = document.getElementById("app");

  $app.innerHTML = null;

  $app.classList.add("wrapper");
  $app.appendChild(Header());
  $app.appendChild(Loader());
  $app.appendChild(Main());
  $app.appendChild(Footer());

  Router();
}
