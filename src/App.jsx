import React from "react";
import { Routes, Route } from "react-router-dom";

// --- LAYOUTS & UTILS ---
import ScrollToTop from "./components/ScrollToTop.jsx";
import MainLayout from "./components/MainLayout.jsx";

// --- PAGES ---
import AuthPage from "./Page/AuthPage.jsx";
import NotFoundPage from "./Page/NotFoundPage.jsx";
import FeaturesPage from "./Page/FeaturesPage.jsx";
import ShowcasePage from "./Page/ShowcasePage.jsx";
import AboutPage from "./Page/AboutPage.jsx";
import ContactUsPage from "./Page/ContactUsPage.jsx";
import ChatAIPage from "./Page/ChatAIPage.jsx";
import IndustriesPage from "./Page/IndustriesPage.jsx";
import ContactPage from "./Page/ContactPage.jsx";

// --- HOME SECTIONS ---
import Hero from "./components/Section/Hero.jsx";
import InfiniteLogos from "./components/Section/InfinteLogos.jsx";
import Features from "./components/Section/Features.jsx";
import Showcase from "./components/Section/Showcase.jsx";
import About from "./components/Section/About.jsx";
import Industries from "./components/Section/Industries.jsx";
import CTA from "./components/Section/CTA.jsx";

// --- HOME PAGE ---
const HomePage = () => (
  <>
    <Hero />
    <InfiniteLogos />
    <Features />
    <Showcase />
    <About />
    <Industries />
    <CTA />
  </>
);

// --- ROUTER ---
function App() {
  return (
    <div className="bg-[#030712] text-slate-200 font-sans selection:bg-[#3496ed]/30 selection:text-[#8ed0fa]">
      <ScrollToTop />

      <Routes>
        {/* MAIN LAYOUT — with Navbar & Footer */}
        <Route element={<MainLayout />}>
          <Route path="/"           element={<HomePage />} />
          <Route path="/services"   element={<FeaturesPage />} />
          <Route path="/showcase"   element={<ShowcasePage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/about"      element={<AboutPage />} />
          <Route path="/contactus"  element={<ContactUsPage />} />
          <Route path="/contact"    element={<ContactPage />} />
        </Route>

        {/* FOCUS PAGES — no Navbar/Footer */}
        <Route path="/chat" element={<ChatAIPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*"     element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
