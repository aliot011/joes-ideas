// src/ideas.ts

export type Stage = "Idea" | "In Process" | "Operational" | "Inactive";

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
    // internalRoute: "/alert-system",
  },
  {
    name: "Metric Mondays",
    description: "Weekly posts breaking down startup metrics in plain English.",
    stage: "Operational",
    externalUrl: "https://www.linkedin.com/company/founderscpa/posts/",
  },
  {
    name: "Joe's Idea",
    description:
      "What you're looking at right now - a website that catalogues my projects.",
    stage: "Operational",
    externalUrl: "https://joesidea.com",
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
    externalUrl: "https://granolajoe.bandcamp.com/",
  },
  {
    name: "Big Day Bagels",
    description: "An experiment in small-batch bagel making with friends.",
    stage: "Idea",
  },
  {
    name: "MKE Tech Map",
    description:
      "A map and directory of venture capital firms and resources for early-stage companies in and around Milwaukee.",
    stage: "Inactive",
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
      "A lightweight Excel tracker for setting and tracking aginst near- and long-term savings and net worth goals.",
    stage: "Operational",
  },
];
