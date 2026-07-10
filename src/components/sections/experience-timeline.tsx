"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { SectionHeader } from "./section-header";
import { experience } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-12">
          <SectionHeader
            eyebrow="Career"
            title="Experience"
            description="Industry roles across enterprise AI, MLOps, and healthcare systems."
            className="mb-0"
          />
          <Link
            href="/experience"
            className="hidden sm:inline-flex items-center gap-1 text-sm text-primary font-medium hover:gap-2 transition-all whitespace-nowrap"
          >
            Full timeline
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border/60 hidden sm:block" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="sm:pl-16 relative"
              >
                {/* Dot */}
                <div className="hidden sm:flex absolute left-[19px] top-5 h-3 w-3 rounded-full bg-primary border-2 border-background" />

                <div className="rounded-xl border border-border/50 bg-card/50 p-6 hover:border-primary/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      <p className="text-primary font-medium text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 shrink-0">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key results */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                    {exp.results.slice(0, 4).map((result) => (
                      <div
                        key={result}
                        className="bg-muted/40 rounded-md px-3 py-2 text-xs text-center font-medium"
                      >
                        {result}
                      </div>
                    ))}
                  </div>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
