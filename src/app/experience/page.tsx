"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "@/components/sections/section-header";
import { experience, education, awards, patents } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

function ExperienceCard({ exp, index }: { exp: typeof experience[0]; index: number }) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="rounded-xl border border-border/60 bg-card overflow-hidden"
    >
      {/* Header — always visible */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 hover:bg-muted/20 transition-colors"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-primary font-semibold mt-0.5">{exp.company}</p>
            <div className="flex flex-wrap gap-3 mt-2">
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" /> {exp.period}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" /> {exp.location}
              </span>
              <Badge variant="secondary" className="text-xs py-0">
                {exp.type}
              </Badge>
            </div>
          </div>
          <div className="shrink-0 text-muted-foreground mt-1">
            {expanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </div>
        </div>
      </button>

      {/* Expanded content */}
      {expanded && (
        <div className="px-6 pb-6 border-t border-border/40 pt-5 space-y-6">
          {/* Problem */}
          <div>
            <h4 className="text-xs font-mono text-primary uppercase tracking-widest mb-2">
              Problem
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{exp.problem}</p>
          </div>

          {/* Actions */}
          <div>
            <h4 className="text-xs font-mono text-primary uppercase tracking-widest mb-2">
              Actions
            </h4>
            <ul className="space-y-1.5">
              {exp.actions.map((action) => (
                <li
                  key={action}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {action}
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div>
            <h4 className="text-xs font-mono text-primary uppercase tracking-widest mb-3">
              Results
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {exp.results.map((result) => (
                <div
                  key={result}
                  className="bg-primary/5 border border-primary/20 rounded-lg px-3 py-2.5 text-xs font-medium text-center"
                >
                  {result}
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-xs font-mono text-primary uppercase tracking-widest mb-2">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {exp.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeader
        eyebrow="Career"
        title="Experience"
        description="Enterprise AI and MLOps engineering across healthcare and fintech."
      />

      {/* Work Experience */}
      <section className="mb-16">
        <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">
          Work Experience
        </h2>
        <div className="space-y-4">
          {experience.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </section>

      <Separator className="mb-16" />

      {/* Education */}
      <section className="mb-16">
        <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">
          Education
        </h2>
        <div className="space-y-4">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-border/60 bg-card p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold">{edu.institution}</h3>
                  <p className="text-primary font-medium text-sm mt-0.5">{edu.degree}</p>
                  {edu.thesis && (
                    <p className="text-xs text-muted-foreground mt-1 italic">
                      Thesis: {edu.thesis}
                    </p>
                  )}
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                  <p className="text-xs text-muted-foreground">{edu.location}</p>
                  <p className="text-sm font-mono text-primary mt-1">GPA: {edu.gpa}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Separator className="mb-16" />

      {/* Patents & Awards */}
      <div className="grid sm:grid-cols-2 gap-10">
        <section>
          <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">
            Patents
          </h2>
          <div className="space-y-4">
            {patents.map((patent, i) => (
              <motion.div
                key={patent.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl border border-border/60 bg-card p-5"
              >
                <p className="text-sm font-semibold mb-1">{patent.title}</p>
                <p className="text-xs text-muted-foreground mb-2">{patent.description}</p>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs">{patent.year}</Badge>
                  <Badge variant="secondary" className="text-xs">{patent.number}</Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">
            Awards
          </h2>
          <div className="space-y-4">
            {awards.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl border border-border/60 bg-card p-5"
              >
                <p className="text-sm font-semibold mb-1">{award.title}</p>
                <p className="text-xs text-muted-foreground mb-2">
                  {award.organization} · {award.year}
                </p>
                <p className="text-xs text-muted-foreground italic">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
