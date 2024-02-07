import React, { useRef, useState } from "react";
import "../assets/styles/homepage.scss";
import colaCan from "../assets/images/colaCan.png";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function ColaCanModel() {
  const gltf = useGLTF("/~db596/assets/colacan.gltf", true); // Modelin yolu
  return <primitive object={gltf.scene} />;
}

function Homepage() {
  return (
    <div className="homepage">
      <h1 className="title">Taste The</h1>
      <h1 className="sub-title">Feeling</h1>
      <p className="description">
        Founded in 1886 by pharmacist Dr John S Pemberton in Atlanta, Georgia,
        The Coca‑Cola Company is the world's leading manufacturer, marketer and
        distributor of non-alcoholic beverage concentrates and syrups, and
        produces nearly 400 brands.
      </p>
      <button className="view-all-products-btn">View All Products</button>
      {/* <img className="cola-can" src={colaCan} alt="Cola Can" /> */}
      <Canvas
  className="cola-can-canvas"
  camera={{ position: [0, 0, 5], fov: 40 }}
>
  <ambientLight intensity={1.5} /> {/* Çevresel ışığın yoğunluğunu 1.5 yapın */}
  <directionalLight position={[0, 5, 0]} intensity={3} color={"#ffffff"} /> {/* Üstten gelen ışık */}
  <directionalLight position={[0, -5, 0]} intensity={1.5} color={"#ffffff"} /> {/* Altından gelen ışığın yoğunluğunu artırın */}
  <directionalLight position={[5, 0, 0]} intensity={2.25} color={"#ffffff"} /> {/* Sağdan gelen ışık */}
  <directionalLight position={[-5, 0, 0]} intensity={2.25} color={"#ffffff"} /> {/* Soldan gelen ışık */}
  <directionalLight position={[0, 0, 5]} intensity={1.5} color={"#ffffff"} /> {/* Önden gelen ışık */}
  <directionalLight position={[0, 0, -5]} intensity={1.5} color={"#ffffff"} /> {/* Arkadan gelen ışık */}
  <OrbitControls enableZoom={false} />
  <ColaCanModel />
</Canvas>



    </div>
  );
}

export default Homepage;
