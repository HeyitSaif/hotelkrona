'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import RoomCard from '@/components/ui/RoomCard';
import Button from '@/components/ui/Button';
import { ROOM_TYPES } from '@/lib/constants';

export default function RoomsPage() {
  const [sortBy, setSortBy] = useState<'price' | 'size' | 'guests'>('price');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [showBalconyOnly, setShowBalconyOnly] = useState(false);

  // Filter and sort rooms
  const filteredRooms = ROOM_TYPES
    .filter(room => {
      if (filterCategory !== 'all' && room.category !== filterCategory) return false;
      if (showBalconyOnly && !room.balcony) return false;
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'size':
          return parseInt(a.size) - parseInt(b.size);
        case 'guests':
          return b.maxGuests - a.maxGuests;
        default:
          return 0;
      }
    });

  const categories = [
    { value: 'all', label: 'All Rooms' },
    { value: 'budget', label: 'Value' },
    { value: 'standard', label: 'Standard' },
    { value: 'standard-plus', label: 'Superior' },
    { value: 'mid-luxury', label: 'Semi-Luxury' },
    { value: 'suite', label: 'Suite' },
    { value: 'luxury', label: 'Luxury' }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1920&q=80"
            alt="Luxury hotel room"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-cream" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold-darker text-sm tracking-[0.2em] uppercase font-sans">Accommodations</span>
              <div className="w-12 h-px bg-gold" />
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 text-shadow-strong">
              Our <span className="text-gold">Rooms</span>
            </h1>
            <p className="text-xl text-white/95 max-w-2xl mx-auto text-shadow-light font-medium">
              Choose your perfect accommodation from our collection of 8 unique room types,
              each designed for comfort and elegance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-cream relative">
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
          {/* Intro Text */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-bold text-deep-bronze mb-4">
              Discover Our Accommodations
            </h2>
            <p className="text-bronze max-w-3xl mx-auto text-lg">
              From budget-friendly rooms with garden views to luxury duplex suites with panoramic sea vistas,
              every accommodation at Hotel Korona offers the perfect blend of comfort, style, and authentic
              Crimean hospitality.
            </p>
          </motion.div>

          {/* Filters & Sort */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-morphism-light rounded-xl p-6 mb-10 border border-gold/30 shadow-medium sticky top-24 z-20"
          >
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2">
                <AdjustmentsHorizontalIcon className="w-5 h-5 text-gold" />
                <span className="font-medium text-deep-bronze uppercase tracking-wide text-sm">Filter & Sort:</span>
              </div>

              {/* Category Filter */}
              <div className="flex-1 min-w-[200px]">
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="input-coastal cursor-pointer hover:border-gold transition-colors"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div className="flex-1 min-w-[200px]">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'price' | 'size' | 'guests')}
                  className="input-coastal cursor-pointer hover:border-gold transition-colors"
                >
                  <option value="price">Sort by Price</option>
                  <option value="size">Sort by Size</option>
                  <option value="guests">Sort by Capacity</option>
                </select>
              </div>

              {/* Balcony Filter */}
              <div className="flex items-center space-x-3 bg-white px-4 py-2.5 rounded-lg border border-sand">
                <input
                  type="checkbox"
                  id="balcony-filter"
                  checked={showBalconyOnly}
                  onChange={(e) => setShowBalconyOnly(e.target.checked)}
                  className="w-5 h-5 rounded border-sand text-gold-darker focus:ring-gold focus:ring-offset-cream cursor-pointer accent-gold"
                />
                <label htmlFor="balcony-filter" className="text-deep-bronze text-sm font-medium cursor-pointer select-none">
                  Balcony Only
                </label>
              </div>
            </div>

            <div className="mt-4 text-sm text-bronze flex justify-between items-center border-t border-sand/30 pt-3">
              <span>Showing {filteredRooms.length} of {ROOM_TYPES.length} rooms</span>
              {(filterCategory !== 'all' || showBalconyOnly) && (
                <button 
                  onClick={() => { setFilterCategory('all'); setShowBalconyOnly(false); }}
                  className="text-gold-darker hover:text-deep-bronze transition-colors font-medium text-xs uppercase"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </motion.div>

          {/* Rooms Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {filteredRooms.map((room, index) => (
              <RoomCard key={room.id} room={room} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center bg-white rounded-2xl p-10 border border-gold shadow-large relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
            
            <h3 className="font-serif text-2xl font-bold text-deep-bronze mb-4 relative z-10">
              Find your perfect room and book today
            </h3>
            <p className="text-bronze mb-8 max-w-2xl mx-auto relative z-10">
              Need help choosing? Our team is ready to assist you in finding the perfect
              accommodation for your stay. Contact us for personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button size="lg" variant="primary">
                Book Now
              </Button>
              <Button size="lg" variant="secondary">
                Request Information
              </Button>
            </div>
          </motion.div>

          {/* Room Equipment Info */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 bg-sand/20 rounded-2xl p-8 border border-gold/20"
          >
            <h3 className="font-serif text-xl font-bold text-gold-darker mb-8 text-center">
              Standard Room Amenities
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-6 text-center">
              {[
                { icon: "📺", name: "LCD TV" },
                { icon: "📶", name: "Free WiFi" },
                { icon: "🚿", name: "Shower" },
                { icon: "❄️", name: "A/C" },
                { icon: "☎️", name: "Phone" },
                { icon: "💇", name: "Hair Dryer" },
                { icon: "🧊", name: "Mini Fridge" },
                { icon: "🛏️", name: "Linens" },
                { icon: "🧴", name: "Toiletries" }
              ].map((amenity, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="text-center group"
                >
                  <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform">{amenity.icon}</div>
                  <div className="text-xs text-deep-bronze font-medium group-hover:text-gold-darker transition-colors">
                    {amenity.name}
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-sm text-bronze mt-8 italic">
              * Equipment in rooms may slightly differ from photos. Please specify specific
              configuration when booking.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
