// import React from 'react'
import profilePic from "../assets/kunalbhargavprofile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {x:-100, opacity:0},
  visible: {x:0, opacity:1, transition:{duration:0.5,delay:delay},},
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 
                variants={container(0)}
                initial="hidden"
                animate="visible"
                // initial={{ x: -100, opacity: 0}}
                // animate={{ x: 0, opacity: 1}}
                // transition={{ duration: 0.5, delay: 0.5}}
                className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Kunal Bhargav</motion.h1>
                <motion.span 
                variants={container(0.3)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tighter text-transparent">Web Developer</motion.span>
                <motion.p 
                variants={container(0.6)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-6 font-light tracking-tighter">I'm passionate about creating innovative solutions and delivering great results. I rise to the challenge because I have a strong background in web development. I have the ability to learn and adapt to new technology and skills. I am known for my hard work, dedication, and ability to meet deadlines. I am passionate about my job, go to every job with enthusiasm and strive to be good.</motion.p>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            {/* <img className="mx-2 h-50 w-40" src={profilePic} alt="Kunal Bhargav" /> */}
             <motion.img 
                initial={{ x: 100, opacity: 0}}
                animate={{ x: 0, opacity: 1}}
                transition={{ duration: 0.5, delay: 0.5}}
                // variants={container(0.3)}
                // initial="hidden"
                // animate="visible"
                style={{ width: 400 , height: 450 }} src={profilePic} alt="Kunal Bhargav" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
