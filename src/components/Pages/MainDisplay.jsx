import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ShaderMaterial } from 'three'


const vertexShader = `
  uniform float uTime;
  void main() {
    vec3 pos = position;
    pos.x += sin(pos.y * 5.0 + uTime) * 0.1;
    pos.y += cos(pos.x * 5.0 + uTime) * 0.1;
     pos.z += cos(pos.z * 5.0 + uTime) * 0.1;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  void main() {
    gl_FragColor = vec4(0.6, 1.0, 1.0, 0.8);
  }
`;

const DistortionMaterial = new ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms: {
    uTime: { value: 0 }
  }
});

function Scene() {
  const meshRef = useRef();
  useFrame(({ clock }) => {
    DistortionMaterial.uniforms.uTime.value = clock.getElapsedTime();
    meshRef.current.material = DistortionMaterial;
  });
  return (
    <mesh ref={meshRef} >
      <cylinderGeometry args={[1,1,2]}/>
      <meshBasicMaterial  wireframe={true} />
    </mesh>
  );
}


export function SphereBackground({ className }) {
  return (
    <Canvas className={className}>
      <ambientLight intensity={0.1} />
      <Scene />
    </Canvas>
  )
}

export function Timer({ duration, onTimeout }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeout();
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, onTimeout]);


}

const MainDisplay = () => {
  const [showPage, setShowPage] = useState(true);
  const handleTimeout = () =>{
    setShowPage(false)
    }
  return (
    <>
    {showPage ? (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      <SphereBackground className="absolute inset-0 z-0" />
      <Timer duration={10} onTimeout={handleTimeout} />
      <div className="flex justify-center items-center text-white text-6xl font-bold tracking-widest h-full w-full absolute z-10">
        Welcome
      </div>
    </div>
    ) : (
      <div className="relative h-screen w-screen overflow-hidden bg-black">
      <div className="flex justify-center items-center text-white text-6xl font-bold tracking-widest h-full w-full absolute z-10">
        Welcome
      </div>
    </div>
    )}
    </>
  )
}

export default MainDisplay
