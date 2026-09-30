import Link from "next/link";

export function ContactCTA() {
  return (
    <section className="bg-primary text-primary-foreground py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="font-display text-4xl md:text-7xl font-semibold tracking-tight leading-[1.02] max-w-4xl">
          Open to Software Engineering roles (in Data and AI) from October 2026.
        </h2>
        <a
          href="mailto:mimo.mohapatra@gmail.com"
          className="mt-8 inline-block font-display text-2xl md:text-4xl underline decoration-current decoration-2 underline-offset-[0.3em] hover:opacity-80 transition-opacity break-all"
        >
          mimo.mohapatra@gmail.com
        </a>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <a
            href="https://github.com/mimo1999"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-current/40 hover:decoration-current transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/maitreya-mohapatra"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-current/40 hover:decoration-current transition-colors"
          >
            LinkedIn
          </a>
          <Link href="/contact" className="underline decoration-current/40 hover:decoration-current transition-colors">
            Contact form
          </Link>
        </div>
      </div>
    </section>
  );
}
