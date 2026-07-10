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
      "Multimodal AI for Clinical Voice Diagnostics",
    authors: "Maitreya Mohapatra",
    venue: "Master's Thesis — FAU Erlangen-Nürnberg × Indiana University Bloomington",
    year: "2026",
    abstract:
      "Built a multimodal sequence-labeling model combining a Temporal Convolutional Network and Transformer encoder with cross-modal attention, fusing synchronized audio spectrograms and glottal-area waveform signals to detect sparse vocal-fold pathology events. Achieved F1 0.76, 0.60 IoU event localization, and 0.86 patient-level diagnostic accuracy. Integrated into a Python-based clinical application.",
    type: "thesis",
    status: "in-progress",
    arxiv: "https://github.com/mimo1999",
  },
];

export const reproductionStudies: ReproductionStudy[] = [
  {
    paper:
      "DPU: Dual Prior Unfolding for Snapshot Compressive Imaging",
    authors: "Zhang et al.",
    year: "2024",
    venue: "CVPR",
    metric: "Average PSNR / SSIM",
    result: "44.26 dB / 0.9814",
    note: "Initial run scored 54.93 dB — investigated and traced to train/test overlap; rerun on a corrected held-out split produced this figure.",
    insights: [
      "First pass produced suspiciously high PSNR (54.9 dB); flagged and traced to train/test contamination in the data split",
      "Reran the deep-unfolding pipeline on a corrected split — reproduced Swin Transformer-based unfolding stages end-to-end",
      "Paper's reported numbers were not available to diff against directly, so results are reported standalone rather than as a gap",
    ],
  },
  {
    paper:
      "CDFormer: When Degradation Prediction Embraces Diffusion Model for Blind Image Super-Resolution",
    authors: "Liu et al.",
    year: "2024",
    venue: "CVPR",
    metric: "PSNR / SSIM (Set5, x2 / Urban100, x4)",
    result: "38.29 dB / 0.9617 · 27.09 dB / 0.8163",
    note: "Full clean run across Set5, Set14, Urban100, and BSDS100 at x2/x3/x4; paper's own numbers weren't reproduced from source, so this is a standalone measurement.",
    insights: [
      "Reproduced the diffusion-prior degradation embedding pipeline for blind super-resolution end-to-end",
      "Evaluated across 4 standard SR benchmarks (Set5, Set14, Urban100, BSDS100) at 3 upscaling factors",
    ],
  },
  {
    paper: "F3Loc: Fusion and Filtering for Floorplan Localization",
    authors: "Chen et al.",
    year: "2024",
    venue: "CVPR",
    metric: "Recall @ 1m / 0.1m (Gibson)",
    result: "0.507 / 0.137",
    note: "Evaluated across 4 network variants on a trimmed Gibson split; paper baseline not diffed directly.",
    insights: [
      "Reproduced the probabilistic filtering + multi-view geometry pipeline for sequential floorplan localization",
      "Test set was intentionally trimmed for tractable runtime, so recall figures are on a smaller sample than the paper's",
    ],
  },
];
