// src/components/Projects.jsx
export default function Projects() {
  const projects = [
    {
    title: "PokeAPI App",
    description: "A React application that fetches and displays data from the PokeAPI, featuring filtering and detailed views.",
    technologies: ["React", "Vite", "CSS"],
    link: "https://asook22.github.io/AmongTheTallGrass/",
    image: "/portfolio/images/ATTG.png" // Replace with your image path
    },
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
                 <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={`${project.title} screenshot`} 
                  className="project-image" 
                />
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