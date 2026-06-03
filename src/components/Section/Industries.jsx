import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Landmark, Zap, Building2, Monitor } from "lucide-react";
import { premiumAppear } from "../../utils/animations.js";
import SeeMoreButton from "../SeeMoreButton.jsx";

const industries = [
  {
    key: "banking",
    icon: Landmark,
    color: "border-[#3496ed]/30 hover:border-[#3496ed]/60",
    iconBg: "bg-[#1a76d2]/10 border-[#1a76d2]/20",
    iconColor: "text-[#59b4f5]",
    dotColor: "bg-[#59b4f5]",
    accentLine: "from-[#3496ed]/60",
    bullets: {
      en: ["Core Banking System Engineers", "Compliance & RegTech Talent", "Cybersecurity Specialists", "Data & Analytics Teams"],
      ar: ["مهندسو أنظمة البنوك الأساسية", "كفاءات الامتثال وتقنية RegTech", "متخصصو الأمن السيبراني", "فرق البيانات والتحليلات"],
    },
  },
  {
    key: "fintech",
    icon: Zap,
    color: "border-[#f59e0b]/30 hover:border-[#f59e0b]/60",
    iconBg: "bg-[#f59e0b]/10 border-[#f59e0b]/20",
    iconColor: "text-[#fbbf24]",
    dotColor: "bg-[#fbbf24]",
    accentLine: "from-[#f59e0b]/60",
    bullets: {
      en: ["Payment Infrastructure Engineers", "Mobile Wallet Developers", "API Integration Specialists", "Product & UX Teams"],
      ar: ["مهندسو البنية التحتية للمدفوعات", "مطورو المحافظ الرقمية", "متخصصو تكامل API", "فرق المنتج وتجربة المستخدم"],
    },
  },
  {
    key: "government",
    icon: Building2,
    color: "border-[#3496ed]/30 hover:border-[#3496ed]/60",
    iconBg: "bg-[#1a76d2]/10 border-[#1a76d2]/20",
    iconColor: "text-[#59b4f5]",
    dotColor: "bg-[#59b4f5]",
    accentLine: "from-[#3496ed]/60",
    bullets: {
      en: ["Digital Transformation Programs", "Legacy System Modernisation", "e-Government Portal Development", "Data Governance Specialists"],
      ar: ["برامج التحول الرقمي", "تحديث الأنظمة القديمة", "تطوير بوابات الحكومة الإلكترونية", "متخصصو حوكمة البيانات"],
    },
  },
  {
    key: "software",
    icon: Monitor,
    color: "border-[#f59e0b]/30 hover:border-[#f59e0b]/60",
    iconBg: "bg-[#f59e0b]/10 border-[#f59e0b]/20",
    iconColor: "text-[#fbbf24]",
    dotColor: "bg-[#fbbf24]",
    accentLine: "from-[#f59e0b]/60",
    bullets: {
      en: ["Full-Stack Development Teams", "DevOps & Cloud Engineers", "QA & Test Automation", "Agile Delivery Squads"],
      ar: ["فرق التطوير المتكاملة", "مهندسو DevOps والسحابة", "اختبار الجودة والأتمتة", "فرق التسليم الرشيق"],
    },
  },
];

const Industries = ({ isPage = false }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRTL = i18n.language === "ar";

  return (
    <section id="industries" className="py-20 px-7 md:px-10 relative z-10 overflow-hidden">
      <div className="absolute bottom-0 start-0 w-[500px] h-[400px] bg-[#f59e0b]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.div {...premiumAppear}>
            <span className="text-[#f59e0b] uppercase text-xs tracking-[0.4em] font-bold mb-4 block">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map(({ key, icon: Icon, color, iconBg, iconColor, dotColor, accentLine, bullets }, i) => (
            <motion.div
              key={key}
              {...premiumAppear}
              transition={{ ...premiumAppear.transition, delay: i * 0.1 }}
              onClick={() => navigate("/industries")}
              className={`group relative rounded-[32px] p-8 bg-[#070708] border border-white/10 ${color} transition-all duration-500 flex flex-col gap-6 cursor-pointer`}
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${iconBg} border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${iconColor}`} strokeWidth={1.5} />
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: '"Sora", sans-serif' }}
                  >
                    {t(`industries.items.${key}.title`)}
                  </h3>
                  <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                    {t(`industries.items.${key}.desc`)}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-white/5" />

              {/* Capability bullets — language-aware */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-bold mb-3">
                  {t("industries.key_capabilities")}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {(isRTL ? bullets.ar : bullets.en).map((b) => (
                    <div key={b} className="flex items-center gap-2">
                      <div className={`w-1 h-1 rounded-full shrink-0 ${dotColor}`} />
                      <span className="text-slate-400 text-xs leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accent line */}
              <div className={`w-8 h-0.5 bg-gradient-to-r ${accentLine} to-transparent group-hover:w-16 transition-all duration-500`} />
            </motion.div>
          ))}
        </div>

        {!isPage && <SeeMoreButton to="/industries" text={t("industries.see_more")} />}
      </div>
    </section>
  );
};

export default Industries;
