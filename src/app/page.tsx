import { Hero } from "@/components/hero/hero";
import { ToolsStrip } from "@/components/sections/tools-strip";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { PatentsPublications } from "@/components/sections/patents-publications";
import { ResearchPreview } from "@/components/sections/research-preview";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { SkillsSection } from "@/components/skills/skills-section";
import { ContactCTA } from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceTimeline />
      <ToolsStrip />
      <FeaturedProjects />
      <PatentsPublications />
      <ResearchPreview />
      <SkillsSection />
      <ContactCTA />
    </>
  );
}
