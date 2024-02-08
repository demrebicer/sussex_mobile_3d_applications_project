import React, { useRef, useState } from "react";
import "../assets/styles/cola.scss";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";

function Cola() {
  const [isAutoRotate, setIsAutoRotate] = useState(false);

  function ColaCanModel() {
    const gltf = useGLTF("/~db596/assets/colacan.gltf", true); // Modelin yolu
    return <primitive object={gltf.scene} />;
  }

  // Function to toggle auto-rotate
  const toggleAutoRotate = () => {
    setIsAutoRotate(!isAutoRotate);
  };

  return (
    <div className="cola">
      <h1 className="background-text">Coca</h1>
      <h1 className="background-text">Cola</h1>
      {/* <ColaCanImg /> */}
      <Canvas className="cola-can-canvas" camera={{ position: [-1.5, 0, 4.5], fov: 40 }}>
        <ambientLight intensity={1.5} /> {/* Çevresel ışığın yoğunluğunu 1.5 yapın */}
        <directionalLight position={[0, 5, 0]} intensity={3} color={"#ffffff"} /> {/* Üstten gelen ışık */}
        <directionalLight position={[0, -5, 0]} intensity={3} color={"#ffffff"} /> {/* Altından gelen ışığın yoğunluğunu artırın */}
        <directionalLight position={[5, 0, 0]} intensity={0.5} color={"#ffffff"} /> {/* Sağdan gelen ışık */}
        <directionalLight position={[-5, 0, 0]} intensity={0.5} color={"#ffffff"} /> {/* Soldan gelen ışık */}
        <directionalLight position={[0, 0, 5]} intensity={0.5} color={"#ffffff"} /> {/* Önden gelen ışık */}
        <directionalLight position={[0, 0, -5]} intensity={1} color={"#ffffff"} /> {/* Arkadan gelen ışık */}
        <OrbitControls enableZoom={false} autoRotate={isAutoRotate}/>
        <ColaCanModel />
      </Canvas>

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

      <div className="control-buttons-container" onClick={toggleAutoRotate}>
        {isAutoRotate ? (
          <button className="control-button">
            <FaPause size={24} />
          </button>
        ) : (
          <button className="control-button">
            <FaPlay size={24} />
          </button>
        )}
      </div>
    </div>
  );
}

export default Cola;
