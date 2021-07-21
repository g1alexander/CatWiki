export async function ajax(props: object) {
  let { url, success }: any = props;

  await fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "abc2111e-d9ac-479a-b989-e712151a79f1",
    },
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => success(json))
    .catch((err) => {
      console.error(err);
      let message =
        err.statusText || "Ocurrio un error en la peticion a la API";
      document.getElementById(".main").innerHTML = /*html*/ `
        <div class="error">
          <p>Error ${err.status}: ${message}</p>
        </div>
      `;
    });
}
