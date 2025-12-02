'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { slugify } from '@/lib/utils';
import { UserGroupIcon, Square3Stack3DIcon } from '@heroicons/react/24/outline';

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

const categoryLabels: Record<string, string> = {
  budget: 'VALUE',
  standard: 'STANDARD',
  'standard-plus': 'SUPERIOR',
  'mid-luxury': 'SEMI-LUXURY',
  suite: 'SUITE',
  luxury: 'LUXURY',
};

// Room equipment features
const getRoomFeatures = (room: RoomType) => [
  'Free WiFi',
  'LCD TV',
  'Air Conditioning',
  room.balcony ? 'Private Balcony' : 'Window View',
  'Mini Fridge',
  'Hair Dryer',
  'Shower',
  'Toiletries'
];

const RoomCard: React.FC<RoomCardProps> = ({ room, index = 0 }) => {
  const imageUrl = roomImages[room.category] || roomImages.standard;
  const categoryLabel = categoryLabels[room.category] || categoryLabels.standard;
  const features = getRoomFeatures(room);

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="h-full"
    >
      <Link href={`/rooms/${slugify(room.nameEn)}`} className="block group h-full">
        <div className="relative h-[340px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
          {/* Background Image - Sharp by default */}
          <div className="absolute inset-0 transition-all duration-300 group-hover:blur-[2px] group-hover:brightness-75">
            <Image
              src={imageUrl}
              alt={room.nameEn}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={index < 4}
            />
          </div>

          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

          {/* Always Visible Info - Shown in both states */}
          <div className="absolute inset-0 z-25 pointer-events-none">
            {/* Top-left labels */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-charcoal text-[11px] font-bold uppercase tracking-wider rounded-md shadow-md">
                {categoryLabel}
              </span>
            </div>

            {/* Room info - bottom left - no dark band, just text with shadow */}
            <div className="absolute bottom-6 left-4 right-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              <div className="space-y-2">
                <h3 className="font-serif text-xl md:text-2xl font-bold line-clamp-1 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  {room.nameEn}
                </h3>
                <div className="flex items-center gap-x-8 text-sm text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                  <div className="flex items-center gap-2">
                    <Square3Stack3DIcon className="w-4 h-4 flex-shrink-0" />
                    <span className="whitespace-nowrap">{room.size}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UserGroupIcon className="w-4 h-4 flex-shrink-0" />
                    <span className="whitespace-nowrap">Up to {room.maxGuests}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hover State Content */}
          <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col pointer-events-none">
            {/* Left side text block with features */}
            <div className="flex-1 flex flex-col justify-start pt-16">
              <div className="mb-4 max-w-[280px]">
                <h4 className="text-white/90 text-xs uppercase tracking-wider font-bold mb-3">
                  Room Equipment
                </h4>
                <ul className="space-y-2">
                  {features.slice(0, 6).map((feature, idx) => (
                    <li key={idx} className="text-white/95 text-sm flex items-start gap-2">
                      <span className="text-gold mt-0.5 flex-shrink-0">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price info */}
              <div className="flex flex-wrap gap-3 text-white/90 text-sm font-semibold max-w-[280px]">
                <span>From {room.price}₽</span>
              </div>
            </div>

            {/* Bottom center button (visible on hover) */}
            <div className="w-full flex justify-center pointer-events-auto">
              <button className="px-8 py-3 bg-white/95 backdrop-blur-sm hover:bg-white text-charcoal rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-200 shadow-lg">
                Details
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default RoomCard;
