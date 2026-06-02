import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const industriesData = [
  {
    id: 1,
    category: "Banking",
    title: "AlBilad Bank — QA Transformation",
    insight: "Deployed a 6-person TaaS squad within 10 days, reducing regression cycle time by 60% across 3 product releases.",
    image: "https://images.unsplash.com/photo-1637166185518-058f5896a2e9?q=80&w=1460&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Fintech",
    title: "Cairo Fintech Scale-Up",
    insight: "Placed 12 full-stack engineers over 3 months, enabling the client to ship 2 new payment features on schedule.",
    image: "https://images.unsplash.com/photo-1495954222046-2c427ecb546d?q=80&w=1332&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Government",
    title: "Saudi Digital Authority — Platform",
    insight: "Provided 8 senior engineers and a technical lead for a 6-month government digitization initiative, delivered on time.",
    image: "https://images.unsplash.com/photo-1688407832489-cc9db90773f5?q=80&w=706&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Software",
    title: "Riyadh Tech Ventures — Team Build",
    insight: "Scaled engineering team from 5 to 22 developers in one quarter using the IT Outsourcing model.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    category: "Fintech",
    title: "FinEdge — Backend Recruitment",
    insight: "Delivered 8 qualified senior engineers within 3 weeks, passing all technical screenings and onboarding seamlessly.",
    image: "https://images.unsplash.com/photo-1709990742347-07f67cc136cf?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "Banking",
    title: "National Bank — Mobile Engineering",
    insight: "Placed a dedicated iOS & Android team under full HR outsourcing model, covering payroll, insurance, and compliance.",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80",
  },
];

const ExploreGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeCardId, setActiveCardId] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const categories = ["All", "Banking", "Fintech", "Government", "Software"];

  const filteredData = useMemo(() => {
    return activeCategory === "All"
      ? industriesData
      : industriesData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="w-full max-w-6xl mx-auto py-4">
      {/* Category Navigation */}
      <div className="flex flex-col items-center justify-center mb-12">
        <h3 className="text-white font-bold text-xl mb-4" style={{ fontFamily: '"Sora", sans-serif' }}>
          {t("explore.browse_title")}
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#3496ed] text-white shadow-[0_0_20px_rgba(52,150,237,0.4)]"
                  : "bg-[#111114] text-slate-400 border border-white/10 hover:bg-white/5 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Grid Layout */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-7 md:px-0">
        <AnimatePresence>
          {filteredData.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveCardId(activeCardId === item.id ? null : item.id)}
              onMouseLeave={() => setActiveCardId(null)}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#070708] h-[340px] cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                  activeCardId === item.id
                    ? "scale-110 brightness-40"
                    : "brightness-[0.85] group-hover:scale-110 group-hover:brightness-40"
                }`}
              />

              {/* Top Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider text-white">
                  {item.category}
                </span>
              </div>

              {/* Interaction Overlay */}
              <div
                className={`absolute inset-0 p-6 z-20 flex flex-col transition-opacity duration-300 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent ${
                  activeCardId === item.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <div
                  className={`mt-auto transition-transform duration-300 ${
                    activeCardId === item.id ? "translate-y-0" : "translate-y-4 group-hover:translate-y-0"
                  }`}
                >
                  <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: '"Sora", sans-serif' }}>
                    {item.title}
                  </h3>

                  <div className="mb-4 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                    <span className="text-[#59b4f5] text-[10px] font-bold uppercase tracking-widest mb-1.5 block">
                      {t("explore.insight_label")}
                    </span>
                    <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">
                      {item.insight}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => { e.stopPropagation(); navigate("/pricing"); }}
                      className="flex-1 bg-white text-black py-2.5 rounded-xl text-xs font-bold hover:bg-[#3496ed] hover:text-white transition-colors"
                    >
                      {t("explore.contact_btn")}
                    </button>
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white transition-colors border border-white/10"
                      aria-label="Save"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ExploreGrid;
