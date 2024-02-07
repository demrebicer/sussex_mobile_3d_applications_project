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
        Founded in 1886 by pharmacist Dr John S Pemberton in Atlanta, Georgia,
        The Coca‑Cola Company is the world's leading manufacturer, marketer and
        distributor of non-alcoholic beverage concentrates and syrups, and
        produces nearly 400 brands. We are constantly transforming our
        portfolio, from reducing added sugar in our drinks to bringing
        innovative new products to market. We seek to positively impact people’s
        lives, communities and the planet through water replenishment, packaging
        recycling, sustainable sourcing practices and carbon emissions
        reductions across our value chain. Together with our bottling partners,
        we employ more than 700,000 people, helping bring economic opportunity
        to local communities worldwide.
      </p>
    </div>
  );
}

export default Cola;
