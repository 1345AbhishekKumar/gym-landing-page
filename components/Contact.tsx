'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export const Contact = () => {
  return (
    <article id="contact" className="relative w-full min-h-screen flex flex-col justify-center font-serif text-[6vw] md:text-[8.3vw] font-semibold bg-[#f2f2f2] text-[#191919] py-20">
      <div className="flex items-baseline justify-center px-[6vw] py-[1vh] leading-[1.1]">
        Let&apos;s become something great!
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-baseline justify-center md:justify-between px-[6vw] py-[1vh] leading-[1.1] gap-4 md:gap-0">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <Link href="mailto:hello@apexgym.com" aria-label="Email Apex Gym at hello@apexgym.com" className="hover-link-anim text-[#f93700] text-[5vw] md:text-[6vw] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#191919] rounded">
            sred54@apexgym.com
          </Link>
        </motion.div>
        <span className="text-[4vw] md:text-[6vw]">for any</span>
      </div>
      <div className="flex items-center justify-center md:justify-between px-[6vw] py-[1vh] leading-[1.1] gap-8">
        <span className="text-[4vw] md:text-[6vw]">inquiries.</span>
        <svg viewBox="0 0 100 100" aria-hidden="true" className="animate-smiley w-[10vw] md:w-[4.1vw] h-[10vw] md:h-[4.1vw]">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#191919" strokeWidth="5"/>
          <circle cx="35" cy="40" r="5" fill="#191919"/>
          <circle cx="65" cy="40" r="5" fill="#191919"/>
          <path d="M 30 65 Q 50 85 70 65" fill="none" stroke="#191919" strokeWidth="5" strokeLinecap="round"/>
        </svg>
      </div>
    </article>
  );
};
