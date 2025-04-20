import { Link } from 'react-router-dom'
import '../styles/pages/HomePage.scss'
import { useEffect, useRef, useState } from 'react'

const HomePage = () => {
  // Featured projects data
  const featuredProjects = [
    {
      id: 1,
      title: 'Epic ON',
      description: 'Transforming EPIC ON\'s experience by reimagining the entire platform with immersive content discovery, behavioral insights, and responsive interactions—creating a streaming ecosystem that adapts to users, not the other way around.',
      tags: ['OTT', 'Mobile App, Web App, TV App, Tablet App'],
      slug: 'epic-on'
    },
    {
      id: 2,
      title: 'Pebble Impact Website',
      description: 'Redesigned Pebble\'s website with clean layouts and interactive product displays, making it easier for customers to understand the product range and find their ideal wearable tech through intuitive navigation and clear, benefit-focused product descriptions.',
      tags: ['Branding', 'Web Design', 'Nonprofit'],
      slug: 'pebble-impact'
    },
    {
      id: 3,
      title: 'Corpcare',
      description: 'Revamping CorpCare\'s investment platform with intuitive navigation and simplified order placement flows, making complex financial decisions approachable for high-net-worth individuals while providing clear visibility into portfolio performance and opportunities.',
      tags: ['Platform Revamp - UI/UX', 'Fintech'],
      slug: 'corpcare'
    },
    {
      id: 4,
      title: 'Feedify',
      description: 'Designed an interactive, conversion-focused experience with intuitive flows, modular components, and personalised touchpoints to drive user action and engagement.',
      tags: ['UI/UX', 'Reponsive Website Design', 'B2B Sales Enablement'],
      slug: 'feedify'
    }
  ]

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      text: "Working with Anushka was an absolute pleasure. Her design sensibilities are unmatched!",
      author: "John Doe",
      role: "Product Manager, XYZ Company",
      tags: ["Innovative", "Detail-oriented", "Strategic"],
      avatar: "/images/avatars/avatar-1.png"
    },
    {
      id: 2,
      text: "Anushka's ability to understand user needs and translate them into beautiful designs is remarkable.",
      author: "Jane Smith",
      role: "CEO, ABC Startup",
      tags: ["Empathetic", "Creative", "Analytical"],
      avatar: "/images/avatars/avatar-2.png"
    },
    {
      id: 3,
      text: "One of the most talented designers I've worked with. Her attention to detail is impressive.",
      author: "Michael Johnson",
      role: "Design Lead, Tech Corp",
      tags: ["Talented", "Visionary", "Collaborative"],
      avatar: "/images/avatars/avatar-3.png"
    },
    {
      id: 4,
      text: "Anushka brought a fresh perspective to our project and delivered beyond our expectations.",
      author: "Sarah Williams",
      role: "Marketing Director, Brand Co",
      tags: ["Innovative", "Reliable", "Insightful"],
      avatar: "/images/avatars/avatar-4.png"
    },
    {
      id: 5,
      text: "Collaborative, innovative, and extremely skilled. Working with Anushka elevated our product.",
      author: "David Brown",
      role: "Founder, Innovation Labs",
      tags: ["Skilled", "Adaptable", "Forward-thinking"],
      avatar: "/images/avatars/avatar-5.png"
    }
  ]

  const PhotoGalleryRef = useRef(null);
  const ctaButtonRef = useRef(null);

  // Add a useEffect at the beginning of your component to determine screen size
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Function to check if screen is desktop size
    const checkScreenSize = () => {
      const mediaQuery = window.matchMedia('(min-width: 1024px)'); // 1024px is typically desktop breakpoint
      setIsDesktop(mediaQuery.matches);
    };
    
    // Check on component mount
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const slider = PhotoGalleryRef.current;
    if (!slider) return;
    
    let isDown = false;
    let startX;
    let scrollLeft;
    
    const mouseDown = (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };
    
    const mouseLeave = () => {
      isDown = false;
      slider.classList.remove('active');
    };
    
    const mouseUp = () => {
      isDown = false;
      slider.classList.remove('active');
    };
    
    const mouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed
      slider.scrollLeft = scrollLeft - walk;
    };
    
    // Touch events for mobile
    const touchStart = (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.touches[0].pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };
    
    const touchMove = (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };
    
    slider.addEventListener('mousedown', mouseDown);
    slider.addEventListener('mouseleave', mouseLeave);
    slider.addEventListener('mouseup', mouseUp);
    slider.addEventListener('mousemove', mouseMove);
    
    slider.addEventListener('touchstart', touchStart);
    slider.addEventListener('touchend', mouseUp);
    slider.addEventListener('touchmove', touchMove);
    
    return () => {
      slider.removeEventListener('mousedown', mouseDown);
      slider.removeEventListener('mouseleave', mouseLeave);
      slider.removeEventListener('mouseup', mouseUp);
      slider.removeEventListener('mousemove', mouseMove);
      
      slider.removeEventListener('touchstart', touchStart);
      slider.removeEventListener('touchend', mouseUp);
      slider.removeEventListener('touchmove', touchMove);
    };
  }, []);

  useEffect(() => {
    const button = ctaButtonRef.current;
    if (!button) return;
    
    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      
      // Get mouse position relative to the button
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      // Calculate position relative to button center
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate offset from center
      const offsetX = (mouseX - centerX) / centerX;
      const offsetY = (mouseY - centerY) / centerY;
      
      // Apply a more pronounced shadow effect
      const shadowX = -offsetX * 15;
      const shadowY = -offsetY * 15;
      const blur = 20;
      
      // Direct shadow manipulation with specific colors (no variables)
      button.style.boxShadow = `
        0 4px 10px rgba(0, 0, 0, 0.1),
        ${shadowX}px ${shadowY}px ${blur}px rgba(67, 97, 238, 0.5),
        ${-shadowX}px ${-shadowY}px ${blur}px rgba(124, 58, 237, 0.5)
      `;
    };
    
    const handleMouseLeave = () => {
      // Reset to a subtle shadow when not hovering
      button.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    };
    
    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section with updated CTA and non-highlighted Immediate Joiner */}
      <section className="hero-section" id="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <a href="#about" 
                className="hero-title-link"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                }}>
                <span className="hero-title-part">I'm Anushka,</span>
              </a>
              <span className="hero-description-part"> a designer crafting impactful digital experiences that quietly enhance daily life and leave a lasting trace of positive change.</span>
            </h1>
            
            <div className="hero-actions-wrapper">
              <div className="hero-actions">
                <div className="hero-cta">
                  <a 
                    href="#work" 
                    className="cta-button" 
                    ref={ctaButtonRef}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('work').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                    }}
                  >
                    Explore my work <span className="button-arrow">→</span>
                  </a>
                </div>
                
                <div className="hero-status">
                  <p className="status-text">Actively seeking full-time opportunity | <span className="highlight">Immediate Joiner</span></p>
                  <p className="previous-text">Previously worked with Fluidesigns, Cognizant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section with updated card styles and hover effects */}
      <section className="work-section section" id="work">
        <div className="container">
          <h2 className="section-title">Some of my handpicked work</h2>
          
          <div className="projects-container">
            {featuredProjects.map((project) => (
              <Link to={`/work/${project.slug}`} className="project-card-link" key={project.id}>
                <div className="project-card">
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-tags">
                      {project.tags.map((tag, tagIndex) => (
                        <span className="tag" key={tagIndex}>{tag}</span>
                      ))}
                    </div>
                    
                    <div className="view-case-study">
                      View Case Study <span className="arrow">→</span>
                    </div>
                  </div>
                  <div className="project-image">
                    <img src={`/images/${project.id}.png`} alt={project.title} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about-me-section section" id="about">
        <div className="container">
          <h2 className="section-title">Little About Me</h2>
          
          <div className="about-card">
            <div className="about-content">
              <div className="about-text-container">
                {/* <p className="about-text">
                  After completing my B.Tech in CSE, I began in QA, developing a strong foundation in product functionality, user flows, and edge cases. This sharpened my analytical skills and sparked a deeper interest in user behaviour and experience.
                </p>
                
                <p className="about-text">
                  Over the past 5 years, I've transitioned into UX design, applying empathy and problem-solving across research, information architecture, wireframing, and strategy to create intuitive experiences that simplify complexity.
                </p>
                
                <p className="about-text">
                  What drives me?
                  <br />– Solving real-world problems through thoughtful design
                  <br />– Creating seamless journeys backed by research
                  <br />– Bringing clarity to complexity with clean workflows
                </p> */}

                <p className="about-text">
                  After my B.Tech in CSE, I began in QA, building a strong foundation in product functionality and user flows. It sharpened my analytical skills and sparked a passion for user experience.
                </p>

                <p className="about-text">
                  For the past 5 years, I've worked in UX design—applying empathy and problem-solving across research, IA, wireframing, and strategy to craft intuitive, user-first solutions.
                </p>

                <p className="about-text">
                  What drives me?
                  <br />– Solving real problems through design
                  <br />– Research-backed, seamless journeys
                  <br />– Clarity through clean, simple workflows
                </p>

                
                <div className="about-cta-group">
                  <a href="/images/Anushka_UIUX_Resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-button primary">
                    View my Resume <span className="arrow">→</span>
                  </a>
                  <a 
                    href="#contact" 
                    className="cta-button secondary"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                    }}
                  >
                    Let's Talk <span className="arrow">→</span>
                  </a>
                </div>
              </div>
              
              <div className="about-image-container">
                <div className="image-wrapper" style={isDesktop ? {padding: "20%"} : {}}>
                  <img src="/images/profile-photo.jpg" alt="Anushka Singh" className="about-image" />
                  <div className="image-accent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section">
        <div className="container">
          <h2 className="section-title">Few Kind Words From My Collaborators</h2>
          
          <div className="testimonials-container">
            <div className="testimonials-track">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div className="testimonial-card" key={`${testimonial.id}-${index}`}>
                  <div className="testimonial-content">
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-tags">
                      {testimonial.tags && testimonial.tags.map((tag, tagIndex) => (
                        <span className="tag" key={tagIndex}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img src={testimonial.avatar} alt={testimonial.author} />
                    </div>
                    <div className="author-info">
                      <p className="author-name">{testimonial.author}</p>
                      <p className="author-role">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Section with updated styles */}
      <section className="process-section section" id="process">
        <div className="container">
          <h2 className="section-title">How I Design</h2>
          
          <div className="process-principles">
            <div className="principle">
              <div className="principle-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="principle-text">Research with curiosity to gain full clarity</p>
            </div>
            
            <div className="principle">
              <div className="principle-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="principle-text">Design with empathy and build with precision</p>
            </div>
            
            <div className="principle">
              <div className="principle-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="principle-text">Turn setbacks into lessons and challenges into opportunities</p>
            </div>
            
            <div className="principle">
              <div className="principle-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <p className="principle-text">Test, refine, and raise the bar for next time</p>
            </div>
          </div>
          
          <div className="tools-container">
            <div className="tools-track">
              <div className="tool-chip">Figma</div>
              <div className="tool-chip">UX Design</div>
              <div className="tool-chip">Usability Testing</div>
              <div className="tool-chip">Mobile App</div>
              <div className="tool-chip">Heuristic Evaluation</div>
              <div className="tool-chip">Information Architecture</div>
              <div className="tool-chip">Card Sorting</div>
              <div className="tool-chip">Journey Mapping</div>
              <div className="tool-chip">Prototyping</div>
              <div className="tool-chip">Design Strategy</div>
              
              {/* Duplicate tools for infinite scrolling */}
              <div className="tool-chip">Figma</div>
              <div className="tool-chip">UX Design</div>
              <div className="tool-chip">Usability Testing</div>
              <div className="tool-chip">Mobile App</div>
              <div className="tool-chip">Heuristic Evaluation</div>
              <div className="tool-chip">Information Architecture</div>
              <div className="tool-chip">Card Sorting</div>
              <div className="tool-chip">Journey Mapping</div>
              <div className="tool-chip">Prototyping</div>
              <div className="tool-chip">Design Strategy</div>
            </div>
          </div>
        </div>
      </section>

      {/* When I'm Not... Section - Updated with vertical wooden clothespin clips */}
      {/* <section className="when-im-not-section section">
        <div className="container">
          <h2 className="section-title">When I'm not designing</h2>
          
          <div className="photo-gallery-container">
            <div className="photo-gallery-track">
              {/* First set of photos with updated vertical clips */}
              {/* <div className="photo-item">
                <div className="photo-clip">
                  <div className="divider"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                </div>
                <div className="photo-frame">
                  <img src="/images/hobbies/hiking.jpg" alt="Being Candid" />
                  <div className="photo-caption">
                    <p className="caption-title">Being Candid</p>
                    <p className="caption-location">Dang falls, Gujarat</p>
                  </div>
                </div>
              </div>
              
              <div className="photo-item">
                <div className="photo-clip">
                  <div className="divider"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                </div>
                <div className="photo-frame">
                  <img src="/images/hobbies/photography.jpg" alt="Having an headache" />
                  <div className="photo-caption">
                    <p className="caption-title">Having an headache</p>
                    <p className="caption-location">Dang falls, Gujarat</p>
                  </div>
                </div>
              </div>
              
              <div className="photo-item">
                <div className="photo-clip">
                  <div className="divider"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                </div>
                <div className="photo-frame">
                  <img src="/images/hobbies/beach.jpg" alt="Bonding with brother" />
                  <div className="photo-caption">
                    <p className="caption-title">Bonding with brother</p>
                    <p className="caption-location">Valley of Flowers</p>
                  </div>
                </div>
              </div>
              
              <div className="photo-item">
                <div className="photo-clip">
                  <div className="divider"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                </div>
                <div className="photo-frame">
                  <img src="/images/hobbies/reading.jpg" alt="Chilling at 12000 ft" />
                  <div className="photo-caption">
                    <p className="caption-title">Chilling at 12000 ft</p>
                    <p className="caption-location">Chandrashila</p>
                  </div>
                </div>
              </div>
              
              <div className="photo-item">
                <div className="photo-clip">
                  <div className="divider"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                </div>
                <div className="photo-frame">
                  <img src="/images/hobbies/cooking.jpg" alt="Near to death" />
                  <div className="photo-caption">
                    <p className="caption-title">Near to death</p>
                    <p className="caption-location">Mana village</p>
                  </div>
                </div>
              </div>
              
              <div className="photo-item">
                <div className="photo-clip">
                  <div className="divider"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                </div>
                <div className="photo-frame">
                  <img src="/images/hobbies/travel.jpg" alt="Being the main character" />
                  <div className="photo-caption">
                    <p className="caption-title">Being the main character</p>
                    <p className="caption-location">Pondicherry</p>
                  </div>
                </div>
              </div>
              
              {/* Duplicate photos for continuous scrolling */}
              {/* <div className="photo-item">
                <div className="photo-clip">
                  <div className="divider"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                </div>
                <div className="photo-frame">
                  <img src="/images/hobbies/hiking.jpg" alt="Being Candid" />
                  <div className="photo-caption">
                    <p className="caption-title">Being Candid</p>
                    <p className="caption-location">Dang falls, Gujarat</p>
                  </div>
                </div>
              </div>
              
              {/* Remaining duplicated items with vertical clips */}
                           {/* Remaining duplicated items with vertical clips */}
                           {/* <div className="photo-item">
                <div className="photo-clip">
                  <div className="divider"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                </div>
                <div className="photo-clip"></div>
                <div className="photo-frame">
                  <img src="/images/hobbies/photography.jpg" alt="Having an headache" />
                  <div className="photo-caption">
                    <p className="caption-title">Having an headache</p>
                    <p className="caption-location">Dang falls, Gujarat</p>
                  </div>
                </div>
              </div>
              
              <div className="photo-item">
                <div className="photo-clip"></div>
                <div className="photo-frame">
                  <img src="/images/hobbies/beach.jpg" alt="Bonding with brother" />
                  <div className="photo-caption">
                    <p className="caption-title">Bonding with brother</p>
                    <p className="caption-location">Valley of Flowers</p>
                  </div>
                </div>
              </div>
              
              <div className="photo-item">
                <div className="photo-clip"></div>
                <div className="photo-frame">
                  <img src="/images/hobbies/reading.jpg" alt="Chilling at 12000 ft" />
                  <div className="photo-caption">
                    <p className="caption-title">Chilling at 12000 ft</p>
                    <p className="caption-location">Chandrashila</p>
                  </div>
                </div>
              </div>
              
              <div className="photo-item">
                <div className="photo-clip"></div>
                <div className="photo-frame">
                  <img src="/images/hobbies/cooking.jpg" alt="Near to death" />
                  <div className="photo-caption">
                    <p className="caption-title">Near to death</p>
                    <p className="caption-location">Mana village</p>
                  </div>
                </div>
              </div>
              
              <div className="photo-item"> */}
                {/* <div className="photo-clip"></div>
                <div className="photo-frame">
                  <img src="/images/hobbies/travel.jpg" alt="Being the main character" />
                  <div className="photo-caption">
                    <p className="caption-title">Being the main character</p>
                    <p className="caption-location">Pondicherry</p>
                  </div>
                </div> */}
              {/* </div> */}
            {/*</div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default HomePage 