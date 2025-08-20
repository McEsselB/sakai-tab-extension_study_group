import React from "react";
import Sidebar from "./components/sidebar.jsx";
import TopTabs from "./components/TopTabs.jsx";
import PreferencesForm from "./components/PreferencesForm.jsx";
import Matches from "./components/Matches.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <TopTabs />
        <div className="p-6 flex gap-6">
          <PreferencesForm />
          <Matches />
        </div>
      </div>
    </div>
  );
}
