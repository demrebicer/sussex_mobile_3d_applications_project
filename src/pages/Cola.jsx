import React, { useRef, useState } from "react";
import "../assets/styles/cola.scss";

import colaCan from "../assets/images/colaCan.png";

function Cola() {
  return (
    <div className="cola">
      <h1 className="background-text">Coca</h1>
      <h1 className="background-text">Cola</h1>
      <img className="cola-can" src={colaCan} alt="Cola Can" />

      <h1 className="title">Origin</h1>
      <h1 className="sub-title">Story</h1>
      <p className="description">
        In the bustling heart of 1886 Atlanta, Georgia, Dr. John S. Pemberton, a visionary pharmacist, concocted a distinctive syrup
        intended for soda fountains. This remarkable blend, initially marketed as a tonic for common ailments, laid the foundation for what
        would become The Coca-Cola Company. As its popularity surged, Pemberton's invention swiftly transitioned from medicinal elixir to
        the world's premier soft drink. Embracing innovation while honoring its heritage, Coca-Cola has since evolved, offering a diverse
        portfolio of beverages that cater to the ever-changing tastes of consumers across the globe. With sustainability at its core, the
        company is dedicated to making a positive impact on the environment and communities worldwide, through initiatives focused on water
        stewardship, recycling, and reducing its carbon footprint. Today, Coca-Cola stands as a symbol of refreshment, joy, and global
        unity, continuing to inspire moments of optimism and happiness for millions.
      </p>
    </div>
  );
}

export default Cola;
