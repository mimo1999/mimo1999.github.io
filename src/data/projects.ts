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
  category: "healthcare-ai" | "genai" | "mlops" | "infrastructure";
  status: "production" | "research" | "open-source";
  architecture?: string[];
  benchmarks?: { label: string; value: string; note?: string }[];
}

export const projects: Project[] = [
  {
    title: "Clinical Voice Diagnostics",
    slug: "clinical-voice-diagnostics",
    tagline: "Multimodal AI for pathological voice detection",
    description:
      "Masters thesis — multimodal sequence-labeling model fusing synchronized audio and glottal-area waveform signals to detect sparse vocal-fold events with clinical-grade accuracy.",
    longDescription:
      "Masters thesis at FAU Erlangen-Nürnberg in collaboration with Indiana University Bloomington. Built a multimodal sequence-labeling model combining a Temporal Convolutional Network and Transformer encoder with cross-modal attention, fusing synchronized audio spectrograms and glottal-area waveform signals to detect sparse vocal-fold pathology events. The model was integrated into a Python-based clinical application.",
    technologies: [
      "PyTorch",
      "TCN",
      "Transformer",
      "Cross-Modal Attention",
      "Python",
      "Librosa",
      "CUDA",
    ],
    metrics: [
      { label: "Patient Accuracy", value: "0.86" },
      { label: "F1 Score", value: "0.76" },
      { label: "IoU (Event)", value: "0.60" },
      { label: "Modalities", value: "2" },
    ],
    highlights: [
      "Fused synchronized audio spectrograms with glottal-area waveform signals via cross-modal attention",
      "Temporal Convolutional Network + Transformer encoder for sequence-level pathology detection",
      "0.60 IoU for sparse vocal-fold event localization in addition to patient-level classification",
      "Integrated into a Python-based clinical application for practical deployment",
    ],
    architecture: [
      "Audio Spectrogram Branch",
      "Glottal Waveform Branch",
      "Cross-Modal Attention Fusion",
      "TCN + Transformer Encoder",
      "Clinical Classification Head",
    ],
    featured: true,
    category: "healthcare-ai",
    status: "research",
    github: "https://github.com/mimo1999",
  },
  {
    title: "Research Swarm",
    slug: "research-swarm",
    tagline: "Autonomous multi-agent research system with HITL review",
    description:
      "LangGraph 1.2 multi-agent system with parallel worker dispatch (academic/industry/skeptic/benchmark roles), per-session RAG with cross-encoder reranking, and a critic→fact-checker→writer pipeline with human-in-the-loop review.",
    longDescription:
      "A supervisor agent creates a research plan with sub-questions and assigns specialist roles (academic, industry, skeptic, benchmark, general) to parallel workers dispatched via LangGraph Send. A collect node applies a marginal-gain threshold to decide whether to stop or dispatch another research pass. Validated findings flow through critic→fact-checker→writer. Production hardening: Pydantic structured outputs, SSRF-protected URL fetching, per-session LLM budget guard (MAX_LLM_CALLS), SqliteSaver checkpointing, and a faithfulness check (BGE embeddings) that rewrites the report if grounding score < 0.25. Evaluated on BEIR retrieval benchmarks. 181 tests, all LLMs mocked for fully offline CI.",
    technologies: [
      "LangGraph 1.2",
      "LlamaIndex",
      "ChromaDB",
      "Pydantic",
      "Ollama",
      "Streamlit",
      "Python",
    ],
    metrics: [
      { label: "nDCG@10 SciFact", value: "0.749" },
      { label: "nDCG@10 NFCorpus", value: "0.356" },
      { label: "Worker Roles", value: "5" },
      { label: "Test Suite", value: "181 tests" },
    ],
    benchmarks: [
      { label: "SciFact (BGE-small dense)", value: "0.749", note: "vs BGE-Large 0.752" },
      { label: "SciFact (+ reranker)", value: "0.746" },
      { label: "NFCorpus (+ reranker)", value: "0.356", note: "+1.5% over dense" },
      { label: "ArguAna", value: "0.391" },
    ],
    highlights: [
      "Parallel worker dispatch via LangGraph Send — supervisor LLM invoked only once per session",
      "5 specialist roles: academic, industry, skeptic, benchmark, general",
      "Critic flags weak/refuted findings → triggers automatic re-research rounds",
      "Cross-encoder reranker (ms-marco-MiniLM-L-6-v2, 22 MB CPU) with OOD guard for long queries",
      "Faithfulness check: BGE embedding similarity against cited snippets, rewrites if score < 0.25",
      "Budget guard, SSRF protection, SqliteSaver checkpoints, schema migration for resume",
      "181 tests — fully offline with mocked LLMs; supports Anthropic, OpenAI, and Ollama",
    ],
    architecture: [
      "Supervisor (plan + role assignment)",
      "Parallel Workers ×N (LangGraph Send)",
      "Collect Node (stop/re-dispatch)",
      "Critic → Fact-Checker",
      "Writer (faithfulness check)",
    ],
    featured: true,
    category: "genai",
    status: "open-source",
    github: "https://github.com/mimo1999/research-swarm",
  },
  {
    title: "GeoPulse",
    slug: "geopulse",
    tagline: "Geopolitical risk intelligence platform on GDELT data",
    description:
      "Full-stack ML platform ingesting daily GDELT exports to run a three-phase inference pipeline — HybridRiskTransformer, EscalationForecaster (LSTM), and RiskGNN (GAT) — surfaced through a 7-page Streamlit intelligence dashboard with 30+ MCP-compatible API endpoints.",
    longDescription:
      "GeoPulse ingests daily GDELT event exports, extracts per-country risk features, and runs three ML models in sequence: a 3-layer HybridRiskTransformer scoring instability/war/terrorism/financial risk; a 936k-param seq2seq LSTM (EscalationForecaster) with MC-Dropout + split-conformal calibration for 4-step bi-weekly forecasts; and a 2-layer Graph Attention Network (RiskGNN) combining Pearson-correlation spillover edges with geographic contiguity priors. Evaluated on 53-fold walk-forward backtests across 210 countries and validated against two fully independent external datasets: POLECAT/PLOVER (mean AUC-ROC 0.849) and UCDP Organized Violence battle deaths (AUC-ROC 0.776 for war).",
    technologies: [
      "PyTorch 2.4",
      "Transformer",
      "Graph Attention Network",
      "TimescaleDB",
      "pgvector",
      "PostGIS",
      "FastAPI",
      "Streamlit",
      "Docker Compose",
    ],
    metrics: [
      { label: "AUC-ROC (GDELT)", value: "0.983" },
      { label: "Directional Acc.", value: "71.6%" },
      { label: "UCDP AUC-ROC (war)", value: "0.776" },
      { label: "Countries", value: "210" },
    ],
    benchmarks: [
      { label: "GDELT mean AUC-ROC (self-consistency)", value: "0.983" },
      { label: "28-day directional accuracy", value: "71.6%", note: "+16% vs carry-forward" },
      { label: "POLECAT mean AUC-ROC (external)", value: "0.849" },
      { label: "UCDP AUC-ROC war >100 deaths (external)", value: "0.776" },
      { label: "UCDP Spearman r vs battle deaths", value: "0.461", note: "p<0.001" },
    ],
    highlights: [
      "HybridRiskTransformer: 3-layer encoder, 5 parallel risk heads, Integrated Gradients attribution",
      "EscalationForecaster: 936k-param seq2seq LSTM, 53-fold walk-forward backtest across 35,102 predictions",
      "RiskGNN: 2-layer GAT with geographic contiguity priors (155 COW border pairs) to prevent circular dependencies",
      "Split-conformal calibration raises empirical CI coverage from 13% to 78% with distribution-free guarantee",
      "Validated against two independent external datasets: POLECAT/PLOVER and UCDP Organized Violence",
      "30+ FastAPI endpoints with MCP-compatible /riskscore; data_confidence tier per country",
      "7-page Streamlit dashboard: heatmap, drilldown, event explorer, spillover network, forecast, GNN, RAG advisory",
    ],
    architecture: [
      "GDELT Daily Ingestion",
      "HybridRiskTransformer (Phase 1)",
      "EscalationForecaster LSTM (Phase 2)",
      "RiskGNN / GAT (Phase 3)",
      "FastAPI (30+ endpoints) + Streamlit (7 pages)",
    ],
    featured: true,
    category: "genai",
    status: "open-source",
    github: "https://github.com/mimo1999/geo_pulse",
  },
  {
    title: "Flowify",
    slug: "flowify",
    tagline: "Interactive graph-grounded code explorer with LLM Q&A",
    description:
      "Ingests any repository into a dual-layer call graph (function + module level) with multi-language AST parsing, renders it with ReactFlow, and answers natural-language questions anchored to real graph traversal — not vector search alone.",
    longDescription:
      "Built for the IBM watsonx hackathon. Flowify processes a codebase in three phases: repo-context analysis (README, manifests, entry points), AST/semantic enrichment (Python, JS/TS, Java, C/C++ → Canonical Intermediate Representation → per-function LLM summaries), and continuous learning (query patterns + feedback adjust relevance scores). The frontend renders a dual-layer graph via ReactFlow + Dagre auto-layout with 5 semantic edge types (CALLS, EXPOSES_API, USES_DB, EMITS_EVENT, CONSUMES_EVENT). Answers show which graph nodes were consulted, numbered call-chain steps, and a grounded-in-N-nodes badge. LLM backend is fully pluggable: Ollama (local), IBM watsonx, Claude, OpenAI, or GitHub Copilot. MCP-compatible endpoints for LLM assistant integration.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "ReactFlow",
      "NetworkX",
      "AST Parsing",
      "Ollama",
      "IBM watsonx",
    ],
    metrics: [
      { label: "Languages", value: "4 (AST)" },
      { label: "Edge Types", value: "5" },
      { label: "LLM Providers", value: "7" },
      { label: "Graph Layers", value: "2" },
    ],
    highlights: [
      "Multi-language AST parsing (Python, JS/TS, Java, C/C++) → Canonical Intermediate Representation",
      "Dual-layer graph: function-level + module-level via greedy modularity community detection (NetworkX)",
      "5 semantic edge types colour-coded in ReactFlow: CALLS, EXPOSES_API, USES_DB, EMITS_EVENT, CONSUMES_EVENT",
      "Change-impact analysis: risk level (low/medium/high/critical), caller list, DB operations, affected modules",
      "Graph-grounded NLP: answers anchored to BFS traversal with 'Grounded in N nodes' badge",
      "Continuous learning: query patterns and 👍/😐/👎 feedback adjust node relevance over time",
      "MCP-compatible API endpoints for LLM assistant and VS Code integration",
      "LLM-agnostic: Ollama (local, free), IBM watsonx, Claude, OpenAI, Copilot — all pluggable",
    ],
    architecture: [
      "Phase 1: Repo Context (README, manifests, entry points)",
      "Phase 2: AST → CIR → LLM Summaries",
      "Phase 3: Continuous Learning (feedback loop)",
      "FastAPI Backend (30+ endpoints)",
      "ReactFlow + Dagre Frontend",
    ],
    featured: true,
    category: "genai",
    status: "open-source",
    github: "https://github.com/mimo1999/Flowify_toolkit",
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
