import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";
import Certificates from "./Certificates";

function Home() {
  const location = useLocation();

  useEffect(() => {
    // Only scroll if there's a hash in the URL
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <img
          className="mx-auto rounded-full shadow-lg mb-6 w-40 h-40 object-cover border-4 border-white dark:border-gray-700"
          src="/cover.jpeg"
          alt="Sudeep Raj Karki - Full-Stack Developer from Nepal"
          loading="eager"
        />
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hi, I'm Sudeep Raj Karki 👋
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-2 mt-5">
          Full-Stack Developer | MERN Specialist | Tech for Social Impact
        </p>
       

        {/* Download CV Button */}
        <a
          href="/MyCV.pdf"
          download
          className="inline-block bg-blue-600 mt-5 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          📄 Download CV
        </a>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20">
        <About />
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-20">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
        <Projects />
      </section>

      {/* Certificates */}
      <section id="certificates" className="max-w-5xl mx-auto px-6 py-20">
        <Certificates />
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
        <Contact />
      </section>
    </div>
  );
}

export default Home;