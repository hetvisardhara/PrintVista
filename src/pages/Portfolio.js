import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";

const products = [
  { id: 1, name: "1 Liter Box", category: "Food & Beverage", img: null },
  { id: 2, name: "250ml Box", category: "Food & Beverage", img: null },
  { id: 3, name: "4-5 Liter Box", category: "Food & Beverage", img: null },
  { id: 4, name: "700ml Box", category: "Food & Beverage", img: null },
  { id: 5, name: "Agriculture Box", category: "Agriculture", img: null },
  { id: 6, name: "Candy Box", category: "Food & Beverage", img: null },
  { id: 7, name: "Chowpati Box", category: "Food & Beverage", img: null },
  { id: 8, name: "Cone", category: "Food & Beverage", img: null },
  { id: 9, name: "Dangle Toran", category: "Stationery", img: null },
  { id: 10, name: "Cup & Cone Lid", category: "Food & Beverage", img: null },
  { id: 11, name: "Hair Care Box", category: "Personal Care", img: null },
  { id: 12, name: "Instant Mix Box", category: "Food & Beverage", img: null },
  { id: 13, name: "Letter Pad", category: "Stationery", img: null },
  { id: 14, name: "Masala Box", category: "Food & Beverage", img: null },
  { id: 15, name: "Menu Card", category: "Stationery", img: null },
  { id: 16, name: "Pharma Box", category: "Pharma", img: null },
  { id: 17, name: "Ice Cream Box", category: "Food & Beverage", img: null },
  { id: 18, name: "Custom Packaging", category: "Personal Care", img: null },
];

const categories = ["All", "Food & Beverage", "Pharma", "Personal Care", "Agriculture", "Stationery"];

// Placeholder colors for cards without images
const placeholderColors = [
  "#EEF2FF", "#F0FDF4", "#FFF7ED", "#FDF2F8",
  "#F0F9FF", "#FEFCE8", "#FFF1F2", "#F7FEE7",
];

function Portfolio() {

  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = active === "All"
    ? products
    : products.filter((p) => p.category === active);

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
            OUR WORK
          </motion.p>

          <motion.h1
            className="page-hero-title gradient-text"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Portfolio
          </motion.h1>

          <motion.p
            className="hero-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Showcasing our finest design and printing work delivered
            with quality and precision.
          </motion.p>
        </div>
      </motion.section>

      {/* ── FILTER + GRID ── */}
      <section className="portfolio-page-section">
        <div className="container">

          {/* Filter tabs */}
          <div className="filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={active === cat ? "filter-btn filter-active" : "filter-btn"}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div className="portfolio-page-grid" layout>
            <AnimatePresence>
              {filtered.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="portfolio-page-card"
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelected(product)}
                  style={{
                    background: placeholderColors[product.id % placeholderColors.length],
                  }}
                >
                  <div className="portfolio-page-placeholder">
                    <span className="placeholder-icon">◈</span>
                    <h3>{product.name}</h3>
                    <p>{product.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="lightbox-card"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: placeholderColors[selected.id % placeholderColors.length],
              }}
            >
              <button
                className="lightbox-close"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>
              <div className="lightbox-placeholder">
                <span className="placeholder-icon-lg">◈</span>
              </div>
              <div className="lightbox-info">
                <p className="lightbox-category">{selected.category}</p>
                <h2>{selected.name}</h2>
                <p className="lightbox-desc">
                  Premium quality {selected.name.toLowerCase()} designed
                  and manufactured with precision offset printing and
                  custom packaging solutions.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container cta-container">
          <p className="section-subtitle">INTERESTED?</p>
          <h2 className="cta-title">
            Let's Create Your
            <br />Custom Packaging
          </h2>
          <p className="cta-text">
            Tell us about your product and we'll design packaging
            that makes it stand out.
          </p>
          <a href="/contact">
            <button className="cta-btn">Request a Quote →</button>
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
            <a href="/contact">Contact</a>
          </div>

          <div className="footer-contact">
            <p>+91 XXXXX XXXXX</p>
            <p>info@printvista.com</p>
            <p>Surat, Gujarat</p>
          </div>

        </div>
        <div className="footer-bottom">
          <p>© 2026 All Rights Reserved —Print Vista</p>
        </div>
      </footer>

    </>
  );

}

export default Portfolio;