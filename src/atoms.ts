import { atom, selector } from "recoil";
import { ICharacter, INewsEvents } from "./types";

export const searchCharsData = atom<ICharacter[]>({
  key: "charsData",
  default: [],
});

export const hoverEventData = atom<INewsEvents | null>({
  key: "hoverData",
  default: null,
});
