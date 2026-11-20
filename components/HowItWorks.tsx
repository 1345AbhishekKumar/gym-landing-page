'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

export const HowItWorks = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const steps = [
    { title: 'Tour', img: 'https://images.pexels.com/photos/4716816/pexels-photo-4716816.jpeg' },
    { title: 'Join', img: 'https://images.pexels.com/photos/32695894/pexels-photo-32695894.jpeg' },
    { title: 'Train', img: 'https://images.pexels.com/photos/29392542/pexels-photo-29392542.jpeg' },
    { title: 'Evolve', img: 'https://images.pexels.com/photos/4720824/pexels-photo-4720824.jpeg' },
  ];

  return (
    <section id="workflow" ref={targetRef} className="relative h-[400vh] bg-[#191919] text-[#dbd5c9]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <h2 className="absolute top-[5vh] left-[6vw] text-[12px] font-light uppercase tracking-widest text-[#f93700] z-10">Getting Started</h2>
        <motion.div style={{ x }} className="flex w-[400vw] h-full items-center">
          {steps.map((step, i) => (
            <div key={i} className="w-screen h-full flex flex-col md:flex-row items-center justify-center px-[6vw] gap-[6vw]">
              <div 
                className="relative w-full md:w-1/2 aspect-[4/5] md:aspect-square overflow-hidden rounded-xl group focus:outline-none focus-visible:ring-4 focus-visible:ring-[#f93700]"
                tabIndex={0}
                aria-label={`Step ${i + 1}: ${step.title}`}
              >
                <Image 
                  src={step.img} 
                  alt={`Step ${i + 1}: ${step.title}`} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.pexels.com/photos/35376433/pexels-photo-35376433.jpeg";
                    target.srcset = "";
                  }}
                  className="object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-focus:grayscale-0 group-focus:opacity-100 transition-all duration-700" 
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <span className="text-[#f93700] font-serif text-[15vw] md:text-[12vw] leading-none">0{i+1}</span>
                <h3 className="font-serif text-[12vw] md:text-[8vw] uppercase leading-none">{step.title}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
