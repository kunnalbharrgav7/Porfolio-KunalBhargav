// import React from 'react'
import logo from "../assets/kunalbhargav.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
// import { SocialMedia } from "../constants";
const Navbar = () => {
  return ( 
  <nav className="mb-20 flex items-center justify-between py-6 h-20">
    <div className="flex flex-shrink-0 items-center">
      {/* <img className="h-12 ml-3" src={logo} alt="logo" /> */}
      <img className="mx-2 w-10" src={logo} alt="logo" />

    </div>
    <div 
    className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/kunal-bhargav-1ab85b230/"><FaLinkedin ></FaLinkedin></a>
      <a href="https://github.com/kunnalbharrgav7"><FaGithub ></FaGithub></a>
      <a href="https://www.instagram.com/kunal_bhargav_0007/"><FaInstagram ></FaInstagram></a>
      <a href="https://www.youtube.com/@27_kunalbhargav44"><FaYoutube></FaYoutube></a>
      {/* {
        SocialMedia.map((item, index) => {
          return (
            <div key={index}>
              <a>
                <img src={item.img} alt="title" className="h-28"/>
              </a>
            </div>
          )
        })
      } */}
    </div>
  </nav>
  );
};

export default Navbar;
