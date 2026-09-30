import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type Project } from "@/data/projects";

const categoryLabels: Record<Project["category"], string> = {
  "healthcare-ai": "Healthcare AI",
  genai: "GenAI",
  mlops: "MLOps",
  infrastructure: "Data & infrastructure",
  "computer-vision": "Computer vision",
  fintech: "FinTech",
};

export function ProjectRow({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="row-link grid gap-2 px-4 py-7 pr-12 md:grid-cols-[1fr_17rem] md:gap-10"
    >
      <div>
        <h3 className="row-title font-display text-2xl md:text-4xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-1.5 max-w-xl text-sm md:text-base text-muted-foreground leading-relaxed">
          {project.tagline}
        </p>
      </div>
      <div className="text-sm leading-relaxed md:pt-1.5">
        <p>{categoryLabels[project.category]}</p>
        <p className="text-muted-foreground">
          {project.technologies.slice(0, 4).join(", ")}
        </p>
      </div>
      <ArrowUpRight className="row-arrow absolute right-4 top-9 h-6 w-6 text-primary" />
    </Link>
  );
}
