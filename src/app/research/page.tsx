import { PageTitle, Section } from "@/components/sections/section";
import { publications, reproductionStudies } from "@/data/publications";

export const metadata = {
  title: "Research - Maitreya Mohapatra",
  description:
    "Thesis research on multimodal clinical AI, interpretable ML for risk prediction, and paper reproductions.",
};

function Publication({ pub }: { pub: (typeof publications)[number] }) {
  return (
    <article className="border-t border-border py-8">
      <h3 className="font-display text-2xl font-semibold tracking-tight leading-tight">
        {pub.title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        {pub.authors}. {pub.venue}, {pub.year}. {pub.status === "submitted" ? "Submitted." : "Published."}
      </p>
      <p className="mt-4 leading-relaxed max-w-[68ch] text-muted-foreground">
        {pub.abstract}
      </p>
    </article>
  );
}

export default function ResearchPage() {
  return (
    <>
      <PageTitle
        title="Research"
        lead="Thesis research on multimodal clinical AI, interpretable ML for risk prediction, and independent reproductions of published results."
      />

      <Section title="Master's thesis" id="thesis">
        <div className="border-b border-border">
          {publications
            .filter((p) => p.type === "thesis")
            .map((pub) => (
              <Publication key={pub.title} pub={pub} />
            ))}
        </div>
      </Section>

      <Section title="Research projects" id="projects">
        <div className="border-b border-border">
          {publications
            .filter((p) => p.type !== "thesis")
            .map((pub) => (
              <Publication key={pub.title} pub={pub} />
            ))}
        </div>
      </Section>

      <Section title="Reproductions" id="reproductions">
        <p className="mb-8 max-w-[62ch] text-muted-foreground leading-relaxed">
          Independent reproductions of 8 CVPR and MICCAI 2024 papers across six
          research areas, each rebuilt end-to-end on a single free-tier T4 GPU.
        </p>
        <div className="border-b border-border">
          {reproductionStudies.map((study) => (
            <article
              key={study.paper}
              className="grid gap-4 border-t border-border py-8 md:grid-cols-[1fr_16rem] md:gap-10"
            >
              <div>
                <h3 className="font-medium leading-snug">{study.paper}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {study.authors}, {study.venue} {study.year}
                </p>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-[62ch]">
                  {study.note}
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {study.insights.map((insight) => (
                    <li key={insight} className="pl-4 -indent-4">
                      <span aria-hidden className="text-primary">
                        -{" "}
                      </span>
                      {insight}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:text-right">
                <p className="text-sm text-muted-foreground">{study.metric}</p>
                <p className="mt-1 font-display text-lg font-semibold tabular">
                  {study.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
