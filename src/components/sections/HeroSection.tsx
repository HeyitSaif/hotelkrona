'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Button from '@/components/ui/Button';
import { HOTEL_INFO } from '@/lib/constants';

const HeroSection: React.FC = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('welcome');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
          alt="Hotel Korona - Luxury Castle Resort"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        
        {/* Decorative pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #d4a574 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

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
            className="flex items-center justify-center space-x-4"
          >
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-sans">Welcome to</span>
            <div className="w-12 h-px bg-gold" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none text-shadow-strong"
          >
            Hotel <span className="text-gold">Korona</span>
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-serif text-xl md:text-2xl lg:text-3xl text-white tracking-wide text-shadow"
          >
            {HOTEL_INFO.tagline}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed text-shadow-light"
          >
            Experience luxury in our castle-style resort located just 150 meters from pristine beaches.
            Where historic elegance meets modern comfort in beautiful Crimea.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Link href="/booking">
              <Button size="lg" variant="primary" className="text-base px-10 py-4">
                Book Your Stay
              </Button>
            </Link>

            <Link href="/rooms">
              <Button size="lg" variant="outline" className="text-base px-10 py-4">
                Explore Rooms
              </Button>
            </Link>
          </motion.div>

          {/* Feature badges */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap justify-center gap-6 pt-8"
          >
            {[
              { icon: '🏖️', text: '150m to Beach' },
              { icon: '🍽️', text: '3 Restaurants' },
              { icon: '🏊', text: 'Heated Pool' },
              { icon: '⭐', text: '24/7 Service' },
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 text-white/80 text-sm"
              >
                <span className="text-lg">{feature.icon}</span>
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center space-y-2 text-white/70 hover:text-gold transition-colors duration-300 group"
          aria-label="Scroll to next section"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-sans">Discover</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDownIcon className="w-5 h-5" />
          </motion.div>
        </button>
      </motion.div>

      {/* Side decorative elements */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
      </div>

      {/* Floating booking widget - Desktop only */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="hidden 2xl:block absolute right-8 top-1/2 transform -translate-y-1/2 z-10"
      >
        <div className="bg-white backdrop-blur-xl rounded-xl p-6 shadow-2xl border border-gold max-w-xs">
          <h3 className="font-serif text-xl font-semibold text-dark-brown mb-4">
            Quick Booking
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-xs text-gold mb-1 uppercase tracking-wide">Check-in</label>
              <input
                type="date"
                className="w-full px-3 py-2.5 bg-white border border-sand rounded-lg text-bronze focus:outline-none focus:border-gold text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gold mb-1 uppercase tracking-wide">Check-out</label>
              <input
                type="date"
                className="w-full px-3 py-2.5 bg-white border border-sand rounded-lg text-bronze focus:outline-none focus:border-gold text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gold mb-1 uppercase tracking-wide">Guests</label>
              <select className="w-full px-3 py-2.5 bg-white border border-sand rounded-lg text-bronze focus:outline-none focus:border-gold text-sm">
                <option>2 Adults</option>
                <option>2 Adults, 1 Child</option>
                <option>2 Adults, 2 Children</option>
                <option>4 Adults</option>
              </select>
            </div>
            <Link href="/booking" className="block">
              <Button variant="primary" className="w-full">
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
