import React, { useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

const AIRobot = () => {
  const [isHovered, setIsHovered] = useState(false);
  const robotRef = useRef(null);

  // High-performance tracking without Re-renders
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for a premium "organic" eye movement
  const pupilX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const pupilY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    if (!robotRef.current) return;

    const rect = robotRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const limit = 6; // Maximum pixel movement for pupils

    // Calculate relative distance from center to normalize movement
    const dx = ((e.clientX - centerX) / (rect.width * 2)) * limit;
    const dy = ((e.clientY - centerY) / (rect.height * 2)) * limit;

    mouseX.set(dx);
    mouseY.set(dy);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Reset pupils to center
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      className="absolute inset-0 flex items-center justify-center cursor-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={robotRef}
        className="relative pointer-events-auto"
        onMouseEnter={() => setIsHovered(true)}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Interaction Message Bubble */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1.1, y: -40 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              className="absolute left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-6 py-2.5 rounded-2xl font-bold text-xs whitespace-nowrap shadow-[0_0_30px_rgba(99,102,241,0.6)] z-50 border border-indigo-400/40"
            >
              "System Online. Welcome to Luminaries!"
              <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-4 h-4 bg-indigo-600 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Robot Visual Construction */}
        <div className="relative w-56 h-56 md:w-64 md:h-64 transition-all duration-500">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="helmetGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#334155" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <filter id="eyeGlow">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Helmet Path */}
            <path
              d="M10 40C10 20 25 10 50 10C75 10 90 20 90 40V70C90 85 75 90 50 90C25 90 10 85 10 70V40Z"
              fill="url(#helmetGrad)"
              stroke="#6366f1"
              strokeWidth="2"
            />

            {/* Visor Area */}
            <rect
              x="20"
              y="32"
              width="60"
              height="32"
              rx="10"
              fill="#020617"
              stroke="#312e81"
              strokeWidth="1"
            />

            {/* Eyes Section */}
            {[36, 64].map((posX) => (
              <g key={posX} transform={`translate(${posX}, 48)`}>
                <circle r="7" fill="#1e293b" opacity="0.5" />
                <motion.circle
                  r="3.5"
                  fill={isHovered ? "#ADFF00" : "#6366f1"}
                  style={{ x: pupilX, y: pupilY }}
                  filter={isHovered ? "url(#eyeGlow)" : ""}
                />
              </g>
            ))}

            {/* Mouth Component */}
            <motion.rect
              x="42"
              y="74"
              width="16"
              height="2"
              rx="2"
              fill={isHovered ? "#ADFF00" : "#334155"}
              initial={{ height: 2, y: 0 }}
              animate={
                isHovered
                  ? { height: [2, 7, 2], y: [0, -2.5, 0] }
                  : { height: 2, y: 0 }
              }
              transition={
                isHovered
                  ? { duration: 0.2, repeat: Infinity }
                  : { duration: 0.1 }
              }
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default AIRobot;
