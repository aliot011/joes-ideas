import { Link } from "react-router-dom";
import { Mail, Github } from "lucide-react";
import { ideas, statusColor } from "@/data/ideas";

const Index = () => {
  return (
    <main className="min-h-screen px-6 py-12 md:py-16 max-w-3xl">
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
          Hi, I'm Joe.
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed mb-3">
          These are some of my ideas. Reach out if you like any of them.
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a
            href="mailto:joe@joesidea.com"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-sky-600 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            joe@joesidea.com
          </a>
          <a
            href="https://github.com/aliot011"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-sky-600 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            @aliot011
          </a>
        </div>
      </header>

      <section>
        <ul className="space-y-1">
          {ideas.map((idea, i) => (
            <li key={i}>
              <Link
                to={`/idea/${idea.slug}`}
                className="block py-5 pl-4 -ml-4 group border-l-2 border-transparent hover:border-foreground transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="text-base font-semibold leading-snug group-hover:text-sky-600 transition-colors">
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
                </div>
              </Link>
            </li>
          ))}
        </ul>
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
