export function validation(e: any) {
  if (e !== null && e.target !== null) {
    const element = e.target as Element;
    const isMatch = element.matches("#search");
    if (!isMatch) return false;
  }
  const target = e.target as HTMLInputElement,
    $div = document.querySelector(".hero--section--search") as HTMLDivElement;
  target.value === ""
    ? $div.classList.add("hidden")
    : $div.classList.remove("hidden");
  return target.value;
}
