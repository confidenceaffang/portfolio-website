import project1 from "../assets/projects/project-1.png"
import {motion} from "framer-motion"
const projects = [
    {
      title: "Weather app",
      image: project1,
      description: [
       "Built a personalized weather app integrating Open Weather API and ChatGPT API that provides accurate clothing recommendations for different weather conditions.",
        "Implemented a Celcius/Fahrenheit toggle feature and successfully deployed on GitHub Pages."
        
      ],
      technologies: ["Javascript", "React.js","Next.js", "HTML", "Open Weather API","ChatGPT API" ]
    },
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
                <div>
                    {projects.map((project,index) =>(
                       <div key={index} className="mb-8 flex flex-wrap lg:justify-center ">
                        <motion.div 
                        whileInView ={{opacity: 1,x:0}}
                        initial={{opacity:0 ,x:-100}}
                        transition= {{duration: 1}}
                        className="w-full lg: w-1/4">
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