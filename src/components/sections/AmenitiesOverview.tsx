'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { HOTEL_AMENITIES } from '@/lib/constants';

const amenityCards = [
  {
    id: 'dining',
    title: 'Dining',
    icon: '🍽️',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    description: 'Three unique restaurants offering exceptional cuisine',
    features: HOTEL_AMENITIES.dining
  },
  {
    id: 'wellness',
    title: 'Wellness',
    icon: '🧘',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
    description: 'Unwind and rejuvenate with our wellness facilities',
    features: HOTEL_AMENITIES.wellness
  },
  {
    id: 'recreation',
    title: 'Recreation',
    icon: '🏊',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    description: 'Discover endless ways to enjoy your stay',
    features: HOTEL_AMENITIES.recreation
  },
  {
    id: 'services',
    title: 'Services',
    icon: '🛎️',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
    description: 'Professional service available around the clock',
    features: HOTEL_AMENITIES.services
  }
];

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

        {/* Amenities Grid - Image Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {amenityCards.map((amenity, index) => (
            <motion.div
              key={amenity.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${amenity.image}')`
                  }}
                />
                
                {/* Default Overlay - Subtle */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 transition-opacity duration-300 group-hover:opacity-0" />

                {/* Hover Overlay - Darker for readability */}
                <div className="absolute inset-0 bg-charcoal/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Title - Visible by default, hidden on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-all duration-300 opacity-100 group-hover:opacity-0">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                    {amenity.title}
                  </h3>
                </div>

                {/* Features List - Visible on Hover */}
                <div className="absolute inset-0 p-6 pt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <ul className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {amenity.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-white/90 text-sm">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
