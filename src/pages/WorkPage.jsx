import { Link } from 'react-router-dom'
import '../styles/pages/WorkPage.scss'

const WorkPage = () => {
  // Updated projects data with images from the images folder
  const projects = [
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
      image: '/images/corpcare-case-study1.png',
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

  return (
    <div className="work-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">My Work</h1>
          <p className="page-description">
            Explore my design projects and case studies. Each project reflects my passion for creating 
            meaningful and impactful digital experiences.
          </p>
        </div>
      </section>

      <section className="projects-section section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.id}>
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
        </div>
      </section>

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

export default WorkPage 