import React from "react";
import { Link } from "react-router-dom";

const TraceDependentsPage: React.FC = () => {
  return (
    <main className="idea-detail">
      <section className="page-hero trace-hero">
        <div className="page-hero-inner">
          <p className="breadcrumb">
            <Link to="/">← Back to all ideas</Link>
          </p>
          <h1 className="page-hero-title">TraceFlow for Sheets &trade;</h1>
          <p className="page-hero-lead">
            A helper tool that quickly surfaces downstream formulas so you can
            audit calculations, explain logic to teammates, and debug without
            breaking your spreadsheet flow.
          </p>
          <div className="page-cta-row">
            <Link
              className="idea-link-button"
              to="/trace-dependents/privacy-policy"
            >
              Privacy policy
            </Link>
            <Link
              className="idea-link-button"
              to="/trace-dependents/terms-of-service"
            >
              Terms of service
            </Link>
          </div>
        </div>
      </section>

      <section className="page-body">
        <div className="page-body-inner">
          <div className="page-card">
            <h2 className="page-card-title">What it does</h2>
            <p>
              Trace Dependents makes it easy to see which cells, ranges, or
              sheets use the value you are inspecting. Instead of clicking
              through layers of formulas, you get a clean list of links that
              jump you directly to the dependent cells.
            </p>
            <ul>
              <li>Faster audits for complex financial or ops models.</li>
              <li>Fewer broken references when refactoring worksheets.</li>
              <li>
                Clear handoffs when sharing models with teammates or clients.
              </li>
            </ul>
          </div>

          <div className="page-card">
            <h2 className="page-card-title">Who it's for</h2>
            <p>
              Operators, finance teams, and analysts who live in Google Sheets
              and need guardrails to keep formulas trustworthy—especially when
              models grow messy or multiple collaborators are involved.
            </p>
          </div>

          <div className="page-card">
            <div className="page-card-header">
              <h2 className="page-card-title">Privacy policy</h2>
              <span className="pill">Draft</span>
            </div>
            <p>
              We only process the cell references you ask us to trace so that
              results can be returned in your sheet. No raw spreadsheet data is
              stored outside of the session. For any questions or data removal
              requests, email
              <a href="mailto:jalioto@joesidea.com"> jalioto@joesidea.com</a>.
            </p>
            <div className="page-cta-row">
              <Link
                className="idea-link-button"
                to="/trace-dependents/privacy-policy"
              >
                Read the full privacy policy
              </Link>
            </div>
          </div>

          <div className="page-card">
            <div className="page-card-header">
              <h2 className="page-card-title">Terms of service</h2>
              <span className="pill">Draft</span>
            </div>
            <p>
              Trace Dependents is provided as-is while in development. Please
              review your models before sharing them, and avoid using the add-on
              for data that requires heightened confidentiality. By using the
              tool you agree that you are responsible for backups of your
              spreadsheets and for verifying the accuracy of downstream
              calculations.
            </p>
            <div className="page-cta-row">
              <Link
                className="idea-link-button"
                to="/trace-dependents/terms-of-service"
              >
                Read the full terms of service
              </Link>
            </div>
          </div>

          <div className="page-card">
            <h2 className="page-card-title">Support & contact</h2>
            <p>
              Want early access or have feedback on the privacy and terms
              drafts? Reach out and we will loop you into the beta.
            </p>
            <div className="page-cta-row">
              <a
                className="idea-link-button"
                href="mailto:jalioto@joesidea.com"
              >
                Email Joe
              </a>
              <a
                className="idea-link-button"
                href="https://github.com/aliot011"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TraceDependentsPage;
