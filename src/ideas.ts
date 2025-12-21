// src/ideas.ts

export type Stage = "Idea" | "In Process" | "Operational" | "Inactive";

export type Idea = {
  id: string;
  name: string;
  description: string;
  stage: Stage;
  tags: string[];
  link?: string;
  color: string;
};

export const ideas: Idea[] = [
  {
    id: "milwaukee-garbage-alerts",
    name: "Milwaukee Garbage Alerts",
    description: "A small service that monitors things and sends SMS alerts.",
    stage: "In Process",
    tags: ["tool", "sms", "milwaukee"],
    link: "https://milwaukee-garbage-alert-web.onrender.com/",
    color: "#0f766e",
  },
  {
    id: "metric-mondays",
    name: "Metric Mondays",
    description: "Weekly posts breaking down startup metrics in plain English.",
    stage: "Operational",
    tags: ["content", "saas", "metrics"],
    link: "https://www.linkedin.com/company/founderscpa/posts/",
    color: "#1d4ed8",
  },
  {
    id: "joes-idea",
    name: "Joe's Idea",
    description:
      "What you're looking at right now - a website that catalogues my projects.",
    stage: "Operational",
    tags: ["web", "portfolio", "personal"],
    link: "https://joesidea.com",
    color: "#0ea5e9",
  },
  {
    id: "trace-dependents-gsheets",
    name: "Trace Dependents for Google Sheets",
    description:
      "A helper tool for Excel/Sheets to trace formulas and dependencies more clearly.",
    stage: "In Process",
    tags: ["tool", "google-sheets", "productivity"],
    link: "/trace-dependents",
    color: "#a855f7",
  },
  {
    id: "democrazy",
    name: "Democrazy",
    description:
      "A playful way to 'vote with dollars' on ideas, charities, or policies each month.",
    stage: "In Process",
    tags: ["web", "civics", "experiment"],
    color: "#f97316",
  },
  {
    id: "granola-joe",
    name: "Granola Joe",
    description:
      "A collection of songs that I consider just barely good enough to show to the public.",
    stage: "Operational",
    tags: ["music", "personal", "creative"],
    link: "https://granolajoe.bandcamp.com/",
    color: "#7c3aed",
  },
  {
    id: "big-day-bagels",
    name: "Big Day Bagels",
    description: "An experiment in small-batch bagel making with friends.",
    stage: "Idea",
    tags: ["food", "experiment", "milwaukee"],
    color: "#facc15",
  },
  {
    id: "mke-tech-map",
    name: "MKE Tech Map",
    description:
      "A map and directory of venture capital firms and resources for early-stage companies in and around Milwaukee.",
    stage: "Inactive",
    tags: ["map", "vc", "milwaukee"],
    color: "#6b7280",
  },
  {
    id: "startup-metrics-library",
    name: "Startup Metrics Library",
    description:
      "A reference library of key metrics, definitions, and formulas for early-stage companies.",
    stage: "Operational",
    tags: ["library", "saas", "metrics"],
    color: "#059669",
  },
  {
    id: "real-estate-duplex-model",
    name: "Real Estate Duplex Model",
    description:
      "A spreadsheet and walkthrough for underwriting small duplex purchases.",
    stage: "Operational",
    tags: ["real-estate", "excel", "model"],
    color: "#10b981",
  },
  {
    id: "net-worth-tracker",
    name: "Net Worth Tracker",
    description:
      "A lightweight Excel tracker for setting and tracking aginst near- and long-term savings and net worth goals.",
    stage: "Operational",
    tags: ["personal-finance", "excel", "tracker"],
    color: "#0f766e",
  },
];
