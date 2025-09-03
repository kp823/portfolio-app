"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-semibold mb-8 text-center">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((id, index) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <Card className="rounded-2xl shadow-lg overflow-hidden">
              <CardHeader>
                <CardTitle>Project {id}</CardTitle>
                <CardDescription>
                  Short description about project {id}.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <img
                  src={`https://via.placeholder.com/400x250?text=Project+${id}`}
                  alt={`Project ${id}`}
                  className="rounded-lg mb-4"
                />
                <div className="flex gap-3">
                  <Button size="sm" asChild>
                    <a href="#">Demo</a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href="#">GitHub</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
