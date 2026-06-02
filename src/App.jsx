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
import TestimonialsPage from "./Page/TestimonialsPage.jsx";
import PricingPage from "./Page/PricingPage.jsx";
import ChatAIPage from "./Page/ChatAIPage.jsx";
import ServicesPage from "./Page/ServicesPage.jsx";
import IndustriesPage from "./Page/IndustriesPage.jsx";
import WhyUsPage from "./Page/WhyUsPage.jsx";
import ContactPage from "./Page/ContactPage.jsx";

// --- HOME SECTIONS ---
import Hero from "./components/Section/Hero.jsx";
import InfiniteLogos from "./components/Section/InfinteLogos.jsx";
import Features from "./components/Section/Features.jsx";
import Showcase from "./components/Section/Showcase.jsx";
import About from "./components/Section/About.jsx";
import WhyUs from "./components/Section/WhyUs.jsx";
import Industries from "./components/Section/Industries.jsx";
import Testimonials from "./components/Section/Testimonials.jsx";
import Pricing from "./components/Section/Pricing.jsx";
import FAQ from "./components/Section/FAQ.jsx";
import CTA from "./components/Section/CTA.jsx";

// --- HOME PAGE (maps to PDF sections 1–11) ---
const HomePage = () => (
  <>
    <Hero />           {/* PDF p.1: tagline + badge */}
    <InfiniteLogos />  {/* PDF p.12: Trusted By */}
    <Features />       {/* PDF p.5–7: Our Services */}
    <Showcase />       {/* PDF p.8: How We Work */}
    <About />          {/* PDF p.2–3: Who We Are + Vision/Mission */}
    <WhyUs />          {/* PDF p.9: Why Luminaries Hub */}
    <Industries />     {/* PDF p.10: Industries We Serve */}
    <Testimonials />   {/* PDF p.12: Trusted By (client quotes) */}
    <Pricing />        {/* Engagement models */}
    <FAQ />
    <CTA />            {/* PDF p.13: Your Partner in Scaling */}
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
          <Route path="/"            element={<HomePage />} />
          <Route path="/features"    element={<FeaturesPage />} />
          <Route path="/services"    element={<ServicesPage />} />
          <Route path="/showcase"    element={<ShowcasePage />} />
          <Route path="/why-us"      element={<WhyUsPage />} />
          <Route path="/industries"  element={<IndustriesPage />} />
          <Route path="/about"       element={<AboutPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/pricing"     element={<PricingPage />} />
          <Route path="/contact"     element={<ContactPage />} />
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
