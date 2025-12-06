'use client';

import Button from '@/components/ui/Button';
import RoomCard from '@/components/ui/RoomCard';
import { ROOM_TYPES } from '@/lib/constants';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useRef, useState } from 'react';

// Room images for categories
const roomImages: Record<string, string> = {
  budget: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
  standard: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
  "standard-plus": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
  "mid-luxury": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
  suite: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80",
  luxury: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
};

// All rooms in carousel
const featuredRooms = ROOM_TYPES;

const FeaturedRooms: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedRoom, setSelectedRoom] = useState(featuredRooms[0]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 340;
      const gap = 24;
      const scrollAmount = cardWidth + gap;

      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 md:py-32 bg-sand relative overflow-hidden">
      {/* Left: Hero Image - 37.5% width, full height from viewport edge */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="hidden md:block absolute inset-y-0 left-0 w-[37.5%]"
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-full"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80')`,
            }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        <div className="md:ml-[30%] px-4 md:px-8">
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
                <span className="text-gold text-xs tracking-[0.25em] uppercase font-sans font-bold">Accommodations</span>
                <div className="h-px w-12 bg-gold"></div>
              </div>

              {/* Main Heading */}
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-dark-brown">
                Featured <span className="text-gold">Rooms</span>
              </h2>
            </motion.div>

            {/* Carousel */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mb-10"
            >
              {/* Left Arrow */}
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-11 md:h-11 bg-white/95 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Previous rooms"
              >
                <ChevronLeftIcon className="w-5 h-5 text-charcoal" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-11 md:h-11 bg-white/95 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Next rooms"
              >
                <ChevronRightIcon className="w-5 h-5 text-charcoal" />
              </button>

              {/* Scrollable Container */}
              <div
                ref={scrollContainerRef}
                className="overflow-x-auto scrollbar-hide scroll-smooth px-12"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <div className="flex gap-6">
                  {featuredRooms.map((room, index) => (
                    <div
                      key={room.id}
                      className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] cursor-pointer"
                      onClick={() => setSelectedRoom(room)}
                    >
                      <div className={`transition-all duration-300 ${selectedRoom.id === room.id ? 'ring-2 ring-gold rounded-xl' : ''}`}>
                        <RoomCard room={room} index={index} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* View All Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center"
            >
              <Link href="/rooms">
                <Button
                  size="lg"
                  variant="secondary"
                  className="hover:shadow-gold transition-shadow px-8 py-3 rounded-full border-2 border-gold text-gold hover:bg-gold hover:text-white"
                >
                  VIEW ALL ROOMS
                </Button>
              </Link>
            </motion.div>
          </div>
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
