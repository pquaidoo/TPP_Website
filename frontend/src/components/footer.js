// Footer.js
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="questions-section">
          <h2>Questions?</h2>
          <p>If you have any questions, feel free to contact us.</p>
        </div>
        <div className="social-icons">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"> youtube</i>
          </a>
          <a
            href="https://www.instagram.com/uwtprogramming/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram">instagram</i>
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
