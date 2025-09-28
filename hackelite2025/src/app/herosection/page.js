'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const targetDate = new Date('2025-10-14T12:00:00');
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <section className="hero-section">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="grid-overlay"></div>
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-${i}`}></div>
          ))}
        </div>
      </div>

      <div className="hero-container">
        {/* Main Hero Content */}
        <div className="hero-main">
          <div className="hero-badge cyber-card">
            <span className="neon-green pulse">🆓 REGISTRATION FREE</span>
          </div>
          
          <h1 className="hero-title orbitron">
            <div className="title-line">
              <span className="neon-cyan glitch" data-text="HACK">HACK</span>
              <span className="neon-magenta" data-text="ELITE">ELITE</span>
            </div>
            <div className="title-year neon-green floating">'25</div>
          </h1>

          <p className="hero-tagline rajdhani">
            <span className="neon-cyan">One Night</span> • 
            <span className="neon-magenta"> One Spirit</span> • 
            <span className="neon-green"> One Tradition</span>
          </p>

          <div className="hero-info">
            <div className="info-grid">
              <div className="info-card cyber-card">
                <div className="info-icon neon-cyan">📅</div>
                <div className="info-content">
                  <h3>Event Date</h3>
                  <p>14th - 15th October 2025</p>
                  <small>12:00 PM to 12:00 PM</small>
                </div>
              </div>
              
              <div className="info-card cyber-card">
                <div className="info-icon neon-magenta">📍</div>
                <div className="info-content">
                  <h3>Venue</h3>
                  <p>SRMIST Vadapalani</p>
                  <small>Chennai, Tamil Nadu</small>
                </div>
              </div>
              
              <div className="info-card cyber-card">
                <div className="info-icon neon-green">⚡</div>
                <div className="info-content">
                  <h3>Duration</h3>
                  <p>24 Hours</p>
                  <small>Non-stop Hackathon</small>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-actions">
            <button className="cyber-btn cyber-btn-primary">
              <span>Register Now</span>
              <div className="btn-glow"></div>
            </button>
            <button className="cyber-btn cyber-btn-magenta">
              <span>Learn More</span>
              <div className="btn-glow"></div>
            </button>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="countdown-section">
          <div className="countdown-container cyber-card">
            <h2 className="countdown-header orbitron neon-cyan">
              Event Starts In
            </h2>
            
            <div className="countdown-display">
              <div className="time-unit">
                <div className="time-value neon-magenta orbitron">
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
                <div className="time-label">Days</div>
                <div className="time-separator">:</div>
              </div>
              
              <div className="time-unit">
                <div className="time-value neon-cyan orbitron">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="time-label">Hours</div>
                <div className="time-separator">:</div>
              </div>
              
              <div className="time-unit">
                <div className="time-value neon-green orbitron">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="time-label">Minutes</div>
                <div className="time-separator">:</div>
              </div>
              
              <div className="time-unit">
                <div className="time-value neon-cyan orbitron">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="time-label">Seconds</div>
              </div>
            </div>

            <div className="countdown-footer">
              <p className="rajdhani">Organized by <span className="neon-cyan">Developer Network Space</span></p>
              <p className="venue-text">SRM Institute of Science and Technology</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-tertiary) 100%);
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .floating-particles {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--accent-cyan);
          border-radius: 50%;
          box-shadow: 0 0 10px currentColor;
          animation: particleFloat 6s ease-in-out infinite;
        }

        .particle:nth-child(odd) {
          background: var(--accent-magenta);
          animation-duration: 8s;
        }

        .particle:nth-child(3n) {
          background: var(--accent-green);
          animation-duration: 10s;
        }

        @keyframes particleFloat {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-100px) translateX(50px) rotate(90deg); 
            opacity: 1;
          }
          50% { 
            transform: translateY(-50px) translateX(-30px) rotate(180deg); 
            opacity: 0.7;
          }
          75% { 
            transform: translateY(-150px) translateX(80px) rotate(270deg); 
            opacity: 0.9;
          }
        }

        ${[...Array(20)].map((_, i) => `
          .particle-${i} {
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${i * 0.3}s;
          }
        `).join('')}

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          max-width: 1400px;
          width: 100%;
          padding: 2rem;
          position: relative;
          z-index: 2;
          align-items: center;
        }

        .hero-main {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .hero-badge {
          display: inline-block;
          padding: 0.8rem 1.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          align-self: flex-start;
        }

        .hero-title {
          font-size: 5rem;
          font-weight: 900;
          line-height: 0.9;
          margin: 1rem 0;
        }

        .title-line {
          display: flex;
          gap: 1rem;
          align-items: baseline;
        }

        .title-year {
          font-size: 3rem;
          margin-left: 1rem;
        }

        .hero-tagline {
          font-size: 1.8rem;
          font-weight: 300;
          margin: 1rem 0 2rem 0;
          letter-spacing: 2px;
        }

        .hero-info {
          margin: 2rem 0;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .info-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
        }

        .info-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .info-content h3 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .info-content p {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
        }

        .info-content small {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .cyber-btn-primary {
          background: var(--gradient-primary);
          border: none;
          color: var(--text-primary);
          position: relative;
          overflow: hidden;
        }

        .cyber-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-cyan), var(--shadow-magenta);
        }

        .btn-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.8s ease;
        }

        .cyber-btn:hover .btn-glow {
          left: 100%;
        }

        .countdown-section {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .countdown-container {
          padding: 3rem;
          text-align: center;
          background: rgba(26, 26, 46, 0.9);
          backdrop-filter: blur(20px);
          border: 2px solid var(--border-glow);
          position: relative;
        }

        .countdown-header {
          font-size: 2rem;
          margin-bottom: 2rem;
          font-weight: 700;
        }

        .countdown-display {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          margin: 2rem 0;
        }

        .time-unit {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .time-value {
          font-size: 4rem;
          font-weight: 900;
          line-height: 1;
          text-shadow: 0 0 20px currentColor;
          animation: pulse 2s ease-in-out infinite;
        }

        .time-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-top: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .time-separator {
          position: absolute;
          right: -0.75rem;
          top: 0;
          font-size: 3rem;
          color: var(--accent-cyan);
          animation: blink 1s ease-in-out infinite;
        }

        .time-unit:last-child .time-separator {
          display: none;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.3; }
        }

        .countdown-footer {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-glow);
        }

        .countdown-footer p {
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }

        .venue-text {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        /* Glitch Effect for Title */
        .glitch {
          position: relative;
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--bg-primary);
        }

        .glitch::before {
          animation: glitchTop 1s linear infinite;
          clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
          color: var(--accent-magenta);
        }

        .glitch::after {
          animation: glitchBottom 1.5s linear infinite;
          clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
          color: var(--accent-green);
        }

        @keyframes glitchTop {
          2%, 64% { transform: translate(2px, -2px); }
          4%, 60% { transform: translate(-2px, 2px); }
          62% { transform: translate(13px, -1px) skew(-13deg); }
        }

        @keyframes glitchBottom {
          2%, 64% { transform: translate(-2px, 0); }
          4%, 60% { transform: translate(-2px, 0); }
          62% { transform: translate(-22px, 5px) skew(21deg); }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }

          .hero-title {
            font-size: 4rem;
          }

          .countdown-display {
            flex-wrap: wrap;
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .title-line {
            flex-direction: column;
            gap: 0.5rem;
          }

          .title-year {
            font-size: 2rem;
            margin-left: 0;
          }

          .hero-tagline {
            font-size: 1.2rem;
          }

          .countdown-container {
            padding: 2rem 1rem;
          }

          .time-value {
            font-size: 2.5rem;
          }

          .countdown-display {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .hero-actions {
            flex-direction: column;
            gap: 1rem;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}