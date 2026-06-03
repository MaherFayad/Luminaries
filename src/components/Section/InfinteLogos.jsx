import React from "react";
import { useTranslation } from "react-i18next";

import amanLogo      from "../../assets/Partners & Clients/Aman.svg";
import arabLogo      from "../../assets/Partners & Clients/Arab Leauge.svg";
import bwLogo        from "../../assets/Partners & Clients/BW.svg";
import behaviourmLogo from "../../assets/Partners & Clients/Behavioum.svg";
import contactLogo   from "../../assets/Partners & Clients/Contact.svg";
import provisionLogo from "../../assets/Partners & Clients/ProVision.svg";
import valuLogo      from "../../assets/Partners & Clients/Valu.svg";

const partners = [
  { src: amanLogo,       name: "Aman" },
  { src: arabLogo,       name: "Arab League" },
  { src: bwLogo,         name: "BW" },
  { src: behaviourmLogo, name: "Behavioum" },
  { src: contactLogo,    name: "Contact" },
  { src: provisionLogo,  name: "ProVision" },
  { src: valuLogo,       name: "Valu" },
];

const PartnerLogo = ({ src, name }) => (
  <div className="flex items-center justify-center px-10 shrink-0 opacity-40 hover:opacity-90 transition-opacity duration-500 cursor-default">
    <img
      src={src}
      alt={name}
      className="h-8 w-auto max-w-[120px] object-contain"
      style={{ filter: "brightness(0) invert(1)" }}
    />
  </div>
);

const InfiniteLogos = () => {
  const { t } = useTranslation();
  const doubled = [...partners, ...partners];

  return (
    <div className="py-12 relative overflow-hidden bg-[#030712]">
      <p className="text-slate-500 text-center text-[10px] uppercase tracking-[0.3em] mb-12 font-bold">
        {t("logos.label")}
      </p>

      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden">
        <div className="flex animate-scroll">
          {doubled.map((p, i) => (
            <PartnerLogo key={`${p.name}-${i}`} src={p.src} name={p.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteLogos;
