import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Image, ScrollControls, useScroll, Html } from "@react-three/drei";
import { easing } from "maath";
import "../utils";
import { motion } from "framer-motion";


const projectData = [
  {
    id: 1,
    title: "Weather App",
    description:
      "Real-time weather forecasting using public APIs with location detection and historical data visualization.",
    longDescription:
      "This weather application provides users with accurate forecasts using the OpenWeatherMap API. It includes features like location detection, 7-day forecasts, historical weather data, and custom weather alerts.",
    techStack: [
      "React",
      "OpenWeatherMap API",
      "Chart.js",
      "Geolocation API",
      "Progressive Web App",
    ],
    features: [
      "Location-based forecasts",
      "Interactive weather maps",
      "Historical data charts",
      "Severe weather alerts",
    ],
    link: "https://github.com/yourusername/weather-app",
    demoLink: "https://weather-app-1274f.web.app/",
    imageUrl: "/img4_.png",
  },
  {
    id: 2,
    title: "Chat Bot",
    description:
      "An interactive chatbot using Python and JSON to provide dynamic, intelligent responses to user queries.",
    longDescription:
      "Developed an interactive chatbot using Python and JSON, enabling dynamic responses to user queries by randomly selecting answers from a structured data file.\nImplemented data handling and parsing techniques to enhance user interaction, showcasing skills in software development and natural language processing.",
    techStack: ["Python", "JSON", "Tensorflow", "Pickle"],
    features: [
      "Dynamic, randomized responses",
      "Natural Language Processing (NLP)",
      "JSON data handling and parsing",
      "Tensorflow-powered intent recognition",
    ],
    link: "https://github.com/confidenceaffang/chat_bot",
    demoLink: "https://weather-app-1274f.web.app/",
    imageUrl: "/img2_.png",
  },
  {
    id: 3,
    title: "Web Scraper",
    description:
      "A Python-based web scraper built to extract and analyze historical U.S. presidential election data from Wikipedia.",
    longDescription:
      "Developed a web scraper in Python to extract data from Wikipedia's presidential elections page, gathering information from the 1828 elections to the present.\nAnalyzed party affiliations by counting Republican and Democratic states over the years, with data stored in a text file for comprehensive summaries.\nDemonstrated proficiency in web scraping, data analysis, and file handling.",
    techStack: ["Python", "BeautifulSoup"],
    features: [
      "Extracts data from live websites",
      "Parses HTML using BeautifulSoup",
      "Analyzes historical data trends",
      "Exports results to text files",
    ],
    link: "https://github.com/confidenceaffang/web-scraper",
    demoLink: "https://weather-app-1274f.web.app/",
    imageUrl: "/img2_.png",
  },
  {
    id: 4,
    title: "Banking App",
    description:
      "A secure, full-featured online banking platform with real-time transactions and third-party API integrations.",
    longDescription:
      "Engineered a full-featured banking platform using TypeScript, React, and Next.js, implementing secure user authentication, real-time transaction processing, and responsive design to ensure seamless cross-device functionality.\nSpearheaded the development of 17 custom React components and 3 API integrations, while ensuring WCAG 2.1 AA accessibility compliance, improving the banking experience for users with disabilities.",
    techStack: ["NextJs", "Sentry", "React", "JavaScript", "Plaid", "Dwolla"],
    features: [
      "Secure user authentication",
      "Real-time transaction processing",
      "Plaid and Dwolla API integration",
      "WCAG 2.1 AA accessibility",
    ],
    link: "https://github.com/confidenceaffang/sample-online-banking",
    demoLink: "https://sample-online-banking.vercel.app/",
    imageUrl: "/img1_.png",
  },
  {
    id: 5,
    title: "Planetarium App",
    description:
      "An interactive 3D planetarium application to explore the solar system, built with React and Three.js.",
    longDescription:
      "Engineered an immersive 3D solar system visualization using React, Three.js, and Blender. This application allows users to explore planets and celestial bodies in an interactive, animated environment, hosted on AWS for scalability and performance.",
    techStack: ["React", "Three.js", "Vite", "Blender", "AWS", "JavaScript"],
    features: [
      "Interactive 3D planet visualization",
      "Real-time rendering with Three.js",
      "Custom 3D models from Blender",
      "Cloud-hosted on AWS",
    ],
    link: "https://github.com/confidenceaffang/Planetarium",
    demoLink: "https://weather-app-1274f.web.app/",
    imageUrl: "/img3_.png",
  },
  {
    id: 7,
    title: "AI Career Recommendation App",
    description:
      "An intelligent application that uses AI to provide users with personalized career path recommendations.",
    longDescription:
      "Developed a machine learning-driven application to help users discover suitable career paths. The app uses user-provided data to generate personalized recommendations, demonstrating a practical application of AI for personal development.",
    techStack: ["React", "Python", "Scikit-learn", "Vite", "AWS", "JavaScript"],
    features: [
      "AI-driven career matching",
      "Personalized user assessments",
      "Data-driven recommendations",
      "Interactive and responsive UI",
    ],
    link: "https://github.com/confidenceaffang/capstoneproject",
    demoLink: "https://capstoneproject-8zzk.onrender.com/",
    imageUrl: "/img8_.png",
  },
  {
    id: 6,
    title: "Travel Planner App",
    description:
      "A modern web application for creating, organizing, and sharing detailed travel itineraries.",
    longDescription:
      "Built a comprehensive travel planning application using the MERN stack (MongoDB, Express.js, React, Node.js). It enables users to create detailed itineraries, manage bookings, and explore destinations, all within a seamless and interactive user interface.",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Vite",
      "JavaScript",
    ],
    features: [
      "Full-stack MERN architecture",
      "User account and itinerary management",
      "Interactive trip and schedule creation",
      "Responsive design for mobile and web",
    ],
    link: "https://github.com/confidenceaffang/TravelPlanner",
    demoLink: "https://travel-planner-phi-ten.vercel.app/",
    imageUrl: "/img9_.png",
  },
];

function Rig(props) {
  const ref = useRef();
  const scroll = useScroll();
  useFrame((state, delta) => {
    ref.current.rotation.y = -scroll.offset * (Math.PI * 2);
    state.events.update();
    easing.damp3(
      state.camera.position,
      [-state.pointer.x * 2, state.pointer.y + 1.5, 10],
      0.3,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });
  return <group ref={ref} {...props} />;
}

function Carousel({ radius = 1.4, count = 7 }) {
  return Array.from({ length: count }, (_, i) => {
    const project = projectData[i % projectData.length];
    return (
      <Card
        key={i}
        url={project.imageUrl}
        project={project}
        position={[
          Math.sin((i / count) * Math.PI * 2) * radius,
          0,
          Math.cos((i / count) * Math.PI * 2) * radius,
        ]}
        rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
      />
    );
  });
}

function Card({ url, project, ...props }) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const pointerOver = (e) => {
    e.stopPropagation();
    hover(true);
  };
  const pointerOut = () => hover(false);

  const handleClick = () => setShowDetails(true);

  useFrame((state, delta) => {
    easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta);
    easing.damp(
      ref.current.material,
      "radius",
      hovered ? 0.25 : 0.1,
      0.2,
      delta
    );
    easing.damp(ref.current.material, "zoom", hovered ? 1 : 1.5, 0.2, delta);
  });

  return (
    <>
      <Image
        ref={ref}
        url={url}
        transparent
        side={THREE.DoubleSide}
        onPointerOver={pointerOver}
        onPointerOut={pointerOut}
        onClick={handleClick}
        {...props}
      >
        <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
      </Image>
      {showDetails && (
        <Html
          center
          position={[0, 0, 0]}
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "60vw",
            height: "60vh",
            pointerEvents: "all",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          portal={{ current: document.body }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.3, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.3, rotateY: 180 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              scale: { type: "spring", stiffness: 300, damping: 30 },
            }}
            className="bg-black bg-opacity-95 rounded-none shadow-2xl text-white border-none backdrop-blur-md"
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-gray-800 flex-shrink-0">
              <div className="flex justify-between items-start">
                <motion.h1
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-4xl md:text-5xl font-light tracking-tight text-gray-200"
                >
                  PROJECT DETAILS
                </motion.h1>
                <motion.button
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowDetails(false)}
                  className="text-gray-500 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </motion.button>
              </div>
            </div>

            {/* Content - Custom scrollable area */}
            <div className="flex-grow relative">
              <div
                className="absolute inset-0 p-6 md:p-8"
                style={{
                  overflowY: "auto",
                  scrollbarWidth: "none" /* Firefox */,
                  msOverflowStyle: "none" /* IE and Edge */,
                }}
                onScroll={(e) => {
                  // Add custom scroll styling if needed
                }}
              >
                <style jsx>{`
                  div::-webkit-scrollbar {
                    display: none; /* Chrome, Safari, Opera */
                  }
                `}</style>

                <div className="space-y-8 pb-4">
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg border border-gray-800 shadow-lg"
                    />
                  </motion.div>

                  <motion.section
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-light mb-4 tracking-tight">
                      {project.title}
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {project.longDescription}
                    </p>
                  </motion.section>

                  <motion.section
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-light mb-4 tracking-tight text-gray-300">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{
                            delay: 0.5 + index * 0.1,
                            duration: 0.3,
                          }}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "#374151",
                          }}
                          className="bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-gray-300 cursor-default transition-all duration-200"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.section>

                  <motion.section
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-light mb-4 tracking-tight text-gray-300">
                      Key Features
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-400 text-lg">
                      {project.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            delay: 0.7 + index * 0.1,
                            duration: 0.4,
                          }}
                        >
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.section>
                </div>
              </div>
            </div>

            {/* Footer */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="p-6 md:p-8 border-t border-gray-800 flex-shrink-0"
            >
              <div className="flex flex-col sm:flex-row justify-end gap-4">
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white font-light py-3 px-6 rounded-lg hover:bg-gray-700 transition-all duration-200 text-center flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  View Code
                </motion.a>
                {project.demoLink && (
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white font-light py-3 px-6 rounded-lg hover:bg-gray-700 transition-all duration-200 text-center flex items-center justify-center shadow-lg hover:shadow-xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        </Html>
      )}
    </>
  );
}

const Projects = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

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
    <main className="h-screen bg-black">
      <Canvas camera={{ position: [0, 0, 100], fov: 15 }}>
        <fog attach="fog" args={["#a79", 8.5, 12]} />
        <ScrollControls pages={4} infinite>
          <Rig rotation={[0, 0, 0.15]}>
            <Carousel />
          </Rig>
        </ScrollControls>
      </Canvas>

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
    </main>
  );
};

export default Projects;
