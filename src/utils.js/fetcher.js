import axios from "axios";
const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com";

const options = {
  method: "GET",
  url: BASE_URL,
  params: { id: "dQw4w9WgXcQ" },
  headers: {
    "X-RapidAPI-Key": "401a4ec7bamsh3c6d93ee04c8e33p11b172jsnc104a6b2577b",
    "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
  },
};

export const fetcher = async (url) => {
  console.log(url);
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
