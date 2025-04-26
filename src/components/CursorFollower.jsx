import { useEffect, useState } from 'react'
import '../styles/components/CursorFollower.scss'

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    // Add a small delay for initial positioning to prevent weird jumps
    const timer = setTimeout(() => {
      setHidden(false);
    }, 300);
    
    const handleMouseMove = (e) => {
      // Use requestAnimationFrame for smoother updates
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    }
    
    const handleMouseLeave = () => {
      setHidden(true);
    }
    
    const handleMouseEnter = () => {
      setHidden(false);
    }
    
    const handleMouseDown = () => {
      setClicked(true);
    }
    
    const handleMouseUp = () => {
      setClicked(false);
    }
    
    const handleLinkHoverEvents = () => {
      const interactiveElements = document.querySelectorAll('a, button, .cta-button, .project-card, .testimonial-card');
      
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          setLinkHovered(true);
        });
        
        element.addEventListener('mouseleave', () => {
          setLinkHovered(false);
        });
      });
    }
    
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    handleLinkHoverEvents();
    
    return () => {
      // Restore default cursor
      document.body.style.cursor = 'auto';
      
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      clearTimeout(timer);
    }
  }, []);

  return (
    <div 
      className={`cursor-follower ${hidden ? 'hidden' : ''} ${clicked ? 'clicked' : ''} ${linkHovered ? 'link-hovered' : ''}`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px` 
      }}
    >
      {/* <div className="cursor-dot"></div>
      <div className="cursor-circle"></div> */}
    </div>
  )
}

export default CursorFollower 