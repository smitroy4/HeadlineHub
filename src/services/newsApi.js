const API_KEY =
  import.meta.env.VITE_NEWS_API_KEY;

const BASE_URL =
  "https://newsapi.org/v2/everything?q=";

export async function fetchNews(query) {

  const response = await fetch(
    `${BASE_URL}${query}&sortBy=publishedAt&language=en&pageSize=30&apiKey=${API_KEY}`
  );

  const data = await response.json();

  return data.articles || [];
}