import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpg";
import work3 from "../assets/work3.jpg";

function Home() {

  // CountUp triggers only when stats section is visible
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Cursor glow effect
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
              <a href="#portfolio">
                <button className="hero-btn">Explore Work</button>
              </a>
              <a href="#contact">
                <button className="hero-btn-outline">Get In Touch</button>
              </a>
            </motion.div>

            <div className="floating-card card-one">
              <h3>500+</h3>
              <p>Happy Clients</p>
            </div>

            <div className="floating-card card-two">
              <h3>15+</h3>
              <p>Years of Excellence</p>
            </div>

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
              <a href="#contact">
                <button className="hero-btn" style={{ marginTop: "20px" }}>
                  Contact Us →
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
                <p>
                  High-end offset & packaging print standards with attention
                  to every detail.
                </p>
              </div>

              <div className="why-card">
                <div className="why-icon">◉</div>
                <h3>In-House Machinery</h3>
                <p>
                  5-color offset printing with online coater delivering
                  precision and consistency every time.
                </p>
              </div>

              <div className="why-card">
                <div className="why-icon">◎</div>
                <h3>100% Satisfaction</h3>
                <p>
                  Your complete satisfaction is our promise with quality
                  guarantees and reliable service.
                </p>
              </div>

              <div className="why-card">
                <div className="why-icon">◐</div>
                <h3>Fast Delivery</h3>
                <p>
                  Reliable production and timely dispatch for every order,
                  no matter the scale.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ── STATS (CountUp triggers on scroll) ── */}
        <section className="stats-section" ref={statsRef}>
          <div className="container">
            <div className="stats-grid">

              <div className="stat-box">
                <h2>
                  {statsInView ? <CountUp end={15} duration={2.5} /> : "0"}+
                </h2>
                <p>Years of Excellence</p>
              </div>

              <div className="stat-box">
                <h2>
                  {statsInView ? <CountUp end={500} duration={2.5} /> : "0"}+
                </h2>
                <p>Happy Clients</p>
              </div>

              <div className="stat-box">
                <h2>
                  {statsInView ? <CountUp end={100} duration={2.5} /> : "0"}%
                </h2>
                <p>Quality Focused</p>
              </div>

              <div className="stat-box">
                <h2>
                  {statsInView ? <CountUp end={18} duration={2.5} /> : "0"}+
                </h2>
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
                <p>
                  5-color offset printing with online coater for vibrant,
                  high-precision results on every print run.
                </p>
              </div>

              <div className="service-card">
                <h3>Packaging Design</h3>
                <p>
                  Mono cartons, FMCG boxes, pharma packaging — designed and
                  manufactured with brand precision.
                </p>
              </div>

              <div className="service-card">
                <h3>Graphic Design</h3>
                <p>
                  Modern packaging concepts with unique branding, typography
                  and print-ready artwork.
                </p>
              </div>

            </div>

          </div>
        </motion.section>

        {/* ── PORTFOLIO ── */}
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
                className="portfolio-card"
                whileHover={{ y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <img src={work1} alt="packaging" />
                <div className="portfolio-overlay">
                  <h3>Pharma Packaging</h3>
                  <p>Offset Printing</p>
                </div>
              </motion.div>

              <motion.div
                className="portfolio-card"
                whileHover={{ y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <img src={work2} alt="boxes" />
                <div className="portfolio-overlay">
                  <h3>FMCG Boxes</h3>
                  <p>Packaging Design</p>
                </div>
              </motion.div>

              <motion.div
                className="portfolio-card"
                whileHover={{ y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <img src={work3} alt="branding" />
                <div className="portfolio-overlay">
                  <h3>Brand Identity</h3>
                  <p>Graphic Design</p>
                </div>
              </motion.div>

            </div>

          </div>
        </motion.section>

        {/* ── CONTACT ── */}
        <motion.section
          className="contact-section"
          id="contact"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container contact-container">

            <p className="section-subtitle">CONTACT</p>
            <h2 className="section-title">Let's Build Something Amazing</h2>

            {/* Contact Person Cards */}
            <div className="contact-cards">

              <div className="contact-person-card">
                <div className="contact-person-avatar">MB</div>
                <h3>Mr. Abc</h3>
                <p className="contact-person-role">Sales & Enquiry</p>
                <div className="contact-person-links">
                  <a href="tel:+919426272081">📞 +91 98765 43210</a>
                  <a href="mailto:info@printvista.com">✉ info@printvista.com</a>
                </div>
              </div>

              <div className="contact-person-card">
                <div className="contact-person-avatar">YP</div>
                <h3>Mr. Xyz</h3>
                <p className="contact-person-role">Sales & Support</p>
                <div className="contact-person-links">
                  <a href="tel:+919825982727">📞 +91 99999 99999</a>
                  <a href="mailto:sales@printvista.com">✉ sales@printvista.com</a>
                </div>
              </div>

            </div>

            {/* Address + Hours */}
            <div className="contact-info-row">

              <div className="contact-info-box">
                <h4>Our Office</h4>
                <p><br />Chitra GIDC, Surat,<br />Gujarat — 364004</p>
              </div>

              <div className="contact-info-box">
                <h4>Working Hours</h4>
                <p>Monday – Friday: 9:00 AM – 7:00 PM<br />Saturday: 9:00 AM – 5:00 PM<br />Sunday: Closed</p>
              </div>

              <div className="contact-info-box">
                <h4>WhatsApp Us</h4>
                <p>Quick response on WhatsApp for quotes and enquiries.</p>
                <a
                  href="https://wa.me/919426272081"
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp-link"
                >
                  Chat on WhatsApp →
                </a>
              </div>

            </div>

          </div>
        </motion.section>

        {/* ── CTA ── */}
        <section className="cta-section">
          <div className="container cta-container">
            <p className="section-subtitle">START YOUR PROJECT</p>
            <h2 className="cta-title">
              Let's Create Something
              <br />Extraordinary Together
            </h2>
            <p className="cta-text">
              From concept to finished product — premium printing and packaging
              solutions that make your brand unforgettable.
            </p>
            <a href="https://wa.me/919426272081" target="_blank" rel="noreferrer">
              <button className="cta-btn">Request a Quote →</button>
            </a>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="footer">
          <div className="container footer-container">

            <div className="footer-brand">
              <h2>Mukesh<span style={{ color: "#2563eb" }}>Graphics</span></h2>
              <p>Our Passion Is Your Impression</p>
            </div>

            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-contact">
              <p>+91 98765 43210</p>
              <p>info@printvista.com</p>
              <p>Surat, Gujarat</p>
            </div>

          </div>

          <div className="footer-bottom">
            <p>© 2026 All Rights Reserved — Print Vista</p>
          </div>
        </footer>

        {/* ── WHATSAPP FLOATING BUTTON ── */}
        <a
          href="https://wa.me/919426272081"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-float"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.882a.5.5 0 00.611.611l6.101-1.457A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.502-5.198-1.381l-.374-.214-3.878.927.951-3.793-.228-.389A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
        </a>

      </div>
    </>
  );
}

export default Home;