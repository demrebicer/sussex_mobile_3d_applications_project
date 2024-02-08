import React, { useState, useRef } from "react";
import "../assets/styles/homepage.scss";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

function ColaCanModel({ rotationState }) {
  const modelRef = useRef();
  const gltf = useGLTF("/~db596/assets/colacan.gltf", true);

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

function Test() {
  const [rotationState, setRotationState] = useState({ x: false, y: false, z: false });

  const orbitRef = useRef();

  // Belirli bir eksendeki dönüşü başlat/durdur
  const toggleRotation = (axis) => {
    setRotationState(prevState => ({
      x: axis === 'x' ? !prevState.x : false,
      y: axis === 'y' ? !prevState.y : false,
      z: axis === 'z' ? !prevState.z : false,
    }));
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
      <OrbitControls enableZoom={false} />
      <ColaCanModel rotationState={rotationState} />
    </Canvas>
    <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <button onClick={() => toggleRotation('x')} style={{ marginBottom: '10px' }}>Toggle Rotation X Axis</button>
      <button onClick={() => toggleRotation('y')} style={{ marginBottom: '10px' }}>Toggle Rotation Y Axis</button>
      <button onClick={() => toggleRotation('z')} style={{ marginBottom: '10px' }}>Toggle Rotation Z Axis</button>
    </div>
  </div>
  
  );
}

export default Test;
