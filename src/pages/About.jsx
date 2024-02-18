import React, { useRef, useState } from "react";
import "../assets/styles/about.scss";
import about from "../assets/images/about.png";
import aboutmobile from "../assets/images/aboutmobile.jpg";
import Navbar from "../components/navbar";

function About() {
  return (
    <div className="about">
      <div className="text-container">
        <h1 className="title">Our</h1>
        <h1 className="sub-title">History</h1>
        <p className="description">
          Founded in 1886 by pharmacist Dr John S Pemberton in Atlanta, Georgia, The Coca‑Cola Company is the world's leading manufacturer,
          marketer and distributor of non-alcoholic beverage concentrates and syrups, and produces nearly 400 brands. We are constantly
          transforming our portfolio, from reducing added sugar in our drinks to bringing innovative new products to market. We seek to
          positively impact people’s lives, communities and the planet through water replenishment, packaging recycling, sustainable
          sourcing practices and carbon emissions reductions across our value chain. Together with our bottling partners, we employ more
          than 700,000 people, helping bring economic opportunity to local communities worldwide.
        </p>
      </div>

      <div className="img-container">
        <img className="about-img" src={about} alt="About" />
        <img className="about-img-mobile" src={aboutmobile} alt="About" />
      </div>

      <Navbar />
    </div>
  );
}

export default About;
