import { Section } from "@/components/sections/section";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <Section title="Tools and technologies">
      <dl className="border-b border-border">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="grid gap-1 border-t border-border py-5 md:grid-cols-[13rem_1fr] md:gap-8"
          >
            <dt className="font-medium">{group.category}</dt>
            <dd className="text-muted-foreground leading-relaxed">
              {group.skills.join(", ")}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
