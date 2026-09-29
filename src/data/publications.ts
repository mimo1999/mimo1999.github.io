export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  abstract: string;
  type: "thesis" | "paper" | "preprint";
  status: "published" | "submitted" | "in-progress";
  pdf?: string;
  arxiv?: string;
  citation?: string;
}

export interface ReproductionStudy {
  paper: string;
  authors: string;
  year: string;
  venue: string;
  metric: string;
  result: string;
  note: string;
  insights: string[];
  code?: string;
}

export const publications: Publication[] = [
  {
    title:
      "Multimodal Time-Resolved Detection of Adductor Laryngeal Dystonia Biomarkers",
    authors: "Mohapatra, Döllinger, Patel",
    venue: "Journal of Voice (submitted) - FAU Erlangen-Nürnberg × Indiana University Bloomington",
    year: "2026",
    abstract:
      "Reframes adductor laryngeal dystonia detection from binary utterance-level classification to supervised multimodal sequence labeling. A context-window Temporal Convolutional Network with symmetric bidirectional cross-modal attention and learned gated fusion combines acoustic features with high-speed-videoendoscopy-derived glottal area waveform, emitting frame-level onset/offset events for four clinically defined biomarkers at their own temporal scales. Reaches F1 0.76, 0.60 IoU / 0.61 recall on event-level localization, and 0.86 patient-level diagnostic accuracy, with the model integrated into a Python-based clinical application. The TCN beats BiLSTM, CatBoost, SVM, and logistic-regression baselines on all four biomarkers in the harder connected-speech condition. Introduces Effective IoU (conditional IoU × recall) to demonstrate the bottleneck is event recall rather than boundary localization, and rules out data scarcity as the sole explanation via feature-separability, error-taxonomy, and learning-curve analyses. Funded by Indiana CTSI / NIH #UL1TR002529.",
    type: "thesis",
    status: "submitted",
    arxiv: "https://github.com/mimo1999/asd_detector",
  },
  {
    title:
      "Interpretable GAMs for Chemotherapy Complication Prediction",
    authors: "Maitreya Mohapatra · supervised by Dr. Farnaz Rahimi",
    venue: "Project Biomedical Network Science - Biomedical Network Science Lab, FAU Erlangen-Nürnberg",
    year: "2026",
    abstract:
      "Tests whether inherently interpretable Generalized Additive Models can match black-box tree ensembles on longitudinal EHR risk prediction (MIMIC-IV, neutropenic fever, ~5% prevalence). Benchmarks 10 model families × 7 feature-set sizes × 6 selection methods under 5-fold CV. On raw high-dimensional features interpretability costs ~4 AUROC points; after feature selection that reverses - an Explainable Boosting Machine reaches AUROC 0.8262 ± 0.0281 against CatBoost's 0.8180 on identical features, effectively matching CatBoost's full 4,502-feature performance while exposing every prediction as a sum of inspectable shape functions. Reports a negative result as a finding: three proposed architectures (HE-EBM, IG-EBM, SSTGAM) did not beat the baseline EBM, establishing through ablation that feature representation drives performance more than architectural complexity. Ships `sstgam`, a standalone MIT-licensed pip package archived at Zenodo.",
    type: "paper",
    status: "submitted",
    arxiv: "https://github.com/mimo1999/sstgam",
  },
];

export const reproductionStudies: ReproductionStudy[] = [
  {
    paper:
      "DPU: Dual Prior Unfolding for Snapshot Compressive Imaging",
    authors: "Zhang et al.",
    year: "2024",
    venue: "CVPR",
    metric: "Average PSNR (5-stage / 9-stage)",
    result: "53.66 → held-out re-run",
    note: "The standout finding. The initial run reproduced at PSNR values that were implausibly good (53.66 dB for the 5-stage model, 54.93 for the 9-stage). Rather than reporting a favourable number, it was flagged as suspected test-set contamination and re-run on the last 9 scenes held out from the suspect split - the corrected numbers align with the paper, and the 9-stage model outperforms the 5-stage in every scene, confirming the paper's actual claim.",
    insights: [
      "Noticed the result was implausibly good, formed a hypothesis about why, and re-ran to test it - a reproducibility study that only flags results that are too low is doing half the job",
      "Contamination is inferred, not confirmed: the evidence is strong but circumstantial, and the authors' exact split was never obtained",
      "Reproduced the Swin Transformer deep-unfolding stages end-to-end on a single T4",
    ],
  },
  {
    paper:
      "Hybrid Proposal Refiner: Revisiting DETR from the Faster R-CNN Perspective",
    authors: "Zhao et al.",
    year: "2024",
    venue: "CVPR",
    metric: "COCO AP / AP50 / AP75",
    result: "Exact match, 5 configs",
    note: "Table 3 reproduced exactly across five detector configurations on COCO - Deformable-DETR, DINO, Align-DETR, and two DDQ variants. The cleanest reproduction in the set.",
    insights: [
      "Reproduced AP, AP50, AP75, and AP-S/M/L across five DETR-family detector configurations without deviation",
      "Best config (align_detr-lsj_900q_4scale_3x_r50) reproduced at AP 55.2 / AP50 73.0",
    ],
  },
  {
    paper:
      "CDFormer: When Degradation Prediction Embraces Diffusion Model for Blind Image Super-Resolution",
    authors: "Liu et al.",
    year: "2024",
    venue: "CVPR",
    metric: "PSNR / SSIM (Set5 ×2 / Urban100 ×4)",
    result: "38.289 / 0.9617 · 27.091 / 0.8163",
    note: "Closest match in the set. Full clean run across Set5, Set14, Urban100, and BSDS100 at ×2/×3/×4, with the expected monotonic degradation as scale increases - sharpest on Urban100's complex textures.",
    insights: [
      "Reproduced the diffusion-prior degradation embedding pipeline for blind super-resolution end-to-end",
      "Evaluated across 4 standard SR benchmarks at 3 upscaling factors",
    ],
  },
  {
    paper: "F3Loc: Fusion and Filtering for Floorplan Localization",
    authors: "Chen et al.",
    year: "2024",
    venue: "CVPR",
    metric: "Recall @ 1m (Gibson-f)",
    result: "0.507, all variants within 5%",
    note: "All four model variants on both Gibson subsets landed within a 5% margin of published values, despite running on a test subset for compute reasons. The reproduction preserves the paper's central claim: full complementary fusion beats every ablation on both datasets.",
    insights: [
      "Reproduced the probabilistic filtering + multi-view geometry pipeline across 4 network variants × 2 datasets",
      "Test set was intentionally trimmed for tractable runtime, so recall figures sit on a smaller sample than the paper's - disclosed rather than glossed",
      "Rated 25 (hard) a priori, actually 10 - the difficulty estimates turned out wrong in both directions",
    ],
  },
  {
    paper: "RepKPU: Point Cloud Upsampling with Kernel Point Representation",
    authors: "Rong et al.",
    year: "2024",
    venue: "CVPR",
    metric: "Chamfer Distance (PU-GAN 4× / 16×)",
    result: "0.2477 / 0.1070 - partial",
    note: "Chamfer Distance reproduced, but Point-to-Surface and Hausdorff Distance were not reproducible at all - they depend on a separate evaluation repository the authors don't ship. Reported as not reproducible rather than quietly dropped from the table.",
    insights: [
      "One of three reported metrics reproduced; the two that failed are named along with the reason",
      "Required patching the `pointops` CUDA extension to the current ATen API - the released code uses deprecated `THC/THC.h`",
    ],
  },
  {
    paper:
      "Learned Representation-Guided Diffusion Models for Large-Image Generation",
    authors: "Graikos et al.",
    year: "2024",
    venue: "CVPR",
    metric: "Patch FID (BRCA / CRC 20×)",
    result: "75.08 / 61.36 vs published 6-10",
    note: "Did not reproduce. Diagnosed as a sample-size and data-subset effect rather than a method failure - FID is strongly biased upward on small sample counts, and this run used a much smaller WSI subset than the authors' full corpus. The gap is explained, not proven: no controlled experiment isolates the cause.",
    insights: [
      "Reported as a failure with a diagnosis rather than omitted from the writeup",
      "Ran an unrequested ablation - generating with SSL embeddings zeroed out - to test whether the model genuinely requires conditioning at inference",
      "Rated 10 (easy) a priori, actually 25: dataset acquisition drove difficulty, not model complexity",
    ],
  },
  {
    paper:
      "PromptSmooth: Certifying Robustness of Medical VLMs via Prompt Learning",
    authors: "Hussein et al.",
    year: "2024",
    venue: "MICCAI",
    metric: "Certified accuracy @ r=0.25",
    result: "67.8 / 49.0 / 38.0",
    note: "Values run slightly below published numbers but stay in range and reproduce the paper's core ordering (FewShot > ZeroShot PromptSmooth > ZeroShot at every radius). Notably, the notebook argues against its own headline - that reporting max-over-noise-levels flatters the model - and publishes the per-level breakdown alongside it.",
    insights: [
      "Critiqued its own reproduction protocol rather than accepting the most favourable framing",
      "Certified accuracy evaluated across 4 noise levels and 8 L2 radii under randomized smoothing",
    ],
  },
  {
    paper:
      "Self-Supervised Class-Agnostic Motion Prediction (Spatial & Temporal Consistency)",
    authors: "Fang et al.",
    year: "2024",
    venue: "CVPR",
    metric: "Mean/median motion error @ Frame 20",
    result: "Aligns with Table 1",
    note: "Reproduced on nuScenes mini (10 scenes vs the full 250) with all 10 scenes processed. Errors across three speed bands align closely with the published table.",
    insights: [
      "The repo shipped no requirements.txt - only 'python=3.9, PyTorch≥2.0'; the dependency set was reconstructed by reading the source and repackaged",
      "Reduced evaluation scale is disclosed: 10 of 250 nuScenes scenes",
    ],
  },
];
