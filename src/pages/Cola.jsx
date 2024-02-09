import React, { useRef, useState } from "react";
import "../assets/styles/cola.scss";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Tooltip as ReactTooltip } from "react-tooltip";

// import { FaPlay } from "react-icons/fa6";
// import { FaPause } from "react-icons/fa6";
import { FaWrench } from "react-icons/fa6";

import { FaVideo } from "react-icons/fa6";
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight, FaCompass, FaCircleNotch } from "react-icons/fa6";

import { FaRotate } from "react-icons/fa6";
import { FaXmark, FaY, FaZ, FaRepeat } from "react-icons/fa6";

import { FaRegLightbulb } from "react-icons/fa6";
import { FaPlus, FaMinus } from "react-icons/fa6";


import { FaCube } from "react-icons/fa6";


function Cola() {
  const [showTools, setShowTools] = useState(false);
  const [showCameraTools, setShowCameraTools] = useState(false);
  const [showAnimationTools, setShowAnimationTools] = useState(false);
  const [showLightningTools, setShowLightningTools] = useState(false);
  const [showPolyTools, setShowPolyTools] = useState(false);

  const [rotationState, setRotationState] = useState({ x: false, y: false, z: false });

  const [lightningStatus, setLightningStatus] = useState(true);
  const [lightningIntensity, setLightningIntensity] = useState(1);

  const modelRef = useRef();
  const orbitRef = useRef();

  const toggleTools = () => {
    setShowTools(!showTools);
  };

  const toggleCameraTools = () => {
    setShowCameraTools(!showCameraTools);
  };

  const toggleAnimationTools = () => {
    setShowAnimationTools(!showAnimationTools);
  };

  const toggleLightningTools = () => {
    setShowLightningTools(!showLightningTools);
  };

  const togglePolyTools = () => {
    setShowPolyTools(!showPolyTools);
  };

  //Ön Bakış
  const setFrontCamera = () => {
    if (orbitRef.current) {
      resetPosition();
      orbitRef.current.object.position.set(1.5, 0, 4.5); // Üstten bakış için pozisyon
      orbitRef.current.object.lookAt(0, 0, 0); // Modelin merkezine bak
    }
  };

  // Arkadan Bakış
  const setBackView = () => {
    if (orbitRef.current) {
      resetPosition();
      orbitRef.current.object.position.set(-1.5, 0, -4.5); // Arkadan bakış için pozisyon
      orbitRef.current.object.lookAt(0, 0, 0); // Modelin merkezine bak
    }
  };

  // Soldan Bakış
  const setLeftView = () => {
    if (orbitRef.current) {
      resetPosition();
      orbitRef.current.object.position.set(-4.5, 0, -1.5); // Soldan bakış için pozisyon
      orbitRef.current.object.lookAt(0, 0, 0); // Modelin merkezine bak
    }
  };

  // Sağdan Bakış
  const setRightView = () => {
    if (orbitRef.current) {
      resetPosition();
      orbitRef.current.object.position.set(4.5, 0, -1.5); // Sağdan bakış için pozisyon
      orbitRef.current.object.lookAt(0, 0, 0); // Modelin merkezine bak
    }
  };

  // Üstten Bakış
  const setTopView = () => {
    if (orbitRef.current) {
      resetPosition();

      orbitRef.current.object.position.set(0, 4.5, 0); // Üstten bakış için pozisyon
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

  const resetPosition = () => {
    setRotationState({ x: false, y: false, z: false }); // Tüm eksendeki dönüşleri durdur

    if (orbitRef.current) {
      orbitRef.current.reset();
      orbitRef.current.object.position.set(1.5, 0, 4.5); // Üstten bakış için pozisyon
      orbitRef.current.object.lookAt(0, 0, 0); // Modelin merkezine bak
    }

    // Modelin rotasyonunu sıfırla
    if (modelRef.current) {
      modelRef.current.rotation.x = 0;
      modelRef.current.rotation.y = 0;
      modelRef.current.rotation.z = 0;
    }
  };

  // Belirli bir eksendeki dönüşü başlat/durdur
  const toggleRotation = (axis) => {
    setRotationState((prevState) => ({
      x: axis === "x" ? !prevState.x : false,
      y: axis === "y" ? !prevState.y : false,
      z: axis === "z" ? !prevState.z : false,
    }));
  };

  const toggleLightning = () => {
    setLightningStatus(!lightningStatus);
  };

  const increaseIntensity = () => {
    setLightningIntensity(prevIntensity => prevIntensity + 0.1);
  };

  const decreaseIntensity = () => {
    setLightningIntensity(prevIntensity => Math.max(prevIntensity - 0.1, 0)); // Şiddetin 0'ın altına düşmemesini sağlayacak
  };

  function ColaCanModel() {
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
      <Canvas className="cola-can-canvas" camera={{ position: [1.5, 0, 4.5], fov: 40 }}>
        <ambientLight intensity={lightningStatus == true ? 1.5 * lightningIntensity : 0} /> 
        <directionalLight position={[0, 5, 0]} intensity={lightningStatus == true ? 3 * lightningIntensity : 0} color={"#ffffff"} />{" "}
        {/* Üstten gelen ışık */}
        <directionalLight position={[0, -5, 0]} intensity={lightningStatus == true ? 3 * lightningIntensity : 0} color={"#ffffff"} />{" "}
        {/* Altından gelen ışığın yoğunluğunu artırın */}
        <directionalLight position={[5, 0, 0]} intensity={lightningStatus == true ? 0.5 * lightningIntensity : 0} color={"#ffffff"} />{" "}
        {/* Sağdan gelen ışık */}
        <directionalLight position={[-5, 0, 0]} intensity={lightningStatus == true ? 0.5 * lightningIntensity : 0} color={"#ffffff"} />{" "}
        {/* Soldan gelen ışık */}
        <directionalLight position={[0, 0, 5]} intensity={lightningStatus == true ? 0.5 * lightningIntensity : 0} color={"#ffffff"} />{" "}
        {/* Önden gelen ışık */}
        <directionalLight position={[0, 0, -5]} intensity={lightningStatus == true ? 1 * lightningIntensity : 0} color={"#ffffff"} />{" "}
        {/* Arkadan gelen ışık */}
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
            <button className="subButton" onClick={toggleCameraTools}>
              <FaVideo size={24} />
            </button>
            {showCameraTools && (
              <div>
                <ReactTooltip id="front-camera" place="top" content="Set Camera Front View" />
                <button data-tooltip-id="front-camera" className="subChildButton" onClick={setFrontCamera}>
                  <FaArrowUp size={24} />
                </button>

                <ReactTooltip id="right-view" place="top" content="Set Camera Right View" />
                <button data-tooltip-id="right-view" className="subChildButton" onClick={setRightView}>
                  <FaArrowRight size={24} />
                </button>

                <ReactTooltip id="back-view" place="top" content="Set Camera Back View" />
                <button data-tooltip-id="back-view" className="subChildButton" onClick={setBackView}>
                  <FaArrowDown size={24} />
                </button>

                <ReactTooltip id="left-view" place="top" content="Set Camera Left View" />
                <button data-tooltip-id="left-view" className="subChildButton" onClick={setLeftView}>
                  <FaArrowLeft size={24} />
                </button>

                <ReactTooltip id="top-view" place="top" content="Set Camera Top View" />
                <button data-tooltip-id="top-view" className="subChildButton" onClick={setTopView}>
                  <FaCompass size={24} />
                </button>

                <ReactTooltip id="bottom-view" place="top" content="Set Camera Bottom View" />
                <button data-tooltip-id="bottom-view" className="subChildButton" onClick={setBottomView}>
                  <FaCircleNotch size={24} />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Animation Controls */}
        {showTools && (
          <div className="additionalButtons">
            <button className="subButton" onClick={toggleAnimationTools}>
              <FaRotate size={24} />
            </button>
            {showAnimationTools && (
              <div>
                <ReactTooltip id="rotate-x" place="top" effect="solid" content="Rotate around X axis" />
                <button data-tooltip-id="rotate-x" className="subChildButton" onClick={() => toggleRotation("x")}>
                  <FaXmark size={24} />
                </button>

                <ReactTooltip id="rotate-y" place="top" effect="solid" content="Rotate around Y axis" />
                <button data-tooltip-id="rotate-y" className="subChildButton" onClick={() => toggleRotation("y")}>
                  <FaY size={24} />
                </button>

                <ReactTooltip id="rotate-z" place="top" effect="solid" content="Rotate around Z axis" />
                <button data-tooltip-id="rotate-z" className="subChildButton" onClick={() => toggleRotation("z")}>
                  <FaZ size={24} />
                </button>

                <ReactTooltip id="reset-position" place="top" effect="solid" content="Reset Position" />
                <button data-tooltip-id="reset-position" className="subChildButton" onClick={() => resetPosition()}>
                  <FaRepeat size={24} />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Lightning Controls */}
        {showTools && (
          <div className="additionalButtons">
            <button className="subButton" onClick={toggleLightningTools}>
              <FaRegLightbulb size={24} />
            </button>
            {showLightningTools && (
                 <div>
                 <ReactTooltip id="toggle-lightning" effect="solid" content={lightningStatus ? "Turn Off Lightning" : "Turn On Lightning"} />
                 <button className="subChildButton" data-tooltip-id="toggle-lightning" onClick={toggleLightning}>
                   <FaRegLightbulb size={24} color={lightningStatus ? "yellow" : "white"} />
                 </button>
           
                 <ReactTooltip id="increase-intensity" effect="solid" content="Increase Lightning Intensity" />
                 <button className="subChildButton" data-tooltip-id="increase-intensity" onClick={increaseIntensity}>
                   <FaPlus size={24} />
                 </button>
           
                 <ReactTooltip id="decrease-intensity" effect="solid" content="Decrease Lightning Intensity" />
                 <button className="subChildButton" data-tooltip-id="decrease-intensity" onClick={decreaseIntensity}>
                   <FaMinus size={24} />
                 </button>
               </div>
            )}
          </div>
        )}

        {/* Poly Controls */}
        {showTools && (
          <div className="additionalButtons">
            <button className="subButton" onClick={togglePolyTools}>
              <FaCube size={24} />
            </button>
            {showPolyTools && (
              <div>
                <button className="subChildButton">
                  <FaXmark size={24} />
                </button>
                <button className="subChildButton">
                  <FaY size={24} />
                </button>
                <button className="subChildButton">
                  <FaZ size={24} />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cola;
