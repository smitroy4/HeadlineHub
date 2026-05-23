import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Privacy() {

  return (

    <>

      <Navbar />

      <section className="page-hero">

        <div className="container page-hero-content">

          <span className="page-hero-tag">
            PRIVACY POLICY
          </span>

          <h1>
            Your Privacy Matters
          </h1>

          <p>
            HeadlineHub is committed to protecting
            user privacy and ensuring transparency
            regarding how data is collected,
            stored and used.
          </p>

        </div>

      </section>

      <section className="page-section">

        <div className="container page-container">

          <div className="page-card">

            <h2>
              Information Collection
            </h2>

            <p>
              We may collect limited non-personal
              information such as browser type,
              device information, page visits
              and interaction analytics to improve
              the platform experience.
            </p>

            <p>
              Personal information submitted through
              contact forms may include name,
              email address and messages.
            </p>

          </div>

          <div className="page-card">

            <h2>
              Data Usage
            </h2>

            <p>
              Collected information is used to:
            </p>

            <ul>

              <li>
                Improve platform performance
              </li>

              <li>
                Enhance user experience
              </li>

              <li>
                Respond to inquiries and feedback
              </li>

              <li>
                Monitor website security and abuse
              </li>

            </ul>

          </div>

          <div className="page-card">

            <h2>
              Third-Party Services
            </h2>

            <p>
              HeadlineHub may integrate third-party
              APIs, analytics tools and content providers.
            </p>

            <p>
              We do not sell personal user information
              to advertisers or third parties.
            </p>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}