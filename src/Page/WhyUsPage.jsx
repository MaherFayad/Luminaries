import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ShieldCheck, Briefcase, HeartHandshake, Layers, Globe2, Cpu } from "lucide-react";
import DifferentiatorCard from "../components/ui/DifferentiatorCard";
import { premiumAppear } from "../utils/animations";

const diffIcons = [ShieldCheck, Briefcase, HeartHandshake, Layers, Globe2, Cpu];
const diffKeys = ["vetted", "ownership", "hr", "scalable", "regional", "broader"];

const WhyUsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-20">
      <section className="px-7 md:px-10 max-w-6xl mx-auto mb-16 text-center relative">
        <div className="absolute top-0 start-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-600/8 blur-[140px] rounded-full pointer-events-none" />
        <motion.div {...premiumAppear} className="relative z-10">
          <span className="text-brand-500 uppercase text-xs tracking-[0.4em] font-bold mb-4 block">
            {t("whyUs.eyebrow")}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter" style={{ fontFamily: '"Sora", sans-serif' }}>
            {t("whyUs.heading")}
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            {t("whyUs.subheading")}
          </p>
        </motion.div>
      </section>

      <section className="px-7 md:px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {diffKeys.map((key, i) => (
            <DifferentiatorCard
              key={key}
              icon={diffIcons[i]}
              title={t(`whyUs.items.${key}.title`)}
              desc={t(`whyUs.items.${key}.desc`)}
              delay={i * 0.08}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyUsPage;
