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
      "Supervised multimodal sequence labeling for adductor laryngeal dystonia. A context-window Temporal Convolutional Network with symmetric bidirectional cross-modal attention and learned gated fusion combines acoustic features with high-speed-videoendoscopy-derived glottal area waveform, emitting frame-level onset/offset events for four clinically defined biomarkers at their own temporal scales. Reaches F1 0.76, 0.60 IoU / 0.61 recall on event-level localization, and 0.86 patient-level diagnostic accuracy, with the model integrated into a Python-based clinical application. The TCN beats BiLSTM, CatBoost, SVM, and logistic-regression baselines on all four biomarkers in the harder connected-speech condition. Introduces Effective IoU (conditional IoU × recall) to separate event recall from boundary localization. Funded by Indiana CTSI / NIH #UL1TR002529.",
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
      "Compares inherently interpretable Generalized Additive Models with tree ensembles on longitudinal EHR risk prediction (MIMIC-IV, neutropenic fever, ~5% prevalence). Benchmarks 10 model families × 7 feature-set sizes × 6 selection methods under 5-fold CV. With feature selection, an Explainable Boosting Machine reaches AUROC 0.8262 ± 0.0281 against CatBoost's 0.8180 on identical features, effectively matching CatBoost's full 4,502-feature performance while exposing every prediction as a sum of inspectable shape functions. Evaluates three proposed architectures (HE-EBM, IG-EBM, SSTGAM) and shows through ablation that feature representation drives performance more than architectural complexity. Ships `sstgam`, a standalone MIT-licensed pip package archived at Zenodo.",
    type: "paper",
    status: "submitted",
    arxiv: "https://github.com/mimo1999/sstgam",
  },
];

export const reproductionStudies: ReproductionStudy[] = [
  {
    paper: "DPU: Dual Prior Unfolding for Snapshot Compressive Imaging",
    authors: "Zhang et al.",
    year: "2024",
    venue: "CVPR",
    metric: "Average PSNR (5-stage / 9-stage)",
    result: "Aligned with paper (held-out scenes)",
    note: "Swin Transformer deep-unfolding stages reproduced end-to-end on a single T4 and evaluated on held-out scenes, where the 9-stage model outperforms the 5-stage in every scene.",
    insights: [
      "Rebuilt the deep-unfolding pipeline with Swin Transformer stages for snapshot compressive imaging",
      "Re-evaluated on a held-out scene split",
    ],
  },
  {
    paper: "Hybrid Proposal Refiner: Revisiting DETR from the Faster R-CNN Perspective",
    authors: "Zhao et al.",
    year: "2024",
    venue: "CVPR",
    metric: "COCO AP / AP50 / AP75",
    result: "Exact match, 5 configs",
    note: "Table 3 reproduced exactly across five detector configurations on COCO: Deformable-DETR, DINO, Align-DETR, and two DDQ variants.",
    insights: [
      "Reproduced AP, AP50, AP75, and AP-S/M/L across five DETR-family detectors",
      "Best config (align_detr-lsj_900q_4scale_3x_r50): AP 55.2 / AP50 73.0",
    ],
  },
  {
    paper: "CDFormer: When Degradation Prediction Embraces Diffusion Model for Blind Image Super-Resolution",
    authors: "Liu et al.",
    year: "2024",
    venue: "CVPR",
    metric: "PSNR / SSIM (Set5 ×2 / Urban100 ×4)",
    result: "38.289 / 0.9617 · 27.091 / 0.8163",
    note: "Full run across Set5, Set14, Urban100, and BSDS100 at ×2/×3/×4.",
    insights: [
      "Reproduced the diffusion-prior degradation embedding pipeline for blind super-resolution end-to-end",
      "Evaluated on 4 standard SR benchmarks at 3 upscaling factors",
    ],
  },
  {
    paper: "F3Loc: Fusion and Filtering for Floorplan Localization",
    authors: "Chen et al.",
    year: "2024",
    venue: "CVPR",
    metric: "Recall @ 1m (Gibson-f)",
    result: "0.507, all variants within 5%",
    note: "All four model variants on both Gibson subsets within 5% of published values, with full complementary fusion ahead of every ablation on both datasets.",
    insights: [
      "Reproduced the probabilistic filtering and multi-view geometry pipeline across 4 network variants × 2 datasets",
      "Evaluated on a test subset sized for single-GPU runtime",
    ],
  },
  {
    paper: "RepKPU: Point Cloud Upsampling with Kernel Point Representation",
    authors: "Rong et al.",
    year: "2024",
    venue: "CVPR",
    metric: "Chamfer Distance (PU-GAN 4× / 16×)",
    result: "0.2477 / 0.1070",
    note: "Kernel-point upsampling network trained and evaluated on PU-GAN at 4× and 16×.",
    insights: [
      "Patched the `pointops` CUDA extension from the deprecated `THC/THC.h` to the current ATen API",
      "Built the evaluation pipeline for Chamfer Distance",
    ],
  },
  {
    paper: "Learned Representation-Guided Diffusion Models for Large-Image Generation",
    authors: "Graikos et al.",
    year: "2024",
    venue: "CVPR",
    metric: "Patch FID (BRCA / CRC 20×)",
    result: "75.08 / 61.36 (reduced WSI subset)",
    note: "SSL-embedding-conditioned latent diffusion for whole-slide-image generation, run on a reduced WSI subset.",
    insights: [
      "Staged whole-slide-image datasets and pretrained checkpoints for Colab",
      "Ablation with SSL embeddings zeroed out to test conditioning at inference",
    ],
  },
  {
    paper: "PromptSmooth: Certifying Robustness of Medical VLMs via Prompt Learning",
    authors: "Hussein et al.",
    year: "2024",
    venue: "MICCAI",
    metric: "Certified accuracy @ r=0.25",
    result: "67.8 / 49.0 / 38.0",
    note: "Reproduces the paper's ordering (FewShot > ZeroShot PromptSmooth > ZeroShot) at every radius.",
    insights: [
      "Certified accuracy evaluated across 4 noise levels and 8 L2 radii under randomized smoothing",
      "Per-noise-level breakdown reported alongside the max-over-noise-levels row",
    ],
  },
  {
    paper: "Self-Supervised Class-Agnostic Motion Prediction (Spatial & Temporal Consistency)",
    authors: "Fang et al.",
    year: "2024",
    venue: "CVPR",
    metric: "Mean/median motion error @ Frame 20",
    result: "Aligns with Table 1",
    note: "Run on nuScenes mini (10 scenes); errors across three speed bands align closely with the published table.",
    insights: [
      "Reconstructed the dependency set from source and repackaged the environment",
      "Evaluated on 10 of 250 nuScenes scenes",
    ],
  },
];
