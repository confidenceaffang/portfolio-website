import { motion } from "framer-motion";

const experiences = [
  {
    year: "December 2023 - March 2024",
    role: "Software Engineer Intern",
    company: " Ckodon Fooundation",
    description: [
      "Created an engaging Wellness feature for fitness, meditation, and shared music, leveraging a web interface and Slack/Teams integrations using TypeScript, React, Remix, Node.js, Tailwind CSS, and Prisma ORM.\n",
      "Collaborated in a team of 7 to build 2 full-stack applications from scratch, including an e-commerce platform, strengthening coding skills and version control proficiency in Git.",
    ],
    technologies: ["Javascript", "React.js", "Node.js", "SQL", "HTML", "CSS"],
  },

  {
    year: "May 2024 - August 2024",
    role: "Full Stack Developer",
    company: " Olives Technologies",
    description: [
      "Designed and implemented React-based digital intake forms, optimizing client onboarding and facilitating successful matches between 30+ patients and culturally-appropriate BIPOC therapists.\n",
      "Implemented Firebase for robust client-side authentication, enhancing data security and reducing unauthorized access attempts by 70%.\n",
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
    company: " Association of Computing Machinery",
    description: [
      "Redesigned ACM club's website, implementing contact and feedback forms and social media integration features and improving accessibility to WCAG 2.1 AA standards, resulting in a 40% increase in user engagement and 25% growth in club membership.\n",
      "Developed and integrated accessibility enhancements and interactive features, including a real-time event calendar and member forum, while optimizing site performance to reduce load time by 60%, resulting in a 45% increase in user engagement with club activities.\n",
      "Contributed to regular updates and maintenance, applying front-end and back-end skills to keep the website current and reflective of ongoing club initiatives and events.\n",
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
    company: " Reality AI Lab",
    description: [
      "Implemented new features to streamline question-answering functionality, improving response accuracy and reducing latency by 30%.\n",
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
  return (
    <div className="border-b border-neutral-900 pb-4 bg-black ">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>
      {experiences.map((experience, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4 mb-2 text-sm text-neutral-400"
          >
            <p>{experience.year}</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h2 className="font-semibold mb-2 ">
              {experience.role} -
              <span className="text-sm text-purple-100 ">
                {experience.company}
              </span>
            </h2>
            <p className="mb-full text-neutral-400">{experience.description}</p>
            {experience.technologies.map((technologies, index) => (
              <span
                key={index}
                className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-meduium text-purple-800"
              >
                {technologies}
              </span>
            ))}
          </motion.div>
          {}
        </div>
      ))}
    </div>
  );
};

export default Experiences;
