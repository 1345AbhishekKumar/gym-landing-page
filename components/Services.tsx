'use client';

import { motion } from 'motion/react';

export const Services = () => {
  return (
    <article id="info" className="relative w-full min-h-screen bg-[#f2f2f2] overflow-hidden flex items-center py-32">
      <h2 className="absolute top-[5vh] left-1/2 -translate-x-1/2 text-center text-[12px] font-light uppercase tracking-widest">
        What We Offer
      </h2>
      <div className="w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="flex flex-col w-full"
        >
          <ul className="flex flex-col w-full m-0 p-0 list-none">
            {['Personal Training', 'Group Classes', 'Open Gym', 'Recovery Saunas'].map((service, index) => (
              <li key={index} className="flex items-center justify-between px-[6vw] py-[2vw] w-full font-serif text-[6vw] font-semibold leading-[1.11]">
                <div className="flex items-center gap-8">
                  {index === 0 && (
                    <svg viewBox="0 0 48 48" className="animate-star fill-[#f93700] w-[3vw] h-[3vw]" aria-hidden="true">
                      <path fillRule="evenodd" d="M20.078 14.026L24.157 0l5.02 14.026 12.548-7.013-6.588 13.247L48 24.312l-12.863 4.675 6.588 12.78-13.803-7.481L24.157 48l-4.079-13.714-13.176 7.48 5.96-12.779L0 24l12.863-3.74-5.02-13.247 12.235 7.013z" />
                    </svg>
                  )}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    className="relative cursor-pointer group"
                    tabIndex={0}
                    role="button"
                    aria-label={`Learn more about ${service}`}
                  >
                    {service}
                    <motion.div 
                      variants={{
                        hidden: { scaleX: 0 },
                        visible: { scaleX: 1 }
                      }}
                      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
                      className="absolute bottom-0 left-0 w-full h-[0.2vw] bg-[#f93700] origin-left scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-500 ease-custom"
                    />
                  </motion.div>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </article>
  );
};
