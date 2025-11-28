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
  budget: { label: 'Value', color: 'bg-emerald/20 text-emerald border border-emerald/30' },
  standard: { label: 'Standard', color: 'bg-sand text-bronze border border-gold/30' },
  'standard-plus': { label: 'Superior', color: 'bg-gold/20 text-gold border border-gold' },
  'mid-luxury': { label: 'Semi-Luxury', color: 'bg-gold/30 text-dark-brown border border-gold' },
  suite: { label: 'Suite', color: 'bg-burgundy/20 text-white border border-burgundy/30' },
  luxury: { label: 'Luxury', color: 'bg-gradient-to-r from-gold to-gold-light text-dark-brown border border-gold' },
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
        className="h-full flex flex-col overflow-hidden group"
      >
        {/* Room Image */}
        <div className="relative -mx-6 -mt-6 mb-4 overflow-hidden">
          <div className="aspect-[4/3] relative">
            <Image
              src={imageUrl}
              alt={room.nameEn}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />

            {/* Category Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className={`px-3 py-1.5 rounded-full text-xs font-semibold shadow-medium ${categoryStyle.color}`}>
                {categoryStyle.label}
              </span>
            </div>

            {/* Price Badge */}
            <div className="absolute bottom-4 left-4 bg-gold text-dark-brown px-4 py-2 rounded-lg shadow-medium z-10">
              <div className="text-xs font-medium opacity-80">From</div>
              <div className="text-lg font-bold">{formatPrice(room.price)}</div>
              <div className="text-xs opacity-80">per night</div>
            </div>

            {/* Availability */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-dark-brown px-3 py-1.5 rounded-full text-xs font-medium border border-gold shadow-medium z-10">
              {room.availableUnits} available
            </div>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-xl group-hover:text-gold transition-colors duration-300">
            {room.nameEn}
          </CardTitle>
          <p className="text-sm text-gold/80 font-medium">{room.nameRu}</p>
        </CardHeader>

        <CardContent className="flex-1 space-y-4 p-5">
          <p className="text-bronze text-sm leading-relaxed line-clamp-3">
            {room.description}
          </p>

          {/* Room Details */}
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-gold">🛏️</span>
              <span className="text-bronze">{room.beds}</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-gold">👥</span>
              <span className="text-bronze">Up to {room.maxGuests}</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-gold">📐</span>
              <span className="text-bronze">{room.size}</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-gold">🏔️</span>
              <span className="text-bronze">{room.viewType}</span>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {room.balcony && (
              <span className="text-xs px-3 py-1 bg-gold/20 text-gold rounded-full border border-gold/40">
                🌅 Balcony
              </span>
            )}
            <span className="text-xs px-3 py-1 bg-sand text-bronze rounded-full border border-gold/30">
              ❄️ A/C
            </span>
            <span className="text-xs px-3 py-1 bg-sand text-bronze rounded-full border border-gold/30">
              📶 WiFi
            </span>
          </div>
        </CardContent>

        <CardFooter className="pt-4 px-5 pb-5">
          <div className="w-full space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-xl font-bold text-gold">
                  {formatPrice(room.price)}
                </div>
                <div className="text-xs text-bronze">per night</div>
              </div>
            </div>

            <div className="flex gap-3">
              <Link href={`/rooms/${slugify(room.nameEn)}`} className="flex-1">
                <Button size="sm" variant="secondary" className="w-full">
                  View Details
                </Button>
              </Link>
              <Link href="/booking" className="flex-1">
                <Button size="sm" variant="primary" className="w-full">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default RoomCard;
