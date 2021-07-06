import { AppState } from "../store/index";

export function Home() {
  const $content = document.querySelector(".main");

  $content.innerHTML = /*html*/ `
    <h1>Page Home</h1>
    <ul id="todos"></ul>
  `;

  const app = new AppState({
    el: "#todos",
    data: {
      todos: [],
    },
    template: function (props: any) {
      if (props.todos.length < 1) {
        return /*html*/ `<p>No hay listas por completar</p>`;
      }
      let todos = props.todos
        .map((item: string) => /*html*/ `<li>${item}</li>`)
        .join("");
      return todos;
    },
  });

  app.setState({
    todos: [],
  });

  return $content;
}
