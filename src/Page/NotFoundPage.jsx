import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLp } from "../hooks/useLp";

// --- MAIN PAGE COMPONENT ---

const NotFoundPage = () => {
  const lp = useLp();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 60;
      const y = (e.clientY / window.innerHeight - 0.5) * 60;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-[#030712] min-h-screen relative overflow-hidden flex items-center justify-center px-6">
      {/* --- INTERACTIVE GRADIENT GLOWS (DIMMED) --- */}
      <motion.div
        animate={{ x: mousePos.x * 2, y: mousePos.y * 2 }}
        transition={{ type: "spring", damping: 40, stiffness: 300 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-br from-[#1a76d2]/10 to-[#3496ed]/10 blur-[100px] rounded-full pointer-events-none z-0"
      />

      <motion.div
        animate={{ x: mousePos.x * -3, y: mousePos.y * -3 }}
        transition={{ type: "spring", damping: 50, stiffness: 200 }}
        className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-bl from-[#f59e0b]/5 to-[#1a76d2]/5 blur-[120px] rounded-full pointer-events-none z-0"
      />

      <motion.div
        animate={{ x: mousePos.x * 4, y: mousePos.y * 4 }}
        transition={{ type: "spring", damping: 40, stiffness: 400 }}
        className="absolute bottom-0 left-0 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-gradient-to-tr from-[#165fae]/5 to-[#3496ed]/5 blur-[100px] rounded-full pointer-events-none z-0"
      />

      {/* --- FLOATING DECORATIVE ORBS --- */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[20%] w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.8)] z-0 pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/3 right-[20%] w-5 h-5 md:w-6 md:h-6 bg-[#3496ed] rounded-full shadow-[0_0_20px_rgba(52,150,237,0.8)] z-0 pointer-events-none"
      />

      {/* --- CONTENT SECTION --- */}
      <div className="relative z-10 text-center max-w-2xl mx-auto w-full">
        {/* Animated Mesh Gradient 404 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative inline-block mb-4"
        >
          <h1
            className="relative text-[80px] md:text-[140px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#59b4f5] via-[#3496ed] to-[#f59e0b] animate-gradient bg-[length:200%_auto] leading-none tracking-tighter drop-shadow-2xl"
            style={{ fontFamily: '"Sora", sans-serif' }}
          >
            404
          </h1>
        </motion.div>

        {/* Messaging Area */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-6"
        >
          {/* Subtitle Accent */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-px w-6 md:w-8 bg-[#3496ed]/30"></span>
            <span className="text-[#59b4f5] uppercase text-[10px] md:text-xs font-bold tracking-[0.3em] block whitespace-nowrap drop-shadow-[0_0_10px_rgba(52,150,237,0.3)]">
              Page Not Found
            </span>
            <span className="h-px w-6 md:w-8 bg-[#3496ed]/30"></span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
            Oops! This coordinate <br className="hidden md:block" />
            <span className="text-slate-500"> doesn't exist.</span>
          </h2>

          <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-10 max-w-md mx-auto font-light px-4">
            The page you're looking for has drifted out of orbit. Let's get you
            back to the main station.
          </p>

          {/* Action Call */}
          <Link to={lp("/")}>
            <button className="group relative inline-flex items-center gap-3 px-8 py-3.5 md:px-10 md:py-4 bg-white text-black font-bold text-xs md:text-sm rounded-full overflow-hidden transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(52,150,237,0.2)] active:scale-95">
              <span className="relative flex items-center gap-2">
                <svg
                  className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Return to Base
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
