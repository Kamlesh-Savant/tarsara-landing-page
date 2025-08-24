import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage"; // 1. IMPORT CONTACT PAGE
import HistoryPage from "./pages/HistoryPage";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/contact" element={<ContactPage />} />{" "}
            {/* 2. ADD THE ROUTE */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
