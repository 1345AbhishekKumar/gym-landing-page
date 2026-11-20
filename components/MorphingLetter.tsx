'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { interpolate } from 'flubber';
import Image from 'next/image';

const pathS = "M 48.5 90 C 29.5 90 14 78.5 12 59 L 32 59 C 33.5 68 40 73 48.5 73 C 57 73 63 68.5 63 61.5 C 63 55 58.5 51.5 46.5 48.5 L 38.5 46.5 C 22.5 42.5 15 33.5 15 21.5 C 15 8.5 28.5 0 47.5 0 C 65 0 78 9.5 80 27 L 60 27 C 58.5 19 53.5 16 47.5 16 C 40 16 35 20 35 26 C 35 32 39.5 35 50.5 37.5 L 58.5 39.5 C 75.5 43.5 83 52.5 83 65.5 C 83 80.5 68.5 90 48.5 90 Z";
const pathM = "M 10 90 L 10 10 L 35 10 L 50 55 L 65 10 L 90 10 L 90 90 L 72 90 L 72 40 L 55 85 L 45 85 L 28 40 L 28 90 Z";

const morpher = interpolate(pathS, pathM, { maxSegmentLength: 2 });

export const MorphingLetter = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 1. Adjust timing: concentrate the morphing between 20% and 80% of the scroll
  const morphTiming = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
  
  // 2. Adjust easing: apply fluid spring physics for an organic feel
  const smoothMorph = useSpring(morphTiming, {
    stiffness: 60,
    damping: 20,
    mass: 0.8
  });

  // Custom transform that calls the flubber interpolator
  const pathData = useTransform(smoothMorph, (value) => {
    if (!morpher) return pathS;
    // Clamp the value between 0 and 1 to prevent flubber errors during spring overshoot
    const clamped = Math.max(0, Math.min(1, value));
    return morpher(clamped);
  });

  // Scroll-driven animations for the central letter using the smoothed timing
  const translateY = useTransform(smoothMorph, [0, 1], [0, 150]);
  const scale = useTransform(smoothMorph, [0, 0.5, 1], [1, 1.2, 1]);
  const color = useTransform(smoothMorph, [0, 1], ["#f93700", "#141414"]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  // S State Animations (Fades out as we scroll down)
  const opacityS = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const yS = useTransform(scrollYProgress, [0, 0.35], [0, -50]);

  // M State Animations (Fades in as we reach the bottom)
  const opacityM = useTransform(scrollYProgress, [0.65, 1], [0, 1]);
  const yM = useTransform(scrollYProgress, [0.65, 1], [50, 0]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#f2f2f2] w-full">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Text S */}
        <motion.div 
          style={{ opacity: opacityS, y: yS }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        >
          <span className="text-[20vw] font-serif font-bold text-[#141414] opacity-5 tracking-tighter">STRENGTH</span>
        </motion.div>

        {/* Background Text M */}
        <motion.div 
          style={{ opacity: opacityM, y: yM }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        >
          <span className="text-[20vw] font-serif font-bold text-[#141414] opacity-5 tracking-tighter">MOTION</span>
        </motion.div>

        {/* S Content (Left) */}
        <HoverCard 
          style={{ opacity: opacityS, y: yS }}
          className="absolute left-[8vw] top-[15vh] w-[25vw] max-w-[300px] z-10 hidden md:block"
          images={[
            "https://images.pexels.com/photos/812746/pexels-photo-812746.jpeg",
            "https://images.pexels.com/photos/29852565/pexels-photo-29852565.jpeg",
            "https://images.pexels.com/photos/32554989/pexels-photo-32554989.jpeg",
            "https://images.pexels.com/photos/27893430/pexels-photo-27893430.png"
          ]}
          title="Power"
          description="Build your foundation with heavy lifts and raw strength."
          align="left"
        />

        {/* M Content (Right) */}
        <HoverCard 
          style={{ opacity: opacityM, y: yM }}
          className="absolute right-[8vw] bottom-[15vh] w-[25vw] max-w-[300px] z-10 hidden md:block"
          images={[
            "https://images.pexels.com/photos/4852726/pexels-photo-4852726.jpeg",
            "https://images.pexels.com/photos/4151130/pexels-photo-4151130.jpeg",
            "https://images.pexels.com/photos/8769387/pexels-photo-8769387.jpeg",
            "https://images.pexels.com/photos/8520258/pexels-photo-8520258.jpeg"
          ]}
          title="Mobility"
          description="Refine your movement with high-intensity dynamics."
          align="right"
        />

        {/* Central Morphing Letter */}
        <motion.div 
          style={{ y: translateY, scale }} 
          className="relative w-[50vw] max-w-[400px] aspect-square flex items-center justify-center z-20"
          aria-hidden="true"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible drop-shadow-2xl">
            <motion.path
              d={pathData}
              fill={color}
            />
          </svg>
        </motion.div>

        <motion.div 
          style={{ opacity: hintOpacity }}
          className="absolute bottom-[10vh] left-1/2 -translate-x-1/2 text-[12px] font-light uppercase tracking-widest text-[#141414] opacity-50 z-20"
        >
          Scroll to transform
        </motion.div>
      </div>
    </section>
  );
};

const HoverCard = ({ 
  images, 
  title, 
  description, 
  align = 'left',
  style,
  className
}: { 
  images: string[], 
  title: string, 
  description: string, 
  align?: 'left' | 'right',
  style: any,
  className: string
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!isHovered) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 600);
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  const displayImageIndex = isHovered ? currentImageIndex : 0;

  return (
    <motion.div 
      style={style}
      className={`${className} group cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#f93700] rounded-2xl`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
      role="article"
      aria-label={`${title}: ${description}`}
    >
      {align === 'left' ? (
        <>
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl mb-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-black/5">
            {images.map((src, idx) => (
              <Image 
                key={src}
                src={src} 
                alt={`${title} visual ${idx + 1}`} 
                fill 
                sizes="(max-width: 768px) 100vw, 25vw"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://picsum.photos/seed/fallback/600/800";
                  target.srcset = "";
                }}
                className={`object-cover transition-all duration-1000 ease-in-out ${
                  idx === displayImageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                } ${!isHovered && idx === 0 ? 'grayscale contrast-125' : 'grayscale-0'}`} 
              />
            ))}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/50 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/50 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
          </div>
          
          <div className="relative">
            <h3 className="font-serif text-[3.5vw] leading-none text-[#141414] mb-4 flex overflow-hidden">
              {title.split('').map((char, i) => (
                <span 
                  key={i} 
                  className="inline-block transition-transform duration-500 ease-[0.25,0.46,0.45,0.94]"
                  style={{ 
                    transitionDelay: `${i * 0.03}s`,
                    transform: isHovered ? 'translateY(-8px) rotate(-2deg)' : 'translateY(0) rotate(0deg)'
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h3>
            
            <div className="flex items-center gap-4 mb-3">
              <div className="h-[1px] w-0 bg-[#f93700] group-hover:w-12 transition-all duration-500 ease-out" />
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#f93700] font-medium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
                Explore
              </p>
            </div>
            
            <p className="text-[13px] uppercase tracking-widest text-gray-500 leading-relaxed max-w-[90%] transition-colors duration-500 group-hover:text-[#141414]">
              {description}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="relative flex flex-col items-end text-right mb-8">
            <h3 className="font-serif text-[3.5vw] leading-none text-[#141414] mb-4 flex justify-end overflow-hidden">
              {title.split('').map((char, i) => (
                <span 
                  key={i} 
                  className="inline-block transition-transform duration-500 ease-[0.25,0.46,0.45,0.94]"
                  style={{ 
                    transitionDelay: `${i * 0.03}s`,
                    transform: isHovered ? 'translateY(-8px) rotate(2deg)' : 'translateY(0) rotate(0deg)'
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h3>
            
            <div className="flex items-center gap-4 mb-3 justify-end">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#f93700] font-medium opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
                Discover
              </p>
              <div className="h-[1px] w-0 bg-[#f93700] group-hover:w-12 transition-all duration-500 ease-out" />
            </div>
            
            <p className="text-[13px] uppercase tracking-widest text-gray-500 leading-relaxed max-w-[90%] transition-colors duration-500 group-hover:text-[#141414]">
              {description}
            </p>
          </div>

          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-black/5">
            {images.map((src, idx) => (
              <Image 
                key={src}
                src={src} 
                alt={`${title} visual ${idx + 1}`} 
                fill 
                sizes="(max-width: 768px) 100vw, 25vw"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://picsum.photos/seed/fallback/600/800";
                  target.srcset = "";
                }}
                className={`object-cover transition-all duration-1000 ease-in-out ${
                  idx === displayImageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                } ${!isHovered && idx === 0 ? 'grayscale contrast-125' : 'grayscale-0'}`} 
              />
            ))}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/50 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/50 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
          </div>
        </>
      )}
    </motion.div>
  );
};
