import logo from "../../assets/logo.png"
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="ACI Logo" />
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
        <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
