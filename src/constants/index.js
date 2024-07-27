import project1 from "../assets/projects/OnePlus.jpg";
import project2 from "../assets/projects/portfolio1.png";
import agender from "../assets/projects/agender.jpg";
import hider from "../assets/projects/hider.jpg";
import { LiaLinkedin } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
// import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EDUCATIONS = [
  {
    year: "2020 - 2025",
    role: "MASTER OF TECHNOLOGY",
    name: `INTERNATIONAL INSTITUTE OF PROFESSIONAL STUDIES - DEVI AHILYA VISHWAVIDYALAYA, INDORE, M.P.`,
    percentage: `CGPA - 7.68`,
  },
  {
    year: "2020",
    role: "HIGH SECONDARY SCHOOL",
    name: `INDIRA VIDYA MANDIR H.S. SCHOOL, INDORE, M.P.`,
    percentage: `PERCENTAGE - 65.40`,
  },
  {
    year: "2018",
    role: "HIGHER SCHOOL",
    name: `HOLY CROSS SCHOOL, INDORE, M.P`,
    percentage: `PERCENTAGE - 58.00`,
  },

];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS"],
    link: "https://github.com/kunnalbharrgav7/Oneplus-clone",
    name: "click here",
  },
  // {
  //   title: "Task Management App",
  //   image: project2,
  //   description:
  //     "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
  //   technologies: ["HTML", "CSS", "Angular", "Firebase"],
  // },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["REACT", "TAILWIND", "FRAMER MOTION"],
    link: "https://github.com/kunnalbharrgav7/Porfolio-KunalBhargav",
    name: "click here",
  },
  {
    title: "Age And Gender Detection",
    image: agender,
    description:
      " Developed a machine learning model capable of accurately detecting age and gender from facial images.",
    technologies: [ "Python", "TensorFlow/Keras", "OpenCV"],
    link: "https://github.com/kunnalbharrgav7/Age-and-Gender-project",
    name: "click here",
  },
  {
    title: "File Hider",
    image: hider,
    description:
      " Developed a machine learning model capable of accurately detecting age and gender from facial images.",
    technologies: [ "JAVA", "MYSQL", "JDBC"],
    link: "https://github.com/kunnalbharrgav7/File_Hider",
    name: "click here",
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "268, Satellite Valley, Tejaji Nagar, INDORE, (M.P) ",
  phoneNo: "+918103104696",
  email: "kunalbhargav007@gmail.com",
};

  export const SocialMedia = [
    {
    img: LiaLinkedin,
    title: "Linkedin",
    href: "https://www.linkedin.com/in/kunal-bhargav-1ab85b230/"
    },
    {
      img: FaGithub,
      title: "github",
      href: "https://github.com/kunnalbharrgav7"
      },
      // {
      //   img: BsInstagram,
      //   title: "instagram",
      //   href: "https://www.instagram.com/kunal_bhargav_0007/"
      //   },
        // {
        //   img: whatsapp,
        //   title: "whatsapp",
        //   href: ""
        //   },
          {
            img: BsYoutube,
            title: "youtube",
            href: "https://www.youtube.com/@27_kunalbhargav44"
            },  
  ]
