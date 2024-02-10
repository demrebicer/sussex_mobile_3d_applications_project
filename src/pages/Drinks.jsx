import React, { useRef, useState } from "react";
import "../assets/styles/drinks.scss";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

import cola from "../assets/images/drinks-cola.png";
import sprite from "../assets/images/drinks-sprite.png";
import fanta from "../assets/images/drinks-fanta.png";

function Drinks() {
  const navigateTo = useNavigate();

  return (
    <div className="drinks">
      <Navbar />

      <h1 className="title">Our Drinks</h1>

      {/* Create 1 row then 3 columns */}
      <div className="drinks-row">
        <div
          className="cola-col"
          onClick={() => {
            navigateTo("/~db596/cola");
          }}
        >
          <img src={cola} alt="Cola" className="cola-img" />
        </div>
        <div
          className="sprite-col"
          onClick={() => {
            navigateTo("/~db596/sprite");
          }}
        >
          <img src={sprite} alt="Sprite" className="sprite-img" />
        </div>
        <div
          className="fanta-col"
          onClick={() => {
            navigateTo("/~db596/fanta");
          }}
        >
          <img src={fanta} alt="Fanta" className="fanta-img" />
        </div>
      </div>
    </div>
  );
}

export default Drinks;
