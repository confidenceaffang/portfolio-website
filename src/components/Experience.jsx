import {motion} from "framer-motion";


const experiences = [
    {
      year: "2023 - Present",
      role: "Full Stack Development",
      company: "CodePath",
      description: [
        "Gained hands-on experience in front-end and back-end development using technologies like HTML, CSS, JavaScript, React, Node.js, and SQL.",
        "Built real-world projects from scratch, focusing on practical coding skills and collaboration in team environments.",
        "Developed a professional portfolio showcasing full stack applications."
      ],
      technologies: ["Javascript", "React.js","Nex.js", "Sanity" ]
    },
  ];
  
  const Experience = () => {
    return (
      <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
        whileInView ={{opacity: 1,y:0}}
        initial={{opacity:0 ,y:-100}}
        transition= {{duration: 1.5}}
        className="my-20 text-center text-4xl">Experience</motion.h1>
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
            whileInView ={{opacity: 1,x:0}}
            initial={{opacity:0 ,x:-100}}
            transition= {{duration: 1}}
            className="w-full lg:w-1/4 mb-2 text-sm text-neutral-400">
              <p>{experience.year}</p>
              </motion.div>
              <motion.div 
              whileInView ={{opacity: 1,x:0}}
              initial={{opacity:0 ,x: 100}}
              transition= {{duration: 1}}
              className="w-full max-w-xl lg:w-3/4">
              <h2 className="font-semibold mb-2 ">{experience.role} -<span className="text-sm text-purple-100 ">{experience.company}</span></h2>
              <p className="mb-full text-neutral-400">{experience.description}</p>
            {experience.technologies.map((technologies,index) => ( <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-meduium text-purple-800">{technologies}</span>))}
           

              </motion.div>
              {}
          </div>
        ))}
      </div>
    );
  };
  
  export default Experience;
  