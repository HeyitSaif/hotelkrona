'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Button from '@/components/ui/Button';
import RoomCard from '@/components/ui/RoomCard';
import { ROOM_TYPES } from '@/lib/constants';

// Featured rooms (top 4)
const featuredRooms = ROOM_TYPES.filter(room => 
  ['mid-luxury', 'suite', 'luxury', 'standard-plus'].includes(room.category)
).slice(0, 4);

const FeaturedRooms: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 md:py-32 bg-sand relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16"
        >
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="gold-line" />
              <span className="text-gold text-sm tracking-[0.3em] uppercase font-sans font-bold">Accommodations</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-brown">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">Rooms</span>
            </h2>
          </div>
          
          <div className="flex items-center space-x-4 mt-8 md:mt-0">
            <button
              onClick={() => scroll('left')}
              className="w-14 h-14 bg-white border border-gold/30 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-dark-brown transition-all duration-300 shadow-medium hover:shadow-lg"
              aria-label="Previous rooms"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-14 h-14 bg-white border border-gold/30 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-dark-brown transition-all duration-300 shadow-medium hover:shadow-lg"
              aria-label="Next rooms"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </motion.div>

        {/* Rooms Carousel */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory -mx-4 px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featuredRooms.map((room, index) => (
            <div key={room.id} className="flex-shrink-0 w-[340px] md:w-[400px] snap-start">
              <RoomCard room={room} index={index} />
            </div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/rooms">
            <Button size="lg" variant="secondary" className="hover:shadow-gold transition-shadow">
              View All Rooms
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedRooms;
