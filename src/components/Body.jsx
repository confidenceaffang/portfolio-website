import myimage from "../assets/myimage.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Body = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36 ">
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Confidence Mawuli Affang
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-4xl tracking-tight text-cyan"
            >
              Aspiring Software Engineer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-3 max-w-xl py-6 font-light tracking-tighter"
            >
              I am currently a student at Wayne State College, pursuing my
              academic journey with a strong passion for technology and
              problem-solving. My aspiration is to become a skilled software
              engineer, dedicated to creating innovative solutions and
              contributing to the ever-evolving tech industry. I am committed to
              learning, growing, and honing my skills to make a meaningful
              impact in the field.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:p-8">
          <div className="flex justify-center w-300 h-200 ">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={myimage}
              alt="Confidence"
              className="rounded-full m-30"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;
