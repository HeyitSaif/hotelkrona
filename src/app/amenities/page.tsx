'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { HOTEL_AMENITIES, RESTAURANTS } from '@/lib/constants';

const amenityCategories = [
  {
    id: 'dining',
    title: 'Dining & Culinary',
    icon: '🍽️',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    description: 'Three unique restaurants offering European, Central Asian, and Georgian cuisines. Room service available.',
    features: HOTEL_AMENITIES.dining,
    highlight: {
      title: 'Romanov Restaurant',
      desc: 'Our flagship restaurant serving refined European & Russian cuisine'
    }
  },
  {
    id: 'wellness',
    title: 'Wellness & Relaxation',
    icon: '🧘',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
    description: 'Unwind and rejuvenate with our wellness facilities designed for your complete relaxation.',
    features: HOTEL_AMENITIES.wellness,
    highlight: {
      title: 'Heated Outdoor Pool',
      desc: 'Swim year-round in our temperature-controlled pool'
    }
  },
  {
    id: 'recreation',
    title: 'Recreation & Activities',
    icon: '🏊',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    description: 'From beach activities to cultural excursions, discover endless ways to enjoy your stay.',
    features: HOTEL_AMENITIES.recreation,
    highlight: {
      title: 'Private Beach Access',
      desc: 'Crystal-clear waters just 150 meters from the hotel'
    }
  },
  {
    id: 'services',
    title: 'Guest Services',
    icon: '🛎️',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
    description: 'Our dedicated team is available around the clock to ensure your comfort and convenience.',
    features: HOTEL_AMENITIES.services,
    highlight: {
      title: '24/7 Concierge',
      desc: 'Personal assistance for reservations, tours, and special requests'
    }
  }
];

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen bg-charcoal">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80"
            alt="Hotel Korona Amenities"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold-darker text-sm tracking-[0.2em] uppercase font-sans">Hotel Facilities</span>
              <div className="w-12 h-px bg-gold" />
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-ivory mb-6 text-shadow-strong">
              Our <span className="text-gold">Amenities</span>
            </h1>
            <p className="text-xl text-ivory/90 max-w-2xl mx-auto text-shadow">
              Discover world-class facilities designed for your comfort and enjoyment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Amenity Cards */}
      <section className="py-20 bg-deep-bronze relative">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5">
           <div 
             className="absolute inset-0"
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, #d4a574 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}
           />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenityCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-xl aspect-[3/4] cursor-pointer"
              >
                {/* Background Image */}
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                {/* Default overlay - minimal */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
                
                {/* Hover overlay - darker for readability */}
                <div className="absolute inset-0 bg-charcoal/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Content Container */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  {/* Header - Visible by default, hidden on hover */}
                  <div className="transition-all duration-300 opacity-100 group-hover:opacity-0">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-ivory">
                      {category.title.split(' ')[0]}
                    </h3>
                  </div>
                  
                  {/* Details - Visible on hover */}
                  <ul className="space-y-2 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {category.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-ivory/90 text-sm">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurants Preview */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-bold text-ivory mb-4">
              Three <span className="text-gold">Restaurants</span>
            </h2>
            <p className="text-sand max-w-xl mx-auto">
              A culinary journey through European, Central Asian, and Georgian cuisines
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {RESTAURANTS.map((restaurant, index) => (
              <motion.div
                key={restaurant.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-morphism-dark rounded-2xl p-8 border border-gold-dark/10 text-center hover:border-gold-dark/30 transition-all duration-300 group"
              >
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {restaurant.id === 'romanov' ? '🍷' : restaurant.id === 'uzbek-tatar' ? '🥘' : '🍇'}
                </div>
                <h3 className="font-serif text-xl text-gold-darker mb-2">{restaurant.name}</h3>
                <p className="text-sand font-medium text-sm mb-4 uppercase tracking-wide">{restaurant.cuisine}</p>
                <p className="text-ivory/70 text-sm italic">{restaurant.atmosphere}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-deep-bronze relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <div className="absolute right-0 bottom-0 w-96 h-96 bg-gold rounded-full blur-[100px]" />
           <div className="absolute left-0 top-0 w-96 h-96 bg-gold rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl font-bold text-ivory mb-4">
              Experience It All
            </h2>
            <p className="text-sand mb-8 max-w-xl mx-auto text-lg">
              Book your stay and enjoy all our world-class amenities during your visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" variant="primary">
                  Book Your Stay
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
