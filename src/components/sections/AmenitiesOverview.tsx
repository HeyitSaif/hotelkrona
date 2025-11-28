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
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
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
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center space-x-6 mb-6">
            <div className="w-16 h-px bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-sans font-bold">Hotel Amenities</span>
            <div className="w-16 h-px bg-gold" />
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-dark-brown mb-6">
            Everything You <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">Need</span>
          </h2>
          <p className="text-lg md:text-xl text-bronze max-w-2xl mx-auto font-light">
            From fine dining to wellness facilities, we provide everything for a perfect stay
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {Object.entries(HOTEL_AMENITIES).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-sand/10 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 hover:border-gold transition-all duration-500 h-full shadow-soft hover:shadow-xl hover:-translate-y-2 relative overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${amenityIcons[category]?.color || 'from-gold/20 to-gold-light/20'} flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner relative z-10`}>
                  <span className="filter drop-shadow-sm">{amenityIcons[category]?.icon || '✨'}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-semibold text-dark-brown mb-6 capitalize relative z-10 group-hover:text-gold transition-colors">
                  {category}
                </h3>

                {/* Items */}
                <ul className="space-y-3 relative z-10">
                  {items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-bronze group-hover:text-dark-brown transition-colors">
                      <span className="text-gold mr-3 mt-1 text-xs">●</span>
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
          className="bg-cream rounded-3xl p-10 md:p-16 border border-gold/30 shadow-gold relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center relative z-10">
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
                className="relative group"
              >
                <div className="text-5xl mb-4 filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="font-serif text-4xl font-bold text-gold mb-2">{stat.value}</div>
                <div className="text-bronze text-xs uppercase tracking-[0.2em] font-bold">{stat.label}</div>
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
          className="text-center mt-16"
        >
          <Link href="/amenities">
            <Button size="lg" variant="secondary" className="hover:shadow-gold transition-shadow">
              Explore All Amenities
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AmenitiesOverview;
