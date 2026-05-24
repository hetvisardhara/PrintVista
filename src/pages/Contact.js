import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build WhatsApp message
    const msg = `Hello Mukesh Graphics!%0A%0A*Name:* ${formData.name}%0A*Company:* ${formData.company}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Service Needed:* ${formData.service}%0A%0A*Message:*%0A${formData.message}`;
    window.open(`https://wa.me/919426272081?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 },
  };

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
            GET IN TOUCH
          </motion.p>

          <motion.h1
            className="page-hero-title gradient-text"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Let's Build
            <br />Something Great
          </motion.h1>

          <motion.p
            className="hero-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Tell us about your packaging or printing project. We'll get
            back to you within 24 hours with a custom quote.
          </motion.p>
        </div>
      </motion.section>

      {/* ── CONTACT PERSONS ── */}
      <motion.section className="contact-persons-section" {...fadeUp}>
        <div className="container">
          <p className="section-subtitle">SPEAK DIRECTLY WITH US</p>
          <h2 className="section-title" style={{ marginBottom: "50px" }}>
            Our Team
          </h2>

          <div className="contact-persons-grid">
            {/* Mr. Bhupat */}
            <motion.div
              className="cp-card"
              whileHover={{ y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <div className="cp-avatar">
                <span>MB</span>
              </div>
              <div className="cp-badge">Sales & Enquiry</div>
              <h3 className="cp-name">Mr. Bhupat</h3>
              <p className="cp-title">Director</p>

              <div className="cp-divider"></div>

              <div className="cp-actions">
                <a href="tel:+919426272081" className="cp-link cp-link-phone">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .9h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  +91 94262 72081
                </a>
                <a href="mailto:info@mukeshgraphics.com" className="cp-link cp-link-email">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  info@mukeshgraphics.com
                </a>
                <a
                  href="https://wa.me/919426272081"
                  target="_blank"
                  rel="noreferrer"
                  className="cp-link cp-link-wa"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.882a.5.5 0 00.611.611l6.101-1.457A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.502-5.198-1.381l-.374-.214-3.878.927.951-3.793-.228-.389A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Mr. Yagnik */}
            <motion.div
              className="cp-card"
              whileHover={{ y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <div className="cp-avatar cp-avatar-purple">
                <span>YP</span>
              </div>
              <div className="cp-badge">Sales & Support</div>
              <h3 className="cp-name">Mr. Yagnik</h3>
              <p className="cp-title">Sales Manager</p>

              <div className="cp-divider"></div>

              <div className="cp-actions">
                <a href="tel:+919825982727" className="cp-link cp-link-phone">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .9h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  +91 98259 82727
                </a>
                <a href="mailto:sales@mukeshgraphics.com" className="cp-link cp-link-email">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  sales@mukeshgraphics.com
                </a>
                <a
                  href="https://wa.me/919825982727"
                  target="_blank"
                  rel="noreferrer"
                  className="cp-link cp-link-wa"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.882a.5.5 0 00.611.611l6.101-1.457A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.502-5.198-1.381l-.374-.214-3.878.927.951-3.793-.228-.389A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── QUOTE FORM ── */}
      <motion.section className="quote-section" {...fadeUp}>
        <div className="container">
          <div className="quote-wrapper">

            {/* Left — Info */}
            <div className="quote-left">
              <p className="section-subtitle" style={{ textAlign: "left" }}>
                REQUEST A QUOTE
              </p>
              <h2 className="quote-heading">
                Start Your
                <br />Project Today
              </h2>
              <p className="quote-subtext">
                Fill in the form and we'll send you a detailed quote
                within 24 hours. For urgent requirements, WhatsApp
                us directly.
              </p>

              <div className="quote-info-list">
                <div className="qi-item">
                  <div className="qi-icon">◎</div>
                  <div>
                    <h4>Quick Response</h4>
                    <p>We reply within 24 hours on all enquiries.</p>
                  </div>
                </div>
                <div className="qi-item">
                  <div className="qi-icon">◈</div>
                  <div>
                    <h4>Custom Quotes</h4>
                    <p>Every quote is tailored to your exact requirements.</p>
                  </div>
                </div>
                <div className="qi-item">
                  <div className="qi-icon">◉</div>
                  <div>
                    <h4>No Commitment</h4>
                    <p>Get a quote with zero obligation to proceed.</p>
                  </div>
                </div>
              </div>

              {/* Office Info */}
              <div className="office-box">
                <h4>Our Office</h4>
                <p>
                  Plot No. 58, Vishwakarma Estate,<br />
                  Chitra GIDC, Bhavnagar,<br />
                  Gujarat — 364004
                </p>
                <div className="office-hours">
                  <span>Mon–Fri: 9 AM – 7 PM</span>
                  <span>Sat: 9 AM – 5 PM</span>
                  <span>Sun: Closed</span>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="quote-right">
              {submitted ? (
                <motion.div
                  className="success-box"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>
                    Your enquiry has been sent via WhatsApp. We'll get
                    back to you within 24 hours.
                  </p>
                  <button
                    className="hero-btn"
                    style={{ marginTop: "24px" }}
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another →
                  </button>
                </motion.div>
              ) : (
                <form className="quote-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Raj Patel"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Company Name</label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Your Company Ltd."
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Service Required *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service...</option>
                      <option value="Offset Printing">Offset Printing</option>
                      <option value="Pharma Packaging">Pharma Packaging</option>
                      <option value="FMCG Packaging">FMCG Packaging</option>
                      <option value="Food & Beverage Boxes">Food & Beverage Boxes</option>
                      <option value="Mono Cartons">Mono Cartons</option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="Custom Packaging">Custom Packaging</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Tell us about your project *</label>
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Describe your packaging needs — quantity, size, material preferences, timeline, etc."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="form-submit-btn">
                    Send via WhatsApp →
                  </button>

                  <p className="form-note">
                    Clicking submit opens WhatsApp with your message pre-filled.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </motion.section>

      {/* ── MAP ── */}
      <motion.section className="map-section" {...fadeUp}>
        <div className="container">
          <p className="section-subtitle">FIND US</p>
          <h2 className="section-title" style={{ marginBottom: "40px" }}>
            Our Location
          </h2>
          <div className="map-wrapper">
            <iframe
              title="Mukesh Graphics Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.3!2d72.15!3d21.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQ2JzEyLjAiTiA3MsKwMDknMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "24px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </motion.section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container cta-container">
          <p className="section-subtitle">QUICK CONNECT</p>
          <h2 className="cta-title">
            Prefer to Call
            <br />or WhatsApp?
          </h2>
          <p className="cta-text">
            Our team is available Monday to Saturday. Reach us directly
            for fast responses on bulk orders and urgent requirements.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+919426272081">
              <button className="cta-btn">📞 Call Now</button>
            </a>
            <a href="https://wa.me/919426272081" target="_blank" rel="noreferrer">
              <button className="cta-btn" style={{ background: "#25d366", color: "#fff" }}>
                💬 WhatsApp Us
              </button>
            </a>
          </div>
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
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/clients">Our Clients</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="footer-contact">
            <p>+91 94262 72081</p>
            <p>+91 98259 82727</p>
            <p>info@mukeshgraphics.com</p>
            <p>Bhavnagar, Gujarat</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 All Rights Reserved — Mukesh Graphics</p>
        </div>
      </footer>
    </>
  );
}

export default Contact;