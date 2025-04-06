import { useState, useEffect } from 'react'
import '../styles/components/ScrollToTop.scss'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { pathname } = useLocation()

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  useEffect(() => {
    // When the route changes, scroll to top with smooth animation
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [pathname])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          className="scroll-to-top"
          aria-label="Scroll to top"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5L5 12H19L12 5Z" fill="currentColor" />
          </svg>
        </button>
      )}
    </>
  )
}

export default ScrollToTop 