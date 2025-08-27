function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-semibold mb-3 text-blue-600">Birth Registration System</h3>
          <p className="text-gray-700 mb-6">A MERN stack app for registering and verifying birth records.</p>
          <a
            href="https://github.com/SudeepRajKarki/Birth_Registration_MERN.git"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto text-blue-500 hover:underline font-medium"
          >
            View Code
          </a>
        </div>
         <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-semibold mb-3 text-blue-600">FinTrack</h3>
          <p className="text-gray-700 mb-6">A finance tracker app made with MERN stack.</p>
          <a
            href="https://fintrackme.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto text-blue-500 hover:underline font-medium"
          >
            Demo
          </a>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-semibold mb-3 text-blue-600">A Weather App</h3>
          <p className="text-gray-700 mb-6">A simple weather app made with React using weather API.</p>
          <a
            href="https://weatherbysudeep.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto text-blue-500 hover:underline font-medium"
          >
            Live Demo
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-semibold mb-3 text-blue-600">A digital Clock</h3>
          <p className="text-gray-700 mb-6">A simple digital clock made with React.</p>
          <a
            href="https://digitalclockstranger.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto text-blue-500 hover:underline font-medium"
          >
            Live Demo
          </a>
        </div>

        
      </div>
    </section>
  );
}

export default Projects;
