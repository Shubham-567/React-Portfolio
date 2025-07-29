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

export const projects = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&h=300&fit=crop",
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce site with product listings, a shopping cart, and a secure checkout process. Built with a focus on performance and user experience.",
    techStack: ["Figma", "React", "Next.js", "Stripe", "Tailwind CSS"],
    repo: "",
    live: "",
  },

  {
    imgUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&h=300&fit=crop",
    title: "Task Management App",
    description:
      "A Kanban-style task management application with drag-and-drop functionality, user authentication, and real-time updates.",
    techStack: ["React", "Firebase", "dnd-kit", "Zustand"],
    repo: "",
    live: "",
  },

  {
    imgUrl:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&h=300&fit=crop",
    title: "Portfolio Website V1",
    description:
      "My first personal portfolio website. It was a great learning experience in web animations and responsive design principles.",
    techStack: ["HTML", "CSS", "JavaScript", "GSAP", "Tailwind CSS"],
    repo: "",
    live: "",
  },

  {
    imgUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&h=300&fit=crop",
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce site with product listings, a shopping cart, and a secure checkout process. Built with a focus on performance and user experience.",
    techStack: ["React", "D3.js", "Next.js", "Express.js"],
    repo: "",
    live: "",
  },
];
