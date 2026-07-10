"use client";

import { motion } from "framer-motion";
import { Download, MapPin, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { experience, education, awards, patents } from "@/data/experience";
import { skillGroups } from "@/data/skills";

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Download button */}
      <div className="flex justify-end mb-8">
        <a
          href="/resume.pdf"
          download
          className={cn(buttonVariants(), "gap-2")}
        >
          <Download className="h-4 w-4" />
          Download PDF
        </a>
      </div>

      {/* Resume card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-border bg-card p-8 sm:p-12 space-y-10 print:border-0 print:shadow-none"
      >
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold mb-1">Maitreya Mohapatra</h1>
          <p className="text-primary font-medium mb-3">
            AI Engineer · MLOps · Healthcare AI
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" /> Nuremberg, Germany
            </span>
            <span className="flex items-center gap-1">
              <Mail className="h-3 w-3" /> mimo.mohapatra@gmail.com
            </span>
            <span className="flex items-center gap-1">
              <FaGithub className="h-3 w-3" /> github.com/mimo1999
            </span>
            <span className="flex items-center gap-1">
              <FaLinkedin className="h-3 w-3" /> linkedin.com/in/maitreya-mohapatra
            </span>
          </div>
        </div>

        <Separator />

        {/* Summary */}
        <section>
          <h2 className="text-xs font-mono text-primary uppercase tracking-widest mb-3">
            Summary
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            AI Engineer with 3+ years building production ML and LLM-based systems across
            fintech, healthcare, and industrial R&D. Hands-on with agentic architectures
            (LangGraph, MCP), retrieval-augmented generation, and deploying ML services behind
            CI/CD. Co-inventor on two US patent applications for ML-based financial forecasting.
            Completing M.Sc. in Artificial Intelligence at FAU Erlangen-Nürnberg (graduating
            August 2026).
          </p>
        </section>

        <Separator />

        {/* Experience */}
        <section>
          <h2 className="text-xs font-mono text-primary uppercase tracking-widest mb-5">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.company}>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-semibold text-sm">{exp.role}</h3>
                    <p className="text-primary text-sm">{exp.company}</p>
                  </div>
                  <p className="text-xs text-muted-foreground shrink-0">
                    {exp.period} · {exp.location}
                  </p>
                </div>
                <ul className="space-y-1 ml-0">
                  {exp.actions.map((action) => (
                    <li
                      key={action}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Education */}
        <section>
          <h2 className="text-xs font-mono text-primary uppercase tracking-widest mb-5">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div
                key={edu.institution}
                className="flex flex-col sm:flex-row sm:items-start justify-between gap-1"
              >
                <div>
                  <h3 className="font-semibold text-sm">{edu.institution}</h3>
                  <p className="text-xs text-muted-foreground">{edu.degree}</p>
                  {edu.thesis && (
                    <p className="text-xs text-muted-foreground italic">
                      Thesis: {edu.thesis}
                    </p>
                  )}
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-xs text-muted-foreground">{edu.period}</p>
                  <p className="text-xs font-mono text-primary">GPA: {edu.gpa}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Skills */}
        <section>
          <h2 className="text-xs font-mono text-primary uppercase tracking-widest mb-5">
            Technical Skills
          </h2>
          <div className="space-y-3">
            {skillGroups.map((group) => (
              <div key={group.category} className="flex gap-3">
                <p className="text-xs font-medium w-36 shrink-0 text-muted-foreground pt-0.5">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs py-0">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Patents & Awards */}
        <div className="grid sm:grid-cols-2 gap-8">
          <section>
            <h2 className="text-xs font-mono text-primary uppercase tracking-widest mb-4">
              Patents
            </h2>
            <div className="space-y-3">
              {patents.map((patent) => (
                <div key={patent.title}>
                  <p className="text-xs font-medium">{patent.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {patent.year} · {patent.number}
                  </p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-xs font-mono text-primary uppercase tracking-widest mb-4">
              Awards
            </h2>
            <div className="space-y-3">
              {awards.map((award) => (
                <div key={award.title}>
                  <p className="text-xs font-medium">{award.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {award.organization} · {award.year}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
