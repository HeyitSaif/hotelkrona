'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const WelcomeSection: React.FC = () => {
  return (
    <section id="welcome" className="py-24 bg-cream relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #d4a574 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
              <span className="text-gold text-sm tracking-[0.2em] uppercase font-sans">About Us</span>
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-dark-brown leading-tight"
            >
              Welcome to Hotel Korona – <span className="text-gold">Your Seaside Castle</span>
            </motion.h2>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-5 text-bronze leading-relaxed"
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
              className="pt-4"
            >
              <Link href="/rooms">
                <Button size="lg" variant="primary">
                  Explore Our Rooms
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80"
                  alt="Hotel Korona Gardens"
                  width={600}
                  height={450}
                  className="w-full object-cover aspect-[4/3]"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating stats card */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 md:left-auto md:-right-6 bg-white backdrop-blur-xl rounded-xl p-6 shadow-2xl border border-gold"
              >
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-gold">150m</div>
                    <div className="text-xs text-bronze uppercase tracking-wide">to Beach</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-gold">3</div>
                    <div className="text-xs text-bronze uppercase tracking-wide">Restaurants</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-gold">24/7</div>
                    <div className="text-xs text-bronze uppercase tracking-wide">Service</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-gold/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-gold/10 rounded-2xl -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Key Features Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
                className="text-center p-6 bg-white rounded-xl border border-sand hover:border-gold transition-all duration-300 group shadow-medium"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <div className="text-sm font-semibold text-dark-brown mb-1">{feature.label}</div>
                <div className="text-xs text-bronze">{feature.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
