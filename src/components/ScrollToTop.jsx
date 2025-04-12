import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // When the route changes, scroll to top with smooth animation
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [pathname])

  // No UI to render - just scroll behavior
  return null
}

export default ScrollToTop 