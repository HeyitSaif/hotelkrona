'use client';

import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <section
      id="welcome"
      className="hero-about relative w-full min-h-[70vh] md:min-h-[85vh] lg:min-h-[100vh] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80')`,
        }}
      />

      {/* Enhanced Gradient Overlay - Optimized for brightness and readability */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.15) 100%)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35" />

      {/* Text Scrim - Additional overlay behind text column only */}
      <div className="absolute inset-y-0 left-0 w-full md:w-3/5 lg:w-1/2 bg-gradient-to-r from-black/25 to-transparent backdrop-blur-[2px]" />

      {/* Content Container - More controlled width and padding */}
      <div className="w-full relative z-10">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl pt-20 md:pt-24 lg:pt-32">
          {/* Text Block - Constrained focal area */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl lg:max-w-2xl space-y-8 md:space-y-10"
          >
            {/* Section Label - Consistent with website style */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              <div className="gold-line" />
              <span className="text-gold-light text-sm tracking-[0.3em] uppercase font-sans font-bold" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                About Us
              </span>
            </motion.div>

            {/* Main Headline - Visually Dominant */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]"
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.9)' }}
            >
              Welcome to Hotel Korona – <span className="text-transparent bg-clip-text bg-gradient-to-b from-gold-light via-gold to-white">Your Seaside Castle</span>
            </motion.h1>

            {/* Body Text */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-5 text-xl md:text-2xl text-white/95 font-light leading-relaxed"
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}
            >
              <p>
                Nestled in the picturesque resort town of Utyos, perfectly positioned between
                the vibrant cities of Alushta and Yalta, Hotel Korona offers an extraordinary
                escape near the majestic Mount Ayu-Dag (Bear Mountain).
              </p>

              <p>
                Our location boasts pristine pebble beaches, crystal-clear waters, and lush
                parks filled with greenery. The nearby Princess Gagarina&apos;s Palace adds a
                touch of imperial history to your stay, making every moment feel like a
                journey through time.
              </p>

              <p>
                As one of the most comfortable hotels in the resort, Hotel Korona stands
                just 150 meters from the sea, featuring distinctive castle-style architecture
                with elaborate exterior and interior design that captures the essence of
                coastal elegance.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pb-16 md:pb-20 lg:pb-24"
            >
              <Link href="/rooms">
                <Button
                  size="lg"
                  variant="primary"
                  className="shadow-gold hover:shadow-glow text-lg px-12 py-5 min-w-[220px]"
                >
                  Explore Our Rooms
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
