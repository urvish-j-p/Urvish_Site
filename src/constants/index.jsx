import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";

import StackOverflow from "../assets/StackOverflow.png";
import QuickNote from "../assets/QuickNote.png";
import iNAVTracker from "../assets/iNAV_Tracker.png";
import cicd from "../assets/ci-cd.png";

import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";

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
    "A passionate Full Stack Developer skilled in MERN, TypeScript, AWS, Docker & CI/CD, producing the quality work.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "i-NAV Tracker",
    image: iNAVTracker,
    Link: "https://inav-tracker.urvish.website/",
  },
  {
    id: 2,
    name: "Stack Overflow Clone",
    image: StackOverflow,
    Link: "https://stackoverflow.urvish.website/",
  },
  {
    id: 3,
    name: "QuickNote",
    image: QuickNote,
    Link: "https://quicknote.urvish.website/",
  },
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React.js",
    experience: "2+ years",
  },
  {
    icon: (
      <TbBrandRedux
        className="text-4xl lg:text-5xl"
        style={{ color: "#764abc" }}
      />
    ),
    name: "Redux",
    experience: "2+ years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "2+ years",
  },
  {
    icon: <SiExpress className="text-4xl text-white lg:text-5xl" />,
    name: "Express.js",
    experience: "2+ years",
  },
  {
    icon: <TbBrandTypescript className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "TypeScript",
    experience: "1+ year",
  },
  {
    icon: <FaAws className="text-4xl text-white lg:text-5xl" />,
    name: "AWS",
    experience: "1+ year",
  },
  {
    icon: <FaDocker className="text-4xl text-docker lg:text-5xl" />,
    name: "Docker",
    experience: "6+ months",
  },
  {
    icon: (
      <img
        src={cicd}
        alt="CI/CD"
        className="w-10 h-10 lg:w-12 lg:h-12 object-contain filter invert"
      />
    ),
    name: "CI/CD",
    experience: "6+ months",
  },
];

export const EXPERIENCES = [
  {
    title: "MERN Stack Developer",
    company: "Prepseed",
    duration: "May 2024 - Present",
    description:
      "𝗟𝗲𝗮𝗱𝗶𝗻𝗴 the Yellow Spot OOH project, managing the entire lifecycle from client meetings and requirement gathering to development and deployment. Constructed a 𝗖𝗜/𝗖𝗗 pipeline from scratch that improved deployment efficiency from 15 minutes (manual) to 6 minutes (automated), achieved a 𝟲𝟬% 𝗿𝗲𝗱𝘂𝗰𝘁𝗶𝗼𝗻 in deployment time. Utilized 𝗔𝗪𝗦 services such as EC2, S3, CloudFront, Route 53, ACM, SES, SNS and IAM to deploy and manage 𝗠𝗘𝗥𝗡 stack applications seamlessly in a professional environment. Developed and implemented 𝗥𝗘𝗦𝗧 𝗔𝗣𝗜𝘀 for the multiple modules, enhanced the system’s functionality and data accessibility. Crafted user interfaces with 𝗔𝗻𝘁 𝗗𝗲𝘀𝗶𝗴𝗻, ensured a consistent and modern user experience.",
  },
  {
    title: "React.js Intern",
    company: "SoftCoding Solutions",
    duration: "Jul 2023 - Aug 2023",
    description:
      "Developed the frontend of the Student Portal Web App, ensured a user friendly and responsive interface. Managed global state using 𝗥𝗲𝗱𝘂𝘅 and Redux Thunk, enhanced the application’s performance and maintainability. Implemented 𝗖𝗵𝗮𝗿𝘁.𝗷𝘀 for visualizing student attendance data, provided clear and interactive graphical representations.",
  },
  {
    title: "MERN Stack Intern",
    company: "NullClass",
    duration: "Jan 2023 - Feb 2023",
    description:
      "Integrated a 𝗰𝗵𝗮𝘁𝗯𝗼𝘁 into the website to provide answers of programming language related questions, enhanced user engagement. Ensured the website’s responsiveness across mobile and tablet devices, delivered an optimal user experience on all platforms. Enhanced proficiency in the 𝗠𝗘𝗥𝗡 Stack through practical application in the project.",
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
