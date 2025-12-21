import React from "react";
import "./App.css";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { ideas } from "./ideas";
import TraceDependentsPage from "./TraceDependentsPage";

const isExternalLink = (link: string) => /^https?:\/\//i.test(link);

const IdeaListPage: React.FC = () => {
  return (
    <>
      {/* HERO / INTRO */}
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">Hi, I'm Joe.</h1>
          <p className="hero-subtitle">
            These are some of my ideas. Reach out if you like any of them.
          </p>
        </div>
      </section>

      {/* IDEAS LIST */}
      <main className="ideas-section">
        <div className="ideas-inner">
          {ideas.map((idea) => (
            <article key={idea.id} className="idea-row">
              {/* Left column: colored square with idea name */}
              <div
                className="idea-tile"
                style={{ backgroundColor: idea.color }}
              >
                <span className="idea-name">{idea.name}</span>
              </div>

              {/* Right column: rows */}
              <div className="idea-content">
                {/* Row 1: Description */}
                <div className="idea-block">
                  <div className="idea-label">Description</div>
                  <div className="idea-description">{idea.description}</div>
                </div>

                {/* Row 2: Status + Tags (two columns) */}
                <div className="idea-block idea-meta-row">
                  {/* Status */}
                  <div className="idea-meta">
                    <div className="idea-label">Status</div>
                    <div className="idea-value">
                      <span
                        className={
                          "pill " +
                          (idea.stage === "Inactive" ? "pill-inactive" : "")
                        }
                      >
                        {idea.stage}
                      </span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="idea-meta">
                    <div className="idea-label">Tags</div>
                    <div className="idea-value">
                      {idea.tags.map((tag) => (
                        <span key={tag} className="tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Row 3: View Idea button (bottom-right, if link exists) */}
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
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
};

const Footer: React.FC = () => (
  <footer className="site-footer">
    <div className="footer-inner">
      <div className="footer-left">© 2025 JHAI LLC</div>
      <div className="footer-right">
        <a href="mailto:jalioto@joesidea.com">Email</a>
        <span className="footer-separator">•</span>
        <a
          href="https://github.com/aliot011"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<IdeaListPage />} />
        <Route path="/trace-dependents" element={<TraceDependentsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
