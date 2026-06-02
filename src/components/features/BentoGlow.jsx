import React, { useState, useCallback } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

const BentoGlow = ({ children, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Using MotionValues for smooth, high-performance animation
  // This avoids triggering React's heavy re-render cycle on every mouse move
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Memoizing the handler to ensure stability
  const handleMouseMove = useCallback(
    (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY],
  );

  // Reactive background string for the glow effect
  const background = useMotionTemplate`radial-gradient(450px circle at ${mouseX}px ${mouseY}px, rgba(99, 102, 241, 0.15), transparent 70%)`;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden w-full flex flex-col md:flex-row ${className}`}
    >
      {/* Interactive Radial Glow Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: background,
        }}
      />

      {/* Main Component Injection */}
      <div className="relative z-10 w-full flex flex-col md:flex-row">
        {children}
      </div>
    </motion.div>
  );
};

export default BentoGlow;
