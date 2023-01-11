import { atom } from "recoil";
import { ICharacter } from "./types";

export const searchCharsData = atom<ICharacter[]>({
  key: "charsData",
  default: [],
});
