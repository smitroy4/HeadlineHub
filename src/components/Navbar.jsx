import lightLogo from "../assets/logo-v2.png";

import darkLogo from "../assets/logo-v2-dark.png";

import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  useEffect,
  useState
} from "react";

export default function Navbar({
  setSearch,
  onSearch
}) {

  const navigate =
    useNavigate();

  const [darkMode, setDarkMode] =
    useState(false);

  useEffect(() => {

    const savedTheme =
      localStorage.getItem("theme");

    if (savedTheme === "dark") {

      document.body.classList.add(
        "dark"
      );

      setDarkMode(true);
    }

  }, []);

  function toggleTheme() {

    const isDark =
      document.body.classList.toggle(
        "dark"
      );

    setDarkMode(isDark);

    localStorage.setItem(
      "theme",
      isDark ? "dark" : "light"
    );
  }

  function goToCategory(category) {

    navigate(
      `/?category=${encodeURIComponent(category)}`
    );
  }

  return (

    <>

      <header className="top-header">

        <div className="container top-header-content">

          <div className="breaking-news">

            <span>LIVE</span>

            India • Technology • AI • Finance • Sports • Global Affairs

          </div>

          <div className="top-actions">

            <button
              id="theme-toggle"
              onClick={toggleTheme}
            >

              {darkMode ? "☀️" : "🌙"}

            </button>

          </div>

        </div>

      </header>

      <nav className="navbar">

        <div className="container navbar-container">

          <div className="nav-left">

            <Link
              to="/"
              className="company-logo"
            >

              <img
                src={
                  darkMode
                    ? darkLogo
                    : lightLogo
                }
                alt="HeadlineHub"
              />

            </Link>

          </div>

          <div className="nav-center">

            <ul className="nav-links">

              <li
                onClick={() =>
                  goToCategory("breaking news")
                }
              >
                Breaking
              </li>

              {/* TECHNOLOGY */}

              <li className="dropdown">

                <span>
                  Technology
                </span>

                <div className="dropdown-menu">

                  <p
                    onClick={() =>
                      goToCategory("artificial intelligence")
                    }
                  >
                    Artificial Intelligence
                  </p>

                  <p
                    onClick={() =>
                      goToCategory("software development")
                    }
                  >
                    Software Development
                  </p>

                  <p
                    onClick={() =>
                      goToCategory("cybersecurity")
                    }
                  >
                    Cybersecurity
                  </p>

                  <p
                    onClick={() =>
                      goToCategory("healthcare technology")
                    }
                  >
                    Healthcare Tech
                  </p>

                  <p
                    onClick={() =>
                      goToCategory("cloud computing")
                    }
                  >
                    Cloud Computing
                  </p>

                  <p
                    onClick={() =>
                      goToCategory("mobile technology")
                    }
                  >
                    Mobile Technology
                  </p>

                </div>

              </li>

              {/* BUSINESS */}

              <li className="dropdown">

                <span>
                  Business
                </span>

                <div className="dropdown-menu">

                  <p
                    onClick={() =>
                      goToCategory("finance news")
                    }
                  >
                    Finance
                  </p>

                  <p
                    onClick={() =>
                      goToCategory("stock market")
                    }
                  >
                    Stock Market
                  </p>

                  <p
                    onClick={() =>
                      goToCategory("startup news")
                    }
                  >
                    Startups
                  </p>

                  <p
                    onClick={() =>
                      goToCategory("cryptocurrency")
                    }
                  >
                    Cryptocurrency
                  </p>

                  <p
                    onClick={() =>
                      goToCategory("economy")
                    }
                  >
                    Economy
                  </p>

                  <p
                    onClick={() =>
                      goToCategory("real estate")
                    }
                  >
                    Real Estate
                  </p>

                </div>

              </li>

              {/* SPORTS */}

              <li className="dropdown">

                <span>
                  Sports
                </span>

                <div className="dropdown-menu">

                  <p
                    onClick={() =>
                      goToCategory("football")
                    }
                  >
                    Football
                  </p>

                  <p
                    onClick={() =>
                      goToCategory("cricket")
                    }
                  >
                    Cricket
                  </p>

                  <p
                    onClick={() =>
                      goToCategory("IPL")
                    }
                  >
                    IPL
                  </p>

                  <p
                    onClick={() =>
                      goToCategory("formula 1")
                    }
                  >
                    Formula 1
                  </p>

                  <p
                    onClick={() =>
                      goToCategory("tennis")
                    }
                  >
                    Tennis
                  </p>

                  <p
                    onClick={() =>
                      goToCategory("basketball")
                    }
                  >
                    Basketball
                  </p>

                </div>

              </li>

              {/* WORLD */}

              <li className="dropdown">

                <span>
                  World
                </span>

                <div className="dropdown-menu">

                  <p
                    onClick={() =>
                      goToCategory("global politics")
                    }
                  >
                    Politics
                  </p>

                  <p
                    onClick={() =>
                      goToCategory("global health")
                    }
                  >
                    Health
                  </p>

                  <p
                    onClick={() =>
                      goToCategory("climate change")
                    }
                  >
                    Climate
                  </p>

                  <p
                    onClick={() =>
                      goToCategory("war news")
                    }
                  >
                    Conflicts
                  </p>

                  <p
                    onClick={() =>
                      goToCategory("international relations")
                    }
                  >
                    International Relations
                  </p>

                </div>

              </li>

              <li>

                <Link to="/about">
                  About
                </Link>

              </li>

              <li>

                <Link to="/contact">
                  Contact
                </Link>

              </li>

            </ul>

          </div>

          <div className="nav-right">

            <div className="search-bar">

              <input
                type="text"
                placeholder="Search news..."
                onChange={(e) =>
                  setSearch?.(
                    e.target.value
                  )
                }
              />

              <button
                onClick={onSearch}
              >
                🔍
              </button>

            </div>

          </div>

        </div>

      </nav>

    </>
  );
}