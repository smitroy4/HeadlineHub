const API_KEY =
  import.meta.env.VITE_GNEWS_API_KEY;

const BASE_URL =
  "https://gnews.io/api/v4/search?q=";

export async function fetchNews(query) {

  try {

    const response = await fetch(
      `${BASE_URL}${encodeURIComponent(query)}&lang=en&max=25&apikey=${API_KEY}`
    );

    const data =
      await response.json();

    console.log(data);

    return data.articles || [];

  } catch (error) {

    console.error(error);

    return [];
  }
}