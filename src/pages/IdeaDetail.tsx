import { useParams, Link } from "react-router-dom";
import { ExternalLink, ArrowRight, ArrowLeft, Mail, Github } from "lucide-react";
import { ideas, statusColor } from "@/data/ideas";

const IdeaDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const idea = ideas.find((i) => i.slug === slug);

  if (!idea) {
    return (
      <main className="min-h-screen px-6 py-12 md:py-16 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to all ideas
        </Link>
        <p className="text-sm text-muted-foreground">Idea not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-12 md:py-16 max-w-3xl">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft className="w-3 h-3" />
        Back to all ideas
      </Link>

      <div>
        <div className="w-full">
          <span className={`text-xs ${statusColor[idea.status]}`}>
            {idea.status}
          </span>
          <h2 className="text-2xl font-bold leading-snug mt-1 mb-2">{idea.name}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {idea.description}
          </p>
          <div className="flex flex-col gap-1 mb-4">
            <p className="text-xs text-muted-foreground">
              <span className="font-medium text-foreground">Type:</span> {idea.type}
            </p>
            <p className="text-xs text-muted-foreground">
              <span className="font-medium text-foreground">Industry:</span> {idea.industry}
            </p>
            <p className="text-xs text-muted-foreground">
              <span className="font-medium text-foreground">Format:</span> {idea.format}
            </p>
          </div>
          {idea.link && (
            <a
              href={idea.link}
              target={idea.external ? "_blank" : undefined}
              rel={idea.external ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline underline-offset-4"
            >
              View project
              {idea.external ? (
                <ExternalLink className="w-3.5 h-3.5" />
              ) : (
                <ArrowRight className="w-3.5 h-3.5" />
              )}
            </a>
          )}
          {idea.details && (
            <p className="text-sm leading-relaxed mt-6">{idea.details}</p>
          )}
        </div>
      </div>

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

export default IdeaDetail;
