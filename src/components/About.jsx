import images from "../assets/program.jpeg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <h1 className="my-20 text-center text-4xl text-red">
        ABOUT
        <span className="text-neutral-500">ME</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl"
              src={images}
              alt="Person programming"
            />
          </div>
        </motion.div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="my-2 max-w-xl py-6"
            >
              My academic journey in computer science has been complemented by
              valuable hands-on experience during an internship, where I applied
              my learning in a professional setting. This opportunity allowed me
              to strengthen my technical skills, gain practical insights into
              real-world problem-solving, and understand the dynamics of working
              in a team environment. Through the internship, I developed a
              deeper appreciation for the field and honed my adaptability,
              communication, and collaboration skills. These experiences have
              reinforced my passion for software engineering and prepared me to
              contribute effectively to future projects and challenges.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
