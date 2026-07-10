"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const categoryColors: Record<Project["category"], string> = {
  "healthcare-ai": "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  genai: "bg-violet-500/10 text-violet-500 border-violet-500/20",
  mlops: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  infrastructure: "bg-blue-500/10 text-blue-500 border-blue-500/20",
};

const categoryLabels: Record<Project["category"], string> = {
  "healthcare-ai": "Healthcare AI",
  genai: "GenAI",
  mlops: "MLOps",
  infrastructure: "Infrastructure",
};

const statusColors: Record<Project["status"], string> = {
  production: "bg-green-500/10 text-green-500 border-green-500/20",
  research: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  "open-source": "bg-purple-500/10 text-purple-500 border-purple-500/20",
};

interface ProjectCardProps {
  project: Project;
  index?: number;
  compact?: boolean;
}

export function ProjectCard({ project, index = 0, compact = false }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="group h-full flex flex-col hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 bg-card/50 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-wrap gap-1.5">
              <span
                className={cn(
                  "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border",
                  categoryColors[project.category]
                )}
              >
                {categoryLabels[project.category]}
              </span>
              <span
                className={cn(
                  "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border",
                  statusColors[project.status]
                )}
              >
                {project.status}
              </span>
            </div>
            <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub className="h-3.5 w-3.5" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
          <h3 className="text-lg font-semibold text-foreground leading-tight mt-2">
            {project.title}
          </h3>
          <p className="text-xs text-primary font-mono">{project.tagline}</p>
        </CardHeader>
        <CardContent className="flex flex-col flex-1 gap-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Metrics */}
          {project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-2">
              {project.metrics.slice(0, compact ? 2 : 4).map((m) => (
                <div
                  key={m.label}
                  className="bg-muted/40 rounded-md px-2.5 py-1.5 text-center"
                >
                  <div className="text-base font-bold font-mono text-foreground">
                    {m.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {project.technologies.slice(0, compact ? 4 : 6).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs py-0">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > (compact ? 4 : 6) && (
              <Badge variant="secondary" className="text-xs py-0">
                +{project.technologies.length - (compact ? 4 : 6)}
              </Badge>
            )}
          </div>

          {/* Link */}
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-xs text-primary font-medium hover:gap-2 transition-all mt-1"
          >
            Read case study
            <ArrowRight className="h-3 w-3" />
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
