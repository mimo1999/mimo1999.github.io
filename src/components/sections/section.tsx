import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionProps {
  title: string;
  id?: string;
  href?: string;
  linkLabel?: string;
  children: React.ReactNode;
}

/** Heading in the left rail, content on the right. No kicker, no card. */
export function Section({ title, id, href, linkLabel, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-border py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid gap-x-10 gap-y-8 md:grid-cols-12">
        <div className="md:col-span-3">
          <h2 className="font-display text-2xl font-semibold tracking-tight md:sticky md:top-24">
            {title}
          </h2>
          {href && (
            <Link
              href={href}
              className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {linkLabel ?? "See all"}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
        <div className="md:col-span-9">{children}</div>
      </div>
    </section>
  );
}

interface PageTitleProps {
  title: string;
  lead?: string;
}

export function PageTitle({ title, lead }: PageTitleProps) {
  return (
    <header className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-12 md:pt-24 md:pb-16">
      <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02]">
        {title}
      </h1>
      {lead && (
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          {lead}
        </p>
      )}
    </header>
  );
}
