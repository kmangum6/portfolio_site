import { useState } from 'react'
import './App.css'
import ContactForm from './ContactForm'
 
const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
 
const PROJECTS = [
  {
    title: "Project One",
    blurb: "A short summary of what you built, who it was for, and the tools you used.",
    link: "#",
  },
  {
    title: "Project Two",
    blurb: "Describe the problem you solved and the result. Numbers and outcomes help.",
    link: "#",
  },
];
 
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
 
  return (
    <>
      <header className="navbar">
        <nav className="navbar-inner" aria-label="Main">
          <a href="#home" className="nav-item">Home</a>
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="nav-item nav-desktop">
              {l.label}
            </a>
          ))}
          <button
            className="nav-item nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>
        {menuOpen && (
          <div id="mobile-menu" className="mobile-menu">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="nav-item"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>
 
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">KAYLEEN MANGUM</h1>
          <p className="hero-sub">Web developer | designer</p>
          <a href="#projects" className="btn btn-outline">See my work</a>
        </div>
      </section>
 
      <section id="about" className="section">
        <h2>About Me</h2>
        <p className="lead">Write one or two sentences about me.</p>
        <p>More details about my background and the kind of work I do.</p>
      </section>
 
      <section id="projects" className="section section-alt">
        <h2>Projects</h2>
        <p className="lead">Things I have built. Short details.</p>
        <div className="grid">
          {PROJECTS.map((p) => (
            <article key={p.title} className="card">
              <h3>{p.title}</h3>
              <p>{p.blurb}</p>
              <a href={p.link} className="btn btn-dark">View Project</a>
            </article>
          ))}
        </div>
      </section>
 
      <section id="contact" className="band">
        <h2>Interested? Contact me here!</h2>
        <ContactForm />
      </section>
 
      <footer className="footer">
        <p>© {new Date().getFullYear()} Kayleen Mangum</p>
        <p>
          <a className="link" href="https://www.linkedin.com/in/YOUR-PROFILE">LinkedIn</a>
          <a className="link" href="https://github.com/YOUR-USERNAME">GitHub</a>
          <a className="link" href="mailto:kayla.m.mangum@gmail.com">Email Me</a>
        </p>
      </footer>
    </>
  );
}