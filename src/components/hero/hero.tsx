"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

const lines = ["AI engineer building", "agentic and RAG systems", "that hold up in production."];

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
      <h1 className="font-display text-[2.4rem] leading-[1.04] font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        {lines.map((line, i) => (
          <span key={line} className="block overflow-hidden pb-1">
            <motion.span
              className="block"
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.08 * i, ease }}
            >
              {i === 1 ? (
                <>
                  <span className="text-primary">agentic</span> and RAG systems
                </>
              ) : (
                line
              )}
            </motion.span>
          </span>
        ))}
      </h1>

      <div className="mt-10 grid gap-8 md:grid-cols-12">
        <p className="md:col-span-6 text-lg leading-relaxed text-muted-foreground">
          Three years building AI systems and deployments across fintech,
          healthcare and industry. M.Sc. AI at FAU, available from October 2026.
        </p>
        <div className="md:col-span-6 md:justify-self-end flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-sm bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform active:scale-[0.98] hover:bg-primary"
          >
            See projects
            <ArrowDown className="h-4 w-4" />
          </Link>
          <a
            href="/resume.pdf"
            download
            className="text-sm underline decoration-border hover:decoration-primary transition-colors"
          >
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
}
