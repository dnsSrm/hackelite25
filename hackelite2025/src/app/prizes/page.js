'use client';

import { useState, useEffect } from 'react';

export default function Prizes() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [animateValues, setAnimateValues] = useState(false);

  useEffect(() => {
    setAnimateValues(true);
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prizeCategories = [
    {
      title: "Winners Circle",
      description: "Top performers in the final hackathon",
      prizes: [
        {
          position: "1st Place",
          title: "Grand Champions",
          amount: "₹XX,XXX",
          icon: "🥇",
          color: "neon-cyan",
          perks: [
            "Trophy & Certificate",
            "Internship Opportunities", 
            "Mentorship Program",
            "Tech Goodies Package"
          ]
        },
        {
          position: "2nd Place", 
          title: "Elite Runners-up",
          amount: "₹XX,XXX",
          icon: "🥈",
          color: "neon-magenta",
          perks: [
            "Certificate & Medal",
            "Industry Connections",
            "Premium Swag Kit",
            "LinkedIn Recommendations"
          ]
        },
        {
          position: "3rd Place",
          title: "Rising Stars", 
          amount: "₹XX,XXX",
          icon: "🥉",
          color: "neon-green",
          perks: [
            "Certificate & Badge",
            "Networking Access",
            "Exclusive Merchandise",
            "Portfolio Enhancement"
          ]
        }
      ]
    },
    {
      title: "Special Categories",
      description: "Recognition for innovation and creativity",
      prizes: [
        {
          position: "Best Innovation",
          title: "Tech Innovators",
          amount: "₹XX,XXX",
          icon: "💡",
          color: "neon-cyan",
          perks: [
            "Innovation Award",
            "Patent Guidance",
            "Startup Mentorship",
            "Tech Resources"
          ]
        },
        {
          position: "Best UI/UX",
          title: "Design Masters",
          amount: "₹XX,XXX", 
          icon: "🎨",
          color: "neon-magenta",
          perks: [
            "Design Certificate",
            "Portfolio Review",
            "Design Tools License",
            "Creative Resources"
          ]
        },
        {
          position: "People's Choice",
          title: "Crowd Favorites",
          amount: "₹XX,XXX",
          icon: "❤️",
          color: "neon-green",
          perks: [
            "Popular Vote Trophy",
            "Community Recognition",
            "Social Media Feature",
            "Special Mention"
          ]
        }
      ]
    },
    {
      title: "Participation Rewards",
      description: "Everyone goes home with something amazing",
      prizes: [
        {
          position: "All Participants",
          title: "Coding Warriors",
          amount: "Priceless",
          icon: "🎁",
          color: "neon-cyan",
          perks: [
            "Participation Certificate",
            "HackElite'25 T-Shirt",
            "Sticker Pack",
            "Networking Opportunities"
          ]
        },
        {
          position: "Round 1 Qualifiers",
          title: "Elite Coders",
          amount: "Exclusive",
          icon: "⚡",
          color: "neon-magenta", 
          perks: [
            "Qualifier Badge",
            "Premium Notebook",
            "Tech Stickers",
            "Community Access"
          ]
        },
        {
          position: "Round 0 Participants",
          title: "Idea Generators",
          amount: "Special",
          icon: "🚀",
          color: "neon-green",
          perks: [
            "Digital Certificate",
            "Discord Access",
            "Resource Library",
            "Future Event Priority"
          ]
        }
      ]
    }
  ];

  const sponsorLogos = [
    { name: "TechCorp", logo: "🏢" },
    { name: "InnovateInc", logo: "💻" },
    { name: "FutureCode", logo: "🚀" },
    { name: "DigitalEdge", logo: "⚡" },
    { name: "CodeCraft", logo: "🛠️" },
    { name: "NextGen", logo: "🌟" }
  ];

  const stats = [
    { number: "XX,XXX", label: "Total Prize Pool", prefix: "₹", animated: true },
    { number: "50", label: "Total Winners", prefix: "", animated: true },
    { number: "6", label: "Prize Categories", prefix: "", animated: false },
    { number: "100", label: "Participation Rate", prefix: "", suffix: "%", animated: false }
  ];

  return (
    <section className="prizes-section">
      <div className="prizes-container">
        {/* Header */}
        <div className="prizes-header">
          <h1 className="prizes-title orbitron">
            <span className="neon-cyan">Prizes &</span>{" "}
            <span className="neon-magenta glitch" data-text="Rewards">Rewards</span>
          </h1>
          <p className="prizes-subtitle rajdhani">
            Compete for <span className="neon-green">₹XX,XXX+</span> in prizes and exclusive rewards
          </p>
        </div>

        {/* Stats Section */}
        <div className="stats-showcase">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card cyber-card floating">
                <div className={`stat-value orbitron ${index % 2 === 0 ? 'neon-cyan' : 'neon-magenta'}`}>
                  {stat.prefix}
                  <span className={animateValues && stat.animated ? 'count-up' : ''}>
                    {stat.number}
                  </span>
                  {stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-glow"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Navigation */}
        <div className="category-nav">
          {prizeCategories.map((category, index) => (
            <button
              key={index}
              className={`category-btn ${activeCategory === index ? 'active' : ''}`}
              onClick={() => setActiveCategory(index)}
            >
              <span className="category-title">{category.title}</span>
              <span className="category-desc">{category.description}</span>
            </button>
          ))}
        </div>

        {/* Prize Cards */}
        <div className="prizes-showcase">
          <div className="category-header">
            <h2 className="category-title orbitron neon-green">
              {prizeCategories[activeCategory].title}
            </h2>
            <p className="category-description">
              {prizeCategories[activeCategory].description}
            </p>
          </div>

          <div className="prizes-grid">
            {prizeCategories[activeCategory].prizes.map((prize, index) => (
              <div
                key={index}
                className={`prize-card cyber-card ${prize.color.replace('neon-', '')}`}
              >
                <div className="prize-header">
                  <div className={`prize-icon ${prize.color}`}>
                    {prize.icon}
                  </div>
                  <div className="prize-position">
                    {prize.position}
                  </div>
                </div>

                <div className="prize-content">
                  <h3 className={`prize-title orbitron ${prize.color}`}>
                    {prize.title}
                  </h3>
                  <div className={`prize-amount orbitron ${prize.color}`}>
                    {prize.amount}
                  </div>
                </div>

                <div className="prize-perks">
                  <h4 className="perks-title">What You Get:</h4>
                  <ul className="perks-list">
                    {prize.perks.map((perk, perkIndex) => (
                      <li key={perkIndex} className="perk-item">
                        <span className={`perk-bullet ${prize.color}`}>▶</span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="prize-glow"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Perks */}
        <div className="perks-section">
          <h2 className="perks-title orbitron neon-magenta">
            Beyond the Prizes
          </h2>
          <div className="perks-grid">
            <div className="perk-card cyber-card">
              <div className="perk-icon neon-cyan">🎵</div>
              <h3 className="neon-cyan orbitron">Entertainment</h3>
              <p>Live music performances, DJ sets, and fun activities throughout the 24-hour event</p>
            </div>
            <div className="perk-card cyber-card">
              <div className="perk-icon neon-magenta">🍕</div>
              <h3 className="neon-magenta orbitron">Food & Refreshments</h3>
              <p>Complimentary meals, snacks, energy drinks, and caffeine to fuel your coding marathon</p>
            </div>
            <div className="perk-card cyber-card">
              <div className="perk-icon neon-green">👥</div>
              <h3 className="neon-green orbitron">Networking</h3>
              <p>Connect with industry professionals, potential employers, and like-minded developers</p>
            </div>
            <div className="perk-card cyber-card">
              <div className="perk-icon neon-cyan">🧠</div>
              <h3 className="neon-cyan orbitron">Mentorship</h3>
              <p>Get guidance from experienced developers and industry experts throughout the event</p>
            </div>
            <div className="perk-card cyber-card">
              <div className="perk-icon neon-magenta">📸</div>
              <h3 className="neon-magenta orbitron">Memories</h3>
              <p>Professional photography, video coverage, and social media features of your journey</p>
            </div>
            <div className="perk-card cyber-card">
              <div className="perk-icon neon-green">🌟</div>
              <h3 className="neon-green orbitron">Recognition</h3>
              <p>LinkedIn recommendations, portfolio enhancement, and industry recognition for participants</p>
            </div>
          </div>
        </div>

        {/* Sponsors Section */}
        <div className="sponsors-section">
          <h2 className="sponsors-title orbitron neon-cyan">
            Our Amazing Sponsors
          </h2>
          <p className="sponsors-subtitle">
            Making HackElite'25 possible through their generous support
          </p>
          <div className="sponsors-grid">
            {sponsorLogos.map((sponsor, index) => (
              <div key={index} className="sponsor-card cyber-card">
                <div className="sponsor-logo">{sponsor.logo}</div>
                <div className="sponsor-name orbitron">{sponsor.name}</div>
              </div>
            ))}
          </div>
          <div className="sponsor-cta">
            <p>Interested in sponsoring HackElite'25?</p>
            <button className="cyber-btn cyber-btn-primary">
              <span>Become a Sponsor</span>
              <div className="btn-glow"></div>
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="prizes-cta">
          <div className="cta-card cyber-card">
            <h2 className="cta-title orbitron">
              <span className="neon-cyan">Ready to</span>{" "}
              <span className="neon-magenta">Win Big?</span>
            </h2>
            <p className="cta-description">
              Don't miss your chance to compete for amazing prizes and unforgettable experiences. 
              Register now and join the elite coding community!
            </p>
            <div className="cta-buttons">
              <button className="cyber-btn cyber-btn-primary">
                <span>Register Now - Free!</span>
                <div className="btn-glow"></div>
              </button>
              <button className="cyber-btn cyber-btn-magenta">
                <span>View Full Rules</span>
                <div className="btn-glow"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .prizes-section {
          min-height: 100vh;
          background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-tertiary) 100%);
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
        }

        .prizes-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .prizes-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .prizes-title {
          font-size: 4rem;
          font-weight: 900;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .prizes-subtitle {
          font-size: 1.5rem;
          color: var(--text-secondary);
          font-weight: 300;
        }

        .stats-showcase {
          margin-bottom: 4rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .stat-card {
          padding: 2rem;
          text-align: center;
          background: rgba(26, 26, 46, 0.8);
          position: relative;
          overflow: hidden;
        }

        .stat-value {
          font-size: 3rem;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .count-up {
          animation: countUp 2s ease-out;
        }

        @keyframes countUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .stat-label {
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.9rem;
        }

        .stat-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.1), transparent);
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% { left: -100%; }
          50% { left: 100%; }
          100% { left: 100%; }
        }

        .category-nav {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }

        .category-btn {
          padding: 1.5rem 2rem;
          background: rgba(26, 26, 46, 0.6);
          border: 2px solid rgba(0, 212, 255, 0.3);
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s ease;
          clip-path: polygon(15px 0, 100% 0, calc(100% - 15px) 100%, 0 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .category-btn.active {
          background: rgba(0, 212, 255, 0.1);
          border-color: var(--accent-cyan);
          box-shadow: var(--shadow-cyan);
        }

        .category-btn .category-title {
          font-family: 'Orbitron', monospace;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .category-btn .category-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .prizes-showcase {
          margin-bottom: 4rem;
        }

        .category-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .category-header .category-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .category-description {
          font-size: 1.2rem;
          color: var(--text-secondary);
        }

        .prizes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .prize-card {
          padding: 2.5rem;
          background: rgba(26, 26, 46, 0.8);
          position: relative;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .prize-card.cyan {
          border-color: var(--accent-cyan);
        }

        .prize-card.magenta {
          border-color: var(--accent-magenta);
        }

        .prize-card.green {
          border-color: var(--accent-green);
        }

        .prize-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }

        .prize-icon {
          font-size: 4rem;
          line-height: 1;
        }

        .prize-position {
          font-size: 0.9rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .prize-content {
          text-align: center;
          margin-bottom: 2rem;
        }

        .prize-title {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .prize-amount {
          font-size: 2.5rem;
          font-weight: 900;
          line-height: 1;
        }

        .prize-perks {
          flex: 1;
        }

        .perks-title {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        .perks-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .perk-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .perk-bullet {
          font-size: 0.8rem;
        }

        .prize-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent, rgba(0, 212, 255, 0.05), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .prize-card:hover .prize-glow {
          opacity: 1;
        }

        .perks-section {
          margin-bottom: 4rem;
        }

        .perks-title {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 3rem;
        }

        .perks-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .perk-card {
          padding: 2rem;
          text-align: center;
          background: rgba(26, 26, 46, 0.6);
        }

        .perk-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .perk-card h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .perk-card p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .sponsors-section {
          margin-bottom: 4rem;
          text-align: center;
        }

        .sponsors-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .sponsors-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
        }

        .sponsors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .sponsor-card {
          padding: 2rem;
          background: rgba(26, 26, 46, 0.6);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .sponsor-logo {
          font-size: 3rem;
        }

        .sponsor-name {
          font-size: 1rem;
          color: var(--text-secondary);
        }

        .sponsor-cta p {
          margin-bottom: 1.5rem;
          color: var(--text-secondary);
        }

        .prizes-cta {
          text-align: center;
        }

        .cta-card {
          padding: 4rem;
          background: rgba(26, 26, 46, 0.9);
          border: 2px solid var(--border-glow);
        }

        .cta-title {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }

        .cta-description {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
        }

        .cyber-btn-primary {
          background: var(--gradient-primary);
          border: none;
          color: var(--text-primary);
        }

        .cyber-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-cyan), var(--shadow-magenta);
        }

        /* Glitch Effect */
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
        }

        .glitch::before {
          animation: glitchTop 1s linear infinite;
          clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
          color: var(--accent-cyan);
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
          .prizes-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .prizes-title {
            font-size: 2.5rem;
          }

          .category-nav {
            flex-direction: column;
            align-items: center;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .sponsors-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .perks-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}