// src/components/About.jsx
export default function About() {
  return (
    <section id="about" className="section about-section no-snap">
      <div className="container">
        <h2>
          <span className="text-white">Hello, I'm </span>
          <span className="text-red">Amrit Sooklal</span>
        </h2>

        <div className="about-card">
          {/* Photo wrapper – no clipping, centered */}
          <div className="photo-wrapper">
            <img 
              src="images/AmritHeadshot2026.png" 
              alt="Amrit Sooklal Headshot" 
              className="about-photo" 
            />
          </div>

          <div className="about-content">
            <p>
              I’m a <strong>Front-End Developer</strong> based in the <strong>Toronto area</strong>. Over the years, I’ve built a diverse skill set across modern front-end development, 
              UX/UI prototyping, and a wide range of software tools and programming languages. Each project I work on benefits from this breadth of experience, 
              allowing me to bring a thoughtful and innovative perspective to both design and implementation.
            </p>
            <p>
              Outside of work, I love Technology, Travel,{" "}
              <a
                href="https://vsco.co/amritsphotography/gallery"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Photography
              </a>
              , Space Exploration, Sci-fi and Sports.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
