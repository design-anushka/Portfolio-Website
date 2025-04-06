import { useParams, Navigate, Link } from 'react-router-dom'
import { useEffect } from 'react'
import '../styles/pages/ProjectPage.scss'

// Project data with image URLs for case studies
const projectsData = {
  'epic-on': {
    title: 'Epic ON',
    caseStudyImage: '/images/epic-on-case-study.png'
  },
  'pebble-impact': {
    title: 'Pebble Impact Website',
    caseStudyImage: '/images/pebble-impact-case-study.png'
  },
  'corpcare': {
    title: 'Corpcare',
    caseStudyImage: '/images/corpcare-case-study.png'
  },
  'feedify': {
    title: 'Feedify',
    caseStudyImage: '/images/feedify-case-study.png'
  }
}

// For demo purposes, using placeholder images
const placeholderImages = {
  'epic-on': 'https://placehold.co/1080x7000/e2e8f0/334155?text=Epic+ON+Case+Study',
  'pebble-impact': 'https://placehold.co/1080x7000/e2e8f0/334155?text=Pebble+Impact+Case+Study',
  'corpcare': 'https://placehold.co/1080x7000/e2e8f0/334155?text=Corpcare+Case+Study',
  'feedify': 'https://placehold.co/1080x7000/e2e8f0/334155?text=Feedify+Case+Study'
}

const ProjectPage = () => {
  const { slug } = useParams()
  const project = projectsData[slug]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  // If project doesn't exist, redirect to work page
  if (!project) {
    return <Navigate to="/work" replace />
  }

  // Use actual case study image or fallback to placeholder
  const imageUrl = project.caseStudyImage || placeholderImages[slug]

  return (
    <div className="case-study-page">
      {/* Breadcrumb navigation */}
      <div className="breadcrumb-container">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="separator">/</span>
            <Link to="/#work">Work</Link>
            <span className="separator">/</span>
            <span className="current">{project.title}</span>
          </div>
        </div>
      </div>
      
      <div className="case-study-image-container">
        <img 
          src={imageUrl} 
          alt={`${project.title} Case Study`} 
          className="case-study-image"
        />
      </div>
    </div>
  )
}

export default ProjectPage 