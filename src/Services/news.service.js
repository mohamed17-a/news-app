import axios from "axios";
export async function getNews() {
  let url =
    "https://newsapi.org/v2/top-headlines?q=techcrunch&apiKey=06f38e0ffec6484399ff33fa8202a50a";
  return await axios.get(url);
}
export async function getSports() {
  let url = `https://newsapi.org/v2/everything?q=realmadrid&from=2024-07-10&sortBy=publishedAt&apiKey=06f38e0ffec6484399ff33fa8202a50a`;
  return await axios.get(url);
}
