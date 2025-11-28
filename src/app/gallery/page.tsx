'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80', category: 'exterior', title: 'Hotel Exterior' },
  { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80', category: 'rooms', title: 'Luxury Suite' },
  { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80', category: 'pool', title: 'Pool Area' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80', category: 'dining', title: 'Restaurant' },
  { src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80', category: 'rooms', title: 'Standard Room' },
  { src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80', category: 'exterior', title: 'Garden View' },
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80', category: 'beach', title: 'Beach Access' },
  { src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80', category: 'rooms', title: 'Deluxe Room' },
  { src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&q=80', category: 'dining', title: 'Fine Dining' },
  { src: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200&q=80', category: 'rooms', title: 'Suite Living Area' },
  { src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&q=80', category: 'pool', title: 'Pool View' },
  { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80', category: 'rooms', title: 'Superior Room' },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'exterior', label: 'Exterior' },
  { id: 'rooms', label: 'Rooms' },
  { id: 'dining', label: 'Dining' },
  { id: 'pool', label: 'Pool' },
  { id: 'beach', label: 'Beach' },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const goToPrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
            alt="Hotel Korona Gallery"
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
              <span className="text-gold-darker text-sm tracking-[0.2em] uppercase font-sans">Photo Gallery</span>
              <div className="w-12 h-px bg-gold" />
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-ivory mb-6 text-shadow-strong">
              Our <span className="text-gold">Gallery</span>
            </h1>
            <p className="text-xl text-ivory/90 max-w-2xl mx-auto text-shadow">
              Explore the beauty of Hotel Korona through our collection of photos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-deep-bronze sticky top-20 z-20 border-b border-gold/10 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat.id
                    ? 'bg-gold text-deep-bronze shadow-gold transform scale-105'
                    : 'bg-charcoal/50 text-sand hover:bg-charcoal hover:text-gold-darker border border-gold/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-deep-bronze min-h-[50vh]">
        <div className="container mx-auto px-4">
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className={`relative overflow-hidden rounded-xl cursor-pointer group border border-gold/10 ${
                    index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                  }`}
                  onClick={() => openLightbox(index)}
                >
                  <div className={`relative ${index % 5 === 0 ? 'aspect-square' : 'aspect-[4/3]'}`}>
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="text-3xl mb-2 text-gold">🔍</div>
                        <p className="text-ivory font-serif text-lg tracking-wide">{image.title}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 bg-deep-bronze/50 rounded-full flex items-center justify-center text-ivory hover:bg-gold hover:text-deep-bronze transition-all z-10 border border-gold/20"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-deep-bronze/50 rounded-full flex items-center justify-center text-ivory hover:bg-gold hover:text-deep-bronze transition-all border border-gold/20"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-deep-bronze/50 rounded-full flex items-center justify-center text-ivory hover:bg-gold hover:text-deep-bronze transition-all border border-gold/20"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-[90vw] h-[80vh] max-w-6xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                fill
                className="object-contain rounded-lg"
                sizes="90vw"
                priority
              />
            </motion.div>

            {/* Caption */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center bg-deep-bronze/80 px-6 py-3 rounded-full border border-gold/20 backdrop-blur-sm">
              <p className="text-gold-darker font-serif text-xl">{filteredImages[selectedImage].title}</p>
              <p className="text-sand text-sm mt-1">
                {selectedImage + 1} / {filteredImages.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
