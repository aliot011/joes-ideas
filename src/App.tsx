import React from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import IdeaListPage from "./pages/IdeaListPage";
import TraceDependentsPage from "./TraceDependentsPage";
import TraceDependentsPrivacyPolicyPage from "./TraceDependentsPrivacyPolicyPage";
import TraceDependentsTermsPage from "./TraceDependentsTermsPage";

const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<IdeaListPage />} />
        <Route path="/trace-dependents" element={<TraceDependentsPage />} />
        <Route
          path="/trace-dependents/privacy-policy"
          element={<TraceDependentsPrivacyPolicyPage />}
        />
        <Route
          path="/trace-dependents/terms-of-service"
          element={<TraceDependentsTermsPage />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
