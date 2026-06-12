import React from "react";
import { motion } from "framer-motion";
import { useLn } from "../../hooks/useLp";
import { useTranslation } from "react-i18next";
import { Users, CheckCircle2, ArrowRight } from "lucide-react";
import { premiumAppear } from "../../utils/animations";
import CTA from "../../components/Section/CTA";

const lifecycle = {
  en: [
    { title: "Onboarding & Deployment",         desc: "We handle full onboarding coordination, equipment, access, and team integration from day one." },
    { title: "Defined Monthly Payroll Cycle",   desc: "Salaries processed on a fixed monthly schedule with full transparency and documentation." },
    { title: "Social & Medical Insurance",      desc: "Complete social, medical, and life insurance administration handled through our HR model." },
    { title: "Ongoing HR Operations",           desc: "Continuous employee support, performance tracking, and HR administration throughout the engagement." },
  ],
  ar: [
    { title: "الإعداد والنشر",                 desc: "نتولى تنسيق الإعداد الكامل والمعدات والوصول وتكامل الفريق من اليوم الأول." },
    { title: "دورة رواتب شهرية محددة",          desc: "معالجة الرواتب وفق جدول شهري ثابت مع شفافية كاملة وتوثيق دقيق." },
    { title: "التأمين الاجتماعي والطبي",         desc: "إدارة شاملة للتأمين الاجتماعي والطبي والتأمين على الحياة ضمن نموذج الموارد البشرية." },
    { title: "عمليات الموارد البشرية المستمرة",  desc: "دعم مستمر للموظفين وتتبع الأداء وإدارة الموارد البشرية طوال فترة التعاون." },
  ],
};

const models = {
  en: ["On-site", "Hybrid", "Offshore", "Short-term", "Long-term"],
  ar: ["موقعي", "هجين", "عن بُعد", "قصير المدى", "طويل المدى"],
};

export default function ITOutsourcingPage() {
  const { t, i18n } = useTranslation();
  const ln = useLn();
  const isRTL = i18n.language === "ar";

  const items = isRTL ? lifecycle.ar : lifecycle.en;
  const mods  = isRTL ? models.ar   : models.en;

  return (
    <div className="bg-[#030712] min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-20 px-7 md:px-10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#1a76d2]/12 blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div {...premiumAppear} className="max-w-3xl">
            <span className="text-[#59b4f5] uppercase text-xs tracking-[0.4em] font-bold mb-4 block">
              {isRTL ? "الاستعانة بمصادر خارجية في تقنية المعلومات" : "IT Outsourcing"}
            </span>
            <h1
              className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[1.05]"
              style={{ fontFamily: '"Sora", sans-serif' }}
            >
              {isRTL ? (
                <>بناء فريقك بكفاءات تقنية <span className="text-[#3496ed]">متفرغة بالكامل.</span></>
              ) : (
                <>Build your team with <span className="text-[#3496ed]">fully dedicated technical talent.</span></>
              )}
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              {isRTL
                ? "نوفر مطورين ومهندسين ومتخصصين يندمجون في فرقك مباشرة. نتولى المسؤولية الكاملة عن دورة حياة التوظيف."
                : "We provide developers, engineers, and specialized professionals who integrate directly into your internal teams. We assume full responsibility for the employment lifecycle."}
            </p>
            <button
              onClick={() => ln("/contactus")}
              className="inline-flex items-center gap-3 bg-[#1a76d2] hover:bg-[#3496ed] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#1a76d2]/25"
            >
              {isRTL ? "طلب خدمة" : "Service Request"}
              <ArrowRight className="w-4 h-4" style={{ transform: isRTL ? "scaleX(-1)" : "scaleX(1)" }} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* HR Lifecycle */}
      <section className="py-20 px-7 md:px-10 max-w-6xl mx-auto">
        <motion.div {...premiumAppear} className="mb-12">
          <span className="text-[#3496ed] uppercase text-xs tracking-[0.4em] font-bold mb-3 block">
            {isRTL ? "ما يشمله النموذج" : "What's Included"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter" style={{ fontFamily: '"Sora", sans-serif' }}>
            {isRTL ? "ملكية دورة حياة العمالة الكاملة." : "Full employment lifecycle ownership."}
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={i}
              {...premiumAppear}
              transition={{ ...premiumAppear.transition, delay: i * 0.1 }}
              className="rounded-[28px] p-7 bg-[#070708] border border-white/10 hover:border-[#3496ed]/40 transition-colors group flex gap-5"
            >
              <CheckCircle2 className="w-5 h-5 text-[#59b4f5] shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h4 className="text-white font-bold mb-2" style={{ fontFamily: '"Sora", sans-serif' }}>{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 px-7 md:px-10 max-w-6xl mx-auto border-t border-white/5">
        <motion.div {...premiumAppear}>
          <span className="text-[#f59e0b] uppercase text-xs tracking-[0.4em] font-bold mb-3 block">
            {isRTL ? "نماذج التعاون" : "Engagement Models"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tighter" style={{ fontFamily: '"Sora", sans-serif' }}>
            {isRTL ? "مرونة تتوافق مع احتياجاتك." : "Flexibility that fits your needs."}
          </h2>
          <div className="flex flex-wrap gap-3">
            {mods.map((m) => (
              <span key={m} className="px-5 py-2.5 rounded-full bg-[#070708] border border-[#3496ed]/30 text-[#59b4f5] text-sm font-semibold">
                {m}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Outcome */}
      <section className="py-20 px-7 md:px-10 max-w-6xl mx-auto border-t border-white/5">
        <motion.div {...premiumAppear} className="rounded-[40px] bg-[#070708] border border-[#3496ed]/20 p-10 md:p-14">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#59b4f5] font-bold mb-4">
            {isRTL ? "النتيجة" : "Outcome"}
          </div>
          <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed" style={{ fontFamily: '"Sora", sans-serif' }}>
            {isRTL
              ? "توسع أسرع للفريق، وتقليل الأعباء الإدارية، وتكاليف تشغيلية أكثر قابلية للتنبؤ."
              : "Faster team expansion, reduced administrative burden, and more predictable operational costs."}
          </p>
        </motion.div>
      </section>

      <CTA />
    </div>
  );
}
