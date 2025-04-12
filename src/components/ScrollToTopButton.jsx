import { useState, useEffect } from 'react';
import '../styles/components/ScrollToTopButton.scss';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFading, setIsFading] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsFading(false); // Reset the fading state
      setIsVisible(true);
    } else {
      // Add a fade-out transition
      if (isVisible) {
        setIsFading(true);
        // Wait for animation to complete before hiding
        setTimeout(() => {
          setIsVisible(false);
          setIsFading(false);
        }, 300); // Match this with the CSS transition duration
      }
    }
  };

  // Scroll to top smooth function
  const scrollToTop = () => {
    // Start fade out animation when clicked
    setIsFading(true);
    
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Hide button after animation completes
    setTimeout(() => {
      setIsVisible(false);
      setIsFading(false);
    }, 300);
  };

  useEffect(() => {
    // Check the initial scroll position when component mounts
    toggleVisibility();
    
    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [isVisible]); // Add isVisible to dependency array

  return (
    <button 
      className={`scroll-to-top ${isVisible ? 'visible' : ''} ${isFading ? 'fade-out' : ''}`} 
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="17 11 12 6 7 11"></polyline>
        <polyline points="17 18 12 13 7 18"></polyline>
      </svg>
    </button>
  );
};

export default ScrollToTopButton; 