import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import colaLogo from "../assets/images/colaLogo.png";
import "../assets/styles/navbar.scss";

const Navbar = () => {
  const [current, setCurrent] = useState("");

  const navigateTo = useNavigate();

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
              <a
                className="navbar-link"
                onClick={() => {
                  navigateTo("/~db596");
                }}
              >
                Homepage
              </a>
            </li>
            <li>
            <a
                className="navbar-link"
                onClick={() => {
                  navigateTo("/~db596/about");
                }}
              >                About
              </a>
            </li>
            <li>
            <a
                className="navbar-link"
                onClick={() => {
                  navigateTo("/~db596/drinks");
                }}
              >                Drinks
              </a>
            </li>
            <li>
            <a
                className="navbar-link"
                onClick={() => {
                  navigateTo("/~db596/contact");
                }}
              >                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
