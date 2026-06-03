import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Showcase from "../components/Section/Showcase";
import ExploreGrid from "../components/ExploreGrid.jsx";
import { premiumAppear } from "../utils/animations";
import { useTranslation } from "react-i18next";

const PartnerBanner = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="relative py-10 px-7 md:px-10 container mx-auto max-w-6xl z-10">
      <motion.div
        {...premiumAppear}
        className="relative rounded-[32px] md:rounded-[48px] border border-white/10 bg-[#070708] overflow-hidden p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 group shadow-2xl"
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a76d2]/5 to-[#f59e0b]/5 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3496ed_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="relative z-10 md:max-w-xl text-center md:text-left">
          <span className="text-[#59b4f5] uppercase text-[10px] tracking-[0.3em] font-bold mb-3 block">
            {t("showcase_page.banner_label")}
          </span>
          <h3
            className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight"
            style={{ fontFamily: '"Sora", sans-serif' }}
          >
            {t("showcase_page.banner_title")}{" "}
            <span className="text-slate-400">{t("showcase_page.banner_body").split(".")[0]}.</span>
          </h3>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            {t("showcase_page.banner_body")}
          </p>
        </div>

        <div className="relative z-10 shrink-0">
          <button
            onClick={() => navigate("/contactus")}
            className="px-8 py-4 bg-white text-black hover:bg-[#3496ed] hover:text-white rounded-xl font-bold text-sm transition-all active:scale-95 flex items-center gap-2 group/btn shadow-lg"
          >
            {t("showcase_page.banner_btn")}
            <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 rtl-flip transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

const ShowcasePage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#030712] min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#1a76d2]/15 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#f59e0b]/8 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10">
        {/* HERO HEADER */}
        <header className="pt-44 pb-12 px-7 text-center">
          <motion.div {...premiumAppear}>
            <span className="text-[#3496ed] uppercase text-xs tracking-[0.4em] font-bold mb-4 block">
              {t("showcase_page.eyebrow")}
            </span>
            <h1
              className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter"
              style={{ fontFamily: '"Sora", sans-serif' }}
            >
              {t("showcase_page.h1_line1")}{" "}
              <span className="bg-gradient-to-r from-[#59b4f5] via-[#3496ed] to-[#f59e0b] bg-clip-text text-transparent">
                {t("showcase_page.h1_accent")}
              </span>
            </h1>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
              {t("showcase_page.hero_sub")}
            </p>
          </motion.div>
        </header>

        {/* MAIN SHOWCASE GRID */}
        <section className="pb-10">
          <Showcase isPage={true} />
        </section>

        {/* INDUSTRY BROWSE */}
        <section id="browse-by-category">
          <ExploreGrid />
        </section>

        {/* AMBIENT SEPARATOR */}
        <div className="relative w-full h-px flex items-center justify-center pointer-events-none mt-10 mb-5">
          <div className="absolute w-[500px] md:w-[800px] h-[200px] bg-[#1a76d2]/10 blur-[120px] rounded-full" />
          <div className="absolute w-[300px] md:w-[400px] h-[100px] bg-[#f59e0b]/8 blur-[80px] rounded-full" />
        </div>

        {/* PARTNER BANNER */}
        <PartnerBanner />

        <div className="pb-24" />
      </div>
    </div>
  );
};

export default ShowcasePage;
