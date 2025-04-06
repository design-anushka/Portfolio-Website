import { Link } from 'react-router-dom'
import '../styles/components/Footer.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <h2 className="footer-heading">Bridging the gap <br/> between pixels and people.</h2>
            <div className="footer-links">
              <a href="mailto:your.email@example.com" className="footer-link">Give me a call</a>
              <a href="mailto:your.email@example.com" className="footer-link">Send me an email</a>
              <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="footer-link">Connect on LinkedIn</a>
            </div>
            <a href="/Anushka Singh_UX Manager_Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
              Download my Resume
            </a>
          </div>
          
          <div className="footer-secondary">
            <div className="footer-logo">
              <span className="name">Anushka Singh</span>
            </div>
            <nav className="footer-nav">
              <ul className="footer-nav-list">
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/work">Work</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {currentYear} Anushka Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 