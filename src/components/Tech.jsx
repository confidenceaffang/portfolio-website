import { DiRedis, DiSwift } from "react-icons/di";
import { RiReactjsLine} from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {DiNodejs, DiPostgresql} from "react-icons/di";
import {motion} from "framer-motion";
import { DiMongodb, DiDjango } from "react-icons/di";
import { LinearGradient } from "react-text-gradients";


const iconvar = (duration) =>({
    initial : { y:-10 },
    animate : {y: [10, -10],
        transition:{
            duration :duration,
            ease :"linear",
            repeat: Infinity,
            repeaType : "reverse"
        }
    }

});



const Tech =() => {
    return (
        <div className="border-b border-neutral-800 pb-24 ">
           <motion.h2
           whileInView ={{opacity: 1,y:0}}
           initial={{opacity:0 ,y:-100}}
           transition= {{duration: 1.5}}
           className="my-20 text-center text-4xl">Technologies</motion.h2> 
           <motion.div
           whileInView ={{opacity: 1,x:0}}
           initial={{opacity:0 ,x:-100}}
           transition= {{duration: 1.5}} 
           className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants = {iconvar(2.5)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"> 
                <RiReactjsLine  className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div
            variants = {iconvar(3)}
            initial = "initial"
            animate = "animate"
             className="rounded-2xl border-4 border-neutral-800 p-4"> 
                <TbBrandNextjs  className="text-7xl text-white-400"/>
            </motion.div>
            <motion.div 
            variants = {iconvar(9)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 bg-orange-600 bg-gradient-to-l from-yellow-600 to-orange-600 "> 
                <DiSwift  className="text-7xl text-white-900 "/>
            </motion.div>
            <motion.div 
            variants = {iconvar(5)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"> 
                <DiRedis  className="text-7xl text-red-700"/>
            </motion.div>
            <motion.div
            variants = {iconvar(4)}
            initial = "initial"
            animate = "animate"
             className="rounded-2xl border-4 border-neutral-800 p-4"> 
                <DiNodejs  className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
            variants = {iconvar(7)}
            initial = "initial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"> 
                <DiPostgresql  className="text-7xl text-sky-700"/>
           </motion.div>
           <motion.div 
           variants = {iconvar(5)}
           initial = "initial"
           animate = "animate"
           className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiMongodb  className="text-7xl text-green-700"/>
           </motion.div>
           <motion.div 
           variants= {iconvar(9)}
           animate= 'animate'
           initial = 'initial'
           className="rounded-2xl border-4 border-neutral-800, p-4">
            <LinearGradient gradient={["to right", ' #FFC300,#0000FF']}>
            <DiDjango className="text-7xl text-yellow-600"/>
            </LinearGradient>
           </motion.div>
           </motion.div>
        </div>
    )
}
export default Tech;