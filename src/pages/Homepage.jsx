import React, { useRef, useState } from "react";
import "../assets/styles/homepage.scss";
import colaCan from "../assets/images/colaCan.png";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import { TbArrowMoveDown } from "react-icons/tb";

function ColaCanModel() {
  const gltf = useGLTF("/~db596/assets/colacan.gltf", true); // Modelin yolu
  return <primitive object={gltf.scene} />;
}

function Homepage() {
  const navigateTo = useNavigate();

  return (
    <div className="homepage">
      <Navbar />
      <div className="home-container">
        <div className="cola-can-container">
          <img className="cola-can" src={colaCan} alt="Cola Can" />
        </div>

        <div className="text-container">
          <h1 className="title">Taste The</h1>
          <h1 className="sub-title">Feeling</h1>
          <p className="description">
            Founded in 1886 by pharmacist Dr John S Pemberton in Atlanta, Georgia, The Coca‑Cola Company is the world's leading
            manufacturer, marketer and distributor of non-alcoholic beverage concentrates and syrups, and produces nearly 400 brands.
          </p>
          <button
            className="view-all-products-btn"
            onClick={() => {
              navigateTo("/~db596/drinks");
            }}
          >
            View All Products
          </button>

          <div
            className="scrollButton"
            onClick={() => {
              window.scrollTo({
                left: 0,
                top: document.body.scrollHeight,
                behavior: "smooth",
              });
            }}
          >
            <TbArrowMoveDown size={50} color="#fff" />
          </div>
        </div>
      </div>

      <div className="video-container">
        <video width="480" autoPlay muted loop>
          <source src="/~db596/assets/videos/colaanimation.mp4" type="video/mp4" />
          Tarayıcınız video etiketini desteklemiyor.
        </video>
      </div>
    </div>
  );
}

export default Homepage;
