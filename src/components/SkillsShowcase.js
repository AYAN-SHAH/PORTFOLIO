"use client";

import { motion } from "framer-motion";
import {
  Code,
  FileJson,
  Layers,
  Database,
  Server,
  Globe,
  BackpackIcon as Bootstrap,
  Wind,
  Framer,
  GitGraphIcon as Git,
  Smartphone,
  WorkflowIcon as Wordpress,
} from "lucide-react";
import { FaGithub, FaWordpress } from "react-icons/fa";

const skills = [
  { name: "React", icon: <Code /> },
  { name: "Next.js", icon: <Layers /> },
  { name: "HTML", icon: <Globe /> },
  { name: "CSS", icon: <FileJson /> },
  { name: "JavaScript", icon: <FileJson /> },
  { name: "MongoDB", icon: <Database /> },
  { name: "Mongoose", icon: <Database /> },
  { name: "Express", icon: <Server /> },
  { name: "Bootstrap", icon: <Bootstrap /> },
  { name: "Tailwind", icon: <Wind /> },
  { name: "Framer Motion", icon: <Framer /> },
  { name: "Git", icon: <Git /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "MySQL", icon: <Database /> },
  { name: "Flutter", icon: <Smartphone /> },
  { name: "WordPress", icon: <FaWordpress /> },
  { name: "React Native", icon: <Smartphone /> },
  { name: "Node.js", icon: <Server /> },
  { name: "Laravel", icon: "🔥" },
  { name: "PHP", icon: "🐘" },
  { name: "Firebase", icon: "🔥" },
  { name: "TypeScript", icon: "📘" },
  { name: "Vue.js", icon: "💚" },
  { name: "Angular", icon: "🔴" },
  { name: "PostgreSQL", icon: "🐘" },
 
  { name: "AWS", icon: "☁️" },
  { name: "Vercel", icon: "▲" },
  { name: "Netlify", icon: "🌐" },
 
  { name: "REST API", icon: "🔗" },
  { name: "JWT", icon: "🔐" },
  { name: "OAuth", icon: "🔑" },
 
  { name: "Babel", icon: "⚙️" },
  
 
  { name: "Sass", icon: "💎" },
  
  { name: "Material-UI", icon: "🎨" },
  { name: "Ant Design", icon: "🐜" },
  { name: "Chakra UI", icon: "🎯" },
];

export default function SkillsShowcase() {
  return (
    <div className="bg- text-white p-8 rounded-lg hidden lg:block max-w-full overflow-hidden">
      <h2 className="text-2xl font-bold mb-6 text-center"></h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-10 gap-4">
        {skills.map((skill, index) => (
          <div key={skill.name} className="flex flex-col items-center">
            <motion.div
              className="bg-white text-black p-2 rounded-full mb-2 text-sm"
              animate={{
                y: ["0%", "10%", "0%"],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 1,
              }}
            >
              {skill.icon}
            </motion.div>
            <span
              className="text-xs font-medium text-center text-white mt-1"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
