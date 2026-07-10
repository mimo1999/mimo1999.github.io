"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ContactCTA() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl border border-primary/20 bg-primary/5 p-12 text-center overflow-hidden"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />

          <p className="text-xs font-mono text-primary uppercase tracking-widest mb-4">
            Let&apos;s Work Together
          </p>
          <h2 className="text-3xl font-bold mb-4">
            Open to AI/ML Roles & Collaboration
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
            Available full-time from August 2026. Looking for AI engineer and
            MLOps positions. Also open to research collaborations in healthcare
            AI and multi-agent systems.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "gap-2")}
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="mailto:mimo.mohapatra@gmail.com"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
          </div>

          <div className="flex justify-center gap-6 mt-8 pt-8 border-t border-border/30">
            <a
              href="https://github.com/mimo1999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaGithub className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/maitreya-mohapatra"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaLinkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
