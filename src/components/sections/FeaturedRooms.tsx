'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import RoomCard from '@/components/ui/RoomCard';
import { ROOM_TYPES } from '@/lib/constants';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// All rooms in carousel
const featuredRooms = ROOM_TYPES;

const FeaturedRooms: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 380; // Max card width
      const gap = 32; // md:gap-8 = 2rem = 32px
      const scrollAmount = cardWidth + gap;
      
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 md:py-32 bg-sand relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="gold-line" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-sans font-bold">Accommodations</span>
            <div className="gold-line" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-brown">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">Rooms</span>
          </h2>
        </motion.div>

        {/* Horizontal Slider with Navigation Arrows */}
        <div className="relative -mx-4 md:-mx-8">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 border border-gold/20"
            aria-label="Previous rooms"
          >
            <ChevronLeftIcon className="w-6 h-6 md:w-7 md:h-7 text-charcoal" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 border border-gold/20"
            aria-label="Next rooms"
          >
            <ChevronRightIcon className="w-6 h-6 md:w-7 md:h-7 text-charcoal" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth px-12 md:px-20"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Horizontal Flex Row - No Wrap */}
            <div className="flex gap-6 md:gap-8">
              {featuredRooms.map((room, index) => (
                <div key={room.id} className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px]">
                  <RoomCard room={room} index={index} />
                </div>
              ))}
            </div>
          </div>
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

      {/* Hide scrollbar globally for this section */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default FeaturedRooms;
