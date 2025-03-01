import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

axios.defaults.headers.common["Authorization"] =
  "Client-ID LLF9eBuL8OoAqG53g86IRKv9AyaQ4F2QF4EFYONvyvY";

export const searchPhotos = async (query, page) => {
  const { data } = await axios("/search/photos", {
    params: {
      query,
      page,
      per_page: 24,
    },
  });
  return data;
};