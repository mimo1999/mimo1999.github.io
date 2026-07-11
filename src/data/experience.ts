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
}

export const experience: Experience[] = [
  {
    company: "Siemens Healthineers",
    role: "Working Student, R&D DI",
    period: "Apr 2025 – present",
    location: "Erlangen, Germany",
    type: "part-time",
    description:
      "Re-architecting CI/CD and HPC infrastructure for medical hardware simulation and synthesis pipelines, improving developer velocity and compute efficiency across the R&D DI department.",
    problem:
      "Medical simulation and synthesis pipelines ran on fragmented sequential CI stages with long HPC queue times, high manual intervention rates, and no containerized execution strategy — causing slow iteration and wasted compute.",
    actions: [
      "Designed an MCP-based integration concept for orchestrating Questa OneSpin RTL validation through FuseSoC workflows",
      "Redesigned Azure DevOps CI/CD pipelines into a parallel execution framework that dispatched independent build flows from a single repository checkout",
      "Performed resource and compute utilization analysis of containerized (Podman) FPGA simulation workloads, validating Slurm-based offloading as a scalable alternative to the existing CI execution model",
      "Architected a hybrid Azure DevOps–Slurm workflow that offloaded FuseSoC jobs to dynamically allocated HPC nodes",
      "Improved the reliability of FuseSoC-based FPGA development by implementing Pytest regression tests, resolving test-case bugs, and validating new package management features",
    ],
    results: [
      "~20% reduction in CI runtime",
      "~60% fewer manual interventions",
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
    period: "Nov 2024 – Mar 2025",
    location: "Erlangen, Germany",
    type: "teaching",
    description:
      "Coached students through implementing and debugging deep learning models in PyTorch as part of the university's deep learning course.",
    problem:
      "Students needed hands-on guidance implementing complex DL architectures (CNNs, RNNs, regularization, optimization) from scratch in PyTorch.",
    actions: [
      "Coached students through implementing and debugging CNNs, RNNs, regularization techniques, and optimization strategies",
      "Conducted office hours and code reviews to help students understand backpropagation and gradient-based optimization",
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
    period: "Jun 2021 – Aug 2023",
    location: "Bhubaneswar, India",
    type: "full-time",
    description:
      "Built and deployed production cash-flow forecasting ML systems for Fortune 500 enterprise clients, led feature engineering research that resulted in two US patent applications, and optimized AWS infrastructure costs.",
    problem:
      "Enterprise clients needed accurate cash-flow forecasts integrated with heterogeneous ERP systems (SAP, Oracle, NetSuite). Existing approaches lacked generalization across client datasets and had high AWS infrastructure costs.",
    actions: [
      "Shipped cash-flow forecasting models (clustering + regression) to production for 8 enterprise accounts including Fortune 500 clients",
      "Designed a customer-behavior feature engineering framework that generalized across heterogeneous client datasets — core ideas filed in 2 US patent applications",
      "Built SQL/Snowflake ingestion pipelines that standardized multi-ERP data (SAP, Oracle, NetSuite) into a unified modeling schema",
      "Re-engineered ML pipelines with multiprocessing and compute-efficient design, lowering annual AWS infrastructure costs",
      "Translated client cash-flow pain points into ML problem statements through discovery sessions as embedded data-science consultant",
    ],
    results: [
      "90%+ first-week forecast accuracy",
      "95%+ one-year cumulative accuracy",
      "8 enterprise accounts deployed",
      "~20% AWS cost reduction",
      "10–15% faster client onboarding",
      "20–30% model accuracy improvement",
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
    period: "Jun 2020 – Jun 2021",
    location: "Bhubaneswar, India",
    type: "internship",
    description:
      "Improved ML pipeline efficiency and automated legacy workflows for cash-flow forecasting products.",
    problem:
      "Feature selection was slow due to exhaustive grid search, and forecast loading required significant manual effort through a legacy UI.",
    actions: [
      "Replaced exhaustive grid search with an auxiliary feature-importance pre-filter, reducing feature-selection runtime",
      "Automated a legacy UI workflow for forecast loading with credential-parameterized cloud scripts",
    ],
    results: [
      "40% faster feature selection",
      "70% less manual effort in forecast loading",
    ],
    technologies: ["Python", "SQL", "AWS"],
  },
];

export const education = [
  {
    institution: "Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU)",
    degree: "Master of Science in Artificial Intelligence",
    period: "Oct 2023 – Aug 2026",
    location: "Erlangen, Germany",
    gpa: "1.6 (German scale, 1.0 = best)",
    thesis: "Multimodal AI for Clinical Voice Diagnostics",
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
    period: "Jun 2017 – Jun 2021",
    location: "Bhubaneswar, India",
    gpa: "1.5 (German scale equivalent, 1.0 = best)",
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
    title: "3rd Prize — Healthcare Hackathon",
    organization: "Siemens Healthineers × Medical Valley",
    year: "2025",
    description:
      "Built Flora, a patient-facing conversational avatar with RAG over an embedded vector database of medical information, supporting medication reminders, appointment tracking, and PDF report summarization.",
  },
  {
    title: "2nd Prize — Graphathon",
    organization: "Siemens Healthineers × Neo4j",
    year: "2025",
    description:
      "Built a job-market intelligence pipeline using LLM-based extraction of skills and technologies from live postings into Neo4j and Databricks, surfaced via a Streamlit dashboard.",
  },
];

export const patents = [
  {
    title: "ML-based prediction of financial transaction patterns",
    number: "US20250217746A1",
    year: "2025",
    description:
      "Customer-behavior feature engineering framework for predicting financial transaction patterns across heterogeneous enterprise datasets.",
  },
  {
    title: "ML systems for cash-flow forecasting",
    number: "US20240354786A1",
    year: "2024",
    description:
      "End-to-end ML system for enterprise cash-flow forecasting with adaptive model selection and drift-aware retraining pipeline.",
  },
];
