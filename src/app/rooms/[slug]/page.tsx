'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Button from '@/components/ui/Button';
import { ROOM_TYPES, ROOM_AMENITIES } from '@/lib/constants';
import { formatPrice, slugify } from '@/lib/utils';

const roomGalleryImages = [
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80",
  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
  "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80",
  "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200&q=80",
];

export default function RoomDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const room = ROOM_TYPES.find(r => slugify(r.nameEn) === slug);
  const [currentImage, setCurrentImage] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  if (!room) {
    return (
      <div className="min-h-screen bg-midnight flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-ivory mb-4">Room Not Found</h1>
          <p className="text-steel mb-8">The room you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/rooms">
            <Button variant="primary">View All Rooms</Button>
          </Link>
        </div>
      </div>
    );
  }

  const today = new Date().toISOString().split('T')[0];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % roomGalleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + roomGalleryImages.length) % roomGalleryImages.length);
  };

  // Get similar rooms
  const similarRooms = ROOM_TYPES.filter(r => r.id !== room.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-midnight">
      {/* Breadcrumb */}
      <div className="bg-navy/50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-steel hover:text-gold transition-colors">Home</Link>
            <span className="text-steel">/</span>
            <Link href="/rooms" className="text-steel hover:text-gold transition-colors">Rooms</Link>
            <span className="text-steel">/</span>
            <span className="text-gold">{room.nameEn}</span>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="relative h-[60vh] overflow-hidden">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={roomGalleryImages[currentImage]}
            alt={room.nameEn}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/30" />
        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-midnight/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-midnight transition-all z-10"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-midnight/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-midnight transition-all z-10"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {roomGalleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentImage === index ? 'bg-gold w-6' : 'bg-ivory/50 hover:bg-ivory'
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Strip */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {roomGalleryImages.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                currentImage === index ? 'border-gold' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={img}
                alt={`View ${index + 1}`}
                width={64}
                height={48}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Room Details */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Title & Quick Info */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-ivory mb-2">
                  {room.nameEn}
                </h1>
                <p className="text-gold font-medium mb-6">{room.nameRu}</p>

                <div className="flex flex-wrap gap-6 text-ivory/80">
                  <div className="flex items-center gap-2">
                    <span className="text-gold">🛏️</span>
                    <span>{room.beds}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gold">👥</span>
                    <span>Up to {room.maxGuests} guests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gold">📐</span>
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gold">🏔️</span>
                    <span>{room.viewType} View</span>
                  </div>
                  {room.balcony && (
                    <div className="flex items-center gap-2">
                      <span className="text-gold">🌅</span>
                      <span>Private Balcony</span>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-slate/30 rounded-2xl p-8 border border-gold/10"
              >
                <h2 className="font-serif text-xl text-gold mb-4">About This Room</h2>
                <p className="text-ivory/80 leading-relaxed mb-4">
                  {room.description}
                </p>
                <p className="text-steel text-sm">
                  Note: Equipment in rooms may slightly differ from photos. Please specify specific 
                  configuration when booking.
                </p>
              </motion.div>

              {/* Amenities */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-slate/30 rounded-2xl p-8 border border-gold/10"
              >
                <h2 className="font-serif text-xl text-gold mb-6">Room Amenities</h2>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
                  {ROOM_AMENITIES.map((amenity, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl mb-2">{amenity.icon}</div>
                      <div className="text-xs text-ivory">{amenity.name}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Booking Widget */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-slate/50 rounded-2xl p-6 border border-gold/20 sticky top-24"
              >
                <div className="text-center mb-6">
                  <div className="text-sm text-steel mb-1">Starting from</div>
                  <div className="text-3xl font-bold text-gold">{formatPrice(room.price)}</div>
                  <div className="text-sm text-steel">per night</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm text-ivory mb-2">Check-in</label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      min={today}
                      className="w-full px-4 py-3 bg-midnight border border-steel/30 rounded-lg text-ivory focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-ivory mb-2">Check-out</label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      min={checkIn || today}
                      className="w-full px-4 py-3 bg-midnight border border-steel/30 rounded-lg text-ivory focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <Link href={`/booking?room=${room.id}&checkIn=${checkIn}&checkOut=${checkOut}`}>
                  <Button variant="primary" className="w-full mb-4">
                    Book Now
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button variant="secondary" className="w-full">
                    Inquire
                  </Button>
                </Link>

                <div className="mt-6 pt-6 border-t border-gold/20 space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-steel">
                    <span>✓</span> Free cancellation (7+ days)
                  </div>
                  <div className="flex items-center gap-2 text-steel">
                    <span>✓</span> Instant confirmation
                  </div>
                  <div className="flex items-center gap-2 text-steel">
                    <span>✓</span> Best rate guaranteed
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Rooms */}
      <section className="py-16 bg-midnight">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-2xl font-bold text-ivory mb-8">
              More <span className="text-gold">Rooms</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {similarRooms.map((similarRoom) => (
                <Link key={similarRoom.id} href={`/rooms/${slugify(similarRoom.nameEn)}`}>
                  <div className="group bg-slate/30 rounded-xl overflow-hidden border border-gold/10 hover:border-gold/30 transition-all">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={roomGalleryImages[Math.floor(Math.random() * roomGalleryImages.length)]}
                        alt={similarRoom.nameEn}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-3 left-3 bg-gold text-midnight px-3 py-1 rounded text-sm font-semibold">
                        {formatPrice(similarRoom.price)}/night
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-lg text-ivory group-hover:text-gold transition-colors">
                        {similarRoom.nameEn}
                      </h3>
                      <div className="flex gap-4 text-sm text-steel mt-2">
                        <span>{similarRoom.beds}</span>
                        <span>•</span>
                        <span>{similarRoom.size}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

