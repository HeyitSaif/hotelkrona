'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Button from '@/components/ui/Button';
import { HOTEL_INFO } from '@/lib/constants';

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
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
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
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        
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
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Pre-title */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center space-x-6"
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent" />
            <span className="text-gold-light text-sm md:text-base tracking-[0.15em] uppercase font-sans font-semibold text-shadow-light">Welcome to</span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-none"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}
          >
            Hotel <span className="text-transparent bg-clip-text bg-gradient-to-br from-gold-light via-gold to-white/80">Korona</span>
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-serif text-xl md:text-2xl lg:text-3xl text-white tracking-wide font-light italic"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}
          >
            {HOTEL_INFO.tagline}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed font-light"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}
          >
            Experience luxury in our castle-style resort located just 150 meters from pristine beaches.
            Where historic elegance meets modern comfort in beautiful Crimea.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Link href="/booking">
              <Button size="lg" variant="primary" className="text-base px-10 py-4 shadow-gold hover:shadow-glow min-w-[200px]">
                Book Your Stay
              </Button>
            </Link>

            <Link href="/rooms">
              <Button size="lg" variant="outline" className="text-base px-10 py-4 !border-[3px] !border-white !text-white hover:!bg-white hover:!text-deep-bronze min-w-[200px]">
                Explore Rooms
              </Button>
            </Link>
          </motion.div>

          {/* Feature badges */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-12"
          >
            {[
              { icon: '🏖️', text: '150m to Beach' },
              { icon: '🍽️', text: '3 Restaurants' },
              { icon: '🏊', text: 'Heated Pool' },
              { icon: '⭐', text: '24/7 Service' },
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 text-white text-sm uppercase tracking-wider font-sans font-semibold"
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
              >
                <span className="text-lg filter drop-shadow-lg">{feature.icon}</span>
                <span>{feature.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center space-y-3 text-white hover:text-gold-light transition-colors duration-300 group"
          aria-label="Scroll to next section"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
        >
          <span className="text-[10px] uppercase tracking-[0.15em] font-sans font-semibold">Discover</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-2 rounded-full border-2 border-white/40 group-hover:border-gold-light/70 transition-colors"
          >
            <ChevronDownIcon className="w-5 h-5" />
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

      {/* Floating booking widget - Desktop only */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="hidden 2xl:block absolute right-12 top-1/2 transform -translate-y-1/2 z-20"
      >
        <div className="glass-morphism-light rounded-xl p-6 shadow-elevated border-elegant max-w-xs backdrop-blur-xl bg-white/95">
          <h3 className="font-serif text-xl font-semibold text-deep-bronze mb-4 text-center">
            Quick Booking
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-xs text-deep-bronze mb-1 uppercase tracking-wide font-bold">Check-in</label>
              <input
                type="date"
                className="w-full px-3 py-2 bg-white border-[1.5px] border-sand-dark rounded-lg text-deep-bronze focus:outline-none focus:border-gold-dark text-sm min-h-[44px]"
              />
            </div>
            <div>
              <label className="block text-xs text-deep-bronze mb-1 uppercase tracking-wide font-bold">Check-out</label>
              <input
                type="date"
                className="w-full px-3 py-2 bg-white border-[1.5px] border-sand-dark rounded-lg text-deep-bronze focus:outline-none focus:border-gold-dark text-sm min-h-[44px]"
              />
            </div>
            <Link href="/booking" className="block pt-2">
              <Button variant="primary" className="w-full text-sm py-3 shadow-gold hover:shadow-glow">
                Check Availability
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
