import { useEffect, useState } from 'react'
import '../styles/components/CursorFollower.scss'

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      if (hidden) setHidden(false)
    }
    
    const handleMouseLeave = () => {
      setHidden(true)
    }
    
    const handleMouseEnter = () => {
      setHidden(false)
    }
    
    const handleMouseDown = () => {
      setClicked(true)
    }
    
    const handleMouseUp = () => {
      setClicked(false)
    }
    
    const handleLinkHoverEvents = () => {
      const links = document.querySelectorAll('a, button')
      
      links.forEach(link => {
        link.addEventListener('mouseenter', () => {
          setLinkHovered(true)
        })
        
        link.addEventListener('mouseleave', () => {
          setLinkHovered(false)
        })
      })
    }
    
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    
    handleLinkHoverEvents()
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [hidden])

  return (
    <div 
      className={`cursor-follower ${hidden ? 'hidden' : ''} ${clicked ? 'clicked' : ''} ${linkHovered ? 'link-hovered' : ''}`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px` 
      }}
    >
      <div className="cursor-dot"></div>
      <div className="cursor-circle"></div>
    </div>
  )
}

export default CursorFollower 