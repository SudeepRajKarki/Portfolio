import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  const location = useLocation(); 

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="pt-16">
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
  <img
    className="mx-auto rounded-full shadow-lg mb-8 w-48 h-48 object-cover"
    src="/cover.jpeg"
    alt="Cover"
  />
  <h2 className="text-5xl font-bold mb-4">Hi, I'm Sudeep Raj Karki 👋</h2>
  <p className="text-xl text-gray-700 dark:text-gray-100">
    Web Developer | Designer | Tech Enthusiast<br/>
    <a
    href="/sudeepcv.pdf" 
    download
    className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 mt-5"
  >
    Download CV
  </a>
  </p>
  
</section>

      <section id="about" className="max-w-5xl mx-auto px-6 py-20">
        <About />
      </section>

      <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
        <Projects />
      </section>

      <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
