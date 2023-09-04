// Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="questions-section">
          <h2>Questions?</h2>
          <p>If you have any questions, feel free to contact us.</p>
        </div>
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="to-top">
        <a href="#top">To the Top</a>
      </div>
    </footer>
  );
};

export default Footer;
