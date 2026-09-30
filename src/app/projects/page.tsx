import { ProjectRow } from "@/components/projects/project-row";
import { PageTitle } from "@/components/sections/section";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects - Maitreya Mohapatra",
  description:
    "Agentic and RAG systems, healthcare AI, computer vision and data platforms.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageTitle
        title="Projects"
        lead="Agentic and RAG systems, healthcare AI, computer vision and data platforms."
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pb-24">
        <div className="border-b border-border">
          {projects.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}
