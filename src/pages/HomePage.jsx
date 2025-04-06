import { Link } from 'react-router-dom'
import '../styles/pages/HomePage.scss'

const HomePage = () => {
  // Featured projects data
  const featuredProjects = [
    {
      id: 1,
      title: 'Epic ON',
      description: 'A video streaming platform designed for entertainment enthusiasts.',
      image: '/images/epic-on-case-study.png',
      type: 'UX/UI Design',
      tags: ['Product Design', 'Interaction Design'],
      slug: 'epic-on'
    },
    {
      id: 2,
      title: 'Pebble Impact Website',
      description: 'A website for a social impact organization focused on sustainability.',
      image: '/images/pebble-impact-case-study.png',
      type: 'Web Design',
      tags: ['Product Design', 'Web Design', 'Branding'],
      slug: 'pebble-impact'
    },
    {
      id: 3,
      title: 'Corpcare',
      description: 'A corporate care platform helping businesses manage employee wellness.',
      image: '/images/corpcare-case-study.png',
      type: 'Product Design',
      tags: ['Product Design', 'Interaction Design'],
      slug: 'corpcare'
    },
    {
      id: 4,
      title: 'Feedify',
      description: 'A social media feed management application with advanced filtering capabilities.',
      image: '/images/feedify-case-study.png',
      type: 'Mobile App Design',
      tags: ['UX Design', 'Mobile App'],
      slug: 'feedify'
    }
  ]

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      text: "Working with Anushka was an absolute pleasure. Her design sensibilities are unmatched!",
      author: "John Doe",
      role: "Product Manager, XYZ Company"
    },
    {
      id: 2,
      text: "Anushka's ability to understand user needs and translate them into beautiful designs is remarkable.",
      author: "Jane Smith",
      role: "CEO, ABC Startup"
    },
    {
      id: 3,
      text: "One of the most talented designers I've worked with. Her attention to detail is impressive.",
      author: "Michael Johnson",
      role: "Design Lead, Tech Corp"
    },
    {
      id: 4,
      text: "Anushka brought a fresh perspective to our project and delivered beyond our expectations.",
      author: "Sarah Williams",
      role: "Marketing Director, Brand Co"
    },
    {
      id: 5,
      text: "Collaborative, innovative, and extremely skilled. Working with Anushka elevated our product.",
      author: "David Brown",
      role: "Founder, Innovation Labs"
    }
  ]

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-greeting">Hi, I'm <span className="highlight">Anushka!</span> 👋</h1>
            <p className="hero-description">
              A designer crafting impactful digital experiences that quietly enhance daily life and leave a lasting trace of positive change.
            </p>
            <p className="hero-status">
              Actively seeking full-time opportunity | Immediate Joiner
              <br />
              Previously worked with Fluidesigns, Cognizant
            </p>
            <div className="cta-wrapper">
              <Link to="/work" className="cta-button">
                Explore my work <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About section (brief) */}
      <section className="about-brief section">
        <div className="container">
          <div className="about-brief-grid">
            <div className="about-brief-content">
              <h2 className="section-title">A little about me 🙋🏻‍♀️</h2>
              <p className="about-text">
                As a designer with a passion for user-centered experiences, I blend creativity with strategy to design products that solve real problems.
              </p>
              <p className="about-text">
                My background in UX/UI design has given me strong foundations in research, interaction design, and visual design across multiple domains.
              </p>
              <Link to="/about" className="text-link">
                Read more about me <span className="arrow">→</span>
              </Link>
            </div>
            <div className="brands-worked-with">
              <h3 className="brands-title">Brands & Institutions that chose to trust my work</h3>
              <div className="brands-grid">
                <div className="brand-logo">Fluidesigns</div>
                <div className="brand-logo">Cognizant</div>
                <div className="brand-logo">Client 3</div>
                <div className="brand-logo">Client 4</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className="work-section section">
        <div className="container">
          <h2 className="section-title">Some of my handpicked work ✨</h2>
          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <div className={`project-card ${index === 0 ? 'featured' : ''}`} key={project.id}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <Link to={`/work/${project.slug}`} className="project-link">
                      View Case Study
                    </Link>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span className="project-tag" key={tagIndex}>{tag}</span>
                    ))}
                  </div>
                  <Link to={`/work/${project.slug}`} className="text-link">
                    View Case Study <span className="arrow">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="cta-wrapper center">
            <Link to="/work" className="cta-button">
              Explore More Work <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section">
        <div className="container">
          <h2 className="section-title">What People Say</h2>
          <div className="testimonials-container">
            <div className="testimonials-track">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div className="testimonial-card" key={`${testimonial.id}-${index}`}>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <p className="author-name">{testimonial.author}</p>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="process-section section">
        <div className="container">
          <h2 className="section-title">How I Design</h2>
          <div className="process-grid">
            <div className="process-card">
              <h3 className="process-step">01. Research</h3>
              <p className="process-description">
                I dive deep into understanding your brand's voice, purpose, business requirements, competition, and users' needs. This helps me design an experience that creates impact.
              </p>
            </div>
            <div className="process-card">
              <h3 className="process-step">02. Define</h3>
              <p className="process-description">
                I create user personas, user stories, user flow, and product flow that bridges the gap between users' needs and business goals.
              </p>
            </div>
            <div className="process-card">
              <h3 className="process-step">03. Ideate</h3>
              <p className="process-description">
                I generate ideas that address business requirements and user needs. I consider both conventional and creative ways to solve the problems.
              </p>
            </div>
            <div className="process-card">
              <h3 className="process-step">04. Design</h3>
              <p className="process-description">
                I create low to high fidelity interactive prototypes based on brand guidelines and design languages that sync with your product.
              </p>
            </div>
            <div className="process-card">
              <h3 className="process-step">05. Test</h3>
              <p className="process-description">
                I test the solutions through usability testing and heuristic analysis to spot areas of improvement early on.
              </p>
            </div>
            <div className="process-card">
              <h3 className="process-step">06. Implement</h3>
              <p className="process-description">
                I work closely with developers to ensure that the design is implemented correctly and deliver handoff documentation for a smooth transition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="contact-cta-section">
        <div className="container">
          <div className="contact-cta-content">
            <h2 className="contact-cta-title">Let's make something <span className="highlight">together.</span></h2>
            <p className="contact-cta-text">I'm currently available for freelance work and full-time opportunities.</p>
            <Link to="/contact" className="cta-button">
              Get in Touch <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage 