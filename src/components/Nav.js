import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
  return (
    <header>
      <nav>
        <div>
          <p id="logo-text">UNNATI</p>
        </div>

        <ul className="nav-links">
          <li>
            <a href="/">
              <span>HOME</span>
            </a>
          </li>
          <li>
            <a href="../components/ContactUs">
              <span>CONTACT US</span>
            </a>
          </li>
          <li>
            <span>GET INVOLVED</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
