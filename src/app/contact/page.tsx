"use client";

import { useState } from "react";
import { PageTitle } from "@/components/sections/section";

const contactInfo = [
  { label: "Email", value: "mimo.mohapatra@gmail.com", href: "mailto:mimo.mohapatra@gmail.com" },
  { label: "GitHub", value: "github.com/mimo1999", href: "https://github.com/mimo1999" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/maitreya-mohapatra",
    href: "https://www.linkedin.com/in/maitreya-mohapatra",
  },
  { label: "Location", value: "Nuremberg, Germany", href: null },
  { label: "Available", value: "Full-time from October 2026", href: null },
];

const field =
  "w-full border-0 border-b border-input bg-transparent px-0 py-2.5 text-base placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-0 transition-colors";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const set =
    (key: keyof typeof formState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormState((s) => ({ ...s, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:mimo.mohapatra@gmail.com?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <>
      <PageTitle
        title="Contact"
        lead="Open to AI engineer and MLOps roles, research collaborations and consulting."
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pb-24 grid gap-14 md:grid-cols-12 md:gap-10">
        <dl className="md:col-span-5 self-start">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-[6rem_1fr] gap-4 border-t border-border py-3.5"
            >
              <dt className="text-sm text-muted-foreground">{item.label}</dt>
              <dd className="break-words">
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="underline decoration-border hover:decoration-primary transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
          <div className="border-t border-border" />
        </dl>

        <div className="md:col-span-7">
          {submitted ? (
            <div role="status" className="border-t border-border pt-6">
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                Your email client has opened.
              </h2>
              <p className="mt-2 text-muted-foreground">
                Send the drafted message from there and I will reply within a couple of days.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm underline decoration-border hover:decoration-primary transition-colors"
              >
                Write another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm text-muted-foreground">Name</span>
                  <input type="text" required autoComplete="name" value={formState.name} onChange={set("name")} className={field} />
                </label>
                <label className="block">
                  <span className="text-sm text-muted-foreground">Email</span>
                  <input type="email" required autoComplete="email" value={formState.email} onChange={set("email")} className={field} />
                </label>
              </div>
              <label className="block">
                <span className="text-sm text-muted-foreground">Subject</span>
                <input type="text" required value={formState.subject} onChange={set("subject")} className={field} />
              </label>
              <label className="block">
                <span className="text-sm text-muted-foreground">Message</span>
                <textarea required rows={6} value={formState.message} onChange={set("message")} className={`${field} resize-none`} />
              </label>
              <button
                type="submit"
                className="rounded-sm bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform active:scale-[0.98] hover:bg-primary"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
