import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import adhesivetapes from "../assets/adhesivetapes.jpeg";
import brandidentity from "../assets/brandidentity.JPG";
import chocolate from "../assets/chocolate.jpeg";
import coffeesleves from "../assets/coffeesleves.jpeg";
import custombags from "../assets/custombags.jpeg";
import fmcg from "../assets/fmcg.jpeg";
import foodwrap from "../assets/foodwrap.jpeg";
import giftwrap from "../assets/giftwrap.JPG";
import labeldesign from "../assets/labeldesign.JPG";
import mousepad from "../assets/mousepad.jpeg";
import slenderpaper from "../assets/slenderpaper.jpeg";
import soap from "../assets/soap.jpeg";
import tags from "../assets/tags.JPG";
import visitingcards from "../assets/visitingcards.jpeg";

const products = [
  { id: 1,  name: "Self Adhesive Tapes",               category: "Packaging",  img: adhesivetapes },
  { id: 2,  name: "Brand Identity",                    category: "Branding",   img: brandidentity },
  { id: 3,  name: "Chocolate Boxes",                   category: "Boxes",      img: chocolate     },
  { id: 4,  name: "Custom Coffee Sleeves",             category: "Packaging",  img: coffeesleves  },
  { id: 5,  name: "Custom Paper Bags",                 category: "Packaging",  img: custombags    },
  { id: 6,  name: "FMCG Packaging",                   category: "Packaging",  img: fmcg          },
  { id: 7,  name: "Wrapping Paper",                    category: "Packaging",  img: foodwrap      },
  { id: 8,  name: "Gift Wrap",                         category: "Packaging",  img: giftwrap      },
  { id: 9,  name: "Label Design",                      category: "Branding",   img: labeldesign   },
  { id: 10, name: "Mouse Pad",                         category: "Stationery", img: mousepad      },
  { id: 11, name: "Slender Paper Pouches",             category: "Packaging",  img: slenderpaper  },
  { id: 12, name: "Soap Boxes",                        category: "Boxes",      img: soap          },
  { id: 13, name: "Tags",                              category: "Packaging",  img: tags          },
  { id: 14, name: "Visiting Cards",                    category: "Stationery", img: visitingcards },
];

const categories = ["All", "Packaging", "Boxes", "Branding", "Stationery"];

function Portfolio() {

  const [active, setActive]     = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = active === "All"
    ? products
    : products.filter((p) => p.category === active);

  return (
    <>
      <Navbar />

      {/* HERO */}
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

      {/* FILTER + GRID */}
      <section className="portfolio-page-section">
        <div className="container">

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

          <motion.div className="port-grid" layout>
            <AnimatePresence>
              {filtered.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="port-card"
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelected(product)}
                >
                  <div className="port-img-wrap">
                    <img src={product.img} alt={product.name} />
                    <div className="port-hover-overlay">
                      <span>View →</span>
                    </div>
                  </div>
                  <div className="port-label">
                    <h3>{product.name}</h3>
                    <p>{product.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* LIGHTBOX */}
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
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{ background: "#fff" }}
            >
              <button className="lightbox-close" onClick={() => setSelected(null)}>
                ✕
              </button>
              <div style={{ overflow: "hidden", borderRadius: "30px 30px 0 0" }}>
                <img
                  src={selected.img}
                  alt={selected.name}
                  style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }}
                />
              </div>
              <div className="lightbox-info">
                <p className="lightbox-category">{selected.category}</p>
                <h2>{selected.name}</h2>
                <p className="lightbox-desc">
                  Premium quality {selected.name.toLowerCase()} crafted with
                  precision printing and custom packaging solutions tailored to your brand.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-container">
          <p className="section-subtitle">INTERESTED?</p>
          <h2 className="cta-title">Let's Create Your<br />Custom Packaging</h2>
          <p className="cta-text">
            Tell us about your product and we'll design packaging that makes it stand out.
          </p>
          <a href="/contact">
            <button className="cta-btn">Request a Quote →</button>
          </a>
        </div>
      </section>

<Footer />
    </>
  );
}

export default Portfolio;