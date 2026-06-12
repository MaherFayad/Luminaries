import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import LangWrapper from "./components/LangWrapper.jsx";
import NotFoundPage from "./Page/NotFoundPage.jsx";

// Always redirect to English until Arabic content is ready
const RootRedirect = () => {
  return <Navigate to="/en" replace />;
};

// Redirect /ar/* paths to /en/* equivalents
const ArRedirect = () => {
  const { pathname } = useLocation();
  const newPath = pathname.replace(/^\/ar/, "/en");
  return <Navigate to={newPath} replace />;
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
        {/* Arabic route preserved but redirects to English until content is ready */}
        <Route path="/ar/*" element={<ArRedirect />} />
        <Route path="*"    element={<LangRedirect />} />
      </Routes>
    </div>
  );
}

export default App;
