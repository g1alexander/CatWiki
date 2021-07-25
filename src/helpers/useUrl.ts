export function useUrl(url: string) {
  url = url.toLowerCase();
  return url.replace(" ", "-");
}
