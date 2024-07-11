// import React from 'react'
import aboutImg from "../assets/about.jpg";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">
            About
            <span className="text-neutral-500"> Me</span> 
        </h1>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                <img className="rounded-2xl" src={aboutImg} alt="about" />    
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">I am a dedicated and innovative M.Tech student specializing in Information Technology with a passion for solving complex problems through technology.My expertise spans Computer Network, Computer Architecture, cloud computing, and software engineering. Proficient in HTML, CSS, Java, and C++.I have worked on some projects that demonstrate my ability to apply theoretical knowledge to real-world scenarios.</p>
                    </div>
                </div>
        </div>
    </div>
  );
};

export default About;
