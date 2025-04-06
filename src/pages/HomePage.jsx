import { Link } from 'react-router-dom'
import '../styles/pages/HomePage.scss'

const HomePage = () => {
  // Featured projects data
  const featuredProjects = [
    {
      id: 1,
      title: 'Epic ON',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      tags: ['Product Design', 'Interaction Design'],
      slug: 'epic-on'
    },
    {
      id: 2,
      title: 'Pebble Impact Website',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      tags: ['Product Design', 'Web Design', 'Branding'],
      slug: 'pebble-impact'
    },
    {
      id: 3,
      title: 'Corpcare',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      tags: ['Product Design', 'Interaction Design'],
      slug: 'corpcare'
    }
  ]

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      text: "Working with Anushka was an absolute pleasure. Her design sensibilities are unmatched!",
      author: "John Doe",
      role: "Product Manager, XYZ Company",
      tags: ["Innovative", "Detail-oriented", "Strategic"],
      avatar: "/images/avatars/avatar-1.png"
    },
    {
      id: 2,
      text: "Anushka's ability to understand user needs and translate them into beautiful designs is remarkable.",
      author: "Jane Smith",
      role: "CEO, ABC Startup",
      tags: ["Empathetic", "Creative", "Analytical"],
      avatar: "/images/avatars/avatar-2.png"
    },
    {
      id: 3,
      text: "One of the most talented designers I've worked with. Her attention to detail is impressive.",
      author: "Michael Johnson",
      role: "Design Lead, Tech Corp",
      tags: ["Talented", "Visionary", "Collaborative"],
      avatar: "/images/avatars/avatar-3.png"
    },
    {
      id: 4,
      text: "Anushka brought a fresh perspective to our project and delivered beyond our expectations.",
      author: "Sarah Williams",
      role: "Marketing Director, Brand Co",
      tags: ["Innovative", "Reliable", "Insightful"],
      avatar: "/images/avatars/avatar-4.png"
    },
    {
      id: 5,
      text: "Collaborative, innovative, and extremely skilled. Working with Anushka elevated our product.",
      author: "David Brown",
      role: "Founder, Innovation Labs",
      tags: ["Skilled", "Adaptable", "Forward-thinking"],
      avatar: "/images/avatars/avatar-5.png"
    }
  ]

  return (
    <div className="home-page">
      {/* Hero Section - Updated */}
      <section className="hero-section" id="hero">
        <div className="container">
          <div className="hero-content">
            <a href="#about" className="hero-title-wrapper" onClick={(e) => {
              e.preventDefault();
              document.getElementById('about').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
            }}>
              <h1 className="hero-title">
                <span className="hero-title-part">I'm Anushka,</span> <span className="hero-description-part">designer crafting impactful digital experiences that quietly enhance daily life and leave a lasting trace of positive change.</span>
              </h1>
            </a>
            
            <div className="hero-actions-wrapper">
              <div className="hero-actions">
                <div className="hero-cta">
                  <a href="#work" className="cta-button" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('work').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                  }}>
                    Explore my work <span className="arrow">→</span>
                  </a>
                </div>
                
                <div className="hero-status">
                  <p className="status-text">Actively seeking full-time opportunity | Immediate Joiner</p>
                  <p className="previous-text">Previously worked with Fluidesigns, Cognizant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className="work-section section" id="work">
        <div className="container">
          <h2 className="section-title">Some of my handpicked work ✨</h2>
          
          <div className="projects-container">
            {featuredProjects.map((project) => (
              <div className="project-card" key={project.id}>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span className="tag" key={tagIndex}>{tag}</span>
                    ))}
                  </div>
                  
                  <Link to={`/work/${project.slug}`} className="view-case-study">
                    View Case Study <span className="arrow">→</span>
                  </Link>
                </div>
                <div className="project-image">
                  <img src={`/images/placeholder-${project.id}.jpg`} alt={project.title} className="grayscale-img" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="cta-explore-more">
            <Link to="/work" className="explore-more-button">
              Explore More Work <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Section - Enhanced design with two CTAs */}
      <section className="about-me-section section" id="about">
        <div className="container">
          <h2 className="section-title">Little About Me</h2>
          
          <div className="about-card">
            <div className="about-content">
              <div className="about-text-container">
                <p className="about-text">
                  I'm Anushka, a product designer with a passion for creating intuitive digital experiences that solve real problems. With a background in UX design and a curious mindset, I approach each project with empathy and attention to detail.
                </p>
                
                <p className="about-text">
                  Currently working as a UX Manager, I've spent the last 5 years collaborating with cross-functional teams to deliver impactful design solutions across various platforms. My process combines strategic thinking with creative execution to create experiences that are both beautiful and functional.
                </p>
                
                <div className="about-cta-group">
                  <a href="/Anushka Singh_UX Manager_Resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-button primary">
                    View my CV <span className="arrow">→</span>
                  </a>
                  <Link to="/contact" className="cta-button secondary">
                    Let's Talk <span className="arrow">→</span>
                  </Link>
                </div>
              </div>
              
              <div className="about-image-container">
                <div className="image-wrapper">
                  <img src="/images/profile-photo.jpg" alt="Anushka Singh" className="about-image" />
                  <div className="image-accent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section">
        <div className="container">
          <h2 className="section-title">Words From My Collaborators</h2>
          
          <div className="testimonials-container">
            <div className="testimonials-track">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div className="testimonial-card" key={`${testimonial.id}-${index}`}>
                  <div className="testimonial-content">
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-tags">
                      {testimonial.tags && testimonial.tags.map((tag, tagIndex) => (
                        <span className="tag" key={tagIndex}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img src={testimonial.avatar} alt={testimonial.author} />
                    </div>
                    <div className="author-info">
                      <p className="author-name">{testimonial.author}</p>
                      <p className="author-role">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Section - Updated for white background */}
      <section className="process-section section">
        <div className="container">
          <h2 className="section-title">How I Design</h2>
          
          <div className="process-principles">
            <div className="principle">
              <div className="principle-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="principle-text">Research with curiosity to gain full clarity</p>
            </div>
            
            <div className="principle">
              <div className="principle-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="principle-text">Design with empathy and build with precision</p>
            </div>
            
            <div className="principle">
              <div className="principle-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="principle-text">Turn setbacks into lessons and challenges into opportunities</p>
            </div>
            
            <div className="principle">
              <div className="principle-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <p className="principle-text">Test, refine, and raise the bar for next time</p>
            </div>
          </div>
          
          <div className="tools-container">
            <div className="tools-track">
              <div className="tool-chip">Slide Decks</div>
              <div className="tool-chip">Usability Testing</div>
              <div className="tool-chip">
                <img src="/images/tools/notion.svg" alt="Notion" />
                Notion
              </div>
              <div className="tool-chip">UI Design</div>
              <div className="tool-chip">UX Strategy</div>
              <div className="tool-chip">
                <img src="/images/tools/figma.svg" alt="Figma" />
                Figma
              </div>
              <div className="tool-chip">User Research</div>
              <div className="tool-chip">
                <img src="/images/tools/framer.svg" alt="Framer" />
                Framer
              </div>
              
              {/* Duplicate tools for infinite scrolling */}
              <div className="tool-chip">Slide Decks</div>
              <div className="tool-chip">Usability Testing</div>
              <div className="tool-chip">
                <img src="/images/tools/notion.svg" alt="Notion" />
                Notion
              </div>
              <div className="tool-chip">UI Design</div>
              <div className="tool-chip">UX Strategy</div>
              <div className="tool-chip">
                <img src="/images/tools/figma.svg" alt="Figma" />
                Figma
              </div>
              <div className="tool-chip">User Research</div>
              <div className="tool-chip">
                <img src="/images/tools/framer.svg" alt="Framer" />
                Framer
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage 