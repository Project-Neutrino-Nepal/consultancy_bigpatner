import React from 'react';
import { FaCheckCircle, FaAward, FaGlobe, FaUsers } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Your trusted partner for international education</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-intro">
            <h2>Welcome to Big Partner Consultancy</h2>
            <p>With years of experience in international education consulting, we have helped thousands of students achieve their dreams of studying abroad. Our team of expert counselors provides personalized guidance throughout your journey.</p>
            <p>We partner with top universities worldwide and maintain strong relationships with immigration authorities, ensuring a smooth and successful application process for our students.</p>
          </div>

          <div className="why-choose">
            <h2>Why Choose Us</h2>
            <div className="features-grid">
              <div className="feature-card">
                <FaCheckCircle className="feature-icon" />
                <h3>Expert Guidance</h3>
                <p>Our experienced counselors have in-depth knowledge of international education systems and visa processes.</p>
              </div>
              <div className="feature-card">
                <FaAward className="feature-icon" />
                <h3>High Success Rate</h3>
                <p>Over 95% of our students successfully get admitted to their chosen universities and receive their visas.</p>
              </div>
              <div className="feature-card">
                <FaGlobe className="feature-icon" />
                <h3>Global Network</h3>
                <p>We partner with 500+ universities across 25+ countries worldwide.</p>
              </div>
              <div className="feature-card">
                <FaUsers className="feature-icon" />
                <h3>Personalized Support</h3>
                <p>From university selection to post-arrival support, we're with you every step of the way.</p>
              </div>
            </div>
          </div>

          <div className="stats-section">
            <h2>Our Achievements</h2>
            <div className="stats-grid">
              <div className="stat-box">
                <h3>5000+</h3>
                <p>Students Placed</p>
              </div>
              <div className="stat-box">
                <h3>500+</h3>
                <p>Partner Universities</p>
              </div>
              <div className="stat-box">
                <h3>25+</h3>
                <p>Countries</p>
              </div>
              <div className="stat-box">
                <h3>95%</h3>
                <p>Success Rate</p>
              </div>
            </div>
          </div>

          <div className="team-section">
            <h2>Our Team</h2>
            <p className="text-center">Meet our dedicated team of education consultants</p>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-avatar">JD</div>
                <h3>John Doe</h3>
                <p>Senior Education Consultant</p>
              </div>
              <div className="team-member">
                <div className="member-avatar">JS</div>
                <h3>Jane Smith</h3>
                <p>Visa Specialist</p>
              </div>
              <div className="team-member">
                <div className="member-avatar">MC</div>
                <h3>Mike Chen</h3>
                <p>Career Counselor</p>
              </div>
              <div className="team-member">
                <div className="member-avatar">SP</div>
                <h3>Sarah Patel</h3>
                <p>Admissions Expert</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
