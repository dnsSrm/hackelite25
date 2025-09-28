'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Timeline", href: "#timeline" },
    { name: "Registration", href: "#registration" },
    { name: "Prizes", href: "#prizes" },
    { name: "Contact", href: "#contact" }
  ];

  const socialMedia = [
    { 
      platform: "Instagram", 
      handle: "@dns_srm", 
      icon: "📸", 
      color: "neon-magenta",
      url: "https://www.instagram.com/dns_srm?igsh=MWg5MW9rZTY4eTlvag==" 
    },
    { 
      platform: "LinkedIn", 
      handle: "DNS Club SRM", 
      icon: "💼", 
      color: "neon-cyan",
      url: "https://www.linkedin.com/company/dns-club-srm/" 
    }
  ];

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="brand-logo">
              <div className="logo-container">
                <div className="logo-text orbitron neon-cyan">DNS</div>
                <div className="logo-subtitle">Developer Network Space</div>
              </div>
            </div>
            
            <div className="brand-info">
              <h3 className="brand-title orbitron">
                <span className="neon-cyan">Hack</span>
                <span className="neon-magenta">Elite</span>
                <span className="neon-green">'25</span>
              </h3>
              <p className="brand-tagline">
                One Night • One Spirit • One Tradition
              </p>
              <p className="brand-description">
                The premier cyberpunk-themed hackathon bringing together the brightest minds 
                in technology for 24 hours of innovation, creativity, and coding excellence.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section-content">
            <h4 className="footer-heading orbitron neon-magenta">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index} className="footer-link-item">
                  <a href={link.href} className="footer-link">
                    <span className="link-bullet neon-cyan">▶</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h4 className="social-heading orbitron neon-magenta">
            Follow DNS Community
          </h4>
          <div className="social-links">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-link cyber-card ${social.color.replace('neon-', '')}`}
              >
                <div className={`social-icon ${social.color}`}>
                  {social.icon}
                </div>
                <div className="social-info">
                  <div className="social-platform orbitron">{social.platform}</div>
                  <div className={`social-handle ${social.color}`}>{social.handle}</div>
                </div>
                <div className="social-glow"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Event Countdown */}
        <div className="footer-countdown">
          <div className="countdown-content cyber-card">
            <h4 className="countdown-heading orbitron neon-magenta">
              Event Countdown
            </h4>
            <div className="countdown-display">
              <div className="countdown-item">
                <div className="countdown-number neon-cyan orbitron">16</div>
                <div className="countdown-label">Days</div>
              </div>
              <div className="countdown-separator neon-magenta">:</div>
              <div className="countdown-item">
                <div className="countdown-number neon-green orbitron">04</div>
                <div className="countdown-label">Hours</div>
              </div>
              <div className="countdown-separator neon-cyan">:</div>
              <div className="countdown-item">
                <div className="countdown-number neon-magenta orbitron">23</div>
                <div className="countdown-label">Minutes</div>
              </div>
            </div>
            <div className="countdown-cta">
              <button className="cyber-btn cyber-btn-magenta">
                <span>Register Now!</span>
                <div className="btn-glow"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                © {currentYear} <span className="neon-cyan">HackElite'25</span> | 
                Organized by <span className="neon-magenta">Developer Network Space</span> | 
                <span className="neon-green">SRM Institute of Science & Technology</span>
              </p>
            </div>
            
            <div className="footer-meta">
              <div className="footer-links-bottom">
                <a href="#privacy" className="footer-meta-link">Privacy</a>
                <span className="separator">|</span>
                <a href="#terms" className="footer-meta-link">Terms</a>
                <span className="separator">|</span>
                <a href="#cookies" className="footer-meta-link">Cookies</a>
                <span className="separator">|</span>
                <a href="#sitemap" className="footer-meta-link">Sitemap</a>
              </div>
            </div>

            <div className="footer-credits">
              <p className="credits-text">
                Designed & Developed with <span className="neon-magenta">❤️</span> by 
                <span className="neon-cyan"> DNS Tech Team</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-section {
          background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
          border-top: 2px solid var(--border-glow);
          position: relative;
          overflow: hidden;
        }

        .footer-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--gradient-primary);
          animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
          from { opacity: 0.5; }
          to { opacity: 1; }
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 4rem 2rem 0;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .logo-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .logo-text {
          font-size: 2rem;
          font-weight: 900;
          line-height: 1;
        }

        .logo-subtitle {
          font-size: 0.8rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .brand-title {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .brand-tagline {
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          font-style: italic;
        }

        .brand-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .footer-section-content h4 {
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .footer-link {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: var(--text-secondary);
          transition: all 0.3s ease;
          padding: 0.3rem 0;
        }

        .footer-link:hover {
          color: var(--accent-cyan);
          transform: translateX(5px);
        }

        .link-bullet {
          font-size: 0.8rem;
          transition: all 0.3s ease;
        }

        .footer-link:hover .link-bullet {
          transform: scale(1.2);
        }

        .footer-social {
          margin-bottom: 3rem;
        }

        .social-heading {
          font-size: 1.8rem;
          text-align: center;
          margin-bottom: 2rem;
        }

        .social-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(26, 26, 46, 0.6);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .social-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 212, 255, 0.2);
        }

        .social-link.cyan:hover {
          box-shadow: 0 10px 25px rgba(0, 212, 255, 0.3);
        }

        .social-link.magenta:hover {
          box-shadow: 0 10px 25px rgba(255, 0, 110, 0.3);
        }

        .social-link.green:hover {
          box-shadow: 0 10px 25px rgba(57, 255, 20, 0.3);
        }

        .social-icon {
          font-size: 2rem;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid currentColor;
          border-radius: 50%;
        }

        .social-info {
          flex: 1;
        }

        .social-platform {
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
          font-weight: 600;
        }

        .social-handle {
          font-size: 0.9rem;
        }

        .social-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.8s ease;
        }

        .social-link:hover .social-glow {
          left: 100%;
        }

        .footer-countdown {
          margin-bottom: 3rem;
        }

        .countdown-content {
          padding: 2.5rem;
          background: rgba(26, 26, 46, 0.8);
          text-align: center;
        }

        .countdown-heading {
          font-size: 1.8rem;
          margin-bottom: 2rem;
        }

        .countdown-display {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .countdown-item {
          text-align: center;
        }

        .countdown-number {
          font-size: 2.5rem;
          font-weight: 900;
          line-height: 1;
        }

        .countdown-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-top: 0.25rem;
        }

        .countdown-separator {
          font-size: 2rem;
          font-weight: 900;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 2rem 0;
        }

        .footer-bottom-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-align: center;
        }

        .copyright p {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .footer-links-bottom {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
        }

        .footer-meta-link {
          color: var(--text-secondary);
          font-size: 0.8rem;
          transition: color 0.3s ease;
        }

        .footer-meta-link:hover {
          color: var(--accent-cyan);
        }

        .separator {
          color: var(--text-muted);
        }

        .credits-text {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .cyber-btn-small {
          padding: 0.8rem 1.5rem;
          font-size: 0.9rem;
        }

        .cyber-btn-primary {
          background: var(--gradient-primary);
          border: none;
          color: var(--text-primary);
        }

        .cyber-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-cyan), var(--shadow-magenta);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .social-links {
            grid-template-columns: 1fr;
          }

          .countdown-display {
            flex-wrap: wrap;
            gap: 1.5rem;
          }

          .footer-links-bottom {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </footer>
  );
}