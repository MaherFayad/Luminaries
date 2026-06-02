import React, { useState } from "react";
import { motion } from "framer-motion";
import SeeMoreButton from "../SeeMoreButton.jsx";
import { premiumAppear } from "../../utils/animations";
import { useTranslation } from "react-i18next";

const Pricing = ({ isPage = false }) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const { t } = useTranslation();

  const engagementTiers = [
    {
      name: t("pricing.tier1_name"),
      description: t("pricing.tier1_desc"),
      priceMonthly: t("pricing.tier1_price_a"),
      priceAnnual: t("pricing.tier1_price_b"),
      buttonText: t("pricing.tier1_btn"),
      buttonVariant: "outline",
      features: [
        t("pricing.tier1_f1"),
        t("pricing.tier1_f2"),
        t("pricing.tier1_f3"),
        t("pricing.tier1_f4"),
        t("pricing.tier1_f5"),
      ],
      notIncluded: [
        t("pricing.tier1_x1"),
        t("pricing.tier1_x2"),
      ],
    },
    {
      name: t("pricing.tier2_name"),
      description: t("pricing.tier2_desc"),
      priceMonthly: t("pricing.tier2_price_a"),
      priceAnnual: t("pricing.tier2_price_b"),
      badge: t("pricing.tier2_badge"),
      buttonText: t("pricing.tier2_btn"),
      buttonVariant: "solid",
      features: [
        t("pricing.tier2_f1"),
        t("pricing.tier2_f2"),
        t("pricing.tier2_f3"),
        t("pricing.tier2_f4"),
        t("pricing.tier2_f5"),
        t("pricing.tier2_f6"),
      ],
      notIncluded: [],
    },
    {
      name: t("pricing.tier3_name"),
      description: t("pricing.tier3_desc"),
      priceMonthly: t("pricing.tier3_price_a"),
      priceAnnual: t("pricing.tier3_price_b"),
      buttonText: t("pricing.tier3_btn"),
      buttonVariant: "outline",
      features: [
        t("pricing.tier3_f1"),
        t("pricing.tier3_f2"),
        t("pricing.tier3_f3"),
        t("pricing.tier3_f4"),
        t("pricing.tier3_f5"),
        t("pricing.tier3_f6"),
      ],
      notIncluded: [],
    },
  ];

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", type: "tween" } },
  };

  return (
    <section
      className={`px-7 md:px-10 container mx-auto max-w-7xl relative z-10 ${
        isPage ? "pt-44 pb-16" : "py-15"
      }`}
    >
      {/* CONDITIONAL HEADER */}
      {isPage ? (
        <header className="text-center mb-16">
          <motion.div {...premiumAppear} transition={{ duration: 0.5, ease: "easeOut" }}>
            <span className="text-[#3496ed] uppercase text-xs tracking-[0.4em] font-bold mb-4 block">
              {t("pricing.eyebrow_page")}
            </span>
            <h1
              className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter"
              style={{ fontFamily: '"Sora", sans-serif' }}
            >
              {t("pricing.heading_page").split("Every")[0]}
              <span className="bg-gradient-to-r from-[#59b4f5] via-[#3496ed] to-[#f59e0b] bg-clip-text text-transparent">
                Every Need.
              </span>
            </h1>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light mb-12">
              {t("pricing.sub_page")}
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm font-medium transition-colors ${!isAnnual ? "text-white" : "text-slate-400"}`}>
                {t("pricing.toggle_a")}
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative w-16 h-8 rounded-full bg-white/10 border border-white/20 p-1 transition-colors hover:bg-white/20 focus:outline-none"
                aria-label="Toggle engagement model"
              >
                <motion.div
                  className="w-6 h-6 bg-[#3496ed] rounded-full"
                  animate={{ x: isAnnual ? 32 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-medium transition-colors ${isAnnual ? "text-white" : "text-slate-400"}`}>
                  {t("pricing.toggle_b")}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#3496ed]/20 text-[#59b4f5] text-xs font-bold border border-[#3496ed]/30">
                  MENA
                </span>
              </div>
            </div>
          </motion.div>
        </header>
      ) : (
        <div className="text-center mb-16">
          <motion.div {...premiumAppear} transition={{ duration: 0.5, ease: "easeOut" }}>
            <span className="text-[#3496ed] uppercase text-xs tracking-[0.4em] font-bold mb-4 block">
              {t("pricing.eyebrow")}
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter"
              style={{ fontFamily: '"Sora", sans-serif' }}
            >
              {t("pricing.heading")}{" "}
              <span className="bg-gradient-to-r from-[#59b4f5] via-[#3496ed] to-[#f59e0b] bg-clip-text text-transparent">
                {t("pricing.heading_accent")}
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light mb-12">
              {t("pricing.sub")}
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm font-medium transition-colors ${!isAnnual ? "text-white" : "text-slate-400"}`}>
                {t("pricing.toggle_a")}
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative w-16 h-8 rounded-full bg-white/10 border border-white/20 p-1 transition-colors hover:bg-white/20 focus:outline-none"
                aria-label="Toggle engagement model"
              >
                <motion.div
                  className="w-6 h-6 bg-[#3496ed] rounded-full"
                  animate={{ x: isAnnual ? 32 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-medium transition-colors ${isAnnual ? "text-white" : "text-slate-400"}`}>
                  {t("pricing.toggle_b")}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#3496ed]/20 text-[#59b4f5] text-xs font-bold border border-[#3496ed]/30">
                  MENA
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* CARDS GRID */}
      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
      >
        {engagementTiers.map((tier, index) => {
          const isPopular = tier.badge;

          return (
            <motion.div
              key={index}
              variants={cardItemVariants}
              className={`relative rounded-[40px] p-8 md:p-10 ${
                isPopular
                  ? "bg-[#0c0c0e] border border-[#3496ed]/50 shadow-[0_0_40px_rgba(52,150,237,0.15)] md:-translate-y-4"
                  : "bg-[#070708] border border-white/10 hover:border-white/20 transition-colors"
              }`}
            >
              {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#3496ed] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                  {tier.badge}
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: '"Sora", sans-serif' }}>
                {tier.name}
              </h3>
              <p className="text-slate-400 text-sm h-10 mb-6">{tier.description}</p>

              <div className="flex items-end gap-1 mb-8">
                <span className="text-3xl font-black text-white tracking-tighter">
                  {isAnnual ? tier.priceAnnual : tier.priceMonthly}
                </span>
              </div>

              <button
                className={`w-full py-4 rounded-xl font-bold text-sm transition-transform active:scale-95 mb-10 ${
                  tier.buttonVariant === "solid"
                    ? "bg-[#3496ed] hover:bg-[#59b4f5] text-white shadow-[0_0_20px_rgba(52,150,237,0.4)]"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                }`}
              >
                {tier.buttonText}
              </button>

              <div className="space-y-4">
                <p className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Includes:</p>
                {tier.features?.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#59b4f5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
                {tier.notIncluded?.map((feature, i) => (
                  <div key={`not-${i}`} className="flex items-start gap-3 opacity-40">
                    <svg className="w-5 h-5 text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-slate-400 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      {!isPage && (
        <SeeMoreButton to="/pricing" text={t("pricing.see_more")} />
      )}
    </section>
  );
};

export default Pricing;
