import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Outlines, Environment, useTexture } from "@react-three/drei";
import { Physics, useSphere } from "@react-three/cannon";
import { EffectComposer, N8AO, SMAA, Bloom } from "@react-three/postprocessing";
import { Suspense } from "react";
import cross from "../../assets/cross.jpg";
import adasmbridge from "../../assets/adamsbridge.hdr";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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
  const borderVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2.5,
        ease: "easeInOut",
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 1.5,
      },
    },
  };

  const detailsVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 2.5,
        duration: 1,
        ease: "easeOut",
      },
    },
  };

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
      <section className="absolute top-0 left-0 w-full h-full flex flex-col text-white z-20 pointer-events-none items-center justify-center">
        <button
          onClick={toggleSidebar}
          className="absolute top-4 left-4 text-white p-4 rounded-md z-20 pointer-events-auto"
        >
          <div className="relative w-12 h-12">
            <SidebarIcon />
          </div>
        </button>

        <div
          className={`fixed top-0 left-0 h-full bg-gray-900  text-white z-10 w-full shadow-md transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } pointer-events-auto flex flex-col items-center justify-center`}
        >
          <motion.div
            className={`fixed top-0 left-0 h-full bg-black bg-opacity-95 text-white z-40 w-full transform transition-transform duration-500 ease-in-out ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } flex flex-col items-center justify-center backdrop-blur-sm`}
            initial={false}
          >
            <nav className="space-y-8 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-4xl md:text-6xl font-light tracking-tight"
              >
                <a
                  href="/home"
                  className="block py-4 hover:text-gray-400 transition-colors"
                >
                  HOME
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-4xl md:text-6xl font-light tracking-tight"
              >
                <a
                  href="/about"
                  className="block py-4 hover:text-gray-400 transition-colors"
                >
                  ABOUT ME
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-4xl md:text-6xl font-light tracking-tight"
              >
                <a
                  href="/projects"
                  className="block py-4 hover:text-gray-400 transition-colors"
                >
                  PROJECTS
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-4xl md:text-6xl font-light tracking-tight"
              >
                <a
                  href="/experiences"
                  className="block py-4 hover:text-gray-400 transition-colors"
                >
                  EXPERIENCE
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-4xl md:text-6xl font-light tracking-tight"
              >
                <a
                  href="/connect_with_me"
                  className="block py-4 hover:text-gray-400 transition-colors"
                >
                  CONNECT
                </a>
              </motion.div>
            </nav>
          </motion.div>
        </div>
      </section>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        <div className="relative pointer-events-none mb-8 flex justify-center items-center">
          <motion.h1
            className="text-4xl md:text-7xl font-bold tracking-widest px-10 py-4 pointer-events-none"
            variants={nameVariants}
            initial="hidden"
            animate="visible"
          >
            Confidence Mawuli Affang
          </motion.h1>

          <svg className="absolute pointer-events-none w-full h-full top-0 left-0">
            <motion.rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              rx="10"
              ry="10"
              fill="none"
              stroke="white"
              strokeWidth="4"
              variants={borderVariants}
              initial="hidden"
              animate="visible"
            />
          </svg>
        </div>

        <motion.div
          className="flex pointer-events-none flex-col items-center"
          variants={detailsVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-lg md:text-xl text-gray-400 pointer-events-none tracking-wider mb-8">
            FULL STACK DEVELOPER & MUSICIAN
          </p>

          <div className="flex space-x-6 pointer-events-auto">
            <a
              href="https://github.com/confidenceaffang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/confidence-affang-22603b2b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="mailto:confidenceaffang@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaEnvelope size={30} />
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Home;
