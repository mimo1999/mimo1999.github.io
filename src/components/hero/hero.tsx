"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100dvh-4rem)] flex items-center overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-2.5 py-1 rounded-md border border-border text-muted-foreground text-xs font-mono mb-8"
          >
            Available full-time from Oct 2026
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6 text-balance"
          >
            Building AI systems that move from{" "}
            <span className="text-primary">research to production</span>
          </motion.h1>

          {/* Role tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {["AI Engineer", "MLOps", "Healthcare AI"].map((tag) => (
              <span
                key={tag}
                className="text-sm font-mono text-muted-foreground border border-border/60 rounded-md px-2.5 py-0.5"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl"
          >
            Developing production-ready machine learning systems, multimodal
            healthcare AI solutions, and scalable infrastructure for enterprise
            applications.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/projects"
              className={cn(buttonVariants({ size: "lg" }), "gap-2 font-medium")}
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="/resume.pdf"
              download
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "gap-2 font-medium"
              )}
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "gap-2 font-medium"
              )}
            >
              <Mail className="h-4 w-4" />
              Contact
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
