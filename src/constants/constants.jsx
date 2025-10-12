import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb, SiMysql, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { Github, Linkedin, Mail } from "lucide-react";

export const skills = [
  { icon: <IoLogoJavascript className='skill-icon' />, skill: "JavaScript" },
  { icon: <FaReact className='skill-icon' />, skill: "React.js" },
  { icon: <TbBrandNextjs className='skill-icon' />, skill: "Next.js" },
  { icon: <FaNodeJs className='skill-icon' />, skill: "Node.js" },
  { icon: <SiExpress className='skill-icon' />, skill: "Express.js" },
  { icon: <SiMongodb className='skill-icon' />, skill: "MongoDB" },
  { icon: <SiMysql className='skill-icon' />, skill: "MySQL" },
  { icon: <SiTypescript className='skill-icon' />, skill: "TypeScript" },
];

// export const resumeLink = "https://drive.google.com/file/d/1MoZqR9YLnqB40VeSbRZG-lPGR6YgexXH/view";
export const resumeLink = "/Shubham-Patil-Resume.pdf";

export const socials = [
  { name: "GitHub", url: "https://github.com/Shubham-567", icon: Github },
  {
    name: "LinkedIn",
    url: "http://www.linkedin.com/in/shubhampatil56",
    icon: Linkedin,
  },
  { name: "Email", url: "mailto:shubhampatil1356@gmail.com", icon: Mail },
];

export const projects = [
  {
    imgUrl: "images/project-1.png",
    title: "RentEase – Car Rental System",
    description:
      "Full-stack app for browsing, booking cars in real-time with secure payments. Includes dashboards for admins and users, built with JWT auth.",
    techStack: ["React", "Node.js", "Express", "MySQL", "TypeScript"],
    repo: "https://github.com/Shubham-567/RentEase-Car-Rental-System",
    live: "https://rent-ease-site.vercel.app",
  },
  {
    imgUrl: "images/project-2.png",
    title: "PitchBase – Startup Pitch Platform",
    description:
      "Platform where users pitch startup ideas, create profiles, sign in with GitHub, and browse other submissions using a clean UI.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Sanity CMS",
      "Tailwind CSS",
      "Lucide React",
    ],
    repo: "https://github.com/Shubham-567/Pitch-Base",
    live: "https://pitch-base.vercel.app",
  },
  {
    imgUrl: "images/project-3.png",
    title: "PlanEase – AI Lesson Planner",
    description:
      "AI-based lesson planner that helps teachers generate, edit, and export lesson plans using Google Gemini API and responsive UI.",
    techStack: ["React", "Google Gemini API", "ShadCN UI", "Tailwind CSS"],
    repo: "https://github.com/Shubham-567/AI-Lesson-Planner",
    live: "https://plan-ease-site.vercel.app",
  },
  {
    imgUrl: "images/project-4.png",
    title: "Taskly – MERN Task Manager",
    description:
      "A MERN-based task manager with JWT authentication and full CRUD functionality. Features task filtering and a responsive UI.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Zustand",
      "Tailwind CSS",
    ],
    repo: "https://github.com/Shubham-567/Taskly",
    live: "https://taskly-site.vercel.app",
  },
  {
    imgUrl: "images/project-5.png",
    title: "Jarurat Care – Patient Dashboard",
    description:
      "A responsive dashboard for viewing and managing patient records, featuring live search and a clean UI built with React and Tailwind CSS.",
    techStack: ["React", "Tailwind CSS", "React Router", "Lucide React"],
    repo: "https://github.com/Shubham-567/JaruratCare-Patient-Dashboard",
    live: "https://jarurat-patient-dashboard.vercel.app",
  },
  {
    imgUrl: "images/project-6.png",
    title: "QuickChat",
    description:
      "Full-stack, real-time chat app with JWT auth, image uploads via Cloudinary, and instant messaging powered by Socket.IO.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Tailwind CSS",
    ],
    repo: "https://github.com/Shubham-567/Quick-Chat",
    live: "https://quick-chat-site.vercel.app",
  },
];
