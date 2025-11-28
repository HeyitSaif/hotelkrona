'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Button from '@/components/ui/Button';
import { ROOM_TYPES } from '@/lib/constants';
import { formatPrice, slugify } from '@/lib/utils';

// Featured rooms (top 4)
const featuredRooms = ROOM_TYPES.filter(room => 
  ['mid-luxury', 'suite', 'luxury', 'standard-plus'].includes(room.category)
).slice(0, 4);

const roomImages: Record<string, string> = {
  "semi-luxury-sea-balcony": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
  "two-room-green-balcony": "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80",
  "duplex-luxury-sea-balcony": "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
  "pool-view-balcony": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
  "superior-balcony": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
};

const FeaturedRooms: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-sand relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
        >
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="gold-line" />
              <span className="text-gold text-sm tracking-[0.2em] uppercase font-sans">Accommodations</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-dark-brown">
              Featured <span className="text-gold">Rooms</span>
            </h2>
          </div>
          
          <div className="flex items-center space-x-4 mt-6 md:mt-0">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 bg-white border border-gold rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-dark-brown transition-all duration-300 shadow-medium"
              aria-label="Previous rooms"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 bg-white border border-gold rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-dark-brown transition-all duration-300 shadow-medium"
              aria-label="Next rooms"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Rooms Carousel */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featuredRooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-shrink-0 w-[320px] md:w-[380px] snap-start"
            >
              <div className="group relative bg-white rounded-2xl overflow-hidden border border-sand hover:border-gold transition-all duration-500 shadow-large">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={roomImages[room.id] || "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80"}
                    alt={room.nameEn}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 320px, 380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  
                  {/* Price badge */}
                  <div className="absolute bottom-4 left-4 bg-gold text-dark-brown px-4 py-2 rounded-lg shadow-medium">
                    <div className="text-xs font-medium opacity-80">From</div>
                    <div className="text-lg font-bold">{formatPrice(room.price)}</div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-gold px-3 py-1 rounded-full text-xs font-medium border border-gold shadow-medium">
                    {room.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-dark-brown mb-2 group-hover:text-gold transition-colors duration-300">
                    {room.nameEn}
                  </h3>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-bronze mb-4">
                    <span className="flex items-center">
                      <span className="text-gold mr-1">🛏️</span> {room.beds}
                    </span>
                    <span className="flex items-center">
                      <span className="text-gold mr-1">👥</span> Up to {room.maxGuests}
                    </span>
                    <span className="flex items-center">
                      <span className="text-gold mr-1">📐</span> {room.size}
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <Link href={`/rooms/${slugify(room.nameEn)}`} className="flex-1">
                      <Button size="sm" variant="secondary" className="w-full">
                        Details
                      </Button>
                    </Link>
                    <Link href="/booking" className="flex-1">
                      <Button size="sm" variant="primary" className="w-full">
                        Book
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
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
            <Button size="lg" variant="secondary">
              View All Rooms
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedRooms;

