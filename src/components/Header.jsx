import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/components/Header.scss'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  useEffect(() => {
    // Close menu when location changes
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    // Toggle body class when menu is open
    if (menuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }

    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [menuOpen])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-letter">A</span>
          </Link>
          
          <button 
            className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`} 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
          
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              <li className={location.pathname === '/work' ? 'active' : ''}>
                <Link to="/work" onClick={handleNavClick}>Work</Link>
              </li>
              <li className={location.pathname === '/about' ? 'active' : ''}>
                <Link to="/about" onClick={handleNavClick}>About</Link>
              </li>
              <li>
                <a 
                  href="/Anushka Singh_UX Manager_Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
              <li className={location.pathname === '/contact' ? 'active' : ''}>
                <Link to="/contact" onClick={handleNavClick}>Contact</Link>
              </li>
            </ul>
          </nav>
          
          <div className={`nav-bg ${menuOpen ? 'active' : ''}`}></div>
        </div>
      </div>
    </header>
  )
}

export default Header 