import project1 from "../assets/projects/project-1.png";
import chatbot from "../assets/projects/chatbot.png";
import webscraper from "../assets/projects/webscraper.png";
import bank from "../assets/projects/bank.png";
import faceid from "../assets/projects/faceid.jpg";
import { motion } from "framer-motion";


const projects = [
  {
    title: "Weather App",
    image: project1,
  
    description: [
      "Built a personalized weather app integrating Open Weather API and ChatGPT API that provides accurate clothing recommendations for different weather conditions.",
      "Implemented a Celsius/Fahrenheit toggle feature and successfully deployed on GitHub Pages."
    ],
    technologies: ["JavaScript", "React.js", "Next.js", "HTML", "Open Weather API", "ChatGPT API"]
  },
  {
    title: "Chat Bot",
    image: chatbot,
    description: [
      "Developed an interactive chatbot using Python and JSON, enabling dynamic responses to user queries by randomly selecting answers from a structured data file.",
      "Implemented data handling and parsing techniques to enhance user interaction, showcasing skills in software development and natural language processing."
    ],
    technologies: ["JavaScript", "Python"]
  },
  {
    title: "Web Scraper",
    image: webscraper,
    description: [
      "Developed a web scraper in Python to extract data from Wikipedia's presidential elections page, gathering information from the 1828 elections to the present.",
      "Analyzed party affiliations by counting Republican and Democratic states over the years, with data stored in a text file for comprehensive summaries.",
      "Demonstrated proficiency in web scraping, data analysis, and file handling."
    ],
    technologies: ["Python"]
  },
  {
    title: "Banking App",
    image: bank,
    description: [
      "Engineered a full-featured banking platform using TypeScript, React, and Next.js, implementing secure user authentication, real-time transaction processing, and responsive design to ensure seamless cross-device functionality.",
"Spearheaded the development of 17 custom React components and 3 API integrations, while ensuring WCAG 2.1 AA accessibility compliance, improving the banking experience for users with disabilities."
    ],
    technologies: ["TypeScript", "HTML", "CSS", "JavaScript", "React", "Next.js", "Shadcn"]
  },
  {
    title: "Face Identification",
    image: faceid,
    description: [
      "Engineered a face identification system using the Viola-Jones algorithm, achieving 70% accuracy in facial recognition and securely storing over 200 facial embeddings in a PostgreSQL database on Aiven.",
      "Developed a user-friendly interface for the face recognition system, integrating real-time camera feed processing and achieving a response time of under 10 seconds for facial matching queries."

       ],
    technologies: ["Python", "PostgreSQL", "Aiven"]
  }
];

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div className="flex flex-wrap justify-center">
        {projects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-col lg:flex-row lg:justify-center w-full max-w-4xl">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 flex-shrink-0 mb-4 lg:mb-0 lg:mr-8"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded w-full h-auto"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/4"
            >
              <h2 className="mb-2 font-semibold text-xl">{project.title}</h2>
              <div className="mb-4 text-neutral-400">
                {project.description.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="mr-2 bg-neutral-900 rounded px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
