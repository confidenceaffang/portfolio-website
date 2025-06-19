import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Connect = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3API);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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
                <Link
                  to="/about"
                  className="block py-4 hover:text-gray-400 transition-colors"
                >
                  ABOUT ME
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-4xl md:text-6xl font-light tracking-tight"
              >
                <Link
                  to="/projects"
                  className="block py-4 hover:text-gray-400 transition-colors"
                >
                  PROJECTS
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-4xl md:text-6xl font-light tracking-tight"
              >
                <Link
                  to="/experiences"
                  className="block py-4 hover:text-gray-400 transition-colors"
                >
                  EXPERIENCE
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-4xl md:text-6xl font-light tracking-tight"
              >
                <Link
                  to="/connect_with_me"
                  className="block py-4 hover:text-gray-400 transition-colors"
                >
                  CONNECT
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        </div>
      </section>

      <div className="min-h-screen flex items-center justify-center px-12">
        <div className="max-w-2xl w-full">
          <motion.h1
            className="text-6xl md:text-8xl font-light leading-none mb-12 tracking-tight text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            GET IN TOUCH
          </motion.h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <label htmlFor="name" className="text-gray-400 text-lg">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full mt-2 p-4 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600 transition-colors"
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <label htmlFor="email" className="text-gray-400 text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mt-2 p-4 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600 transition-colors"
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <label htmlFor="message" className="text-gray-400 text-lg">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full mt-2 p-4 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600 transition-colors"
                required
              ></textarea>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-center"
            >
              <button
                type="submit"
                className="bg-gray-800 text-white font-light py-4 px-8 rounded-lg hover:bg-gray-700 transition-colors text-lg"
              >
                Submit
              </button>
            </motion.div>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Connect;
