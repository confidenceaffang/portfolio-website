import React from "react";
import violin from "../../assets/3d_models/heirloom_violin.glb";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import { useState } from "react";
import mypic from "../../assets/mypic.png";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython, FaJava, FaLinux } from "react-icons/fa";


function Violin() {
  const gltf = useGLTF(violin);
  const modelRef = useRef();

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={2}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

const techStacks = [
  { name: "MongoDb", icon: <DiMongodb /> },
  { name: "React", icon: <FaReact /> },
  { name: "Nodejs", icon: <FaNode /> },
  { name: "Nextjs", icon: <RiNextjsFill /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Vercel", icon: <IoLogoVercel /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "VSCode", icon: <VscVscode /> },
  { name: "JavaScript", icon: <IoLogoJavascript /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Linux", icon: <FaLinux /> },
];

const hobbies = [
  {
    name: "Hiking",
    imageUrl:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?fit=crop&w=200&h=200&q=80",
  },
  {
    name: "Photography",
    imageUrl:
      "https://images.unsplash.com/photo-1519638831568-d9897f54ed69?fit=crop&w=200&h=200&q=80",
  },
  {
    name: "Sci-Fi Reading",
    imageUrl:
      "https://i.pinimg.com/736x/c0/c3/5d/c0c35dd13be13c10321c869b60f25941.jpg",
  },
  {
    name: "Stargazing",
    imageUrl:
      "https://i.pinimg.com/736x/37/3b/36/373b369669bb8ec45c1c5fd54bc7f4af.jpg",
  },
];

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
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <section className="absolute top-0 left-0 w-full h-full flex flex-col text-white z-10 pointer-events-none items-center justify-center">
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

      <section className="relative h-screen flex items-center justify-between px-12">
        <div className="flex-1 max-w-2xl">
          <motion.h1
            className="text-6xl md:text-8xl font-light leading-none mb-8 tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            FULL STACK
            <br />
            DEVELOPER
            <br />
            <span className="text-gray-400">&amp; MUSICIAN</span>
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg leading-relaxed max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            There's something truly captivating about bringing ideas to life on
            the web. Currently focusing on React and Node.js, thriving in
            collaborative environments to find elegant solutions.
          </motion.p>
        </div>

        <div className="flex-1 flex justify-end">
          <motion.div
            className="w-100 h-100rounded-lg flex items-center justify-center  border-gray-700"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-gray-500 text-lg">
              <img src={mypic} />
            </span>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
          <div className="text-sm text-gray-400">
            <div>React</div>
            <div className="text-gray-600">Node.js • MongoDB • AWS</div>
          </div>
        </div>
      </section>

      <div className="px-12 space-y-24 pb-24">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-light mb-6 tracking-tight">
              TOOLS &amp; TECHNOLOGIES
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              A curated selection of technologies I work with to create modern
              web applications and scalable solutions.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {techStacks.map((tool, index) => (
              <motion.div
                key={index}
                className="aspect-square border border-gray-800 rounded-lg flex flex-col items-center justify-center p-4 hover:border-gray-600 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-2">{tool.icon}</div>
                <div className="text-sm text-center text-gray-400">
                  {tool.name}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative w-full h-96">
            <Canvas camera={{ position: [0, 1, 4], fov: 50 }}>
              <Suspense>
                <Violin />
                <ambientLight intensity={0.8} />
                <pointLight position={[50, 20, 10]} intensity={1} />
              </Suspense>
            </Canvas>
          </div>
          <div>
            <h2 className="text-4xl font-light mb-6 tracking-tight">
              PASSIONATE ABOUT MUSIC
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The violin has been my companion for years, teaching me
              discipline, patience, and the pursuit of perfection - qualities I
              bring to my coding.
            </p>
            <div className="space-y-2 text-gray-400">
              <div>• Classical repertoire</div>
              <div>• Chamber music</div>
              <div>• Contemporary pieces</div>
            </div>
          </div>
        </section>

        <section className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-6 tracking-tight">
            FASCINATED BY THE COSMOS
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed">
            From black holes to distant galaxies, the search for exoplanets to
            the latest astronomical discoveries - the vastness of space
            continues to inspire and humble me.
          </p>
        </section>

        {/* --- HOBBIES SECTION - FIXED --- */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              className="text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={hobby.imageUrl}
                alt={hobby.name}
                className="w-24 h-24 object-cover rounded-full mb-4 border-2 border-gray-700 shadow-lg hover:shadow-indigo-500/30 transition-shadow"
              />
              <div className="text-gray-300">{hobby.name}</div>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
