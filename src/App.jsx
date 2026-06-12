import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import LangWrapper from "./components/LangWrapper.jsx";

// Redirect /ar/* paths to their root (English) equivalents
const ArRedirect = () => {
  const { pathname } = useLocation();
  const newPath = pathname.replace(/^\/ar/, "");
  return <Navigate to={newPath || "/"} replace />;
};

function App() {
  return (
    <div className="bg-[#030712] text-slate-200 font-sans selection:bg-[#3496ed]/30 selection:text-[#8ed0fa]">
      <Routes>
        {/* Arabic route redirects to English equivalent for now */}
        <Route path="/ar/*" element={<ArRedirect />} />
        {/* Serve English directly at the root and all other paths */}
        <Route path="/*" element={<LangWrapper lang="en" />} />
      </Routes>
    </div>
  );
}

export default App;
