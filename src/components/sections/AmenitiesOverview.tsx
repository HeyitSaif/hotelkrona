'use client';

import Button from '@/components/ui/Button';
import { HOTEL_AMENITIES } from '@/lib/constants';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

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
    <section className="py-24 md:py-32 bg-sand relative overflow-hidden">
      {/* Right: Hero Image - 37.5% width, full height from viewport edge */}
      <div className="hidden md:block absolute inset-y-0 right-0 w-[37.5%]">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-full"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&q=80')`,
            }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent" />
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        <div className="md:mr-[30%] px-4 md:px-8">
          {/* Section Label and Heading */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex flex-col items-center justify-center text-center"
          >
            {/* Label with lines */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-px w-12 bg-gold"></div>
              <span className="text-gold text-xs tracking-[0.25em] uppercase font-sans font-bold">Hotel Amenities</span>
              <div className="h-px w-12 bg-gold"></div>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-dark-brown">
              Everything You <span className="text-gold">Need</span>
            </h2>
          </motion.div>

          {/* Amenities Grid - Image Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {amenityCards.map((amenity, index) => (
              <motion.div
                key={amenity.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-[400px] sm:h-[450px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
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
                    <h3 className="font-serif text-2xl text-gold mb-4">{amenity.title}</h3>
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
            className="flex justify-center"
          >
            <Link href="/amenities">
              <Button
                size="lg"
                variant="secondary"
                className="hover:shadow-gold transition-shadow px-8 py-3 rounded-full border-2 border-gold text-gold hover:bg-gold hover:text-white"
              >
                EXPLORE ALL AMENITIES
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesOverview;
