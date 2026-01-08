import React from "react";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaMobileAlt,
  FaEthereum,
  FaServer,
  FaShieldAlt,
  FaUserTie,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import "./AboutWisdom.css";

const AboutWisdom = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description:
        "Cutting-edge web applications built with the latest technologies and frameworks.",
      features: [
        "React & Next.js",
        "Node.js Backend",
        "Cloud Deployment",
        "Performance Optimization",
      ],
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile solutions that deliver exceptional user experiences.",
      features: [
        "iOS & Android",
        "React Native",
        "Flutter",
        "App Store Optimization",
      ],
    },
    {
      icon: <FaEthereum />,
      title: "Blockchain",
      description:
        "Decentralized applications and smart contracts for the future of digital transactions.",
      features: [
        "Smart Contracts",
        "DeFi Solutions",
        "NFT Platforms",
        "Web3 Integration",
      ],
    },
    {
      icon: <FaServer />,
      title: "Backend Systems",
      description:
        "Scalable and secure backend infrastructure that powers your applications.",
      features: [
        "API Development",
        "Database Design",
        "Cloud Architecture",
        "Microservices",
      ],
    },
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your digital assets and data.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance",
        "Risk Assessment",
      ],
    },
    {
      icon: <FaUserTie />,
      title: "Consulting",
      description:
        "Strategic technology consulting to guide your digital transformation journey.",
      features: [
        "Tech Strategy",
        "Architecture Review",
        "Team Training",
        "Process Optimization",
      ],
    },
  ];

  return (
    <div className="about-wisdom-page">
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Wisdom Technologies</h1>
            <p>Pioneering the future of technology with innovative solutions</p>
          </div>
        </div>
      </section>

      <section className="wisdom-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Code The Future</h2>
            <p className="lead">
              We build revolutionary digital experiences that push the
              boundaries of technology and transform how businesses operate in
              the digital age.
            </p>
            <p>
              Wisdom Technologies is a leading technology company specializing
              in web development, mobile applications, blockchain solutions, and
              comprehensive technology consulting. With a track record of 12+
              successful projects and a 99% success rate, we deliver
              cutting-edge solutions that drive innovation and growth.
            </p>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">12+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">99%</div>
                <div className="stat-label">Success Rate</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wisdom-services">
        <div className="container">
          <div className="section-title">
            <h2>Services That Scale</h2>
            <p>
              From concept to deployment, we deliver comprehensive technology
              solutions that drive innovation and growth.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheckCircle className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wisdom-contact">
        <div className="container">
          <div className="contact-content">
            <h2>Get In Touch</h2>
            <p>
              Ready to transform your vision into reality? Let's create
              something extraordinary together.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:info@thewisdomtechnologies.com">
                    info@thewisdomtechnologies.com
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+9779805987922">+977-9805987922</a>
                  <br />
                  <a href="tel:+9779863051909">+977-9863051909</a>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p>Koteshowr-32, Kathmandu, Nepal</p>
                </div>
              </div>
            </div>
            <div className="contact-actions">
              <a
                href="https://thewisdomtechnologies.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Visit Our Website
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutWisdom;
