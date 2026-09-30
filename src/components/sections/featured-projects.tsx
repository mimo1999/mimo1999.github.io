import { Section } from "./section";
import { ProjectRow } from "@/components/projects/project-row";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <Section
      title="Selected work"
      href="/projects"
      linkLabel="All projects"
      id="work"
    >
      <div className="border-b border-border">
        {featured.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
