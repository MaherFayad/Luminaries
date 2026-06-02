// Showcase.jsx
import React from "react";
import { motion } from "framer-motion";
import SeeMoreButton from "../SeeMoreButton.jsx";
import ShowcaseH from "../../assets/Images/ShowcaseH.jpg";
import { premiumAppear } from "../../utils/animations";
import { useTranslation } from "react-i18next";

const showcaseItems = [
  {
    titleKey: "sc_t1", descKey: "sc_d1",
    img: "https://images.unsplash.com/photo-1680254321973-f5e235a20c54?q=80&w=1400&auto=format&fit=crop",
  },
  {
    titleKey: "sc_t2", descKey: "sc_d2",
    img: "https://images.unsplash.com/photo-1733534843143-a4df42fe8bfe?q=80&w=1170&auto=format&fit=crop",
  },
  {
    titleKey: "sc_t3", descKey: "sc_d3",
    img: "https://images.unsplash.com/photo-1682100615199-5a90830ccbb3?q=80&w=1228&auto=format&fit=crop",
  },
  {
    titleKey: "sc_t4", descKey: "sc_d4",
    img: "https://images.unsplash.com/photo-1679967488797-136c393d3d6c?q=80&w=663&auto=format&fit=crop",
  },
  {
    titleKey: "sc_t5", descKey: "sc_d5",
    img: "https://images.unsplash.com/photo-1677504206526-2e76aafeccc0?q=80&w=1228&auto=format&fit=crop",
  },
  {
    titleKey: "sc_t6", descKey: "sc_d6",
    img: "https://images.unsplash.com/photo-1679538335618-71653024b310?q=80&w=1228&auto=format&fit=crop",
  },
];

const Showcase = ({ isPage = false }) => {
  const { t } = useTranslation();

  return (
    <section id="showcase" className="py-15 px-7 md:px-10 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {!isPage && (
          <div className="text-center mb-16">
            <motion.div {...premiumAppear}>
              <span className="text-[#3496ed] uppercase text-xs tracking-[0.4em] font-bold mb-4 block">
                {t("showcase.eyebrow")}
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter"
                style={{ fontFamily: '"Sora", sans-serif' }}
              >
                {t("showcase.heading")}{" "}
                <span className="bg-gradient-to-r from-[#59b4f5] via-[#3496ed] to-[#f59e0b] bg-clip-text text-transparent">
                  {t("showcase.heading_accent")}
                </span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light mb-12">
                {t("showcase.sub")}
              </p>
            </motion.div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Hero Bento */}
          <motion.div
            {...premiumAppear}
            className="md:col-span-12 h-[450px] md:h-[450px] rounded-[48px] overflow-hidden border border-white/10 relative shadow-2xl group cursor-default"
          >
            <motion.div
              className="absolute inset-0 w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <img
                src={ShowcaseH}
                className="w-full h-full object-cover brightness-[0.85]"
                alt="Luminaries Hub delivery"
                decoding="async"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/40 to-transparent pointer-events-none z-10" />

            <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:max-w-3xl z-20">
              <h3
                className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight"
                style={{ fontFamily: '"Sora", sans-serif' }}
              >
                {t("showcase.hero_title")}
              </h3>
              <p className="text-slate-200 text-[14px] md:text-[15px] leading-relaxed max-w-xl opacity-80">
                {t("showcase.hero_sub")}
              </p>
            </div>
          </motion.div>

          {/* Grid Items */}
          {showcaseItems.map((item, i) => (
            <motion.div
              key={i}
              {...premiumAppear}
              transition={{ ...premiumAppear.transition, delay: i % 2 === 0 ? 0 : 0.15 }}
              className="md:col-span-6 rounded-[40px] bg-white/[0.03] border border-white/10 overflow-hidden flex flex-col group hover:border-[#3496ed]/30 transition-colors duration-500"
            >
              <div className="h-[240px] overflow-hidden relative">
                <img
                  src={item.img}
                  className="w-full h-full object-cover opacity-60 transition duration-[1.5s] ease-out group-hover:scale-110 group-hover:opacity-100"
                  alt={t(`showcase.${item.titleKey}`)}
                  decoding="async"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10" />
              </div>

              <div className="p-10 relative z-20">
                <h3
                  className="text-2xl font-bold text-white uppercase tracking-tight mb-4"
                  style={{ fontFamily: '"Sora", "Inter", sans-serif' }}
                >
                  {t(`showcase.${item.titleKey}`)}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-normal">
                  {t(`showcase.${item.descKey}`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {!isPage && <SeeMoreButton to="/showcase" text={t("showcase.see_more")} />}
    </section>
  );
};

export default Showcase;
