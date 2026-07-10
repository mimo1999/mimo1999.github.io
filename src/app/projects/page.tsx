import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/sections/section-header";

export const metadata = {
  title: "Projects — Maitreya Mohapatra",
  description:
    "Production ML systems, healthcare AI, and enterprise deployments.",
};

export default function ProjectsPage() {
  const categories = [
    { key: "healthcare-ai", label: "Healthcare AI" },
    { key: "genai", label: "Generative AI" },
    { key: "mlops", label: "MLOps" },
    { key: "infrastructure", label: "Infrastructure" },
  ] as const;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeader
        eyebrow="Portfolio"
        title="All Projects"
        description="From research prototypes to Fortune 500 enterprise deployments — systems that ship."
      />

      {categories.map((cat) => {
        const filtered = projects.filter((p) => p.category === cat.key);
        if (filtered.length === 0) return null;
        return (
          <div key={cat.key} className="mb-16">
            <h2 className="text-lg font-semibold mb-6 text-muted-foreground uppercase text-xs tracking-widest font-mono">
              {cat.label}
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {filtered.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
