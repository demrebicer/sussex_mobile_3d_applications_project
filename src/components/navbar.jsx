import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import colaLogo from "../assets/images/colaLogo.png";
import "../assets/styles/navbar.scss";
import { FaBars, FaTimes } from "react-icons/fa"; // İkonları içe aktarma

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const navigateTo = useNavigate();

  const toggleMenu = () => setMenuActive(!menuActive);

  function navigate(path) {
    setMenuActive(false);
    navigateTo(path);
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate("/~db596")}>
        <img src={colaLogo} alt="Cola Logo" />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {/* İkonları koşullu olarak göster */}
        {menuActive ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>
      <ul className={`navbar-links ${menuActive ? "active" : ""}`}>
        <li className="navbar-link" onClick={() => navigate("/~db596")}>
          Homepage
        </li>
        <li className="navbar-link" onClick={() => navigate("/~db596/about")}>
          About
        </li>
        <li className="navbar-link" onClick={() => navigate("/~db596/drinks")}>
          Drinks
        </li>
        <li className="navbar-link" onClick={() => navigate("/~db596/contact")}>
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
