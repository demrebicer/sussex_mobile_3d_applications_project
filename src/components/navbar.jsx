import React, { useState } from "react";
import colaLogo from "../assets/images/colaLogo.png";
import "../assets/styles/navbar.scss";

const Navbar = () => {
  const [current, setCurrent] = useState("");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    //logo on left side 3 links on right side
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img className="navbar-logo-img" src={colaLogo} alt="Cola Logo" />
        </div>
        <div>
          <ul className="navbar-links">
            {" "}
            {/* Inline CSS ile listeyi flex yap */}
            <li>
              <a className="navbar-link" href="/">
                Homepage
              </a>
            </li>
            <li>
              <a className="navbar-link" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="navbar-link" href="/contact">
                Drinks
              </a>
            </li>
            <li>
              <a className="navbar-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
