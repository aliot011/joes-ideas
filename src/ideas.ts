// src/ideas.ts

export type Stage = "Idea" | "In Process" | "Operational";

export type Idea = {
  name: string;
  description: string;
  stage: Stage;
  internalRoute?: string; // internal page on this site
  externalUrl?: string; // external link
};

export const ideas: Idea[] = [
  {
    name: "Milwaukee Garbage Alerts",
    description: "A small service that monitors things and sends SMS alerts.",
    stage: "In Process",
    internalRoute: "/alert-system",
  },
  {
    name: "Metric Mondays",
    description: "Weekly posts breaking down startup metrics in plain English.",
    stage: "Operational",
    externalUrl: "https://example.com/metric-mondays",
  },
  {
    name: "Joe's Idea's Site",
    description:
      "This simple text-first page listing my experiments and projects.",
    stage: "Idea",
  },
  {
    name: "Trace Dependents for Google Sheets",
    description:
      "A helper tool for Excel/Sheets to trace formulas and dependencies more clearly.",
    stage: "In Process",
  },
  {
    name: "Democrazy",
    description:
      "A playful way to 'vote with dollars' on ideas, charities, or policies each month.",
    stage: "In Process",
  },
  {
    name: "Granola Joe",
    description:
      "A collection of songs that I consider just barely good enough to show to the public.",
    stage: "Operational",
  },
  {
    name: "Big Day Bagels",
    description:
      "An experiment in small-batch bagels at a local market with rotating flavors.",
    stage: "Idea",
  },
  {
    name: "VC Midwest Map",
    description:
      "A map and directory of Midwest VC firms, angels, and startup hubs.",
    stage: "Operational",
  },
  {
    name: "Startup Metrics Library",
    description:
      "A reference library of key metrics, definitions, and formulas for early-stage companies.",
    stage: "Operational",
  },
  {
    name: "Real Estate Duplex Model",
    description:
      "A spreadsheet and walkthrough for underwriting small duplex purchases.",
    stage: "Operational",
  },
  {
    name: "Net Worth Tracker",
    description:
      "A lightweight and tracker for setting near- and long-term savings and net worth goals.",
    stage: "Operational",
  },
];
