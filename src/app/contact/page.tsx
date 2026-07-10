"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SectionHeader } from "@/components/sections/section-header";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mimo.mohapatra@gmail.com",
    href: "mailto:mimo.mohapatra@gmail.com",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/mimo1999",
    href: "https://github.com/mimo1999",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/maitreya-mohapatra",
    href: "https://linkedin.com/in/maitreya-mohapatra",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nuremberg, Germany · Available Aug 2026",
    href: null,
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:mimo.mohapatra@gmail.com?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeader
        eyebrow="Get in Touch"
        title="Contact"
        description="Open to AI/ML full-time roles, research collaborations, and consulting."
      />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left — info */}
        <div className="space-y-8">
          <div>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m actively looking for AI Engineer and MLOps roles where I can work on
              meaningful problems — healthcare AI, enterprise ML systems, and production
              infrastructure are my sweet spots.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              If you&apos;re building something ambitious, let&apos;s talk.
            </p>
          </div>

          <div className="space-y-3">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="p-2 rounded-md bg-primary/10 shrink-0">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="text-sm font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="rounded-xl border border-border/60 bg-muted/20 p-5">
            <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">
              Response Time
            </p>
            <p className="text-sm text-muted-foreground">
              I typically respond within 24–48 hours. For urgent inquiries,
              LinkedIn messages tend to be fastest.
            </p>
          </div>
        </div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {submitted ? (
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-10 text-center h-full flex flex-col items-center justify-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Send className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Message Sent!</h3>
              <p className="text-sm text-muted-foreground">
                Your email client has been opened. I&apos;ll get back to you soon.
              </p>
              <Button variant="outline" onClick={() => setSubmitted(false)}>
                Send Another
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-xl border border-border/60 bg-card p-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, name: e.target.value }))
                    }
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, email: e.target.value }))
                    }
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, subject: e.target.value }))
                  }
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">
                  Message
                </label>
                <textarea
                  required
                  rows={6}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, message: e.target.value }))
                  }
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  placeholder="Tell me about the role, project, or collaboration..."
                />
              </div>
              <Button type="submit" className="w-full gap-2">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
