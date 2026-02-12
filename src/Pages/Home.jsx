import React, { useState, useEffect } from 'react';

// Portfolio data
const projects = [
  {
    id: 1,
    title: "Movie Explorer App",
    description: "Built a movie search platform with external API integration, implementing search, filters, and responsive UI using React and Axios.",
    technologies: ["React", "Axios", "Ant Design"],
    link: "https://github.com/Samiprog/movie-app.git",
    image: "/projects/Movie.png"
  },
  {
    id: 2,
    title: "Daraz Clone",
    description: "Complete e-commerce user interface with React and Bootstrap, featuring product listings, category navigation, and responsive design across all devices.",
    technologies: ["React", "Bootstrap", "JavaScript"],
    link: "https://github.com/Samiprog/daraz-clone.git",
    image: "/projects/Screenshot 2026-02-12 202136.png"
  },
  {
    id: 3,
    title: "Real Estate Website",
    description: "Modern real estate UI with property listings and detail pages. Built with React and CSS, featuring clean layouts and responsive design.",
    technologies: ["React", "CSS", "Bootstrap"],
    link: "https://github.com/Samiprog/Real-Estate-App.git",
    image: "/projects/Screenshot 2026-02-12 202108.png"
  },
  {
    id: 4,
    title: "Expense Tracker App",
    description: "React-based Expense Tracker application with LocalStorage integration for persistent data storage and minimal, clean interface design.",
    technologies: ["React", "LocalStorage", "JavaScript"],
    link: "https://github.com/Samiprog/notes-app.git",
    image: "/projects/Screenshot 2025-09-20 201930.png"
  },
  {
    id: 5,
    title: "Medical Website",
    description: "A Full Mern Stack Project(In Progress)",
    technologies: ["React", "React Router", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    image: "https://placehold.co/600x400/1a1f2e/dc2626?text=Medical+Website"
  }
];

const skills = [
  { name: "React.js", level: 92 },
  { name: "JavaScript (ES6+)", level: 90 },
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "Bootstrap", level: 88 },
  { name: "Ant Design", level: 85 },
  { name: "Responsive Design", level: 93 },
  { name: "REST APIs", level: 85 }
];

const frontendSkills = ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap", "Ant Design"];
const stateManagement = ["Redux"];
const apis = ["REST API Integration", "Axios"];
const versionControl = ["Git", "GitHub"];
const otherSkills = ["Responsive Web Design", "Problem Solving"];

export default function Home() {
  // State for tracking scroll position
  const [scrolled, setScrolled] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("home");

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveNavItem(sectionId);
    }
  };

  return (
    <div className="portfolio">
      {/* Navigation Bar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="nav-content">
            <h1 className="logo">Sameera</h1>
            
            <div className="nav-links">
              {["about", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`nav-link ${activeNavItem === item ? "active" : ""}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-subtitle">Welcome to my portfolio</p>
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">Sameera Javed</span>
              </h1>
              <p className="hero-role">Frontend Developer</p>
              
              <p className="hero-description">
                Dedicated Frontend Developer with a strong foundation in React.js, JavaScript, and modern web development principles. Experienced across 11 diverse projects including E-Commerce, Expense Tracker, and more. Proficient in responsive UI design and persistent data handling. Currently expanding capabilities into Full Stack Development.
              </p>

              <div className="hero-buttons">
                <button 
                  className="btn btn-primary"
                  onClick={() => scrollToSection("projects")}
                >
                  View My Work
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={() => scrollToSection("contact")}
                >
                  Get in Touch
                </button>
              </div>

              {/* Social Links */}
              <div className="social-links">
                <a href="https://github.com/samiprog" target="_blank" rel="noopener noreferrer">
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <span>LinkedIn</span>
                </a>
                <a href="mailto:sameera182000@gmail.com">
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About <span className="highlight">Me</span></h2>

          <div className="about-grid">
            <div className="card">
              <h3>Professional Summary</h3>
              <p>
                I'm a dedicated Frontend Developer with a strong foundation in React.js, JavaScript, and modern web development principles. I've demonstrated my skills across 11 diverse projects, ranging from E-Commerce platforms to Expense Trackers, showcasing my ability to build responsive and user-friendly interfaces.
              </p>
              <p>
                I'm proficient in responsive UI design and persistent data handling using LocalStorage and APIs. Currently, I'm actively expanding my capabilities into Full Stack Development, learning Node.js, Express.js, and MongoDB.
              </p>
            </div>

            <div className="card">
              <h3>Location & Contact</h3>
              <div className="contact-info">
                <div className="info-item">
                  <strong>Location:</strong>
                  <p>Lahore, Pakistan</p>
                </div>
                <div className="info-item">
                  <strong>Email:</strong>
                  <p>sameera182000@gmail.com</p>
                </div>
                <div className="info-item">
                  <strong>Phone:</strong>
                  <p>+92 309 8699627</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>My <span className="highlight">Skills</span></h2>

          {/* Skill Categories */}
          <div className="skill-categories">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-tags">
                {frontendSkills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3>State Management</h3>
              <div className="skill-tags">
                {stateManagement.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3>APIs</h3>
              <div className="skill-tags">
                {apis.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3>Version Control</h3>
              <div className="skill-tags">
                {versionControl.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category full-width">
              <h3>Other</h3>
              <div className="skill-tags">
                {otherSkills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Proficiency Levels */}
          <div className="proficiency-section">
            <h3>Proficiency Levels</h3>
            <div className="proficiency-grid">
              {skills.map((skill, index) => (
                <div key={index} className="proficiency-item">
                  <div className="proficiency-header">
                    <h4>{skill.name}</h4>
                    <span className="percentage">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>Featured <span className="highlight">Projects</span></h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-card-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-project"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education">
        <div className="container">
          <h2><span className="highlight">Education</span></h2>

          <div className="education-grid">
            <div className="card">
              <h3>Intermediate (FSc Pre-Engineering)</h3>
              <p>Punjab College</p>
              <p className="location">Lahore</p>
            </div>

            <div className="card">
              <h3>Full Stack Web Development (In Progress)</h3>
              <p>Self-Study / Online Platforms</p>
              <p className="location">Currently learning Node.js, Express.js, and MongoDB</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Let's <span className="highlight">Connect</span></h2>

          <div className="contact-card">
            <p>
              Interested in working together or have a question? I'd love to hear from you. Feel free to reach out through any of these channels.
            </p>

            <div className="contact-buttons">
              <a href="mailto:sameera182000@gmail.com" className="btn btn-primary">Mail Me</a>
              <a href="https://github.com/samiprog" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Sameera Javed. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
