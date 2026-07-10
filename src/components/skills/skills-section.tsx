"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Bot,
  Server,
  Cloud,
  Code,
  Database,
} from "lucide-react";
import { SectionHeader } from "@/components/sections/section-header";
import { skillGroups } from "@/data/skills";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Bot,
  Server,
  Cloud,
  Code,
  Database,
};

export function SkillsSection() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Technical Expertise"
          title="Skills & Capabilities"
          description="Grouped by capability area — not skill bars."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon] ?? Brain;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Card className="h-full hover:border-primary/30 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-md bg-primary/10 shrink-0">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold">
                          {group.category}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {group.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground border border-border/40 hover:border-primary/30 hover:text-foreground transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
