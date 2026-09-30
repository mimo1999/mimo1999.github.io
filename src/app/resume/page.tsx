import { Download } from "lucide-react";
import { experience, education, awards, patents } from "@/data/experience";
import { skillGroups, spokenLanguages } from "@/data/skills";

export const metadata = {
  title: "Resume - Maitreya Mohapatra",
  description: "Resume of Maitreya Mohapatra, AI Engineer.",
};

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-border py-8 md:grid-cols-[10rem_1fr] md:gap-8">
      <h2 className="font-display text-lg font-semibold tracking-tight">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-5 sm:px-8 pt-16 pb-24 md:pt-24">
      <header className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
            Maitreya Mohapatra
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            AI Engineer. Nuremberg, Germany.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            mimo.mohapatra@gmail.com · github.com/mimo1999 · linkedin.com/in/maitreya-mohapatra
          </p>
        </div>
        <a
          href="/resume.pdf"
          download
          className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform active:scale-[0.98] hover:bg-primary"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </a>
      </header>

      <Block title="Summary">
        <p className="leading-relaxed max-w-[68ch]">
          AI Engineer (3+ yrs) building production agentic/RAG systems and
          CI/CD-deployed ML services across fintech, healthcare, and industrial
          R&amp;D. Co-inventor on 2 US patents. Completing M.Sc. in Artificial
          Intelligence at FAU Erlangen-Nürnberg (graduating September 2026).
        </p>
      </Block>

      <Block title="Experience">
        <div className="space-y-8">
          {experience.map((exp) => (
            <div key={`${exp.company}-${exp.period}`}>
              <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                <h3 className="font-medium">
                  {exp.role}, {exp.company}
                </h3>
                <p className="text-sm text-muted-foreground tabular">
                  {exp.period}
                </p>
              </div>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                {exp.actions.map((action) => (
                  <li key={action} className="pl-4 -indent-4 leading-relaxed">
                    <span aria-hidden className="text-primary">
                      -{" "}
                    </span>
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Education">
        <div className="space-y-4">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="flex flex-col gap-1 sm:flex-row sm:justify-between"
            >
              <div>
                <h3 className="font-medium">{edu.institution}</h3>
                <p className="text-sm text-muted-foreground">{edu.degree}</p>
                {edu.thesis && (
                  <p className="text-sm text-muted-foreground">Thesis: {edu.thesis}</p>
                )}
              </div>
              <div className="text-sm text-muted-foreground sm:text-right">
                <p className="tabular">{edu.period}</p>
                <p>Grade {edu.gpa}</p>
              </div>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Skills">
        <dl className="space-y-3 text-sm">
          {skillGroups.map((group) => (
            <div key={group.category} className="grid gap-1 sm:grid-cols-[13rem_1fr]">
              <dt className="font-medium">{group.category}</dt>
              <dd className="text-muted-foreground leading-relaxed">
                {group.skills.join(", ")}
              </dd>
            </div>
          ))}
        </dl>
      </Block>

      <Block title="Languages">
        <p className="text-sm text-muted-foreground">
          {spokenLanguages.map((l) => `${l.language} (${l.level})`).join(", ")}
        </p>
      </Block>

      <Block title="Patents">
        <ul className="space-y-2 text-sm">
          {patents.map((patent) => (
            <li key={patent.number}>
              <span className="font-medium">{patent.title}</span>{" "}
              <span className="text-muted-foreground">
                {patent.number}, {patent.status}
              </span>
            </li>
          ))}
        </ul>
      </Block>

      <Block title="Awards">
        <ul className="space-y-2 text-sm">
          {awards.map((award) => (
            <li key={award.title}>
              <span className="font-medium">{award.title}</span>{" "}
              <span className="text-muted-foreground">
                {award.organization}, {award.year}
              </span>
            </li>
          ))}
        </ul>
      </Block>
    </div>
  );
}
