import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaPassport,
  FaUserTie,
  FaPhone,
  FaWhatsapp,
  FaQuoteLeft,
  FaGlobe,
  FaCheckCircle,
} from "react-icons/fa";
import {
  BACKEND_URL,
  countriesAPI,
  universitiesAPI,
  blogsAPI,
  settingsAPI,
} from "../../services/api";
import educationImage from "./images/education.jpg";
import heroImage from "./images/hero.jpg";
import "./Home.css";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [settings, setSettings] = useState({});

  useEffect(() => {
    countriesAPI
      .getAll({ status: "active" })
      .then((response) => {
        const data = response.data || response;
        setCountries(Array.isArray(data) ? data.slice(0, 4) : []);
        console.log("Countries loaded:", data);
      })
      .catch((error) => console.error("Failed to fetch countries:", error));

    universitiesAPI
      .getAll({ status: "active" })
      .then((response) => {
        const data = response.data || response;
        setUniversities(Array.isArray(data) ? data.slice(0, 4) : []);
        console.log("Universities loaded:", data);
      })
      .catch((error) => console.error("Failed to fetch universities:", error));

    blogsAPI
      .getAll({ status: "published" })
      .then((response) => {
        const data = response.data || response;
        setBlogs(Array.isArray(data) ? data.slice(0, 3) : []);
        console.log("Blogs loaded:", data);
      })
      .catch((error) => console.error("Failed to fetch blogs:", error));

    settingsAPI
      .getAll()
      .then((response) => setSettings(response.data))
      .catch((error) => console.error("Failed to fetch settings:", error));
  }, []);

  const whatsappNumber = (settings.whatsapp_number || "").replace(/\D/g, "");

  return (
    <div className="home">
      <section
        className="hero"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Your Global Pathway to <br />
              <span>World-Class Education</span>
            </h1>
            <p className="hero-subtitle">
              The BIG Academy is a Global Higher Education Services provider
              based out of Dubai, UAE. We provide innovative global education
              that fosters excellence in academia, accessibility, and global
              collaboration.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-destinations">
        <div className="container">
          <div className="section-title">
            <h2>Featured Destinations</h2>
            <p>Explore top countries to pursue your international education</p>
          </div>
          <div className="countries-grid">
            {countries.map((country) => (
              <Link
                to={`/destinations/${country.slug}`}
                key={country.id}
                className="country-card"
              >
                <div className="country-image">
                  {country.flag_image && (
                    <img
                      src={`${BACKEND_URL}/uploads/countries/${country.flag_image}`}
                      alt={country.name}
                      onError={(e) => {
                        console.error(
                          "Failed to load image:",
                          `${BACKEND_URL}/uploads/countries/${country.flag_image}`
                        );
                        e.target.style.display = "none";
                      }}
                    />
                  )}
                  <div className="country-overlay">
                    <h3>{country.name}</h3>
                    <span>View Universities</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="section-footer">
            <Link to="/destinations" className="btn btn-outline">
              See All
            </Link>
          </div>
        </div>
      </section>

      <section className="why-big">
        <div className="container">
          <div className="why-big-grid">
            <div className="why-big-image">
              <img src={educationImage} alt="Education" />
            </div>
            <div className="why-big-content">
              <div className="section-title" style={{ textAlign: "left" }}>
                <h2>Why The BIG Academy</h2>
                <p>
                  We deliver a hub-and-spoke model of education where students
                  can access our curriculum from authorized satellite centers on
                  a hybrid learning model, with pathway programs that enhance
                  academic, language, and cultural skills.
                </p>
              </div>
              <div className="benefits-list">
                <div className="benefit-item">
                  <FaCheckCircle className="benefit-icon" />
                  <div>
                    <h4>Pathway Programs</h4>
                    <p>
                      Comprehensive programs including Diploma, Bachelors and
                      Masters preparation tailored to meet specific student
                      needs.
                    </p>
                  </div>
                </div>
                <div className="benefit-item">
                  <FaCheckCircle className="benefit-icon" />
                  <div>
                    <h4>University Partnerships</h4>
                    <p>
                      Direct partnerships with universities in the US, Canada,
                      France, Australia, and UAE for seamless transitions.
                    </p>
                  </div>
                </div>
                <div className="benefit-item">
                  <FaCheckCircle className="benefit-icon" />
                  <div>
                    <h4>Global Mobility</h4>
                    <p>
                      Access to international campuses and migration pathways
                      for Partnered Universities worldwide.
                    </p>
                  </div>
                </div>
                <div className="benefit-item">
                  <FaCheckCircle className="benefit-icon" />
                  <div>
                    <h4>Quality Assurance</h4>
                    <p>
                      Accreditation by relevant educational authorities with
                      regular assessments and progress monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="popular-universities">
        <div className="container">
          <div className="section-title">
            <h2>Popular Universities</h2>
            <p>Top institutions partnered with us</p>
          </div>
          <div className="universities-grid">
            {universities.map((university) => (
              <Link
                to={`/universities/${university.slug}`}
                key={university.id}
                className="uni-card"
                style={{ textDecoration: "none" }}
              >
                <div className="uni-logo">
                  {university.logo ? (
                    <img
                      src={`${BACKEND_URL}/uploads/universities/${university.logo}`}
                      alt={university.name}
                      onError={(e) => {
                        console.error(
                          "Failed to load image:",
                          `${BACKEND_URL}/uploads/universities/${university.logo}`
                        );
                        e.target.style.display = "none";
                      }}
                    />
                  ) : (
                    <FaGlobe />
                  )}
                </div>
                <h4>{university.name}</h4>
                <p>{university.location}</p>
                <span className="uni-link">See More</span>
              </Link>
            ))}
          </div>
          <div className="section-footer">
            <Link to="/universities" className="btn btn-outline">
              See All
            </Link>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>Student Success Stories</h2>
            <p>
              What our students say about their transformative journey with The
              BIG Academy
            </p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <FaQuoteLeft className="quote-icon" />
              <p>
                "The BIG Academy's pathway program prepared me perfectly for
                university life in Canada. Their comprehensive curriculum and
                support made my transition seamless!"
              </p>
              <div className="testimonial-author">
                <h4>Sarah Johnson</h4>
                <span>University of Toronto, Canada</span>
              </div>
            </div>
            <div className="testimonial-card">
              <FaQuoteLeft className="quote-icon" />
              <p>
                "Through The BIG Academy's global network, I was able to access
                world-class education. The hybrid learning model and university
                partnerships made all the difference."
              </p>
              <div className="testimonial-author">
                <h4>Michael Chen</h4>
                <span>Harvard University, USA</span>
              </div>
            </div>
            <div className="testimonial-card">
              <FaQuoteLeft className="quote-icon" />
              <p>
                "The Academy's focus on academic excellence and cultural
                integration helped me thrive in my chosen field. Their migration
                pathways opened doors I never knew existed!"
              </p>
              <div className="testimonial-author">
                <h4>Priya Sharma</h4>
                <span>University of Melbourne, Australia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Find your Course Now</h2>
            <p>
              "Grab The Chance to enrich your future with Quality Education at
              The Big Academy"
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get Started
              </Link>
              {whatsappNumber && (
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  className="btn btn-success"
                >
                  <FaWhatsapp /> WhatsApp Us
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
