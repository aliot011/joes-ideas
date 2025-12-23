import React, { useCallback, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { ideas } from "../ideas";

const isExternalLink = (link: string) => /^https?:\/\//i.test(link);

const IdeaListPage: React.FC = () => {
  const ideaRefs = useRef<Map<string, HTMLElement | null>>(new Map());

  const ideaIds = useMemo(() => ideas.map((idea) => idea.id), []);

  const handleRandomIdea = useCallback(() => {
    if (!ideaIds.length) return;

    const randomId = ideaIds[Math.floor(Math.random() * ideaIds.length)];
    const target = ideaRefs.current.get(randomId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      target.focus({ preventScroll: true });
    }
  }, [ideaIds]);

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">Hi, I'm Joe.</h1>
          <p className="hero-subtitle">
            These are some of my ideas. Reach out if you like any of them.
          </p>
          <div className="hero-actions">
            <button className="hero-button" type="button" onClick={handleRandomIdea}>
              Jump to random idea
            </button>
          </div>
        </div>
      </section>

      <main className="ideas-section">
        <div className="ideas-inner">
          <div className="ideas-grid">
            {ideas.map((idea) => (
              <article
                key={idea.id}
                className="idea-card"
                ref={(node) => {
                  ideaRefs.current.set(idea.id, node);
                }}
                tabIndex={-1}
              >
                <div className="idea-card-header">
                  <div className="idea-heading">
                    <div className="idea-name-row">
                      <h3 className="idea-name-text">{idea.name}</h3>
                      <span
                        className={
                          "pill " +
                          (idea.stage === "Inactive" ? "pill-inactive" : "pill-active")
                        }
                      >
                        {idea.stage}
                      </span>
                    </div>
                    <p className="idea-description">{idea.description}</p>
                  </div>
                </div>

                <div className="idea-meta-row">
                  <div className="idea-meta">
                    <div className="idea-label">Tags</div>
                    <div className="idea-tags">
                      {idea.tags.map((tag) => (
                        <span key={tag} className="tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {idea.link && (
                  <div className="idea-link-row">
                    {isExternalLink(idea.link) ? (
                      <a
                        href={idea.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="idea-link-button"
                      >
                        <span>View idea</span>
                        <span className="idea-link-button-icon">↗</span>
                      </a>
                    ) : (
                      <Link to={idea.link} className="idea-link-button">
                        <span>View idea</span>
                        <span className="idea-link-button-icon">→</span>
                      </Link>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default IdeaListPage;
