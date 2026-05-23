import {
  useEffect,
  useState
} from "react";

import {
  useNavigate,
  useSearchParams
} from "react-router-dom";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import NewsCard from "../components/NewsCard";

import { fetchNews }
from "../services/newsApi";

export default function Home() {

  const navigate =
    useNavigate();

  const [searchParams] =
    useSearchParams();

  const [articles, setArticles] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [darkMode, setDarkMode] =
    useState(false);

  async function loadNews(query) {

    const news =
      await fetchNews(query);

    const filtered =
      news.filter(
        (article) =>
          article.urlToImage &&
          article.description
      );

    setArticles(filtered);
  }

  useEffect(() => {

    const category =
      searchParams.get("category");

    if (category) {

      loadNews(category);

    } else {

      loadNews("latest india news");
    }

  }, [searchParams]);

  function toggleTheme() {

    document.body.classList.toggle(
      "dark"
    );

    setDarkMode(!darkMode);
  }

  function handleSearch() {

    if (!search) return;

    navigate(
      `/?category=${encodeURIComponent(search)}`
    );
  }

  function goToCategory(category) {

    navigate(
      `/?category=${encodeURIComponent(category)}`
    );
  }

  return (

    <>

      <Navbar
        setSearch={setSearch}
        onSearch={handleSearch}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />

      <section className="hero-section">

        <div className="container hero-content">

          <div className="hero-left">

            <span className="hero-tag">

              LIVE NEWS NETWORK

            </span>

            <h1>

              Stay Updated With Breaking News From Around The World

            </h1>

            <p>

              Get real-time updates on politics,
              finance, AI, startups and global affairs.

            </p>

            <div className="hero-buttons">

              <button
                onClick={() =>
                  goToCategory(
                    "breaking news india"
                  )
                }
              >
                Breaking News
              </button>

              <button
                onClick={() =>
                  goToCategory(
                    "technology news"
                  )
                }
              >
                Explore Tech
              </button>

            </div>

          </div>

          <div className="hero-right">

            <div className="live-card">

              LIVE UPDATES STREAMING

            </div>

          </div>

        </div>

      </section>

      <section className="filter-section">

        <div className="container filter-container">

          <button
            onClick={() =>
              goToCategory("trending news")
            }
          >
            Trending
          </button>

          <button
            onClick={() =>
              goToCategory("india news")
            }
          >
            India
          </button>

          <button
            onClick={() =>
              goToCategory("global news")
            }
          >
            Global
          </button>

          <button
            onClick={() =>
              goToCategory("ai news")
            }
          >
            AI
          </button>

          <button
            onClick={() =>
              goToCategory("startup news")
            }
          >
            Startups
          </button>

        </div>

      </section>

      <main className="container">

        <div className="section-title">

          <h2>
            Top Headlines
          </h2>

          <p>
            Fresh stories updated in real-time
          </p>

        </div>

        <div className="cards-container">

          {articles.map(
            (article, index) => (

            <NewsCard
              key={index}
              article={article}
            />

          ))}

        </div>

      </main>

      <Footer />

    </>
  );
}