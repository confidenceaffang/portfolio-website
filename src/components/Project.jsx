import project1 from "../assets/projects/project-1.png"
import chatbot from "../assets/projects/chatbot.png"
import webscraper from "../assets/projects/webscraper.png"
import {motion} from "framer-motion"
const projects = [
    {
      title: "Weather app",
      image: project1,
      description: [
       "Built a personalized weather app integrating Open Weather API and ChatGPT API that provides accurate clothing recommendations for different weather conditions.\n",
        "Implemented a Celcius/Fahrenheit toggle feature and successfully deployed on GitHub Pages."
        
      ],
      technologies: ["Javascript", "React.js","Next.js", "HTML", "Open Weather API","ChatGPT API" ]
    },
    {
        title: "Chat Bot",
        image: chatbot,
        description: [
         "Developed an interactive chatbot using Python and JSON, enabling dynamic responses to user queries by randomly selecting answers from a structured data file.\n",
        "Implemented data handling and parsing techniques to enhance user interaction, showcasing skills in software development and natural language processing."   
        ],
        technologies: ["Javascript","Python" ]
      },
       {
        title: "Web Scraper",
        image: webscraper,
        description: [
            "Developed a web scraper in Python to extract data from Wikipedia's presidential elections page, gathering information from the 1828 elections to the present, and analyzed party affiliations by counting Republican and Democratic states over the years.",
            "Implemented data storage solutions to write the election results into a text file, providing a comprehensive summary of party representation across presidential elections, and demonstrating proficiency in web scraping, data analysis, and file handling."
            ],
        technologies: ["Python"] 
      }
  ];

const Project = () => {
    return(
        <div className="norder-b border-neutral-900 pb-4 ">
                <motion.h1 
                whileInView ={{opacity: 1,y:0}}
                initial={{opacity:0 ,y:-100}}
                transition= {{duration: 0.5}}
                className="my-20 text-center text-4xl ">
                    Projects
                </motion.h1>
                <div className="flex-wrap">
                    {projects.map((project,index) =>(
                       <div key={index} className="mb-8 flex flex-wrap lg:justify-center ">
                        <motion.div 
                        whileInView ={{opacity: 1,x:0}}
                        initial={{opacity:0 ,x:-100}}
                        transition= {{duration: 1}}
                        className="w-full lg: w-1/4 flex ">
                        <img src= {project.image} alt={project.title}  width={200} height={200} className="mb-6 rounded"/>
                        </motion.div>
                        <motion.div
                        whileInView ={{opacity: 1,x:0}}
                        initial={{opacity:0 ,x:100}}
                        transition= {{duration: 1}}
                         className="w-full max-w-xl lg:w-3/4">
                        <h2 className="mb-2 fot-semibold"> {project.title}</h2>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        {project.technologies.map((technologies,index) => (
                            <span key={index} className=" mr-2 bg-neutral-900 rounded px-2 py-1 text-sm font-medium text-purple-900">
                                {technologies}
                            </span>
                        ))}
                        </motion.div>
                        
                       </div>
                       
                    ))}
                </div>
        </div>
    )
}
export default Project;