'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Unmount after the beige bubble has completely filled the screen
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-[999] pointer-events-none flex items-center justify-center bg-[#000000]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.1, delay: 3.4 }} // Quick fade out right before unmount
    >
      {/* Content Container */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        
        {/* Pink/Beige Circle - This grows to fill the entire screen */}
        <motion.div
          initial={{ scale: 0.8, x: "-30%", y: "-10%" }}
          animate={{ 
            scale: [0.8, 1, 50], // Scale 50 to cover the entire viewport
            x: ["-30%", "-40%", "0%"],
            y: ["-10%", "-20%", "0%"],
          }}
          transition={{ duration: 3.0, times: [0, 0.5, 1], ease: [0.76, 0, 0.24, 1] }}
          className="absolute w-[25vw] h-[25vw] max-w-[300px] max-h-[300px] bg-[#E3DDD1] rounded-full"
        />

        {/* Orange Circle */}
        <motion.div
          initial={{ scale: 0.9, x: "20%", y: "10%" }}
          animate={{ 
            scale: [0.9, 1.1, 0], 
            x: ["20%", "30%", "100%"],
            y: ["10%", "20%", "50%"],
            opacity: [1, 1, 0]
          }}
          transition={{ duration: 2.5, times: [0, 0.6, 1], ease: [0.76, 0, 0.24, 1] }}
          className="absolute w-[22vw] h-[22vw] max-w-[280px] max-h-[280px] bg-[#ff3c00] rounded-full"
        />

        {/* "Hey!" Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0, 1, 1, 0], 
            y: [20, 0, 0, -50],
            scale: [0.9, 1, 1, 1.1]
          }}
          transition={{ duration: 2.5, times: [0, 0.2, 0.8, 1], ease: [0.76, 0, 0.24, 1] }}
          className="relative font-serif text-[15vw] md:text-[140px] text-white font-light tracking-tight z-30 mix-blend-difference"
        >
          Hey!
        </motion.h1>
      </div>
    </motion.div>
  );
};
