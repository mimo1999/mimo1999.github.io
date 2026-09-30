import { Hero } from "@/components/hero/hero";
import { Showcase } from "@/components/sections/showcase";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ResearchPreview } from "@/components/sections/research-preview";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { SkillsSection } from "@/components/skills/skills-section";
import { ContactCTA } from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceTimeline />
      <Showcase />
      <FeaturedProjects />
      <ResearchPreview />
      <SkillsSection />
      <ContactCTA />
    </>
  );
}
