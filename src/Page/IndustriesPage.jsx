import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Landmark, Zap, Building2, Monitor } from "lucide-react";
import IndustryCard from "../components/ui/IndustryCard";
import { premiumAppear } from "../utils/animations";

const industryDetails = [
  {
    key: "banking",
    icon: Landmark,
    highlights: ["Core Banking System Support", "Compliance & RegTech Talent", "Cybersecurity Engineers", "Data & Analytics Teams"],
  },
  {
    key: "fintech",
    icon: Zap,
    highlights: ["Payment Infrastructure Engineers", "Mobile Wallet Developers", "API Integration Specialists", "Product & UX Teams"],
  },
  {
    key: "government",
    icon: Building2,
    highlights: ["Digital Transformation Programs", "Legacy System Modernization", "e-Government Portals", "Data Governance Specialists"],
  },
  {
    key: "software",
    icon: Monitor,
    highlights: ["Full-stack Development Teams", "DevOps & Cloud Engineers", "QA & Test Automation", "Agile Delivery Squads"],
  },
];

const IndustriesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="px-7 md:px-10 max-w-6xl mx-auto mb-20 text-center relative">
        <div className="absolute top-0 start-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent-500/6 blur-[140px] rounded-full pointer-events-none" />
        <motion.div {...premiumAppear} className="relative z-10">
          <span className="text-accent-500 uppercase text-xs tracking-[0.4em] font-bold mb-4 block">
            {t("industries.eyebrow")}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter" style={{ fontFamily: '"Sora", sans-serif' }}>
            {t("industries.heading")}
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            {t("industries.subheading")}
          </p>
        </motion.div>
      </section>

      {/* Industry cards with detail */}
      <section className="px-7 md:px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industryDetails.map(({ key, icon: Icon, highlights }, i) => (
            <motion.div
              key={key}
              {...premiumAppear}
              transition={{ ...premiumAppear.transition, delay: i * 0.1 }}
              id={key}
              className="rounded-[32px] p-8 bg-[#070708] border border-white/10 hover:border-accent-500/25 transition-all duration-500 space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-accent-400" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
                    {t(`industries.items.${key}.title`)}
                  </h2>
                  <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                    {t(`industries.items.${key}.desc`)}
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-bold mb-3">Key Capabilities</p>
                <div className="grid grid-cols-2 gap-2">
                  {highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-accent-500 shrink-0" />
                      <span className="text-slate-400 text-xs">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
