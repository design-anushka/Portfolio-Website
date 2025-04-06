import { Link } from 'react-router-dom'
import '../styles/components/ProjectLayout.scss'

const ProjectLayout = ({ project }) => {
  return (
    <div className="project-layout">
      <div className="project-hero">
        <div className="container">
          <div className="project-header">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-description">{project.description}</p>
          </div>
          <div className="project-meta">
            <div className="meta-item">
              <h3>Client</h3>
              <p>{project.client}</p>
            </div>
            <div className="meta-item">
              <h3>Role</h3>
              <p>{project.role}</p>
            </div>
            <div className="meta-item">
              <h3>Duration</h3>
              <p>{project.duration}</p>
            </div>
            <div className="meta-item">
              <h3>Year</h3>
              <p>{project.year}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="project-banner">
        <img src={project.banner || '/images/placeholder-banner.jpg'} alt={project.title} />
      </div>
      
      <div className="project-content">
        <div className="container">
          {project.sections.map((section, index) => (
            <div className="project-section" key={index}>
              <h2 className="section-title">{section.title}</h2>
              {section.content.map((content, contentIndex) => (
                <div key={contentIndex}>
                  {content.type === 'text' && (
                    <p className="section-text">{content.value}</p>
                  )}
                  {content.type === 'image' && (
                    <div className="section-image">
                      <img src={content.value} alt={content.alt || 'Project image'} />
                      {content.caption && <p className="image-caption">{content.caption}</p>}
                    </div>
                  )}
                  {content.type === 'list' && (
                    <ul className="section-list">
                      {content.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {content.type === 'quote' && (
                    <blockquote className="section-quote">
                      <p>{content.value}</p>
                      {content.author && <cite>{content.author}</cite>}
                    </blockquote>
                  )}
                </div>
              ))}
            </div>
          ))}
          
          <div className="project-navigation">
            <h3>More Projects</h3>
            <div className="navigation-links">
              {project.prevProject && (
                <Link to={`/work/${project.prevProject.slug}`} className="prev-project">
                  <span className="nav-label">Previous</span>
                  <span className="nav-title">{project.prevProject.title}</span>
                </Link>
              )}
              {project.nextProject && (
                <Link to={`/work/${project.nextProject.slug}`} className="next-project">
                  <span className="nav-label">Next</span>
                  <span className="nav-title">{project.nextProject.title}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectLayout 