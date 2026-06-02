// src/components/Navbar.jsx
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img 
            src="/images/NewLogo.png" 
            alt="Amrit Sooklal Logo" 
            className="nav-logo"
          />
        </div>

        <div
          className="hamburger"
          onClick={toggleMenu}
          role="button"
          tabIndex={0}
          aria-label="Toggle menu"
          onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Desktop links */}
        <ul className="nav-links desktop-links">
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          <li>
            <a
              href="/documents/Amrit_Sooklal_Resume2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
              onClick={closeMenu}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeMenu}>
          ×
        </button>

        <div className="sidebar-content">
          <ul className="nav-links mobile-links">
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>

          <a
            href="/documents/AmritSooklalResume2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
            onClick={closeMenu}
          >
            Resume
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && <div className="backdrop" onClick={closeMenu} />}
    </>
  );
}