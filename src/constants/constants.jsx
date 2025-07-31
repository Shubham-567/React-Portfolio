import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb, SiMysql, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

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
    techStack: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind CSS"],
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
    title: "Leaderboard App",
    description:
      "Real-time leaderboard app with user selection, point claiming, history tracking, and a dynamic interface using MongoDB and REST API.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    repo: "https://github.com/Shubham-567/leaderboard-project",
    live: "https://leaderboard-web.vercel.app/",
  },
];
