import { Link } from 'react-router-dom'
import '../styles/pages/HomePage.scss'
import { useEffect, useRef, useState } from 'react'

const projectExternalLinks = {
  'epic-on': 'https://www.epicon.in/',
  'pebble-impact': 'https://www.pebbleimpact.com/',
  'corpcare': 'https://corpcare.co.in/',
  'feedify': 'https://feedify.net/',
}

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

  // Add state for tracking which testimonial popup is open
  const [openPopupId, setOpenPopupId] = useState(null);
  
  // Updated testimonials data with the new content
  const testimonials = [
    {
      id: 1,
      shortText: "Working with Anushka was an absolute delight. She has excellent communication skills and never hesitates to speak up when an opinion is needed. She's confident in her commitments and consistently meets deadlines.",
      fullText: "Working with Anushka was an absolute delight. She has excellent communication skills and never hesitates to speak up when an opinion is needed. She's confident in her commitments and consistently meets deadlines.\n\nAnushka has a keen eye for detail—she notices the smallest things that can significantly enhance a product. She's a true team player, someone who brings the whole team together and makes the work environment enjoyable and collaborative.\n\nIt was truly a pleasure working with her. Whether professionally or personally, Anushka is simply amazing!",
      author: "Sachi Jain",
      role: "Senior Product Designer, Onething Design",
      tags: ["Detail-oriented", "Problem-solver", "Deadline wizard"],
      avatar: "/images/avatars/avatar-1.png",
      linkedin: "https://www.linkedin.com/in/sachi-jain-996b32193/",
      type: "primary"
    },
    {
      id: 2,
      shortText: "I worked with Anushka for two years on a bunch of projects, and she was always my go-to for anything UX. She just gets it- super easy to talk to, makes things easy to understand, and is always up for solving tricky problems together. Loved collaborating with her!",
      fullText: "I worked with Anushka for two years on a bunch of projects, and she was always my go-to for anything UX. She just gets it- super easy to talk to, makes things easy to understand, and is always up for solving tricky problems together. Loved collaborating with her!",
      author: "Vaishnavi Pawar",
      role: "Senior UI/UX Designer, Fluidesigns",
      tags: ["Visionary", "Problem-solver", "Passionate"],
      avatar: "/images/avatars/avatar-2.png",
      linkedin: "https://www.linkedin.com/in/vaishnavieee/",
      type: "accent"
    },
    {
      id: 3,
      shortText: "To start with, you carry top tier UX skills. You have the ability to manage multiple projects simultaneously. You have excellent communication skills.",
      fullText: "To start with, you carry top tier UX skills. You have the ability to manage multiple projects simultaneously. You have excellent communication skills.",
      author: "Sahil Shaikh",
      role: "Product Designer, Chezuba",
      tags: ["Detail-oriented", "Problem-solver", "Passionate"],
      avatar: "/images/avatars/avatar-3.png",
      linkedin: "https://www.linkedin.com/in/sahil-shaikh-054b0314a",
      type: "accent"
    },
    {
      id: 4,
      shortText: "I've had the pleasure of working with Anushka, and I can confidently say she's one of the most dedicated and collaborative UX designers and managers I've met. While her expertise lies in UX, what truly stands out is her constant curiosity and genuine interest in UI design.",
      fullText: "I've had the pleasure of working with Anushka, and I can confidently say she's one of the most dedicated and collaborative UX designers and managers I've met. While her expertise lies in UX, what truly stands out is her constant curiosity and genuine interest in UI design. She's always asking questions, eager to understand different perspectives, and actively learning from the UI team. That openness to growth is something I really admire.\n\nAnushka is also a natural team player. She consistently goes the extra mile to keep the team connected and engaged—whether it's organizing team bonding activities or initiating knowledge-sharing sessions. She creates an environment where everyone feels heard and supported, and she always makes an effort to share what she's learned from her own project experiences while being equally eager to learn from others.\n\nHer leadership style is thoughtful, inclusive, and driven by a passion for building not just great products, but great teams. If you're looking for someone who brings both UX expertise and strong people skills to the table, Anushka is that person. I've learned a lot from working with her and I'm sure others will say the same.",
      author: "Adesh Gaikwad",
      role: "Senior UI Designer, Fluidesigns",
      tags: ["Detail-oriented", "Thought leader", "Collaborative anchor"],
      avatar: "/images/avatars/avatar-4.png",
      linkedin: "https://www.linkedin.com/in/uiux-adesh-gaikwad",
      type: "accent"
    },
    {
      id: 5,
      shortText: "Anushka always goes the extra mile and encourages everyone around her to do the same. She is a real driving force at work, someone whom you can reach out to for a fresh perspective on any design challenge. Her way of handling projects/teams has no match.",
      fullText: "Anushka always goes the extra mile and encourages everyone around her to do the same. She is a real driving force at work, someone whom you can reach out to for a fresh perspective on any design challenge. Her way of handling projects/teams has no match.",
      author: "Danish",
      role: "Product Designer, Fluidesigns",
      tags: ["Problem-solver", "Deadline wizard", "OG of the team"],
      avatar: "/images/avatars/avatar-5.png",
      linkedin: "https://www.linkedin.com/in/danish-shafi-mir/",
      type: "accent"
    },
    {
      id: 6,
      shortText: "I had a great experience working with Anushka in different types of projects be it Saas applications, websites, UX copy writing. She always use to keep the projects inline and meet all deadlines even after buffer works. It would be a no brainer to include Anushka in a big UX project.",
      fullText: "I had a great experience working with Anushka in different types of projects be it Saas applications, websites, UX copy writing. She always use to keep the projects inline and meet all deadlines even after buffer works. It would be a no brainer to include Anushka in a big UX project.",
      author: "Arjun Nair",
      role: "Product designer, Fluidesigns",
      tags: ["Team catalyst", "Problem-solver", "Deadline wizard"],
      avatar: "/images/avatars/avatar-2.png",
      linkedin: "https://www.linkedin.com/in/arjun-na1r",
      type: "accent"
    }
  ];

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

  // Add the testimonial popup close handler
  const handleClosePopup = () => {
    setOpenPopupId(null);
  };

  // Keep auto-scrolling and add manual control
  const [manualOffset, setManualOffset] = useState(0);
  const [isManualScrolling, setIsManualScrolling] = useState(false);
  const cardWidth = 444; // 420px card width + 24px gap
  const testimonialTrackRef = useRef(null);

  // Function to handle manual scrolling while keeping auto-scroll
  const handleManualScroll = (direction) => {
    if (!testimonialTrackRef.current) return;
    
    // Pause auto-animation during manual scroll
    setIsManualScrolling(true);
    testimonialTrackRef.current.style.animationPlayState = 'paused';
    
    // Calculate new offset
    let newOffset;
    const cardWidth = 444; // Width of card + gap
    
    if (direction === 'left') {
      // Move one card to the right (showing more content from left)
      newOffset = manualOffset + cardWidth;
    } else {
      // Move one card to the left (showing more content from right)
      newOffset = manualOffset - cardWidth;
    }
    
    // Apply the new offset
    setManualOffset(newOffset);
    
    // Resume auto-animation after the manual scroll transition completes
    setTimeout(() => {
      if (testimonialTrackRef.current) {
        setIsManualScrolling(false);
        testimonialTrackRef.current.style.animationPlayState = 'running';
        setManualOffset(0); // Reset manual offset
      }
    }, 700); // Slightly longer than transition duration
  };

  const TestimonialsSection = () => {
    // First, make sure we have at least twice as many cards for proper looping
    const duplicatedTestimonials = [...testimonials, ...testimonials];
    
    return (
      <section className="testimonials-section section">
        <div className="container">
          <h2 className="section-title">Few Kind Words From My Collaborators</h2>
          
          <div className="testimonials-container">
            <div className="testimonials-fade testimonials-fade-left"></div>
            <div className="testimonials-fade testimonials-fade-right"></div>
            
            <div 
              className="testimonials-track" 
              ref={testimonialTrackRef}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div 
                  className={`testimonial-card ${testimonial.type || 'accent'}`} 
                  key={`testimonial-${testimonial.id}-${index}`}
                >
                  <div className="testimonial-content">
                    <p className="testimonial-text">
                      {testimonial.shortText}
                      {testimonial.fullText !== testimonial.shortText && (
                        <button 
                          className="read-more-link"
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenPopupId(testimonial.id);
                          }}
                        >
                          Read more
                        </button>
                      )}
                    </p>
                    <div className="testimonial-tags">
                      {testimonial.tags && testimonial.tags.map((tag, tagIndex) => (
                        <span className="tag" key={tagIndex}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="testimonial-author">
                    <a 
                      href={testimonial.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="linkedin-icon"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0077B5">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <div className="author-info">
                      <p className="author-name">{testimonial.author}</p>
                      <p className="author-role">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Testimonial Popup */}
          {openPopupId && (
            <div className="testimonial-popup">
              <div className="popup-content">
                <button 
                  className="close-popup"
                  onClick={handleClosePopup}
                >
                  ×
                </button>
                <div className="popup-testimonial">
                  {testimonials.find(t => t.id === openPopupId)?.fullText.split('\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                <div className="popup-author">
                  <a 
                    href={testimonials.find(t => t.id === openPopupId)?.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="linkedin-icon"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0077B5">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <div className="author-info">
                    <p className="author-name">{testimonials.find(t => t.id === openPopupId)?.author}</p>
                    <p className="author-role">{testimonials.find(t => t.id === openPopupId)?.role}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  };

  const [hideBreadcrumb, setHideBreadcrumb] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideBreadcrumb(window.scrollY > 40); // Adjust threshold as needed
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
          
          <div className={`breadcrumb-container${hideBreadcrumb ? ' hide' : ''}`}>
            {/* ... */}
          </div>
          
          <div className="projects-container">
            {featuredProjects.map((project) => (
              <Link to={`/work/${project.slug}`} className="project-card-link" key={project.id}>
                <div className="project-card">
                  <div className="project-content">
                    <div className="project-title-row">
                      <h3 className="project-title">{project.title}</h3>
                      <a
                        href={projectExternalLinks[project.slug]}
                        className="external-link-icon"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        aria-label={`Visit ${project.title} website`}
                      >
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 17L17 7M17 7H10M17 7V14" stroke="#8B5CF6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
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
          <div className="more-projects-message">
            <strong>And that's just the surface.</strong>
            I've got stories, strategies, and design moves you'll want to hear — from mobile apps to SaaS platforms, dashboards, and beyond.
            <span style={{display: 'block', margin: '18px 0 0 0', fontWeight: 600, color: '#8B5CF6'}}>If this caught your eye, we're already halfway there.</span>
            <span style={{display: 'block', marginTop: '8px', fontWeight: 600, fontSize: '1.1em'}}>
              <span 
                className="talk-text"
                onClick={() => {
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                }}
              >
                Let's talk
              </span>
              {" "}— because missing this conversation might just be your team's biggest design regret.
            </span>
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
                  With a proven track record of delivering end-to-end UX solutions across healthcare, fintech, and enterprise SaaS, I bring 5 years of industry experience and a unique combination of UX design and QA expertise.
                </p>

                <p className="about-text">
                  I've collaborated with cross-functional teams, worked directly with clients, and contributed to crafting intuitive, research-driven experiences.
                </p>

                <p className="about-text">
                  My strengths include simplifying complex workflows, structuring clear information architecture, and delivering high-impact digital products. I'm available to join immediately in a full-time UI/UX or Product Design role.
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
                <div className="image-wrapper" style={isDesktop ? {padding: "06%"} : {}}>
                  <img src="/images/my photo.jpg" alt="Anushka Singh" className="about-image" />
                  <div className="image-accent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

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

      {/* My Creative Escape Section */}
      <section className="when-im-not-section section">
        <div className="container">
          <h2 className="section-title">My Creative Escape</h2>
          
          <div className="photo-gallery-container">
            <div className="photo-gallery-track">
              {/* First set of photos */}
              <div className="photo-item">
                <div className="photo-clip">
                  <div className="divider"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                </div>
                <div className="photo-frame">
                  <img src="/images/rangoli.JPG" alt="Rangoli Art" />
                  <div className="photo-caption">
                    {/*<p className="caption-title">Rangoli Art</p>*/}
                    <p className="caption-location">Celebrating tradition through color and pattern</p>
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
                  <img src="/images/shivmandala.JPG" alt="Shiv Mandala" />
                  <div className="photo-caption">
                    {/*<p className="caption-title">Shiv Mandala</p>*/}
                    <p className="caption-location">Finding focus in hand-drawn details</p>
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
                  <img src="/images/illustration.JPG" alt="Digital Illustration" />
                  <div className="photo-caption">
                    {/*<p className="caption-title">Digital Illustration</p>*/}
                    <p className="caption-location">Adding something new to my creative repository</p>
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
                  <img src="/images/digitalmandala.PNG" alt="Digital Mandala" />
                  <div className="photo-caption">
                    {/*<p className="caption-title">Digital Mandala</p>*/}
                    <p className="caption-location">Escaping into symmetry on screen</p>
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
                  <img src="/images/painting.JPG" alt="Painting" />
                  <div className="photo-caption">
                    {/*<p className="caption-title">Painting</p>*/}
                    <p className="caption-location">Losing myself in color and calm</p>
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
                  <img src="/images/himalaya.JPG" alt="Himalayan Beauty" />
                  <div className="photo-caption">
                    {/*<p className="caption-title">Himalayan Beauty</p>*/}
                    <p className="caption-location">Where I Go to Breathe</p>
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
                  <img src="/images/mehendi.jpg" alt="Mehendi Art" />
                  <div className="photo-caption">
                    {/*<p className="caption-title">Mehendi Art</p>*/}
                    <p className="caption-location">An art I picked up along the way</p>
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
                  <img src="/images/clouds.jpeg" alt="Cloud Photography" />
                  <div className="photo-caption">
                    {/*<p className="caption-title">Cloud Photography</p>*/}
                    <p className="caption-location">Capturing nature's formations from above</p>
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
                  <img src="/images/camera.jpg" alt="Photography" className="photo-camera" />
                  <div className="photo-caption">
                    {/*<p className="caption-title">Photography</p>*/}
                    <p className="caption-location">Chasing stillness through my lens</p>
                  </div>
                </div>
              </div>
              
              {/* Duplicate photos for continuous scrolling */}
              <div className="photo-item">
                <div className="photo-clip">
                  <div className="divider"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                  <div className="grain"></div>
                </div>
                <div className="photo-frame">
                  <img src="/images/rangoli.JPG" alt="Rangoli Art" />
                  <div className="photo-caption">
                    {/*<p className="caption-title">Rangoli Art</p>*/}
                    <p className="caption-location">Celebrating tradition through color and pattern</p>
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
                  <img src="/images/shivmandala.JPG" alt="Shiv Mandala" />
                  <div className="photo-caption">
                    {/*<p className="caption-title">Shiv Mandala</p>*/}
                    <p className="caption-location">Finding focus in hand-drawn details</p>
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
                  <img src="/images/illustration.JPG" alt="Digital Illustration" />
                  <div className="photo-caption">
                    {/*<p className="caption-title">Digital Illustration</p>*/}
                    <p className="caption-location">Adding something new to my creative repository</p>
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
                  <img src="/images/digitalmandala.PNG" alt="Digital Mandala" />
                  <div className="photo-caption">
                    {/*<p className="caption-title">Digital Mandala</p>*/}
                    <p className="caption-location">Escaping into symmetry on screen</p>
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
                  <img src="/images/painting.JPG" alt="Painting" />
                  <div className="photo-caption">
                    {/*<p className="caption-title">Painting</p>*/}
                    <p className="caption-location">Losing myself in color and calm</p>
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
                  <img src="/images/himalaya.JPG" alt="Himalayan Beauty" />
                  <div className="photo-caption">
                    <p className="caption-title">Himalayan Beauty</p>
                    <p className="caption-location">Where I Go to Breathe</p>
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
                  <img src="/images/mehendi.jpg" alt="Mehendi Art" />
                  <div className="photo-caption">
                    <p className="caption-title">Mehendi Art</p>
                    <p className="caption-location">An art I picked up along the way</p>
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
                  <img src="/images/clouds.jpeg" alt="Cloud Photography" />
                  <div className="photo-caption">
                    <p className="caption-title">Cloud Photography</p>
                    <p className="caption-location">Capturing nature's formations from above</p>
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
                  <img src="/images/camera.jpg" alt="Photography" className="photo-camera" />
                  <div className="photo-caption">
                    <p className="caption-title">Photography</p>
                    <p className="caption-location">Chasing stillness through my lens</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage 