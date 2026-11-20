'use client';

import { useState } from 'react';

export const AdvancedFeatures = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const features = [
    { title: 'Premium Equipment', desc: 'Eleiko racks, Rogue plates, and specialized machines.' },
    { title: 'Cardio Deck', desc: 'Treadmills, rowers, and bikes with panoramic city views.' },
    { title: 'Free Weights', desc: 'Dumbbells up to 150lbs and multiple lifting platforms.' },
    { title: 'Locker Rooms', desc: 'Luxury showers, towel service, and digital lockers.' },
  ];

  return (
    <section className="relative w-full bg-[#dbd5c9] text-[#191919] flex flex-col md:flex-row border-t border-[#191919]">
      <div className="w-full md:w-1/3 p-[6vw] md:sticky md:top-0 md:h-screen flex flex-col justify-between border-r border-[#191919]/20">
        <span className="text-[12px] font-light uppercase tracking-widest">The Facility</span>
        <h2 className="font-serif text-[10vw] md:text-[5vw] leading-[0.9] uppercase mt-[10vh] md:mt-0">Gym<br/>Specs</h2>
      </div>
      <div className="w-full md:w-2/3 flex flex-col">
        {features.map((feat, i) => (
          <div 
            key={i} 
            className="group p-[6vw] border-b border-[#191919]/20 flex flex-col md:flex-row gap-[4vw] hover:bg-[#f93700] hover:text-white transition-colors duration-500 cursor-default focus:outline-none focus-visible:ring-4 focus-visible:ring-[#f93700] focus-visible:bg-[#f93700] focus-visible:text-white"
            tabIndex={0}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            onFocus={() => setHoveredIndex(i)}
            onBlur={() => setHoveredIndex(null)}
            aria-label={`Feature ${i + 1}: ${feat.title}. ${feat.desc}`}
          >
            <span className={`font-serif text-[6vw] md:text-[2vw] transition-opacity duration-500 ${hoveredIndex === i ? 'opacity-100' : 'opacity-50'}`}>0{i+1}</span>
            <div>
              <h3 className="font-serif text-[8vw] md:text-[4vw] uppercase leading-none mb-4">{feat.title}</h3>
              <p className={`text-[16px] md:text-[18px] max-w-md transition-opacity duration-500 ${hoveredIndex === i ? 'opacity-100' : 'opacity-70'}`}>{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
