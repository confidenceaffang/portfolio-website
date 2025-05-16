import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Connect = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus("submitting");

    try {
      // Simulate sending data (replace with your actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For demonstration purposes, we'll just log the data
      console.log("Form Data:", { name, email, message });

      setName("");
      setEmail("");
      setMessage("");
      setSubmissionStatus("success");
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionStatus("error");
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
    <main className="py-10 bg-black text-white h-screen justify-center items-center">
      <section className="text-center">
        <div>Forms</div>
        <form>
          <div>
            <div>
              <label>Name</label>
            </div>
            <input type="text" />
          </div>
          <div>
            <div>
              <label>Email</label>
            </div>
            <input type="email" />
          </div>
          <div>
            <div>
              <label>Phone</label>
            </div>
            <input type="tel" />
          </div>
          <div>
            <div>
              <label>Message</label>
            </div>
            <input type="text" />
          </div>
        </form>
        <div>
            
        </div>
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
                <Link to="/connect_with_me">
                  <button className="block py-2 hover:text-blue-500">
                    Connect with me
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Connect;
