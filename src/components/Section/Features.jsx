import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BentoGlow from "../features/BentoGlow";
import AIRobot from "../features/AIRobotBento";
import ProjectBento from "../features/ProjectBento";
import SeeMoreButton from "../SeeMoreButton.jsx";
import { premiumAppear } from "../../utils/animations.js";
import { useTranslation } from "react-i18next";

const Features = ({ isPage = false }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section id="features" className="py-15 px-7 md:px-10 relative z-10">
      <div className="container mx-auto max-w-6xl">
        {!isPage && (
          <div className="text-center mb-16">
            <motion.div {...premiumAppear}>
              <span className="text-[#3496ed] uppercase text-xs tracking-[0.4em] font-bold mb-4 block">
                {t("features.eyebrow")}
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter"
                style={{ fontFamily: '"Sora", sans-serif' }}
              >
                {t("features.heading").split(".")[0]}.{" "}
                <span className="bg-gradient-to-r from-[#59b4f5] via-[#3496ed] to-[#f59e0b] bg-clip-text text-transparent">
                  {t("features.heading").split(".")[1]}
                </span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light mb-12">
                {t("features.sub")}
              </p>
            </motion.div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Feature Card */}
          <motion.div
            {...premiumAppear}
            className="md:col-span-12 min-h-[450px] rounded-[48px] border border-white/5 relative overflow-hidden group shadow-2xl flex flex-col justify-end"
          >
            <img
              src="https://images.unsplash.com/photo-1698430484131-efc9f5ccba1a?q=80&w=1400&auto=format&fit=crop"
              className="absolute inset-0 w-full h-full object-cover brightness-[0.7] group-hover:scale-105 transition-transform duration-[2s] ease-out"
              alt="Professional Services"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
            <div className="p-10 md:p-16 relative z-20">
              <span className="text-[#59b4f5] uppercase text-[13px] tracking-[0.3em] font-bold mb-4 block">
                {t("features.hero_label")}
              </span>
              <h3
                className="text-3xl md:text-5xl font-bold text-white leading-[1.1] mb-8 max-w-2xl"
                style={{ fontFamily: '"Sora", sans-serif' }}
              >
                {t("features.hero_title")}
              </h3>
              <div
                onClick={() => navigate("/features")}
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-[#3496ed] hover:text-white transition-all active:scale-95 cursor-pointer"
              >
                {t("features.hero_btn")}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* IT Outsourcing Bento */}
          <motion.div {...premiumAppear} className="md:col-span-12">
            <BentoGlow className="min-h-[400px] h-auto md:h-[400px] rounded-[40px] md:rounded-[48px] border border-white/10 bg-[#070708] shadow-2xl flex flex-col md:flex-row overflow-hidden group">
              <div className="w-full md:w-1/2 h-[220px] md:h-full relative overflow-hidden border-b md:border-b-0 md:border-r border-white/10 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1674707488760-4ec87e969368?q=80&w=1332&auto=format&fit=crop"
                  className="absolute inset-0 w-full h-full object-cover object-bottom group-hover:scale-110 transition-transform duration-[4s]"
                  alt="IT Outsourcing"
                />
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <span className="text-[#59b4f5] uppercase text-[10px] tracking-[0.3em] font-bold mb-4 block">
                  {t("features.bento1_label")}
                </span>
                <h3
                  className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight"
                  style={{ fontFamily: '"Sora", sans-serif' }}
                >
                  {t("features.bento1_title")}{" "}
                  <span className="text-[#3496ed]">{t("features.bento1_accent")}</span>
                </h3>
                <p className="text-slate-400 text-sm md:text-base mb-8 max-w-sm">
                  {t("features.bento1_body")}
                </p>
                <motion.button
                  onClick={() => navigate("/services")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#3496ed] hover:text-white transition-all w-fit"
                >
                  {t("features.bento1_btn")}
                  <svg className="w-4 h-4 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </div>
            </BentoGlow>
          </motion.div>

          {/* Technical Recruitment Bento */}
          <motion.div {...premiumAppear} className="md:col-span-12">
            <BentoGlow className="min-h-[400px] h-auto md:h-[400px] rounded-[40px] md:rounded-[48px] border border-white/10 bg-[#070708] flex flex-col md:flex-row overflow-hidden group">
              <div className="w-full md:w-1/2 h-[320px] md:h-full relative overflow-hidden bg-slate-900/50 flex items-center justify-center">
                <div className="w-full h-full scale-[0.85] md:scale-100 origin-center transition-transform flex items-center justify-center mt-8 md:mt-0">
                  <AIRobot />
                </div>
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <span className="text-[#59b4f5] uppercase text-[10px] tracking-[0.3em] font-bold mb-4 block">
                  {t("features.bento2_label")}
                </span>
                <h3
                  className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight"
                  style={{ fontFamily: '"Sora", sans-serif' }}
                >
                  {t("features.bento2_title")}{" "}
                  <span className="text-[#3496ed]">{t("features.bento2_accent")}</span>
                </h3>
                <p className="text-slate-400 text-sm md:text-base mb-8">
                  {t("features.bento2_body")}
                </p>
                <motion.button
                  onClick={() => navigate("/services")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#3496ed] hover:text-white transition-all w-fit"
                >
                  {t("features.bento2_btn")}
                  <svg className="w-4 h-4 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </div>
            </BentoGlow>
          </motion.div>

          {/* Project Bento */}
          <motion.div {...premiumAppear} className="md:col-span-12">
            <ProjectBento />
          </motion.div>
        </div>
        {!isPage && <SeeMoreButton to="/features" text={t("features.see_more")} />}
      </div>
    </section>
  );
};
export default Features;
