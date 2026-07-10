"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Trophy } from "lucide-react";

const achievements = [
  { icon: Award, value: "2", label: "US Patents Filed" },
  { icon: Briefcase, value: "4+", label: "Years Experience" },
  { icon: Trophy, value: "2", label: "Hackathon Awards" },
];

export function AchievementBanner() {
  return (
    <section className="border-y border-border/50 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-3 gap-6">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center text-center gap-1.5"
              >
                <Icon className="h-4 w-4 text-primary mb-1" />
                <span className="text-2xl font-bold font-mono text-foreground">
                  {item.value}
                </span>
                <span className="text-xs text-muted-foreground leading-tight">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
