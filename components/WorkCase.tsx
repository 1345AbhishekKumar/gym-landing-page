'use client';

import Image from 'next/image';
import Link from 'next/link';

export const WorkCase = ({ letter, title, titleClassName, type, roles, intro, img1, img2, isDark = false }: any) => {
  return (
    <article className={`relative w-full h-screen flex flex-col md:flex-row ${isDark ? 'bg-[#f93700] text-white' : 'bg-[#dbd5c9] text-[#191919]'}`}>
      <div className={`w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden ${isDark ? 'bg-[#dbd5c9]' : 'bg-white'}`}>
        <div className="w-[80%] md:w-1/2 h-[60vh] mx-auto mt-[10vh] md:mt-[20vh] overflow-hidden relative">
          <Image 
            src={img1} 
            alt={`Transformation of ${title}`} 
            fill 
            sizes="(max-width: 768px) 80vw, 50vw" 
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://picsum.photos/seed/fallback/800/1000";
              target.srcset = "";
            }}
            className="object-cover" 
          />
        </div>
        <div className="relative h-[20vh] z-10 text-center mt-4 md:-mt-[20px]">
          <h3 className={`font-serif text-[8vw] md:text-[3.1vw] font-semibold leading-[0.9] uppercase w-[80%] md:w-[40%] mx-auto ${titleClassName || ''}`}>{title}</h3>
          <p className="absolute bottom-[3vh] left-1/2 md:left-[25%] -translate-x-1/2 md:-translate-x-0 w-[80%] md:w-[50%] font-serif font-semibold text-[20px] text-[#191919]">{type}</p>
        </div>
      </div>
      <div className={`w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden ${isDark ? 'bg-[#f93700]' : 'bg-[#f2f2f2]'}`}>
        <div className="absolute top-[10%] md:top-[35%] left-[10%] md:left-1/2 md:-translate-y-1/2 w-[80%] md:w-[40%]">
          <p className={`text-[4vw] md:text-[1.8vw] mb-[10px] ${titleClassName || ''}`}>{title}</p>
          <ul className="text-[10px] md:text-[12px] font-light uppercase flex flex-wrap gap-2 mb-8">
            {roles.map((role: string, i: number) => (
              <li key={i}>{i > 0 ? '/ ' : ''}{role}</li>
            ))}
          </ul>
          <p className="w-full md:w-[80%] py-[20px] md:py-[50px] leading-[1.6]">{intro}</p>
          <Link href="#" aria-label={`View program for ${title}`} className="hover-link-anim font-serif text-[4vw] md:text-[1.8vw] font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-[#191919] rounded">
            View Program +
          </Link>
        </div>
        <div className="absolute bottom-0 w-full h-[20vh] md:h-[30vh] overflow-hidden hidden md:block">
          <Image 
            src={img2} 
            alt={`${title} in action`} 
            fill 
            sizes="(max-width: 768px) 100vw, 50vw" 
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://picsum.photos/seed/fallback/800/1000";
              target.srcset = "";
            }}
            className="object-cover" 
          />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] md:text-[10vw] font-light w-[16vw] md:w-[8vw] text-center mix-blend-difference text-white pointer-events-none">
        {letter}
      </div>
    </article>
  );
};
