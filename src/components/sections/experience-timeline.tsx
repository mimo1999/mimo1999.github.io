import { Section } from "./section";
import { experience } from "@/data/experience";
import { formatDuration } from "@/lib/duration";

export function ExperienceTimeline() {
  return (
    <Section title="Experience" href="/experience" linkLabel="Full experience">
      <ol className="border-b border-border">
        {experience.map((exp) => (
          <li
            key={`${exp.company}-${exp.role}`}
            className="grid gap-1 border-t border-border py-5 md:grid-cols-[9.5rem_1fr_20rem] md:gap-8"
          >
            <p className="text-sm text-muted-foreground tabular" title={exp.period} suppressHydrationWarning>
              {formatDuration(exp)}
            </p>
            <div>
              <h3 className="font-medium">{exp.role}</h3>
              <p className="text-sm text-muted-foreground">
                {exp.company}, {exp.location}
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {exp.stackSummary}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
