'use client';

import { useState, useEffect } from 'react';

export default function Timeline() {
  const [activePhase, setActivePhase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const phases = [
    {
      id: 0,
      round: "Round 0",
      title: "Idea Submission",
      subtitle: "Online PPT Presentation",
      description: "Submit your innovative ideas through a compelling PowerPoint presentation. This is your chance to showcase your vision and creativity.",
      date: "Registration Phase",
      duration: "Free Registration",
      requirements: [
        "Team of 2-4 members",
        "Problem statement selection",
        "Solution overview presentation",
        "Technology stack proposal"
      ],
      deliverables: [
        "PPT presentation (max 10 slides)",
        "Team member details",
        "Contact information",
        "Brief project description"
      ],
      icon: "💡",
      color: "cyan",
      status: "Open"
    },
    {
      id: 1,
      round: "Round 1",
      title: "Prototype Development",
      subtitle: "Online Implementation",
      description: "Build a working prototype of your solution. Demonstrate your technical skills and bring your ideas to life through code.",
      date: "Development Phase",
      duration: "1 Week Timeline",
      requirements: [
        "Functional prototype",
        "Clean, documented code",
        "Technology implementation",
        "User interface design"
      ],
      deliverables: [
        "Working prototype/demo",
        "Source code repository",
        "Technical documentation",
        "Demo video (5 minutes)"
      ],
      icon: "⚡",
      color: "magenta",
      status: "Upcoming"
    },
    {
      id: 2,
      round: "Round 2",
      title: "Final Hackathon",
      subtitle: "24-Hour Offline Challenge",
      description: "The ultimate coding marathon! 24 hours of non-stop development, collaboration, and innovation at the SRMIST campus.",
      date: "14th Oct 12:00 PM - 15th Oct 12:00 PM",
      duration: "24 Hours Non-stop",
      requirements: [
        "Team presence at venue",
        "Laptop and development tools",
        "Final project presentation",
        "Live demo to judges"
      ],
      deliverables: [
        "Complete project solution",
        "Live presentation",
        "Code walkthrough",
        "Impact demonstration"
      ],
      icon: "🚀",
      color: "green",
      status: "Final Stage"
    }
  ];

  const schedule = [
    { time: "12:00 PM", event: "Registration & Welcome", day: "Day 1" },
    { time: "01:00 PM", event: "Opening Ceremony", day: "Day 1" },
    { time: "02:00 PM", event: "Problem Statement Release", day: "Day 1" },
    { time: "02:30 PM", event: "Hackathon Begins", day: "Day 1" },
    { time: "06:00 PM", event: "Dinner Break", day: "Day 1" },
    { time: "10:00 PM", event: "Midnight Snacks", day: "Day 1" },
    { time: "02:00 AM", event: "Late Night Fuel", day: "Day 2" },
    { time: "08:00 AM", event: "Breakfast", day: "Day 2" },
    { time: "10:00 AM", event: "Final Sprint", day: "Day 2" },
    { time: "12:00 PM", event: "Submission Deadline", day: "Day 2" },
    { time: "01:00 PM", event: "Presentations Begin", day: "Day 2" },
    { time: "04:00 PM", event: "Results & Closing", day: "Day 2" }
  ];

  return (
    <section className="timeline-section">
      <div className="timeline-container">
        {/* Header */}
        <div className="timeline-header">
          <h1 className="timeline-title orbitron">
            <span className="neon-cyan">Event</span>{" "}
            <span className="neon-magenta glitch" data-text="Timeline">Timeline</span>
          </h1>
          <p className="timeline-subtitle rajdhani">
            Your Journey to <span className="neon-green">Cyberpunk Excellence</span>
          </p>
        </div>

        {/* Phase Navigation */}
        <div className="phase-nav">
          {phases.map((phase, index) => (
            <button
              key={phase.id}
              className={`phase-nav-btn ${activePhase === index ? 'active' : ''}`}
              onClick={() => setActivePhase(index)}
            >
              <span className="phase-icon">{phase.icon}</span>
              <span className="phase-label">{phase.round}</span>
            </button>
          ))}
        </div>

        {/* Main Timeline */}
        <div className="timeline-main">
          <div className="timeline-track">
            <div className="timeline-progress" style={{width: `${(activePhase + 1) * 33.33}%`}}></div>
          </div>

          <div className="phases-container">
            {phases.map((phase, index) => (
              <div
                key={phase.id}
                className={`phase-card cyber-card ${activePhase === index ? 'active' : ''} ${index < activePhase ? 'completed' : ''}`}
                onClick={() => setActivePhase(index)}
              >
                <div className="phase-marker">
                  <div className={`marker-icon neon-${phase.color}`}>
                    {phase.icon}
                  </div>
                  <div className="marker-line"></div>
                </div>

                <div className="phase-content">
                  <div className="phase-header">
                    <div className="phase-meta">
                      <span className={`phase-round neon-${phase.color} orbitron`}>
                        {phase.round}
                      </span>
                      <span className={`phase-status status-${phase.status.toLowerCase().replace(' ', '-')}`}>
                        {phase.status}
                      </span>
                    </div>
                    <h2 className={`phase-title orbitron neon-${phase.color}`}>
                      {phase.title}
                    </h2>
                    <h3 className="phase-subtitle rajdhani">
                      {phase.subtitle}
                    </h3>
                  </div>

                  <div className="phase-info">
                    <div className="phase-timing">
                      <div className="timing-item">
                        <span className="neon-cyan">📅</span>
                        <span>{phase.date}</span>
                      </div>
                      <div className="timing-item">
                        <span className="neon-magenta">⏱️</span>
                        <span>{phase.duration}</span>
                      </div>
                    </div>

                    <p className="phase-description">
                      {phase.description}
                    </p>

                    <div className="phase-details">
                      <div className="requirements-section">
                        <h4 className="neon-green orbitron">Requirements</h4>
                        <ul className="requirements-list">
                          {phase.requirements.map((req, idx) => (
                            <li key={idx}>
                              <span className="req-bullet neon-green">▶</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="deliverables-section">
                        <h4 className="neon-cyan orbitron">Deliverables</h4>
                        <ul className="deliverables-list">
                          {phase.deliverables.map((deliverable, idx) => (
                            <li key={idx}>
                              <span className="del-bullet neon-cyan">⚡</span>
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Schedule */}
        <div className="schedule-section">
          <h2 className="schedule-title orbitron neon-magenta">
            24-Hour Event Schedule
          </h2>
          <p className="schedule-subtitle">
            Complete timeline for the final hackathon round
          </p>

          <div className="schedule-grid">
            <div className="day-column">
              <h3 className="day-header neon-cyan orbitron">Day 1 - 14th October</h3>
              <div className="schedule-items">
                {schedule.filter(item => item.day === "Day 1").map((item, index) => (
                  <div key={index} className="schedule-item cyber-card">
                    <div className="schedule-time neon-green orbitron">
                      {item.time}
                    </div>
                    <div className="schedule-event">
                      {item.event}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="day-column">
              <h3 className="day-header neon-magenta orbitron">Day 2 - 15th October</h3>
              <div className="schedule-items">
                {schedule.filter(item => item.day === "Day 2").map((item, index) => (
                  <div key={index} className="schedule-item cyber-card">
                    <div className="schedule-time neon-green orbitron">
                      {item.time}
                    </div>
                    <div className="schedule-event">
                      {item.event}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="timeline-cta">
          <div className="cta-card cyber-card">
            <h2 className="cta-title orbitron">
              <span className="neon-cyan">Ready to</span>{" "}
              <span className="neon-magenta">Start Your</span>{" "}
              <span className="neon-green">Journey?</span>
            </h2>
            <p className="cta-description">
              Don't miss out on this incredible opportunity to showcase your skills 
              and compete with the best developers. Register now for HackElite'25!
            </p>
            <div className="cta-buttons">
              <button className="cyber-btn cyber-btn-primary">
                <span>Register for Round 0</span>
                <div className="btn-glow"></div>
              </button>
              <button className="cyber-btn cyber-btn-magenta">
                <span>View Guidelines</span>
                <div className="btn-glow"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .timeline-section {
          min-height: 100vh;
          background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-tertiary) 100%);
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
        }

        .timeline-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .timeline-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .timeline-title {
          font-size: 6rem;
          font-weight: 900;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .timeline-subtitle {
          font-size: 2.2rem;
          color: var(--text-secondary);
          font-weight: 300;
        }

        .phase-nav {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .phase-nav-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: transparent;
          border: 2px solid var(--accent-cyan);
          color: var(--accent-cyan);
          cursor: pointer;
          transition: all 0.3s ease;
          clip-path: polygon(15px 0, 100% 0, calc(100% - 15px) 100%, 0 100%);
        }

        .phase-nav-btn.active {
          background: var(--accent-cyan);
          color: var(--bg-primary);
          box-shadow: var(--shadow-cyan);
        }

        .phase-icon {
          font-size: 2rem;
        }

        .phase-label {
          font-family: 'Orbitron', monospace;
          font-weight: 600;
          font-size: 1.3rem;
        }

        .timeline-main {
          position: relative;
          margin-bottom: 6rem;
        }

        .timeline-track {
          position: absolute;
          top: 80px;
          left: 80px;
          right: 80px;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          z-index: 1;
        }

        .timeline-progress {
          height: 100%;
          background: var(--gradient-primary);
          border-radius: 2px;
          transition: width 0.5s ease;
        }

        .phases-container {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .phase-card {
          display: flex;
          gap: 2rem;
          padding: 2.5rem;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
          background: rgba(26, 26, 46, 0.6);
          backdrop-filter: blur(10px);
        }

        .phase-card.active {
          background: rgba(26, 26, 46, 0.9);
          border-color: var(--accent-cyan);
          box-shadow: var(--shadow-cyan);
          transform: translateX(20px);
        }

        .phase-card.completed {
          background: rgba(57, 255, 20, 0.1);
          border-color: var(--accent-green);
        }

        .phase-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .marker-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          border: 3px solid currentColor;
          background: var(--bg-primary);
          position: relative;
        }

        .marker-line {
          width: 2px;
          height: 150px;
          background: rgba(255, 255, 255, 0.2);
          margin-top: 1rem;
        }

        .phase-card:last-child .marker-line {
          display: none;
        }

        .phase-content {
          flex: 1;
        }

        .phase-header {
          margin-bottom: 2rem;
        }

        .phase-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .phase-round {
          font-size: 2.2rem;
          font-weight: 700;
        }

        .phase-status {
          padding: 0.3rem 1rem;
          border-radius: 20px;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .status-open {
          background: rgba(57, 255, 20, 0.2);
          color: var(--accent-green);
          border: 1px solid var(--accent-green);
        }

        .status-upcoming {
          background: rgba(255, 0, 110, 0.2);
          color: var(--accent-magenta);
          border: 1px solid var(--accent-magenta);
        }

        .status-final-stage {
          background: rgba(0, 212, 255, 0.2);
          color: var(--accent-cyan);
          border: 1px solid var(--accent-cyan);
        }

        .phase-title {
          font-size: 3.5rem;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .phase-subtitle {
          font-size: 2rem;
          color: var(--text-secondary);
          font-weight: 400;
        }

        .phase-timing {
          display: flex;
          gap: 2rem;
          margin-bottom: 1.5rem;
        }

        .timing-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.7rem;
        }

        .phase-description {
          font-size: 1.8rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .phase-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .requirements-section h4,
        .deliverables-section h4 {
          font-size: 2rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .requirements-list,
        .deliverables-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .requirements-list li,
        .deliverables-list li {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: var(--text-secondary);
          font-size: 1.4rem;
        }

        .req-bullet,
        .del-bullet {
          font-size: 0.8rem;
        }

        .schedule-section {
          margin-bottom: 4rem;
        }

        .schedule-title {
          font-size: 3.5rem;
          text-align: center;
          margin-bottom: 1rem;
        }

        .schedule-subtitle {
          text-align: center;
          color: var(--text-secondary);
          margin-bottom: 3rem;
          font-size: 1.6rem;
        }

        .schedule-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .day-header {
          font-size: 2.2rem;
          margin-bottom: 2rem;
          text-align: center;
          padding: 1rem;
          border-bottom: 2px solid currentColor;
        }

        .schedule-items {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .schedule-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem;
          background: rgba(26, 26, 46, 0.6);
        }

        .schedule-time {
          font-size: 1.6rem;
          font-weight: 700;
          min-width: 100px;
        }

        .schedule-event {
          flex: 1;
          color: var(--text-secondary);
          font-size: 1.4rem;
        }

        .timeline-cta {
          text-align: center;
        }

        .cta-card {
          padding: 4rem;
          background: rgba(26, 26, 46, 0.9);
          border: 2px solid var(--border-glow);
        }

        .cta-title {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
        }

        .cta-description {
          font-size: 1.7rem;
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
          .phase-nav {
            flex-wrap: wrap;
            gap: 1rem;
          }

          .phase-details {
            grid-template-columns: 1fr;
          }

          .schedule-grid {
            grid-template-columns: 1fr;
          }

          .phase-card {
            flex-direction: column;
            text-align: center;
          }

          .timeline-track {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .timeline-title {
            font-size: 2.5rem;
          }

          .phase-card {
            padding: 2rem;
          }

          .phase-title {
            font-size: 1.5rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .timing-item {
            flex-direction: column;
            text-align: center;
            gap: 0.25rem;
          }
        }
      `}</style>
    </section>
  );
}