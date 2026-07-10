export interface SkillGroup {
  category: string;
  icon: string;
  description: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "LLM & Agents",
    icon: "Bot",
    description: "Agentic architectures, RAG pipelines, and LLM orchestration",
    skills: [
      "LangChain",
      "LangGraph",
      "MCP",
      "RAG Pipelines",
      "Pydantic",
      "Hugging Face Transformers",
      "Ollama",
      "OpenAI API",
      "Anthropic API",
      "Fine-tuning (LoRA/PEFT)",
      "Context Engineering",
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: "Brain",
    description: "Core ML/DL frameworks and research-to-production model development",
    skills: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "ONNX",
      "Computer Vision",
      "NLP",
      "Multimodal Learning",
      "Time-Series Forecasting",
      "Generative AI",
    ],
  },
  {
    category: "Databases & Graph Stores",
    icon: "Database",
    description: "Vector stores, graph databases, and analytical data stores",
    skills: [
      "ChromaDB",
      "pgvector",
      "Qdrant",
      "Neo4j",
      "MongoDB",
      "Snowflake",
      "TimescaleDB",
      "PostGIS",
    ],
  },
  {
    category: "Serving & Deployment",
    icon: "Server",
    description: "Production ML serving, CI/CD, and HPC compute",
    skills: [
      "FastAPI",
      "Docker",
      "Azure DevOps",
      "Jenkins",
      "Slurm",
      "Streamlit",
      "Podman",
      "Pytest",
    ],
  },
  {
    category: "Cloud Platforms",
    icon: "Cloud",
    description: "Managed ML services and cloud infrastructure",
    skills: [
      "AWS (SageMaker, S3)",
      "Azure ML",
      "GCP (BigQuery, Vertex AI, ADK)",
    ],
  },
  {
    category: "Languages",
    icon: "Code",
    description: "Programming and scripting languages",
    skills: [
      "Python",
      "SQL",
      "JavaScript",
      "Bash",
      "C",
      "C++",
    ],
  },
];
