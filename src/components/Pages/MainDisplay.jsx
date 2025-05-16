import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import bmwModel from "../../assets/3d_models/bmw_g82_m4_with_adro_kit_2022__www.vecarz.com.glb";
import { Typewriter } from "react-simple-typewriter";

function BMWModel() {
  const gltf = useGLTF(bmwModel);
  const modelRef = useRef();

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={110}
      position={[0, 0, 0]}
    />
  );
}

function AnimatedLight() {
  const lightRef = useRef();
  const intensityRef = useRef(0);
  const targetIntensity = 1.5;
  const fadeInDuration = 20;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const radius = 10;

    if (time <= fadeInDuration) {
      intensityRef.current = (time / fadeInDuration) * targetIntensity;
      lightRef.current.intensity = intensityRef.current;
    }

    lightRef.current.position.x = Math.sin(time * 0.5) * radius;
    lightRef.current.position.z = Math.cos(time * 0.5) * radius;
  });

  return (
    <directionalLight
      ref={lightRef}
      position={[0, 10, 0]}
      color="white"
      intensity={0}
      castShadow
    />
  );
}

const MainDisplay = () => {
  return (
    <div className="w-full h-screen bg-black overflow-hidden relative">
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <h1 className="text-5xl font-bold text-white mb-4 text-center tracking-wider">
          <Typewriter words={["Welcome to my portfolio"]} typeSpeed={100} />
        </h1>
      </div>

      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <Suspense>
          <BMWModel />
          <ambientLight intensity={0.4} />
          <AnimatedLight />
          <OrbitControls enablePan={false} enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default MainDisplay;
