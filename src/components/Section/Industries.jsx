import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Landmark, Zap, Building2, Monitor } from "lucide-react";
import IndustryCard from "../ui/IndustryCard";
import { premiumAppear } from "../../utils/animations.js";
import SeeMoreButton from "../SeeMoreButton.jsx";

const industryIcons = [Landmark, Zap, Building2, Monitor];
const industryKeys = ["banking", "fintech", "government", "software"];

const Industries = ({ isPage = false }) => {
  const { t } = useTranslation();

  return (
    <section id="industries" className="py-20 px-7 md:px-10 relative z-10 overflow-hidden">
      <div className="absolute bottom-0 start-0 w-[500px] h-[400px] bg-accent-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.div {...premiumAppear}>
            <span className="text-accent-500 uppercase text-xs tracking-[0.4em] font-bold mb-4 block">
              {t("industries.eyebrow")}
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter"
              style={{ fontFamily: '"Sora", sans-serif' }}
            >
              {t("industries.heading")}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              {t("industries.subheading")}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {industryKeys.map((key, i) => (
            <IndustryCard
              key={key}
              icon={industryIcons[i]}
              title={t(`industries.items.${key}.title`)}
              desc={t(`industries.items.${key}.desc`)}
              delay={i * 0.1}
            />
          ))}
        </div>

        {!isPage && <SeeMoreButton to="/industries" text="Explore All Industries" />}
      </div>
    </section>
  );
};

export default Industries;
