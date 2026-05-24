/* ═══════════════════════════════════════════════════════════
   NAVBAR.JS — Replace your current Navbar.js with this.
   Changes: Added "Our Clients" link to both desktop & mobile nav.
   ═══════════════════════════════════════════════════════════ */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "navbar navbar-scrolled" : "navbar"}>
      <div className="container nav-container">

        <Link to="/">
          <h2 className="logo">
            Mukesh<span style={{ color: "#2563eb" }}>Graphics</span>
          </h2>
        </Link>

        {/* Desktop Nav */}
        <div className="nav-links desktop-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/clients">Our Clients</Link>   {/* ← NEW */}
          <Link to="/contact">Contact</Link>
        </div>

        <div className="nav-right">
          <Link to="/contact">
            <button className="nav-btn desktop-nav">
              Start Project
            </button>
          </Link>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
            <Link to="/clients" onClick={() => setMenuOpen(false)}>Our Clients</Link> 
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              <button className="nav-btn" style={{ width: "100%" }}>
                Start Project
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );

}

export default Navbar;


