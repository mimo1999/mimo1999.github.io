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
  benchmarks?: { label: string; value: string; note?: string }[];
}

export const projects: Project[] = [
  {
    title: "AdLD Biomarker Detection",
    slug: "clinical-voice-diagnostics",
    tagline: "Detecting when a laryngeal spasm happens, not just whether a patient has one",
    description:
      "Master's thesis - reframes adductor laryngeal dystonia detection as multimodal sequence labeling: a context-window TCN with bidirectional cross-modal attention fuses audio and glottal-area waveform to emit frame-level, clinically named biomarker events with onset/offset timestamps. Manuscript submitted to the Journal of Voice.",
    longDescription:
      "Essentially every published ML system for adductor laryngeal dystonia (AdLD) is trained on sustained vowels and emits a single opaque yes/no label - yet the disorder manifests most strongly during connected speech. This work reframes the problem as supervised multimodal sequence labeling: four clinically distinct biomarkers (micromotions, oscillatory breaks, motion irregularities, tremor) each get their own detector over a shared preprocessing pipeline, at their own temporal scale (20-300 ms hops, depth-tuned receptive fields). A context-window Temporal Convolutional Network fuses acoustic features with high-speed-videoendoscopy-derived glottal area waveform via symmetric bidirectional cross-attention and learned gated fusion, then aggregates frame-level events into a patient-level diagnosis. To our knowledge this is the first ML framework to jointly detect multiple clinically distinct AdLD biomarkers with explicit temporal localization during connected speech. The output is not a score - it is a timeline a clinician can audit against the video. Manuscript submitted to the Journal of Voice (Mohapatra, Döllinger, Patel); funded by Indiana CTSI / NIH #UL1TR002529.",
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
    // Verified metric set per career_kit/projects/adld.md. The higher pair in
    // project_readmes/Summary.md (0.960 / 0.893 patient-level accuracy) is
    // flagged there as a suspected consolidation error and must not be used
    // until the manuscript confirms it.
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
      { label: "Baselines beaten under connected speech", value: "All 4 biomarkers", note: "vs BiLSTM, CatBoost, SVM, logistic regression" },
    ],
    highlights: [
      "Frame-level sequence labeling of 4 named biomarkers with onset/offset times - not binary utterance classification",
      "Symmetric bidirectional cross-modal attention over audio + glottal area waveform, with learned gated fusion",
      "Per-biomarker temporal scales (20-300 ms hops) and biomarker-specific TCN depth (2 blocks for micromotions, 6 for tremor)",
      "The TCN wins the condition that matters - best F1 on all four biomarkers under connected speech, where tree and margin models collapse into near-abstention",
      "Introduced Effective IoU (conditional IoU × recall) to prove the bottleneck is event recall, not boundary localization",
      "Leave-one-biomarker-out ablation shows diagnosis rests on two of four biomarkers; disabling the co-occurrence reinforcement term collapses sensitivity, so cross-biomarker evidence integration is doing real work",
      "Four independent diagnostics (feature separability, PR-vs-chance, error taxonomy, learning curves) rule out data scarcity as the sole explanation for the connected-speech gap",
      "Inference and the clinician GUI run on standard CPU hardware - no GPU required at deployment",
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
  },
  {
    title: "ChemoGAM",
    slug: "chemogam",
    tagline: "Can a glass-box model match a black box on longitudinal EHR risk prediction?",
    description:
      "Systematic benchmark of 8 interpretable GAM families against 5 tree/linear baselines on MIMIC-IV chemotherapy cohorts. An Explainable Boosting Machine reaches AUROC 0.8262, beating CatBoost on identical features - while exposing every prediction as a sum of inspectable shape functions.",
    longDescription:
      "Post-chemotherapy complications like neutropenic fever have early signatures in routine lab work, and ML predicts them well - but the models that win are black boxes, and SHAP explains an already-trained model rather than making the model transparent. This project asks whether inherently interpretable Generalized Additive Models can close that gap on MIMIC-IV chemotherapy cohorts (neutropenic fever, ~5% prevalence, 5-fold CV). Benchmarked 10 model families × 7 feature-set sizes × 6 selection methods. On raw high-dimensional longitudinal features interpretability costs ~4 AUROC points - the standard trade-off narrative. After feature selection that reverses: EBM (0.8262) overtakes CatBoost on the same features (0.8180) and effectively matches CatBoost's full 4,502-feature performance. The second headline is a negative result reported as a finding: three proposed architectures (HE-EBM, IG-EBM, SSTGAM) did not beat the baseline EBM, and the report says so rather than burying it. HE-EBM's per-expert breakdown diagnoses its own failure - three of five clinical expert groups sit at chance, so predictive signal is concentrated almost entirely in hematology. Project Biomedical Network Science, Biomedical Network Science Lab, FAU Erlangen-Nürnberg.",
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
      { label: "EBM, top-250 features", value: "0.8262 ± 0.0281", note: "beats CatBoost on identical features" },
      { label: "CatBoost, top-250 features", value: "0.8180 ± 0.0230" },
      { label: "CatBoost, full 4,502 features", value: "0.823 ± 0.023", note: "the benchmark to beat - EBM effectively matches it" },
      { label: "IG-EBM AUPRC", value: "0.2423 ± 0.0510", note: "best AUPRC of any interpretable model tested" },
      { label: "sstgam Brier (external benchmark)", value: "0.027", note: "5× lower than EBM at under half the fit time" },
    ],
    highlights: [
      "Baseline honesty: CatBoost tuned on the full 4,502-feature space is the benchmark, and it is stated when it wins",
      "Feature count treated as an experimental variable - trees improve or plateau as dimensionality grows, GAMs peak at k=50-150 then degrade; EBM is the exception",
      "Selector choice ablated across 6 ranking methods × 4 model families - boosted models prefer tree importance, smooth additive models prefer correlation",
      "Three novel architectures proposed, none beat baseline EBM, all reported with the diagnosis of why",
      "Established that feature representation drives performance more than architectural complexity - and flagged that this finding is itself conditional on the representations tested",
      "Shipped `sstgam`, a standalone MIT-licensed pip package: cyclic Newton boosting, tensor-product and lookup-table backends, 13 tests including parameter recovery, py.typed",
      "`sstgam` benchmarked on a deliberately independent public dataset (IEEE-CIS Fraud) so the package's benchmark story doesn't depend on the licensed chemo cohort",
      "Two negative results documented at equal length to the positive ones, including a refusal to over-claim the calibration edge",
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
      "GeoPulse ingests GDELT event data into PostgreSQL, derives per-country activity features, and serves them through a FastAPI backend to a Streamlit dashboard. It provides a country-level activity index built from the mix of events recorded for each country; a ~49M-event actor-interaction graph (countries, actors, locations, events, event-actor links) with CAMEO event codes mapped to interpretable interaction types - cooperation, consultation, conflict; and a Global Intelligence view built directly on that graph: an activity heatmap, a highlighted-events feed that keeps media attention, Goldstein magnitude, and country-day activity spikes as three independent signals rather than one blended score, and per-country summaries with interaction mix and top counterparts. The graph was migrated from PostgreSQL into an optional Neo4j copy with an idempotent, keyset-paginated loader whose verification pass reconciled node and relationship counts against Postgres exactly across all seven types (79.6M actor-event relationships, zero drift) - after finding that a Cypher MATCH on a missing node fails silently by returning zero rows rather than erroring. The scoring formula lives in one tested class, and the dashboard was driven end-to-end to fix stale-date, FIPS/ISO-3 and duplicate-category bugs.",
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
      "PostgreSQL event-graph pipeline over ~49M GDELT events (countries, actors, locations, events, event-actor links), CAMEO codes mapped to interaction types: cooperation, consultation, conflict",
      "Idempotent Postgres → Neo4j migration (keyset pagination, MERGE upserts) with a verification pass that reconciled every node/relationship type against Postgres exactly - 79.6M actor-event relationships, zero drift",
      "Highlighted-events feed keeps three independent signals per event instead of blending them: media attention (mentions), Goldstein magnitude, and a country-day activity spike vs a trailing 30-day baseline",
      "Scoring formula consolidated into one tested CompositeRiskScorer class with a coverage-based confidence value",
      "Drove the running app end-to-end and fixed stale-date, FIPS/ISO-3 and duplicate-category UI bugs",
      "FastAPI backend over the Postgres graph (/global, /country, /intelligence); 3-page Streamlit dashboard - activity map, country drilldown, and a 3-tab Global Intelligence view (heatmap, highlighted events, country summary)",
    ],
    architecture: [
      "GDELT Daily Event Exports",
      "PostgreSQL graph.* (events, actors, locations, event-actor edges)",
      "Neo4j (optional copy: idempotent, exactly-reconciled migration; not read by the dashboard)",
      "FastAPI (/global, /country, /intelligence)",
      "Streamlit (3 pages: activity map, drilldown, global intelligence)",
    ],
    featured: true,
    category: "infrastructure",
    status: "open-source",
    github: "https://github.com/mimo1999/GeoPulse",
  },
  {
    title: "Clinical RAG",
    slug: "clinical-rag",
    tagline: "German gynecology guideline assistant, built to refuse rather than guess",
    description:
      "Fully offline retrieval-augmented QA over seven DGGG/AWMF gynecologic-oncology guidelines. Hybrid BM25 + dense retrieval with RRF, cross-encoder reranking, and two-stage routing - running entirely on a single T4 with no hosted API of any kind.",
    longDescription:
      "In a hospital deployment no patient data may leave the building, and a confident wrong answer is worse than an honest 'I don't know.' This system answers clinical questions in German over seven guidelines, cites the passages it used, and declines when the retrieved context doesn't support an answer. Refusal is a primary design goal measured as its own rate, not a similarity threshold bolted on afterward - six additional guidelines were ingested beyond the mandatory one specifically to broaden the surface a trap question could wrongly match against, which makes refusal harder to achieve, not easier. The design was forced by a concrete failure: dense retrieval alone kept surfacing clinically similar but incorrect screening recommendations, because 'cytology yearly for 20-34' and 'co-testing every 3 years for 35+' are semantically near-identical sentences differing only in an age band. BM25 keys on the literal numbers and a cross-encoder scores the query-passage pair jointly, which fixed precision while holding recall. Judge validation is deliberately adversarial: the local judge is a different model family from the generator, and was cross-checked against a stronger independent judge that scores accuracy lower, not higher.",
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
      { label: "Recall@5 - brief's 12-question benchmark", value: "0.889" },
      { label: "Refusal correctness - out-of-domain traps", value: "1.000" },
      { label: "Recall@5 - self-built 37-question silver set", value: "0.649", note: "the more honest read of the system" },
      { label: "Refusal correctness - silver set", value: "0.838" },
      { label: "Answer accuracy - independent stronger judge", value: "0.778", note: "stricter than the local judge, reported as a check" },
    ],
    highlights: [
      "Hybrid BM25 + dense retrieval → Reciprocal Rank Fusion (k=60) → cross-encoder rerank → near-duplicate suppression",
      "Structure-aware chunking parses section hierarchy, recommendations, and tables, preserving metadata for citation",
      "Built a 37-question silver benchmark across all seven guidelines - including cross-lingual English-query-over-German-source - and reports the worse numbers it produced",
      "Local judge is deliberately a different model family from the generator, then cross-validated against a stronger independent judge over identical cached retrievals",
      "Retrieval's one real miss is named rather than averaged away: Q8 (colposcopy indication) fails Recall@5 in both runs",
      "What did not help is documented: widening top-k added irrelevant context - the bottleneck was ranking precision, not candidate coverage",
      "Two commands to deploy - no Docker, no Ollama, no accounts; incremental ingestion tracks PDFs by content hash",
      "Every retrieval hyperparameter lives in one env-var-overridable module, so A/B sweeps need no code edits",
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
  },
  {
    title: "Research Swarm",
    slug: "research-swarm",
    tagline: "Evidence-first LangGraph research pipeline with human-in-the-loop review",
    description:
      "LangGraph pipeline that frames a question, plans sub-questions, searches PubMed/Europe PMC/arXiv/the web, extracts quoted facts and locates each quote in its source, verifies every fact, and writes a report where every sentence is tied to the facts it cites - with a human review pause before writing.",
    longDescription:
      "A supervisor agent probe-searches the literal question, extracts the constraint that separates it from its general subject (a one-call question frame), then plans sub-questions. Research stages run on a small local model (gemma4:e2b via Ollama); a larger model (gemma4:31b-cloud) is used only for planning and writing and can be switched off with one setting. The top primary arXiv papers are also read in full text (the ~6,000 characters best matching the question), so specifics come from the paper rather than blogs summarising it. Papers and uploaded documents are scored and extracted with no embeddings or vector store: a light LLM call ranks candidates, and one extraction call per batch turns sources into facts, each carrying a verbatim quote located back in its source. Sub-questions still short on grounded evidence go through a gap-fill search pass. A single verifier call per ten facts applies a fixed verdict policy in code, and the writer tags every sentence with the facts it rests on so citations are numbered and rendered by code, not generated by the model - with a pause for human review before the report is written. Reports are shaped by audience (academic, technical, general, executive), and questions with a strict term (lossless, exactly equivalent) carry a proof criterion: the sentence is removed unless a cited fact states it. An alternative evidence-packet path (one large-model call reading numbered source sentences instead of the extract/verify chain) matches the fact chain's accuracy on a paired SciFact evaluation at roughly a third of its large-model tokens. 287 tests, all LLMs mocked for fully offline CI; a Gradio app runs on a Hugging Face ZeroGPU Space with the research stages in-process.",
    technologies: [
      "LangGraph",
      "LangChain",
      "Pydantic",
      "Ollama",
      "Hugging Face Transformers",
      "Streamlit",
      "Python",
    ],
    metrics: [
      { label: "Ablation Answer Score", value: "0.27 → 0.44" },
      { label: "LLM Calls / Task", value: "10.2 → 4.4" },
      { label: "SciFact Verdict Accuracy", value: "0.40 → 0.77" },
      { label: "Test Suite", value: "287 tests" },
    ],
    benchmarks: [
      { label: "Paired ablation, answer score", value: "0.27 → 0.44", note: "90-task closed corpus" },
      { label: "Paired ablation, LLM calls/task", value: "10.2 → 4.4" },
      { label: "Evidence-packet path vs fact chain", value: "0.80 vs 0.77", note: "SciFact, ~2k vs ~7.2k large-model tokens/task" },
      { label: "Relevance scorer vs word overlap", value: "nDCG@10 0.848 vs 0.787", note: "HotpotQA" },
      { label: "Single Claude Haiku 4.5 call vs pipeline", value: "0.80 vs 0.77", note: "SciFact, 30 claims: a frontier single call matches the pipeline's verdict accuracy (rationale precision 0.68 vs 0.29), so the case for the pipeline is cost and auditability, not accuracy" },
      { label: "Rationale grounding, quote made required", value: "F1 0.28 → 0.40", note: "benchmark found the model omitted the quote on all 192 facts; fixed in the schema, 184 of 200 now quote-grounded" },
    ],
    highlights: [
      "Question frame enforced in code at every stage - planning, scoring, coverage, verification and writing - so a small planner dropping a constraint can't derail the run",
      "No embeddings or vector store: papers are ranked by a light LLM scorer over titles/abstracts, sources read whole",
      "Every fact carries a verbatim quote located back in its source in code; a fact whose quote can't be found is refuted without an LLM call",
      "One verifier call per ten facts applies a fixed verdict policy; the writer cites by fact number, rendered and numbered by code",
      "Gap fill re-searches only the sub-questions still short on grounded, on-scope evidence",
      "Deep read: full text of the top primary arXiv papers, trimmed to the passages best matching the question",
      "Strict-claim proof rule and audience-specific report shapes (academic / technical / general / executive); unanswered sub-questions are listed as gaps, not padded with nearby material",
      "Local-first: small local model for research stages, large model only on planner and writer; session-wide token budget pools and retry with backoff; SSRF-validated fetching and prompt-injection scanning",
      "Evidence-packet alternative: one large-model call over numbered source sentences, code-audited citations - matches fact-chain accuracy at ~1/3 the large-model tokens",
      "287 tests - fully offline with mocked LLMs; supports Anthropic, OpenAI, Ollama and in-process Hugging Face transformers (ZeroGPU Space)",
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
  },
  {
    title: "Flowify",
    slug: "flowify",
    tagline: "Interactive graph-grounded code explorer with LLM Q&A",
    description:
      "Ingests any repository into a dual-layer call graph (function + module level) with multi-language AST parsing, renders it with ReactFlow, and answers natural-language questions anchored to real graph traversal - not vector search alone.",
    longDescription:
      "Built for an IBM hackathon and since hardened for public hosting - ~9,800 lines of Python across 22 backend files, 46 HTTP routes, a ~3,800-line React frontend, an MCP server for IDE assistants, and a live demo on Render. Flowify processes a codebase in three phases: repo-context analysis (README, manifests, entry points), AST/semantic enrichment (six languages → Canonical Intermediate Representation → per-function LLM summaries), and continuous learning (query patterns + feedback adjust relevance scores). Retrieval runs multi-signal TF-IDF → LLM re-rank → BFS over real call edges, with the LLM acting only as a ranker over a candidate set so the pipeline degrades to pure TF-IDF rather than failing. The frontend renders a dual-layer graph via ReactFlow + Dagre auto-layout with 5 semantic edge types (CALLS, EXPOSES_API, USES_DB, EMITS_EVENT, CONSUMES_EVENT). Answers show which graph nodes were consulted, numbered call-chain steps, and a grounded-in-N-nodes badge. Call edges are resolved by a scoped, confidence-ranked matcher (self-call, attribute type, receiver class, module import, same-file, unique repo-wide) and an ambiguous call is dropped rather than guessed. Repos with many top-level modules open as a lane overview (one card per lane, laid out by call direction) that drills into a focus view. On a hosted instance three guards (source size, node count, parse time) reject an oversized repo fast instead of running out of memory, after ingest peak memory was cut ~55% by removing duplicate in-memory graph copies. The LLM layer is provider-neutral: Ollama (local or Cloud), Claude, OpenAI, Copilot, OpenClaw or a no-LLM heuristic mode, plus per-request bring-your-own-key headers so visitors can use their own key without the server holding one. MCP-compatible endpoints serve LLM assistants.",
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
      "Multi-language AST parsing (Python, JS, TS, Java, C, C++) → Canonical Intermediate Representation",
      "Graph structure is the retrieval index - no embeddings anywhere, because `create_user` and `delete_user` embed almost identically",
      "Deterministic graph analytics: PageRank, betweenness (exact→sampled above a size threshold), cycles, bridges, dead code, god nodes, surprising couplings",
      "Knowledge layer links READMEs/ADRs/RFCs to the code they document, with a Provenance record (ast | static_analysis | regex | llm | heuristic | user) on every derived fact",
      "`LLM_PROVIDER=heuristic` runs the entire pipeline offline with real static analysis - not stub generation",
      "Dual-layer graph: function-level + module-level via greedy modularity community detection (NetworkX)",
      "Lane overview to focus view: repos with many roots open as one card per lane ordered by call direction, with neighbouring lanes to hop between",
      "Scoped call resolver ranks candidates by confidence and drops ambiguous calls, so the cited call chain contains only edges that exist",
      "Hosted-instance guards (source size, node count, parse time) return HTTP 413 with the measured value; ingest peak memory cut ~55%; whole-repo view capped at 600 rendered nodes with a \"Showing N of M\" banner",
      "Bring-your-own-key via request headers (never logged or persisted); per-IP rate limit and a global daily LLM cap protect a shared server; provider error text is sanitised before reaching the UI",
      "Accessible UI: focus-trapped dialogs, keyboard-operable lane cards and tabs, live regions, prefers-reduced-motion; one-time onboarding modal",
      "Live demo on Render (Docker, CI on every push, GHCR image on version tags)",
      "5 semantic edge types colour-coded in ReactFlow: CALLS, EXPOSES_API, USES_DB, EMITS_EVENT, CONSUMES_EVENT",
      "Change-impact analysis: risk level (low/medium/high/critical), caller list, DB operations, affected modules",
      "Graph-grounded NLP: answers anchored to BFS traversal with 'Grounded in N nodes' badge",
      "Continuous learning: query patterns and 👍/😐/👎 feedback adjust node relevance over time",
      "MCP-compatible API endpoints for LLM assistant and VS Code integration",
      "Provider-neutral LLM layer: Ollama (local or Cloud), Claude, OpenAI, Copilot, OpenClaw, or heuristic mode with no LLM",
    ],
    architecture: [
      "Phase 1: Repo Context (README, manifests, entry points)",
      "Phase 2: AST → CIR → LLM Summaries",
      "Phase 3: Continuous Learning (feedback loop)",
      "Ingest guards (size / node count / parse time) on hosted instances",
      "FastAPI Backend (46 routes) + MCP Server",
      "ReactFlow + Dagre Frontend",
    ],
    featured: true,
    category: "genai",
    status: "open-source",
    github: "https://github.com/mimo1999/Flowify_toolkit",
    demo: "https://flowify-7vcn.onrender.com/",
  },
  {
    title: "Hidden Shape Reconstruction",
    slug: "hidden-shape-reconstruction",
    tagline: "Recovering 3D shape hidden beneath draped cloth from a single RGB image",
    description:
      "Predicts the concealed 3D shape of an object under draped cloth from a single photo, via an end-to-end pipeline: Blender physics-based cloth-drape simulation over 100 real 3D scans, paired RGB/distance-map rendering, and a MobileNetV2 U-Net that learns to invert the draping physics.",
    longDescription:
      "Mirrors a real perceptual ability - inferring the shape of a fully-covered object (a car under a tarp, a bust under a veil) just from how cloth drapes over it. Built an end-to-end pipeline from selecting 3D objects, physically simulating cloth draping over them in Blender 3.6, rendering a paired image dataset, to training a neural network that inverts the draping process. 100 everyday objects from OmniObject3D were cleaned and unit-normalised with PyMeshLab, then draped with a physically simulated cotton-like cloth; two rendering batches (100 objects x 50 viewpoints each) produced 10,000 paired RGB/distance-map images. A MobileNetV2-encoder U-Net (~2.55M params) learns to map the RGB cloth image directly to a distance map encoding hidden geometry, trained with a hybrid SSIM + foreground-weighted Charbonnier loss and wide zoom augmentation to generalize across both rendering batches' framing conventions.",
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
      { label: "Contact-region IoU", value: "0.6521", note: "vs. independent 3D geometric ground truth" },
      { label: "Contact-region F1", value: "0.7894" },
      { label: "Contact pixel accuracy", value: "0.9772" },
    ],
    highlights: [
      "Built to test a cognitive-science hypothesis: whether human 'shape scission' needs top-down physics simulation (Yildirim et al.) or emerges from bottom-up learned features (Phillips & Fleming)",
      "The obvious 0.5 threshold yields IoU = 0 - the hybrid loss smooths extremes so predictions never exceed ~0.43; 0.25 is derived from a sweep matching GT and predicted contact-pixel fractions",
      "End-to-end pipeline: mesh cleanup -> Blender cloth-drape physics simulation -> paired RGB/distance-map rendering -> training",
      "100 real-world 3D scans (OmniObject3D) draped and rendered from 50 viewpoints each, pooled across two batches (10,000 paired images)",
      "MobileNetV2 U-Net (~2.55M params) trained on a 4GB GPU, <500MB VRAM at batch 32",
      "Hybrid SSIM + foreground-weighted Charbonnier loss prevents collapse to all-black predictions on background-heavy targets",
      "Wide zoom augmentation (0.5x-1.4x) needed to generalize across two rendering batches with different object framing",
      "Validated predicted contact regions against independent 3D geometric ground truth recomputed from the meshes: 0.652 IoU, 0.789 F1, 0.977 pixel accuracy",
      "Custom browser-based Flask + canvas annotation tool for manually labeling fabric-vs-contact regions on real photos",
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
    tagline: "8 CVPR/MICCAI 2024 papers reproduced on one free-tier GPU - including the numbers that didn't match",
    description:
      "Independent reproduction of eight peer-reviewed papers across six research areas, each rebuilt end-to-end on a single Tesla T4. Reports FID off by 10×, metrics that were not reproducible at all, and a paper whose test results looked too good.",
    longDescription:
      "Reproducibility in deep learning is asserted far more often than it is tested. This project takes eight CVPR 2024 and MICCAI 2024 papers, rebuilds each experimental pipeline from the authors' released code, and validates the reported benchmark tables against independently regenerated numbers - documenting environment surgery, dataset substitutions, metrics that could not be reproduced, and in one case a suspected test-set contamination caught and corrected. Several papers were developed on multi-GPU clusters; adapting distributed pipelines to single-GPU execution was part of the work. The most valuable output of a reproducibility study is the list of things that didn't reproduce, and that list is the centrepiece rather than a footnote. The project also critiques its own protocol - arguing that its PromptSmooth max-over-noise-levels reporting flatters the model and shouldn't be the headline, then publishing both rows side by side.",
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
      { label: "CDFormer - PSNR/SSIM", value: "Closest match in the set", note: "4 benchmarks × 3 scale factors" },
      { label: "RepKPU - P2S / Hausdorff", value: "Not reproducible", note: "depends on an eval repo the authors don't ship" },
      { label: "Learned Repr-Guided Diffusion - FID", value: "61-79 vs published 6-10", note: "diagnosed as sample-size and data-subset effect" },
    ],
    highlights: [
      "Caught a suspected leaked test set: Dual Prior Unfolding reproduced at implausibly high PSNR (54.93 dB), flagged rather than reported, then re-run on a held-out split - the corrected numbers align with the paper and confirm its actual claim",
      "Reproduced COCO detection tables exactly across five detector configurations",
      "Reports what did not reproduce as the centrepiece: FID off by 10×, two RepKPU metrics not computable at all",
      "Critiques its own evaluation protocol - argues the max-over-noise-levels row it reports flatters PromptSmooth, and publishes the per-level breakdown alongside it",
      "Documents the unglamorous blockers papers omit: deprecated CUDA extensions patched to the current ATen API, a missing requirements.txt reconstructed from source, invalid environment pins corrected",
      "Adapted multi-GPU training pipelines to a single 15 GB T4, disclosing every dataset substitution rather than quietly shrinking scope",
      "Found the a-priori difficulty ratings wrong in both directions - 'ships a pretrained model' predicted reproduction cost poorly; dataset acquisition drove it",
      "Delivered 8 of 12 proposed papers, and says so - the four not delivered required full training from scratch or large volumetric datasets",
    ],
    architecture: [
      "8 Self-Contained Colab Notebooks",
      "Per-Paper Isolated conda Environments",
      "Checkpoint + Dataset Staging (~112 GB via Drive)",
      "Reproduced Metrics Table per Paper",
      "Result Analysis + Methodological Critique",
    ],
    featured: false,
    category: "computer-vision",
    status: "research",
    github: "https://github.com/mimo1999/cvpr-paper-reproductions",
  },
  {
    title: "RKOS",
    slug: "rkos",
    tagline: "Research Knowledge Operating System - papers as a typed document graph",
    description:
      "Local-first desktop app that parses research PDFs into a typed document graph, speed-reads them with structure-aware RSVP, and converts reading into spaced repetition. ~4,800 lines of Python, 14 Postgres tables, zero cloud services.",
    longDescription:
      "The problem it solves is specific: mid-thesis, a Downloads folder of 400 PDFs with unusable filenames and a Zotero library that had stopped being trustworthy. RSVP - flashing one word at a time at a fixed focal point to eliminate saccades - roughly doubles comfortable skim speed, but every RSVP tool on the market is built for blog posts and will happily machine-gun a LaTeX equation, a results table, and a page footer at 500 WPM as if they were prose. RKOS's thesis is that RSVP on academic PDFs only works if the reader knows what it's looking at. So each paper is parsed into a typed tree - sections, paragraphs, figures, tables, equations, captions - persisted in a self-referencing Postgres table queried with recursive CTEs, and the reader paces itself off that structure. Equations slow to 100 WPM. Figures pause with a dedicated card at a section boundary rather than mid-sentence. Running headers, affiliations, and citation markers never reach the screen. Postgres was chosen over the original SQLite spec for a nameable reason: GIN full-text search with a pg_trgm typo-tolerant fallback and recursive-CTE tree traversal are both native, where SQLite would have meant hand-rolling one and denormalising the other.",
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
      "Every paper is a document graph, not a blob of text - typed nodes in a self-referencing table, queried with recursive CTEs",
      "Four content-aware pacing tiers (100 WPM for equations up to 300 for prose) plus per-punctuation dwell multipliers (2.0× for sentence ends, 1.5× for clauses)",
      "Optimal Recognition Point highlighting on a length-banded pivot - the character the eye should actually fixate on",
      "~15-pass PDF cleanup: cross-page running-header detection, affiliation and citation stripping, dot leaders, letter-spaced run repair, garbled-text flagging",
      "SM-2 spaced repetition implemented directly rather than pulled from a library, over auto-generated flashcards across five slots",
      "Knowledge score blending reading progress, figure-view ratio, and flashcard recall - approximating whether you absorbed a paper rather than merely opened it",
      "Topic inference and flashcard generation sit behind protocol interfaces; the Ollama generator already demonstrates heuristic → LLM as a swap, not a rewrite",
      "Honest about its gaps: no evaluation of the extraction pipeline, no automated test suite, pgvector seam pre-cut but not wired up",
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
      "A full-stack web application for managing and analysing customer invoices - a data table UI for browsing, filtering, and editing invoice records, a natural-language chatbot for querying invoice data conversationally, and a Python model server for ML-based payment-behaviour predictions.",
    longDescription:
      "Built for accounts-receivable teams that need to track, query, and act on large volumes of customer invoices. A Java servlet backend (Tomcat) serves a React frontend and a REST-style API backed by MySQL, supporting invoice browsing/filtering by customer name, business code, or open-amount thresholds, inline edits, and per-customer outstanding-balance summaries. A Node.js/Dialogflow chatbot layer lets users ask plain-English questions (\"What is Acme Corp's outstanding balance?\") against the same data. A separate Python/Flask model server exposes ML-based payment-behaviour predictions over HTTP, decoupled from the Java backend so the inference layer can evolve independently.",
    technologies: [
      "Java",
      "Apache Tomcat",
      "React",
      "MySQL",
      "Node.js",
      "Dialogflow",
      "Python",
      "Flask",
    ],
    metrics: [
      { label: "Invoices", value: "50,000" },
      { label: "Lifecycle Columns", value: "47" },
      { label: "Services", value: "4" },
      { label: "API Endpoints", value: "9" },
    ],
    highlights: [
      "Four services across four languages - Java/Tomcat servlet API, React data table, Node.js Dialogflow chatbot, Python XGBoost predictor - over MySQL via JDBC, REST/JSON, and CORS",
      "XGBoost regressor over 50,000 invoices and 47 lifecycle columns, thresholded at 90% of the open amount into a tunable full-vs-partial decision",
      "Regressing the amount and thresholding afterward keeps the predicted magnitude available to collections and makes the tolerance a business parameter, not a frozen model weight",
      "`Shipping_avail` encodes missing shipping data as a null-indicator feature rather than imputing it - whether a ship date was ever recorded is itself signal",
      "Model-agnostic serving layer dynamically loads a pickled model and its matching transformation class by ID - deploying a new model means dropping in two files, so preprocessing stays versioned alongside weights",
      "Known gap, stated in the project's own README: no held-out split or reported regression/classification metrics - the model runs but its accuracy is unmeasured",
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
