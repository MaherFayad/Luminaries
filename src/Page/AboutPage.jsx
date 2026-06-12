import React from "react";
import { motion } from "framer-motion";
import CTA from "../components/Section/CTA";
import { premiumAppear } from "../utils/animations";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: t("about_page.m1_name"),
      role: t("about_page.m1_role"),
      bio:  t("about_page.m1_bio"),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
      socials: { linkedin: "#" },
    },
    {
      name: t("about_page.m2_name"),
      role: t("about_page.m2_role"),
      bio:  t("about_page.m2_bio"),
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
      socials: { linkedin: "#" },
    },
    {
      name: t("about_page.m3_name"),
      role: t("about_page.m3_role"),
      bio:  t("about_page.m3_bio"),
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
      socials: { linkedin: "#" },
    },
  ];

  const coreValuesData = [
    {
      title: t("about_page.val1_title"),
      desc:  t("about_page.val1_desc"),
      color: "from-[#1a76d2]/20 to-transparent",
      iconColor: "text-[#59b4f5]",
    },
    {
      title: t("about_page.val2_title"),
      desc:  t("about_page.val2_desc"),
      color: "from-[#f59e0b]/20 to-transparent",
      iconColor: "text-[#fbbf24]",
    },
    {
      title: t("about_page.val3_title"),
      desc:  t("about_page.val3_desc"),
      color: "from-[#3496ed]/20 to-transparent",
      iconColor: "text-[#3496ed]",
    },
  ];

  return (
    <div className="bg-[#030712] min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#1a76d2]/15 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#f59e0b]/8 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10">
        {/* HERO */}
        <div className="pt-44 pb-20 px-7 text-center">
          <motion.div {...premiumAppear}>
            <span className="text-[#3496ed] uppercase text-xs tracking-[0.4em] font-bold mb-4 block">
              {t("about_page.eyebrow")}
            </span>
            <h1
              className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter"
              style={{ fontFamily: '"Sora", sans-serif' }}
            >
              {t("about_page.h1_line1")}{" "}
              <span className="bg-gradient-to-r from-[#59b4f5] via-[#3496ed] to-[#f59e0b] bg-clip-text text-transparent">
                {t("about_page.h1_accent")}
              </span>
            </h1>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
              {t("about_page.hero_sub")}
            </p>
          </motion.div>
        </div>

        {/* STORY */}
        <div className="py-20 px-7 md:px-10 container mx-auto max-w-6xl">
          <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
            <motion.div {...premiumAppear} className="lg:w-1/2">
              <h2
                className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight"
                style={{ fontFamily: '"Sora", sans-serif' }}
              >
                {t("about_page.story_h2_line1")} <br />
                <span className="text-slate-500">{t("about_page.story_h2_line2")}</span>
              </h2>
              <div className="space-y-6 text-slate-400 text-[17px] leading-relaxed">
                <p>{t("about_page.story_p1")}</p>
                <p>{t("about_page.story_p2")}</p>
                <p>{t("about_page.story_p3")}</p>
              </div>
            </motion.div>

            <motion.div
              {...premiumAppear}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
              className="lg:w-1/2 w-full h-[500px] relative rounded-[48px] overflow-hidden border border-white/10 group shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1655114722721-5c75114be5ab?q=80&w=687&auto=format&fit=crop"
                alt="Luminaries Hub operations"
                className="absolute inset-0 w-full h-full object-cover brightness-[0.8] group-hover:scale-105 transition-transform duration-[3s] ease-out"
                decoding="async"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80 pointer-events-none" />

              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-white font-bold text-2xl">{t("about_page.stat1")}</p>
                  <p className="text-slate-400 text-[10px] uppercase tracking-wider mt-1">{t("about_page.stat1_label")}</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <p className="text-white font-bold text-2xl">{t("about_page.stat2")}</p>
                  <p className="text-slate-400 text-[10px] uppercase tracking-wider mt-1">{t("about_page.stat2_label")}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CORE VALUES */}
        <div className="py-24 px-7 md:px-10 container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <motion.div {...premiumAppear}>
              <span className="text-[#3496ed] uppercase text-xs tracking-[0.4em] font-bold mb-4 block">
                {t("about_page.values_eyebrow")}
              </span>
              <h2
                className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
                style={{ fontFamily: '"Sora", sans-serif' }}
              >
                {t("about_page.values_heading")}
              </h2>
            </motion.div>
          </div>

          <div className="flex flex-col gap-6 md:gap-10">
            {coreValuesData.map((item, index) => (
              <motion.div
                key={index}
                {...premiumAppear}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 }}
                className={`flex flex-col ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 md:gap-20 p-10 md:p-16 rounded-[48px] border border-white/5 bg-[#070708] hover:border-white/15 transition-colors group relative overflow-hidden`}
              >
                <div
                  className={`absolute top-0 ${index % 2 !== 0 ? "left-0" : "right-0"} w-full md:w-[60%] h-full bg-gradient-to-l ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl`}
                />

                <div className="w-full md:w-1/2 relative z-10 flex flex-col justify-center text-center md:text-left">
                  <div className="relative">
                    <span className="text-[6rem] md:text-[8rem] font-black opacity-[0.03] absolute -top-8 md:-top-12 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 pointer-events-none leading-none select-none">
                      0{index + 1}
                    </span>
                    <h3
                      className="relative text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight z-10"
                      style={{ fontFamily: '"Sora", sans-serif' }}
                    >
                      {item.title}
                    </h3>
                    <p className="relative text-slate-400 text-base md:text-lg leading-relaxed md:pr-10 z-10">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="w-full md:w-1/2 relative z-10 flex justify-center items-center">
                  <div className={`transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 ease-out ${item.iconColor} relative`}>
                    <div className="absolute inset-0 blur-2xl opacity-20 bg-current rounded-full scale-125 pointer-events-none" />
                    <svg className="w-32 h-32 md:w-48 md:h-48 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.5">
                      <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.1" />
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" strokeDasharray="2 2" />
                      <circle cx="12" cy="12" r="2" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="pb-10"><CTA /></div>
      </div>
    </div>
  );
};

export default AboutPage;
