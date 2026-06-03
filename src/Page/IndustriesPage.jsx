import React from "react";
import { motion } from "framer-motion";
import { useLn } from "../hooks/useLp";
import { useTranslation } from "react-i18next";
import { Landmark, Zap, Building2, Monitor } from "lucide-react";
import { premiumAppear } from "../utils/animations";

const industryDetails = [
  {
    key: "banking",
    icon: Landmark,
    color: "border-[#3496ed]/30 hover:border-[#3496ed]/60",
    iconBg: "bg-[#1a76d2]/10 border-[#1a76d2]/20",
    iconColor: "text-[#59b4f5]",
    dotColor: "bg-[#59b4f5]",
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
    bullets: {
      en: ["Full-Stack Development Teams", "DevOps & Cloud Engineers", "QA & Test Automation", "Agile Delivery Squads"],
      ar: ["فرق التطوير المتكاملة", "مهندسو DevOps والسحابة", "اختبار الجودة والأتمتة", "فرق التسليم الرشيق"],
    },
  },
];

const IndustriesPage = () => {
  const { t, i18n } = useTranslation();
  const ln = useLn();
  const isRTL = i18n.language === "ar";

  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="px-7 md:px-10 max-w-6xl mx-auto mb-16 text-center relative">
        <div className="absolute top-0 start-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#f59e0b]/6 blur-[140px] rounded-full pointer-events-none" />
        <motion.div {...premiumAppear} className="relative z-10">
          <span className="text-[#f59e0b] uppercase text-xs tracking-[0.4em] font-bold mb-4 block">
            {t("industries.eyebrow")}
          </span>
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter"
            style={{ fontFamily: '"Sora", sans-serif' }}
          >
            {t("industries.heading")}
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            {t("industries.subheading")}
          </p>
        </motion.div>
      </section>

      {/* Cards */}
      <section className="px-7 md:px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industryDetails.map(({ key, icon: Icon, color, iconBg, iconColor, dotColor, bullets }, i) => (
            <motion.div
              key={key}
              {...premiumAppear}
              transition={{ ...premiumAppear.transition, delay: i * 0.1 }}
              id={key}
              onClick={() => ln(`/industries/${key}`)}
              className={`group rounded-[32px] p-8 bg-[#070708] border border-white/10 ${color} transition-all duration-500 space-y-6 cursor-pointer`}
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${iconBg} border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${iconColor}`} strokeWidth={1.5} />
                </div>
                <div>
                  <h2
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: '"Sora", sans-serif' }}
                  >
                    {t(`industries.items.${key}.title`)}
                  </h2>
                  <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                    {t(`industries.items.${key}.desc`)}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="pt-4 border-t border-white/5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-bold mb-3">
                  {t("industries.key_capabilities")}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {(isRTL ? bullets.ar : bullets.en).map((b) => (
                    <div key={b} className="flex items-center gap-2">
                      <div className={`w-1 h-1 rounded-full shrink-0 ${dotColor}`} />
                      <span className="text-slate-400 text-xs">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA hint */}
              <p className={`text-[11px] font-semibold uppercase tracking-wider ${iconColor} opacity-0 group-hover:opacity-100 transition-opacity`}>
                {isRTL ? "احجز استشارة ←" : "Book a Consultation →"}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
