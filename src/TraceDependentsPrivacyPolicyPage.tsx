import React from "react";
import { Link } from "react-router-dom";

const TraceDependentsPrivacyPolicyPage: React.FC = () => {
  return (
    <main className="idea-detail">
      <section className="page-hero trace-hero">
        <div className="page-hero-inner">
          <p className="breadcrumb">
            <Link to="/trace-dependents">← Back to Trace Dependents</Link>
          </p>
          <h1 className="page-hero-title">Trace Dependents Privacy Policy</h1>
          <p className="page-hero-lead">
            How we handle the spreadsheet snippets you ask us to inspect and the
            privacy commitments we make to protect them.
          </p>
        </div>
      </section>

      <section className="page-body">
        <div className="page-body-inner">
          <div className="page-card">
            <div className="page-card-header">
              <h2 className="page-card-title">What we collect</h2>
              <span className="pill">Draft</span>
            </div>
            <p>
              Trace Dependents only processes the inputs required to resolve the cell
              references you request. We do not read, store, or analyze the broader
              contents of your spreadsheet beyond the specific cells needed to compute
              downstream links.
            </p>
            <ul>
              <li>Cell addresses or ranges you select for tracing.</li>
              <li>Formula fragments necessary to determine dependencies.</li>
              <li>Minimal metadata to provide links back to your sheet.</li>
            </ul>
          </div>

          <div className="page-card">
            <h2 className="page-card-title">What we do with the data</h2>
            <p>
              The tracing inputs are used solely to calculate dependents and return
              them to you inside Google Sheets. We do not use tracing data to train
              models or for advertising.
            </p>
            <p>
              We also do not build cross-session profiles. Each tracing request stands
              on its own and is discarded once the results are returned to your sheet.
            </p>
          </div>

          <div className="page-card">
            <h2 className="page-card-title">Data retention and deletion</h2>
            <p>
              Raw tracing inputs are retained only in memory for the duration of the
              request. We do not store them in databases or logs. If you contact us
              about a specific request, we may temporarily review system logs that
              describe when a request occurred and whether it succeeded, but they do
              not contain cell values.
            </p>
            <p>
              For any questions or deletion requests, reach out to
              <a href="mailto:jalioto@joesidea.com"> jalioto@joesidea.com</a>. We will
              confirm receipt and address your concern promptly.
            </p>
          </div>

          <div className="page-card">
            <h2 className="page-card-title">Security</h2>
            <p>
              Trace Dependents uses secure, authenticated connections to communicate
              with Google Sheets. We limit access to development and operational staff
              who require it to maintain the add-on. If you believe you have found a
              vulnerability, please disclose it responsibly via email so we can
              investigate.
            </p>
          </div>

          <div className="page-card">
            <h2 className="page-card-title">Changes to this policy</h2>
            <p>
              This privacy policy is in draft form while the add-on is under
              development. We will update this page as features evolve and will
              highlight material changes so you can review them.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TraceDependentsPrivacyPolicyPage;
