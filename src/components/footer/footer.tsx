import Link from "next/link";

const footerLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/research", label: "Research" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

const external = [
  { href: "https://github.com/mimo1999", label: "GitHub" },
  { href: "https://www.linkedin.com/in/maitreya-mohapatra", label: "LinkedIn" },
  { href: "mailto:mimo.mohapatra@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 flex flex-col gap-6 md:flex-row md:items-baseline md:justify-between">
        <p className="text-sm text-muted-foreground">
          <span className="font-display font-semibold text-foreground">
            Maitreya Mohapatra
          </span>{" "}
          - Nuremberg, Germany
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {footerLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
          {external.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
