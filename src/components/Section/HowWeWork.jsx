import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ProcessStep from "../ui/ProcessStep";
import { premiumAppear } from "../../utils/animations.js";

const stepKeys = ["understand", "source", "assess", "onboard", "optimize"];

const HowWeWork = () => {
  const { t } = useTranslation();

  return (
    <section id="how-we-work" className="py-20 px-7 md:px-10 relative z-10 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div {...premiumAppear}>
            <span className="text-brand-500 uppercase text-xs tracking-[0.4em] font-bold mb-4 block">
              {t("howWeWork.eyebrow")}
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter"
              style={{ fontFamily: '"Sora", sans-serif' }}
            >
              {t("howWeWork.heading")}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              {t("howWeWork.subheading")}
            </p>
          </motion.div>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:grid grid-cols-5 gap-4 relative">
          {/* Connecting line */}
          <div className="absolute top-6 start-[10%] end-[10%] h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

          {stepKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col items-center text-center gap-4 pt-1"
            >
              <div className="w-12 h-12 rounded-full bg-brand-500/15 border border-brand-500/40 flex items-center justify-center text-brand-400 font-bold text-lg z-10 bg-[#030712]">
                {i + 1}
              </div>
              <div>
                <h4 className="text-white font-bold text-base mb-2" style={{ fontFamily: '"Sora", sans-serif' }}>
                  {t(`howWeWork.steps.${key}.title`)}
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {t(`howWeWork.steps.${key}.desc`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical stack */}
        <div className="flex flex-col gap-0 md:hidden ps-2">
          {stepKeys.map((key, i) => (
            <ProcessStep
              key={key}
              number={i + 1}
              title={t(`howWeWork.steps.${key}.title`)}
              desc={t(`howWeWork.steps.${key}.desc`)}
              isLast={i === stepKeys.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
