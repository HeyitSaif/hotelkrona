'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Card, { CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { formatPrice, slugify } from '@/lib/utils';

export interface RoomType {
  id: string;
  nameRu: string;
  nameEn: string;
  beds: string;
  maxGuests: number;
  size: string;
  availableUnits: number;
  price: number;
  viewType: string;
  balcony: boolean;
  description: string;
  category: string;
}

interface RoomCardProps {
  room: RoomType;
  index?: number;
}

// Unsplash images for room categories
const roomImages: Record<string, string> = {
  budget: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
  standard: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
  "standard-plus": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
  "mid-luxury": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
  suite: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80",
  luxury: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
};

const categoryLabels: Record<string, { label: string; color: string }> = {
  budget: { label: 'Value', color: 'bg-sage/20 text-teal-elegant border-sage/40' },
  standard: { label: 'Standard', color: 'bg-sand/30 text-bronze-dark border-sand-dark' },
  'standard-plus': { label: 'Superior', color: 'bg-gold/20 text-gold-darker border-gold-dark' },
  'mid-luxury': { label: 'Semi-Luxury', color: 'bg-gold/30 text-gold-darker border-gold-dark' },
  suite: { label: 'Suite', color: 'bg-burgundy/20 text-burgundy border-burgundy/50' },
  luxury: { label: 'Luxury', color: 'bg-gradient-to-r from-gold-dark to-gold text-deep-bronze border-gold-dark shadow-gold' },
};

const RoomCard: React.FC<RoomCardProps> = ({ room, index = 0 }) => {
  const imageUrl = roomImages[room.category] || roomImages.standard;
  const categoryStyle = categoryLabels[room.category] || categoryLabels.standard;

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <Card
        variant="elevated"
        className="h-full flex flex-col overflow-hidden group hover:shadow-elevated transition-all duration-500"
      >
        {/* Room Image */}
        <div className="relative -mx-6 -mt-6 mb-4 overflow-hidden">
          <div className="aspect-[4/3] relative">
            <Image
              src={imageUrl}
              alt={room.nameEn}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80" />

            {/* Category Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg border-[1.5px] ${categoryStyle.color}`}>
                {categoryStyle.label}
              </span>
            </div>

            {/* Price Badge */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg z-10 border-[1.5px] border-gold-dark/40">
              <div className="text-[10px] font-bold uppercase tracking-wide text-bronze-dark">From</div>
              <div className="text-xl font-serif font-bold text-gold-darker">{formatPrice(room.price)}</div>
            </div>

            {/* Availability */}
            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-[10px] font-semibold border-[1.5px] border-white/30 shadow-lg z-10">
              {room.availableUnits} left
            </div>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-xl md:text-2xl group-hover:text-gold-dark transition-colors duration-300 line-clamp-1">
            {room.nameEn}
          </CardTitle>
          <p className="text-xs text-gold-darker font-semibold uppercase tracking-wider">{room.nameRu}</p>
        </CardHeader>

        <CardContent className="flex-1 space-y-5 p-5 pt-0">
          <p className="text-bronze-dark text-sm leading-relaxed line-clamp-3">
            {room.description}
          </p>

          {/* Room Details */}
          <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm pt-2 border-t border-sand-dark/40">
            <div className="flex items-center space-x-2">
              <span className="text-lg">🛏️</span>
              <span className="text-deep-bronze font-semibold text-xs">{room.beds}</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-lg">👥</span>
              <span className="text-deep-bronze font-semibold text-xs">Up to {room.maxGuests}</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-lg">📐</span>
              <span className="text-deep-bronze font-semibold text-xs">{room.size}</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-lg">🏔️</span>
              <span className="text-deep-bronze font-semibold text-xs">{room.viewType}</span>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {room.balcony && (
              <span className="text-[10px] px-2 py-1.5 bg-gold/30 text-gold-darker rounded-md border-[1.5px] border-gold-dark/40 font-bold uppercase tracking-wide">
                Balcony
              </span>
            )}
            <span className="text-[10px] px-2 py-1.5 bg-sand/40 text-bronze-dark rounded-md border-[1.5px] border-sand-dark font-bold uppercase tracking-wide">
              WiFi
            </span>
            <span className="text-[10px] px-2 py-1.5 bg-sand/40 text-bronze-dark rounded-md border-[1.5px] border-sand-dark font-bold uppercase tracking-wide">
              A/C
            </span>
          </div>
        </CardContent>

        <CardFooter className="pt-4 px-5 pb-6 bg-cream-dark/30">
          <div className="w-full flex gap-3">
            <Link href={`/rooms/${slugify(room.nameEn)}`} className="flex-1">
              <Button size="sm" variant="outline" className="w-full !border-gold-dark !text-gold-darker hover:!bg-gold hover:!text-deep-bronze">
                Details
              </Button>
            </Link>
            <Link href="/booking" className="flex-1">
              <Button size="sm" variant="primary" className="w-full shadow-gold">
                Book
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default RoomCard;
