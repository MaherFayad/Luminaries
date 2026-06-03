import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import LangWrapper from "./components/LangWrapper.jsx";
import NotFoundPage from "./Page/NotFoundPage.jsx";

// Detect saved language preference and redirect / to /en or /ar
const RootRedirect = () => {
  const saved = localStorage.getItem("i18nextLng");
  const lang = saved === "ar" ? "ar" : "en";
  return <Navigate to={`/${lang}`} replace />;
};

// Redirect old paths (without lang prefix) to /en equivalent
const LangRedirect = () => {
  const { pathname } = useLocation();
  if (pathname.startsWith("/en") || pathname.startsWith("/ar")) {
    return <NotFoundPage />;
  }
  return <Navigate to={`/en${pathname}`} replace />;
};

function App() {
  return (
    <div className="bg-[#030712] text-slate-200 font-sans selection:bg-[#3496ed]/30 selection:text-[#8ed0fa]">
      <Routes>
        <Route path="/"    element={<RootRedirect />} />
        <Route path="/en/*" element={<LangWrapper lang="en" />} />
        <Route path="/ar/*" element={<LangWrapper lang="ar" />} />
        <Route path="*"    element={<LangRedirect />} />
      </Routes>
    </div>
  );
}

export default App;
