import { motion } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    year: "December 2023 - March 2024",
    role: "Software Engineer Intern",
    company: "Ckodon Fooundation",
    description: [
      "Created an engaging Wellness feature for fitness, meditation, and shared music, leveraging a web interface and Slack/Teams integrations using TypeScript, React, Remix, Node.js, Tailwind CSS, and Prisma ORM.",
      "Collaborated in a team of 7 to build 2 full-stack applications from scratch, including an e-commerce platform, strengthening coding skills and version control proficiency in Git.",
    ],
    technologies: ["Javascript", "React.js", "Node.js", "SQL", "HTML", "CSS"],
  },

  {
    year: "May 2024 - August 2024",
    role: "Full Stack Developer",
    company: "Olives Technologies",
    description: [
      "Designed and implemented React-based digital intake forms, optimizing client onboarding and facilitating successful matches between 30+ patients and culturally-appropriate BIPOC therapists.",
      "Implemented Firebase for robust client-side authentication, enhancing data security and reducing unauthorized access attempts by 70%.",
      "Developed and implemented a patient prioritization algorithm utilizing hard and soft criteria, resulting in a 60% reduction in practitioner appointment review time.",
    ],
    technologies: [
      "Javascript",
      "React.js",
      "Node.js",
      "SQL",
      "HTML",
      "CSS",
      "Git",
      "GitHub",
    ],
  },
  {
    year: "September 2024 - Present",
    role: "Website Team",
    company: "Association of Computing Machinery",
    description: [
      "Redesigned ACM club's website, implementing contact and feedback forms and social media integration features and improving accessibility to WCAG 2.1 AA standards, resulting in a 40% increase in user engagement and 25% growth in club membership.",
      "Developed and integrated accessibility enhancements and interactive features, including a real-time event calendar and member forum, while optimizing site performance to reduce load time by 60%, resulting in a 45% increase in user engagement with club activities.",
      "Contributed to regular updates and maintenance, applying front-end and back-end skills to keep the website current and reflective of ongoing club initiatives and events.",
    ],
    technologies: [
      "Javascript",
      "Svelte",
      "Node.js",
      "HTML",
      "CSS",
      "Git",
      "GitHub",
    ],
  },
  {
    year: "December 2024 - Present",
    role: "Software Engineer Intern",
    company: "Reality AI Lab",
    description: [
      "Implemented new features to streamline question-answering functionality, improving response accuracy and reducing latency by 30%.",
      "Developed and enhanced software modules for Marvel AI, an AI-powered teaching assistant, optimizing its user interaction capabilities through efficient algorithms and scalable codebases.",
    ],
    technologies: [
      "Javascript",
      "React.js",
      "Node.js",
      "SQL",
      "Docker",
      "Firebase",
    ],
  },
];

const Experiences = () => {
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
      <div className="px-12 space-y-24 pb-24 pt-24">
        <motion.h1
          className="text-6xl md:text-8xl font-light leading-none mb-8 tracking-tight text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          EXPERIENCE
        </motion.h1>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-colors duration-300 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex-grow">
                <p className="text-sm text-gray-400 mb-2">{experience.year}</p>
                <h2 className="text-2xl font-light mb-2 tracking-tight">
                  {experience.role}
                </h2>
                <h3 className="text-lg text-gray-300 mb-4">
                  {experience.company}
                </h3>
                <div className="space-y-2 text-gray-400">
                  {experience.description.map((desc, i) => (
                    <p key={i} className="leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex flex-wrap">
                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="mr-2 mb-2 rounded bg-gray-800 px-3 py-1 text-sm font-medium text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Experiences;
