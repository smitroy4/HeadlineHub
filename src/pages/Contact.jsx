import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useState } from "react";

import { supabase }
from "../supabase";

export default function Contact() {

  const [success, setSuccess] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  async function handleSubmit(e) {

    e.preventDefault();

    setLoading(true);

    const formData = {

      name:
        e.target.name.value,

      email:
        e.target.email.value,

      message:
        e.target.message.value
    };

    console.log(formData);

    const { data, error } =
      await supabase
        .from("contacts")
        .insert([formData]);

    console.log(data);
    console.log(error);

    setLoading(false);

    if (error) {

      alert(
        "Supabase Error: " +
        error.message
      );

      return;
    }

    setSuccess(true);

    e.target.reset();
  }

  return (

    <>

      <Navbar />

      <section className="page-hero">

        <div className="container page-hero-content">

          <span className="page-hero-tag">
            CONTACT
          </span>

          <h1>
            Let's Build The Future Of Digital Media
          </h1>

          <p>
            Get in touch for collaborations,
            partnerships, development discussions,
            media inquiries or feedback.
          </p>

        </div>

      </section>

      <section className="page-section">

        <div className="container">

          <div className="contact-grid">

            <div className="profile-card">

              <img
                src="https://avatars.githubusercontent.com/u/203015339?v=4"
                alt="Smit Roy"
              />

              <h2>
                Smit Roy
              </h2>

              <span>
                Developer & Creator of HeadlineHub
              </span>

              <p>
  Passionate software developer with a strong focus on backend engineering using Java, Spring Boot and modern scalable architectures. Deeply interested in building high-performance APIs, secure backend systems, intelligent platforms and real-world software solutions that solve practical user problems. Alongside backend development, currently expanding into modern frontend technologies like React to build complete full-stack digital experiences with clean UI/UX and seamless functionality.
</p>

<p>
  HeadlineHub was built as a personal solution to a modern problem — the overwhelming and time-consuming nature of consuming news across multiple platforms. The vision behind the platform is to help users quickly discover important global updates, technology trends, finance news, sports coverage and world affairs in one clean and distraction-free experience without paying for multiple subscriptions or spending hours scrolling through cluttered media platforms.
</p>

<p>
  As a developer, I enjoy exploring system design concepts, API architecture, authentication systems, database optimization and scalable backend development practices. I am particularly passionate about building applications that combine strong engineering principles with meaningful user experiences. My long-term goal is to become a highly skilled full-stack engineer capable of building modern production-grade platforms from scratch while continuously learning new technologies and solving impactful real-world problems through software.
</p>

              <div className="profile-links">

                <a
                  href="https://github.com/smitroy4"
                  target="_blank"
                >
                  GitHub Profile
                </a>

                <a
                  href="https://www.linkedin.com/in/smitroy22/"
                  target="_blank"
                >
                  LinkedIn
                </a>

              </div>

            </div>

            

            <div className="contact-form">

              <div className="projects-showcase">

  <div className="projects-header">

    <span>
      CURRENTLY BUILDING
    </span>

    <h2>
      Featured Projects
    </h2>

  </div>

  <div className="projects-grid">

    <a
      href="https://github.com/smitroy4/StayGrid"
      target="_blank"
      className="project-card"
    >

      <img
        src="https://media.licdn.com/dms/image/v2/D562DAQEc_Gp2l20xIQ/profile-treasury-image-shrink_800_800/B56Z3Iat9MJgAY-/0/1777183942554?e=1780182000&v=beta&t=c8p1FMmHvFv0AzwmNceiadfb3omc8XEOi8NVkMw7T-M"
        alt="StayGrid"
      />

      <div className="project-overlay">

        <h3>
          StayGrid
        </h3>

        <p>
          Production-grade Hotel booking platform
        </p>

      </div>

    </a>

    <a
      href="https://github.com/smitroy4/jwt-spring-boot-starter"
      target="_blank"
      className="project-card"
    >

      <img
        src="https://media.licdn.com/dms/image/v2/D5612AQEQPDssghN8gA/article-cover_image-shrink_720_1280/B56Z5TLopzHsAQ-/0/1779512024188?e=1781136000&v=beta&t=bfKGY0uPV87FgNdP_z3U_6aeB8FwHSfM_aBkV8s52Ho"
        alt="JWT Starter Dependency"
      />

      <div className="project-overlay">

        <h3>
          JWT Starter Dependency
        </h3>

        <p>
          Reusable JWT authentication starter for Spring Boot
        </p>

      </div>

    </a>

    <a
      href="https://github.com/smitroy4/ClinixHub/"
      target="_blank"
      className="project-card"
    >

      <img
        src="https://media.licdn.com/dms/image/v2/D562DAQHW8f5Ek-kVSw/profile-treasury-image-shrink_800_800/B56Z5W.nWbGsAQ-/0/1779575715523?e=1780182000&v=beta&t=mAL3y389OI9sV0AOWy1PH9asAXvayZa3Zzj-C0Nb3LI"
        alt="ClinixHub"
      />

      <div className="project-overlay">

        <h3>
          ClinixHub
        </h3>

        <p>
          Hospital Management System backend with fine-grained permissions, appointment booking & doctor onboarding
        </p>

      </div>

    </a>

    <a
      href="https://github.com/smitroy4/LMS-Portal"
      target="_blank"
      className="project-card"
    >

      <img
        src="https://media.licdn.com/dms/image/v2/D562DAQF9xkSZqY7eDQ/profile-treasury-image-shrink_800_800/B56Z3lPM4DJ0AY-/0/1777667463296?e=1780182000&v=beta&t=n6a9Of76M76kYtz8el3WAy8Gbv_OKAY3vs2BOquqlRQ"
        alt="LMS-Portal"
      />

      <div className="project-overlay">

        <h3>
          LMS-Portal
        </h3>

        <p>
            Backend built for managing students, courses, instructors, and enrollments </p>

      </div>

    </a>

  </div>

</div>

              <h2>
                Send a Message
              </h2>

              <form onSubmit={handleSubmit}>

                <div className="form-group">

                  <label>
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                  />

                </div>

                <div className="form-group">

                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                  />

                </div>

                <div className="form-group">

                  <label>
                    Message
                  </label>

                  <textarea
                    name="message"
                    required
                  />

                </div>

                <button type="submit">

                  {loading
                    ? "Sending..."
                    : "Send Message"}

                </button>

                {success && (

                  <div className="success-message">

                    Message sent successfully.

                  </div>

                )}

              </form>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}