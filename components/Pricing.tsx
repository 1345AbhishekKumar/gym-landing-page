'use client';

import { useState } from 'react';
import { motion } from 'motion/react';

export const Pricing = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const plans = [
    { name: 'Basic', price: '$49', features: ['24/7 Gym Access', 'Locker Room Use', 'Free Weights Area'] },
    { name: 'Premium', price: '$99', features: ['All Basic Features', 'Unlimited Group Classes', 'Sauna Access'] },
    { name: 'Elite', price: '$199', features: ['All Premium Features', '2x/mo Personal Training', 'Guest Passes'] },
  ];

  return (
    <section className="relative w-full py-[15vh] bg-[#191919] text-[#dbd5c9] px-[6vw]">
      <h2 className="block text-center text-[12px] font-light uppercase tracking-widest mb-[10vh] text-[#f93700]">
        Membership
      </h2>
      <div className="flex flex-col border-t border-[#dbd5c9]/20">
        {plans.map((plan, i) => (
          <div 
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(i)}
            onBlur={() => setHovered(null)}
            tabIndex={0}
            role="button"
            aria-expanded={hovered === i}
            className="group border-b border-[#dbd5c9]/20 py-[4vh] flex flex-col overflow-hidden transition-all duration-700 ease-custom cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f93700] rounded"
            style={{ height: hovered === i ? 'auto' : '15vh' }}
          >
            <div className="flex justify-between items-end h-[7vh]">
              <h3 className="font-serif text-[8vw] md:text-[4vw] uppercase leading-none group-hover:text-[#f93700] transition-colors">{plan.name}</h3>
              <span className="font-serif text-[6vw] md:text-[2vw] leading-none">{plan.price}<span className="text-[14px] font-sans opacity-50">/mo</span></span>
            </div>
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: hovered === i ? 1 : 0, height: hovered === i ? 'auto' : 0 }}
              transition={{ duration: 0.5 }}
              className="mt-[4vh] grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {plan.features.map((feat, j) => (
                <div key={j} className="flex items-center gap-4 text-[14px] uppercase tracking-wider">
                  <div className="w-2 h-2 bg-[#f93700] rounded-full" />
                  {feat}
                </div>
              ))}
              <button aria-label={`Select ${plan.name} plan`} className="md:col-start-3 mt-4 md:mt-0 py-4 border border-[#f93700] text-[#f93700] hover:bg-[#f93700] hover:text-[#191919] uppercase tracking-widest text-[12px] transition-colors rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Select {plan.name}
              </button>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
