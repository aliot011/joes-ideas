import { useState, useCallback } from "react";
import { ExternalLink, ArrowRight, Shuffle } from "lucide-react";

type Status = "Operational" | "In Process" | "Idea" | "Inactive";

interface Idea {
  name: string;
  status: Status;
  description: string;
  link?: string;
  external?: boolean;
}

const ideas: Idea[] = [
  {
    name: "Milwaukee Garbage Alerts",
    status: "In Process",
    description: "A small service that monitors things and sends SMS alerts.",
    link: "https://milwaukee-garbage-alert-web.onrender.com/",
    external: true,
  },
  {
    name: "Metric Mondays",
    status: "Operational",
    description: "Weekly posts breaking down startup metrics in plain English.",
    link: "https://www.linkedin.com/company/founderscpa/posts/",
    external: true,
  },
  {
    name: "Joe's Idea",
    status: "Operational",
    description: "What you're looking at right now — a website that catalogues my projects.",
    link: "https://joesidea.com/",
    external: true,
  },
  {
    name: "Trace Dependents for Google Sheets",
    status: "In Process",
    description: "A helper tool for Excel/Sheets to trace formulas and dependencies more clearly.",
    link: "/trace-dependents",
  },
  {
    name: "Democrazy",
    status: "In Process",
    description: "A playful way to 'vote with dollars' on ideas, charities, or policies each month.",
  },
  {
    name: "Granola Joe",
    status: "Operational",
    description: "A collection of songs that I consider just barely good enough to show to the public.",
    link: "https://granolajoe.bandcamp.com/",
    external: true,
  },
  {
    name: "Big Day Bagels",
    status: "Idea",
    description: "An experiment in small-batch bagel making with friends.",
  },
  {
    name: "MKE Tech Map",
    status: "Inactive",
    description: "A map and directory of venture capital firms and resources for early-stage companies in and around Milwaukee.",
  },
  {
    name: "Startup Metrics Library",
    status: "Operational",
    description: "A reference library of key metrics, definitions, and formulas for early-stage companies.",
  },
  {
    name: "Real Estate Duplex Model",
    status: "Operational",
    description: "A spreadsheet and walkthrough for underwriting small duplex purchases.",
  },
  {
    name: "Net Worth Tracker",
    status: "Operational",
    description: "A lightweight Excel tracker for setting and tracking against near- and long-term savings and net worth goals.",
  },
];

const statusColor: Record<Status, string> = {
  Operational: "text-green-700",
  "In Process": "text-accent",
  Idea: "text-muted-foreground",
  Inactive: "text-muted-foreground/60",
};

const Index = () => {
  const [highlightId, setHighlightId] = useState<number | null>(null);

  const jumpToRandom = useCallback(() => {
    const idx = Math.floor(Math.random() * ideas.length);
    setHighlightId(idx);
    const el = document.getElementById(`idea-${idx}`);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => setHighlightId(null), 2000);
  }, []);

  return (
    <main className="min-h-screen px-6 py-16 md:py-24 max-w-xl mx-auto">
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Hi, I'm Joe.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          These are some of my ideas. Reach out if you like any of them.
        </p>
        <button
          onClick={jumpToRandom}
          className="inline-flex items-center gap-2 text-sm font-mono text-accent hover:underline underline-offset-4 transition-colors"
        >
          <Shuffle className="w-3.5 h-3.5" />
          Jump to random idea
        </button>
      </header>

      <section>
        <ul className="space-y-0 divide-y divide-border">
          {ideas.map((idea, i) => (
            <li
              key={i}
              id={`idea-${i}`}
              className={`py-5 transition-colors duration-700 ${
                highlightId === i ? "bg-accent/10" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-base font-semibold leading-snug">
                      {idea.name}
                    </h2>
                    <span className={`text-xs font-mono ${statusColor[idea.status]}`}>
                      {idea.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {idea.description}
                  </p>
                </div>
                {idea.link && (
                  <a
                    href={idea.link}
                    target={idea.external ? "_blank" : undefined}
                    rel={idea.external ? "noopener noreferrer" : undefined}
                    className="shrink-0 mt-1 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`View ${idea.name}`}
                  >
                    {idea.external ? (
                      <ExternalLink className="w-4 h-4" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-16 pt-8 border-t border-border">
        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} Joe
        </p>
      </footer>
    </main>
  );
};

export default Index;
