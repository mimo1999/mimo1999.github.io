import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug } from "@/data/projects";
import {
  SiPython,
  SiPytorch,
  SiLangchain,
  SiHuggingface,
  SiOllama,
  SiFastapi,
  SiPostgresql,
  SiNeo4J,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiMlflow,
  SiSnowflake,
  SiDatabricks,
  SiReact,
} from "react-icons/si";

const tools = [
  { name: "Python", Icon: SiPython },
  { name: "PyTorch", Icon: SiPytorch },
  { name: "LangChain", Icon: SiLangchain },
  { name: "Hugging Face", Icon: SiHuggingface },
  { name: "Ollama", Icon: SiOllama },
  { name: "FastAPI", Icon: SiFastapi },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Neo4j", Icon: SiNeo4J },
  { name: "Docker", Icon: SiDocker },
  { name: "Kubernetes", Icon: SiKubernetes },
  { name: "Terraform", Icon: SiTerraform },
  { name: "GitHub Actions", Icon: SiGithubactions },
  { name: "MLflow", Icon: SiMlflow },
  { name: "Snowflake", Icon: SiSnowflake },
  { name: "Databricks", Icon: SiDatabricks },
  { name: "React", Icon: SiReact },
];

function Shot({ slug, className }: { slug: string; className?: string }) {
  const p = getProjectBySlug(slug);
  if (!p?.image) return null;
  return (
    <Link href={`/projects/${p.slug}`} className={`group block ${className ?? ""}`}>
      <div className="overflow-hidden border border-border bg-muted">
        <Image
          src={p.image.src}
          alt={p.image.alt}
          width={p.image.width}
          height={p.image.height}
          sizes="(min-width: 1152px) 640px, 100vw"
          className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.025]"
        />
      </div>
      <p className="mt-3 flex items-baseline gap-3">
        <span className="font-display text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
          {p.title}
        </span>
        <span className="text-sm text-muted-foreground">
          {p.technologies.slice(0, 3).join(", ")}
        </span>
      </p>
    </Link>
  );
}

export function Showcase() {
  return (
    <section className="border-t border-border pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-12">
          <Shot slug="clinical-voice-diagnostics" className="md:col-span-7" />
          <Shot slug="flowify" className="md:col-span-5 md:mt-28" />
          <Shot slug="geopulse" className="md:col-span-5" />
          <Shot slug="research-swarm" className="md:col-span-7 md:mt-12" />
          <Shot slug="clinical-rag" className="md:col-span-6 md:col-start-4" />
        </div>

        <ul
          aria-label="Tools and technologies"
          className="mt-20 md:mt-28 flex flex-wrap items-center justify-between gap-x-8 gap-y-6 text-muted-foreground"
        >
          {tools.map(({ name, Icon }) => (
            <li key={name} title={name}>
              <Icon aria-label={name} className="h-7 w-7 transition-colors hover:text-foreground" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
