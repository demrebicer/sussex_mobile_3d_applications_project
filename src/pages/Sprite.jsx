import React, { useRef, useState } from "react";
import "../assets/styles/sprite.scss";

import spriteBottle from "../assets/images/spriteBottle.png";

function Sprite() {
  return (
    <div className="sprite">
      <div className="text-container">
        <h1 className="background-text-left">Spr</h1>
        <h1 className="background-text-right">ite</h1>
      </div>

      <img className="sprite-can" src={spriteBottle} alt="Sprite Bottle" />

      <div className="history-container">
        <h1 className="title">Origin</h1>
        <h1 className="sub-title">Story</h1>
        <p className="description">
          Launched in 1961 as a response to the growing demand for a crisp, refreshing beverage that could rival the popularity of
          traditional colas, Sprite emerged from the creative minds at The Coca-Cola Company. With its clear, lemon-lime flavor, Sprite
          instantly captivated the taste buds of a generation looking for an invigorating soda experience. It was the answer to the
          consumers' desire for something different, something that danced on the palate with a burst of citrus. Over the years, Sprite has
          become synonymous with encouraging individuality and a bold spirit, often aligning itself with youth culture and music. As part of
          its commitment to environmental sustainability, Sprite has continuously innovated its packaging solutions to reduce impact,
          reflecting its dedication to refreshing not just its consumers but the planet as well.
        </p>
      </div>
    </div>
  );
}

export default Sprite;
