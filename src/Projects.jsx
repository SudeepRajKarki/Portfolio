function Projects() {
  return (
    <section className="section">
      <h2 className="title">Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3 className="project-title">Birth Registration System</h3>
          <p className="project-desc">A MERN stack app for registering and verifying birth records.</p>
          <a href="https://github.com/Strangerme03/Birth_Registration_MERN.git" className="project-link" target="_blank">View Code</a>
        </div>
        <div className="project-card">
          <h3 className="project-title">SBS Optics Store</h3>
          <p className="project-desc">An optical e-commerce site with product filters, cart, and admin panel made as a group project.</p>
          <a href="https://github.com/swostik720/ecommerce_project.git" className="project-link" target="_blank">View Code</a>
        </div>
        <div className="project-card">
          <h3 className="project-title">A digital Clock</h3>
          <p className="project-desc">A simple digital clock made with react.</p>
          <a href="https://digitalclockstranger.vercel.app" className="project-link" target="_blank">Live Demo</a>
        </div>
        <div className="project-card">
          <h3 className="project-title">A Weather App</h3>
          <p className="project-desc">A simple weather app made with react using weather API</p>
          <a href="https://weatherbysudeep.vercel.app/" className="project-link" target="_blank">Live Demo</a>
        </div>
      </div>
    </section>
  );
}
export default Projects