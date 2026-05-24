import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function About() {

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <motion.section
        className="page-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="blur-circle blur-one"></div>
        <div className="blur-circle blur-two"></div>

        <div className="container">
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ABOUT US
          </motion.p>

          <motion.h1
            className="page-hero-title gradient-text"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Story
          </motion.h1>

          <motion.p
            className="hero-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Since 2009, we have been transforming packaging into
            powerful brand stories with precision and creativity.
          </motion.p>
        </div>
      </motion.section>

      {/* ── ABOUT STORY ── */}
      <motion.section
        className="about-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container about-container">

          <div className="about-left">
            <p className="section-subtitle">WHO WE ARE</p>
            <h2 className="about-title">
              Transforming Packaging Into Powerful Brand Stories
            </h2>
          </div>

          <div className="about-right">
            <p>
              Print Vista is a professionally managed printing and
              packaging company specializing in mono cartons, pharmaceutical
              boxes, FMCG packaging and customized printing solutions.
            </p>
            <p>
              With modern infrastructure and advanced offset printing
              machinery, we ensure unmatched quality, consistency and
              on-time delivery for every client.
            </p>
            <p>
              Our expert graphic designers turn ideas into impactful
              packaging designs that elevate your brand and attract
              customers — from concept development to final artwork.
            </p>
          </div>

        </div>
      </motion.section>

      {/* ── STATS ── */}
      <section className="stats-section" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">

            <div className="stat-box">
              <h2>{statsInView ? <CountUp end={15} duration={2.5} /> : "0"}+</h2>
              <p>Years of Excellence</p>
            </div>

            <div className="stat-box">
              <h2>{statsInView ? <CountUp end={500} duration={2.5} /> : "0"}+</h2>
              <p>Happy Clients</p>
            </div>

            <div className="stat-box">
              <h2>{statsInView ? <CountUp end={100} duration={2.5} /> : "0"}%</h2>
              <p>Quality Focused</p>
            </div>

            <div className="stat-box">
              <h2>{statsInView ? <CountUp end={18} duration={2.5} /> : "0"}+</h2>
              <p>Product Categories</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <motion.section
        className="vm-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">

          <p className="section-subtitle">OUR PURPOSE</p>
          <h2 className="section-title">Vision & Mission</h2>

          <div className="vm-grid">

            <div className="vm-card">
              <div className="vm-icon">◎</div>
              <h3>Our Vision</h3>
              <p>
                To become a trusted national leader in packaging innovation
                by continuously upgrading technology, processes and
                creative design for every client we serve.
              </p>
            </div>

            <div className="vm-card">
              <div className="vm-icon">◈</div>
              <h3>Our Mission</h3>
              <p>
                Deliver world-class packaging solutions that enhance brand
                identity while maintaining strict quality and compliance
                standards on every single project.
              </p>
            </div>

          </div>

        </div>
      </motion.section>

      {/* ── WHY CHOOSE US ── */}
      <motion.section
        className="why-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">

          <p className="section-subtitle">WHY CHOOSE US</p>
          <h2 className="section-title">What Makes Us Special</h2>

          <div className="why-grid">

            <div className="why-card">
              <div className="why-icon">◈</div>
              <h3>Premium Quality</h3>
              <p>High-end offset & packaging print standards with attention to every detail.</p>
            </div>

            <div className="why-card">
              <div className="why-icon">◉</div>
              <h3>Creative Design</h3>
              <p>Modern packaging concepts with unique branding and innovative aesthetics.</p>
            </div>

            <div className="why-card">
              <div className="why-icon">◎</div>
              <h3>Fast Delivery</h3>
              <p>Reliable production and timely dispatch service for every order.</p>
            </div>

            <div className="why-card">
              <div className="why-icon">◐</div>
              <h3>Skilled Professionals</h3>
              <p>Experienced designers and technicians dedicated to your project.</p>
            </div>

            <div className="why-card">
              <div className="why-icon">◑</div>
              <h3>Affordable Pricing</h3>
              <p>Competitive pricing without ever compromising on quality.</p>
            </div>

            <div className="why-card">
              <div className="why-icon">◒</div>
              <h3>100% Satisfaction</h3>
              <p>Your complete satisfaction is our promise on every project.</p>
            </div>

          </div>

        </div>
      </motion.section>

      {/* ── DESIGN TEAM ── */}
      <motion.section
        className="team-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container team-container">

          <div className="team-left">
            <p className="section-subtitle">OUR TEAM</p>
            <h2 className="about-title">
              Creative Minds Behind Every Design
            </h2>
            <p style={{ color: "#666", lineHeight: "1.9", marginTop: "24px", fontSize: "18px" }}>
              Our expert graphic designers work passionately to create
              innovative, eye-catching and market-ready packaging designs.
              We understand that packaging is the first impression of
              your product.
            </p>
            <ul className="team-list">
              <li>✦ Creative & modern packaging concepts</li>
              <li>✦ Brand-focused design approach</li>
              <li>✦ Print-ready & production-friendly artwork</li>
              <li>✦ Dedicated designers for every project</li>
            </ul>
          </div>

          <div className="team-right">
            <div className="team-card">
              <div className="team-avatar">MG</div>
              <h3>Design Team</h3>
              <p>Packaging & Brand Identity</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">PT</div>
              <h3>Print Team</h3>
              <p>Offset & Production</p>
            </div>
          </div>

        </div>
      </motion.section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container cta-container">
          <p className="section-subtitle">START YOUR PROJECT</p>
          <h2 className="cta-title">
            Ready to Elevate
            <br />Your Brand Packaging?
          </h2>
          <p className="cta-text">
            Let's create packaging that makes your product unforgettable
            on every shelf.
          </p>
          <a href="/contact">
            <button className="cta-btn">Get In Touch →</button>
          </a>
        </div>
      </section>
<Footer />

    </>
  );

}

export default About;