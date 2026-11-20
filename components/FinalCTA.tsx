'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export const FinalCTA = () => {
  return (
    <section className="relative w-full h-screen bg-[#f93700] text-white overflow-hidden flex flex-col items-center justify-center">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <h2 className="font-serif text-[25vw] leading-none uppercase tracking-tighter opacity-20 whitespace-nowrap">
          Apex Gym
        </h2>
      </motion.div>
      
      <div className="relative z-10 flex flex-col items-center text-center px-[6vw]">
        <h3 className="font-serif text-[10vw] md:text-[5vw] leading-[0.9] uppercase mb-12">
          Your Best Self <br/> Awaits
        </h3>
        <Link href="/join" aria-label="Join Apex Gym Now" className="group relative flex items-center justify-center w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-[#191919] rounded-full hover:scale-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-white transition-transform duration-500">
          <span className="text-[12px] md:text-[14px] uppercase tracking-widest font-semibold group-hover:text-[#f93700] transition-colors">
            Join Now
          </span>
          <div className="absolute inset-0 border border-[#191919] rounded-full scale-150 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" />
        </Link>
      </div>
    </section>
  );
};
