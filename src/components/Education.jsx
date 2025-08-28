import { FaLaptopCode, FaGraduationCap, FaBook, FaUniversity, FaSchool } from "react-icons/fa";
import { SiReact } from "react-icons/si";

function Education() {
  const qualifications = [
    {
      icon: <FaSchool />,
      title: "Secondary Education Examination (SEE)",
      school: "Aadhunik English Boarding School, Sindhuli",
      year: "2075 (2018 AD)",
      description: "Completed school-level education with a strong foundation in science and mathematics.",
      color: "from-blue-500 to-blue-700",
      hover: "hover:rotate-y-6 hover:translate-z-6",
    },
    {
      icon: <FaBook />,
      title: "+2 in Science (GCE A-Level Equivalent)",
      school: "National Integrated College, Kathmandu",
      year: "2078 (2021 AD)",
      description: "Intermediate science education focusing on Physics, Chemistry, and Mathematics preparing for advanced studies in computer science.",
      color: "from-purple-500 to-purple-700",
      hover: "hover:rotate-y-6 hover:translate-z-6",
    },
    {
      icon: <FaUniversity />,
      title: "BSc. CSIT (Ongoing – 8th Semester)",
      school: "College of Applied Business and Technology, Kathmandu",
      year: "2078 – Present",
      description: "Bachelor in Computer Science and Information Technology. Core studies include Data Structures, Algorithms, DBMS, Networking, AI, and Software Engineering.",
      color: "from-green-500 to-green-700",
      hover: "hover:rotate-y-6 hover:translate-z-6",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 " id="education">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          My Academic Journey
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          From school to university, every step shaping me into a full-stack developer building real-world solutions.
        </p>
      </div>

      {/* 3D Card Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {qualifications.map((qual, index) => (
          <div
            key={index}
            className={`relative group perspective-1000 ${qual.hover}`}
          >
            {/* 3D Card */}
            <div
              className={`relative h-full bg-gradient-to-br ${qual.color} text-white p-6 rounded-xl shadow-lg transform transition-all duration-500 
                hover:shadow-2xl hover:-translate-y-2 
                will-change-transform
                dark:shadow-black/30`}
              style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
              }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 drop-shadow-md">{qual.icon}</div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2 drop-shadow">{qual.title}</h3>
              <p className="text-white/90 text-sm mb-1 drop-shadow">{qual.school}</p>
              <p className="text-white/80 text-xs mb-3 drop-shadow">{qual.year}</p>
              <p className="text-sm text-white/90 leading-relaxed drop-shadow">
                {qual.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <a
          href="#projects"
          className="inline-block bg-blue-600 dark:bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 shadow-md"
        >
          See What I’ve Built →
        </a>
      </div>
    </section>
  );
}

export default Education