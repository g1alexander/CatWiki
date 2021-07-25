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
  $app.appendChild(Main());
  $app.appendChild(Loader());
  $app.appendChild(Footer());

  document.addEventListener("click", (e) => {
    if (e !== null && e.target !== null) {
      const element = e.target as Element;
      const isMatch = element.matches("#event");
      if (!isMatch) return false;
      localStorage.setItem("id-cat", element.getAttribute("data-id"));
    }
  });

  Router();
}
