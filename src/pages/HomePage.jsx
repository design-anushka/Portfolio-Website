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
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <Link to="/about" className="hero-title-wrapper">
              <h1 className="hero-title">
                <span className="hero-title-part">I'm Anushka,</span> <span className="hero-description-part">a curious engineer turned product designer, IITR grad and amateur artist.</span>
              </h1>
            </Link>
            
            <div className="hero-actions-wrapper">
              <div className="hero-actions">
                <div className="hero-cta">
                  <Link to="/work" className="cta-button">
                    Explore my work <span className="arrow">→</span>
                  </Link>
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

      {/* Work Section - Redesigned to match Tejasswin's site with horizontal layout */}
      <section className="work-section section">
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

      {/* Contact CTA Section - With contact options instead of single CTA */}
      <section className="contact-cta-section">
        <div className="container">
          <div className="contact-cta-content">
            <p className="contact-cta-tagline">I'M JUST A MAIL AWAY</p>
            <h2 className="contact-cta-title">
              <span className="title-part">Best design experiences,</span> 
              <span className="highlight-wrapper">
                <span className="highlight-text">hum bhi bana lenge!</span>
                <span className="emoji">😎</span>
              </span>
            </h2>
            <p className="contact-cta-text">Let's make something together.</p>
            
            {/* Contact options replacing the single CTA button */}
            <div className="contact-options">
              <a href="tel:+1234567890" className="contact-option">
                <span className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </span>
                Give me a call
              </a>
              
              <a href="mailto:hello@anushkasingh.com" className="contact-option">
                <span className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                Send me an email
              </a>
              
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-option">
                <span className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </span>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage 