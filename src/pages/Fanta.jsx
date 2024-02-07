import React, { useRef, useState } from "react";
import "../assets/styles/fanta.scss";

import fantaBottle from "../assets/images/fantaBottle.png";

function Fanta() {
  return (
    <div className="fanta">
      <div className="text-container">
        <h1 className="background-text">Fanta</h1>
        <h1 className="background-text">Fanta</h1>
        <h1 className="background-text">Fanta</h1>
      </div>

      <img className="fanta-can" src={fantaBottle} alt="Fanta Bottle" />

      <div className="history-container">
        <h1 className="title">Origin</h1>
        <h1 className="sub-title">Story</h1>
        <p className="description">
          The origins of Fanta trace back to the 1940s, amidst the challenges of wartime Germany. With a shortage of ingredients necessary
          to produce Coca-Cola, resourceful local employees of The Coca-Cola Company were inspired to invent a new beverage. Utilizing
          available ingredients, they created a fruit-flavored soda that burst with vibrant taste, giving birth to Fanta. The name, derived
          from the German word "Fantasie," reflects the imaginative spirit and innovation behind its creation. Fanta quickly blossomed into
          a global sensation, offering an assortment of flavors that celebrate the diversity and joy of fruit. Today, Fanta stands as a
          testament to creativity and resilience, embodying the joy of play and the power of positive thinking. With a commitment to
          sustainability and minimizing environmental impact, Fanta continues to enchant consumers worldwide with its colorful variety and
          sparkling flavors, fostering moments of fun and escapism.
        </p>
      </div>
    </div>
  );
}

export default Fanta;
