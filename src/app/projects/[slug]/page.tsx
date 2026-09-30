import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} - Maitreya Mohapatra`,
    description: project.description,
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

const statusLabels = {
  production: "In production",
  research: "Research",
  "open-source": "Open source",
} as const;

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-6xl px-5 sm:px-8 pt-12 pb-24">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Projects
      </Link>

      <header className="mt-10 mb-14 md:mb-20">
        <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02]">
          {project.title}
        </h1>
        <p className="mt-5 max-w-3xl text-xl md:text-2xl text-muted-foreground leading-snug">
          {project.tagline}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <span className="text-muted-foreground">{statusLabels[project.status]}</span>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 underline decoration-border hover:decoration-primary transition-colors"
            >
              <FaGithub className="h-4 w-4" /> Source
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 underline decoration-border hover:decoration-primary transition-colors"
            >
              Live demo <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </header>

      {project.image && (
        <figure className="mb-16 md:mb-24 -mx-5 sm:mx-0">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            priority
            sizes="(min-width: 1152px) 1088px, 100vw"
            className="w-full h-auto border-y sm:border border-border"
          />
        </figure>
      )}

      <div className="grid gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-8 space-y-14">
          <p className="text-lg leading-relaxed max-w-[68ch]">{project.longDescription}</p>

          {project.highlights.length > 0 && (
            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight mb-5">
                What it does
              </h2>
              <ul className="border-b border-border">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="border-t border-border py-3.5 text-muted-foreground leading-relaxed"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.architecture && (
            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight mb-5">
                Pipeline
              </h2>
              <ol className="border-b border-border">
                {project.architecture.map((layer, i) => (
                  <li
                    key={layer}
                    className="grid grid-cols-[2.5rem_1fr] border-t border-border py-3.5"
                  >
                    <span className="text-muted-foreground tabular">{i + 1}</span>
                    <span>{layer}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {project.benchmarks && project.benchmarks.length > 0 && (
            <section>
              <h2 className="font-display text-2xl font-semibold tracking-tight mb-5">
                Results
              </h2>
              <table className="w-full text-left">
                <tbody>
                  {project.benchmarks.map((b) => (
                    <tr key={b.label} className="border-t border-border align-top">
                      <th scope="row" className="py-3.5 pr-4 font-normal">
                        {b.label}
                        {b.note && (
                          <span className="mt-0.5 block text-sm text-muted-foreground">
                            {b.note}
                          </span>
                        )}
                      </th>
                      <td className="py-3.5 text-right font-display text-lg font-semibold whitespace-nowrap">
                        {b.value}
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t border-border" aria-hidden>
                    <td colSpan={2} />
                  </tr>
                </tbody>
              </table>
            </section>
          )}
        </div>

        <aside className="md:col-span-4">
          <div className="md:sticky md:top-24 space-y-10">
            {project.metrics.length > 0 && (
              <dl>
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="flex items-baseline justify-between gap-4 border-t border-border py-3"
                  >
                    <dt className="text-sm text-muted-foreground">{m.label}</dt>
                    <dd className="font-display text-xl font-semibold tabular">
                      {m.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
            <div className="border-t border-border pt-4">
              <h2 className="text-sm text-muted-foreground mb-2">Stack</h2>
              <p className="leading-relaxed">{project.technologies.join(", ")}</p>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
