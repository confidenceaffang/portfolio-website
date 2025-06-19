import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import bmwModel from "../../assets/3d_models/bmw_g82_m4_with_adro_kit_2022__www.vecarz.com.glb";
import { Typewriter } from "react-simple-typewriter";
import audio from "../../assets/audio.mp3";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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

function LoadingProgress({ progress }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
        <motion.p
          className="text-gray-400 text-sm font-light tracking-wider"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          LOADING EXPERIENCE...
        </motion.p>
      </div>
    </motion.div>
  );
}

const MainDisplay = () => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const audioRef = useRef(new Audio(audio));
  const navigate = useNavigate();

  useEffect(() => {
   
    const playAudio = async () => {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (error) {
        console.log("Auto-play blocked, user interaction required");
      }
    };

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setShowContent(true);
          playAudio();
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    let redirectTimer;
    if (showContent) {
      redirectTimer = setTimeout(() => {
        navigate("/home");
      }, 12000); 
    }

    return () => {
      clearInterval(progressInterval);
      clearTimeout(redirectTimer);
      audioRef.current.pause();
    };
  }, [navigate, showContent]);

  return (
    <div className="w-full h-screen bg-black overflow-hidden relative">
      
      <AnimatePresence>
        {showContent && (
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
              <Suspense fallback={null}>
                <BMWModel />
                <ambientLight intensity={0.4} />
                <AnimatedLight />
                <OrbitControls
                  enablePan={false}
                  enableZoom={false}
                  autoRotate={showContent}
                  autoRotateSpeed={0.5}
                />
              </Suspense>
            </Canvas>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none"
          >
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-center mb-8"
            >
              <h1 className="text-6xl md:text-8xl font-light text-white mb-4 tracking-wider bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                <Typewriter
                  words={["WELCOME"]}
                  typeSpeed={150}
                  cursor={false}
                />
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-400 font-light tracking-[0.3em] mb-2"
              >
                TO MY PORTFOLIO
              </motion.p>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ delay: 2.5, duration: 1 }}
                className="h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"
              />
            </motion.div>

            {/* Subtitle with animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.8 }}
              className="text-center"
            >
              <p className="text-lg text-gray-500 font-light tracking-wide">
                Experience begins in seconds...
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showContent && <LoadingProgress progress={progress} />}

      
      {showContent && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute top-8 right-8 z-20"
          >
            <div className="flex items-center space-x-2 bg-black bg-opacity-50 backdrop-blur-sm rounded-full px-4 py-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-2 h-2 bg-green-500 rounded-full"
              />
              <span className="text-white text-sm font-light">AUDIO ON</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 1 }}
            className="absolute bottom-8 left-8 z-20"
          >
            <div className="text-gray-600 font-light text-sm tracking-widest">
              <p>PORTFOLIO 2025</p>
              <motion.div
                className="w-16 h-0.5 bg-gray-600 mt-2"
                initial={{ width: 0 }}
                animate={{ width: "64px" }}
                transition={{ delay: 4, duration: 0.8 }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="absolute bottom-8 right-8 z-20"
          >
            <motion.div
              className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, ease: "linear" }} 
            >
              <motion.div
                className="w-2 h-2 bg-white rounded-full"
                animate={{ scale: [1, 0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </>
      )}

      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-30 pointer-events-none z-5" />
    </div>
  );
};

export default MainDisplay;
