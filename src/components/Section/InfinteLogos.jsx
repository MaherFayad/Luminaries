import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const BrandLogo = ({ name, icon }) => (
  <div className="flex items-center gap-3 opacity-30 hover:opacity-100 transition-all duration-500 cursor-default px-12 group flex-none">
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6 text-white group-hover:text-[#59b4f5] transition-colors"
      xmlns="http://www.w3.org/2000/svg"
    >
      {icon}
    </svg>
    <span className="text-white font-bold text-xl tracking-tight uppercase">
      {name}
    </span>
  </div>
);

const InfiniteLogos = () => {
  const { t } = useTranslation();

  const logos = [
    { name: "Vercel",  icon: <path d="M24 22.5L12 1.5L0 22.5H24Z" fill="currentColor" /> },
    { name: "Notion",  icon: <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h3l3 4.5V8h2v8h-3l-3-4.5V16H8V8z" fill="currentColor" /> },
    { name: "Meta",    icon: <path d="M17.5 7.5A5.5 5.5 0 0 1 23 13a5.5 5.5 0 0 1-5.5 5.5c-2.1 0-3.9-1.3-5.5-3.2-1.6 1.9-3.4 3.2-5.5 3.2A5.5 5.5 0 0 1 1 13a5.5 5.5 0 0 1 5.5-5.5c2.1 0 3.9 1.3 5.5 3.2 1.6-1.9 3.4-3.2 5.5-3.2zm0 8.5c1.6 0 3-1.3 3-3s-1.3-3-3-3c-1.6 0-3 .9-4.3 2.3l-.3.3c1.3 1.4 2.7 2.3 4.3 2.3zM6.5 16c1.6 0 3-.9 4.3-2.3l.3-.3C9.8 12 8.4 11 6.5 11c-1.6 0-3 1.3-3 3s1.3 3 3 3z" fill="currentColor" /> },
    {
      name: "Figma",
      icon: (
        <g>
          <circle cx="9" cy="5" r="3" fill="#F24E1E" />
          <circle cx="9" cy="12" r="3" fill="#A259FF" />
          <circle cx="9" cy="19" r="3" fill="#0ACF83" />
          <circle cx="15" cy="5" r="3" fill="#FF7262" />
          <circle cx="15" cy="12" r="3" fill="#1ABCFE" />
        </g>
      ),
    },
    { name: "Linear",  icon: <path d="M12 2L2 12l10 10 10-10L12 2zm0 16.5L5.5 12 12 5.5l6.5 6.5-6.5 6.5z" fill="currentColor" /> },
    { name: "GitHub",  icon: <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor" /> },
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="py-12 relative overflow-hidden bg-[#030712]">
      <p className="text-slate-500 text-center text-[10px] uppercase tracking-[0.3em] mb-12 font-bold">
        {t("logos.label")}
      </p>

      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex w-max items-center"
        animate={{ x: [0, -1032] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {duplicatedLogos.map((logo, index) => (
          <BrandLogo key={index} name={logo.name} icon={logo.icon} />
        ))}
      </motion.div>
    </div>
  );
};
export default InfiniteLogos;
