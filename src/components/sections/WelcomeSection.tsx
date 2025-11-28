'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const WelcomeSection: React.FC = () => {
  return (
    <section id="welcome" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #d4a574 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Section Label */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              <div className="gold-line" />
              <span className="text-gold-darker text-sm tracking-[0.15em] uppercase font-sans font-bold">About Us</span>
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-deep-bronze leading-tight"
            >
              Welcome to Hotel Korona – <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark to-gold">Your Seaside Castle</span>
            </motion.h2>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 text-bronze-dark leading-relaxed text-lg"
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

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-6"
            >
              <Link href="/rooms">
                <Button size="lg" variant="primary" className="shadow-gold hover:shadow-glow">
                  Explore Our Rooms
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative group">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated aspect-[4/3] border-[1.5px] border-sand-dark">
                <Image
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80"
                  alt="Hotel Korona Gardens"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Floating stats card */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-8 -left-8 md:-left-12 bg-white/95 backdrop-blur-xl rounded-xl p-6 shadow-elevated border-[1.5px] border-gold-dark max-w-sm hidden sm:block"
              >
                <div className="grid grid-cols-3 gap-6 text-center divide-x divide-gold-dark/30">
                  <div className="px-2">
                    <div className="text-2xl md:text-3xl font-bold text-gold-darker font-serif">150m</div>
                    <div className="text-[10px] text-bronze-dark uppercase tracking-widest font-bold mt-1">to Beach</div>
                  </div>
                  <div className="px-2">
                    <div className="text-2xl md:text-3xl font-bold text-gold-darker font-serif">3</div>
                    <div className="text-[10px] text-bronze-dark uppercase tracking-widest font-bold mt-1">Restaurants</div>
                  </div>
                  <div className="px-2">
                    <div className="text-2xl md:text-3xl font-bold text-gold-darker font-serif">24/7</div>
                    <div className="text-[10px] text-bronze-dark uppercase tracking-widest font-bold mt-1">Service</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-[1.5px] border-gold-dark/30 rounded-2xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 border-[1.5px] border-gold-dark/20 rounded-2xl -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Key Features Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: "🏖️", label: "Beachfront", desc: "150m to sea" },
              { icon: "👑", label: "Castle Design", desc: "Unique architecture" },
              { icon: "🍽️", label: "Fine Dining", desc: "3 restaurants" },
              { icon: "🏊", label: "Pool & Spa", desc: "Heated pool" },
              { icon: "👨‍👩‍👧‍👦", label: "Family Friendly", desc: "Kids welcome" },
              { icon: "💼", label: "24/7 Service", desc: "Always available" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-white rounded-xl border-[1.5px] border-sand-dark hover:border-gold-dark transition-all duration-300 group shadow-elegant hover:shadow-hover-elegant"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-sm">{feature.icon}</div>
                <div className="text-sm font-bold text-deep-bronze mb-1 uppercase tracking-wide">{feature.label}</div>
                <div className="text-xs text-bronze-dark">{feature.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
