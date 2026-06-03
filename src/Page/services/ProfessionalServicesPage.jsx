import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Code2, ShieldCheck, Lightbulb, ArrowRight } from "lucide-react";
import { premiumAppear } from "../../utils/animations";
import CTA from "../../components/Section/CTA";

const pillars = {
  en: [
    {
      icon: Code2,
      title: "Software Development",
      desc: "End-to-end engineering across web, mobile, backend, frontend, API development, system integration, and ongoing maintenance and enhancement support.",
      items: ["Web Development", "Mobile Development", "Backend & Frontend Engineering", "API Development & System Integration", "Maintenance & Enhancement Support"],
    },
    {
      icon: ShieldCheck,
      title: "Testing as a Service (TaaS)",
      desc: "Flexible QA solutions delivered by certified testing professionals, fully aligned with your release cadence and integration pipelines.",
      items: ["Functional & Regression Testing", "Performance & Load Testing", "Security Testing", "Automated Test Frameworks", "Certified QA Professionals"],
    },
    {
      icon: Lightbulb,
      title: "Technical Consultation",
      desc: "Strategic guidance to improve systems, workflows, and technical decision-making — aligned with your business objectives.",
      items: ["System Architecture Review", "Technology Stack Advisory", "Workflow Optimisation", "Technical Due Diligence", "Digital Transformation Guidance"],
    },
  ],
  ar: [
    {
      icon: Code2,
      title: "تطوير البرمجيات",
      desc: "هندسة شاملة عبر الويب والجوال والخلفيات والواجهات وتطوير API وتكامل الأنظمة ودعم الصيانة والتحسين المستمر.",
      items: ["تطوير الويب", "تطوير تطبيقات الجوال", "هندسة الواجهات الأمامية والخلفية", "تطوير API وتكامل الأنظمة", "دعم الصيانة والتحسين"],
    },
    {
      icon: ShieldCheck,
      title: "الاختبار كخدمة (TaaS)",
      desc: "حلول اختبار الجودة المرنة يقدمها متخصصون معتمدون، متوافقة تماماً مع دورة إصدارك وخطوط التكامل.",
      items: ["الاختبار الوظيفي والانحدار", "اختبار الأداء والحمل", "اختبار الأمان", "أطر الاختبار الآلي", "متخصصو QA المعتمدون"],
    },
    {
      icon: Lightbulb,
      title: "الاستشارات التقنية",
      desc: "توجيه استراتيجي لتحسين الأنظمة وسير العمل واتخاذ القرارات التقنية — متوافق مع أهدافك التجارية.",
      items: ["مراجعة معمارية الأنظمة", "استشارة في المكدس التقني", "تحسين سير العمل", "العناية الواجبة التقنية", "توجيه التحول الرقمي"],
    },
  ],
};

export default function ProfessionalServicesPage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRTL = i18n.language === "ar";
  const data = isRTL ? pillars.ar : pillars.en;

  return (
    <div className="bg-[#030712] min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-20 px-7 md:px-10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#1a76d2]/12 blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div {...premiumAppear} className="max-w-3xl">
            <span className="text-[#59b4f5] uppercase text-xs tracking-[0.4em] font-bold mb-4 block">
              {isRTL ? "الخدمات المهنية" : "Professional Services"}
            </span>
            <h1
              className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[1.05]"
              style={{ fontFamily: '"Sora", sans-serif' }}
            >
              {isRTL ? (
                <>تسليم تقني شامل <span className="text-[#3496ed]">من البداية للنهاية.</span></>
              ) : (
                <>End-to-end technical delivery <span className="text-[#3496ed]">across your stack.</span></>
              )}
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              {isRTL
                ? "ندعم المؤسسات من خلال خدمات تقنية شاملة تعزز جودة المنتج وأداء النظام والكفاءة التشغيلية."
                : "We support organisations through end-to-end technical services that enhance product quality, system performance, and operational efficiency."}
            </p>
            <button
              onClick={() => navigate("/contactus")}
              className="inline-flex items-center gap-3 bg-[#1a76d2] hover:bg-[#3496ed] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#1a76d2]/25"
            >
              {isRTL ? "ناقش متطلباتك" : "Discuss Your Requirements"}
              <ArrowRight className="w-4 h-4" style={{ transform: isRTL ? "scaleX(-1)" : "scaleX(1)" }} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 px-7 md:px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map(({ icon: Icon, title, desc, items }, i) => (
            <motion.div
              key={i}
              {...premiumAppear}
              transition={{ ...premiumAppear.transition, delay: i * 0.12 }}
              className="rounded-[32px] p-8 bg-[#070708] border border-white/10 hover:border-[#3496ed]/40 transition-colors group flex flex-col gap-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#1a76d2]/10 border border-[#1a76d2]/20 flex items-center justify-center group-hover:bg-[#1a76d2]/20 transition-colors">
                <Icon className="w-7 h-7 text-[#59b4f5]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: '"Sora", sans-serif' }}>{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                      <div className="w-1 h-1 rounded-full bg-[#3496ed] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Outcome */}
      <section className="py-20 px-7 md:px-10 max-w-6xl mx-auto border-t border-white/5">
        <motion.div {...premiumAppear} className="rounded-[40px] bg-[#070708] border border-[#3496ed]/20 p-10 md:p-14">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#59b4f5] font-bold mb-4">
            {isRTL ? "النتيجة" : "Outcome"}
          </div>
          <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed" style={{ fontFamily: '"Sora", sans-serif' }}>
            {isRTL
              ? "منتجات أقوى، وموثوقية أفضل للنظام، وعمليات تقنية أكثر كفاءة."
              : "Stronger products, improved system reliability, and more efficient technical operations."}
          </p>
        </motion.div>
      </section>

      <CTA />
    </div>
  );
}
