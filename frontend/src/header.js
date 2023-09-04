// Header.js
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="left-links">
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#calendar">Calendar</a>
          </li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
