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
  originalMetric: string;
  ourMetric: string;
  gap: string;
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
    paper: "Attention Is All You Need",
    authors: "Vaswani et al.",
    year: "2017",
    venue: "NeurIPS",
    originalMetric: "BLEU 28.4 (EN-DE)",
    ourMetric: "BLEU 27.9",
    gap: "-0.5 BLEU",
    insights: [
      "Reproduced with standard WMT14 EN-DE dataset and original hyperparameters",
      "Learning rate warmup schedule is critical — without it, training diverges",
      "Label smoothing contributes ~0.5 BLEU; easy to miss in the paper",
      "Multi-GPU training required careful gradient accumulation to match batch size",
    ],
  },
  {
    paper: "Whisper: Robust Speech Recognition via Large-Scale Weak Supervision",
    authors: "Radford et al., OpenAI",
    year: "2022",
    venue: "ICML 2023",
    originalMetric: "WER 4.2% (LibriSpeech clean)",
    ourMetric: "WER 4.6%",
    gap: "+0.4% WER",
    insights: [
      "Fine-tuned Whisper-small on pathological voice data for clinical domain adaptation",
      "Standard Whisper degrades significantly on dysphonic speech",
      "Domain adaptation with as few as 200 clinical samples recovers most performance",
      "Spectrogram normalization strategy differs from standard LibriSpeech preprocessing",
    ],
  },
];
