import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Users, Search, Code2 } from "lucide-react";
import ServiceCard from "../ui/ServiceCard";
import SeeMoreButton from "../SeeMoreButton.jsx";
import { premiumAppear } from "../../utils/animations.js";

const serviceIcons = [Users, Search, Code2];
const serviceKeys = ["outsourcing", "recruitment", "professional"];

const Services = ({ isPage = false }) => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-20 px-7 md:px-10 relative z-10">
      <div className="container mx-auto max-w-6xl">
        {!isPage && (
          <div className="text-center mb-16">
            <motion.div {...premiumAppear}>
              <span className="text-brand-500 uppercase text-xs tracking-[0.4em] font-bold mb-4 block">
                {t("services.eyebrow")}
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter"
                style={{ fontFamily: '"Sora", sans-serif' }}
              >
                {t("services.heading")}
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                {t("services.subheading")}
              </p>
            </motion.div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceKeys.map((key, i) => (
            <ServiceCard
              key={key}
              icon={serviceIcons[i]}
              title={t(`services.${key}.title`)}
              description={t(`services.${key}.description`)}
              outcome={t(`services.${key}.outcome`)}
              href="/services"
            />
          ))}
        </div>

        {!isPage && <SeeMoreButton to="/services" text={t("services.learnMore")} />}
      </div>
    </section>
  );
};

export default Services;
