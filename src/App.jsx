import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import About from "./components/About";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import {motion} from "framer-motion"
import Form from "./components/Form"
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-slate-300 selection:text-slate-900">   
      <div className="fixed inset-0 -z-10 h-full w-full">
        <div className="absolute inset-0 h-full w-full px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto my-8">
        <Navbar />
        <Body />
        <About />
        <Tech />
        <Experience />
        <Project />
        <Contact />
        <Form />
      </div>
    </div>
  );
}

export default App;
