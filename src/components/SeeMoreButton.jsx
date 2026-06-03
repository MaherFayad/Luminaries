import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLp } from "../hooks/useLp";

// --- SUB-COMPONENT: Button Particles ---
const ButtonParticles = () => {
  const particles = useMemo(() => {
    return [...Array(20)].map(() => ({
      left: Math.random() * 100 + "%",
      size: Math.random() * 2 + 1 + "px",
      duration: Math.random() * 2 + 2,
      delay: Math.random() * 2,
    }));
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none translate-y-full group-hover:translate-y-0 transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)] z-10">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute bg-white/80 rounded-full blur-[0.5px]"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            bottom: "-20%",
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -60, opacity: [0, 1, 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// --- MAIN COMPONENT ---
const SeeMoreButton = ({ to, text = "View All Service" }) => {
  const lp = useLp();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-12 w-full"
    >
      <Link to={lp(to)} className="block w-full">
        <button className="group relative w-full h-12 md:h-14 rounded-full border border-white/20 bg-transparent overflow-hidden flex items-center justify-center transition-all active:scale-95 hover:border-transparent">
          {/* Animated Liquid Wave Layer */}
          <div className="absolute top-full left-1/2 w-[1200px] h-[1200px] -translate-x-1/2 group-hover:top-[-500px] transition-all duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)] z-0 pointer-events-none">
            <div className="w-full h-full rounded-[45%] bg-gradient-to-br from-[#165fae] via-[#1a76d2] to-[#3496ed] animate-[spin_5s_linear_infinite]" />
          </div>

          <ButtonParticles />

          {/* Button Content */}
          <span className="relative z-20 flex items-center gap-2 text-white font-medium text-[14px] md:text-[15px] transition-transform duration-500 group-hover:scale-105">
            {text}
          </span>
        </button>
      </Link>
    </motion.div>
  );
};

export default SeeMoreButton;
