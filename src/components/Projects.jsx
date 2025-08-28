import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Birth Registration System",
      description:
        "A full-stack MERN application for digitizing birth record registration and verification helping underserved communities gain legal identity.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      links: {
        live: null,
        code: "https://github.com/SudeepRajKarki/Birth_Registration_MERN",
      },
      category: "full-stack",
    },
    {
      title: "FinTrack",
      description:
        "A personal finance tracker that helps users monitor income, expenses, and savings goals in real time with a clean dashboard.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      links: {
        live: "https://fintrackme.vercel.app",
        code: "https://github.com/SudeepRajKarki/Finance_Tracker.git", 
      },
      category: "full-stack",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather app that displays current conditions and forecasts using OpenWeather API and geolocation.",
      tech: ["React", "Weather API", "CSS"],
      links: {
        live: "https://weatherbysudeep.vercel.app",
        code: "https://github.com/SudeepRajKarki/Weather_App_with_React.git",
      },
      category: "frontend",
    },
    {
      title: "Digital Clock",
      description:
        "A minimalist digital clock built with React to practice state management and lifecycle methods.",
      tech: ["React", "JavaScript", "CSS"],
      links: {
        live: "https://digitalclockstranger.vercel.app",
        code: "https://github.com/SudeepRajKarki/DigitalClock_with_React.git",
      },
      category: "learning",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
        My Projects
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
        From full-stack apps solving real problems to frontend experiments, each project is a step toward better tech for everyone.
      </p>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-105 border border-transparent hover:border-blue-200 dark:hover:border-gray-700"
          >
            {/* Project Title */}
            <h3 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 mb-5 flex-grow">
              {project.description}
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => {
                const iconMap = {
                  React: <SiReact className="text-cyan-500" />,
                  "Node.js": <SiNodedotjs className="text-green-600" />,
                  Express: <SiExpress className="text-gray-800 dark:text-gray-300" />,
                  MongoDB: <SiMongodb className="text-green-500" />,
                };
                return (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-gray-800 dark:text-gray-200"
                  >
                    {iconMap[tech] || null}
                    {tech}
                  </span>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-auto">
              {project.links.code && (
                <a
                  href={project.links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 hover:underline font-medium"
                >
                  <FaGithub /> View Code
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-green-600 hover:underline font-medium"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;