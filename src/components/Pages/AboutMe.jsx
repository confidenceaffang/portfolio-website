import React from "react";
import violin from "../../assets/3d_models/heirloom_violin.glb";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

function Violin() {
  const gltf = useGLTF(violin);
  const modelRef = useRef();

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={2}
      position={[0, 0, 0]}
    />
  );
}

const AboutMe = () => {
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
    <main className="bg-gradient-to-br from-gray-900 to-black h-full text-white grid grid-cols-1 gap-8 p-8 ">
      <section className="p-6 rounded-lg bg-opacity-50 backdrop-filter backdrop-blur-lg text-center ">
        <h1 className="text-5xl font-semibold mb-4 tracking-wider">About Me</h1>
        <p className="text-lg leading-relaxed w-100">
          There's something truly captivating about bringing ideas to life on
          the web. I do like building websites and am on a continuous learning
          journey in this dynamic field. Currently, I'm focusing on expanding my
          skills in React and exploring backend development with Node.js. I
          thrive in collaborative environments and find great satisfaction in
          tackling complex challenges to find elegant and effective solutions.
        </p>
      </section>

      <section className="relative rounded-lg bg-opacity-50 backdrop-filter backdrop-blur-lg flex flex-col justify-center items-center p-4">
        <p className="text-lg md:text-xl mb-4 text-center">
          Passionate about playing the violin.
        </p>
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
            <Suspense>
              <Violin />
              <ambientLight intensity={0.5} />
              <pointLight position={[5, 5, 5]} intensity={0.3} />
            </Suspense>
          </Canvas>
        </div>
      </section>

      <section className="p-6 rounded-lg bg-opacity-50 backdrop-filter justify-center items-center text-center backdrop-blur-lg">
        <h1 className="text-2xl font-semibold mb-4">Tech Stacks</h1>
        <ul className="list-disc list-inside text-md">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Git</li>
        </ul>
        <p className="mt-2 text-sm text-gray-400">
          Continuously expanding my skillset.
        </p>
      </section>

      <section className="p-6 rounded-lg justify-center items-center text-center  bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <h1 className="text-2xl font-semibold mb-4">Astronomy</h1>
        <p className="text-lg leading-relaxed ">
          Fascinated by the vastness and mysteries of the cosmos. I'm
          particularly interested in black holes, distant galaxies, and the
          search for exoplanets. I enjoy keeping up with the latest discoveries
          and occasionally indulge in some stargazing.
        </p>
      </section>

      <section className="p-6 rounded-lg justify-center items-center text-center  bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <h1 className="text-2xl font-semibold mb-4">Other Interests</h1>
        <ul className="list-disc list-inside text-md">
          <li>Playing the Violin</li>
          <li>Hiking and exploring nature</li>
          <li>Photography</li>
          <li>Reading science fiction and fantasy</li>
        </ul>
      </section>

      <section className="absolute top-0 left-0 w-full h-full flex flex-col text-white z-10 pointer-events-none items-center justify-center">
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
                <a href="#" className="block py-2 hover:text-blue-500">
                  Connect with me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
