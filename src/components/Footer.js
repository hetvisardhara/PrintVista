import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-top">

        {/* Brand */}
        <div className="footer-brand">
          <Link to="/">
            <h2>Mukesh<span>Graphics</span></h2>
          </Link>
          <p className="footer-tagline">Our Passion Is Your Impression</p>
          <p className="footer-desc">
            Premium printing and packaging solutions crafted with
            precision, creativity and on-time delivery since 2009.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <span>Offset Printing</span>
          <span>Packaging Design</span>
          <span>Pharma Boxes</span>
          <span>FMCG Packaging</span>
          <span>Graphic Design</span>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h4>Contact</h4>
          <span>📍 Plot No. XX, Industrial Estate,<br />Bhavnagar, Gujarat — 364004</span>
          <span>📞 +91 XXXXX XXXXX</span>
          <span>✉ info@mukeshgraphics.com</span>
          <span>✉ sales@mukeshgraphics.com</span>
        </div>

        {/* Hours */}
        <div className="footer-col">
          <h4>Working Hours</h4>
          <span>Mon – Fri</span>
          <strong>9:00 AM – 7:00 PM</strong>
          <span style={{ marginTop: "12px" }}>Saturday</span>
          <strong>9:00 AM – 5:00 PM</strong>
          <span style={{ marginTop: "12px" }}>Sunday</span>
          <strong>Closed</strong>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2026 Mukesh Graphics. All Rights Reserved.</p>
          <p>Bhavnagar, Gujarat, India</p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;