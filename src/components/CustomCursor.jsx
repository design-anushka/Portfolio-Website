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
      <div className="cursor-label">Hey, Nova</div>
    </div>
  )
}

export default CustomCursor 