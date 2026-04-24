export type Status = "Operational" | "In Process" | "Idea" | "Inactive";
export type IdeaType = "Business" | "Side Project" | "Just for Fun" | "TBD";
export type Industry = "Healthcare" | "Civics" | "Finance" | "Music" | "Food" | "Tech" | "Content" | "Travel" | "N/A";
export type Format = "Web App" | "Newsletter" | "Tool" | "Marketplace" | "Physical" | "Content";

export interface Idea {
  name: string;
  slug: string;
  status: Status;
  description: string;
  details?: string;
  type: IdeaType;
  industry: Industry;
  format: Format;
  link?: string;
  external?: boolean;
}

export const ideas: Idea[] = [
  {
    name: "Milwaukee Garbage Alerts",
    slug: "milwaukee-garbage-alerts",
    status: "Operational",
    description: "A small service that monitors things and sends SMS alerts.",
    details: "Built to solve the annoyance of forgetting trash day. Monitors the city schedule and sends timely SMS reminders so you never miss a pickup again.",
    type: "Just for Fun",
    industry: "N/A",
    format: "Tool",
    link: "https://milwaukee-garbage-alert-web.onrender.com/",
    external: true,
  },
  {
    name: "Pagerr",
    slug: "pagerr",
    status: "In Process",
    description: "Connecting anesthesia professionals with the facilities that need them.",
    details: "A marketplace for anesthesia staffing — matching CRNAs and anesthesiologists with hospitals, surgery centers, and clinics. Built to reduce the friction in a hiring process that still runs largely on phone calls and fax machines.",
    type: "Business",
    industry: "Healthcare",
    format: "Marketplace",
    link: "https://pagerr.app/",
    external: true,
  },
  {
    name: "Democrazy",
    slug: "democrazy",
    status: "In Process",
    description: "Put your money where your vote is — a platform that turns civic opinions into real financial action.",
    details: "Democrazy lets people back their beliefs with actual dollars. Instead of just casting a vote, you allocate money to the causes, candidates, or policies you care about. Compete against others to see whose picks gain the most traction — making civic engagement feel less like a chore and more like a game.",
    type: "Just for Fun",
    industry: "Civics",
    format: "Web App",
    link: "https://civic-pulse-xljn.onrender.com/",
    external: true,
  },
  {
    name: "Social Listening + Content Creation",
    slug: "social-listening",
    status: "In Process",
    description: "A tool for monitoring social conversations and generating content ideas.",
    details: "Tracks what people are saying across social platforms and helps turn those signals into content. Built for founders and marketers who want to stay ahead of the conversation.",
    type: "Business",
    industry: "Tech",
    format: "Tool",
    link: "https://social-spark-studio.onrender.com/",
    external: true,
  },
  {
    name: "MKE Tech Map",
    slug: "mke-tech-map",
    status: "Inactive",
    description: "A map and directory of venture capital firms and resources for early-stage companies in and around Milwaukee.",
    details: "Mapped out the Milwaukee startup ecosystem — VCs, accelerators, coworking spaces. Currently inactive but the data is still useful.",
    type: "Side Project",
    industry: "Tech",
    format: "Web App",
  },
  {
    name: "Trace Dependents for Google Sheets",
    slug: "trace-dependents",
    status: "In Process",
    description: "A helper tool for Excel/Sheets to trace formulas and dependencies more clearly.",
    details: "If you've ever tried to audit a complex spreadsheet, you know the pain. This tool visualizes formula dependencies so you can actually understand what's going on.",
    type: "Side Project",
    industry: "Tech",
    format: "Tool",
  },
  {
    name: "Metric Mondays",
    slug: "metric-mondays",
    status: "Operational",
    description: "Weekly posts breaking down startup metrics in plain English.",
    details: "A recurring LinkedIn series that takes complex SaaS and startup metrics — CAC, LTV, churn, burn — and explains them with clarity and real examples.",
    type: "Side Project",
    industry: "Finance",
    format: "Newsletter",
    link: "https://www.linkedin.com/company/founderscpa/posts/",
    external: true,
  },
  {
    name: "Granola Joe",
    slug: "granola-joe",
    status: "Operational",
    description: "A collection of songs that I consider just barely good enough to show to the public.",
    details: "Music I've recorded over the years. Lo-fi, honest, and intentionally imperfect. Available on Bandcamp.",
    type: "Just for Fun",
    industry: "Music",
    format: "Content",
    link: "https://granolajoe.bandcamp.com/",
    external: true,
  },
  {
    name: "Multi-Origin Flight Planner",
    slug: "multi-origin-flight-planner",
    status: "Idea",
    description: "A web platform for planning trips when your group is flying in from different cities.",
    details: "Planning a group trip is hard when everyone is coming from a different city. Multi-Origin Flight Planner solves two problems: (1) destination discovery — enter everyone's home airports and find destinations where flights are affordable and convenient for the whole group; (2) coordination — if you already know where you're going, easily find and compare flights that land around the same time so no one is stranded at the airport waiting for hours. Think of it as a smarter starting point than everyone individually searching Google Flights.",
    type: "Business",
    industry: "Travel",
    format: "Web App",
  },
  {
    name: "Big Day Bagels",
    slug: "big-day-bagels",
    status: "Idea",
    description: "An experiment in small-batch bagel making with friends.",
    details: "The idea: gather friends, make bagels, see if the process is as fun as the product. Still in the planning phase.",
    type: "Just for Fun",
    industry: "Food",
    format: "Physical",
  },
];

export const statusColor: Record<Status, string> = {
  Operational: "text-emerald-500",
  "In Process": "text-sky-600",
  Idea: "text-muted-foreground",
  Inactive: "text-muted-foreground/60",
};
