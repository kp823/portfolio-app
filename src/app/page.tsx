"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SkillsMarquee from "@/components/skills-marquee";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hi, I'm Krupal Pansheriya 👋
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          A Full-Stack Developer passionate about building scalable web apps
          and delightful user experiences.
        </motion.p>
        <div className="flex gap-4 mt-6">
          <Button asChild>
            <a href="/projects">View Projects</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </Button>
        </div>
      </section>

      {/* Skills Marquee */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <SkillsMarquee />
      </section>
    </div>
  );
}
