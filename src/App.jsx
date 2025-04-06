import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import WorkPage from './pages/WorkPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProjectPage from './pages/ProjectPage'
import Header from './components/Header'
import Footer from './components/Footer'
import CursorFollower from './components/CursorFollower'
import ScrollToTop from './components/ScrollToTop'

// Add this line to test if inline styles work
import './styles/main.scss'

function App() {
  return (
    <Router>
      <div className="app" style={{ fontFamily: 'Arial, sans-serif' }}>
        <CursorFollower />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:slug" element={<ProjectPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
