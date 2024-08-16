import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.png";
import projectImage2 from "../assets/project2.png";
import projectImage3 from "../assets/project3.png";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { FaAws } from "react-icons/fa";

export const NAVIGATION_LINKS = [
  { label: "Intro", href: "#intro" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Urvish Prajapati",
  Intro: "I'm",
  greet: "Hello there!",
  description:
    "A passionate Full Stack Developer skilled in MERN, TypeScript & Next.js, producing the quality work.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Stack Overflow Clone",
    image: projectImage1,
    Link: "https://stack-overflow-clone-by-urvish.vercel.app/",
  },
  {
    id: 2,
    name: "QuickNote",
    image: projectImage2,
    Link: "https://quicknote-by-urvish.vercel.app/",
  },
  {
    id: 3,
    name: "eMart",
    image: projectImage3,
    Link: "https://emart-by-urvish.netlify.app/",
  },
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React.js",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1+ year",
  },
  {
    icon: <SiExpress className="text-4xl text-white lg:text-5xl" />,
    name: "Express.js",
    experience: "1+ year",
  },
  {
    icon: <TbBrandTypescript className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "TypeScript",
    experience: "1+ year",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <FaAws className="text-4xl text-white lg:text-5xl" />,
    name: "AWS",
    experience: "1+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "MERN Stack Developer",
    company: "Prepseed",
    duration: "May 2024 - Present",
    description:
      "Developed a comprehensive dashboard for the client Keystone Universe, enhancing their data visualization capabilities. Developed REST APIs to enhance chat functionality with filters for mentions, flagged messages and unread conversations. Implemented an alert tab with full CRUD functionality for SAS, enhancing the client's ability to manage notifications efficiently.",
  },
  {
    title: "React.js Intern",
    company: "SoftCoding Solutions",
    duration: "Jul 2023 - Aug 2023",
    description:
      "Developed the front-end of the Student Portal Web App, ensuring a user friendly and responsive interface. Managed global state using Redux and Redux Thunk, enhancing the application's performance and maintainability. Implemented Chart.js for visualizing student attendance data, providing clear and interactive graphical representations.",
  },
  {
    title: "MERN Stack Intern",
    company: "NullClass",
    duration: "Jan 2023 - Feb 2023",
    description:
      "Integrated chatbot into the website to provide answers to programming language related questions, enhancing user engagement. Ensured the website’s responsiveness across mobile and tablet devices, delivering an optimal user experience on all platforms. Enhanced proficiency in the MERN Stack through practical application in the project.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.linkedin.com/in/urvish-j-p/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/urvish-j-p",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/urvish_j_p/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/urvish_j_p",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.facebook.com/urvish.j.p",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
];
