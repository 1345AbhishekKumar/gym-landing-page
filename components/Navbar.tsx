'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav aria-label="Main navigation" className={`fixed top-0 left-0 w-full z-50 px-[4vw] py-[5vh] text-[#141414] transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="flex justify-between items-start w-full">
        {/* Left Group */}
        <div className="flex gap-[6vw] md:gap-[8vw]">
          <Link href="#info" className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3300] rounded">
            <span className="text-[1.5rem] md:text-[2vw] leading-none font-medium mb-2">Info</span>
            <span className="text-[9px] md:text-[0.6vw] font-light uppercase tracking-widest">About Us</span>
          </Link>
          <Link href="#work" className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3300] rounded">
            <span className="text-[1.5rem] md:text-[2vw] leading-none font-medium mb-2">Work</span>
            <span className="text-[9px] md:text-[0.6vw] font-light uppercase tracking-widest">Our Classes</span>
          </Link>
        </div>

        {/* Right Group */}
        <div className="flex gap-[6vw] md:gap-[8vw]">
          <Link href="#workflow" className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3300] rounded">
            <span className="text-[1.5rem] md:text-[2vw] leading-none font-medium mb-2">Workflow</span>
            <span className="text-[9px] md:text-[0.6vw] font-light uppercase tracking-widest">The Gym</span>
          </Link>
          <Link href="#contact" className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3300] rounded">
            <span className="text-[1.5rem] md:text-[2vw] leading-none font-medium mb-2">Contact me</span>
            <span className="text-[9px] md:text-[0.6vw] font-light uppercase tracking-widest">Join Apex</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
