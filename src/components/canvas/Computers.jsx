/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

// eslint-disable-next-line react/prop-types
const Computers = ({ isMobile }) => {
  const gltf = useGLTF('./desktop_pc_pedro/scene.gltf');
  const group = useRef();
  const mixer = new THREE.AnimationMixer();

  useEffect(() => {
    const animations = gltf.animations;
    if (animations && animations.length) {
      animations.forEach((clip) => {
        mixer.clipAction(clip).play();
      });
    }
  }, [gltf, mixer]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return (
    <group ref={group}>
      <hemisphereLight intensity={10} groundColor="black" />
      <pointLight intensity={20} />
      <spotLight
        position={[-50, 50, 10]}
        angle={0.50}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={gltf.scene}
        scale={isMobile ? 0.45 : 0.50}
        position={isMobile ? [0, -3.45, 0.5] : [0, -3.25, -2.5]} 
        rotation={[-0.01, -0.2, -0.02]}
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMouseOverObject, setIsMouseOverObject] = useState(true);
  const orbitControls = useRef();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleCanvasClick = () => {
    setIsMouseOverObject(!isMouseOverObject);
  };

  return (
    <Canvas
      frameloop="demand"
      shadows="soft"
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      orthographic={!isMobile ? false : undefined}
      onClick={handleCanvasClick}
    >
      <OrbitControls
        ref={orbitControls}
        enableZoom={!isMouseOverObject}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotateSpeed={0.75}
      />
      <Computers isMobile={isMobile} />
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
