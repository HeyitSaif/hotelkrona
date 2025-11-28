'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { HOTEL_AMENITIES } from '@/lib/constants';

const amenityIcons: Record<string, { icon: string; color: string }> = {
  dining: { icon: '🍽️', color: 'from-amber-500/20 to-orange-500/20' },
  wellness: { icon: '🧘', color: 'from-emerald-500/20 to-teal-500/20' },
  recreation: { icon: '🏊', color: 'from-blue-500/20 to-cyan-500/20' },
  services: { icon: '🛎️', color: 'from-purple-500/20 to-pink-500/20' },
};

const AmenitiesOverview: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
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
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-sans">Hotel Amenities</span>
            <div className="w-12 h-px bg-gold" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-dark-brown mb-6">
            Everything You <span className="text-gold">Need</span>
          </h2>
          <p className="text-lg text-bronze max-w-2xl mx-auto">
            From fine dining to wellness facilities, we provide everything for a perfect stay
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {Object.entries(HOTEL_AMENITIES).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-sand backdrop-blur-sm rounded-2xl p-6 border border-gold/30 hover:border-gold transition-all duration-500 h-full shadow-medium">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${amenityIcons[category]?.color || 'from-gold/20 to-gold-light/20'} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {amenityIcons[category]?.icon || '✨'}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-semibold text-gold mb-4 capitalize">
                  {category}
                </h3>

                {/* Items */}
                <ul className="space-y-2">
                  {items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-bronze">
                      <span className="text-gold mr-2 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Features */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-cream rounded-2xl p-8 md:p-12 border border-gold shadow-large"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { icon: '🏖️', value: '150m', label: 'to Beach' },
              { icon: '🏊', value: 'Heated', label: 'Pool' },
              { icon: '🍽️', value: '3', label: 'Restaurants' },
              { icon: '⏰', value: '24/7', label: 'Reception' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="font-serif text-3xl font-bold text-gold mb-1">{stat.value}</div>
                <div className="text-bronze text-sm uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/amenities">
            <Button size="lg" variant="secondary">
              Explore All Amenities
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AmenitiesOverview;

