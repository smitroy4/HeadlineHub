import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Terms() {

  return (

    <>

      <Navbar />

      <section className="page-hero">

        <div className="container page-hero-content">

          <span className="page-hero-tag">
            TERMS & CONDITIONS
          </span>

          <h1>
            Platform Usage Guidelines
          </h1>

          <p>
            By accessing and using HeadlineHub,
            users agree to comply with all
            applicable terms, policies and
            responsible platform usage standards.
          </p>

        </div>

      </section>

      <section className="page-section">

        <div className="container page-container">

          <div className="page-card">

            <h2>
              Content Ownership
            </h2>

            <p>
              News articles, images and media
              displayed through HeadlineHub belong
              to their respective publishers,
              organizations and content owners.
            </p>

            <p>
              HeadlineHub aggregates publicly available
              news content through APIs and feeds.
            </p>

          </div>

          <div className="page-card">

            <h2>
              Acceptable Usage
            </h2>

            <ul>

              <li>
                Users may not misuse the platform
                for illegal activities.
              </li>

              <li>
                Automated scraping or abuse attempts
                are prohibited.
              </li>

              <li>
                Users must respect intellectual
                property rights.
              </li>

              <li>
                Platform functionality may evolve
                or change over time.
              </li>

            </ul>

          </div>

          <div className="page-card">

            <h2>
              Disclaimer
            </h2>

            <p>
              While we strive to ensure information
              accuracy, HeadlineHub cannot guarantee
              the completeness or reliability of
              third-party news content.
            </p>

            <p>
              Readers should independently verify
              critical information where necessary.
            </p>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}