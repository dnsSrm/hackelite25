'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Homepage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-10-14T12:00:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="homepage">
      {/* Navigation */}
      <nav className="nav-container">
        <div className="nav-content">
          <div className="logo-section">
            <Image 
              src="/media/dns logo1.jpg" 
              alt="DNS Logo" 
              width={50} 
              height={50}
              className="logo"
            />
            <span className="logo-text orbitron neon-cyan">DNS</span>
          </div>
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#timeline" className="nav-link">Timeline</a>
            <a href="#prizes" className="nav-link">Prizes</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <button className="cyber-btn">Register Now</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="matrix-rain"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title orbitron">
              <span className="neon-cyan glitch">HACK</span>
              <span className="neon-magenta">ELITE</span>
              <span className="neon-green">'25</span>
            </h1>
            <p className="hero-subtitle rajdhani">
              One Night • One Spirit • One Tradition
            </p>
            <div className="event-details">
              <div className="detail-item">
                <span className="neon-cyan">📅</span>
                <span>14th - 15th October 2025</span>
              </div>
              <div className="detail-item">
                <span className="neon-magenta">📍</span>
                <span>SRMIST Vadapalani Campus, Chennai</span>
              </div>
              <div className="detail-item">
                <span className="neon-green">🆓</span>
                <span>Registration FREE for First Round</span>
              </div>
            </div>
          </div>
          
          {/* Countdown Timer */}
          <div className="countdown-container cyber-card">
            <h3 className="countdown-title orbitron neon-cyan">Event Starts In</h3>
            <div className="countdown-timer">
              <div className="time-block">
                <span className="time-number neon-magenta">{timeLeft.days.toString().padStart(2, '0')}</span>
                <span className="time-label">Days</span>
              </div>
              <div className="time-block">
                <span className="time-number neon-cyan">{timeLeft.hours.toString().padStart(2, '0')}</span>
                <span className="time-label">Hours</span>
              </div>
              <div className="time-block">
                <span className="time-number neon-green">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                <span className="time-label">Minutes</span>
              </div>
              <div className="time-block">
                <span className="time-number neon-cyan">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                <span className="time-label">Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title orbitron neon-cyan">About HackElite'25</h2>
          <div className="about-grid">
            <div className="about-card cyber-card">
              <h3 className="neon-magenta orbitron">What is HackElite?</h3>
              <p>
                HackElite'25 is the premier cyberpunk-themed hackathon organized by the Developer Network Space (DNS) 
                club at SRM Institute of Science and Technology. It's a 24-hour coding marathon where innovation meets creativity.
              </p>
            </div>
            <div className="about-card cyber-card">
              <h3 className="neon-green orbitron">DNS Club</h3>
              <p>
                Developer Network Space is a vibrant community of tech enthusiasts, coders, and innovators at SRMIST. 
                We foster learning, collaboration, and cutting-edge technology exploration.
              </p>
            </div>
            <div className="about-card cyber-card">
              <h3 className="neon-cyan orbitron">Why Participate?</h3>
              <p>
                Experience the thrill of competitive coding, network with like-minded developers, learn from industry mentors, 
                and win exciting prizes in this cyberpunk-themed coding adventure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="timeline-section">
        <div className="container">
          <h2 className="section-title orbitron neon-magenta">Event Timeline</h2>
          <div className="timeline">
            <div className="timeline-item cyber-card">
              <div className="timeline-marker neon-cyan">01</div>
              <div className="timeline-content">
                <h3 className="orbitron neon-cyan">Round 0: Online PPT</h3>
                <p className="timeline-date">Registration Phase</p>
                <p>Submit your innovative ideas through a compelling presentation. Free registration for all participants.</p>
              </div>
            </div>
            <div className="timeline-item cyber-card">
              <div className="timeline-marker neon-magenta">02</div>
              <div className="timeline-content">
                <h3 className="orbitron neon-magenta">Round 1: Online Prototype</h3>
                <p className="timeline-date">Development Phase</p>
                <p>Build a working prototype of your solution. Showcase your technical skills and implementation abilities.</p>
              </div>
            </div>
            <div className="timeline-item cyber-card">
              <div className="timeline-marker neon-green">03</div>
              <div className="timeline-content">
                <h3 className="orbitron neon-green">Round 2: 24-Hour Hackathon</h3>
                <p className="timeline-date">14th Oct 12:00 PM - 15th Oct 12:00 PM</p>
                <p>The ultimate coding challenge! 24 hours of non-stop development, mentorship, and innovation at SRMIST campus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="prizes-section">
        <div className="container">
          <h2 className="section-title orbitron neon-green">Prizes & Perks</h2>
          <div className="prizes-grid">
            <div className="prize-card cyber-card floating">
              <div className="prize-icon neon-cyan">🏆</div>
              <h3 className="orbitron neon-cyan">Prize Pool</h3>
              <p className="prize-amount neon-magenta">₹XX,XXX/-</p>
              <p>Exciting cash prizes for top performers</p>
            </div>
            <div className="prize-card cyber-card floating">
              <div className="prize-icon neon-magenta">🎁</div>
              <h3 className="orbitron neon-magenta">Exciting Goodies</h3>
              <p>Exclusive merchandise and tech gadgets for all participants</p>
            </div>
            <div className="prize-card cyber-card floating">
              <div className="prize-icon neon-green">🎵</div>
              <h3 className="orbitron neon-green">Fun Activities</h3>
              <p>Music, entertainment, and engaging activities throughout the event</p>
            </div>
            <div className="prize-card cyber-card floating">
              <div className="prize-icon neon-cyan">🤝</div>
              <h3 className="orbitron neon-cyan">Mentorship</h3>
              <p>Learn from industry experts and build valuable networks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title orbitron neon-cyan">Contact Us</h2>
          <div className="contact-grid">
            <div className="contact-card cyber-card">
              <h3 className="orbitron neon-magenta">Faculty Coordinators</h3>
              <div className="contact-person">
                <span className="neon-cyan">Dr. Sridevi Sridhar</span>
              </div>
              <div className="contact-person">
                <span className="neon-cyan">Dr. N. Saraswathi</span>
              </div>
            </div>
            <div className="contact-card cyber-card">
              <h3 className="orbitron neon-green">Student Coordinators</h3>
              <div className="contact-person">
                <span className="neon-cyan">Mr. Yuvan Srinivas B S</span>
                <span className="contact-phone">📞 9962206750</span>
              </div>
              <div className="contact-person">
                <span className="neon-cyan">Mr. Shravan Chumble</span>
                <span className="contact-phone">📞 7823844791</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .homepage {
          min-height: 100vh;
          background: var(--bg-primary);
        }

        /* Navigation Styles */
        .nav-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(10, 10, 10, 0.9);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-glow);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo {
          border-radius: 50%;
          border: 2px solid var(--accent-cyan);
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 900;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          transition: all 0.3s ease;
          padding: 0.5rem 1rem;
          border-radius: 4px;
        }

        .nav-link:hover {
          color: var(--accent-cyan);
          background: rgba(0, 212, 255, 0.1);
        }

        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 6rem 2rem 2rem;
          background: linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(10, 10, 10, 0.9) 100%);
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          max-width: 1200px;
          width: 100%;
          align-items: center;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-weight: 300;
        }

        .event-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.1rem;
        }

        /* Countdown Timer */
        .countdown-container {
          padding: 2rem;
          text-align: center;
        }

        .countdown-title {
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }

        .countdown-timer {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .time-block {
          text-align: center;
        }

        .time-number {
          display: block;
          font-size: 3rem;
          font-weight: 900;
          font-family: 'Orbitron', monospace;
        }

        .time-label {
          display: block;
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-top: 0.5rem;
        }

        /* Section Styles */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-title {
          font-size: 3rem;
          text-align: center;
          margin-bottom: 3rem;
          font-weight: 900;
        }

        /* About Section */
        .about-section {
          padding: 6rem 0;
          background: var(--bg-secondary);
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .about-card {
          padding: 2rem;
        }

        .about-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .about-card p {
          line-height: 1.6;
          color: var(--text-secondary);
        }

        /* Timeline Section */
        .timeline-section {
          padding: 6rem 0;
          background: var(--bg-primary);
        }

        .timeline {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .timeline-item {
          display: flex;
          align-items: flex-start;
          gap: 2rem;
          padding: 2rem;
        }

        .timeline-marker {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 900;
          font-family: 'Orbitron', monospace;
          border: 2px solid currentColor;
          flex-shrink: 0;
        }

        .timeline-content h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .timeline-date {
          color: var(--accent-yellow);
          font-weight: 600;
          margin-bottom: 1rem;
        }

        /* Prizes Section */
        .prizes-section {
          padding: 6rem 0;
          background: var(--bg-tertiary);
        }

        .prizes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .prize-card {
          padding: 2rem;
          text-align: center;
          animation-delay: calc(var(--i) * 0.2s);
        }

        .prize-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .prize-card h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .prize-amount {
          font-size: 2rem;
          font-weight: 900;
          font-family: 'Orbitron', monospace;
          margin-bottom: 1rem;
        }

        /* Contact Section */
        .contact-section {
          padding: 6rem 0;
          background: var(--bg-primary);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .contact-card {
          padding: 2rem;
        }

        .contact-card h3 {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          font-weight: 700;
        }

        .contact-person {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(0, 212, 255, 0.2);
        }

        .contact-phone {
          color: var(--accent-green);
          font-family: 'Orbitron', monospace;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .nav-content {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
          }

          .nav-links {
            order: -1;
            gap: 1rem;
          }

          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .countdown-timer {
            grid-template-columns: repeat(2, 1fr);
          }

          .section-title {
            font-size: 2rem;
          }

          .timeline-item {
            flex-direction: column;
            text-align: center;
          }

          .timeline-marker {
            align-self: center;
          }
        }
      `}</style>
    </div>
  );
}