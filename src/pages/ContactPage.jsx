import { useState } from 'react'
import '../styles/pages/ContactPage.scss'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send the form data to your backend or a service like Formspree
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      setFormStatus({ submitted: true, error: false })
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Get in Touch</h1>
          <p className="page-description">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>
      </section>

      <section className="contact-section section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Let's Talk</h2>
              <p>
                Feel free to reach out if you want to collaborate with me, or simply have a chat.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <h3>Email</h3>
                  <p><a href="mailto:your.email@example.com">your.email@example.com</a></p>
                </div>
                
                <div className="contact-item">
                  <h3>Connect</h3>
                  <div className="social-links">
                    <a href="https://www.behance.net/singhanushka" target="_blank" rel="noopener noreferrer">Behance</a>
                    <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <h3>Location</h3>
                  <p>Mumbai, India</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              {formStatus.submitted ? (
                <div className="form-success">
                  <h2>Thank you for your message!</h2>
                  <p>I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-button">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage 