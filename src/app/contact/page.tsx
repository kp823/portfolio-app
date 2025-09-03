"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6 text-center">
      <h2 className="text-4xl font-semibold mb-4">Get In Touch</h2>
      <p className="mb-6">
        Interested in collaborating or hiring me? Let's connect!
      </p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Button asChild>
          <a href="mailto:john@example.com">Say Hello</a>
        </Button>
      </motion.div>
    </div>
  );
}
