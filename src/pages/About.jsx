import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {

  return (

    <>

      <Navbar />

      <section className="page-hero">

        <div className="container page-hero-content">

          <span className="page-hero-tag">
            ABOUT HEADLINEHUB
          </span>

          <h1>
            Journalism Built For The Modern Internet
          </h1>

          <p>
            HeadlineHub is a next-generation digital
            news platform focused on delivering
            real-time, fast and meaningful journalism
            across technology, business, finance,
            politics, startups, sports and global affairs.
          </p>

        </div>

      </section>

      <section className="page-section">

        <div className="container page-container">

          <div className="page-card">

            <h2>
              Our Mission
            </h2>

            <p>
              In an era of overwhelming information,
              misinformation and low-quality content,
              HeadlineHub was designed to simplify
              the way readers consume global news.
            </p>

            <p>
              Our mission is to create a clean,
              fast and modern platform where
              readers can access reliable,
              categorized and real-time information
              without distractions.
            </p>

            <p>
              We believe modern journalism should
              be accessible, minimal, intelligent
              and deeply connected with the digital age.
            </p>

          </div>

          <div className="page-card">

            <h2>
              What We Cover
            </h2>

            <ul>

              <li>
                Global breaking news and live coverage
              </li>

              <li>
                Technology and software development
              </li>

              <li>
                Artificial intelligence and innovation
              </li>

              <li>
                Finance, economy and stock markets
              </li>

              <li>
                Sports, entertainment and world affairs
              </li>

              <li>
                Startups, entrepreneurship and digital business
              </li>

            </ul>

          </div>

          <div className="page-card">

            <h2>
              The Vision
            </h2>

            <p>
              HeadlineHub aims to evolve beyond a traditional
              news website into a modern media experience.
            </p>

            <p>
              Future plans include AI-assisted summaries,
              personalized feeds, intelligent recommendations,
              dark-mode optimized reading, mobile-first experiences,
              global journalism integrations and advanced user engagement systems.
            </p>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}