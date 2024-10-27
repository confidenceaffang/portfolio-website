import { AiFillLinkedin,AiFillGithub,AiFillTwitterCircle,AiFillInstagram } from "react-icons/ai";


const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className=" flex flex-shrink-0  items-center font-bold text-xl ml-10 text-emerald-700 ">
                <button className="border-2 border-neutral-800 rounded-md b ">
                <a href="https://docs.google.com/document/d/10S7q-eE0DO-8HMIjN-8CyqRGlns0xhl9YG-46oW_BXk/edit#heading=h.av069xf40nl0" target="blank" className="px-4 py-10 " >Resume</a>
                </button>
              </div> 
              <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <ul className="m-8 flex items-center justify-center gap-4 text-2xl">
               <a href="https://www.linkedin.com/in/confidence-affang-22603b2b2/" target="blank"><AiFillLinkedin /></a>
                <a href= "https://github.com/confidenceaffang" target="blank" ><AiFillGithub /></a>
                <a href="https://x.com/CAffang41919" target="blank"><AiFillTwitterCircle /></a>
                <a href="" target="blank"><AiFillInstagram /></a>
                </ul>
              </div>
                </nav>
    )
}

export default Navbar;