import { FaReact, FaLinux } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

function Certificates() {
  const certificates = [
    {
      title: "React JavaScript - Fundamentals to Coding & New Beginnings",
      issuer: "Alison",
      date: "28th August 2025",
      description:
        "Completed comprehensive course on React JS fundamentals including components, JSX, props, state, and building interactive UIs.",
      link: "https://alison.com/certification/check/eb07cd2e9c", // Fixed: removed trailing spaces
      icon: <FaReact className="text-cyan-500" />,
      cpdHours: 2,
      score: "80%+ (Passing Grade)",
    },
    {
      title: "Linux for Absolute Beginners",
      issuer: "Alison",
      date: "Completed 2025", // Update if exact date is known
      description:
        "Learned Linux fundamentals: file system navigation, command line usage, permissions, and basic shell operations.",
      link: "https://alison.com/certification/check/e5c9ccee29", // Fixed: removed trailing spaces
      icon: <FaLinux className="text-orange-500" />,
      cpdHours: 1,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
        Certifications
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
        Verified learning from recognized platforms. Building strong foundations in web development and system fundamentals.
      </p>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-900 transition-all duration-300"
          >
            {/* Header with Icon */}
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">{cert.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {cert.issuer} • {cert.date}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
              {cert.description}
            </p>

            {/* Details */}
            <div className="flex flex-wrap gap-3 mb-5 text-xs">
              {cert.cpdHours && (
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                  {cert.cpdHours} CPD Hour{cert.cpdHours > 1 ? "s" : ""}
                </span>
              )}
              {cert.score && (
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                  {cert.score}
                </span>
              )}
            </div>

            {/* CTA */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:underline font-medium mt-auto"
            >
              <MdVerified /> View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;