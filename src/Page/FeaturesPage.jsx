import React from "react";
import { motion } from "framer-motion";
import Features from "../components/Section/Features";
import CTA from "../components/Section/CTA.jsx";
import { premiumAppear } from "../utils/animations";
import { useTranslation } from "react-i18next";

const FeaturesPage = () => {
  const { t } = useTranslation();

  const capabilities = [
    {
      title: t("features_page.c1_title"),
      desc:  t("features_page.c1_desc"),
      iconColor: "text-[#59b4f5]",
      iconBgClass: "bg-[#1a76d2]/10",
      hoverBorderClass: "hover:border-[#3496ed]/30",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: t("features_page.c2_title"),
      desc:  t("features_page.c2_desc"),
      iconColor: "text-[#3496ed]",
      iconBgClass: "bg-[#3496ed]/10",
      hoverBorderClass: "hover:border-[#3496ed]/30",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: t("features_page.c3_title"),
      desc:  t("features_page.c3_desc"),
      iconColor: "text-[#fbbf24]",
      iconBgClass: "bg-[#f59e0b]/10",
      hoverBorderClass: "hover:border-[#f59e0b]/30",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: t("features_page.c4_title"),
      desc:  t("features_page.c4_desc"),
      iconColor: "text-[#59b4f5]",
      iconBgClass: "bg-[#1a76d2]/10",
      hoverBorderClass: "hover:border-[#3496ed]/30",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: t("features_page.c5_title"),
      desc:  t("features_page.c5_desc"),
      iconColor: "text-[#3496ed]",
      iconBgClass: "bg-[#3496ed]/10",
      hoverBorderClass: "hover:border-[#3496ed]/30",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: t("features_page.c6_title"),
      desc:  t("features_page.c6_desc"),
      iconColor: "text-[#fbbf24]",
      iconBgClass: "bg-[#f59e0b]/10",
      hoverBorderClass: "hover:border-[#f59e0b]/30",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-[#030712] min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#1a76d2]/15 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#f59e0b]/8 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10">
        {/* HERO HEADER */}
        <header className="pt-44 pb-12 px-7 text-center">
          <motion.div {...premiumAppear}>
            <span className="text-[#3496ed] uppercase text-xs tracking-[0.4em] font-bold mb-4 block">
              {t("features_page.eyebrow")}
            </span>
            <h1
              className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter"
              style={{ fontFamily: '"Sora", sans-serif' }}
            >
              {t("features_page.h1_line1")}{" "}
              <span className="bg-gradient-to-r from-[#59b4f5] via-[#3496ed] to-[#f59e0b] bg-clip-text text-transparent">
                {t("features_page.h1_accent")}
              </span>
            </h1>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
              {t("features_page.hero_sub")}
            </p>
          </motion.div>
        </header>

        {/* BENTO GRID */}
        <section className="pb-10">
          <Features isPage={true} />
        </section>

        {/* CAPABILITIES GRID */}
        <section className="py-24 pt-0 px-7 md:px-10 container mx-auto max-w-6xl">
          <div className="mb-16 md:text-center">
            <motion.div {...premiumAppear}>
              <h2
                className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                style={{ fontFamily: '"Sora", sans-serif' }}
              >
                {t("features_page.cap_heading")}{" "}
                <span className="text-[#59b4f5]">{t("features_page.cap_accent")}</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                {t("features_page.cap_sub")}
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                {...premiumAppear}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 }}
                className={`group p-8 rounded-3xl border border-white/5 bg-[#0A0A0A] hover:bg-[#111111] transition-colors ${cap.hoverBorderClass}`}
              >
                <div className={`w-12 h-12 rounded-2xl ${cap.iconBgClass} border border-white/5 flex items-center justify-center mb-6 ${cap.iconColor} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  {cap.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{cap.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="pb-10"><CTA /></section>
      </div>
    </div>
  );
};

export default FeaturesPage;
