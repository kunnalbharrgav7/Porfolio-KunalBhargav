// import React from 'react'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y:[10,-10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:0.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(1.1)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className="text-5xl text-orange-700"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(1.2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaCss3Alt className="text-5xl text-blue-700"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(1.3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiTailwindCssFill className="text-5xl text-cyan-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(1.1)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoJavascript className="text-5xl text-yellow-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(1.2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-5xl text-cyan-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(1.3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJava className="text-5xl text-red-700"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(1.1)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-5xl text-blue-600"/>
        </motion.div>
    </div>
    </div>
  );
};

export default Technologies;
