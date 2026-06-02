import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ShieldCheck, Briefcase, HeartHandshake, Layers, Globe2, Cpu } from "lucide-react";
import DifferentiatorCard from "../ui/DifferentiatorCard";
import { premiumAppear } from "../../utils/animations.js";
import SeeMoreButton from "../SeeMoreButton.jsx";

const diffIcons = [ShieldCheck, Briefcase, HeartHandshake, Layers, Globe2, Cpu];
const diffKeys = ["vetted", "ownership", "hr", "scalable", "regional", "broader"];

const WhyUs = ({ isPage = false }) => {
  const { t } = useTranslation();

  return (
    <section id="why-us" className="py-20 px-7 md:px-10 relative z-10 overflow-hidden">
      <div className="absolute top-0 end-0 w-[500px] h-[500px] bg-[#1a76d2]/6 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.div {...premiumAppear}>
            <span className="text-[#3496ed] uppercase text-xs tracking-[0.4em] font-bold mb-4 block">
              {t("whyUs.eyebrow")}
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter"
              style={{ fontFamily: '"Sora", sans-serif' }}
            >
              How We{" "}
              <span className="bg-gradient-to-r from-[#59b4f5] via-[#3496ed] to-[#f59e0b] bg-clip-text text-transparent">
                Differentiate.
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              {t("whyUs.subheading")}
            </p>
          </motion.div>
        </div>

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

        {!isPage && <SeeMoreButton to="/why-us" text="Discover Our Approach" />}
      </div>
    </section>
  );
};

export default WhyUs;
