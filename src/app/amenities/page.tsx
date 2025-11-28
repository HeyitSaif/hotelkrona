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
              <span className="text-gold text-sm tracking-[0.2em] uppercase font-sans">Hotel Facilities</span>
              <div className="w-12 h-px bg-gold" />
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-ivory mb-6 text-shadow-strong">
              Our <span className="text-gold">Amenities</span>
            </h1>
            <p className="text-xl text-ivory/90 max-w-2xl mx-auto text-shadow">
              Everything you need for a perfect stay, from fine dining to beach relaxation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Amenity Categories */}
      <section className="py-16 bg-deep-bronze relative">
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
          {amenityCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-12 items-center mb-24 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-gold/10">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                </div>
                {/* Floating highlight card */}
                <div className="absolute -bottom-6 left-6 right-6 glass-morphism-dark rounded-xl p-4 border border-gold/20 shadow-large">
                  <div className="text-gold font-semibold mb-1">{category.highlight.title}</div>
                  <div className="text-sand text-sm">{category.highlight.desc}</div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl bg-gold/10 p-3 rounded-lg border border-gold/20">{category.icon}</span>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-ivory">
                    {category.title}
                  </h2>
                </div>
                <p className="text-sand mb-6 leading-relaxed text-lg">
                  {category.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-ivory/90">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full shadow-glow" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
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
                className="glass-morphism-dark rounded-2xl p-8 border border-gold/10 text-center hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {restaurant.id === 'romanov' ? '🍷' : restaurant.id === 'uzbek-tatar' ? '🥘' : '🍇'}
                </div>
                <h3 className="font-serif text-xl text-gold mb-2">{restaurant.name}</h3>
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
