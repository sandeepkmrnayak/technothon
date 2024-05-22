import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>Matrix</h2>
        <p>&copy; 2024 Matrix. All rights reserved.</p>
      </div>
      <div className="footer-right">
        <div className="social-media">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
        <div className="footer-links">
          <a href="#contactus">Contact Us</a>
          <a href="#aboutus">About Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
