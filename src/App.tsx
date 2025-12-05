// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AlertSystem } from "./pages/AlertSystem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alert-system" element={<AlertSystem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
