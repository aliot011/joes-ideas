// src/pages/Home.tsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { ideas, Stage } from "../ideas";

const stageClassMap: Record<Stage, string> = {
  Idea: "pill pill-idea",
  "In Process": "pill pill-in-process",
  Operational: "pill pill-operational",
};

export function Home() {
  const [isTitleCompact, setIsTitleCompact] = useState(false);
  const [headerTop, setHeaderTop] = useState(0);
  const titleRef = useRef<HTMLDivElement | null>(null);

  // Effect 1: keep headerTop = current height of the "Joe's Idea's" sticky block
  useEffect(() => {
    const updateHeaderTop = () => {
      if (!titleRef.current) return;
      const h = titleRef.current.getBoundingClientRect().height;
      setHeaderTop((prev) => (prev !== h ? h : prev));
    };

    // initial run
    updateHeaderTop();

    window.addEventListener("scroll", updateHeaderTop);
    window.addEventListener("resize", updateHeaderTop);
    return () => {
      window.removeEventListener("scroll", updateHeaderTop);
      window.removeEventListener("resize", updateHeaderTop);
    };
  }, []);

  // Effect 2: control compact state based on when the title actually hits the top
  useEffect(() => {
    const handleCompact = () => {
      if (!titleRef.current) return;
      const rect = titleRef.current.getBoundingClientRect();

      // Title is "stuck" when its top is at or above the top of the viewport
      const shouldCompact = rect.top <= 0;

      setIsTitleCompact((prev) =>
        prev !== shouldCompact ? shouldCompact : prev
      );
    };

    // initial run
    handleCompact();

    window.addEventListener("scroll", handleCompact);
    return () => {
      window.removeEventListener("scroll", handleCompact);
    };
  }, []);

  return (
    <div className="page">
      {/* Sticky title bar */}
      <div
        ref={titleRef}
        className={`sticky-title ${
          isTitleCompact ? "sticky-title--compact" : ""
        }`}
      >
        <h1>Joe's Idea</h1>
      </div>

      {/* Subheader that scrolls away normally */}
      <header className="page-header">
        <p>
          I'm Joe; these are some of my ideas. Reach out if you like any of
          them.
        </p>
      </header>

      <main>
        <table className="ideas-table">
          {/* top is set inline based on the measured height of the title */}
          <thead style={{ top: headerTop }}>
            <tr>
              <th>Idea</th>
              <th>What is it</th>
              <th>Stage</th>
            </tr>
          </thead>
          <tbody>
            {ideas.map((idea) => (
              <tr key={idea.name}>
                <td>
                  {idea.internalRoute ? (
                    <Link to={idea.internalRoute}>{idea.name}</Link>
                  ) : idea.externalUrl ? (
                    <a href={idea.externalUrl} target="_blank" rel="noreferrer">
                      {idea.name}
                    </a>
                  ) : (
                    idea.name
                  )}
                </td>
                <td>{idea.description}</td>
                <td>
                  <span className={stageClassMap[idea.stage]}>
                    {idea.stage}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
