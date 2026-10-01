import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./section";
import { patents } from "@/data/experience";
import { publications } from "@/data/publications";

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm underline decoration-border underline-offset-[0.35em] hover:decoration-primary transition-colors"
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5" />
    </a>
  );
}

export function PatentsPublications() {
  return (
    <Section title="Patents and publications" href="/experience#patents" linkLabel="Details">
      <div className="space-y-14">
        <div>
          <h3 className="mb-2 text-sm text-muted-foreground">Patents</h3>
          <ul className="border-b border-border">
            {patents.map((patent) => (
              <li
                key={patent.number}
                className="grid gap-3 border-t border-border py-6 md:grid-cols-[1fr_15rem] md:gap-10"
              >
                <div>
                  <h4 className="font-display text-xl font-semibold tracking-tight leading-snug max-w-[34ch]">
                    {patent.title}
                  </h4>
                  <p className="mt-3 max-w-[62ch] text-sm text-muted-foreground leading-relaxed">
                    {patent.description}
                  </p>
                  <div className="mt-4">
                    <ExternalLink href={patent.url}>View patent record</ExternalLink>
                  </div>
                </div>
                <div className="text-sm md:text-right">
                  <p className="font-medium">{patent.number}</p>
                  <p className="text-muted-foreground">
                    {patent.status === "granted" ? "Granted" : "Pending"}
                  </p>
                  <p className="mt-1 text-muted-foreground">{patent.assignee}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-sm text-muted-foreground">Publications</h3>
          <ul className="border-b border-border">
            {publications.filter((pub) => pub.type === "thesis").map((pub) => (
              <li
                key={pub.title}
                className="grid gap-3 border-t border-border py-6 md:grid-cols-[1fr_15rem] md:gap-10"
              >
                <div>
                  <h4 className="font-display text-xl font-semibold tracking-tight leading-snug max-w-[34ch]">
                    {pub.title}
                  </h4>
                  <p className="mt-3 max-w-[62ch] text-sm text-muted-foreground leading-relaxed">
                    {pub.authors}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                    <Link
                      href={pub.type === "thesis" ? "/research#thesis" : "/research#projects"}
                      className="text-sm underline decoration-border underline-offset-[0.35em] hover:decoration-primary transition-colors"
                    >
                      Abstract
                    </Link>
                    {pub.arxiv && <ExternalLink href={pub.arxiv}>Code</ExternalLink>}
                  </div>
                </div>
                <div className="text-sm md:text-right">
                  <p className="font-medium">{pub.type === "thesis" ? "Master's thesis" : "Research paper"}</p>
                  <p className="text-muted-foreground">
                    {pub.status === "submitted" ? "Submitted" : "Published"}, {pub.year}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
