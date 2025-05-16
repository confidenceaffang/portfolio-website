import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Outlines, Environment, useTexture } from "@react-three/drei";
import { Physics, useSphere } from "@react-three/cannon";
import { EffectComposer, N8AO, SMAA, Bloom } from "@react-three/postprocessing";
import { useControls } from "leva";
import { Suspense } from "react";
import cross from "../../assets/cross.jpg";
import adasmbridge from "../../assets/adamsbridge.hdr";
import { useState } from "react";
import { MdViewSidebar } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const rfs = THREE.MathUtils.randFloatSpread;
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const baubleMaterial = new THREE.MeshStandardMaterial({
  color: "gray",
  roughness: 0,
  envMapIntensity: 1,
});

function Clump({
  mat = new THREE.Matrix4(),
  vec = new THREE.Vector3(),
  ...props
}) {
  const outlines = 0.01;
  const texture = useTexture(cross);
  const [ref, api] = useSphere(() => ({
    args: [1],
    mass: 1,
    angularDamping: 0.1,
    linearDamping: 0.65,
    position: [rfs(20), rfs(20), rfs(20)],
  }));
  useFrame((state) => {
    for (let i = 0; i < 40; i++) {
      ref.current.getMatrixAt(i, mat);
      api
        .at(i)
        .applyForce(
          vec
            .setFromMatrixPosition(mat)
            .normalize()
            .multiplyScalar(-40)
            .toArray(),
          [0, 0, 0]
        );
    }
  });
  return (
    <instancedMesh
      ref={ref}
      castShadow
      receiveShadow
      args={[sphereGeometry, baubleMaterial, 40]}
      material-map={texture}
    >
      <Outlines thickness={outlines} />
    </instancedMesh>
  );
}

function Pointer() {
  const viewport = useThree((state) => state.viewport);
  const [ref, api] = useSphere(() => ({
    type: "Kinematic",
    args: [3],
    position: [0, 0, 0],
  }));
  useFrame((state) =>
    api.position.set(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2,
      0
    )
  );
  return <mesh ref={ref} scale={0.2}></mesh>;
}

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const SidebarIcon = () => (
    <motion.svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
      <motion.rect
        id="part1"
        x="3"
        y="3"
        width="6"
        height="18"
        animate={{ translateX: isSidebarOpen ? -5 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.rect
        id="part2"
        x="15"
        y="3"
        width="6"
        height="18"
        animate={{ translateX: isSidebarOpen ? 5 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.rect
        id="part3"
        x="9"
        y="6"
        width="6"
        height="12"
        animate={{ translateY: isSidebarOpen ? -3 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </motion.svg>
  );

  return (
    <main className="w-full h-screen bg-black overflow-hidden relative">
      <Canvas
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 40 }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <color attach="background" args={["#000000"]} />{" "}
          <spotLight
            intensity={1}
            angle={0.2}
            penumbra={1}
            position={[30, 30, 30]}
            castShadow
            shadow-mapSize={[512, 512]}
          />
          <Physics gravity={[0, 2, 0]} iterations={10}>
            <Pointer />
            <Clump />
          </Physics>
          <Environment files={adasmbridge} />
          <EffectComposer disableNormalPass multisampling={0}>
            <N8AO
              halfRes
              color="black"
              aoRadius={2}
              intensity={1}
              aoSamples={6}
              denoiseSamples={4}
            />
            <Bloom mipmapBlur levels={7} intensity={1} />
            <SMAA />
          </EffectComposer>
        </Suspense>
      </Canvas>
      <section className="absolute top-0 left-0 w-full h-full flex flex-col text-white z-10 pointer-events-none items-center justify-center">
        {/* Sidebar Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 left-4  text-white p-4 rounded-md z-20 pointer-events-auto"
        >
          <div className="relative w-12 h-12">
            <SidebarIcon />
          </div>
        </button>

        <div
          className={`fixed top-0 left-0 h-full bg-gray-900 opacity-60 text-white z-10 w-full shadow-md transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } pointer-events-auto flex flex-col items-center justify-center`}
        >
          <div className="p-4 ">
            <ul className="space-y-10 text-3xl">
              <li>
                <a href="#" className="block py-2 hover:text-blue-500">
                  About Me
                </a>
              </li>
              <li>
                <Link to="/projects">
                  <button className="block py-2 hover:text-blue-500">
                    Projects
                  </button>
                </Link>
              </li>
              <li>
                <a href="#" className="block py-2 hover:text-blue-500">
                  Experiences
                </a>
              </li>
              <li>
                <Link to="/connect_with_me">
                  <button className="block py-2 hover:text-blue-500">
                    Connect with me
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <div className="text-6xl font-bold mb-4">
            Confidence Mawuli Affang
          </div>
          <div className="text-xl">
            I'm a Software Developer and currently a student at Wayne State
            College
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
