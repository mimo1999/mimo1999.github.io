export interface Project {
  title: string;
  slug: string;
  tagline: string;
  description: string;
  longDescription: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  highlights: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  category: "healthcare-ai" | "genai" | "mlops" | "infrastructure" | "computer-vision" | "fintech";
  status: "production" | "research" | "open-source";
  architecture?: string[];
  image?: { src: string; alt: string; width: number; height: number };
  benchmarks?: { label: string; value: string; note?: string }[];
}

export const projects: Project[] = [
  {
    title: "AdLD Biomarker Detection",
    slug: "clinical-voice-diagnostics",
    tagline: "Multimodal deep learning for detecting laryngeal dystonia biomarkers with event-level timestamps",
    description:
      "Master's thesis: a context-window TCN with bidirectional cross-modal attention fuses audio and glottal-area waveform to detect four clinically defined biomarkers of adductor laryngeal dystonia, emitting frame-level events with onset/offset times. Manuscript submitted to the Journal of Voice.",
    longDescription:
      "Frames adductor laryngeal dystonia (AdLD) detection as supervised multimodal sequence labeling instead of a single utterance-level label. Four biomarkers (micromotions, oscillatory breaks, motion irregularities, tremor) each get their own detector over a shared preprocessing pipeline, at their own temporal scale (20-300 ms hops, depth-tuned receptive fields). A context-window Temporal Convolutional Network fuses acoustic features with high-speed-videoendoscopy-derived glottal area waveform through symmetric bidirectional cross-attention and learned gated fusion, then aggregates frame-level events into a patient-level diagnosis. The output is a timeline a clinician can check against the video, served through a Python clinical GUI that runs on standard CPU hardware. Manuscript submitted to the Journal of Voice (Mohapatra, Döllinger, Patel); funded by Indiana CTSI / NIH #UL1TR002529.",
    technologies: [
      "PyTorch",
      "Dilated TCN",
      "Cross-Modal Attention",
      "Gated Fusion",
      "CatBoost",
      "BiLSTM",
      "librosa",
      "Python",
    ],
    metrics: [
      { label: "Patient Accuracy", value: "0.86" },
      { label: "F1 Score", value: "0.76" },
      { label: "IoU (Event)", value: "0.60" },
      { label: "Biomarkers", value: "4" },
    ],
    benchmarks: [
      { label: "Patient-level diagnostic accuracy", value: "0.86" },
      { label: "Event-level F1", value: "0.76" },
      { label: "Event-level localization", value: "0.60 IoU / 0.61 recall" },
      { label: "Connected-speech comparison", value: "Best F1 on all 4 biomarkers", note: "vs BiLSTM, CatBoost, SVM, logistic regression" },
    ],
    highlights: [
      "Frame-level sequence labeling of 4 named biomarkers with onset/offset times",
      "Symmetric bidirectional cross-modal attention over audio and glottal area waveform, with learned gated fusion",
      "Per-biomarker temporal scales (20-300 ms hops) and biomarker-specific TCN depth (2 blocks for micromotions, 6 for tremor)",
      "Evaluated with a leave-one-biomarker-out ablation and a co-occurrence reinforcement term for cross-biomarker evidence integration",
      "Effective IoU metric (conditional IoU × recall) to separate event recall from boundary localization",
      "Patient-level aggregation of frame-level events; clinician GUI runs on CPU, no GPU needed at deployment",
    ],
    architecture: [
      "Audio + GAW Feature Extraction (per biomarker)",
      "Residual Dilated TCN Blocks",
      "Bidirectional Cross-Modal Attention (4 heads)",
      "Learned Gated Fusion + Context-Aware Pooling",
      "Event Extraction → Patient Diagnosis Score",
    ],
    featured: true,
    category: "healthcare-ai",
    status: "research",
    github: "https://github.com/mimo1999/asd_detector",
    image: {
      src: "/images/projects/adld.png",
      alt: "AdLD annotation and analysis tool: endoscopic video with synchronized glottal area waveform, audio waveform and spectrogram, and a biomarker event table",
      width: 1562,
      height: 908,
    },
  },
  {
    title: "ChemoGAM",
    slug: "chemogam",
    tagline: "Interpretable GAMs vs tree ensembles for chemotherapy complication prediction on MIMIC-IV",
    description:
      "Benchmark of 8 interpretable GAM families against 5 tree and linear baselines on MIMIC-IV chemotherapy cohorts. An Explainable Boosting Machine reaches AUROC 0.8262, ahead of CatBoost on identical features, with every prediction expressed as a sum of inspectable shape functions.",
    longDescription:
      "Predicts neutropenic fever (~5% prevalence) after chemotherapy from routine longitudinal lab work on MIMIC-IV, comparing inherently interpretable Generalized Additive Models with black-box ensembles under 5-fold cross-validation. The study covers 10 model families × 7 feature-set sizes × 6 feature-selection methods over a 4,502-feature longitudinal representation. With feature selection, an Explainable Boosting Machine (AUROC 0.8262) overtakes CatBoost on the same features (0.8180) and matches CatBoost on the full feature set. Also proposes and evaluates HE-EBM, IG-EBM and SSTGAM architectures, and ships `sstgam`, a standalone MIT-licensed Python package. Project Biomedical Network Science, Biomedical Network Science Lab, FAU Erlangen-Nürnberg.",
    technologies: [
      "InterpretML (EBM)",
      "CatBoost",
      "XGBoost",
      "pygam",
      "GAMI-Net",
      "NAM",
      "PyTorch",
      "R mvgam",
      "scikit-learn",
    ],
    metrics: [
      { label: "EBM AUROC", value: "0.8262" },
      { label: "CatBoost AUROC", value: "0.8180" },
      { label: "Model Families", value: "10" },
      { label: "Feature Space", value: "4,502→250" },
    ],
    benchmarks: [
      { label: "EBM, top-250 features", value: "0.8262 ± 0.0281", note: "ahead of CatBoost on identical features" },
      { label: "CatBoost, top-250 features", value: "0.8180 ± 0.0230" },
      { label: "CatBoost, full 4,502 features", value: "0.823 ± 0.023", note: "matched by EBM on 250 features" },
      { label: "IG-EBM AUPRC", value: "0.2423 ± 0.0510", note: "best AUPRC of any interpretable model tested" },
      { label: "sstgam Brier (IEEE-CIS Fraud)", value: "0.027", note: "5× lower than EBM at under half the fit time" },
    ],
    highlights: [
      "Feature count treated as an experimental variable across 7 feature-set sizes; EBM stays strong as dimensionality grows",
      "Feature selection ablated across 6 ranking methods × 4 model families",
      "Custom architectures: HE-EBM (hierarchical expert groups), IG-EBM, SSTGAM",
      "`sstgam`: standalone MIT-licensed pip package with cyclic Newton boosting, tensor-product and lookup-table backends, 13 tests, py.typed, archived on Zenodo",
      "`sstgam` benchmarked on the public IEEE-CIS Fraud dataset",
      "Global shape functions and interaction surfaces as the explanation layer",
    ],
    architecture: [
      "MIMIC-IV Cohort (neutropenic fever, ~5% prevalence)",
      "Two-Tier Feature Selection (top-100 labs → top-k)",
      "VMD vs A Representation (4,502 vs 802 dims)",
      "10 Model Families × 5-Fold CV",
      "Shape Functions + Interaction Surfaces",
    ],
    featured: true,
    category: "healthcare-ai",
    status: "research",
    github: "https://github.com/mimo1999/ChemoTreeVsDLGAM",
  },
  {
    title: "GeoPulse",
    slug: "geopulse",
    tagline: "Global activity monitor over ~49M GDELT events: activity map, highlighted events and per-country summaries",
    description:
      "Full-stack data platform over GDELT global event data: a country-level activity map, a highlighted-events feed, and per-country summaries, backed by a ~49M-event actor/event graph in PostgreSQL with an idempotently reconciled Neo4j copy.",
    longDescription:
      "GeoPulse ingests GDELT event data into PostgreSQL, derives per-country activity features, and serves them through a FastAPI backend to a Streamlit dashboard. It provides a country-level activity index; a ~49M-event actor-interaction graph (countries, actors, locations, events, event-actor links) with CAMEO event codes mapped to interaction types (cooperation, consultation, conflict); and a Global Intelligence view built on that graph: an activity heatmap, a highlighted-events feed that keeps media attention, Goldstein magnitude and country-day activity spikes as three independent signals, and per-country summaries with interaction mix and top counterparts. The graph is migrated from PostgreSQL into Neo4j with an idempotent, keyset-paginated loader whose verification pass reconciles node and relationship counts against Postgres exactly across all seven types (79.6M actor-event relationships).",
    technologies: [
      "PostgreSQL",
      "TimescaleDB",
      "Neo4j",
      "FastAPI",
      "Streamlit",
      "Plotly",
      "Python",
      "pytest",
    ],
    metrics: [
      { label: "GDELT Events", value: "~49M" },
      { label: "Actor-Event Edges", value: "79.6M" },
      { label: "Countries", value: "227" },
      { label: "Tests", value: "121" },
    ],
    benchmarks: [
      { label: "Postgres → Neo4j reconciliation", value: "Exact match", note: "all 7 node/relationship types, 79.6M edges, zero drift" },
    ],
    highlights: [
      "PostgreSQL event-graph pipeline over ~49M GDELT events (countries, actors, locations, events, event-actor links), CAMEO codes mapped to interaction types",
      "Idempotent Postgres → Neo4j migration (keyset pagination, MERGE upserts) with a verification pass that reconciles every node and relationship type",
      "Highlighted-events feed with three independent signals per event: media attention (mentions), Goldstein magnitude, and a country-day activity spike vs a trailing 30-day baseline",
      "Activity index computed by one tested scoring class with a coverage-based confidence value",
      "FastAPI backend over the Postgres graph (/global, /country, /intelligence); 3-page Streamlit dashboard with activity map, country drilldown and a 3-tab Global Intelligence view",
    ],
    architecture: [
      "GDELT Daily Event Exports",
      "PostgreSQL graph.* (events, actors, locations, event-actor edges)",
      "Neo4j (optional copy, exactly reconciled)",
      "FastAPI (/global, /country, /intelligence)",
      "Streamlit (3 pages: activity map, drilldown, global intelligence)",
    ],
    featured: true,
    category: "infrastructure",
    status: "open-source",
    github: "https://github.com/mimo1999/GeoPulse",
    image: {
      src: "/images/projects/geopulse.png",
      alt: "GeoPulse Global Activity Monitor: world map coloured by country activity index, with countries tracked and critical and high counts",
      width: 1280,
      height: 640,
    },
  },
  {
    title: "Clinical RAG",
    slug: "clinical-rag",
    tagline: "Offline German clinical-guideline QA with hybrid retrieval and grounded refusal",
    description:
      "Fully offline retrieval-augmented QA over seven DGGG/AWMF gynecologic-oncology guidelines. Hybrid BM25 + dense retrieval with RRF, cross-encoder reranking, and two-stage routing, running on a single T4 with no hosted API.",
    longDescription:
      "Answers clinical questions in German over seven guidelines, cites the passages it used, and declines when the retrieved context does not support an answer, so no patient data has to leave the hospital. Refusal is measured as its own rate. Retrieval combines BM25 (which keys on literal values such as age bands and intervals) with dense retrieval, fuses them with Reciprocal Rank Fusion, and reranks with a cross-encoder that scores each query-passage pair jointly. PDFs are parsed with Docling into structure-aware chunks that keep section hierarchy, recommendations and tables as citation metadata. Answers are evaluated with a local LLM judge from a different model family than the generator, cross-checked against a stronger independent judge.",
    technologies: [
      "ChromaDB",
      "BM25",
      "Cross-Encoder Reranking",
      "Docling",
      "FastAPI",
      "Langfuse",
      "HuggingFace Transformers",
      "Python",
    ],
    metrics: [
      { label: "Recall@5", value: "88.9%" },
      { label: "Answer Accuracy", value: "88.9%" },
      { label: "Refusal Correctness", value: "100%" },
      { label: "Guidelines", value: "7" },
    ],
    benchmarks: [
      { label: "Recall@5 (12-question benchmark)", value: "0.889" },
      { label: "Refusal correctness (out-of-domain questions)", value: "1.000" },
      { label: "Refusal correctness (37-question set, 7 guidelines)", value: "0.838", note: "includes English queries over German sources" },
    ],
    highlights: [
      "Hybrid BM25 + dense retrieval → Reciprocal Rank Fusion (k=60) → cross-encoder rerank → near-duplicate suppression",
      "Structure-aware chunking (300-500 tokens) parses section hierarchy, recommendations and tables, preserving metadata for citation",
      "Two-stage routing: guideline first, then document",
      "Grounded generation with citations, or refusal when the context does not support an answer",
      "Cross-lingual retrieval: English queries over German sources",
      "Two-command deployment on a single T4 GPU (no Docker, no Ollama, no accounts); incremental ingestion tracks PDFs by content hash",
      "All retrieval hyperparameters in one env-var-overridable module for A/B sweeps",
    ],
    architecture: [
      "AWMF PDFs → Docling Parse",
      "Structure-Aware Chunking (300-500 tok)",
      "Dense (Chroma) + BM25 Indexes",
      "Guideline → Document Router → RRF → Rerank",
      "Grounded Generation or Refusal",
    ],
    featured: true,
    category: "genai",
    status: "open-source",
    // Repo name genuinely contains the "Clininal" typo - verified against
    // career_kit/projects/clinical-rag.md; the corrected spelling 404s.
    github: "https://github.com/mimo1999/Clininal_guideline_RAG",
    image: {
      src: "/images/projects/clinical-rag.png",
      alt: "Clinical RAG chat interface: question box for the indexed German gynecologic-oncology guidelines",
      width: 1024,
      height: 391,
    },
  },
  {
    title: "Research Swarm",
    slug: "research-swarm",
    tagline: "LangGraph research pipeline with cited reports and human-in-the-loop review",
    description:
      "LangGraph pipeline that frames a question, plans sub-questions, searches PubMed, Europe PMC, arXiv and the web, extracts quoted facts and locates each quote in its source, verifies every fact, and writes a report where every sentence is tied to the facts it cites, with a human review step before writing.",
    longDescription:
      "A supervisor agent frames the question, then plans sub-questions. Research stages run on a small local model (gemma4:e2b via Ollama); a larger model (gemma4:31b-cloud) handles planning and writing and can be switched off with one setting. Papers and uploaded documents are ranked by a light LLM scorer and read with no embeddings or vector store; the top arXiv papers are read in full text. One extraction call per batch turns sources into facts, each with a verbatim quote located back in its source. A gap-fill search covers thin sub-questions, a verifier applies a fixed verdict policy in code, and the writer tags every sentence with the facts it rests on so citations are numbered and rendered by code. Reports adapt to the audience (academic, technical, general, executive). An alternative evidence-packet path uses one large-model call over numbered source sentences. 287 tests with all LLMs mocked; runs on Anthropic, OpenAI, Ollama or in-process Hugging Face transformers, with a Gradio app on a Hugging Face ZeroGPU Space.",
    technologies: [
      "LangGraph",
      "LangChain",
      "Pydantic",
      "Ollama",
      "Hugging Face Transformers",
      "Streamlit",
      "FastAPI",
      "Python",
    ],
    metrics: [
      { label: "SciFact Verdict Accuracy", value: "0.80" },
      { label: "Large-Model Tokens / Task", value: "~2k" },
      { label: "Relevance nDCG@10", value: "0.848" },
      { label: "Test Suite", value: "287 tests" },
    ],
    benchmarks: [
      { label: "SciFact verdict accuracy, evidence-packet path", value: "0.80", note: "~2k large-model tokens per task" },
      { label: "SciFact verdict accuracy, fact-chain path", value: "0.77", note: "~7.2k large-model tokens per task" },
      { label: "Relevance scorer vs word overlap", value: "nDCG@10 0.848 vs 0.787", note: "HotpotQA" },
    ],
    highlights: [
      "Question frame enforced in code at every stage (planning, scoring, coverage, verification, writing)",
      "No embeddings or vector store: papers ranked by a light LLM scorer, sources read whole; full text of top arXiv papers",
      "Every fact carries a verbatim quote located in its source in code; a fact whose quote cannot be found is dropped without an LLM call",
      "One verifier call per ten facts with a fixed verdict policy; citations numbered and rendered by code",
      "Gap fill re-searches only sub-questions short on grounded evidence; human approve/edit step before the report is written",
      "Local-first: small local model for research stages, large model only for planner and writer; per-provider concurrency caps, retry with backoff, session token budgets",
      "SSRF-validated URL fetching and prompt-injection scanning; SQLite checkpoints with forward migration",
      "FastAPI backend with SSE streaming, Streamlit UI, Docker and Hugging Face Space deployment",
    ],
    architecture: [
      "Supervisor (question frame + plan)",
      "Paper Scout / Document Workers (extract with quotes)",
      "Deep Read (full text of top arXiv papers)",
      "Gap Fill (search sub-questions still thin on evidence)",
      "Verifier (fixed verdict policy)",
      "Writer (outline → sections → review → code-rendered citations)",
    ],
    featured: true,
    category: "genai",
    status: "open-source",
    github: "https://github.com/mimo1999/research-swarm",
    demo: "https://huggingface.co/spaces/maitreya18/research-swarm",
    image: {
      src: "/images/projects/swarm.png",
      alt: "Research Swarm interface: model, deployment and depth settings beside the research question box with audience selector",
      width: 1600,
      height: 1000,
    },
  },
  {
    title: "Flowify",
    slug: "flowify",
    tagline: "Interactive graph-grounded code explorer with LLM Q&A",
    description:
      "Ingests any repository into a dual-layer call graph (function and module level) with multi-language AST parsing, renders it with ReactFlow, and answers natural-language questions anchored to real graph traversal.",
    longDescription:
      "Built at an IBM hackathon and deployed as a public demo on Render: ~9,800 lines of Python across 22 backend files, 46 HTTP routes, a ~3,800-line React frontend, and an MCP server for IDE assistants. A repository is processed in three phases: repo-context analysis (README, manifests, entry points), AST and semantic enrichment (six languages → Canonical Intermediate Representation → per-function summaries), and continuous learning from query patterns and feedback. Call edges are resolved by a scoped, confidence-ranked matcher (self-call, attribute type, receiver class, module import, same-file, unique repo-wide). Retrieval runs multi-signal TF-IDF → LLM re-rank → BFS over real call edges and degrades to pure TF-IDF without an LLM. The frontend renders a dual-layer graph with ReactFlow and Dagre, including a lane overview that opens into a focus view, with 5 semantic edge types. Hosted instances guard against oversized repos (source size, node count, parse time). The LLM layer is provider-neutral: Ollama (local or Cloud), Claude, OpenAI, Copilot, OpenClaw or a no-LLM heuristic mode, with per-request bring-your-own-key headers.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "ReactFlow",
      "NetworkX",
      "AST Parsing",
      "Ollama",
      "Docker",
      "Render",
    ],
    metrics: [
      { label: "Languages", value: "6 (AST)" },
      { label: "API Routes", value: "46" },
      { label: "LLM Providers", value: "6" },
      { label: "Tests", value: "178" },
    ],
    highlights: [
      "Multi-language AST parsing (Python, JS, TS, Java, C, C++) into a Canonical Intermediate Representation",
      "Graph structure is the retrieval index: no embeddings, TF-IDF → LLM re-rank → BFS over call edges",
      "Dual-layer graph (function and module level) with greedy modularity community detection (NetworkX)",
      "Lane overview to focus view for repos with many top-level modules; viewport culling keeps the graph responsive past a thousand nodes",
      "5 semantic edge types colour-coded in ReactFlow: CALLS, EXPOSES_API, USES_DB, EMITS_EVENT, CONSUMES_EVENT",
      "Deterministic graph analytics: PageRank, betweenness, cycles, bridges, dead code, god nodes, cross-module couplings",
      "Knowledge layer linking READMEs, ADRs and RFCs to the code they document, with a provenance record on every derived fact",
      "Change-impact analysis: risk level (low to critical), callers, DB operations, affected modules",
      "Graph-grounded answers with a 'Grounded in N nodes' badge, numbered call-chain steps and user feedback",
      "MCP server and agent export for VS Code and other assistants",
      "Hosted-instance guards (source size, node count, parse time), per-IP rate limit, bring-your-own-key headers",
      "Docker deployment on Render with CI on every push and a GHCR image on version tags",
    ],
    architecture: [
      "Phase 1: Repo Context (README, manifests, entry points)",
      "Phase 2: AST → CIR → LLM Summaries",
      "Phase 3: Continuous Learning (feedback loop)",
      "Ingest guards (size / node count / parse time)",
      "FastAPI Backend (46 routes) + MCP Server",
      "ReactFlow + Dagre Frontend",
    ],
    featured: true,
    category: "genai",
    status: "open-source",
    github: "https://github.com/mimo1999/Flowify_toolkit",
    demo: "https://flowify-7vcn.onrender.com/",
    image: {
      src: "/images/projects/flowify.png",
      alt: "Flowify call graph of a Python repository with a Change Impact panel showing risk level, callers and DB operations",
      width: 1917,
      height: 797,
    },
  },
  {
    title: "Hidden Shape Reconstruction",
    slug: "hidden-shape-reconstruction",
    tagline: "Recovering 3D shape hidden beneath draped cloth from a single RGB image",
    description:
      "Predicts the concealed 3D shape of an object under draped cloth from a single photo, through an end-to-end pipeline: Blender cloth-drape simulation over 100 real 3D scans, paired RGB/distance-map rendering, and a MobileNetV2 U-Net trained to invert the draping.",
    longDescription:
      "An end-to-end pipeline from 3D objects to a trained network: 100 everyday objects from OmniObject3D are cleaned and unit-normalised with PyMeshLab, draped with a simulated cotton-like cloth in Blender 3.6, and rendered from 50 viewpoints each across two batches, giving 10,000 paired RGB/distance-map images. A MobileNetV2-encoder U-Net (~2.55M parameters) maps the RGB cloth image to a distance map encoding the hidden geometry, trained with a hybrid SSIM + foreground-weighted Charbonnier loss and wide zoom augmentation. Predicted contact regions are validated against 3D geometric ground truth recomputed from the meshes. Includes a browser-based Flask + canvas annotation tool for labeling fabric and contact regions on real photos.",
    technologies: [
      "PyTorch",
      "Blender (bpy)",
      "PyMeshLab",
      "MobileNetV2",
      "U-Net",
      "OpenCV",
      "Flask",
      "Python",
    ],
    metrics: [
      { label: "SSIM", value: "0.911" },
      { label: "Chamfer Dist.", value: "0.0298" },
      { label: "Contact IoU", value: "0.652" },
      { label: "Contact F1", value: "0.789" },
    ],
    benchmarks: [
      { label: "Held-out SSIM", value: "0.9107" },
      { label: "Held-out RMSE", value: "0.0776" },
      { label: "Held-out MAE", value: "0.0201" },
      { label: "Chamfer Distance", value: "0.0298" },
      { label: "Contact-region IoU", value: "0.6521", note: "vs. 3D geometric ground truth" },
      { label: "Contact-region F1", value: "0.7894" },
      { label: "Contact pixel accuracy", value: "0.9772" },
    ],
    highlights: [
      "End-to-end pipeline: mesh cleanup, Blender cloth-drape physics simulation, paired RGB/distance-map rendering, training",
      "100 real-world 3D scans (OmniObject3D) rendered from 50 viewpoints each: 10,000 paired images",
      "MobileNetV2 U-Net (~2.55M parameters) trained on a 4 GB GPU, under 500 MB VRAM at batch 32",
      "Hybrid SSIM + foreground-weighted Charbonnier loss for background-heavy targets",
      "Wide zoom augmentation (0.5x-1.4x) to generalize across two rendering batches",
      "Contact-mask threshold (0.25) chosen by a sweep matching predicted and ground-truth contact-pixel fractions",
      "Contact regions validated against 3D ground truth recomputed from the meshes: 0.652 IoU, 0.789 F1, 0.977 pixel accuracy",
      "Custom Flask + canvas annotation tool for labeling fabric and contact regions",
    ],
    architecture: [
      "Object Dataset (OmniObject3D)",
      "Mesh Cleanup (PyMeshLab)",
      "Blender Cloth-Drape Simulation",
      "Paired RGB / Distance-Map Rendering",
      "MobileUNet Training & Prediction",
    ],
    featured: true,
    category: "computer-vision",
    status: "open-source",
    github: "https://github.com/mimo1999/hidden-shape-reconstruction",
  },
  {
    title: "Reproducing Research Results",
    slug: "reproducing-research-results",
    tagline: "Reproduction of 8 CVPR/MICCAI 2024 papers on a single T4 GPU",
    description:
      "Independent reproduction of eight peer-reviewed papers across six research areas (detection, super-resolution, diffusion, point clouds, compressive imaging, medical vision-language models), each rebuilt end-to-end on a single Tesla T4.",
    longDescription:
      "Takes eight CVPR 2024 and MICCAI 2024 papers, rebuilds each experimental pipeline from the authors' released code, and validates the reported benchmark tables against independently regenerated numbers. Several papers were developed on multi-GPU clusters, so each pipeline was adapted to single-GPU execution on a 15 GB T4 in Google Colab, with isolated conda environments, staged checkpoints and datasets (~112 GB via Drive), and one self-contained notebook per paper. Work included patching deprecated CUDA extensions to the current ATen API, reconstructing dependency specifications from source, and re-evaluating on held-out splits.",
    technologies: [
      "PyTorch",
      "Latent Diffusion",
      "DETR / DINO / DDQ",
      "Swin Transformer",
      "CLIP Med-VLM",
      "Google Colab (T4)",
      "conda",
      "rasterio",
    ],
    metrics: [
      { label: "Papers Reproduced", value: "8" },
      { label: "Research Areas", value: "6" },
      { label: "GPU Budget", value: "1 × T4" },
      { label: "COCO Tables", value: "Exact" },
    ],
    benchmarks: [
      { label: "Hybrid Proposal Refiner - COCO AP", value: "Exact match", note: "5 detector configurations" },
      { label: "F3Loc - Recall@threshold", value: "Within 5%", note: "4 model variants × 2 datasets" },
      { label: "CDFormer - PSNR/SSIM", value: "38.289 / 0.9617", note: "Set5 ×2, 4 benchmarks × 3 scale factors" },
      { label: "PromptSmooth - certified accuracy @ r=0.25", value: "67.8 / 49.0 / 38.0", note: "same ordering as the paper" },
      { label: "RepKPU - Chamfer Distance (PU-GAN 4× / 16×)", value: "0.2477 / 0.1070" },
    ],
    highlights: [
      "Reproduced COCO detection tables exactly across five detector configurations (Deformable-DETR, DINO, Align-DETR, DDQ)",
      "Rebuilt Swin Transformer deep-unfolding, latent-diffusion, point-cloud upsampling, floorplan localization and randomized-smoothing pipelines",
      "Adapted multi-GPU training pipelines to a single 15 GB T4 with per-paper isolated conda environments",
      "Patched deprecated CUDA extensions (THC to current ATen API) and rebuilt missing dependency specifications",
      "Held-out re-evaluation for Dual Prior Unfolding; ablations such as zeroed SSL embeddings for diffusion conditioning",
      "Randomized-smoothing certification across 4 noise levels and 8 L2 radii",
    ],
    architecture: [
      "8 Self-Contained Colab Notebooks",
      "Per-Paper Isolated conda Environments",
      "Checkpoint + Dataset Staging (~112 GB via Drive)",
      "Reproduced Metrics Table per Paper",
      "Result Analysis",
    ],
    featured: false,
    category: "computer-vision",
    status: "research",
    github: "https://github.com/mimo1999/cvpr-paper-reproductions",
  },
  {
    title: "RKOS",
    slug: "rkos",
    tagline: "Research Knowledge Operating System: papers as a typed document graph",
    description:
      "Local-first desktop app that parses research PDFs into a typed document graph, speed-reads them with structure-aware RSVP, and turns reading into spaced repetition. ~4,800 lines of Python, 14 Postgres tables, no cloud services.",
    longDescription:
      "Each paper is parsed into a typed tree (sections, paragraphs, figures, tables, equations, captions) stored in a self-referencing PostgreSQL table and queried with recursive CTEs. The RSVP reader paces itself from that structure: equations slow to 100 WPM, figures get a dedicated card at section boundaries, and running headers, affiliations and citation markers are filtered out. PostgreSQL provides GIN full-text search with a pg_trgm typo-tolerant fallback and native recursive-CTE traversal. Reading feeds an SM-2 spaced-repetition scheduler with auto-generated flashcards, and a knowledge score blends reading progress, figure-view ratio and flashcard recall. Topic inference and flashcard generation sit behind protocol interfaces, with a heuristic implementation and an Ollama LLM implementation.",
    technologies: [
      "PyQt6",
      "PostgreSQL",
      "PyMuPDF",
      "psycopg3",
      "pg_trgm / GIN",
      "Ollama",
      "Python",
    ],
    metrics: [
      { label: "Postgres Tables", value: "14" },
      { label: "Lines of Python", value: "~4,800" },
      { label: "Cleanup Passes", value: "~15" },
      { label: "Pacing Tiers", value: "4" },
    ],
    highlights: [
      "Typed document graph in a self-referencing Postgres table, queried with recursive CTEs",
      "Four content-aware pacing tiers (100 WPM for equations up to 300 for prose) plus per-punctuation dwell multipliers",
      "Optimal Recognition Point highlighting on a length-banded pivot",
      "~15-pass PDF cleanup: cross-page running-header detection, affiliation and citation stripping, dot leaders, letter-spaced run repair, garbled-text flagging",
      "SM-2 spaced repetition implemented from scratch over auto-generated flashcards",
      "Knowledge score blending reading progress, figure-view ratio and flashcard recall",
      "GIN full-text search with pg_trgm fallback; pluggable heuristic or Ollama-based generators",
    ],
    architecture: [
      "PDF → PyMuPDF Extraction (per-span font/position)",
      "Cleanup Pipeline (~15 passes)",
      "document_nodes Graph (recursive CTEs)",
      "RSVP Segmenter → QTimer Engine",
      "SM-2 Scheduler + Analytics",
    ],
    featured: false,
    category: "infrastructure",
    status: "open-source",
    github: "https://github.com/mimo1999/rkos-research-reader",
  },
  {
    title: "Invoice Management System",
    slug: "invoice-management-system",
    tagline: "Full-stack AR invoice management with an NL chatbot and ML predictions",
    description:
      "A full-stack web application for managing and analysing customer invoices: a data table UI for browsing, filtering and editing records, a natural-language chatbot for conversational queries, and a Python model server for ML-based payment-behaviour predictions.",
    longDescription:
      "Built for accounts-receivable teams that track and query large volumes of customer invoices. A Java servlet backend (Tomcat) serves a React frontend and a REST-style API backed by MySQL, with invoice browsing and filtering by customer name, business code or open-amount thresholds, inline edits, and per-customer outstanding-balance summaries. A Node.js and Dialogflow chatbot answers plain-English questions against the same data. A separate Python/Flask model server exposes an XGBoost payment-behaviour predictor over HTTP, decoupled from the Java backend so the inference layer can evolve independently.",
    technologies: [
      "Java",
      "Apache Tomcat",
      "React",
      "MySQL",
      "Node.js",
      "Dialogflow",
      "Python",
      "Flask",
      "XGBoost",
    ],
    metrics: [
      { label: "Invoices", value: "50,000" },
      { label: "Lifecycle Columns", value: "47" },
      { label: "Services", value: "4" },
      { label: "API Endpoints", value: "9" },
    ],
    highlights: [
      "Four services across four languages: Java/Tomcat servlet API, React data table, Node.js Dialogflow chatbot, Python XGBoost predictor, over MySQL via JDBC and REST/JSON",
      "XGBoost regressor over 50,000 invoices and 47 lifecycle columns, thresholded at 90% of the open amount into a full-vs-partial payment decision",
      "Regression plus a tunable threshold keeps the predicted amount available to collections and makes the tolerance a business parameter",
      "Missing shipping data encoded as a null-indicator feature",
      "Model-agnostic serving layer loads a pickled model and its matching transformation class by ID, so preprocessing is versioned with the weights",
    ],
    architecture: [
      "Browser (React)",
      "Java Backend (Tomcat, Servlet API)",
      "MySQL (customer_invoice, 47 cols, 50k rows)",
      "Chatbot (Node.js, Dialogflow)",
      "Prediction Service (Flask + XGBoost)",
    ],
    featured: false,
    category: "fintech",
    status: "open-source",
    github: "https://github.com/mimo1999/invoice-management-system",
  },
];

/**
 * How many projects the homepage shows. The `projects` array is ordered
 * strongest-first, so raising or lowering this is the only edit needed to
 * change what appears - `featured` just marks which projects are eligible.
 */
export const FEATURED_COUNT = 6;

export const getFeaturedProjects = () =>
  projects.filter((p) => p.featured).slice(0, FEATURED_COUNT);
export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
