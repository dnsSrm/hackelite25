'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from './footer/footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-10-14T12:00:00');
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        setTimeRemaining({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'timeline', 'prizes', 'registration', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="nav-container">
        <div className="nav-brand">
          <Image 
            src="/dns_logo.png" 
            alt="DNS Logo" 
            width={90} 
            height={60}
            className="brand-logo"
          />
          <span className="brand-text">HackElite'25</span>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          {['home', 'about', 'timeline', 'prizes', 'registration', 'contact'].map(section => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`nav-link ${activeSection === section ? 'nav-link-active' : ''}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        <button 
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            Oct 14-15, 2025 • SRMIST Vadapalani
          </div>
          
          <h1 className="hero-title">
            <span className="title-hack">HACK</span>
            <span className="title-elite">ELITE</span>
            <span className="title-year">'25</span>
          </h1>
          
          <p className="hero-subtitle">
            The ultimate cyberpunk coding experience awaits. 24 hours of pure innovation,
            cutting-edge technology, and digital rebellion.
          </p>

          <div className="countdown-container">
            <div className="countdown-item">
              <span className="countdown-number">{timeRemaining.days.toString().padStart(2, '0')}</span>
              <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <span className="countdown-number">{timeRemaining.hours.toString().padStart(2, '0')}</span>
              <span className="countdown-label">Hours</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <span className="countdown-number">{timeRemaining.minutes.toString().padStart(2, '0')}</span>
              <span className="countdown-label">Minutes</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <span className="countdown-number">{timeRemaining.seconds.toString().padStart(2, '0')}</span>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>

          <div className="hero-actions">
            <a 
              href="https://forms.gle/CvrHfZF59toWtYVPA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-btn primary"
            >
              Register Now - Free!
            </a>
            <button 
              onClick={() => scrollToSection('about')}
              className="cyber-btn secondary"
            >
              Learn More
            </button>
          </div>

          <div className="event-highlights">
            <div className="highlight-item">
              <span className="highlight-icon">💰</span>
              <span>Prize Pool Worth ₹XX,XXX+</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">👥</span>
              <span>500+ Participants</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🏆</span>
              <span>Multiple Categories</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-elements">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`floating-particle particle-${i % 4}`}></div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About HackElite'25</h2>
            <p className="section-subtitle">
              Where innovation meets cyberpunk aesthetics in the ultimate coding showdown
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card main-card">
              <div className="card-icon">🚀</div>
              <h3>The Ultimate Hackathon</h3>
              <p>
                HackElite'25 is not just another hackathon—it's a digital revolution. 
                Join us for 24 hours of intense coding, innovative problem-solving, 
                and networking with the brightest minds in tech.
              </p>
              <div className="card-stats">
                <div className="stat">
                  <span className="stat-number">24</span>
                  <span className="stat-label">Hours</span>
                </div>
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Coders</span>
                </div>
                <div className="stat">
                  <span className="stat-number">XX,XXX+</span>
                  <span className="stat-label">Prize Pool</span>
                </div>
              </div>
            </div>

            <div className="about-card">
              <div className="card-icon">🏛️</div>
              <h3>About DNS</h3>
              <p>
                Developer Network Space (DNS) is the premier tech community at 
                SRMIST Vadapalani, fostering innovation and technical excellence 
                among students since 2019.
              </p>
              <ul className="feature-list">
                <li>600+ Active Members</li>
                <li>50+ Events Organized</li>
                <li>Industry Partnerships</li>
                <li>Open Source Projects</li>
              </ul>
            </div>

            <div className="about-card">
              <div className="card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To create a platform where creativity meets technology, enabling 
                participants to showcase their skills and build solutions for 
                real-world problems.
              </p>
              <div className="mission-points">
                <div className="point">💡 Innovation</div>
                <div className="point">🤝 Collaboration</div>
                <div className="point">🚀 Excellence</div>
              </div>
            </div>

            <div className="about-card">
              <div className="card-icon">🌟</div>
              <h3>Why Participate?</h3>
              <p>
                Beyond the prizes, HackElite offers unparalleled learning 
                opportunities, industry mentorship, and a chance to be part 
                of something extraordinary.
              </p>
              <ul className="benefit-list">
                <li>Industry Mentor Guidance</li>
                <li>Networking Opportunities</li>
                <li>Certificate of Participation</li>
                <li>Showcase Platform</li>
                <li>Career Opportunities</li>
              </ul>
            </div>            <div className="about-card">
              <div className="card-icon">�</div>
              <h3>Why Participate?</h3>
              <p>
                Beyond the prizes, HackElite offers unparalleled learning 
                opportunities, industry mentorship, and a chance to be part 
                of something extraordinary.
              </p>
              <ul className="benefit-list">
                <li>Industry Mentor Guidance</li>
                <li>Networking Opportunities</li>
                <li>Certificate of Participation</li>
                <li>Showcase Platform</li>
                <li>Career Opportunities</li>
              </ul>
            </div>

            <div className="about-card">
              <div className="card-icon">�</div>
              <h3>Our Mission</h3>
              <p>
                To create a platform where creativity meets technology, enabling 
                participants to showcase their skills and build solutions for 
                real-world problems.
              </p>
              <div className="mission-points">
                <div className="point">💡 Innovation</div>
                <div className="point">🤝 Collaboration</div>
                <div className="point">🚀 Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="section-container">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Event Timeline</h2>
            <p className="section-subtitle">
              A carefully crafted 24-hour journey from ideation to implementation
            </p>
          </div>

          <div className="timeline-container">
            <div className="timeline-header">
              <div className="date-range">
                <div className="start-date">
                  <span className="date-label">Start</span>
                  <span className="date-value">Oct 14, 2025</span>
                  <span className="time-value">12:00 PM</span>
                </div>
                <div className="duration-line"></div>
                <div className="end-date">
                  <span className="date-label">End</span>
                  <span className="date-value">Oct 15, 2025</span>
                  <span className="time-value">12:00 PM</span>
                </div>
              </div>
            </div>

            <div className="timeline-phases">
              <div className="phase-card">
                <div className="phase-time">12:00 PM - 2:00 PM</div>
                <h3>Opening & Team Formation</h3>
                <ul>
                  <li>Registration & Check-in</li>
                  <li>Opening Ceremony</li>
                  <li>Problem Statement Release</li>
                  <li>Team Formation (Max 4 members)</li>
                  <li>Mentorship Session</li>
                </ul>
              </div>

              <div className="phase-card">
                <div className="phase-time">2:00 PM - 6:00 PM</div>
                <h3>Ideation & Planning</h3>
                <ul>
                  <li>Brainstorming Sessions</li>
                  <li>Solution Architecture</li>
                  <li>Technology Stack Selection</li>
                  <li>Project Planning</li>
                  <li>Mentor Consultations</li>
                </ul>
              </div>

              <div className="phase-card">
                <div className="phase-time">6:00 PM - 12:00 AM</div>
                <h3>Development Phase I</h3>
                <ul>
                  <li>Core Development</li>
                  <li>Backend Implementation</li>
                  <li>Database Design</li>
                  <li>API Development</li>
                  <li>Dinner Break (8:00 PM)</li>
                </ul>
              </div>

              <div className="phase-card">
                <div className="phase-time">12:00 AM - 6:00 AM</div>
                <h3>Midnight Coding</h3>
                <ul>
                  <li>Frontend Development</li>
                  <li>UI/UX Implementation</li>
                  <li>Integration Testing</li>
                  <li>Late Night Snacks</li>
                  <li>24/7 Mentor Support</li>
                </ul>
              </div>

              <div className="phase-card">
                <div className="phase-time">6:00 AM - 10:00 AM</div>
                <h3>Final Sprint</h3>
                <ul>
                  <li>Bug Fixes & Testing</li>
                  <li>Performance Optimization</li>
                  <li>Documentation</li>
                  <li>Presentation Preparation</li>
                  <li>Breakfast</li>
                </ul>
              </div>

              <div className="phase-card">
                <div className="phase-time">10:00 AM - 12:00 PM</div>
                <h3>Presentations & Awards</h3>
                <ul>
                  <li>Final Submissions</li>
                  <li>Project Presentations</li>
                  <li>Judging & Evaluation</li>
                  <li>Award Ceremony</li>
                  <li>Closing Ceremony</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="section-container">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Prizes & Recognition</h2>
            <p className="section-subtitle">
              Compete for glory and substantial rewards in multiple categories
            </p>
          </div>

          <div className="prizes-grid">
            <div className="prize-card winner">
              <div className="prize-rank">#1</div>
              <div className="prize-icon">🏆</div>
              <h3>Grand Winner</h3>
              <div className="prize-amount">₹XX,XXX</div>
              <ul className="prize-benefits">
                <li>Winner Trophy</li>
                <li>Certificates</li>
                <li>Internship Opportunities</li>
              </ul>
            </div>

            <div className="prize-card runner-up">
              <div className="prize-rank">#2</div>
              <div className="prize-icon">🥈</div>
              <h3>First Runner Up</h3>
              <div className="prize-amount">₹XX,XXX</div>
              <ul className="prize-benefits">
                <li>Runner-up Trophy</li>
                <li>Certificates</li>
              </ul>
            </div>

            <div className="prize-card third">
              <div className="prize-rank">#3</div>
              <div className="prize-icon">🥉</div>
              <h3>Second Runner Up</h3>
              <div className="prize-amount">₹XX,XXX</div>
              <ul className="prize-benefits">
                <li>Bronze Trophy</li>
                <li>Certificates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="section-container">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Join the Elite</h2>
            <p className="section-subtitle">
              Register now for the most anticipated hackathon of 2025
            </p>
          </div>

          <div className="registration-content">
            <div className="registration-info">
              <div className="info-card">
                <h3>Registration Details</h3>
                <div className="info-list">
                  <div className="info-item">
                    <span className="info-label">Registration Fee:</span>
                    <span className="info-value free">FREE</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Team Size:</span>
                    <span className="info-value">1-4 Members</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Eligibility:</span>
                    <span className="info-value">All Students</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Registration Closes:</span>
                    <span className="info-value">Oct 10, 2025</span>
                  </div>
                </div>
              </div>

              <div className="requirements-card">
                <h3>What You Need</h3>
                <ul className="requirements-list">
                  <li>Laptop with development environment</li>
                  <li>Valid student ID</li>
                  <li>GitHub account</li>
                  <li>Team members (optional)</li>
                  <li>Passion for coding!</li>
                </ul>
              </div>
            </div>

            <div className="registration-form-container">
              <div className="form-card">
                <h3>Quick Registration</h3>
                <a href="https://forms.gle/CvrHfZF59toWtYVPA" target="_blank" rel="noopener noreferrer" className="cyber-btn primary large">
                  Complete Registration Form
                </a>
                <p className="form-note">
                  Click above to access the full registration form with team details,
                  project preferences, and emergency contacts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Have questions? Our team is here to help you on your journey
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email Us</h3>
              <p>For general inquiries and support</p>
              <a href="mailto:hackelite@dns.srmist.edu.in" className="contact-link">
                hackelite@dns.srmist.edu.in
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📱</div>
              <h3>WhatsApp</h3>
              <p>Quick questions and updates</p>
              <a href="https://wa.me/919876543210" className="contact-link">
                +91 98765 43210
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Venue</h3>
              <p>SRM Institute of Science & Technology</p>
              <div className="venue-details">
                <p>Vadapalani Campus, Chennai</p>
                <p>Main Auditorium & Lab Complex</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">👥</div>
              <h3>Organizers</h3>
              <div className="organizer-list">
                <div className="organizer">
                  <strong>Arjun Kumar</strong>
                  <span>Event Head</span>
                  <a href="tel:+919876543211">+91 98765 43211</a>
                </div>
                <div className="organizer">
                  <strong>Priya Sharma</strong>
                  <span>Tech Coordinator</span>
                  <a href="tel:+919876543212">+91 98765 43212</a>
                </div>
              </div>
            </div>
          </div>

          <div className="social-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://www.instagram.com/dns_srm?igsh=MWg5MW9rZTY4eTlvag==" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">📷</span>
                Instagram
              </a>
              <a href="https://www.linkedin.com/company/dns-club-srm/" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">💼</span>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .nav-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--cyber-cyan);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          min-width: 200px;
        }

        .brand-logo {
          border-radius: 50%;
          border: 2px solid var(--cyber-cyan);
          padding: 2px;
          transition: all 0.3s ease;
        }

        .brand-text {
          font-family: var(--font-orbitron);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--cyber-cyan);
          text-shadow: 0 0 10px var(--cyber-cyan);
        }

        .nav-menu {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          background: none;
          border: none;
          color: var(--text-color);
          font-family: var(--font-rajdhani);
          font-size: 1.1rem;
          font-weight: 500;
          padding: 0.5rem 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .nav-link:hover,
        .nav-link-active {
          color: var(--cyber-cyan);
          text-shadow: 0 0 10px var(--cyber-cyan);
        }

        .nav-toggle {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          gap: 3px;
        }

        .nav-toggle span {
          width: 25px;
          height: 3px;
          background: white;
          transition: all 0.3s ease;
        }

        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(255, 0, 128, 0.1) 100%);
        }

        .hero-content {
          text-align: center;
          max-width: 1200px;
          z-index: 2;
        }

        .hero-badge {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: linear-gradient(45deg, var(--cyber-cyan), var(--cyber-magenta));
          border-radius: 25px;
          font-family: var(--font-rajdhani);
          font-weight: 600;
          margin-bottom: 2rem;
          animation: pulse 2s infinite;
        }

        .hero-title {
          font-family: var(--font-orbitron);
          font-size: clamp(3rem, 8vw, 8rem);
          font-weight: 900;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .title-hack {
          color: var(--cyber-cyan);
          text-shadow: 0 0 20px var(--cyber-cyan);
        }

        .title-elite {
          color: var(--cyber-magenta);
          text-shadow: 0 0 20px var(--cyber-magenta);
        }

        .title-year {
          color: var(--cyber-green);
          text-shadow: 0 0 20px var(--cyber-green);
        }

        .hero-subtitle {
          font-size: 1.3rem;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          opacity: 0.9;
          line-height: 1.6;
        }

        .countdown-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .countdown-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(0, 212, 255, 0.1);
          border: 2px solid var(--cyber-cyan);
          border-radius: 10px;
          padding: 1rem;
          min-width: 80px;
        }

        .countdown-number {
          font-family: var(--font-orbitron);
          font-size: 2rem;
          font-weight: 700;
          color: var(--cyan-bright);
          text-shadow: 0 0 10px var(--cyan-bright);
        }

        .countdown-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 0.5rem;
          opacity: 0.8;
        }

        .countdown-separator {
          font-family: var(--font-orbitron);
          font-size: 2rem;
          color: var(--cyber-cyan);
          text-shadow: 0 0 10px var(--cyber-cyan);
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .event-highlights {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 25px;
          font-weight: 500;
        }

        .highlight-icon {
          font-size: 1.2rem;
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .floating-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--cyber-cyan);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .particle-0 { animation-delay: 0s; top: 20%; left: 10%; }
        .particle-1 { animation-delay: 1s; top: 40%; left: 80%; }
        .particle-2 { animation-delay: 2s; top: 60%; left: 20%; }
        .particle-3 { animation-delay: 3s; top: 80%; left: 70%; }

        .section-container {
          padding: 6rem 2rem;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-family: var(--font-orbitron);
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, var(--cyber-cyan), var(--cyber-magenta));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.2rem;
          opacity: 0.8;
          max-width: 600px;
          margin: 0 auto;
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-template-rows: auto auto auto;
          gap: 2rem;
        }

        .about-card {
          background: linear-gradient(145deg, rgba(0, 212, 255, 0.1), rgba(255, 0, 128, 0.1));
          border: 1px solid var(--border-color);
          border-radius: 15px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .about-card:hover {
          transform: translateY(-5px);
          border-color: var(--cyber-cyan);
          box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
        }

        .main-card {
          grid-column: span 2;
          grid-row: 1;
        }

        .about-card:nth-child(2) { /* About DNS */
          grid-column: 1;
          grid-row: 2;
        }

        .about-card:nth-child(3) { /* Our Mission */
          grid-column: 1 / -1; /* Span all columns - keep centered */
          grid-row: 3;
          max-width: 600px;
          margin: 0 auto;
        }

        .about-card:nth-child(4) { /* Why Participate */
          grid-column: 2;
          grid-row: 2;
        }

        .card-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .about-card h3 {
          font-family: var(--font-orbitron);
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--cyan-bright);
        }

        .card-stats {
          display: flex;
          justify-content: space-around;
          margin-top: 2rem;
        }

        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-number {
          font-family: var(--font-orbitron);
          font-size: 2rem;
          font-weight: 700;
          color: var(--cyber-magenta);
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .feature-list,
        .benefit-list {
          list-style: none;
          padding: 0;
          margin-top: 1rem;
        }

        .feature-list li,
        .benefit-list li {
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(0, 212, 255, 0.2);
        }

        .feature-list li:before,
        .benefit-list li:before {
          content: "▶ ";
          color: var(--cyber-cyan);
          margin-right: 0.5rem;
        }

        .mission-points {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
          flex-wrap: wrap;
        }

        .point {
          padding: 0.5rem 1rem;
          background: rgba(0, 212, 255, 0.2);
          border-radius: 20px;
          font-size: 0.9rem;
        }

        .timeline-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .timeline-header {
          margin-bottom: 3rem;
        }

        .date-range {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .start-date,
        .end-date {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .date-label {
          font-size: 0.9rem;
          opacity: 0.7;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .date-value {
          font-family: var(--font-orbitron);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--cyber-cyan);
        }

        .time-value {
          font-size: 1rem;
          color: var(--cyber-magenta);
        }

        .duration-line {
          flex: 1;
          height: 2px;
          background: linear-gradient(90deg, var(--cyber-cyan), var(--cyber-magenta));
          position: relative;
        }

        .duration-line:after {
          content: "24 HOURS";
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          font-family: var(--font-orbitron);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--cyber-green);
          background: var(--bg-primary);
          padding: 0 1rem;
        }

        .timeline-phases {
          display: grid;
          gap: 2rem;
        }

        .phase-card {
          background: linear-gradient(145deg, rgba(0, 212, 255, 0.05), rgba(255, 0, 128, 0.05));
          border: 1px solid var(--border-color);
          border-radius: 15px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .phase-card:hover {
          border-color: var(--cyber-cyan);
          box-shadow: 0 5px 20px rgba(0, 212, 255, 0.2);
        }

        .phase-time {
          color: var(--cyber-magenta);
          font-family: var(--font-orbitron);
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .phase-card h3 {
          font-family: var(--font-orbitron);
          color: var(--cyan-bright);
          margin-bottom: 1rem;
        }

        .phase-card ul {
          list-style: none;
          padding: 0;
        }

        .phase-card li {
          padding: 0.3rem 0;
          opacity: 0.9;
        }

        .phase-card li:before {
          content: "• ";
          color: var(--cyber-cyan);
          margin-right: 0.5rem;
        }

        .prizes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .prize-card {
          background: linear-gradient(145deg, rgba(0, 212, 255, 0.1), rgba(255, 0, 128, 0.1));
          border: 2px solid var(--border-color);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .prize-card:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--cyber-cyan), var(--cyber-magenta));
        }

        .prize-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 212, 255, 0.3);
        }

        .winner {
          border-color: #FFD700;
          background: linear-gradient(145deg, rgba(255, 215, 0, 0.1), rgba(255, 0, 128, 0.1));
        }

        .winner:before {
          background: linear-gradient(90deg, #FFD700, var(--cyber-magenta));
        }

        .runner-up {
          border-color: #C0C0C0;
        }

        .third {
          border-color: #CD7F32;
        }

        .prize-rank {
          position: absolute;
          top: -10px;
          right: 20px;
          background: var(--cyber-cyan);
          color: var(--bg-primary);
          font-family: var(--font-orbitron);
          font-weight: 700;
          font-size: 0.8rem;
          padding: 0.5rem 1rem;
          border-radius: 0 0 10px 10px;
        }

        .prize-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
        }

        .prize-card h3 {
          font-family: var(--font-orbitron);
          color: var(--cyan-bright);
          margin-bottom: 1rem;
        }

        .prize-amount {
          font-family: var(--font-orbitron);
          font-size: 2rem;
          font-weight: 700;
          color: var(--cyber-magenta);
          margin-bottom: 1.5rem;
        }

        .prize-benefits {
          list-style: none;
          padding: 0;
          text-align: left;
        }

        .prize-benefits li {
          padding: 0.3rem 0;
          opacity: 0.9;
        }

        .prize-benefits li:before {
          content: "✓ ";
          color: var(--cyber-green);
          margin-right: 0.5rem;
        }

        .registration-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
          margin-bottom: 2rem;
        }

        .info-card,
        .requirements-card,
        .form-card {
          background: linear-gradient(145deg, rgba(0, 212, 255, 0.1), rgba(255, 0, 128, 0.1));
          border: 1px solid var(--border-color);
          border-radius: 15px;
          padding: 2rem;
          margin-bottom: 2rem;
          min-height: fit-content;
        }

        .info-card h3,
        .requirements-card h3,
        .form-card h3 {
          font-family: var(--font-orbitron);
          color: var(--cyan-bright);
          margin-bottom: 1.5rem;
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .info-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(0, 212, 255, 0.2);
        }

        .info-label {
          font-weight: 500;
        }

        .info-value {
          font-weight: 700;
          color: var(--cyber-cyan);
        }

        .free {
          color: var(--cyber-green) !important;
          font-size: 1.2rem;
        }

        .requirements-list {
          list-style: none;
          padding: 0;
        }

        .requirements-list li {
          padding: 0.5rem 0;
          opacity: 0.9;
        }

        .requirements-list li:before {
          content: "▶ ";
          color: var(--cyber-cyan);
          margin-right: 0.5rem;
        }

        .form-card {
          text-align: center;
          padding: 2.5rem;
        }

        .cyber-btn.large {
          display: inline-block;
          padding: 1.5rem 2.5rem;
          font-size: 1.2rem;
          font-weight: 600;
          margin: 1.5rem 0;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
          z-index: 10;
          position: relative;
        }

        .cyber-btn.large:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 212, 255, 0.5);
        }

        .form-note {
          font-size: 0.9rem;
          opacity: 0.7;
          line-height: 1.6;
          margin-top: 1rem;
          padding: 0 1rem;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .contact-card {
          background: linear-gradient(145deg, rgba(0, 212, 255, 0.1), rgba(255, 0, 128, 0.1));
          border: 1px solid var(--border-color);
          border-radius: 15px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-5px);
          border-color: var(--cyber-cyan);
          box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
        }

        .contact-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .contact-card h3 {
          font-family: var(--font-orbitron);
          color: var(--cyan-bright);
          margin-bottom: 1rem;
        }

        .contact-link {
          color: var(--cyber-cyan);
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .contact-link:hover {
          color: var(--cyan-bright);
          text-shadow: 0 0 10px var(--cyan-bright);
        }

        .venue-details {
          margin-top: 1rem;
        }

        .venue-details p {
          margin: 0.3rem 0;
          opacity: 0.8;
        }

        .organizer-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1rem;
        }

        .organizer {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .organizer strong {
          color: var(--cyan-bright);
        }

        .organizer span {
          opacity: 0.7;
          font-size: 0.9rem;
        }

        .organizer a {
          color: var(--cyber-cyan);
          text-decoration: none;
          font-size: 0.9rem;
        }

        .social-section {
          text-align: center;
          padding: 2rem;
          background: rgba(0, 212, 255, 0.05);
          border-radius: 15px;
        }

        .social-section h3 {
          font-family: var(--font-orbitron);
          color: var(--cyan-bright);
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          background: linear-gradient(45deg, var(--cyber-cyan), var(--cyber-magenta));
          color: var(--bg-primary);
          text-decoration: none;
          border-radius: 25px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 212, 255, 0.3);
        }

        .social-icon {
          font-size: 1.2rem;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @media (max-width: 768px) {
          .nav-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--bg-primary);
            flex-direction: column;
            padding: 2rem;
            border-top: 1px solid var(--border-color);
          }

          .nav-menu-open {
            display: flex;
          }

          .nav-toggle {
            display: flex;
          }

          .nav-container {
            padding: 1rem;
          }

          .hero-section {
            padding: 1rem;
            min-height: 100vh;
          }

          .section-container {
            padding: 4rem 1rem;
          }

          .countdown-container {
            gap: 0.5rem;
          }

          .countdown-item {
            min-width: 60px;
            padding: 0.8rem;
          }

          .countdown-number {
            font-size: 1.5rem;
          }

          .main-card {
            grid-column: span 1;
            grid-row: auto;
          }

          .about-card:nth-child(2),
          .about-card:nth-child(4) {
            grid-column: auto;
            grid-row: auto;
          }

          .about-card:nth-child(3) { /* Our Mission - keep centered on mobile */
            grid-column: auto;
            grid-row: auto;
            max-width: 100%;
            margin: 0 auto;
          }

          .registration-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .cyber-btn.large {
            padding: 1.2rem 2rem;
            font-size: 1.1rem;
            margin: 1rem 0;
            width: 100%;
            max-width: 300px;
          }

          .form-card {
            padding: 2rem 1rem;
          }

          .date-range {
            flex-direction: column;
            gap: 1rem;
            align-items: center;
            text-align: center;
          }

          .start-date,
          .end-date {
            align-items: center;
            text-align: center;
            width: 100%;
          }

          .duration-line {
            height: 50px;
            width: 2px;
            margin: 0 auto;
          }

          .duration-line:after {
            display: none;
          }
        }

        body {
          margin: 0;
          padding: 0;
          scroll-behavior: smooth;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
