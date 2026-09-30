export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: "full-time" | "internship" | "part-time" | "teaching";
  description: string;
  problem: string;
  actions: string[];
  results: string[];
  technologies: string[];
  logo?: string;
  /** Exact dates when known: start inclusive, end exclusive (ISO, first of month). Used for the duration shown on the home page. */
  start?: string;
  end?: string;
  /** One-line, most indicative stack; shown on the home page. */
  stackSummary: string;
}

export const experience: Experience[] = [
  {
    company: "Siemens Healthineers",
    // English-language site: "Working Student", not "Werkstudent", so non-German
    // readers can parse it - per career_kit/persona/identity.md. The role-type
    // label matters; "Part-time" would describe only the hours and invite a
    // reader to discount the 17 months the "3+ years" claim partly rests on.
    role: "AI Infra Engineer (Working Student)",
    stackSummary:
      "RAG over code knowledge graphs, MCP + Copilot agent, Azure DevOps CI/CD, Slurm/HPC, Podman",
    period: "Apr 2025 - present",
    location: "Erlangen, Germany",
    type: "part-time",
    description:
      "Re-architecting CI/CD and HPC infrastructure for medical hardware simulation and synthesis pipelines, improving developer velocity and compute efficiency across the R&D DI department.",
    problem:
      "Medical simulation and synthesis pipelines ran on fragmented sequential CI stages with long HPC queue times, high manual intervention rates, and no containerized execution strategy - causing slow iteration and wasted compute.",
    actions: [
      "Designed and implemented codebase-wide RAG ingestion across 30+ FPGA repositories, converting repository dependencies and code structure into knowledge graphs, and exposed the retrieval layer through MCP to a Copilot agent for skill-based RTL orchestration and Questa OneSpin validation workflows",
      "Redesigned Azure DevOps CI/CD pipelines into a parallel execution framework that dispatched independent build flows from a single repository checkout",
      "Performed resource and compute utilization analysis of containerized (Podman) FPGA simulation workloads, validating Slurm-based offloading as a scalable alternative to the existing CI execution model",
      "Architected a hybrid Azure DevOps-Slurm workflow that offloaded FuseSoC jobs to dynamically allocated HPC nodes",
      "Improved the reliability of FuseSoC-based FPGA development by implementing Pytest regression tests, resolving test-case bugs, and validating new package management features",
    ],
    results: [
      "~20% reduction in CI runtime",
      "~60% less manual effort",
      "~50% improvement in compute utilization",
      "~35% reduction in job turnaround",
    ],
    technologies: [
      "Python",
      "Azure DevOps",
      "Slurm",
      "Podman",
      "Linux",
      "Pytest",
    ],
  },
  {
    company: "FAU Erlangen-Nürnberg",
    role: "Teaching Assistant, Deep Learning",
    stackSummary:
      "Mentorship, Core DL, PyTorch",
    period: "Nov 2024 - Mar 2025",
    location: "Erlangen, Germany",
    type: "teaching",
    description:
      "Mentored M.Sc. students in implementing and debugging CNN, RNN, and Transformer models in PyTorch for the university's deep learning course.",
    problem:
      "Students needed hands-on guidance implementing complex DL architectures (CNNs, RNNs, regularization, optimization) from scratch in PyTorch.",
    actions: [
      "Mentored M.Sc. students in implementing and debugging CNN, RNN, and Transformer models using PyTorch",
    ],
    results: [
      "Supported a full semester cohort",
      "Hands-on PyTorch tutoring",
    ],
    technologies: ["PyTorch", "Python"],
  },
  {
    company: "HighRadius",
    role: "Associate Software Engineer, Data Science",
    stackSummary:
      "Production forecasting models, Snowflake/SQL ETL over multi-ERPs, Jenkins, Docker, AWS",
    period: "Jun 2021 - Aug 2023",
    start: "2021-06-01",
    end: "2023-09-01", // last day 31 Aug 2023
    location: "Bhubaneswar, India",
    type: "full-time",
    description:
      "Built and deployed production cash-flow forecasting ML systems for Fortune 500 enterprise clients, led feature engineering research that resulted in two US patents (one granted), and optimized AWS infrastructure costs.",
    problem:
      "Enterprise clients needed accurate cash-flow forecasts integrated with heterogeneous ERP systems (SAP, Oracle, NetSuite). Existing approaches lacked generalization across client datasets and had high AWS infrastructure costs.",
    actions: [
      "Led ML treasury-forecasting delivery for 8 Fortune 500 enterprise accounts as primary technical contact, and mentored 10+ interns",
      "Productized 50+ forecasting models processing up to 6 million line items into HighRadius's AI-powered Treasury product (recognized as an IDC MarketScape Major Player)",
      "Built two patented models: payroll cash-flow forecasting (95%+ accuracy) and a customer-behavior feature framework that lifted accuracy 20-30% across production accounts",
      "Built SQL/Snowflake ingestion pipelines that standardized multi-ERP data (SAP, Oracle, NetSuite) into a unified modeling schema",
      "Re-engineered ML pipelines with multiprocessing and compute-efficient design, lowering annual AWS infrastructure costs",
      "Translated client cash-flow pain points into ML problem statements through discovery sessions as embedded data-science consultant",
    ],
    results: [
      "90%+ first-week forecast accuracy",
      "95%+ one-year cumulative accuracy",
      "8 enterprise accounts deployed",
      "~20% AWS cost reduction",
      "10-15% faster client onboarding",
      "20-30% model accuracy improvement",
    ],
    technologies: [
      "Python",
      "SQL",
      "Snowflake",
      "Jenkins",
      "Docker",
      "AWS",
    ],
  },
  {
    company: "HighRadius",
    role: "Data Science Intern",
    stackSummary:
      "Python automation: Forecast Confidence reports",
    period: "Jun 2020 - Jun 2021",
    start: "2020-06-01",
    end: "2021-06-01",
    location: "Bhubaneswar, India",
    type: "internship",
    description:
      "Cut client-side forecast validation time and manual forecast-loading effort for cash-flow forecasting products.",
    problem:
      "Clients spent significant time validating forecasts by hand, and forecast loading required manual effort through a legacy UI.",
    actions: [
      "Built an Openpyxl report that cut client-side forecast validation time by 50%",
      "Automated the legacy forecast-loading workflow with credential-parameterized cloud scripts, cutting manual effort by 70%",
    ],
    results: [
      "50% faster client-side forecast validation",
      "70% less manual effort in forecast loading",
    ],
    technologies: ["Python", "SQL", "AWS", "Openpyxl"],
  },
  {
    company: "HighRadius",
    role: "Full Stack Intern",
    stackSummary:
      "Polyglot microservices architecture: Java/Tomcat, React, Node.js/Express, Python/Flask, MySQL",
    period: "Apr 2020 - Jun 2020",
    location: "Bhubaneswar, India",
    type: "internship",
    description:
      "Built an AI-enabled accounts-receivable dashboard with a payment-date prediction model.",
    problem:
      "Accounts-receivable teams needed a single view of open invoices with a prediction of when each would be paid.",
    actions: [
      "Built an AI-enabled accounts-receivable dashboard (React, Java/SQL, Dialogflow)",
      "Trained an XGBoost model to predict invoice payment dates",
    ],
    results: ["Dashboard with payment-date prediction"],
    technologies: ["React", "Java", "SQL", "Dialogflow", "XGBoost"],
  },
];

export const education = [
  {
    institution: "Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU)",
    degree: "Master of Science in Artificial Intelligence",
    period: "Oct 2023 - Sep 2026",
    location: "Erlangen, Germany",
    gpa: "1.6 (German scale, 1.0 = best)",
    thesis:
      "Multimodal Time-Resolved Detection of Adductor Laryngeal Dystonia Biomarkers",
    courses: [
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Machine Learning",
      "Algorithms",
    ],
  },
  {
    institution: "Kalinga Institute of Industrial Technology (KIIT)",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "Jun 2017 - Jun 2021",
    location: "Bhubaneswar, India",
    gpa: "1.4 (German scale equivalent, 1.0 = best)",
    courses: [
      "Data Structures",
      "Operating Systems",
      "Database Systems",
      "Computer Networks",
      "Software Engineering",
    ],
  },
];

export const awards = [
  {
    title: "3rd Prize - Healthcare Hackathon",
    organization: "Siemens Healthineers × Medical Valley",
    year: "2024",
    description:
      "Built Flora, a patient-facing conversational avatar with RAG over an embedded vector database of medical information, supporting medication reminders, appointment tracking, and PDF report summarization.",
  },
  {
    title: "2nd Prize - Graphathon",
    organization: "Siemens Healthineers × Neo4j",
    year: "2026",
    description:
      "Built a job-market intelligence pipeline using LLM-based extraction of skills and technologies from live postings into Neo4j and Databricks, surfaced via a Streamlit dashboard.",
  },
];

export const patents = [
  {
    title: "ML systems for cash-flow forecasting",
    subtitle: "for professional employer organizations",
    number: "US-12657596-B2",
    year: "2025",
    status: "granted" as const,
    // career_kit lists https://patents.google.com/patent/US12657596B2/en, but that
    // page 404s - likely not yet indexed. Left unlinked so the number still shows
    // without shipping a dead link; add `url` once Google Patents picks it up.
    url: undefined as string | undefined,
    description:
      "End-to-end ML system for enterprise cash-flow forecasting with adaptive model selection and drift-aware retraining pipeline.",
  },
  {
    title: "ML-based prediction of financial transaction patterns",
    number: "US20250217746A1",
    year: "2025",
    status: "pending" as const,
    url: "https://patents.google.com/patent/US20250217746A1/en",
    description:
      "Customer-behavior feature engineering framework for predicting financial transaction patterns across heterogeneous enterprise datasets.",
  },
];
