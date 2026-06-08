export const projects = [
  {
    slug: "ai-persona",
    title: "AI Persona",
    type: "Agentic AI / RAG Backend",
    status: "Deployed system",
    description:
      "A grounded AI assistant system that answers questions using structured portfolio data, retrieval, and citation-backed responses.",
    longDescription:
      "AI Persona is a deployable assistant system built around structured knowledge, retrieval, grounding, and controlled response behavior. In the portfolio it is treated as a standalone project, while the separate Chat with me page will later use its backend through a custom portfolio interface.",
    tags: ["RAG", "Vector Search", "Cloudflare", "Gemini", "D1", "API Design"],
    previewTitle: "Retrieval-backed assistant system",
    previewMeta: "Backend, evidence search, grounded responses",
    links: {
      caseStudy: "/projects/ai-persona",
      github: "https://github.com/nexxucc",
      live: "https://ai-persona.vanshjain05.workers.dev/",
    },
    sections: [
      {
        title: "Problem",
        body: "Static portfolios and resumes are hard to explore deeply. A grounded assistant can answer project and experience questions with context-aware responses instead of forcing visitors to scan everything manually.",
      },
      {
        title: "What I built",
        body: "A retrieval-backed AI assistant foundation that stores structured project context, retrieves relevant evidence, and generates answers that stay grounded in available information.",
      },
      {
        title: "Current portfolio role",
        body: "AI Persona remains listed as a project. The live Chat with me page is intentionally separate and will call this backend in a later iteration using a custom UI matching the portfolio.",
      },
    ],
  },
  {
    slug: "chandraquant-siddhanta",
    title: "ChandraQuant Siddhanta",
    type: "Python Framework / Market Indicator",
    status: "Framework and result visuals",
    description:
      "A Python-based quant research framework combining technical indicators, lunar-solar features, and backtesting logic to generate market signals.",
    longDescription:
      "ChandraQuant Siddhanta is a Python-based research framework for generating and testing market regime signals using technical indicators, lunar-solar cycle features, and backtesting workflows.",
    tags: [
      "Python",
      "pandas",
      "scikit-learn",
      "Skyfield",
      "Backtesting",
      "Feature Engineering",
    ],
    previewTitle: "Signal and backtest preview",
    previewMeta: "Charts/results will be added in iteration 2",
    links: {
      caseStudy: "/projects/chandraquant-siddhanta",
      github: "https://github.com/nexxucc/ChandraQuant-Siddhanta",
      results: "#",
    },
    sections: [
      {
        title: "Problem",
        body: "Quant research needs a repeatable way to test whether technical indicators and calendar-derived features can improve regime identification without leaking future data.",
      },
      {
        title: "What I built",
        body: "A Python ML pipeline that combines 31 technical features with 10 lunar-solar cycle features to predict 5-day bullish regimes for major Indian indices.",
      },
      {
        title: "Results direction",
        body: "The portfolio should eventually show an equity curve, signal plot, feature pipeline, and backtest metrics instead of a fake live demo.",
      },
    ],
  },
  {
    slug: "research-assistant",
    title: "Context-Aware Research Assistant",
    type: "RAG / Document Intelligence",
    status: "Deploy after edits",
    description:
      "A document-aware research assistant that indexes uploaded content, retrieves relevant context, and generates grounded answers for faster research workflows.",
    longDescription:
      "The Research Assistant demonstrates document ingestion, chunking, semantic search, and answer generation around research documents. The final portfolio will include its deployed link once edits are complete.",
    tags: [
      "Python",
      "LangChain",
      "FAISS",
      "HuggingFace",
      "Streamlit",
      "Embeddings",
    ],
    previewTitle: "Document Q&A interface",
    previewMeta: "Live preview/screenshot planned for iteration 2",
    links: {
      caseStudy: "/projects/research-assistant",
      github: "https://github.com/nexxucc/NLP-Research-Assistant",
      live: "#",
    },
    sections: [
      {
        title: "Problem",
        body: "Research and document review becomes slow when relevant context is scattered across many files and papers.",
      },
      {
        title: "What I built",
        body: "A RAG pipeline using LLMs to ingest, retrieve, and summarize research papers with FAISS-based semantic search across 500+ indexed documents.",
      },
      {
        title: "Iteration 2 plan",
        body: "After deployment, this page should include a real product screenshot or embedded preview showing document upload, retrieved sources, and grounded answers.",
      },
    ],
  },
  {
    slug: "ai-shopify-creator",
    title: "AI Shopify Creator",
    type: "AI Product Builder",
    status: "Deploy after edits",
    description:
      "An AI-powered store creation tool that generates Shopify storefront content, product sections, and brand-ready layouts from user prompts.",
    longDescription:
      "AI Shopify Creator is a product-style AI workflow that turns store ideas into generated Shopify store content through orchestrated agents and a full-stack dashboard. The final portfolio will include its deployed link once edits are complete.",
    tags: ["React", "Express.js", "n8n", "LLM Agents", "PostgreSQL", "Docker"],
    previewTitle: "Prompt-to-store workflow",
    previewMeta: "Generated storefront preview planned for iteration 2",
    links: {
      caseStudy: "/projects/ai-shopify-creator",
      github: "https://github.com/nexxucc/ai-shopify-creator",
      live: "#",
    },
    sections: [
      {
        title: "Problem",
        body: "Creating store content, layouts, and product sections can be slow when each decision has to be made manually from scratch.",
      },
      {
        title: "What I built",
        body: "A React and Express dashboard backed by self-hosted n8n workflows and multiple LLM agents to generate complete Shopify store content and structure.",
      },
      {
        title: "Iteration 2 plan",
        body: "After deployment, this project card should use a generated storefront preview and final live demo link.",
      },
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}