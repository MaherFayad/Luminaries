import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();
  const { t } = useTranslation();

  const words = [
    t("hero.placeholder_1"),
    t("hero.placeholder_2"),
    t("hero.placeholder_3"),
    t("hero.placeholder_4"),
  ];

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1500);
      return () => clearTimeout(timeout);
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(
      () => { setSubIndex((prev) => prev + (reverse ? -1 : 1)); },
      reverse ? 50 : 80,
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  const handleViewShowcase = () => {
    navigate("/features");
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    navigate("/pricing");
  };

  return (
    <section className="relative pt-23 pb-10 md:pt-32 md:pb-20 overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#1a76d2]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-7 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tighter leading-[1.1]"
          style={{ fontFamily: '"Sora", sans-serif' }}
        >
          {t("hero.line1")} <br />
          <span className="bg-gradient-to-r from-[#59b4f5] via-[#3496ed] to-[#f59e0b] bg-clip-text text-transparent animate-gradient">
            {t("hero.line2")}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-400 text-lg md:text-[16px] max-w-2xl mx-auto mb-12"
        >
          {t("hero.sub")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          style={{ transform: "translateZ(0)" }}
          className="relative max-w-2xl mx-auto mb-12 p-2 rounded-2xl bg-transparent border border-white/20 hover:border-white/30 focus-within:border-[#3496ed]/60 transition-colors will-change-transform"
          suppressHydrationWarning
        >
          <form onSubmit={handleGenerate} className="flex flex-col md:flex-row items-center gap-2">
            <div className="flex-grow flex items-center gap-3 px-4 py-2 w-full">
              <svg
                className="w-5 h-5 text-slate-400 focus-within:text-[#59b4f5] transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2.5" />
              </svg>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={words[index].substring(0, subIndex)}
                className="w-full bg-transparent border-none text-white text-[15px] focus:ring-0 placeholder-white/30 outline-none font-sm tracking-wide"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-[#1a76d2] hover:bg-[#3496ed] text-white rounded-xl text-[12px] font-bold uppercase tracking-wider transition-colors shadow-lg shadow-[#1a76d2]/20"
            >
              {t("hero.btn_search")}
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => navigate("/pricing")}
            className="h-14 w-[280px] bg-white text-black rounded-full font-bold text-sm uppercase hover:bg-[#1a76d2] hover:text-white transition-all shadow-lg"
          >
            {t("hero.cta1")}
          </button>
          <button
            onClick={handleViewShowcase}
            className="h-14 w-[280px] bg-transparent text-white border border-white/10 rounded-full font-bold text-sm uppercase hover:bg-white/5 transition-all flex items-center justify-center gap-2"
          >
            {t("hero.cta2")}
            <svg className="w-4 h-4 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
