"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/sections/section-header";
import { publications, reproductionStudies } from "@/data/publications";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FileText, GitMerge } from "lucide-react";

export default function ResearchPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeader
        eyebrow="Research"
        title="Academic Work"
        description="Thesis research, paper reproductions, and ongoing investigation in healthcare AI."
      />

      {/* Thesis */}
      <section id="thesis" className="mb-16">
        <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">
          Masters Thesis
        </h2>
        {publications
          .filter((p) => p.type === "thesis")
          .map((pub, i) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-primary/20 bg-primary/5 p-6"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-md bg-primary/10 shrink-0">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-tight mb-1">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {pub.authors} · {pub.venue} · {pub.year}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {pub.abstract}
              </p>
              <div className="flex gap-2">
                <Badge variant="outline">{pub.type}</Badge>
                <Badge
                  variant="secondary"
                  className={
                    pub.status === "published"
                      ? "bg-green-500/10 text-green-600 border-green-500/20"
                      : ""
                  }
                >
                  {pub.status}
                </Badge>
              </div>
            </motion.div>
          ))}
      </section>

      <Separator className="mb-16" />

      {/* Publications */}
      <section id="publications" className="mb-16">
        <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">
          Publications
        </h2>
        {publications.filter((p) => p.type !== "thesis").length === 0 ? (
          <div className="rounded-xl border border-dashed border-border/60 p-10 text-center">
            <FileText className="h-8 w-8 text-muted-foreground/30 mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">
              Papers in preparation — extending thesis work for conference submission.
            </p>
          </div>
        ) : null}
      </section>

      <Separator className="mb-16" />

      {/* Reproduction Studies */}
      <section id="reproductions">
        <h2 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
          Reproduction Studies
        </h2>
        <p className="text-sm text-muted-foreground mb-8">
          Independent reproductions of CVPR/MICCAI 2024 papers — reconstructing pipelines, validating metrics, and documenting gotchas.
        </p>
        <div className="space-y-6">
          {reproductionStudies.map((study, i) => (
            <motion.div
              key={study.paper}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-border/60 bg-card overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start gap-3 mb-5">
                  <div className="p-2 rounded-md bg-muted shrink-0">
                    <GitMerge className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{study.paper}</h3>
                    <p className="text-xs text-muted-foreground">
                      {study.authors} · {study.venue} · {study.year}
                    </p>
                  </div>
                </div>

                {/* Metric result */}
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-muted/40 rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Metric</p>
                    <p className="text-sm font-mono font-bold">{study.metric}</p>
                  </div>
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 text-center">
                    <p className="text-xs text-primary mb-1">Reproduced</p>
                    <p className="text-sm font-mono font-bold">{study.result}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-5 italic">
                  {study.note}
                </p>

                {/* Insights */}
                <div>
                  <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">
                    Key Insights
                  </p>
                  <ul className="space-y-1.5">
                    {study.insights.map((insight) => (
                      <li
                        key={insight}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                        {insight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
