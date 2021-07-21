import { SearchCard } from "../components/SearchCard";
import { ajax } from "../helpers/ajax";
import { scroll } from "../helpers/scroll";
import api from "../helpers/api";

export async function SearchLogic() {
  let page = 0;
  let num = 1;
  await ajax({
    url: `${api.URL}${api.SEARCH_TOP}${page}&limit=10`,
    success: (res: any) => {
      res.forEach((res) => SearchCard(num++, res));
    },
  });

  scroll(page + 1, SearchCard, num);
}
