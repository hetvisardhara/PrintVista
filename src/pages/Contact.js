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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Unable to send. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
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

      {/* ── CONTACT PERSON CARD ── */}
      <motion.section
        className="contact-persons-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ paddingTop: "140px", paddingBottom: "20px" }}
      >
        <div className="container">
          <div style={{ maxWidth: "420px", margin: "0 auto" }}>
            <motion.div
              className="cp-card"
              whileHover={{ y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <div className="cp-avatar"><span>PP</span></div>
              <div className="cp-badge">Sales & Enquiry</div>
              <h3 className="cp-name">Pooja Patel</h3>
              <p className="cp-title">Sales Manager</p>
              <div className="cp-divider"></div>
              <div className="cp-actions">
                <a href="tel:+919999999999" className="cp-link cp-link-phone">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .9h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  +91 99999 99999
                </a>
                <a href="mailto:info@printvista.com" className="cp-link cp-link-email">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  info@printvista.com
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
                within 24 hours.
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

              <div className="office-box">
                <h4>Our Office</h4>
                <p>Surat, Gujarat</p>
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
                  <h3>Enquiry Sent!</h3>
                  <p>
                    Thank you! We've received your enquiry and will get
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

                  {error && (
                    <p style={{ color: "red", marginBottom: "12px", fontSize: "14px" }}>
                      {error}
                    </p>
                  )}

                  <button type="submit" className="form-submit-btn" disabled={loading}>
                    {loading ? "Sending..." : "Send Enquiry →"}
                  </button>

                  <p className="form-note">
                    We'll reply to your email within 24 hours.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </motion.section>

      {/* ── HERO (bottom) ── */}
      <motion.section
        style={{ padding: "80px 0 60px", textAlign: "center" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="blur-circle blur-one"></div>
        <div className="blur-circle blur-two"></div>
        <div className="container">
          <motion.h1
            className="page-hero-title gradient-text"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Let's Build
            <br />Something Great
          </motion.h1>
          <motion.p
            className="hero-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Tell us about your packaging or printing project. We'll get
            back to you within 24 hours with a custom quote.
          </motion.p>
        </div>
      </motion.section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-brand">
            <h2>Print<span style={{ color: "#2563eb" }}>Vista</span></h2>
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
            <p>+91 99999 99999</p>
            <p>info@printvista.com</p>
            <p>Surat, Gujarat</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 All Rights Reserved — Print Vista</p>
        </div>
      </footer>
    </>
  );
}

export default Contact;