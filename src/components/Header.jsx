import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/components/Header.scss'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const headerRef = useRef(null)
  
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
    // Toggle body class when menu is open
    if (menuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }

    // Add click outside listener when menu is open
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }
    
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    
    return () => {
      document.body.classList.remove('menu-open')
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    setMenuOpen(false) // Close mobile menu if open
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for header height
        behavior: 'smooth'
      })
    }
  }

  // Add effect to handle hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const sectionId = hash.substring(1) // Remove the # symbol
        setTimeout(() => scrollToSection(sectionId), 100) // Small delay to ensure DOM is ready
      }
    }

    // Handle initial load with hash
    handleHashChange()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Handle navigation from case study pages
  const handleNavigation = (sectionId) => {
    if (isHomePage) {
      // If on homepage, just scroll
      scrollToSection(sectionId)
    } else {
      // If on another page, navigate to homepage with hash
      window.location.href = `/#${sectionId}`
    }
  }

  // Logo click handler - conditional based on current page
  const handleLogoClick = (e) => {
    if (isHomePage) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    // If not homepage, Link component handles routing
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} ref={headerRef}>
      <div className="container">
        <div className="header-content">
          {isHomePage ? (
            <a href="#hero" className="logo" onClick={handleLogoClick}>
              <span className="logo-letter">A</span>
            </a>
          ) : (
            <Link to="/" className="logo">
              <span className="logo-letter">A</span>
            </Link>
          )}
          
          <button 
            className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`} 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
          
          {/* Wrap nav and resume in a container */}
          <div className="header-right">
            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
              <ul className="nav-list">
                <li>
                  <a href="#work" onClick={(e) => {
                    e.preventDefault()
                    handleNavigation('work')
                  }}>Work</a>
                </li>
                <li>
                  <a href="#about" onClick={(e) => {
                    e.preventDefault()
                    handleNavigation('about')
                  }}>About</a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => {
                    e.preventDefault()
                    handleNavigation('contact')
                  }}>Contact</a>
                </li>
              </ul>
              
              {/* Add resume link to mobile menu */}
              <div className="resume-link-mobile">
                <a 
                  href="/images/Anushka_UIUX_Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </div>
            </nav>
            
            <a 
              href="/images/Anushka_UIUX_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="resume-cta"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 