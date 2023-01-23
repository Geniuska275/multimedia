import axios from "axios";

const BASE_URL = "https://ytube-videos.p.rapidapi.com";

const options = {
  method: "GET",
  url: BASE_URL,
  params: { q: "test", max: "10", lang: "EN" },

  headers: {
    "X-RapidAPI-Key": "401a4ec7bamsh3c6d93ee04c8e33p11b172jsnc104a6b2577b",
    "X-RapidAPI-Host": "ytube-videos.p.rapidapi.com",
  },
};

export const moviesAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`);
  console.log(data);
  return data;
};
