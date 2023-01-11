import axios from "axios";

const BASE_URL = "https://developer-lostark.game.onstove.com";
const AUTH_TOKEN = process.env.REACT_APP_LOST_ARK_API_KEY;

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
