'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    { q: 'Is the gym crowded?', a: 'We cap our memberships to ensure you never have to wait long for equipment. Peak hours are busy but manageable.' },
    { q: 'Do you offer day passes?', a: 'Yes, day passes are available for $20. If you decide to join within 7 days, we apply that $20 toward your first month.' },
    { q: 'Can I freeze my membership?', a: 'Absolutely. You can freeze your membership for up to 3 months per year for travel or medical reasons with no penalty.' },
  ];

  return (
    <section className="relative w-full py-[15vh] bg-[#f2f2f2] text-[#191919] px-[6vw] flex flex-col md:flex-row gap-[10vw]">
      <div className="w-full md:w-1/3">
        <h2 className="font-serif text-[12vw] md:text-[6vw] leading-none uppercase sticky top-[20vh] mb-[5vh] md:mb-0">FAQ</h2>
      </div>
      <div className="w-full md:w-2/3 flex flex-col border-t border-[#191919]">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-[#191919] overflow-hidden">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
              aria-controls={`faq-answer-${i}`}
              className="w-full py-[4vh] flex justify-between items-center text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f93700] rounded"
            >
              <span className="font-serif text-[6vw] md:text-[3vw] uppercase group-hover:text-[#f93700] transition-colors leading-none">
                {faq.q}
              </span>
              <span aria-hidden="true" className="text-[6vw] md:text-[3vw] font-light transition-transform duration-500" style={{ transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  id={`faq-answer-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <p className="pb-[4vh] text-[18px] md:text-[24px] leading-[1.4] opacity-70 max-w-2xl">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};
