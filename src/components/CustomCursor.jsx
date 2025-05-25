import { useState, useEffect } from 'react'
import '../styles/components/CustomCursor.scss'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.body.style.cursor = 'none'
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.body.style.cursor = 'auto'
    }
  }, [])

  return (
    <div
      className={`custom-arrow-cursor${isVisible ? ' visible' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <svg className="cursor-arrow-svg" width="20" height="20" viewBox="0 0 20 20">
        <polygon
          points="2,2 18,9 11,11 9,18"
          fill="#8B5CF6"
          stroke="#fff"
          strokeWidth="2"
          filter="drop-shadow(0 1px 2px rgba(0,0,0,0.12))"
        />
      </svg>
      <div className="cursor-label">Hey, Nova</div>
    </div>
  )
}

export default CustomCursor 