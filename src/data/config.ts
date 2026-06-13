import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact,
  SiTailwindcss, SiGit, SiNodedotjs, SiVite, SiFigma,
} from "react-icons/si";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import type { IconType } from "react-icons";

/**
 * Edit this file to personalize the template.
 * No other files need to change for basic content updates.
 */

export const site = {
  name: "Your Name",
  role: "Frontend Developer",
  bio: "I craft minimal, accessible interfaces with a focus on performance and detail. Currently building things on the web with React & TypeScript.",
  email: "hello@example.com",
  location: "Earth",
  cvUrl: "/cv.pdf",
  // Replace with your Formspree endpoint: https://formspree.io
  formspreeEndpoint: "https://formspree.io/f/your-id",
};

export const about = {
  paragraphs: [
    "Hi, I'm a frontend developer who enjoys building clean, fast and accessible products. I care about typography, micro-interactions, and the small details that make software feel right.",
    "When I'm not coding, you'll find me reading design essays, taking long walks, or experimenting with side projects. I'm currently open to freelance and full-time opportunities.",
  ],
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demo: string;
  github: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description: "A short description of what this project does and the problem it solves.",
    tags: ["React", "TypeScript", "Tailwind"],
    image: "/placeholder.svg",
    demo: "https://example.com",
    github: "https://github.com/your-username/project-one",
  },
  {
    title: "Project Two",
    description: "Another project highlighting your craft, with a focus on UX and performance.",
    tags: ["Next.js", "Node", "Postgres"],
    image: "/placeholder.svg",
    demo: "https://example.com",
    github: "https://github.com/your-username/project-two",
  },
  {
    title: "Project Three",
    description: "An open source library or tool you've built or contributed to.",
    tags: ["Vite", "Library", "DX"],
    image: "/placeholder.svg",
    demo: "https://example.com",
    github: "https://github.com/your-username/project-three",
  },
];

export type Skill = { name: string; Icon: IconType };

export const skills: Skill[] = [
  { name: "HTML5", Icon: SiHtml5 },
  { name: "CSS3", Icon: SiCss },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Vite", Icon: SiVite },
  { name: "Git", Icon: SiGit },
  { name: "Figma", Icon: SiFigma },
];

export const socials = [
  { name: "GitHub", href: "https://github.com/your-username", Icon: FiGithub },
  { name: "LinkedIn", href: "https://linkedin.com/in/your-username", Icon: FiLinkedin },
  { name: "Twitter", href: "https://twitter.com/your-username", Icon: FiTwitter },
  { name: "Email", href: "mailto:hello@example.com", Icon: FiMail },
];

export const nav = [
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
