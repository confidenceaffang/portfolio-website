import { AiFillLinkedin,AiFillGithub,AiFillTwitterCircle,AiFillInstagram } from "react-icons/ai";


const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className=" flex flex-shrink-0  items-center font-bold text-xl ml-10 text-emerald-700 ">
                <button className="border-2 ">
                <a href="https://docs.google.com/document/d/10S7q-eE0DO-8HMIjN-8CyqRGlns0xhl9YG-46oW_BXk/edit#heading=h.av069xf40nl0" className="p-2" >Resume</a>
                </button>
              </div> 
              <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <ul className="m-8 flex items-center justify-center gap-4 text-2xl">
               <a href=""><AiFillLinkedin /></a>
                <AiFillGithub />
                <AiFillTwitterCircle />
                <AiFillInstagram />
                </ul>
              </div>
                </nav>
    )
}

export default Navbar;