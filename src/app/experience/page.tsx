import { PageTitle, Section } from "@/components/sections/section";
import { experience, education, awards, patents } from "@/data/experience";

export const metadata = {
  title: "Experience - Maitreya Mohapatra",
  description: "Enterprise AI and MLOps engineering across healthcare and fintech.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageTitle
        title="Experience"
        lead="Enterprise AI and MLOps engineering across healthcare, fintech and industrial R&D."
      />

      <Section title="Work">
        <div className="border-b border-border">
          {experience.map((exp) => (
            <article
              key={`${exp.company}-${exp.period}`}
              className="grid gap-4 border-t border-border py-8 md:grid-cols-[11rem_1fr] md:gap-8"
            >
              <div className="text-sm text-muted-foreground">
                <p className="tabular">{exp.period}</p>
                <p>{exp.location}</p>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {exp.role}
                </h3>
                <p className="text-muted-foreground">{exp.company}</p>
                <p className="mt-4 leading-relaxed max-w-[68ch]">{exp.description}</p>
                <ul className="mt-4 space-y-2 text-muted-foreground max-w-[68ch]">
                  {exp.actions.map((action) => (
                    <li key={action} className="pl-4 -indent-4 leading-relaxed">
                      <span aria-hidden className="text-primary">
                        -{" "}
                      </span>
                      {action}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm">
                  <span className="text-muted-foreground">Results: </span>
                  {exp.results.join("; ")}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {exp.technologies.join(", ")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Education">
        <div className="border-b border-border">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="grid gap-2 border-t border-border py-6 md:grid-cols-[1fr_15rem] md:gap-8"
            >
              <div>
                <h3 className="font-medium">{edu.institution}</h3>
                <p className="text-muted-foreground">{edu.degree}</p>
                {edu.thesis && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    Thesis: {edu.thesis}
                  </p>
                )}
              </div>
              <div className="text-sm text-muted-foreground md:text-right">
                <p className="tabular">{edu.period}</p>
                <p>{edu.location}</p>
                <p>Grade {edu.gpa}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Patents" id="patents">
        <div className="border-b border-border">
          {patents.map((patent) => (
            <div
              key={patent.title}
              className="grid gap-2 border-t border-border py-6 md:grid-cols-[1fr_15rem] md:gap-8"
            >
              <div>
                <h3 className="font-medium">{patent.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground max-w-[60ch]">
                  {patent.description}
                </p>
              </div>
              <p className="text-sm text-muted-foreground md:text-right">
                <a
                  href={patent.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-border hover:decoration-primary transition-colors"
                >
                  {patent.number}
                </a>
                <br />
                {patent.status === "granted" ? "Granted" : "Pending"}, {patent.year}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Awards">
        <div className="border-b border-border">
          {awards.map((award) => (
            <div
              key={award.title}
              className="grid gap-2 border-t border-border py-6 md:grid-cols-[1fr_15rem] md:gap-8"
            >
              <div>
                <h3 className="font-medium">{award.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground max-w-[60ch]">
                  {award.description}
                </p>
              </div>
              <p className="text-sm text-muted-foreground md:text-right">
                {award.organization}
                <br />
                {award.year}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
