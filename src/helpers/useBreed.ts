export function useBreed(por: number) {
  if (por === 5) {
    return /*html*/ `<hr class="active"><hr class="active"><hr class="active"><hr class="active"><hr class="active">`;
  } else if (por === 4) {
    return /*html*/ `<hr class="active"><hr class="active"><hr class="active"><hr class="active"><hr>`;
  } else if (por === 3) {
    return /*html*/ `<hr class="active"><hr class="active"><hr class="active"><hr><hr>`;
  } else if (por === 2) {
    return /*html*/ `<hr class="active"><hr class="active"><hr><hr><hr>`;
  } else if (por === 1) {
    return /*html*/ `<hr class="active"><hr><hr><hr><hr>`;
  } else {
    return /*html*/ `<hr><hr><hr><hr><hr>`;
  }
}
