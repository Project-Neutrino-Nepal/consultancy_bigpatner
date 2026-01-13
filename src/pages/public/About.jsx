import React from 'react';
import { FaCheckCircle, FaAward, FaGlobe, FaUsers, FaLightbulb, FaEye, FaHandshake, FaUserGraduate, FaBookOpen, FaGraduationCap, FaUniversity, FaStar } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>About The BIG Academy</h1>
            <p>Empowering students through global education opportunities since inception.</p>
          </div>
        </div>
      </section>

      <section className="about-intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-content">
              <h2>Our Story</h2>
              <p>The BIG Academy is a Global Higher Education Services provider based out of Dubai, UAE. We are dedicated to empowering students from diverse backgrounds to achieve their academic and career goals by providing comprehensive pathway programs that enhance their academic, language, and cultural skills.</p>
              <p>The college aims to prepare students for successful entry into partner universities and colleges, fostering a supportive and inclusive learning environment. We serve as a valuable bridge for students, particularly international students and those with diverse educational backgrounds, to access higher education and achieve their academic and career aspirations. Their programs and services are designed to provide students with the skills, confidence, and qualifications necessary to excel in university-level studies.</p>
              <p>The BIG Academy offers International Certification and Higher Education programs that have migration pathways for Partnered Universities in the US, Canada, France, and Australia for our students.</p>
            </div>
            <div className="intro-image">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team collaborating" />
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <FaLightbulb className="mv-icon" />
              <h3>Our Mission</h3>
              <p>To provide students with an innovative global education that fosters excellence in academia, accessibility, and global collaboration for a brighter future.</p>
            </div>
            <div className="mv-card">
              <FaEye className="mv-icon" />
              <h3>Our Vision</h3>
              <p>Our vision is to provide an education without boundaries that transcends to produce global graduates.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="what-we-do">
        <div className="container">
          <div className="section-title">
            <h2>What We Do?</h2>
            <p>Global delivers a hub-and-spoke model of education where students can access our curriculum from authorized satellite centers on a hybrid learning model. These students can then opt to migrate to our various partner universities worldwide. The student as of now can access the US, Canada, France, Australia, and UAE University campuses.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <FaBookOpen className="service-icon" />
              <h3>Pathway Programs</h3>
              <p>We offer a variety of pathway programs, including Diploma, Bachelors and Masters preparation programs. These programs are tailored to meet the specific needs of students based on their academic background and intended field of study.</p>
            </div>
            <div className="service-card">
              <FaGraduationCap className="service-icon" />
              <h3>Academic Curriculum</h3>
              <p>Comprehensive academic curricula that include core subject areas, study skills, and academic writing. These courses help students develop the necessary academic skills for success in our University-Access Network.</p>
            </div>
            <div className="service-card">
              <FaUniversity className="service-icon" />
              <h3>University Pathway Courses</h3>
              <p>Courses that are directly aligned with the entry requirements of BIG Academy's partner universities & colleges. These courses ensure that students are well-prepared for the academic rigor of their chosen degree programs.</p>
            </div>
            <div className="service-card">
              <FaHandshake className="service-icon" />
              <h3>University Partnerships</h3>
              <p>Collaborative agreements with a network of universities and colleges, allowing students to receive conditional offers of admission upon successful completion of the pathway program. These partnerships often include academic advising to guide students in selecting and applying to partner institutions.</p>
            </div>
            <div className="service-card">
              <FaUsers className="service-icon" />
              <h3>Academic Support Services</h3>
              <p>Academic advisors and tutors who provide personalized guidance and assistance to students throughout their pathway program.</p>
            </div>
            <div className="service-card">
              <FaCheckCircle className="service-icon" />
              <h3>Assessment and Progress Monitoring</h3>
              <p>Regular assessments and progress tracking to ensure students meet the academic and language proficiency standards required for university admission.</p>
            </div>
            <div className="service-card">
              <FaGlobe className="service-icon" />
              <h3>Student Support Services</h3>
              <p>Counseling services to address academic, personal, or social concerns. Career guidance and support in exploring future academic and career paths.</p>
            </div>
            <div className="service-card">
              <FaAward className="service-icon" />
              <h3>Accreditation and Quality Assurance</h3>
              <p>Accreditation by relevant educational authorities and quality assurance measures to maintain program quality and adherence to academic standards.</p>
            </div>
            <div className="service-card">
              <FaStar className="service-icon" />
              <h3>Global Network</h3>
              <p>Collaborative efforts with other pathway providers like ATHE and other educational institutions around the world, facilitating student mobility.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="core-values">
        <div className="container">
          <div className="section-title">
            <h2>Our Values</h2>
            <p>These pillars guide the institution's mission and ensure it serves students effectively.</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-number">01</div>
              <h3>Quality & Excellence</h3>
              <p>We strive for excellence in every service we provide, ensuring the best outcomes for our students.</p>
            </div>
            <div className="value-card">
              <div className="value-number">02</div>
              <h3>Relevance and New Age</h3>
              <p>We maintain the highest standards of honesty and transparency in all our interactions with students and partners.</p>
            </div>
            <div className="value-card">
              <div className="value-number">03</div>
              <h3>Flexibility and Support</h3>
              <p>We provide clear, accurate information at every step of the journey, with no hidden costs or false promises.</p>
            </div>
            <div className="value-card">
              <div className="value-number">04</div>
              <h3>Global Diversity and Global Mobility</h3>
              <p>Our students' needs and aspirations are at the heart of everything we do. Their success is our success.</p>
            </div>
            <div className="value-card">
              <div className="value-number">05</div>
              <h3>Integrity & Compassion</h3>
              <p>We maintain the highest standards of honesty and transparency in all our interactions with students and partners.</p>
            </div>
            <div className="value-card">
              <div className="value-number">06</div>
              <h3>Innovation & Entrepreneurship</h3>
              <p>We strive for excellence in every service we provide, ensuring the best outcomes for our students.</p>
            </div>
            <div className="value-card">
              <div className="value-number">07</div>
              <h3>Strong Brand Foundation</h3>
              <p>We provide clear, accurate information at every step of the journey, with no hidden costs or false promises.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="find-course-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Find your Course Now</h2>
            <p>"Grab The Chance to enrich your future with Quality Education at The Big Academy"</p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
