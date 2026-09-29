"use client";

import { motion } from "framer-motion";

const achievements = [
  { value: "2", label: "US patents (1 granted)" },
  { value: "3+", label: "Years experience" },
  { value: "2", label: "Hackathon awards" },
];

export function AchievementBanner() {
  return (
    <section className="border-y border-border/50 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-3 gap-6">
          {achievements.map((item, i) => {
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col gap-1"
              >
                <span className="text-3xl font-semibold font-mono tabular-nums text-foreground">
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
