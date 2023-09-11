// Header.js
import React from "react";
<<<<<<< HEAD:frontend/src/components/header.js
import "./header.css";
import { Link } from "react-router-dom";
=======
import "./Header.css";
>>>>>>> main:frontend/src/header.js

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="left-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
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
