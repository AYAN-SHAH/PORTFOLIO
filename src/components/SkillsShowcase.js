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
import { FaGithub } from "react-icons/fa";

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
  { name: "WordPress", icon: <Wordpress /> },
  { name: "React Native", icon: <Smartphone /> },
  { name: "Node.js", icon: <Server /> },
];

export default function SkillsShowcase() {
  return (
    <div className="bg- text-white p-8 rounded-lg hidden lg:block">
      <h2 className="text-2xl font-bold mb-6 text-center"></h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <div key={skill.name} className="flex flex-col items-center">
            <motion.div
              className="bg-white text-black p-3 rounded-full mb-2"
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
              className="text- font-medium text-center text-white mt-1"
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
