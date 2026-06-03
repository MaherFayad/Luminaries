import React, { useEffect } from "react";
import { Outlet, Routes, Route, useLocation } from "react-router-dom";
import { setLanguage } from "../i18n";
import ScrollToTop from "./ScrollToTop.jsx";
import MainLayout from "./MainLayout.jsx";

// Pages
import NotFoundPage from "../Page/NotFoundPage.jsx";
import FeaturesPage from "../Page/FeaturesPage.jsx";
import ShowcasePage from "../Page/ShowcasePage.jsx";
import AboutPage from "../Page/AboutPage.jsx";
import ChatAIPage from "../Page/ChatAIPage.jsx";
import IndustriesPage from "../Page/IndustriesPage.jsx";
import ContactUsPage from "../Page/ContactUsPage.jsx";
import ContactPage from "../Page/ContactPage.jsx";
import AuthPage from "../Page/AuthPage.jsx";
import ITOutsourcingPage        from "../Page/services/ITOutsourcingPage.jsx";
import RecruitmentPage          from "../Page/services/RecruitmentPage.jsx";
import ProfessionalServicesPage from "../Page/services/ProfessionalServicesPage.jsx";
import MENAPresencePage         from "../Page/services/MENAPresencePage.jsx";
import BankingPage    from "../Page/industries/BankingPage.jsx";
import FintechPage    from "../Page/industries/FintechPage.jsx";
import GovernmentPage from "../Page/industries/GovernmentPage.jsx";
import SoftwarePage   from "../Page/industries/SoftwarePage.jsx";

// Home sections
import Hero         from "./Section/Hero.jsx";
import InfiniteLogos from "./Section/InfinteLogos.jsx";
import Features     from "./Section/Features.jsx";
import Showcase     from "./Section/Showcase.jsx";
import About        from "./Section/About.jsx";
import Industries   from "./Section/Industries.jsx";
import CTA          from "./Section/CTA.jsx";

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

const LangWrapper = ({ lang }) => {
  useEffect(() => {
    setLanguage(lang);
  }, [lang]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="services"                      element={<FeaturesPage />} />
          <Route path="services/it-outsourcing"       element={<ITOutsourcingPage />} />
          <Route path="services/recruitment"          element={<RecruitmentPage />} />
          <Route path="services/professional"         element={<ProfessionalServicesPage />} />
          <Route path="services/mena-presence"        element={<MENAPresencePage />} />
          <Route path="showcase"                      element={<ShowcasePage />} />
          <Route path="industries"                    element={<IndustriesPage />} />
          <Route path="industries/banking"            element={<BankingPage />} />
          <Route path="industries/fintech"            element={<FintechPage />} />
          <Route path="industries/government"         element={<GovernmentPage />} />
          <Route path="industries/software"           element={<SoftwarePage />} />
          <Route path="about"                         element={<AboutPage />} />
          <Route path="contactus"                     element={<ContactUsPage />} />
          <Route path="contact"                       element={<ContactPage />} />
        </Route>
        <Route path="chat" element={<ChatAIPage />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="*"    element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default LangWrapper;
