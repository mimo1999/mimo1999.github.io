import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Maitreya Mohapatra`,
    description: project.description,
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Back */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        All Projects
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary">{project.category}</Badge>
          <Badge variant="outline">{project.status}</Badge>
        </div>
        <h1 className="text-4xl font-bold mb-3">{project.title}</h1>
        <p className="text-xl text-primary font-mono mb-4">{project.tagline}</p>
        <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
        <div className="flex gap-3 mt-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm border border-border rounded-md px-3 py-1.5 hover:border-primary/40 transition-colors"
            >
              <FaGithub className="h-3.5 w-3.5" /> GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm border border-border rounded-md px-3 py-1.5 hover:border-primary/40 transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Metrics */}
      {project.metrics.length > 0 && (
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-4">Key Metrics</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-border bg-card p-4 text-center"
              >
                <div className="text-2xl font-bold font-mono text-primary mb-1">
                  {m.value}
                </div>
                <div className="text-xs text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Architecture */}
      {project.architecture && (
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-4">Architecture</h2>
          <div className="flex flex-wrap items-center gap-2">
            {project.architecture.map((layer, i) => (
              <div key={layer} className="flex items-center gap-2">
                <div className="px-3 py-1.5 rounded-md bg-muted border border-border text-sm font-mono">
                  {layer}
                </div>
                {i < project.architecture!.length - 1 && (
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Benchmarks */}
      {project.benchmarks && project.benchmarks.length > 0 && (
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-4">Benchmark Results</h2>
          <div className="rounded-xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="text-left px-4 py-2.5 text-xs font-mono text-muted-foreground uppercase tracking-wide">Dataset / Task</th>
                  <th className="text-right px-4 py-2.5 text-xs font-mono text-muted-foreground uppercase tracking-wide">Score</th>
                  <th className="text-right px-4 py-2.5 text-xs font-mono text-muted-foreground uppercase tracking-wide hidden sm:table-cell">Note</th>
                </tr>
              </thead>
              <tbody>
                {project.benchmarks.map((b, i) => (
                  <tr key={b.label} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="px-4 py-2.5 text-muted-foreground">{b.label}</td>
                    <td className="px-4 py-2.5 text-right font-mono font-bold text-primary">{b.value}</td>
                    <td className="px-4 py-2.5 text-right text-xs text-muted-foreground/60 hidden sm:table-cell">{b.note ?? ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Highlights */}
      {project.highlights.length > 0 && (
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-4">Highlights</h2>
          <ul className="space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold mb-4">Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
