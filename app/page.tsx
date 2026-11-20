'use client';

import { motion, useScroll, useSpring } from 'motion/react';
import dynamic from 'next/dynamic';
import { Loader } from '@/components/Loader';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';

// Dynamically import below-the-fold components for better performance
const Services = dynamic(() => import('@/components/Services').then(mod => mod.Services), { ssr: false });
const MorphingLetter = dynamic(() => import('@/components/MorphingLetter').then(mod => mod.MorphingLetter), { ssr: false });
const Works = dynamic(() => import('@/components/Works').then(mod => mod.Works), { ssr: false });
const WorksLink = dynamic(() => import('@/components/WorksLink').then(mod => mod.WorksLink), { ssr: false });
const AdvancedFeatures = dynamic(() => import('@/components/AdvancedFeatures').then(mod => mod.AdvancedFeatures), { ssr: false });
const HowItWorks = dynamic(() => import('@/components/HowItWorks').then(mod => mod.HowItWorks), { ssr: false });
const TestimonialsCarousel = dynamic(() => import('@/components/TestimonialsCarousel').then(mod => mod.TestimonialsCarousel), { ssr: false });
const Pricing = dynamic(() => import('@/components/Pricing').then(mod => mod.Pricing), { ssr: false });
const FAQ = dynamic(() => import('@/components/FAQ').then(mod => mod.FAQ), { ssr: false });
const FinalCTA = dynamic(() => import('@/components/FinalCTA').then(mod => mod.FinalCTA), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact').then(mod => mod.Contact), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer').then(mod => mod.Footer), { ssr: false });

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#dbd5c9] text-[#191919] font-sans selection:bg-[#f93700] selection:text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#f93700] origin-left z-[100]"
        style={{ scaleX }}
      />
      <Loader />
      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <MorphingLetter />
        <Works />
        <WorksLink />
        <AdvancedFeatures />
        <HowItWorks />
        <TestimonialsCarousel />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
