import { Link } from 'react-router-dom'
import '../styles/pages/AboutPage.scss'

const AboutPage = () => {
  // Skills data
  const skills = [
    { category: 'UX Design', items: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Information Architecture'] },
    { category: 'UI Design', items: ['Visual Design', 'Interface Design', 'Interaction Design', 'Design Systems', 'Responsive Design'] },
    { category: 'Tools', items: ['Figma', 'Adobe XD', 'Sketch', 'Adobe Photoshop', 'Adobe Illustrator', 'Principle'] }
  ]

  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">About Me</h1>
        </div>
      </section>

      <section className="about-intro section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src="https://placehold.co/400x500/eee/333?text=Profile" alt="Anushka Singh" />
            </div>
            <div className="about-content">
              <h2>Hi, I'm Anushka!</h2>
              <p className="lead">
                A designer crafting impactful digital experiences that quietly enhance daily life and leave a lasting trace of positive change.
              </p>
              <p>
                With over 5 years of experience in UX/UI design, I've collaborated with startups and established companies to create user-centered digital products that solve real problems.
              </p>
              <p>
                I believe that great design is not just about aesthetics but about creating functional, intuitive, and meaningful experiences that resonate with users. My approach combines analytical thinking with creative problem-solving to deliver designs that meet both user needs and business goals.
              </p>
              <p>
                When I'm not designing, you can find me reading design books, exploring new coffee shops, or hiking in nature.
              </p>
              <div className="about-cta">
                <a href="/Anushka Singh_UX Manager_Resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-button">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section section">
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div className="skill-group" key={index}>
                <h3 className="skill-category">{skillGroup.category}</h3>
                <ul className="skill-list">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-section section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-timeline">
            <div className="experience-item">
              <div className="experience-date">2022 - Present</div>
              <div className="experience-content">
                <h3 className="experience-title">Senior UX Designer</h3>
                <p className="experience-company">Fluidesigns</p>
                <p className="experience-description">
                  Led the design of multiple digital products, collaborated with cross-functional teams, and mentored junior designers. Implemented user-centered design methodologies and conducted user research to inform design decisions.
                </p>
              </div>
            </div>
            <div className="experience-item">
              <div className="experience-date">2020 - 2022</div>
              <div className="experience-content">
                <h3 className="experience-title">UX Designer</h3>
                <p className="experience-company">Cognizant</p>
                <p className="experience-description">
                  Designed user interfaces for web and mobile applications, created wireframes, prototypes, and conducted usability testing. Collaborated with product managers and developers to deliver user-centered solutions.
                </p>
              </div>
            </div>
            <div className="experience-item">
              <div className="experience-date">2018 - 2020</div>
              <div className="experience-content">
                <h3 className="experience-title">UI/UX Designer</h3>
                <p className="experience-company">Freelance</p>
                <p className="experience-description">
                  Worked with various clients on website redesigns, mobile applications, and branding projects. Managed the entire design process from concept to implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section section">
        <div className="container">
          <div className="cta-box">
            <h2>Let's create something amazing together</h2>
            <p>I'm currently available for freelance work and full-time opportunities.</p>
            <Link to="/contact" className="cta-button">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage 