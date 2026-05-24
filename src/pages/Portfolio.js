import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";

// ── IMAGE IMPORTS ──
import adhesivetapes from "../assets/adhesivetapes.jpeg";
import chocolate from "../assets/chocolate.jpeg";
import coffeesleves from "../assets/coffeesleves.jpeg";
import custombags from "../assets/custombags.jpeg";
import foodwrap from "../assets/foodwrap.jpeg";
import slenderpaper from "../assets/slenderpaper.jpeg";
import soap from "../assets/soap.jpeg";
import visitingcards from "../assets/visitingcards.jpeg";

const products = [
  { id: 1, name: "Self Adhesive Tapes", category: "Packaging", img: adhesivetapes },
  { id: 2, name: "Multipurpose Slender Paper Pouches", category: "Packaging", img: slenderpaper },
  { id: 3, name: "Custom Paper Bags", category: "Packaging", img: custombags },
  { id: 4, name: "Wrapping Paper", category: "Packaging", img: foodwrap },
  { id: 5, name: "Custom Coffee Sleeves", category: "Packaging", img: coffeesleves },
  { id: 6, name: "Chocolate Boxes", category: "Boxes", img: chocolate },
  { id: 7, name: "Soap Boxes", category: "Boxes", img: soap },
  { id: 8, name: "Visiting Cards", category: "Stationery", img: visitingcards },
];

const categories = ["All", "Packaging", "Boxes", "Stationery"];

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
                >
                  {/* Real image */}
                  <img
                    src={product.img}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "20px",
                      display: "block",
                    }}
                  />

                  {/* Hover overlay */}
                  <div className="portfolio-page-overlay">
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
              style={{ background: "#fff" }}
            >
              <button
                className="lightbox-close"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>

              {/* Lightbox image */}
              <div className="lightbox-placeholder" style={{ padding: 0, overflow: "hidden" }}>
                <img
                  src={selected.img}
                  alt={selected.name}
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div className="lightbox-info">
                <p className="lightbox-category">{selected.category}</p>
                <h2>{selected.name}</h2>
                <p className="lightbox-desc">
                  Premium quality {selected.name.toLowerCase()} crafted
                  with precision printing and custom packaging solutions
                  tailored to your brand.
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

export default Portfolio;