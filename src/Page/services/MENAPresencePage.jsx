import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MapPin, ArrowRight, Building2, Users, Globe2, ShieldCheck } from "lucide-react";
import { premiumAppear } from "../../utils/animations";
import { useLn } from "../../hooks/useLp";
import CTA from "../../components/Section/CTA";

const content = {
  en: {
    eyebrow: "MENA Regional Presence",
    heading: "Deep roots in Egypt &",
    accent:  "Saudi Arabia.",
    desc: "Our regional presence isn't a claim — it's a structural advantage. With active operations and talent networks across Egypt and Saudi Arabia, we bring market-native understanding to every engagement.",
    pillarsTitle: "Why Regional Depth Matters",
    pillars: [
      { icon: Building2, title: "Local Compliance Expertise",    desc: "Full understanding of labour law, social insurance, and employment regulations in both Egypt and the Kingdom of Saudi Arabia." },
      { icon: Users,     title: "Active MENA Talent Network",    desc: "Continuously updated database of pre-screened technical professionals based in Cairo, Riyadh, Jeddah, and Alexandria." },
      { icon: Globe2,    title: "Cultural & Business Alignment", desc: "Engineers who understand the communication styles, work rhythms, and business cultures of your organisation." },
      { icon: ShieldCheck, title: "Regulatory Readiness",       desc: "Engagements structured to meet local and sector-specific compliance requirements from day one." },
    ],
    marketsTitle: "Our Markets",
    markets: [
      { country: "Egypt",        detail: "Cairo · Alexandria · Giza", flag: "🇪🇬" },
      { country: "Saudi Arabia", detail: "Riyadh · Jeddah · Khobar",  flag: "🇸🇦" },
    ],
    outcomeTitle: "The Regional Advantage",
    outcome: "Faster onboarding, lower attrition, stronger cultural fit, and zero timezone friction — because your team is built from within the region.",
    btn: "Book a Consultation",
  },
  ar: {
    eyebrow: "الحضور الإقليمي في الشرق الأوسط وشمال أفريقيا",
    heading: "جذور عميقة في مصر",
    accent:  "والمملكة العربية السعودية.",
    desc: "حضورنا الإقليمي ليس مجرد ادعاء — بل هو ميزة هيكلية حقيقية. بفضل عملياتنا النشطة وشبكات الكفاءات عبر مصر والمملكة العربية السعودية، نجلب فهماً أصيلاً للسوق إلى كل تعاون.",
    pillarsTitle: "لماذا يهم العمق الإقليمي",
    pillars: [
      { icon: Building2, title: "خبرة الامتثال المحلي",           desc: "فهم كامل لقانون العمل والتأمين الاجتماعي ولوائح التوظيف في كل من مصر والمملكة العربية السعودية." },
      { icon: Users,     title: "شبكة كفاءات الشرق الأوسط النشطة", desc: "قاعدة بيانات محدّثة باستمرار من المتخصصين التقنيين المُفرَّزين مسبقاً في القاهرة والرياض وجدة والإسكندرية." },
      { icon: Globe2,    title: "التوافق الثقافي والتجاري",         desc: "مهندسون يفهمون أساليب التواصل وإيقاعات العمل والثقافات التجارية لمؤسستك." },
      { icon: ShieldCheck, title: "الاستعداد التنظيمي",             desc: "تعاملات مهيكلة لتلبية متطلبات الامتثال المحلية والقطاعية من اليوم الأول." },
    ],
    marketsTitle: "أسواقنا",
    markets: [
      { country: "مصر",                      detail: "القاهرة · الإسكندرية · الجيزة", flag: "🇪🇬" },
      { country: "المملكة العربية السعودية",  detail: "الرياض · جدة · الخبر",           flag: "🇸🇦" },
    ],
    outcomeTitle: "الميزة الإقليمية",
    outcome: "إعداد أسرع، ومعدل استبقاء أعلى، وتوافق ثقافي أقوى، وصفر احتكاك في المناطق الزمنية — لأن فريقك مبني من داخل المنطقة.",
    btn: "احجز استشارة",
  },
};

export default function MENAPresencePage() {
  const { i18n } = useTranslation();
  const ln = useLn();
  const isRTL = i18n.language === "ar";
  const c = isRTL ? content.ar : content.en;

  return (
    <div className="bg-[#030712] min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-20 px-7 md:px-10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#1a76d2]/12 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 end-0 w-[400px] h-[400px] bg-[#f59e0b]/6 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div {...premiumAppear} className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-[#1a76d2]/15 border border-[#1a76d2]/25 flex items-center justify-center mb-8">
              <MapPin className="w-8 h-8 text-[#59b4f5]" strokeWidth={1.5} />
            </div>
            <span className="text-[#59b4f5] uppercase text-xs tracking-[0.4em] font-bold mb-4 block">
              {c.eyebrow}
            </span>
            <h1
              className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[1.05]"
              style={{ fontFamily: '"Sora", sans-serif' }}
            >
              {c.heading}{" "}
              <span className="text-[#3496ed]">{c.accent}</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              {c.desc}
            </p>
            <button
              onClick={() => ln("/contactus")}
              className="inline-flex items-center gap-3 bg-[#1a76d2] hover:bg-[#3496ed] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#1a76d2]/25"
            >
              {c.btn}
              <ArrowRight className="w-4 h-4" style={{ transform: isRTL ? "scaleX(-1)" : "scaleX(1)" }} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Four pillars */}
      <section className="py-20 px-7 md:px-10 max-w-6xl mx-auto">
        <motion.div {...premiumAppear} className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter" style={{ fontFamily: '"Sora", sans-serif' }}>
            {c.pillarsTitle}
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {c.pillars.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              {...premiumAppear}
              transition={{ ...premiumAppear.transition, delay: i * 0.1 }}
              className="rounded-[28px] p-7 bg-[#070708] border border-white/10 hover:border-[#3496ed]/35 transition-colors group flex gap-5"
            >
              <div className="w-11 h-11 rounded-xl bg-[#1a76d2]/10 border border-[#1a76d2]/20 flex items-center justify-center shrink-0 group-hover:bg-[#1a76d2]/20 transition-colors">
                <Icon className="w-5 h-5 text-[#59b4f5]" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2" style={{ fontFamily: '"Sora", sans-serif' }}>{title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Markets */}
      <section className="py-20 px-7 md:px-10 max-w-6xl mx-auto border-t border-white/5">
        <motion.div {...premiumAppear} className="mb-8">
          <h2 className="text-3xl font-bold text-white tracking-tighter" style={{ fontFamily: '"Sora", sans-serif' }}>
            {c.marketsTitle}
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {c.markets.map((m) => (
            <motion.div
              key={m.country}
              {...premiumAppear}
              className="rounded-[28px] p-8 bg-[#070708] border border-[#3496ed]/20 hover:border-[#3496ed]/40 transition-colors flex items-center gap-6"
            >
              <span className="text-5xl">{m.flag}</span>
              <div>
                <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: '"Sora", sans-serif' }}>
                  {m.country}
                </h3>
                <p className="text-slate-400 text-sm">{m.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Outcome */}
      <section className="py-20 px-7 md:px-10 max-w-6xl mx-auto border-t border-white/5">
        <motion.div {...premiumAppear} className="rounded-[40px] bg-[#070708] border border-[#3496ed]/20 p-10 md:p-14">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#59b4f5] font-bold mb-4">
            {c.outcomeTitle}
          </div>
          <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed" style={{ fontFamily: '"Sora", sans-serif' }}>
            {c.outcome}
          </p>
        </motion.div>
      </section>

      <CTA />
    </div>
  );
}
