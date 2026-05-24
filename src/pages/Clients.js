import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Navbar from "../components/Navbar";

// Client data — replace logo URLs with actual client logos from /assets/clients/
const clients = [
  {
    id: 1,
    name: "Amul",
    industry: "Food & Dairy",
    since: "2015",
    initials: "AM",
    color: "#FFF7ED",
    accent: "#f97316",
  },
  {
    id: 2,
    name: "Sun Pharma",
    industry: "Pharmaceuticals",
    since: "2012",
    initials: "SP",
    color: "#EFF6FF",
    accent: "#2563eb",
  },
  {
    id: 3,
    name: "Nirma",
    industry: "FMCG",
    since: "2010",
    initials: "NR",
    color: "#F0FDF4",
    accent: "#16a34a",
  },
  {
    id: 4,
    name: "Balaji Wafers",
    industry: "Food & Snacks",
    since: "2014",
    initials: "BW",
    color: "#FDF2F8",
    accent: "#db2777",
  },
  {
    id: 5,
    name: "Vadilal",
    industry: "Ice Cream",
    since: "2011",
    initials: "VD",
    color: "#F0F9FF",
    accent: "#0ea5e9",
  },
  {
    id: 6,
    name: "Paras Pharma",
    industry: "Pharmaceuticals",
    since: "2016",
    initials: "PP",
    color: "#FEFCE8",
    accent: "#ca8a04",
  },
  {
    id: 7,
    name: "Patanjali",
    industry: "Wellness & FMCG",
    since: "2017",
    initials: "PT",
    color: "#F7FEE7",
    accent: "#65a30d",
  },
  {
    id: 8,
    name: "Britannia",
    industry: "Food & Bakery",
    since: "2013",
    initials: "BR",
    color: "#FFF1F2",
    accent: "#e11d48",
  },
  {
    id: 9,
    name: "Halo Herbal",
    industry: "Personal Care",
    since: "2018",
    initials: "HH",
    color: "#F5F3FF",
    accent: "#7c3aed",
  },
  {
    id: 10,
    name: "Kisan",
    industry: "Agriculture",
    since: "2019",
    initials: "KS",
    color: "#ECFDF5",
    accent: "#059669",
  },
  {
    id: 11,
    name: "Galaxy Spices",
    industry: "Food & Masala",
    since: "2020",
    initials: "GS",
    color: "#FFF7ED",
    accent: "#ea580c",
  },
  {
    id: 12,
    name: "Zydus Cadila",
    industry: "Pharmaceuticals",
    since: "2015",
    initials: "ZC",
    color: "#EFF6FF",
    accent: "#1d4ed8",
  },
];

const industries = [
  { label: "Food & Beverage", icon: "◈", count: "120+", desc: "Boxes, packaging, menu cards for leading food brands." },
  { label: "Pharmaceuticals", icon: "◎", count: "80+", desc: "Compliant pharma cartons and insert leaflets." },
  { label: "FMCG & Personal Care", icon: "◉", count: "60+", desc: "Premium packaging for consumer products." },
  { label: "Agriculture", icon: "◐", count: "40+", desc: "Durable packaging for agri inputs and produce." },
];

const testimonials = [
  {
    quote:
      "Print Vista consistently delivers exceptional quality. Our pharma packaging has never looked more professional.",
    name: "Rajesh Shah",
    company: "Sun Pharma — Bhavnagar",
    initials: "RS",
  },
  {
    quote:
      "On-time delivery and superb print quality. They understand brand aesthetics better than anyone we've worked with.",
    name: "Priya Mehta",
    company: "Balaji Wafers — Rajkot",
    initials: "PM",
  },
  {
    quote:
      "The team is incredibly responsive. From artwork to final product, every step is handled with care and precision.",
    name: "Amit Patel",
    company: "Halo Herbal — Surat",
    initials: "AP",
  },
];

function Clients() {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const fadeUp = {
    initial: { opacity: 0, y: 50 },
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
            OUR CLIENTS
          </motion.p>

          <motion.h1
            className="page-hero-title gradient-text"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Trusted By
            <br />500+ Brands
          </motion.h1>

          <motion.p
            className="hero-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            From local businesses to national brands — we've helped
            hundreds of companies elevate their packaging and print presence.
          </motion.p>
        </div>
      </motion.section>

      {/* ── STATS ── */}
      <section className="stats-section" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-box">
              <h2>{statsInView ? <CountUp end={500} duration={2.5} /> : "0"}+</h2>
              <p>Happy Clients</p>
            </div>
            <div className="stat-box">
              <h2>{statsInView ? <CountUp end={15} duration={2.5} /> : "0"}+</h2>
              <p>Years of Trust</p>
            </div>
            <div className="stat-box">
              <h2>{statsInView ? <CountUp end={10} duration={2.5} /> : "0"}+</h2>
              <p>Industries Served</p>
            </div>
            <div className="stat-box">
              <h2>{statsInView ? <CountUp end={98} duration={2.5} /> : "0"}%</h2>
              <p>Repeat Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <motion.section className="industries-section" {...fadeUp}>
        <div className="container">
          <p className="section-subtitle">SECTORS WE SERVE</p>
          <h2 className="section-title">Industries We Work With</h2>

          <div className="industries-grid">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                className="industry-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="industry-icon">{ind.icon}</div>
                <div className="industry-count">{ind.count}</div>
                <h3>{ind.label}</h3>
                <p>{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── CLIENT GRID ── */}
      <motion.section className="clients-grid-section" {...fadeUp}>
        <div className="container">
          <p className="section-subtitle">WHO WE'VE WORKED WITH</p>
          <h2 className="section-title">Our Client Family</h2>

          <div className="clients-card-grid">
            {clients.map((client, i) => (
              <motion.div
                key={client.id}
                className="client-card"
                style={{ background: client.color }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}
              >
                {/* Replace this div with <img> when you have actual logos */}
                <div
                  className="client-logo-placeholder"
                  style={{ color: client.accent, border: `1px solid ${client.accent}22` }}
                >
                  {client.initials}
                </div>
                <h3 className="client-name">{client.name}</h3>
                <p className="client-industry">{client.industry}</p>
                <span className="client-since">Since {client.since}</span>
              </motion.div>
            ))}
          </div>

          <p className="clients-note">
            + hundreds more businesses across India trust Print Vista
          </p>
        </div>
      </motion.section>

      {/* ── LOGO MARQUEE STRIP ── */}
      <section className="clients-marquee-section">
        <div className="marquee">
          <div className="marquee-content clients-marquee-content">
            {clients.concat(clients).map((c, i) => (
              <span key={i} className="marquee-client-name">
                {c.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <motion.section className="testimonial-section" {...fadeUp}>
        <div className="container">
          <p className="section-subtitle">WHAT THEY SAY</p>
          <h2 className="section-title">Client Testimonials</h2>

          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="testimonial-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -10 }}
              >
                <div className="testimonial-quote-mark">"</div>
                <p>{t.quote}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div>
                    <h4>{t.name}</h4>
                    <span>{t.company}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── TRUST BADGES ── */}
      <motion.section className="trust-section" {...fadeUp}>
        <div className="container">
          <div className="trust-grid">
            <div className="trust-badge">
              <div className="trust-icon">◈</div>
              <h4>ISO Compliant Process</h4>
              <p>Quality management at every stage</p>
            </div>
            <div className="trust-badge">
              <div className="trust-icon">◎</div>
              <h4>On-Time Delivery</h4>
              <p>99% orders delivered on schedule</p>
            </div>
            <div className="trust-badge">
              <div className="trust-icon">◉</div>
              <h4>Pan-India Reach</h4>
              <p>Clients across Gujarat & India</p>
            </div>
            <div className="trust-badge">
              <div className="trust-icon">◐</div>
              <h4>15+ Years Experience</h4>
              <p>Proven track record since 2009</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container cta-container">
          <p className="section-subtitle">JOIN OUR CLIENT FAMILY</p>
          <h2 className="cta-title">
            Ready to Elevate
            <br />Your Brand Packaging?
          </h2>
          <p className="cta-text">
            Join 500+ businesses that trust Print Vista for
            premium printing and packaging solutions.
          </p>
          <a href="/contact">
            <button className="cta-btn">Get Your Free Quote →</button>
          </a>
        </div>
      </section>

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
            <p>+91 98765 43210</p>
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

export default Clients;