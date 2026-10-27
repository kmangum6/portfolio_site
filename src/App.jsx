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
    title: "Python Application",
    blurb: "This app allows you to enter character information for a few famous TTRPGs, such as Dungeons and Dragons, Drawsteel, the Cosmere RPG, and Monster of the Week, with the intention to add more functionality over time. Most of this is currently in a form state - where items can simply be typed in rather than generating information automatically. This will be changed over time as the app is further improved.",
    link: "#",
  },
  {
    title: "Helpdesk Database Demonstration",
    blurb: "This database uses SQLite and Javascript in order to run a small helpdesk example database with a few test users available. It will automatically delete any changes that have been added once you leave and log back in, but it gives an example of what I can potentially do with databases.",
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
          <p className="hero-sub">Web Developer | App Engineer</p>
          <a href="#projects" className="btn btn-outline">See my work</a>
        </div>
      </section>
 
      <section id="about" className="section">
        <h2>About Me</h2>
        <p className="lead">I have been working on personal projects involving fullstack engineering and working towards my baachelor's degree in Software Engineering for the last two years. I am currently looking for internships or freelance projects to increase my knowledge and experience as I finish my degree.</p>
        <p>I have spent the last seven years working in various technical support roles - from working on freeze dryers and walking customers through repairing their devices to my most recent position working at Fishbowl and helping to maintain databases for various inventory customers. Over those years, I have learned JavaScript, Python, HTML, CSS, and MySQL, as well as various other softwares and engines like Salesforce, Jira, and NetSuite. This experience has done wonders to help me move ever closer to my goal of working as a fullstack engineer and working on large-scale projects, including building and maintaining information.</p>
        <p>I would love the opportunity to be able to show what I can do and work with you on either a project to improve my skills or in an intern or junior engineer position - and you'll be able to see from my projects that I am already good at what I do. My goal is to become GREAT!</p>
      </section>
 
      <section id="projects" className="section section-alt">
        <h2>Projects</h2>
        <p className="lead">I have worked on two projects so far: a Python-based app for android allowing you to enter character information for TTRPGs, and a HelpDesk SQL database demo.</p>
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