import { Hero } from "@/components/hero/hero";
import { AchievementBanner } from "@/components/sections/achievement-banner";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ResearchPreview } from "@/components/sections/research-preview";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { SkillsSection } from "@/components/skills/skills-section";
import { ContactCTA } from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <AchievementBanner />
      <FeaturedProjects />
      <ResearchPreview />
      <ExperienceTimeline />
      <SkillsSection />
      <ContactCTA />
    </>
  );
}
