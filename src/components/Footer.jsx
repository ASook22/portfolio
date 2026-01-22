// src/components/Footer.jsx
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Top part – logo + social icons */}
        <div className="footer-top">
          <div className="logo">
          <img 
            src="/images/NewLogo.png" 
            alt="Amrit Sooklal Logo" 
            className="nav-logo"
          />
        </div>

          <div className="footer-social">
            <a
              href="https://github.com/asook22"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <span className="icon">🐱</span>
            </a>

            <a
              href="https://linkedin.com/in/amrit-sooklal"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <span className="icon">🔗</span>
            </a>

            <a
             href="#"
                onClick={(e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText('ajsooklal@gmail.com');
                    alert('Email copied to clipboard: ajsooklal@gmail.com');
                }}
                className="social-link"
            >
              <span className="icon">✉️</span>
            </a>
          </div>
        </div>

        {/* Bottom part – copyright + quick links */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Amrit Sooklal. All rights reserved.
          </p>

          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <a
                href="/documents/AmritSooklalResume2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}