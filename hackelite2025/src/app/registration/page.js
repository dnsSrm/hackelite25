'use client';

import { useState } from 'react';

export default function Registration() {
  const [formData, setFormData] = useState({
    teamName: '',
    teamLeader: '',
    email: '',
    phone: '',
    college: '',
    members: ['', '', ''],
    memberEmails: ['', '', ''],
    memberPhones: ['', '', ''],
    problemStatement: '',
    techStack: '',
    experience: '',
    expectations: '',
    agreeTerms: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value, index = null) => {
    if (index !== null) {
      const newArray = [...formData[field]];
      newArray[index] = value;
      setFormData({ ...formData, [field]: newArray });
    } else {
      setFormData({ ...formData, [field]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Registration submitted successfully!');
    }, 2000);
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const steps = [
    { number: 1, title: "Team Info", icon: "👥" },
    { number: 2, title: "Members", icon: "🧑‍💻" },
    { number: 3, title: "Project", icon: "💡" },
    { number: 4, title: "Submit", icon: "🚀" }
  ];

  return (
    <section className="registration-section">
      <div className="registration-container">
        {/* Header */}
        <div className="registration-header">
          <h1 className="registration-title orbitron">
            <span className="neon-cyan">Join the</span>{" "}
            <span className="neon-magenta glitch" data-text="Elite">Elite</span>
          </h1>
          <p className="registration-subtitle rajdhani">
            Register for <span className="neon-green">HackElite'25</span> - Free for Round 0
          </p>
        </div>

        {/* Progress Steps */}
        <div className="steps-container">
          <div className="steps-track">
            <div 
              className="steps-progress" 
              style={{width: `${(currentStep - 1) * 25}%`}}
            ></div>
          </div>
          {steps.map((step) => (
            <div
              key={step.number}
              className={`step-item ${currentStep >= step.number ? 'active' : ''} ${currentStep > step.number ? 'completed' : ''}`}
            >
              <div className="step-marker">
                <span className="step-icon">{step.icon}</span>
                <span className="step-number orbitron">{step.number}</span>
              </div>
              <span className="step-title">{step.title}</span>
            </div>
          ))}
        </div>

        {/* Registration Form */}
        <div className="form-container cyber-card">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Team Information */}
            {currentStep === 1 && (
              <div className="form-step">
                <h2 className="step-heading orbitron neon-cyan">
                  Team Information
                </h2>
                <p className="step-description">
                  Tell us about your team and the team leader
                </p>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label neon-magenta">
                      Team Name *
                    </label>
                    <input
                      type="text"
                      className="cyber-input"
                      placeholder="Enter your team name"
                      value={formData.teamName}
                      onChange={(e) => handleInputChange('teamName', e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label neon-magenta">
                      Team Leader Name *
                    </label>
                    <input
                      type="text"
                      className="cyber-input"
                      placeholder="Enter team leader name"
                      value={formData.teamLeader}
                      onChange={(e) => handleInputChange('teamLeader', e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label neon-magenta">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="cyber-input"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label neon-magenta">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className="cyber-input"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label neon-magenta">
                      College/Institution *
                    </label>
                    <input
                      type="text"
                      className="cyber-input"
                      placeholder="Enter your college name"
                      value={formData.college}
                      onChange={(e) => handleInputChange('college', e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Team Members */}
            {currentStep === 2 && (
              <div className="form-step">
                <h2 className="step-heading orbitron neon-cyan">
                  Team Members
                </h2>
                <p className="step-description">
                  Add your team members (2-4 members total including leader)
                </p>

                <div className="members-container">
                  {[0, 1, 2].map((index) => (
                    <div key={index} className="member-section cyber-card">
                      <h3 className="member-title neon-green orbitron">
                        Member {index + 2} {index === 0 ? '(Required)' : '(Optional)'}
                      </h3>
                      <div className="member-form">
                        <div className="form-group">
                          <label className="form-label">Name</label>
                          <input
                            type="text"
                            className="cyber-input"
                            placeholder="Enter member name"
                            value={formData.members[index]}
                            onChange={(e) => handleInputChange('members', e.target.value, index)}
                            required={index === 0}
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            className="cyber-input"
                            placeholder="Enter member email"
                            value={formData.memberEmails[index]}
                            onChange={(e) => handleInputChange('memberEmails', e.target.value, index)}
                            required={index === 0}
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Phone</label>
                          <input
                            type="tel"
                            className="cyber-input"
                            placeholder="Enter member phone"
                            value={formData.memberPhones[index]}
                            onChange={(e) => handleInputChange('memberPhones', e.target.value, index)}
                            required={index === 0}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Project Details */}
            {currentStep === 3 && (
              <div className="form-step">
                <h2 className="step-heading orbitron neon-cyan">
                  Project Information
                </h2>
                <p className="step-description">
                  Share your project ideas and technical preferences
                </p>

                <div className="form-grid">
                  <div className="form-group full-width">
                    <label className="form-label neon-magenta">
                      Preferred Problem Statement
                    </label>
                    <select
                      className="cyber-select"
                      value={formData.problemStatement}
                      onChange={(e) => handleInputChange('problemStatement', e.target.value)}
                    >
                      <option value="">Select a problem statement</option>
                      <option value="ai-ml">AI/ML Solutions</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile Application</option>
                      <option value="blockchain">Blockchain Technology</option>
                      <option value="iot">IoT Solutions</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="open-innovation">Open Innovation</option>
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label neon-magenta">
                      Technology Stack
                    </label>
                    <textarea
                      className="cyber-textarea"
                      placeholder="List the technologies you plan to use (e.g., React, Node.js, Python, etc.)"
                      rows="3"
                      value={formData.techStack}
                      onChange={(e) => handleInputChange('techStack', e.target.value)}
                    ></textarea>
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label neon-magenta">
                      Team Experience Level
                    </label>
                    <select
                      className="cyber-select"
                      value={formData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                    >
                      <option value="">Select experience level</option>
                      <option value="beginner">Beginner (0-1 years)</option>
                      <option value="intermediate">Intermediate (1-3 years)</option>
                      <option value="advanced">Advanced (3+ years)</option>
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label neon-magenta">
                      What do you expect from HackElite'25?
                    </label>
                    <textarea
                      className="cyber-textarea"
                      placeholder="Share your expectations and what you hope to learn/achieve"
                      rows="4"
                      value={formData.expectations}
                      onChange={(e) => handleInputChange('expectations', e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Review & Submit */}
            {currentStep === 4 && (
              <div className="form-step">
                <h2 className="step-heading orbitron neon-cyan">
                  Review & Submit
                </h2>
                <p className="step-description">
                  Review your information and submit your registration
                </p>

                <div className="review-section">
                  <div className="review-card cyber-card">
                    <h3 className="neon-green orbitron">Team Information</h3>
                    <div className="review-item">
                      <span>Team Name:</span>
                      <span className="neon-cyan">{formData.teamName}</span>
                    </div>
                    <div className="review-item">
                      <span>Team Leader:</span>
                      <span className="neon-cyan">{formData.teamLeader}</span>
                    </div>
                    <div className="review-item">
                      <span>Email:</span>
                      <span className="neon-cyan">{formData.email}</span>
                    </div>
                    <div className="review-item">
                      <span>College:</span>
                      <span className="neon-cyan">{formData.college}</span>
                    </div>
                  </div>

                  <div className="review-card cyber-card">
                    <h3 className="neon-magenta orbitron">Team Members</h3>
                    {formData.members.map((member, index) => (
                      member && (
                        <div key={index} className="review-item">
                          <span>Member {index + 2}:</span>
                          <span className="neon-cyan">{member}</span>
                        </div>
                      )
                    ))}
                  </div>

                  <div className="review-card cyber-card">
                    <h3 className="neon-green orbitron">Project Details</h3>
                    <div className="review-item">
                      <span>Problem Statement:</span>
                      <span className="neon-cyan">{formData.problemStatement}</span>
                    </div>
                    <div className="review-item">
                      <span>Experience Level:</span>
                      <span className="neon-cyan">{formData.experience}</span>
                    </div>
                  </div>
                </div>

                <div className="terms-section">
                  <label className="terms-checkbox">
                    <input
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                    />
                    <span className="checkmark"></span>
                    <span className="terms-text">
                      I agree to the <span className="neon-cyan">Terms & Conditions</span> and 
                      <span className="neon-magenta"> Code of Conduct</span> of HackElite'25
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="form-navigation">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="cyber-btn cyber-btn-secondary"
                >
                  <span>← Previous</span>
                </button>
              )}

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="cyber-btn cyber-btn-primary"
                >
                  <span>Next →</span>
                  <div className="btn-glow"></div>
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!formData.agreeTerms || isSubmitting}
                  className="cyber-btn cyber-btn-primary"
                >
                  <span>
                    {isSubmitting ? 'Submitting...' : 'Submit Registration 🚀'}
                  </span>
                  <div className="btn-glow"></div>
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Registration Guidelines */}
        <div className="guidelines-section">
          <h2 className="guidelines-title orbitron neon-magenta">
            Registration Guidelines
          </h2>
          <div className="guidelines-grid">
            <div className="guideline-card cyber-card">
              <div className="guideline-icon neon-cyan">👥</div>
              <h3 className="neon-cyan">Team Size</h3>
              <p>Teams must have 2-4 members including the team leader</p>
            </div>
            <div className="guideline-card cyber-card">
              <div className="guideline-icon neon-magenta">🎓</div>
              <h3 className="neon-magenta">Eligibility</h3>
              <p>Open to all undergraduate and graduate students</p>
            </div>
            <div className="guideline-card cyber-card">
              <div className="guideline-icon neon-green">💰</div>
              <h3 className="neon-green">Registration Fee</h3>
              <p>FREE for Round 0 (PPT Submission)</p>
            </div>
            <div className="guideline-card cyber-card">
              <div className="guideline-icon neon-cyan">📝</div>
              <h3 className="neon-cyan">Requirements</h3>
              <p>Valid student ID and college email address required</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .registration-section {
          min-height: 100vh;
          background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-tertiary) 100%);
          padding: 6rem 0;
          position: relative;
        }

        .registration-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .registration-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .registration-title {
          font-size: 4rem;
          font-weight: 900;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .registration-subtitle {
          font-size: 1.5rem;
          color: var(--text-secondary);
          font-weight: 300;
        }

        .steps-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
          position: relative;
        }

        .steps-track {
          position: absolute;
          top: 50%;
          left: 10%;
          right: 10%;
          height: 2px;
          background: rgba(255, 255, 255, 0.2);
          z-index: 1;
        }

        .steps-progress {
          height: 100%;
          background: var(--gradient-primary);
          transition: width 0.5s ease;
        }

        .step-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          position: relative;
          z-index: 2;
        }

        .step-marker {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 2px solid rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.3s ease;
        }

        .step-item.active .step-marker {
          border-color: var(--accent-cyan);
          background: rgba(0, 212, 255, 0.1);
        }

        .step-item.completed .step-marker {
          border-color: var(--accent-green);
          background: rgba(57, 255, 20, 0.1);
        }

        .step-icon {
          font-size: 1.5rem;
        }

        .step-number {
          position: absolute;
          bottom: -5px;
          right: -5px;
          background: var(--accent-cyan);
          color: var(--bg-primary);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .step-title {
          font-size: 0.9rem;
          color: var(--text-secondary);
          text-align: center;
        }

        .step-item.active .step-title {
          color: var(--accent-cyan);
        }

        .form-container {
          margin-bottom: 4rem;
          padding: 3rem;
          background: rgba(26, 26, 46, 0.8);
          backdrop-filter: blur(10px);
        }

        .form-step {
          min-height: 500px;
        }

        .step-heading {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .step-description {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
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

        .cyber-input::placeholder,
        .cyber-textarea::placeholder {
          color: var(--text-muted);
        }

        .members-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .member-section {
          padding: 2rem;
          background: rgba(0, 0, 0, 0.3);
        }

        .member-title {
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }

        .member-form {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .review-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .review-card {
          padding: 2rem;
          background: rgba(0, 0, 0, 0.3);
        }

        .review-card h3 {
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
        }

        .review-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 0.5rem;
        }

        .terms-section {
          margin-top: 2rem;
        }

        .terms-checkbox {
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          font-size: 1rem;
        }

        .terms-checkbox input {
          display: none;
        }

        .checkmark {
          width: 20px;
          height: 20px;
          border: 2px solid var(--accent-cyan);
          position: relative;
          transition: all 0.3s ease;
        }

        .terms-checkbox input:checked + .checkmark {
          background: var(--accent-cyan);
        }

        .terms-checkbox input:checked + .checkmark::after {
          content: '✓';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: var(--bg-primary);
          font-weight: bold;
        }

        .form-navigation {
          display: flex;
          justify-content: space-between;
          margin-top: 3rem;
          gap: 1rem;
        }

        .cyber-btn-secondary {
          background: transparent;
          border: 2px solid var(--accent-magenta);
          color: var(--accent-magenta);
        }

        .cyber-btn-secondary:hover {
          background: var(--accent-magenta);
          color: var(--bg-primary);
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

        .cyber-btn-primary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .guidelines-section {
          margin-top: 4rem;
        }

        .guidelines-title {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 3rem;
        }

        .guidelines-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .guideline-card {
          padding: 2rem;
          text-align: center;
          background: rgba(26, 26, 46, 0.6);
        }

        .guideline-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .guideline-card h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .guideline-card p {
          color: var(--text-secondary);
          line-height: 1.6;
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
        @media (max-width: 768px) {
          .registration-title {
            font-size: 2.5rem;
          }

          .steps-container {
            flex-wrap: wrap;
            gap: 1rem;
          }

          .form-container {
            padding: 2rem;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .member-form {
            grid-template-columns: 1fr;
          }

          .form-navigation {
            flex-direction: column;
          }

          .review-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}