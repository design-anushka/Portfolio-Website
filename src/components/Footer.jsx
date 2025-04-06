import React, { useState } from 'react';
import '../styles/components/Footer.scss';

const Footer = () => {
  const [showPhonePopup, setShowPhonePopup] = useState(false);
  const phoneNumber = "+91-9266435534";
  
  // Format phone number for WhatsApp (remove non-numeric characters)
  const whatsappNumber = phoneNumber.replace(/\D/g, '');
  
  return (
    <footer className="footer">
      {/* Contact CTA Section */}
      <div className="contact-cta-section" id="contact">
        <div className="container">
          <div className="contact-cta-content">
            <p className="contact-cta-tagline">I'M JUST A MAIL AWAY</p>
            <h2 className="contact-cta-title">
              <span className="title-part">Best digital experiences,</span> 
              <span className="highlight-wrapper">
                <span className="highlight-text">hum bhi bana lenge!</span>
                <span className="emoji">😎</span>
              </span>
            </h2>
            <p className="contact-cta-text">Let's make something together.</p>
            
            {/* Contact options */}
            <div className="contact-options">
              {/* Changed to button to show popup instead of linking */}
              <button 
                className="contact-option"
                onClick={() => setShowPhonePopup(true)}
              >
                <span className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </span>
                Give me a call
              </button>
              
              <a href="mailto:hello@anushkasingh.com" className="contact-option">
                <span className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                Send me an email
              </a>
              
              <a 
                href="https://www.linkedin.com/in/singhanushka21/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-option"
              >
                <span className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </span>
                Connect on LinkedIn
              </a>
            </div>
            
            {/* Phone popup */}
            {showPhonePopup && (
              <div className="phone-popup">
                <div className="popup-content">
                  <button 
                    className="close-popup"
                    onClick={() => setShowPhonePopup(false)}
                  >
                    ×
                  </button>
                  <h3 className="popup-title">Contact Information</h3>
                  <p className="popup-message">You can reach me directly at:</p>
                  <p className="phone-number">{phoneNumber}</p>
                  <div className="popup-actions">
                    <a 
                      href={`tel:${phoneNumber}`} 
                      className="popup-action call"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                      Call
                    </a>
                    <a 
                      href={`https://wa.me/${whatsappNumber}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="popup-action whatsapp"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            )}
            
            {/* Container-width divider */}
            <div className="footer-divider"></div>
            
            {/* Bottom section */}
            <div className="footer-bottom">
              <div className="footer-content">
                <div className="footer-copyright">
                  <p>© 2023 Anushka Singh. All rights reserved.</p>
                </div>
                <div className="footer-links">
                  <a 
                    href="/Anushka Singh_UX Manager_Resume.pdf" 
                    download="Anushka Singh_UX Manager_Resume.pdf"
                    className="download-resume"
                  >
                    Download Resume <span className="arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 