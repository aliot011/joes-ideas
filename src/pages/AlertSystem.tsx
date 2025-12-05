// src/pages/AlertSystem.tsx
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export function AlertSystem() {
  return (
    <div className="page">
      <header>
        <h1>Alert System</h1>
        <p>
          A tiny app for defining checks and sending alerts when things change.
        </p>
        <p>
          <Link to="/">&larr; Back to Joe&apos;s Idea&apos;s</Link>
        </p>
      </header>

      <main>
        <p>
          This is where the Alert System UI / app can live. For now it&apos;s
          just a placeholder, but you can expand this into a full interface over
          time.
        </p>
      </main>
    </div>
  );
}
