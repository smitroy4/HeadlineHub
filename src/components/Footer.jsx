import {
  Link,
  useNavigate
} from "react-router-dom";

export default function Footer() {

  const navigate =
    useNavigate();

  function goToCategory(category) {

    navigate(
      `/?category=${encodeURIComponent(category)}`
    );
  }

  return (

    <footer>

      <div className="container footer-container">

        <div className="footer-brand">

          <h2>
            HeadlineHub
          </h2>

          <p>
            Real-time modern journalism platform
            delivering global coverage across
            technology, business, AI and world affairs.
          </p>

        </div>

        <div className="footer-links">

          <div className="footer-column">

            <h3>
              Categories
            </h3>

            <a
              onClick={() =>
                goToCategory("technology news")
              }
            >
              Technology
            </a>

            <a
              onClick={() =>
                goToCategory("finance news")
              }
            >
              Finance
            </a>

            <a
              onClick={() =>
                goToCategory("sports news")
              }
            >
              Sports
            </a>

            <a
              onClick={() =>
                goToCategory("politics news")
              }
            >
              Politics
            </a>

          </div>

          <div className="footer-column">

            <h3>
              Quick Links
            </h3>

            <a
              onClick={() =>
                goToCategory("trending news")
              }
            >
              Trending
            </a>

            <a
              onClick={() =>
                goToCategory("breaking news")
              }
            >
              Breaking News
            </a>

            <a
              onClick={() =>
                goToCategory("global news")
              }
            >
              World News
            </a>

            <a
              onClick={() =>
                goToCategory("live news")
              }
            >
              Live Coverage
            </a>

          </div>

          <div className="footer-column">

            <h3>
              Company
            </h3>

            <Link to="/about">
              About
            </Link>

            <Link to="/privacy">
              Privacy
            </Link>

            <Link to="/terms">
              Terms
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 HeadlineHub. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}