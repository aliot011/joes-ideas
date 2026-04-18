import { useState, useRef } from "react";
import { ExternalLink, ArrowRight, X, Mail, Github } from "lucide-react";

type Status = "Operational" | "In Process" | "Idea" | "Inactive";

interface Idea {
  name: string;
  status: Status;
  description: string;
  details?: string;
  tags?: string[];
  link?: string;
  external?: boolean;
}

const ideas: Idea[] = [
  {
    name: "Milwaukee Garbage Alerts",
    status: "In Process",
    description: "A small service that monitors things and sends SMS alerts.",
    details: "Built to solve the annoyance of forgetting trash day. Monitors the city schedule and sends timely SMS reminders so you never miss a pickup again.",
    tags: ["tool", "sms", "milwaukee"],
    link: "https://milwaukee-garbage-alert-web.onrender.com/",
    external: true,
  },
  {
    name: "Metric Mondays",
    status: "Operational",
    description: "Weekly posts breaking down startup metrics in plain English.",
    details: "A recurring LinkedIn series that takes complex SaaS and startup metrics — CAC, LTV, churn, burn — and explains them with clarity and real examples.",
    tags: ["content", "saas", "metrics"],
    link: "https://www.linkedin.com/company/founderscpa/posts/",
    external: true,
  },
  {
    name: "Joe's Idea",
    status: "Operational",
    description: "What you're looking at right now — a website that catalogues my projects.",
    details: "A personal project catalogue. Simple by design. Inspired by the idea that every builder should have a single place to show what they're working on.",
    tags: ["web", "portfolio", "personal"],
    link: "https://joesidea.com/",
    external: true,
  },
  {
    name: "Trace Dependents for Google Sheets",
    status: "In Process",
    description: "A helper tool for Excel/Sheets to trace formulas and dependencies more clearly.",
    details: "If you've ever tried to audit a complex spreadsheet, you know the pain. This tool visualizes formula dependencies so you can actually understand what's going on.",
    tags: ["tool", "google-sheets", "productivity"],
    link: "/trace-dependents",
  },
  {
    name: "Democrazy",
    status: "In Process",
    description: "A playful way to 'vote with dollars' on ideas, charities, or policies each month.",
    details: "An experiment in participatory budgeting at a micro scale. Each month, participants allocate a small pool of real or virtual dollars to causes they care about.",
    tags: ["web", "civics", "experiment"],
  },
  {
    name: "Granola Joe",
    status: "Operational",
    description: "A collection of songs that I consider just barely good enough to show to the public.",
    details: "Music I've recorded over the years. Lo-fi, honest, and intentionally imperfect. Available on Bandcamp.",
    tags: ["music", "personal", "creative"],
    link: "https://granolajoe.bandcamp.com/",
    external: true,
  },
  {
    name: "Big Day Bagels",
    status: "Idea",
    description: "An experiment in small-batch bagel making with friends.",
    details: "The idea: gather friends, make bagels, see if the process is as fun as the product. Still in the planning phase.",
    tags: ["food", "experiment", "milwaukee"],
  },
  {
    name: "MKE Tech Map",
    status: "Inactive",
    description: "A map and directory of venture capital firms and resources for early-stage companies in and around Milwaukee.",
    details: "Mapped out the Milwaukee startup ecosystem — VCs, accelerators, coworking spaces. Currently inactive but the data is still useful.",
    tags: ["map", "vc", "milwaukee"],
  },
  {
    name: "Startup Metrics Library",
    status: "Operational",
    description: "A reference library of key metrics, definitions, and formulas for early-stage companies.",
    details: "A growing reference of the metrics that matter most for early-stage startups, with clear definitions, formulas, and benchmarks.",
    tags: ["library", "saas", "metrics"],
  },
  {
    name: "Real Estate Duplex Model",
    status: "Operational",
    description: "A spreadsheet and walkthrough for underwriting small duplex purchases.",
    details: "A practical Excel model for evaluating small residential investment properties. Includes cash flow projections, cap rate calculations, and scenario analysis.",
    tags: ["real-estate", "excel", "model"],
  },
  {
    name: "Net Worth Tracker",
    status: "Operational",
    description: "A lightweight Excel tracker for setting and tracking against near- and long-term savings and net worth goals.",
    details: "Simple but effective. Track assets, liabilities, and savings goals over time. No app needed — just a well-structured spreadsheet.",
    tags: ["personal-finance", "excel", "tracker"],
  },
];

const statusColor: Record<Status, string> = {
  Operational: "text-emerald-500",
  "In Process": "text-sky-600",
  Idea: "text-muted-foreground",
  Inactive: "text-muted-foreground/60",
};

const Index = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const selected = selectedId !== null ? ideas[selectedId] : null;

  return (
    <main className="min-h-screen px-6 py-12 md:py-16 max-w-3xl">
      <div ref={topRef} />

      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
          Hi, I'm Joe.
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          These are some of my ideas. Reach out if you like any of them.
        </p>
      </header>

      <section>
        {selected ? (
          /* ── Expanded view ── */
          <div className="animate-in fade-in duration-300">
            <button
              onClick={() => setSelectedId(null)}
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <X className="w-3 h-3" />
              Back to all ideas
            </button>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              {/* Left: title & meta */}
              <div className="md:w-1/2 shrink-0">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl font-bold leading-snug">
                    {selected.name}
                  </h2>
                  <span className={`text-xs ${statusColor[selected.status]}`}>
                    {selected.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {selected.description}
                </p>
                {selected.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selected.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-sm bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {selected.link && (
                  <a
                    href={selected.link}
                    target={selected.external ? "_blank" : undefined}
                    rel={selected.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline underline-offset-4"
                  >
                    View project
                    {selected.external ? (
                      <ExternalLink className="w-3.5 h-3.5" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5" />
                    )}
                  </a>
                )}
              </div>

              {/* Right: details */}
              <div className="md:w-1/2">
                <h3 className="text-xs text-muted-foreground uppercase tracking-widest mb-3">
                  Details
                </h3>
                <p className="text-sm leading-relaxed">
                  {selected.details}
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* ── List view ── */
          <ul className="space-y-1">
            {ideas.map((idea, i) => (
              <li
                key={i}
                id={`idea-${i}`}
                className="py-5 pl-4 -ml-4 cursor-pointer group border-l-2 border-transparent hover:border-foreground transition-colors"
                onClick={() => {
                  setSelectedId(i);
                  topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="text-base font-semibold leading-snug group-hover:text-accent transition-colors">
                        {idea.name}
                      </h2>
                      <span className={`text-xs ${statusColor[idea.status]}`}>
                        {idea.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {idea.description}
                    </p>
                  </div>
                  {idea.link && (
                    <span className="shrink-0 mt-1 text-muted-foreground group-hover:text-foreground transition-colors">
                      {idea.external ? (
                        <ExternalLink className="w-4 h-4" />
                      ) : (
                        <ArrowRight className="w-4 h-4" />
                      )}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <footer className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} JHAI LLC
        </p>
        <div className="flex items-center gap-5">
          <a
            href="mailto:joe@joesidea.com"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            joe@joesidea.com
          </a>
          <a
            href="https://github.com/aliot011"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            @aliot011
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Index;
