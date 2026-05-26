import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import fmcg from "../assets/fmcg.jpeg";
import brandidentity from "../assets/brandidentity.JPG";
import giftwrap from "../assets/giftwrap.JPG";
import Footer from "../components/Footer";

function Home() {

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const moveGlow = (e) => {
    const glow = document.querySelector(".cursor-glow");
    if (glow) {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    }
  };

  return (
    <>
      <Loader />

      <div onMouseMove={moveGlow}>

        <div className="cursor-glow"></div>

        <Navbar />

        {/* ── HERO ── */}
        <motion.section
          className="hero"
          id="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="blur-circle blur-one"></div>
          <div className="blur-circle blur-two"></div>

          <div className="container">

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              PREMIUM PRINTING & PACKAGING
            </motion.p>

            <motion.h1
              className="hero-title gradient-text"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.02 }}
            >
              Our Passion Is
              <br />
              Your Impression
            </motion.h1>

            <motion.p
              className="hero-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Print Vista delivers innovative packaging and printing
              solutions with premium quality, precise detailing, and on-time
              production for every business need.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a href="/portfolio">
                <button className="hero-btn">Explore Work</button>
              </a>
              <a href="/contact">
                <button className="hero-btn-outline">Get In Touch</button>
              </a>
            </motion.div>

          </div>
        </motion.section>

        {/* ── MARQUEE ── */}
        <section className="marquee-section">
          <div className="marquee">
            <div className="marquee-content">
              <span>OFFSET PRINTING</span>
              <span>PACKAGING</span>
              <span>PHARMA BOXES</span>
              <span>FMCG PACKAGING</span>
              <span>MONO CARTONS</span>
              <span>GRAPHIC DESIGN</span>
              <span>OFFSET PRINTING</span>
              <span>PACKAGING</span>
              <span>PHARMA BOXES</span>
              <span>FMCG PACKAGING</span>
              <span>MONO CARTONS</span>
              <span>GRAPHIC DESIGN</span>
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section className="about-section">
          <div className="container about-container">

            <div className="about-left">
              <p className="section-subtitle">ABOUT US</p>
              <h2 className="about-title">
                Transforming Packaging Into Powerful Brand Stories
              </h2>
            </div>

            <div className="about-right">
              <p>
                Since 2009, Print Vista has been a professionally managed
                printing and packaging company specializing in mono cartons,
                pharmaceutical boxes, FMCG packaging and customized printing
                solutions.
              </p>
              <p>
                With modern infrastructure and advanced 5-color offset printing
                machinery, we ensure unmatched quality, consistency and on-time
                delivery for every client across India.
              </p>
              <a href="/about">
                <button className="hero-btn" style={{ marginTop: "20px" }}>
                  Learn More →
                </button>
              </a>
            </div>

          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="why-section">
          <div className="container">

            <p className="section-subtitle">WHY CHOOSE US</p>
            <h2 className="section-title">What Makes Us Different</h2>

            <div className="why-grid">

              <div className="why-card">
                <div className="why-icon">◈</div>
                <h3>Premium Quality</h3>
                <p>High-end offset & packaging print standards with attention to every detail.</p>
              </div>

              <div className="why-card">
                <div className="why-icon">◉</div>
                <h3>In-House Machinery</h3>
                <p>5-color offset printing with online coater delivering precision every time.</p>
              </div>

              <div className="why-card">
                <div className="why-icon">◎</div>
                <h3>100% Satisfaction</h3>
                <p>Your complete satisfaction is our promise with quality guarantees.</p>
              </div>

              <div className="why-card">
                <div className="why-icon">◐</div>
                <h3>Fast Delivery</h3>
                <p>Reliable production and timely dispatch for every order, no matter the scale.</p>
              </div>

            </div>

          </div>
        </section>

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

        {/* ── SERVICES ── */}
        <motion.section
          className="services-section"
          id="services"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container">

            <p className="section-subtitle">SERVICES</p>
            <h2 className="section-title">What We Create</h2>

            <div className="services-grid">

              <div className="service-card">
                <h3>Offset Printing</h3>
                <p>5-color offset printing with online coater for vibrant, high-precision results.</p>
              </div>

              <div className="service-card">
                <h3>Packaging Design</h3>
                <p>Mono cartons, FMCG boxes, pharma packaging — designed with brand precision.</p>
              </div>

              <div className="service-card">
                <h3>Graphic Design</h3>
                <p>Modern packaging concepts with unique branding and print-ready artwork.</p>
              </div>

            </div>

          </div>
        </motion.section>

        {/* ── PORTFOLIO PREVIEW ── */}
        <motion.section
          className="portfolio-section"
          id="portfolio"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container">
            <p className="section-subtitle">PORTFOLIO</p>
            <h2 className="section-title">Selected Work</h2>

            <div className="portfolio-grid">

              <motion.div
                className="portfolio-card-new"
                whileHover={{ y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <img src={fmcg} alt="FMCG Boxes" />
                <div className="portfolio-card-label">
                  <h3>FMCG Boxes</h3>
                  <p>Packaging Design</p>
                </div>
              </motion.div>

              <motion.div
                className="portfolio-card-new"
                whileHover={{ y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <img src={brandidentity} alt="Brand Identity" />
                <div className="portfolio-card-label">
                  <h3>Brand Identity</h3>
                  <p>Graphic Design</p>
                </div>
              </motion.div>

              <motion.div
                className="portfolio-card-new"
                whileHover={{ y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <img src={giftwrap} alt="Gift Wrappers" />
                <div className="portfolio-card-label">
                  <h3>Gift Wrappers</h3>
                  <p>Custom Packaging</p>
                </div>
              </motion.div>

            </div>

            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <a href="/portfolio">
                <button className="hero-btn">View All Work →</button>
              </a>
            </div>

          </div>
        </motion.section>


{/* ── BOLD CTA SECTION ── */}
        <motion.section
          className="bold-cta-section"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container bold-cta-inner">

            <div className="bold-cta-left">
              <span className="bold-cta-tag">READY TO START?</span>
              <h2 className="bold-cta-title">
                Bring Your
<br />Packaging
<br />Vision Alive.
              </h2>
              <p className="bold-cta-text">
                Premium print, bold branding and packaging built
                to make your product unforgettable on every shelf.
              </p>
              <div className="bold-cta-buttons">
                <a href="/contact">
                 <button className="bold-cta-btn-outline">Talk to Us</button>
                </a>
                <a href="/contact">
              <button className="bold-cta-btn-fill">Get a Free Quote →</button>

                </a>
              </div>
            </div>

            <div className="bold-cta-right">
              <div className="bold-cta-feature">
                <span className="bold-cta-feature-icon">◈</span>
                <div>
                  <h4>Free Consultation</h4>
                  <p>Talk to our team about your packaging needs</p>
                </div>
              </div>
              <div className="bold-cta-feature">
                <span className="bold-cta-feature-icon">◎</span>
                <div>
                  <h4>Custom Quote in 24hrs</h4>
                  <p>Get a detailed quote tailored to your order</p>
                </div>
              </div>
              <div className="bold-cta-feature">
                <span className="bold-cta-feature-icon">◉</span>
                <div>
                  <h4>On-Time Delivery</h4>
                  <p>Reliable dispatch every time, no exceptions</p>
                </div>
              </div>
            </div>

          </div>
        </motion.section>

        <Footer />
      </div>
    </>
  );
}

export default Home;