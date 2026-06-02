import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Users, Search, Code2, CheckCircle2 } from "lucide-react";
import { premiumAppear } from "../utils/animations";

const itOutsourcingItems = [
  "Ongoing HR Operations & Employee Support",
  "Onboarding & Deployment",
  "Defined Monthly Payroll Cycle",
  "Social, Medical & Life Insurance Administration",
  "Flexible Models: On-site, Hybrid, Offshore",
  "Short-term & Long-term engagements",
];

const recruitmentSteps = [
  { num: "01", title: "Requirement Definition", desc: "Align on skill sets, hiring criteria, and interview process — with market benchmarks and budget advice." },
  { num: "02", title: "Sourcing & Screening", desc: "Identify candidates from our talent pool. Initial technical and HR evaluation conducted by internal experts." },
  { num: "03", title: "Candidate Submission", desc: "Pre-screened profiles delivered within 5 working days, including salary expectations and availability." },
  { num: "04", title: "Shortlisting & Interviews", desc: "Clients review profiles, select candidates, and proceed with interviews. We coordinate scheduling." },
  { num: "05", title: "Offer & Onboarding", desc: "Client moves forward with offer. We ensure a smooth onboarding process with documentation and coordination." },
  { num: "06", title: "Fee Settlement & Replacement", desc: "Fees settled on joining date. Free replacement provided if probation not completed for valid, documented reasons." },
];

const professionalServices = [
  { icon: Code2, title: "Software Development", items: ["Web Development", "Mobile Development", "Backend & Frontend Engineering", "API Development & System Integration", "Maintenance & Enhancement Support"] },
  { icon: CheckCircle2, title: "Testing as a Service (TaaS)", items: ["Functional & Regression Testing", "Performance & Load Testing", "Security Testing", "Automated Test Frameworks", "Certified Testing Professionals"] },
  { icon: Search, title: "Technical Consultation", items: ["System Architecture Review", "Technology Stack Advisory", "Workflow Optimization", "Technical Due Diligence", "Digital Transformation Guidance"] },
];

const ServicesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="px-7 md:px-10 max-w-6xl mx-auto mb-24 text-center relative">
        <div className="absolute top-0 start-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-600/8 blur-[140px] rounded-full pointer-events-none" />
        <motion.div {...premiumAppear} className="relative z-10">
          <span className="text-brand-500 uppercase text-xs tracking-[0.4em] font-bold mb-4 block">
            {t("services.eyebrow")}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter" style={{ fontFamily: '"Sora", sans-serif' }}>
            {t("services.heading")}
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            {t("services.subheading")}
          </p>
        </motion.div>
      </section>

      {/* IT Outsourcing */}
      <section id="outsourcing" className="px-7 md:px-10 max-w-6xl mx-auto mb-28">
        <motion.div {...premiumAppear} className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
              <Users className="w-7 h-7 text-brand-400" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter" style={{ fontFamily: '"Sora", sans-serif' }}>
              {t("services.outsourcing.title")}
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">{t("services.outsourcing.description")}</p>
            <div className="p-5 rounded-2xl bg-brand-500/5 border border-brand-500/15">
              <p className="text-brand-400 text-sm font-semibold">{t("services.outsourcing.outcome")}</p>
            </div>
          </div>
          <div className="rounded-[32px] p-8 bg-[#070708] border border-white/10 space-y-3">
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-[0.2em]">Lifecycle Coverage</h4>
            {itOutsourcingItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <span className="text-slate-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Technical Recruitment */}
      <section id="recruitment" className="px-7 md:px-10 max-w-6xl mx-auto mb-28">
        <motion.div {...premiumAppear} className="space-y-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
                <Search className="w-7 h-7 text-brand-400" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter" style={{ fontFamily: '"Sora", sans-serif' }}>
                {t("services.recruitment.title")}
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">{t("services.recruitment.description")}</p>
              <div className="p-5 rounded-2xl bg-brand-500/5 border border-brand-500/15">
                <p className="text-brand-400 text-sm font-semibold">{t("services.recruitment.outcome")}</p>
              </div>
            </div>
          </div>

          {/* Recruitment process steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recruitmentSteps.map((step) => (
              <motion.div key={step.num} {...premiumAppear} className="p-6 rounded-[24px] bg-[#070708] border border-white/10 hover:border-brand-500/30 transition-colors">
                <div className="text-brand-400/40 font-black text-4xl mb-3" style={{ fontFamily: '"Sora", sans-serif' }}>{step.num}</div>
                <h4 className="text-white font-bold text-sm mb-2">{step.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Professional Services */}
      <section id="professional" className="px-7 md:px-10 max-w-6xl mx-auto mb-20">
        <motion.div {...premiumAppear} className="space-y-10">
          <div className="space-y-6 max-w-2xl">
            <div className="w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
              <Code2 className="w-7 h-7 text-brand-400" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter" style={{ fontFamily: '"Sora", sans-serif' }}>
              {t("services.professional.title")}
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">{t("services.professional.description")}</p>
            <div className="p-5 rounded-2xl bg-brand-500/5 border border-brand-500/15">
              <p className="text-brand-400 text-sm font-semibold">{t("services.professional.outcome")}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {professionalServices.map(({ icon: Icon, title, items }) => (
              <div key={title} className="p-7 rounded-[28px] bg-[#070708] border border-white/10 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/15 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-brand-400" strokeWidth={1.5} />
                </div>
                <h4 className="text-white font-bold text-base" style={{ fontFamily: '"Sora", sans-serif' }}>{title}</h4>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-400 text-sm">
                      <div className="w-1 h-1 rounded-full bg-brand-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ServicesPage;
