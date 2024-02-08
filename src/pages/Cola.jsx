import React, { useRef, useState } from "react";
import "../assets/styles/cola.scss";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// import { FaPlay } from "react-icons/fa6";
// import { FaPause } from "react-icons/fa6";
import { FaWrench } from "react-icons/fa6";

import { FaVideo } from "react-icons/fa6";
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { FaRotate } from "react-icons/fa6";
import { FaXmark, FaY, FaZ } from "react-icons/fa6";

import { FaCube } from "react-icons/fa6";

import { FaRegLightbulb } from "react-icons/fa6";

function Cola() {
  const [showTools, setShowTools] = useState(false);
  const [showCameraTools, setShowCameraTools] = useState(false);
  const [showAnimationTools, setShowAnimationTools] = useState(false);
  const [showLightningTools, setShowLightningTools] = useState(false);
  const [showPolyTools, setShowPolyTools] = useState(false);

  const [rotationState, setRotationState] = useState({ x: false, y: false, z: false });

  const orbitRef = useRef(); 

  const toggleTools = () => {
    setShowTools(!showTools);
  };

  const toggleCameraTools = () => {
    setShowCameraTools(!showCameraTools);
  };

  const toggleAnimationTools = () => {
    setShowAnimationTools(!showAnimationTools);
  }

  const toggleLightningTools = () => {
    setShowLightningTools(!showLightningTools);
  }

  const togglePolyTools = () => {
    setShowPolyTools(!showPolyTools);
  }

  //Ön Bakış
  const setFrontCamera = () => {
    if (orbitRef.current) {
      resetPosition();
      orbitRef.current.object.position.set(-1.5, 0, 4.5); // Üstten bakış için pozisyon
      orbitRef.current.object.lookAt(0, 0, 0); // Modelin merkezine bak
    }
  }

  // Üstten Bakış
  const setTopView = () => {
    if (orbitRef.current) {
      resetPosition();

      orbitRef.current.object.position.set(0, 4.5, 0); // Üstten bakış için pozisyon
      orbitRef.current.object.lookAt(0, 0, 0); // Modelin merkezine bak
    }
  };

  // Arkadan Bakış
  const setBackView = () => {
    if (orbitRef.current) {
      resetPosition();
      orbitRef.current.object.position.set(0, 0, -4.5); // Arkadan bakış için pozisyon
      orbitRef.current.object.lookAt(0, 0, 0); // Modelin merkezine bak
    }
  };

  // Aşağıdan Bakış
  const setBottomView = () => {
    if (orbitRef.current) {
      resetPosition();
      orbitRef.current.object.position.set(0, -4.5, 0); // Aşağıdan bakış için pozisyon
      orbitRef.current.object.lookAt(0, 0, 0); // Modelin merkezine bak
    }
  };

  // Soldan Bakış
  const setLeftView = () => {
    if (orbitRef.current) {
      resetPosition();
      orbitRef.current.object.position.set(-4.5, 0, 0); // Soldan bakış için pozisyon
      orbitRef.current.object.lookAt(0, 0, 0); // Modelin merkezine bak
    }
  };

  // Sağdan Bakış
  const setRightView = () => {
    if (orbitRef.current) {
      resetPosition();
      orbitRef.current.object.position.set(4.5, 0, 0); // Sağdan bakış için pozisyon
      orbitRef.current.object.lookAt(0, 0, 0); // Modelin merkezine bak
    }
  };

  const resetPosition = () => {
    if (orbitRef.current) {
      orbitRef.current.reset();
      orbitRef.current.object.rotation.set(0, 0, 0); // Modelin dönüşünü sıfırla
      orbitRef.current.object.position.set(-1.5, 0, 4.5); // Üstten bakış için pozisyon
      orbitRef.current.object.lookAt(0, 0, 0); // Modelin merkezine bak
    }
  }

  // Belirli bir eksendeki dönüşü başlat/durdur
  const toggleRotation = (axis) => {
    setRotationState(prevState => ({
      x: axis === 'x' ? !prevState.x : false,
      y: axis === 'y' ? !prevState.y : false,
      z: axis === 'z' ? !prevState.z : false,
    }));
  };

  function ColaCanModel() {
    const modelRef = useRef();
    const gltf = useGLTF("/~db596/assets/colacan.gltf", true); // Modelin yolu

    useFrame(() => {
      if (modelRef.current) {
        // Eğer rotationState'de belirli bir eksende dönüş varsa, o eksen boyunca döndür
        modelRef.current.rotation.x += rotationState.x ? 0.01 : 0;
        modelRef.current.rotation.y += rotationState.y ? 0.01 : 0;
        modelRef.current.rotation.z += rotationState.z ? 0.01 : 0;
      }
    });

    return <primitive ref={modelRef} object={gltf.scene} />;
  }

  return (
    <div className="cola overflow-hidden">
      <h1 className="background-text">Coca</h1>
      <h1 className="background-text">Cola</h1>
      {/* <ColaCanImg /> */}
      <Canvas className="cola-can-canvas" camera={{position: [-1.5, 0, 4.5], fov: 40}}>
        <ambientLight intensity={1.5} /> {/* Çevresel ışığın yoğunluğunu 1.5 yapın */}
        <directionalLight position={[0, 5, 0]} intensity={3} color={"#ffffff"} /> {/* Üstten gelen ışık */}
        <directionalLight position={[0, -5, 0]} intensity={3} color={"#ffffff"} /> {/* Altından gelen ışığın yoğunluğunu artırın */}
        <directionalLight position={[5, 0, 0]} intensity={0.5} color={"#ffffff"} /> {/* Sağdan gelen ışık */}
        <directionalLight position={[-5, 0, 0]} intensity={0.5} color={"#ffffff"} /> {/* Soldan gelen ışık */}
        <directionalLight position={[0, 0, 5]} intensity={0.5} color={"#ffffff"} /> {/* Önden gelen ışık */}
        <directionalLight position={[0, 0, -5]} intensity={1} color={"#ffffff"} /> {/* Arkadan gelen ışık */}
        <OrbitControls ref={orbitRef} enableZoom={false} />
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

      <div className="control-buttons">
        {/* Main Tools Button */}
        <button className="parentButton" onClick={toggleTools}>
          <FaWrench size={24} />
        </button>

        {/* Camera Controls */}
        {showTools && (
          <div className="additionalButtons">
            <button className="subButton" onClick={toggleCameraTools}><FaVideo size={24} /></button>
            {showCameraTools && (
              <div >
                <button className="subChildButton" onClick={setFrontCamera}><FaArrowUp size={24} /></button>
                <button className="subChildButton" onClick={setRightView}><FaArrowRight size={24} /></button>
                <button className="subChildButton" onClick={setBackView}><FaArrowDown size={24} /></button>
                <button className="subChildButton" onClick={setLeftView}><FaArrowLeft size={24} /></button>
                <button className="subChildButton" onClick={setTopView}>Top</button>
                <button className="subChildButton" onClick={setBottomView}>Bottom</button>
              </div>
            )}
          </div>
        )}

        {/* Animation Controls */}
        {showTools && (
          <div className="additionalButtons">
            <button className="subButton" onClick={toggleAnimationTools}><FaRotate size={24} /></button>
            {showAnimationTools && (
              <div >
                <button className="subChildButton" onClick={() => toggleRotation('x')}><FaXmark size={24} /></button>
                <button className="subChildButton" onClick={() => toggleRotation('y')}><FaY size={24} /></button>
                <button className="subChildButton" onClick={() => toggleRotation('z')}><FaZ size={24} /></button>
                <button className="subChildButton" onClick={() => resetPosition()}>Reset</button>
              </div>
            )}
          </div>
        )}

        {/* Lightning Controls */}
        {showTools && (
          <div className="additionalButtons">
            <button className="subButton" onClick={toggleLightningTools}><FaRegLightbulb size={24} /></button>
            {showLightningTools && (
              <div >
                <button className="subChildButton"><FaXmark size={24} /></button>
                <button className="subChildButton"><FaY size={24} /></button>
                <button className="subChildButton"><FaZ size={24} /></button>
              </div>
            )}
          </div>
        )}

        {/* Poly Controls */}
        {showTools && (
          <div className="additionalButtons">
            <button className="subButton" onClick={togglePolyTools}><FaCube size={24} /></button>
            {showPolyTools && (
              <div >
                <button className="subChildButton"><FaXmark size={24} /></button>
                <button className="subChildButton"><FaY size={24} /></button>
                <button className="subChildButton"><FaZ size={24} /></button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cola;
