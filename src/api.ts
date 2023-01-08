import axios from "axios";

const BASE_URL = "https://developer-lostark.game.onstove.com/";
const api_key = process.env.LOST_ARK_APK_KEY;
const client = axios.create({
  baseURL: BASE_URL,
});

export function newsFetch() {}
