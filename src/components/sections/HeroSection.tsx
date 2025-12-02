'use client';

import BookingBar from '@/components/ui/BookingBar';
import Button from '@/components/ui/Button';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

const HeroSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToNext = () => {
    const nextSection = document.getElementById('welcome');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-x-hidden">
      {/* Parallax Background Image */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
          alt="Hotel Korona - Luxury Castle Resort"
          fill
          className="object-cover scale-110"
          priority
          sizes="100vw"
        />
        {/* Stronger Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75" />

        {/* Decorative pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #d4a574 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 -mt-20">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Decorative Icon */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <div className="text-white text-6xl md:text-7xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.9)' }}>
              <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 10 L50 50 L75 35 Q50 20 25 35 L50 50 Z" opacity="0.9"/>
                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8"/>
              </svg>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal text-white leading-tight tracking-[0.15em] uppercase"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.9)' }}
          >
            HOTEL<br />KORONA
          </motion.h1>

          {/* Sub-headline */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-white/90 text-base md:text-lg lg:text-xl uppercase tracking-[0.3em] font-light"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}
          >
            Castle & Beach
          </motion.div>

          {/* Star Rating */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center gap-4 py-4"
          >
            <div className="w-16 md:w-20 h-px bg-white/70" />
            <div className="flex gap-2">
              {[1, 2, 3].map((star) => (
                <svg key={star} className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="w-16 md:w-20 h-px bg-white/70" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed font-light italic"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}
          >
            Coastal Castle Elegance on the Shores of Crimea
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center items-center pt-6"
          >
            <Link href="/rooms">
              <Button size="lg" variant="primary" className="text-base px-10 py-4 shadow-gold hover:shadow-glow min-w-[200px] bg-gradient-to-r from-gold-dark to-gold hover:from-gold hover:to-gold-light hover:scale-105 active:scale-95 transform transition-all duration-300">
                Explore Rooms
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Booking Bar - Positioned Below CTA Button */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="absolute bottom-24 left-0 right-0 z-20"
      >
        <BookingBar />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center space-y-2 text-white/80 hover:text-gold-light transition-all duration-300 group"
          aria-label="Scroll to next section"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
        >
          <span className="text-[9px] uppercase tracking-[0.2em] font-sans font-semibold">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="p-2 rounded-full border-2 border-white/50 group-hover:border-gold-light/80 group-hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            <ChevronDownIcon className="w-4 h-4" />
          </motion.div>
        </button>
      </motion.div>

      {/* Side decorative elements */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 hidden 2xl:block">
        <div className="w-px h-40 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
      </div>
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden 2xl:block">
        <div className="w-px h-40 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
