

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Clients from "./pages/Clients";     // ← NEW IMPORT
import Contact from "./pages/Contact";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/clients" element={<Clients />} />  
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
