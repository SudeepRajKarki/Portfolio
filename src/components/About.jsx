import { FaReact, FaNodeJs, FaDatabase, FaCode } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16" id="about">
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
        About Me
      </h2>

      {/* Subtitle */}
      <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-10">
        Full-Stack Developer | MERN Specialist | Tech for Social Impact
      </p>

      {/* Profile Description */}
      <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8 text-justify">
        I'm Sudeep Raj Karki, a passionate full-stack web developer from Kathmandu, Nepal, dedicated to building intelligent software that solves real-world problems. I specialize in the <strong>MERN stack</strong> (MongoDB, Express, React, Node.js) and love turning ideas into scalable, user-friendly applications.
      </p>

      <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8 text-justify">
        My journey in tech started with curiosity. How can code improve lives? That led me to build systems like a digital <strong>Birth Registration Platform</strong> and an <strong>AI-powered Blood Donation System</strong>, aiming to bring efficiency and equity to essential services.
      </p>

      {/* MERN Stack Icons - Responsive */}
      <div className="my-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
        
        <div className="flex flex-wrap justify-center items-start gap-4 sm:gap-6">
          {/* React */}
          <div className="flex flex-col items-center min-w-[70px]">
            <FaReact className="text-3xl sm:text-4xl text-cyan-500" />
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mt-2 text-center">
              React
            </span>
          </div>

          {/* Express */}
          <div className="flex flex-col items-center min-w-[70px]">
            <SiExpress className="text-3xl sm:text-4xl text-gray-700 dark:text-gray-300" />
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mt-2 text-center">
              Express
            </span>
          </div>

          {/* Node.js */}
          <div className="flex flex-col items-center min-w-[70px]">
            <FaNodeJs className="text-3xl sm:text-4xl text-green-600" />
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mt-2 text-center">
              Node.js
            </span>
          </div>

          {/* MongoDB */}
          <div className="flex flex-col items-center min-w-[70px]">
            <SiMongodb className="text-3xl sm:text-4xl text-green-500" />
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mt-2 text-center">
              MongoDB
            </span>
          </div>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 border border-blue-100 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          🚀 What I'm Up To
        </h3>
        <ul className="space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
          <li className="flex flex-col sm:flex-row sm:gap-2">
            <span className="font-bold text-gray-800 dark:text-gray-200">🔭 Currently:</span>
            <span>Building an AI-based Blood Donation Platform with NLP for smart request prioritization</span>
          </li>
          <li className="flex flex-col sm:flex-row sm:gap-2">
            <span className="font-bold text-gray-800 dark:text-gray-200">🌱 Learning:</span>
            <span>DevOps, UI/UX Design, and Software Testing</span>
          </li>
          <li className="flex flex-col sm:flex-row sm:gap-2">
            <span className="font-bold text-gray-800 dark:text-gray-200">🧠 Exploring:</span>
            <span>AI Integration, QR-based authentication, and intelligent healthcare systems</span>
          </li>
          <li className="flex flex-col sm:flex-row sm:gap-2">
            <span className="font-bold text-gray-800 dark:text-gray-200">👯 Focused on:</span>
            <span>Community-driven and health-tech projects that make a difference</span>
          </li>
          <li className="flex flex-col sm:flex-row sm:gap-2">
            <span className="font-bold text-gray-800 dark:text-gray-200">💬 Ask me about:</span>
            <span>React, Node.js, MongoDB, Express, Java</span>
          </li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <a
          href="#projects"
          className="inline-block bg-blue-600 dark:bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300 font-semibold text-base"
        >
          View My Projects
        </a>
      </div>
    </section>
  );
}

export default About;