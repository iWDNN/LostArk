import { atom, selector } from "recoil";
import { SERVER_NAME_LIST } from "./api";
import { ICharInfo } from "./types";

export const search_results = atom<ICharInfo[]>({
  key: "search_result",
  default: [],
});

export const search_results_selector = selector({
  key: "search_results_selector",
  get: ({ get }) => {
    const fetchData = get(search_results);
    const results = SERVER_NAME_LIST.map((SERVER) =>
      fetchData
        .filter((char) => SERVER === char.ServerName)
        .sort(
          (a, b) =>
            parseFloat(b.ItemMaxLevel.replace(",", "")) -
            parseFloat(a.ItemMaxLevel.replace(",", ""))
        )
    );

    return results;
  },
});
