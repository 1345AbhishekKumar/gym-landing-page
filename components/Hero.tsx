'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

const IMAGES = [
  "https://picsum.photos/seed/gymworkout/800/1200",
  "https://picsum.photos/seed/gymworkout2/800/1200",
  "https://picsum.photos/seed/gymworkout3/800/1200",
  "https://picsum.photos/seed/gymworkout4/800/1200",
  "https://picsum.photos/seed/gymworkout5/800/1200"
];

export const Hero = () => {
  const { scrollY } = useScroll();
  const yPos = useTransform(scrollY, [0, 1000], [0, 150]);

  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload images to prevent flickering
  useEffect(() => {
    IMAGES.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  // Rapidly cycle images on hover
  useEffect(() => {
    if (!isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 250); // 250ms for a rapid, fluid slideshow
    return () => clearInterval(interval);
  }, [isHovered]);

  const displayIndex = isHovered ? currentIndex : 0;

  return (
    <article className="relative w-full h-screen overflow-hidden z-10 bg-[#E3DDD1] text-[#141414]">
      
      {/* Grid Lines & Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Vertical Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#141414] opacity-10" />
        {/* Horizontal Center Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#141414] opacity-10" />
        {/* Large Circle */}
        <div className="absolute left-[-10vw] top-[5vh] w-[60vw] h-[60vw] rounded-full border border-[#141414] opacity-10" />
      </div>

      {/* Small Numbers on Horizontal Line */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-[4vw] w-full z-0 pointer-events-none text-[10px] tracking-widest opacity-30">
        <div className="flex gap-[12vw]">
          <span>0 1</span>
          <span>0 2</span>
          <span>0 3</span>
        </div>
        <div className="flex gap-[12vw]">
          <span>0 7</span>
          <span>0 8</span>
          <span>0 9</span>
        </div>
      </div>

      {/* SVG Mask Definition for Central Image */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <clipPath id="blob-mask" clipPathUnits="objectBoundingBox">
            <circle cx="0.5" cy="0.5" r="0.35" />
            <circle cx="0.3" cy="0.35" r="0.18" />
            <circle cx="0.7" cy="0.65" r="0.18" />
            <circle cx="0.35" cy="0.7" r="0.15" />
            <circle cx="0.65" cy="0.3" r="0.15" />
            <circle cx="0.2" cy="0.5" r="0.12" />
            <circle cx="0.8" cy="0.5" r="0.12" />
          </clipPath>
        </defs>
      </svg>

      {/* Central Masked Image */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 3.0 }}
        style={{ y: yPos }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[70vh] min-w-[350px] z-10 transition-all duration-700 hover:drop-shadow-[0_0_40px_rgba(255,255,255,0.5)]"
      >
        <div 
          className="w-full h-full relative group cursor-pointer"
          style={{ clipPath: 'url(#blob-mask)' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          {IMAGES.map((src, idx) => (
            <Image 
              key={src}
              src={src} 
              alt={`Apex Gym workout facility view ${idx + 1}`} 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={idx === 0}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://picsum.photos/seed/fallback/800/1200";
                target.srcset = "";
              }}
              className={`object-cover transition-all duration-700 group-hover:scale-[1.03] ${
                idx === displayIndex ? 'opacity-100' : 'opacity-0'
              }`} 
            />
          ))}
        </div>
      </motion.div>
      
      {/* Main Headline - Staggered Animation */}
      <motion.h1 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 1 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 3.2,
              staggerChildren: 0.08
            }
          }
        }}
        className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex justify-center gap-[25vw] px-[6vw] font-serif text-[14vw] leading-[0.8] font-light text-center tracking-tighter text-white z-20 pointer-events-none mix-blend-difference"
      >
        <span className="flex">
          {"Apex".split("").map((char, i) => (
            <motion.span 
              key={`apex-${i}`} 
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] } }
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
        <span className="flex">
          {"Gym".split("").map((char, i) => (
            <motion.span 
              key={`gym-${i}`} 
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] } }
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      </motion.h1>

      {/* Bottom/Side Elements */}
      <div className="absolute bottom-[12vh] left-[8vw] z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.4 }}
          className="text-[10px] tracking-[0.3em] uppercase font-medium leading-[1.8]"
        >
          PLAY<br/>WORKOUT
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 3.5 }}
        className="absolute bottom-[12vh] right-[8vw] z-20 flex flex-col items-start"
      >
        <div className="relative mb-6" aria-hidden="true">
          <svg viewBox="0 0 48 48" className="w-[30px] h-[30px] animate-spin fill-[#FF3300]" style={{ animationDuration: '4s' }}>
            <path fillRule="evenodd" d="M20.078 14.026L24.157 0l5.02 14.026 12.548-7.013-6.588 13.247L48 24.312l-12.863 4.675 6.588 12.78-13.803-7.481L24.157 48l-4.079-13.714-13.176 7.48 5.96-12.779L0 24l12.863-3.74-5.02-13.247 12.235 7.013z" />
          </svg>
          <span className="absolute top-0 left-full ml-2 text-[#FF3300] text-[9px] tracking-widest whitespace-nowrap rotate-12 origin-left font-medium">
            START NOW
          </span>
        </div>
        <ul className="font-serif text-[1.2vw] min-text-[14px] leading-[1.6] text-[#141414]">
          <li>Personal training</li>
          <li>Group classes</li>
          <li>Premium facility</li>
        </ul>
      </motion.div>

      {/* Footer-like elements at the very bottom of hero */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3.6 }}
        className="absolute bottom-[4vh] left-0 w-full flex justify-between px-[4vw] text-[10px] tracking-widest uppercase z-20"
      >
        <span>LIFT HEAVY</span>
        <nav aria-label="Social media links" className="flex gap-[6vw]">
          <a href="#" aria-label="Instagram" className="cursor-pointer hover:opacity-50 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#FF3300] rounded">Instagram</a>
          <a href="#" aria-label="YouTube" className="cursor-pointer hover:opacity-50 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#FF3300] rounded">YouTube</a>
          <a href="#" aria-label="TikTok" className="cursor-pointer hover:opacity-50 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#FF3300] rounded">TikTok</a>
        </nav>
        <span className="text-[#FF3300]">MOVE FAST</span>
      </motion.div>
    </article>
  );
};
