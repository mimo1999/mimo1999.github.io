"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, FlaskConical, GitMerge } from "lucide-react";
import { SectionHeader } from "./section-header";
import { Card, CardContent } from "@/components/ui/card";

const researchAreas = [
  {
    icon: BookOpen,
    title: "Masters Thesis",
    subtitle: "Clinical Voice Diagnostics",
    description:
      "Multimodal deep learning for voice pathology detection — fusing audio spectrograms with glottal area waveforms via cross-modal attention. Achieved 0.86 patient accuracy on AVPD benchmark.",
    tags: ["Multimodal", "TCN", "Healthcare AI"],
    href: "/research#thesis",
  },
  {
    icon: FlaskConical,
    title: "Publications",
    subtitle: "In Preparation",
    description:
      "Extending thesis findings for clinical NLP venue submission. Exploring generalization of cross-modal attention to other physiological signal pairs.",
    tags: ["Academic", "Peer Review", "2025"],
    href: "/research#publications",
  },
  {
    icon: GitMerge,
    title: "Reproduction Studies",
    subtitle: "CVPR 2024 Papers Reproduced",
    description:
      "Independent reproductions of CVPR 2024 papers — diffusion-based super-resolution, snapshot compressive imaging, and floorplan localization. Documented pipelines, results, and reproducibility gotchas.",
    tags: ["Reproducibility", "Computer Vision", "CVPR 2024"],
    href: "/research#reproductions",
  },
];

export function ResearchPreview() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-12">
          <SectionHeader
            eyebrow="Research"
            title="Academic Work"
            description="Thesis research, paper reproductions, and ongoing investigations in healthcare AI."
            className="mb-0"
          />
          <Link
            href="/research"
            className="hidden sm:inline-flex items-center gap-1 text-sm text-primary font-medium hover:gap-2 transition-all whitespace-nowrap"
          >
            Full research page
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {researchAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link href={area.href}>
                  <Card className="h-full hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group cursor-pointer">
                    <CardContent className="pt-6 space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-md bg-primary/10">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground font-mono">
                            {area.title}
                          </p>
                          <p className="text-sm font-semibold">{area.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {area.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {area.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="inline-flex items-center gap-1 text-xs text-primary font-medium group-hover:gap-2 transition-all">
                        Learn more
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
