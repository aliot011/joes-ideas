import React from "react";
import { Link } from "react-router-dom";

const TraceDependentsTermsPage: React.FC = () => {
  return (
    <main className="idea-detail">
      <section className="page-hero trace-hero">
        <div className="page-hero-inner">
          <p className="breadcrumb">
            <Link to="/trace-dependents">← Back to Trace Dependents</Link>
          </p>
          <h1 className="page-hero-title">Trace Dependents Terms of Service</h1>
          <p className="page-hero-lead">
            The expectations and responsibilities for using the Trace Dependents add-on
            while it is in development.
          </p>
        </div>
      </section>

      <section className="page-body">
        <div className="page-body-inner">
          <div className="page-card">
            <div className="page-card-header">
              <h2 className="page-card-title">Service status</h2>
              <span className="pill">Draft</span>
            </div>
            <p>
              Trace Dependents is an early-stage tool and may change without notice.
              We aim for reliability but downtime, bugs, or feature changes may occur as
              we iterate.
            </p>
          </div>

          <div className="page-card">
            <h2 className="page-card-title">User responsibilities</h2>
            <p>
              You are responsible for the accuracy of your spreadsheet models and for
              keeping backups of important work. Use the tracing output as a guide and
              verify results before sharing models with others.
            </p>
            <p>
              Please avoid storing highly sensitive or regulated data in sheets where
              you use the add-on.
            </p>
          </div>

          <div className="page-card">
            <h2 className="page-card-title">Acceptable use</h2>
            <p>
              Do not misuse the service, interfere with its operation, or attempt to
              gain unauthorized access. We reserve the right to suspend access for
              abuse, security concerns, or activity that degrades the experience for
              others.
            </p>
          </div>

          <div className="page-card">
            <h2 className="page-card-title">Liability</h2>
            <p>
              Trace Dependents is provided “as is.” To the fullest extent permitted by
              law, JHAI LLC disclaims warranties and will not be liable for lost data,
              lost profits, or other damages arising from use of the add-on.
            </p>
          </div>

          <div className="page-card">
            <h2 className="page-card-title">Updates</h2>
            <p>
              These terms will evolve as we prepare the add-on for a wider release. We
              will update this page when material changes are made so you can review the
              latest version.
            </p>
          </div>

          <div className="page-card">
            <h2 className="page-card-title">Contact</h2>
            <p>
              Questions about these terms or requests related to your use of Trace
              Dependents can be sent to
              <a href="mailto:jalioto@joesidea.com"> jalioto@joesidea.com</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TraceDependentsTermsPage;
