import React, { useState, useRef } from "react";
import "../assets/styles/homepage.scss";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

function ColaCanModel({ setJumpHeight, jumpHeight }) {
  const modelRef = useRef();

  const gltf = useGLTF("/~db596/assets/colacan.gltf", true); // Modelin yolu

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.position.y = jumpHeight; // Modelin y pozisyonunu güncelle
      // Yere düşüş sırasında modelin eğimini kademeli olarak azalt
      modelRef.current.rotation.z = jumpHeight > 0 ? Math.max(0, Math.PI / 6 - (2 - jumpHeight) * (Math.PI / 6)) : 0;
    }
  });

  return <primitive ref={modelRef} object={gltf.scene} />;
}

function Homepage() {
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [topView, setTopView] = useState(false); // Yeni state üstten bakış için
  const [jump, setJump] = useState(false);
  const [jumpHeight, setJumpHeight] = useState(0);
  const [rotation, setRotation] = useState([0, 0, 0]); // Modelin rotasyon durumunu tutacak state

  const orbitRef = useRef(); // OrbitControls referansı

  // Function to toggle auto-rotate
  const toggleAutoRotate = () => {
    setIsAutoRotate(!isAutoRotate);
  };

  // Üstten bakış ve varsayılan bakış arasında geçiş yap
  const toggleTopView = () => {
    if (orbitRef.current) {
      setTopView(!topView);
      if (!topView) {
        orbitRef.current.reset();
        orbitRef.current.object.position.set(0, 10, 0); // Üstten bakış için pozisyon
        orbitRef.current.object.lookAt(0, 0, 0); // Modelin merkezine bak
      } else {
        orbitRef.current.reset();
      }
    }
  };

  const startJump = () => {
    if (jumpHeight === 0) { // Zeminde ise zıpla
      let peakReached = false;
      const interval = setInterval(() => {
        setJumpHeight(currentHeight => {
          let newHeight = currentHeight;
          if (currentHeight >= 2 && !peakReached) {
            peakReached = true;
            newHeight = 2;
          } else if (peakReached) {
            newHeight = Math.max(currentHeight - 0.1, 0);
          } else {
            newHeight = currentHeight + 0.1;
          }
          // Yere temas edildiğinde eğimi sıfırla ve interval'i durdur
          if (newHeight === 0) {
            clearInterval(interval);
          }
          return newHeight;
        });
      }, 20);
    }
  };

  return (
    <div className="homepage">
      <h1 className="title">Taste The</h1>
      <h1 className="sub-title">Feeling</h1>
      <p className="description">
        Founded in 1886 by pharmacist Dr John S Pemberton in Atlanta, Georgia, The Coca‑Cola Company is the world's leading manufacturer,
        marketer and distributor of non-alcoholic beverage concentrates and syrups, and produces nearly 400 brands.
      </p>
      <button className="view-all-products-btn">View All Products</button>
      <Canvas className="cola-can-canvas" camera={{ position: [0, 0, 5], fov: 40 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 5, 0]} intensity={3} color={"#ffffff"} />
        <directionalLight position={[0, -5, 0]} intensity={1.5} color={"#ffffff"} />
        <directionalLight position={[5, 0, 0]} intensity={2.25} color={"#ffffff"} />
        <directionalLight position={[-5, 0, 0]} intensity={2.25} color={"#ffffff"} />
        <directionalLight position={[0, 0, 5]} intensity={1.5} color={"#ffffff"} />
        <directionalLight position={[0, 0, -5]} intensity={1.5} color={"#ffffff"} />
        <OrbitControls ref={orbitRef} enableZoom={false} autoRotate={isAutoRotate} />
        <ColaCanModel setJumpHeight={setJumpHeight} jumpHeight={jumpHeight} rotation={rotation}/>
      </Canvas>
      <button onClick={toggleAutoRotate} className="play-pause-btn">
        {isAutoRotate ? "Pause Rotation" : "Start Rotation"}
      </button>
      <button onClick={startJump} className="top-view-btn">
        {topView ? "Return to Default View" : "Top View"}
      </button>
    </div>
  );
}

export default Homepage;
