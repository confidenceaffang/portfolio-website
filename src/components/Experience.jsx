import {motion} from "framer-motion";


const experiences = [
    {
      year: "August 2023 - May 2024",
      role: "Full Stack Development",
      company: "CodePath",
      description: [
        "Gained hands-on experience in front-end and back-end development using technologies like HTML, CSS, JavaScript, React, Node.js, and SQL.",
        "Built real-world projects from scratch, focusing on practical coding skills and collaboration in team environments.",
        "Developed a professional portfolio showcasing full stack applications."
      ],
      technologies: ["Javascript", "React.js","Node.js", "SQL","HTML", "CSS" ]
    },
    {
      year : "August 2024 - Present",
      role : "Computer Science Tutor",
      company : "Wayne State College",
      description : [
        "Tutored 25 Wayne State students in Python and Swift as part of offering a course at the Math & Science Center.",
        "Guided students in understanding complex programming and electronic principles.",
        "Enabled the successful completion of advanced projects, through a collaborative and dynamic learning environment."
      ], 
      technologies : ["Python", "Swift"]
    },
    {
      year : "September 2024 - Present",
      role : "Intro to Software Engineering",
      company: "App Academy",
      description:  [
        "Gained foundational knowledge in software development, including programming principles, algorithms, and object-oriented design.",
        "Developed hands-on experience in coding, debugging, and version control using tools like Git and platforms such as GitHub.",
        "Collaborated on team projects, applying Agile methodologies to develop software solutions and improve workflow efficiency."
      ],
      technologies: ["Javascript", "React.js","Node.js", "SQL","HTML", "CSS","Git", "GitHub"]
    }

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
  