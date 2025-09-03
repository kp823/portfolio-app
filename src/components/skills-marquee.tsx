"use client";

import { motion } from "framer-motion";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Express",
  "NestJS",
  "Postgres",
  "MongoDB",
  "GraphQL",
  "Docker",
  "GitHub",
  "AWS",
];

export default function SkillsMarquee() {
  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className="flex gap-12 text-lg md:text-xl font-medium whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }} // slower (40s loop)
      >
        {skills.map((skill, i) => (
          <span key={i} className="text-gray-700 dark:text-gray-300">
            {skill}
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {skills.map((skill, i) => (
          <span key={`dup-${i}`} className="text-gray-700 dark:text-gray-300">
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
