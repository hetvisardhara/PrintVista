import { Link } from "react-router-dom";
 
function Footer() {
  return (
    <footer className="footer">
 
      <div className="container footer-top">
 
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/">
            <h2>Print<span>Vista</span></h2>
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
          <Link to="/clients">Our Clients</Link>
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
          <span className="footer-services-more">& more as per your need</span>
        </div>
 
        {/* Contact Info */}
        <div className="footer-col">
          <h4>Contact</h4>
          <span>📍 Surat, Gujarat — 395001</span>
          <span>📞 +91 98765 43210</span>
          <span>✉ info@printvista.com</span>
        
        </div>
 
        {/* Hours */}
        <div className="footer-col">
          <h4>Working Hours</h4>
          <span>Mon – Fri</span>
          <strong>9:00 AM – 7:00 PM</strong>
          <span style={{ marginTop: "10px" }}>Saturday</span>
          <strong>9:00 AM – 5:00 PM</strong>
          <span style={{ marginTop: "10px" }}>Sunday</span>
          <strong>Closed</strong>
        </div>
 
      </div>
 
      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2026 Print Vista. All Rights Reserved.</p>
          <p>Surat, Gujarat, India</p>
        </div>
      </div>
 
    </footer>
  );
}
 
export default Footer;
 