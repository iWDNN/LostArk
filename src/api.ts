import axios from "axios";

const BASE_URL = "https://developer-lostark.game.onstove.com";
const AUTH_TOKEN = process.env.REACT_APP_LOST_ARK_API_KEY;
export const SERVER_NAME_LIST = [
  "루페온",
  "아브렐슈드",
  "카제로스",
  "아만",
  "니나브",
  "카단",
  "카만",
  "실리안",
];
export const ARMORIES_TYPES: string[] = [
  "profiles",
  // "equipment",
  // "avatars",
  // "combat-skills",
  // "engravings",
  // "cards",
  // "gems",
  // "colosseums",
  // "collectibles",
];

const lostArk = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `bearer ${AUTH_TOKEN}`,
  },
});

export async function fetchEvents() {
  return await lostArk.get("news/events").then((res) => res.data);
}
export async function fetchCharacters(id: string) {
  return await lostArk.get(`characters/${id}/siblings`).then((res) => res.data);
}
export async function fetchCharArmoies(id: string, type: string) {
  return await lostArk
    .get(`armories/characters/${id}/${type}`)
    .then((res) => res.data);
}
