import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";

import StackOverflow from "../assets/StackOverflow.png";
import QuickNote from "../assets/QuickNote.png";
import iNAVTracker from "../assets/iNAV_Tracker.png"

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

export const NAVIGATION_LINKS = [
  { label: "Intro", href: "#intro" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Urvish Prajapati main",
  Intro: "I'm",
  greet: "Hello there!",
  description:
    "A passionate Full Stack Developer skilled in MERN, TypeScript & AWS, producing the quality work.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "i-NAV Tracker",
    image: iNAVTracker,
    Link: "https://i-nav-tracker-by-urvish.vercel.app/",
  },
  {
    id: 2,
    name: "Stack Overflow Clone",
    image: StackOverflow,
    Link: "https://stack-overflow-clone-by-urvish.vercel.app/",
  },
  {
    id: 3,
    name: "QuickNote",
    image: QuickNote,
    Link: "https://quicknote-by-urvish.vercel.app/",
  }
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React.js",
    experience: "1+ year",
  },
  {
    icon: (
      <TbBrandRedux
        className="text-4xl lg:text-5xl"
        style={{ color: "#764abc" }}
      />
    ),
    name: "Redux",
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
    icon: <FaAws className="text-4xl text-white lg:text-5xl" />,
    name: "AWS",
    experience: "6+ months",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "6+ months",
  },
  {
    icon: <SiAntdesign className="text-4xl text-white lg:text-5xl" />,
    name: "Ant Design",
    experience: "6+ months",
  },
];

export const EXPERIENCES = [
  {
    title: "MERN Stack Developer",
    company: "Prepseed",
    duration: "May 2024 - Present",
    description:
      "Developed and implemented REST APIs for the chat, transport and inventory modules, enhancing the system's functionality and data accessibility. Created a comprehensive dashboard for the client Keystone Universe, enhancing their data visualization capabilities. Built an alert system with CRUD operations, streamlined invoice generation and report cards, optimizing notification handling and financial reporting for the client SAS. Delivered Asset Management and Client Management modules for the client Yellow Spot, optimizing operational workflows and improving client service processes. Utilized Ant Design to develop and maintain user interfaces for web applications, ensuring a consistent and modern user experience.",
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
