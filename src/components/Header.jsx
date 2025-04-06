import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Header.scss'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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

    return () => {
      document.body.classList.remove('menu-open')
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
        top: section.offsetTop - 100, // Offset for header height
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <a href="#hero" className="logo" onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}>
            <span className="logo-letter">A</span>
          </a>
          
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
              <li>
                <a href="#work" onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('work')
                }}>Work</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('about')
                }}>About</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('contact')
                }}>Contact</a>
              </li>
            </ul>
          </nav>
          
          <a 
            href="/Anushka Singh_UX Manager_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="resume-cta"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header 