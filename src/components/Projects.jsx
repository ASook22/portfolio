// src/components/Projects.jsx
export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with cart, payments, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      title: "Real-Time Dashboard",
      description: "Interactive analytics dashboard with live data updates and charts.",
      technologies: ["React", "Chart.js", "Firebase", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Portfolio Generator",
      description: "Tool that helps developers create beautiful portfolios quickly.",
      technologies: ["Next.js", "Vite", "Tailwind", "Supabase"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2>My Projects</h2>
        <p className="section-intro">
          A selection of my recent work — personal projects, freelance, and experiments.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {/* Placeholder box instead of image */}
              <div className="project-placeholder">
                <span className="placeholder-text">{project.title}</span>
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}