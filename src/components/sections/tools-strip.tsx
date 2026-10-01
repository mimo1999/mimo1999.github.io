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

export function ToolsStrip() {
  return (
    <section className="border-t border-border py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <ul
          aria-label="Tools and technologies"
          className="flex flex-wrap items-center justify-between gap-x-8 gap-y-6 text-muted-foreground"
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
