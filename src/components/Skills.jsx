import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiExpress, SiDotnet, SiMongodb, SiGit, SiLinux } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { MdOutlineAutoAwesome } from "react-icons/md"; // For AI/Exploring

function Skills() {
  const coreSkills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-700 dark:text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
  ];

  const tools = [
    { name: "Git", icon: <SiGit className="text-orange-600 dark:text-orange-400" /> },
    { name: "Linux", icon: <SiLinux className="text-yellow-600" /> },
    { name: ".NET", icon: <SiDotnet className="text-purple-600" /> },
    { name: "VS Code", icon: <TbBrandVscode className="text-blue-500" /> },
  ];

  const exploring = [
    { name: "AI Integration", icon: <MdOutlineAutoAwesome className="text-teal-400" /> },
    { name: "NLP", icon: <MdOutlineAutoAwesome className="text-teal-500" /> },
    { name: "QR Auth", icon: <SiGit className="text-gray-400" /> },
    { name: "DevOps", icon: <SiLinux className="text-indigo-400" /> },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
        My Skills
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        Built with the MERN stack and always expanding into new technologies.
      </p>

      {/* Core Skills */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-200">
          Core Stack
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {coreSkills.map((skill, index) => (
            <div
              key={`core-${index}`}
              className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              title={skill.name}
            >
              <div className="text-5xl mb-2 drop-shadow-md">{skill.icon}</div>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tools & Environment */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-200">
          Tools & Environment
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={`tool-${index}`}
              className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              title={tool.name}
            >
              <div className="text-5xl mb-2">{tool.icon}</div>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Exploring / Learning */}
      <div>
        <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-200">
          Exploring & Learning
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 opacity-90">
          {exploring.map((item, index) => (
            <div
              key={`explore-${index}`}
              className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl mb-2 text-gray-500 dark:text-gray-400">
                {item.icon}
              </div>
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300 text-center">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;