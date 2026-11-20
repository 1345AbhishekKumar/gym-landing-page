'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const TestimonialsCarousel = () => {
  const [active, setActive] = useState(0);
  const testimonials = [
    { name: 'David Chen', role: 'Gym Member', quote: 'The equipment here is unmatched. Best gym in the city, hands down.' },
    { name: 'Elena Rostova', role: 'Personal Training Client', quote: 'The trainers are incredibly knowledgeable. I finally feel confident lifting heavy.' },
    { name: 'James Wilson', role: 'Morning Crew Member', quote: 'Great community, clean locker rooms, and it never feels too crowded.' },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row bg-[#dbd5c9] text-[#191919]">
      <div className="w-full md:w-1/2 p-[6vw] flex flex-col justify-center bg-[#f93700] text-white min-h-[50vh]">
        <h2 className="text-[12px] font-light uppercase tracking-widest mb-12">Member Reviews</h2>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            id={`testimonial-panel-${active}`}
            role="tabpanel"
            aria-labelledby={`testimonial-tab-${active}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <blockquote className="font-serif text-[7vw] md:text-[3.5vw] leading-[1.1] mb-8">&quot;{testimonials[active].quote}&quot;</blockquote>
            <p className="text-[14px] uppercase tracking-widest">{testimonials[active].role}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center p-[6vw]" role="tablist" aria-label="Testimonials">
        {testimonials.map((t, i) => (
          <button 
            key={i}
            role="tab"
            aria-selected={active === i}
            aria-controls={`testimonial-panel-${i}`}
            id={`testimonial-tab-${i}`}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            className={`w-full text-left py-[4vh] border-b border-[#191919]/20 cursor-pointer transition-all duration-500 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f93700] rounded ${active === i ? 'pl-[4vw] text-[#f93700]' : ''}`}
          >
            <h3 className="font-serif text-[6vw] md:text-[3vw] uppercase">{t.name}</h3>
            <span aria-hidden="true" className={`text-[4vw] md:text-[2vw] transition-opacity ${active === i ? 'opacity-100' : 'opacity-0'}`}>→</span>
          </button>
        ))}
      </div>
    </section>
  );
};
