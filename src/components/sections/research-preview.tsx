import Link from "next/link";
import { Section } from "./section";

export function ResearchPreview() {
  return (
    <Section title="Research" href="/research" linkLabel="All research">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
            Multimodal detection of laryngeal dystonia biomarkers
          </h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Master&apos;s thesis. A context-window TCN fuses audio with glottal
            area waveform through bidirectional cross-modal attention and
            reaches 0.86 patient-level accuracy. Manuscript submitted to the
            Journal of Voice.
          </p>
          <Link
            href="/research#thesis"
            className="mt-4 inline-block text-sm underline decoration-border hover:decoration-primary transition-colors"
          >
            Read the abstract
          </Link>
        </div>
        <div className="md:col-span-5 space-y-8">
          <div className="border-t border-border pt-5">
            <h3 className="font-medium">Interpretable ML for clinical risk</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              10 model families on MIMIC-IV chemotherapy cohorts. An Explainable
              Boosting Machine reaches AUROC 0.8262 against CatBoost&apos;s
              0.8180 on identical features.
            </p>
          </div>
          <div className="border-t border-border pt-5">
            <h3 className="font-medium">Reproductions of 8 CVPR/MICCAI 2024 papers</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Detection, super-resolution, diffusion, point clouds and medical
              VLMs, each rebuilt on a single free-tier T4 GPU.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
