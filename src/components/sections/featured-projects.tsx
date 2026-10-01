import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects, type Project } from "@/data/projects";

const categoryLabels: Record<Project["category"], string> = {
  "healthcare-ai": "Healthcare AI",
  genai: "GenAI",
  mlops: "MLOps",
  infrastructure: "Data & infrastructure",
  "computer-vision": "Computer vision",
  fintech: "FinTech",
};

function Entry({ project }: { project: Project }) {
  const href = `/projects/${project.slug}`;
  return (
    <article className="group grid gap-6 border-t border-border py-10 md:grid-cols-12 md:gap-10 md:py-14">
      <div className="md:col-span-5 flex flex-col">
        <p className="text-sm text-muted-foreground">
          {categoryLabels[project.category]}
        </p>
        <h3 className="mt-2 font-display text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
          <Link href={href} className="hover:text-primary transition-colors">
            {project.title}
          </Link>
        </h3>
        <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
          {project.tagline}
        </p>
        <p className="mt-4 text-sm leading-relaxed">
          {project.technologies.slice(0, 5).join(", ")}
        </p>
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-1.5 text-sm underline decoration-border underline-offset-[0.35em] hover:decoration-primary transition-colors md:mt-auto"
        >
          View project
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="md:col-span-7">
        {project.image ? (
          <Link href={href} className="block overflow-hidden border border-border bg-muted">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              sizes="(min-width: 1152px) 660px, 100vw"
              className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </Link>
        ) : (
          <dl className="grid grid-cols-2 gap-x-8">
            {project.metrics.map((m) => (
              <div key={m.label} className="border-t border-border py-4">
                <dt className="text-sm text-muted-foreground">{m.label}</dt>
                <dd className="mt-1 font-display text-3xl font-semibold tabular">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </article>
  );
}

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section id="work" className="border-t border-border pt-16 md:pt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 flex items-baseline justify-between gap-6">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Selected work
          </h2>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            All projects
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="border-b border-border">
          {featured.map((project) => (
            <Entry key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
