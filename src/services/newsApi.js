const BASE_URL =
  "https://headlinehub-backend.onrender.com/api/news?query=";

export async function fetchNews(query) {

  try {

    const response =
      await fetch(
        `${BASE_URL}${encodeURIComponent(query)}`
      );

    const data =
      await response.json();

    return data.articles || [];

  } catch (error) {

    console.error(error);

    return [];
  }
}