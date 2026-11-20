'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export const WorksLink = () => {
  return (
    <article className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-[#dbd5c9]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Link href="/members" aria-label="View more success stories" className="hover-link-anim text-[#191919] text-[11vw] leading-[1.1] block text-center font-serif font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-[#f93700] rounded">
          <span>More success</span><br/>
          <span>stories</span>
        </Link>
      </motion.div>
    </article>
  );
};
