import React from "react";
import { motion } from "framer-motion";
import { useLn } from "../../hooks/useLp";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const ln = useLn();
  const { t } = useTranslation();

  return (
    <section className="relative pt-23 pb-10 md:pt-32 md:pb-20 overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#1a76d2]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-7 relative z-10 text-center">
        {/* Region badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1a76d2]/30 bg-[#1a76d2]/8 mb-8"
        >
          <span className="text-[#59b4f5] text-xs font-semibold tracking-wider uppercase">
            {t("hero.badge")}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
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
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t("hero.sub")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => ln("/contactus")}
            className="h-14 w-[280px] bg-white text-black rounded-full font-bold text-sm uppercase hover:bg-[#1a76d2] hover:text-white transition-all shadow-lg"
          >
            {t("hero.cta1")}
          </button>
          <button
            onClick={() => ln("/services")}
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
