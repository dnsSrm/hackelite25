'use client';

import { useState } from 'react';

export default function Contact() {
  const [selectedContact, setSelectedContact] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactCategories = [
    {
      title: "Faculty Coordinators",
      description: "Academic guidance and event oversight",
      contacts: [
        {
          name: "Dr. Sridevi Sridhar",
          role: "Faculty Coordinator",
          department: "Department of Computer Science & Engineering",
          email: "sridevi.sridhar@srmist.edu.in",
          phone: "",
          specialization: "Artificial Intelligence & Machine Learning",
          icon: "👩‍🏫",
          color: "neon-cyan"
        },
        {
          name: "Dr. N. Saraswathi",
          role: "Faculty Coordinator", 
          department: "Department of Computer Science & Engineering",
          email: "saraswathi.n@srmist.edu.in",
          phone: "",
          specialization: "Data Science & Analytics",
          icon: "👩‍💼",
          color: "neon-magenta"
        }
      ]
    },
    {
      title: "Student Coordinators",
      description: "Student support and logistics",
      contacts: [
        {
          name: "Mr. Yuvan Srinivas B S",
          role: "Student Coordinator",
          department: "Computer Science & Engineering",
          email: "yuvan.srinivas@example.com",
          phone: "9962206750",
          year: "Final Year",
          icon: "👨‍💻",
          color: "neon-green"
        },
        {
          name: "Mr. Shravan Chumble", 
          role: "Student Coordinator",
          department: "Computer Science & Engineering", 
          email: "shravan.chumble@example.com",
          phone: "7823844791",
          year: "Final Year",
          icon: "👨‍🎓",
          color: "neon-cyan"
        }
      ]
    },
    {
      title: "Technical Support",
      description: "Technical queries and platform issues",
      contacts: [
        {
          name: "DNS Technical Team",
          role: "Technical Support",
          department: "Developer Network Space",
          email: "tech@dns.srmist.edu.in",
          phone: "",
          availability: "24/7 during event",
          icon: "⚙️",
          color: "neon-magenta"
        },
        {
          name: "Registration Support",
          role: "Registration Assistance",
          department: "HackElite'25 Team",
          email: "register@hackelite.srmist.edu.in", 
          phone: "",
          availability: "9 AM - 6 PM",
          icon: "📝",
          color: "neon-green"
        }
      ]
    }
  ];

  const campusInfo = {
    name: "SRMIST Vadapalani Campus",
    address: "No. 32, Rajiv Gandhi Salai, Ramapuram, Chennai - 600089, Tamil Nadu, India",
    landmark: "Near Ramapuram Metro Station",
    coordinates: { lat: 13.0358, lng: 80.1971 },
    facilities: [
      "High-speed WiFi",
      "24/7 Security", 
      "Cafeteria & Food Courts",
      "Parking Available",
      "Air Conditioned Halls",
      "Backup Power Supply"
    ]
  };

  const socialLinks = [
    { platform: "Instagram", handle: "@dns_srmist", icon: "📸", color: "neon-magenta" },
    { platform: "LinkedIn", handle: "DNS SRMIST", icon: "💼", color: "neon-cyan" },
    { platform: "GitHub", handle: "dns-srmist", icon: "💻", color: "neon-green" },
    { platform: "Discord", handle: "DNS Community", icon: "🎮", color: "neon-magenta" },
    { platform: "Twitter", handle: "@dns_srmist", icon: "🐦", color: "neon-cyan" },
    { platform: "YouTube", handle: "DNS SRMIST", icon: "📺", color: "neon-green" }
  ];

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h1 className="contact-title orbitron">
            <span className="neon-cyan">Get in</span>{" "}
            <span className="neon-magenta glitch" data-text="Touch">Touch</span>
          </h1>
          <p className="contact-subtitle rajdhani">
            Have questions about <span className="neon-green">HackElite'25</span>? We're here to help!
          </p>
        </div>

        {/* Contact Categories */}
        <div className="contact-categories">
          <div className="category-nav">
            {contactCategories.map((category, index) => (
              <button
                key={index}
                className={`category-btn ${selectedContact === index ? 'active' : ''}`}
                onClick={() => setSelectedContact(index)}
              >
                <span className="category-title">{category.title}</span>
                <span className="category-desc">{category.description}</span>
              </button>
            ))}
          </div>

          <div className="contacts-display">
            <div className="category-info">
              <h2 className="orbitron neon-green">
                {contactCategories[selectedContact].title}
              </h2>
              <p className="category-description">
                {contactCategories[selectedContact].description}
              </p>
            </div>

            <div className="contacts-grid">
              {contactCategories[selectedContact].contacts.map((contact, index) => (
                <div key={index} className="contact-card cyber-card">
                  <div className="contact-header">
                    <div className={`contact-icon ${contact.color}`}>
                      {contact.icon}
                    </div>
                    <div className="contact-info">
                      <h3 className={`contact-name orbitron ${contact.color}`}>
                        {contact.name}
                      </h3>
                      <p className="contact-role">{contact.role}</p>
                    </div>
                  </div>

                  <div className="contact-details">
                    <div className="detail-item">
                      <span className="detail-label">Department:</span>
                      <span className="detail-value">{contact.department}</span>
                    </div>
                    
                    {contact.email && (
                      <div className="detail-item">
                        <span className="detail-label neon-cyan">📧</span>
                        <a href={`mailto:${contact.email}`} className="detail-link">
                          {contact.email}
                        </a>
                      </div>
                    )}
                    
                    {contact.phone && (
                      <div className="detail-item">
                        <span className="detail-label neon-green">📞</span>
                        <a href={`tel:${contact.phone}`} className="detail-link orbitron">
                          {contact.phone}
                        </a>
                      </div>
                    )}

                    {contact.specialization && (
                      <div className="detail-item">
                        <span className="detail-label">Specialization:</span>
                        <span className="detail-value">{contact.specialization}</span>
                      </div>
                    )}

                    {contact.year && (
                      <div className="detail-item">
                        <span className="detail-label">Year:</span>
                        <span className="detail-value">{contact.year}</span>
                      </div>
                    )}

                    {contact.availability && (
                      <div className="detail-item">
                        <span className="detail-label">Available:</span>
                        <span className="detail-value neon-green">{contact.availability}</span>
                      </div>
                    )}
                  </div>

                  <div className="contact-actions">
                    {contact.email && (
                      <button className="cyber-btn cyber-btn-small">
                        <span>Send Email</span>
                      </button>
                    )}
                    {contact.phone && (
                      <button className="cyber-btn cyber-btn-small cyber-btn-magenta">
                        <span>Call Now</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-section">
          <div className="form-header">
            <h2 className="form-title orbitron neon-magenta">
              Send us a Message
            </h2> 
            <p className="form-description">
              Can't find what you're looking for? Drop us a message and we'll get back to you!
            </p>
          </div>

          <div className="form-container cyber-card">
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label neon-cyan">Your Name *</label>
                  <input
                    type="text"
                    className="cyber-input"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label neon-cyan">Email Address *</label>
                  <input
                    type="email"
                    className="cyber-input"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <label className="form-label neon-cyan">Subject *</label>
                  <select
                    className="cyber-select"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="registration">Registration Issues</option>
                    <option value="technical">Technical Support</option>
                    <option value="general">General Inquiry</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="media">Media & Press</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label className="form-label neon-cyan">Message *</label>
                  <textarea
                    className="cyber-textarea"
                    placeholder="Type your message here..."
                    rows="6"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                  ></textarea>
                </div>
              </div>

              <div className="form-submit">
                <button type="submit" className="cyber-btn cyber-btn-primary">
                  <span>Send Message 📧</span>
                  <div className="btn-glow"></div>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Campus Information */}
        <div className="campus-section">
          <h2 className="campus-title orbitron neon-green">
            Campus Information
          </h2>

          <div className="campus-grid">
            <div className="campus-info cyber-card">
              <h3 className="neon-cyan orbitron">Location Details</h3>
              <div className="campus-details">
                <div className="campus-item">
                  <span className="campus-icon neon-magenta">📍</span>
                  <div>
                    <strong>{campusInfo.name}</strong>
                    <p>{campusInfo.address}</p>
                    <small className="neon-green">{campusInfo.landmark}</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="facilities-info cyber-card">
              <h3 className="neon-magenta orbitron">Campus Facilities</h3>
              <div className="facilities-grid">
                {campusInfo.facilities.map((facility, index) => (
                  <div key={index} className="facility-item">
                    <span className="facility-bullet neon-green">✓</span>
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="directions-info cyber-card">
            <h3 className="neon-cyan orbitron">How to Reach</h3>
            <div className="directions-grid">
              <div className="direction-item">
                <div className="direction-icon neon-green">🚇</div>
                <div>
                  <strong>By Metro</strong>
                  <p>Ramapuram Metro Station (5 min walk)</p>
                </div>
              </div>
              <div className="direction-item">
                <div className="direction-icon neon-cyan">🚌</div>
                <div>
                  <strong>By Bus</strong>
                  <p>Multiple bus routes available</p>
                </div>
              </div>
              <div className="direction-item">
                <div className="direction-icon neon-magenta">🚗</div>
                <div>
                  <strong>By Car</strong>
                  <p>Ample parking space available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="social-section">
          <h2 className="social-title orbitron neon-cyan">
            Follow DNS
          </h2>
          <p className="social-subtitle">
            Stay updated with the latest news and announcements
          </p>

          <div className="social-grid">
            {socialLinks.map((social, index) => (
              <div key={index} className="social-card cyber-card">
                <div className={`social-icon ${social.color}`}>
                  {social.icon}
                </div>
                <div className="social-info">
                  <h4 className="social-platform orbitron">{social.platform}</h4>
                  <p className={`social-handle ${social.color}`}>{social.handle}</p>
                </div>
                <button className="social-btn cyber-btn cyber-btn-small">
                  <span>Follow</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="emergency-section cyber-card">
          <h2 className="emergency-title orbitron neon-magenta">
            Emergency Contact
          </h2>
          <p className="emergency-description">
            During the event (14th-15th October), for any urgent assistance:
          </p>
          <div className="emergency-contacts">
            <div className="emergency-item">
              <span className="emergency-icon neon-green">🚨</span>
              <div>
                <strong>Event Helpdesk:</strong>
                <p className="orbitron neon-cyan">+91 XXXX-XXXX-XX</p>
              </div>
            </div>
            <div className="emergency-item">
              <span className="emergency-icon neon-cyan">💬</span>
              <div>
                <strong>WhatsApp Support:</strong>
                <p className="orbitron neon-green">+91 XXXX-XXXX-XX</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          min-height: 100vh;
          background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-tertiary) 100%);
          padding: 6rem 0;
          position: relative;
        }

        .contact-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .contact-title {
          font-size: 4rem;
          font-weight: 900;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .contact-subtitle {
          font-size: 1.5rem;
          color: var(--text-secondary);
          font-weight: 300;
        }

        .contact-categories {
          margin-bottom: 4rem;
        }

        .category-nav {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
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

        .category-title {
          font-family: 'Orbitron', monospace;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .category-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .contacts-display {
          margin-bottom: 3rem;
        }

        .category-info {
          text-align: center;
          margin-bottom: 3rem;
        }

        .category-info h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .category-description {
          font-size: 1.2rem;
          color: var(--text-secondary);
        }

        .contacts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }

        .contact-card {
          padding: 2.5rem;
          background: rgba(26, 26, 46, 0.8);
        }

        .contact-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .contact-icon {
          font-size: 3rem;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid currentColor;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.3);
        }

        .contact-info h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .contact-role {
          color: var(--text-secondary);
          font-size: 1rem;
        }

        .contact-details {
          margin-bottom: 2rem;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .detail-label {
          min-width: 120px;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .detail-value {
          color: var(--text-secondary);
        }

        .detail-link {
          color: var(--accent-cyan);
          transition: all 0.3s ease;
        }

        .detail-link:hover {
          color: var(--accent-magenta);
        }

        .contact-actions {
          display: flex;
          gap: 1rem;
        }

        .cyber-btn-small {
          padding: 0.8rem 1.5rem;
          font-size: 0.9rem;
        }

        .contact-form-section {
          margin-bottom: 4rem;
        }

        .form-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .form-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .form-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        .form-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 3rem;
          background: rgba(26, 26, 46, 0.8);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .cyber-input,
        .cyber-select,
        .cyber-textarea {
          width: 100%;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(0, 212, 255, 0.3);
          color: var(--text-primary);
          font-family: 'Rajdhani', sans-serif;
          font-size: 1rem;
          border-radius: 0;
          clip-path: polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%);
          transition: all 0.3s ease;
        }

        .cyber-input:focus,
        .cyber-select:focus,
        .cyber-textarea:focus {
          outline: none;
          border-color: var(--accent-cyan);
          box-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
        }

        .form-submit {
          text-align: center;
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

        .campus-section {
          margin-bottom: 4rem;
        }

        .campus-title {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 3rem;
        }

        .campus-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .campus-info,
        .facilities-info {
          padding: 2.5rem;
          background: rgba(26, 26, 46, 0.8);
        }

        .campus-info h3,
        .facilities-info h3 {
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }

        .campus-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .campus-icon {
          font-size: 2rem;
          margin-top: 0.5rem;
        }

        .facilities-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .facility-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.5rem;
        }

        .facility-bullet {
          font-size: 1rem;
        }

        .directions-info {
          padding: 2.5rem;
          background: rgba(26, 26, 46, 0.8);
        }

        .directions-info h3 {
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }

        .directions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .direction-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-align: center;
          flex-direction: column;
        }

        .direction-icon {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .social-section {
          margin-bottom: 4rem;
          text-align: center;
        }

        .social-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .social-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
        }

        .social-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .social-card {
          padding: 2rem;
          background: rgba(26, 26, 46, 0.6);
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .social-icon {
          font-size: 2.5rem;
          width: 60px;
          height: 60px;
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
        }

        .social-handle {
          font-size: 0.9rem;
        }

        .social-btn {
          margin-left: auto;
        }

        .emergency-section {
          padding: 3rem;
          background: rgba(255, 0, 110, 0.1);
          border: 2px solid var(--accent-magenta);
          text-align: center;
        }

        .emergency-title {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .emergency-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .emergency-contacts {
          display: flex;
          justify-content: center;
          gap: 3rem;
        }

        .emergency-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .emergency-icon {
          font-size: 2rem;
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
          .contacts-grid {
            grid-template-columns: 1fr;
          }

          .campus-grid {
            grid-template-columns: 1fr;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .contact-title {
            font-size: 2.5rem;
          }

          .category-nav {
            flex-direction: column;
            align-items: center;
          }

          .emergency-contacts {
            flex-direction: column;
            gap: 1.5rem;
          }

          .directions-grid {
            grid-template-columns: 1fr;
          }

          .social-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}