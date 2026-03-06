import React from "react";
import { FaLaptopCode, FaChartLine } from "react-icons/fa";
import "./AboutMeStyles.css";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm Phuoc (Kirsy) Ho, a passionate software developer currently
            pursuing a Master of Information Technology with a major in Software
            Development at Swinburne University of Technology. I'm in my second
            year and gaining hands-on experience as a Software Engineer Intern
            at SkillPixel.
          </p>
          <p>
            My journey in technology combines academic excellence with practical
            experience. I love building full-stack applications and have worked
            with various technologies including React, Python, Node.js, and
            cloud platforms. I'm particularly interested in creating
            user-focused solutions that solve real-world problems.
          </p>
          <p>
            When I'm not coding, I enjoy watching thriller movies, listening to
            music, and exploring new technologies. I believe in continuous
            learning and am always excited to take on new challenges that help
            me grow as a developer.
          </p>
        </div>
      </div>

      <div className="skills-section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-tags">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">React Native</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">Bootstrap</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">FastAPI</span>
              <span className="skill-tag">Flask</span>
              <span className="skill-tag">Py4web</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">C#</span>
              <span className="skill-tag">PHP</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Database & Cloud</h3>
            <div className="skill-tags">
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">Firestore</span>
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">Google Cloud</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Tools & Other</h3>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">Jira</span>
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">Data Science</span>
            </div>
          </div>
        </div>
      </div>

      <div className="certifications-section">
        <h2>Certifications</h2>
        <div className="cert-card">
          <div className="cert-logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
              alt="AWS Logo"
            />
          </div>
          <div className="cert-details">
            <h3>AWS Certified Cloud Practitioner</h3>
            <p>Amazon Web Services</p>
            <p className="cert-date">
              Issued: September 2024 • Expires: September 2027
            </p>
            <p className="cert-description">
              Foundational understanding of AWS Cloud concepts, services,
              security, architecture, pricing, and support to build overall AWS
              Cloud knowledge.
            </p>
          </div>
        </div>
      </div>

      <div className="education-section">
        <h2>Education</h2>
        <div className="education-grid">
          <div className="education-item">
            <div className="edu-icon">
              <FaLaptopCode size={36} color="#4fc3f7" />
            </div>
            <div className="edu-details">
              <h3>Master of Information Technology</h3>
              <h4>Software Development Major</h4>
              <p>Swinburne University of Technology</p>
              <p className="edu-date">February 2024 - December 2025</p>
              <p className="edu-gpa">GPA: 3.7</p>
            </div>
          </div>

          <div className="education-item">
            <div className="edu-icon">
              <FaChartLine size={36} color="#ffd54f" />
            </div>
            <div className="edu-details">
              <h3>Bachelor of Economics and Finance</h3>
              <p>Royal Melbourne Institute of Technology</p>
              <p className="edu-date">October 2020 - December 2023</p>
              <p className="edu-gpa">GPA: 3.7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;