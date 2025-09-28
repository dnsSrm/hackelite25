'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function About() {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: "🚀",
      title: "Innovation Hub",
      description: "Push the boundaries of technology with cutting-edge solutions and creative problem-solving.",
      color: "neon-cyan"
    },
    {
      icon: "🌐",
      title: "Global Network",
      description: "Connect with developers, mentors, and industry experts from around the world.",
      color: "neon-magenta"
    },
    {
      icon: "🏆",
      title: "Elite Competition",
      description: "Compete at the highest level and showcase your skills in this prestigious hackathon.",
      color: "neon-green"
    }
  ];

  const stats = [
    { number: "24", label: "Hours", suffix: "+" },
    { number: "500", label: "Participants", suffix: "+" },
    { number: "50", label: "Projects", suffix: "+" },
    { number: "₹XX,XXX", label: "Prize Pool", suffix: "" }
  ];

  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        {/* Header */}
        <div className={styles.aboutHeader}>
          <h1 className={`${styles.aboutTitle} orbitron`}>
            <span className="neon-cyan">About</span>{" "}
            <span className="neon-magenta glitch" data-text="HackElite">HackElite</span>
            <span className="neon-green">'25</span>
          </h1>
          <p className={`${styles.aboutSubtitle} rajdhani`}>
            Where Innovation Meets <span className="neon-cyan">Cyberpunk Reality</span>
          </p>
        </div>

        {/* Main Content Grid - 2x2 Layout */}
        <div className={styles.aboutContent}>
          
          {/* Top Left: The Ultimate Hackathon */}
          <div className={styles.hackeliteOverview}>
            <div className={styles.iconHeader}>
              <div className="neon-magenta" style={{fontSize: '3rem'}}>🚀</div>
              <h2 className="orbitron neon-magenta">The Ultimate Hackathon</h2>
            </div>
            <p>
              HackElite'25 is not just another hackathon—it's a digital revolution. Join us for 24 hours of intense coding,
              innovative problem-solving, and networking with the brightest minds in tech.
            </p>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className="stat-number neon-cyan orbitron">24</div>
                <div className="stat-label">Hours</div>
              </div>
              <div className={styles.statItem}>
                <div className="stat-number neon-magenta orbitron">500+</div>
                <div className="stat-label">Coders</div>
              </div>
              <div className={styles.statItem}>
                <div className="stat-number neon-green orbitron">1L+</div>
                <div className="stat-label">Prize Pool</div>
              </div>
            </div>
          </div>

          {/* Top Right: About DNS */}
          <div className={styles.aboutDns}>
            <div className={styles.iconHeader}>
              <div className="neon-cyan" style={{fontSize: '3rem'}}>🏛️</div>
              <h2 className="orbitron neon-cyan">About DNS</h2>
            </div>
            <p>
              Developer Network Space (DNS) is the premier tech community at SRMIST Vadapalani, fostering
              innovation and technical excellence among students since 2019.
            </p>
            <div className={styles.dnsStats}>
              <div className={styles.statPoint}>▶ 600+ Active Members</div>
              <div className={styles.statPoint}>▶ 50+ Events Organized</div>
              <div className={styles.statPoint}>▶ Industry Partnerships</div>
              <div className={styles.statPoint}>▶ Open Source Projects</div>
            </div>
          </div>

          {/* Bottom Left: Our Mission */}
          <div className={styles.ourMission}>
            <div className={styles.iconHeader}>
              <div className="neon-cyan" style={{fontSize: '3rem'}}>🎯</div>
              <h2 className="orbitron neon-cyan">Our Mission</h2>
            </div>
            <p>
              To create a platform where creativity meets technology, enabling participants to showcase
              their skills and build solutions for real-world problems.
            </p>
            <div className={styles.missionPoints}>
              <div className={styles.missionPoint}>
                <span className="neon-cyan">💡</span>
                <span>Innovation</span>
              </div>
              <div className={styles.missionPoint}>
                <span className="neon-magenta">🤝</span>
                <span>Collaboration</span>
              </div>
              <div className={styles.missionPoint}>
                <span className="neon-green">🎯</span>
                <span>Excellence</span>
              </div>
            </div>
          </div>

          {/* Bottom Right: Why Participate */}
          <div className={styles.whyParticipate}>
            <div className={styles.iconHeader}>
              <div className="neon-green" style={{fontSize: '3rem'}}>⭐</div>
              <h2 className="orbitron neon-green">Why Participate?</h2>
            </div>
            <p>
              Beyond the prizes, HackElite offers unparalleled learning opportunities, industry mentorship, and
              a chance to be part of something extraordinary.
            </p>
            <div className={styles.benefits}>
              <div className={styles.benefit}>▶ Industry Mentor Guidance</div>
              <div className={styles.benefit}>▶ Networking Opportunities</div>
              <div className={styles.benefit}>▶ Certificate of Participation</div>
              <div className={styles.benefit}>▶ Showcase Platform</div>
              <div className={styles.benefit}>▶ Career Opportunities</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={`${styles.ctaTitle} orbitron`}>
              <span className="neon-cyan">Ready to</span>{" "}
              <span className="neon-magenta">Join the</span>{" "}
              <span className="neon-green">Revolution?</span>
            </h2>
            <p className={styles.ctaDescription}>
              Step into the future of coding and be part of the most exciting hackathon
              experience. Register now and claim your spot in the cyberpunk coding elite.
            </p>
            <div className={styles.ctaButtons}>
              <button className="cyber-btn cyber-btn-primary">
                <span>Register Now</span>
                <div className="btn-glow"></div>
              </button>
              <button className="cyber-btn cyber-btn-magenta">
                <span>Download Brochure</span>
                <div className="btn-glow"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
