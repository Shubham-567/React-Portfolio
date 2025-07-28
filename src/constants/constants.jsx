import { FaFigma, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const skills = [
  {
    icon: <IoLogoJavascript className='skill-icon' />,
    skill: "JavaScript",
  },
  {
    icon: <SiTypescript className='skill-icon' />,
    skill: "TypeScript",
  },
  {
    icon: <FaReact className='skill-icon' />,
    skill: "React",
  },
  {
    icon: <TbBrandNextjs className='skill-icon' />,
    skill: "Next.js",
  },
  {
    icon: <FaNodeJs className='skill-icon' />,
    skill: "Node.js",
  },
  {
    icon: <RiTailwindCssFill className='skill-icon' />,
    skill: "Tailwind CSS",
  },
  {
    icon: <FaFigma className='skill-icon' />,
    skill: "Figma",
  },
  {
    icon: <FaGithub className='skill-icon' />,
    skill: "Git",
  },
];
