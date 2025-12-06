'use client';

import Button from '@/components/ui/Button';
import { RESTAURANTS } from '@/lib/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const restaurantImages: Record<string, string> = {
  romanov: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  "uzbek-tatar": "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80",
  georgian: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
};

const RestaurantsSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        >
          <source src="/RestaurantSection.mp4" type="video/mp4" />
        </video>
        {/* Dark milky beige overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        <div className="absolute inset-0 bg-[#F5F1E8]/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col items-center justify-center text-center"
        >
          {/* Label with lines */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-px w-12 bg-white"></div>
            <span className="text-white text-xs tracking-[0.25em] uppercase font-sans font-bold">Dining & Culinary</span>
            <div className="h-px w-12 bg-white"></div>
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Taste the <span className="text-gold">World</span>
          </h2>

          <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
            A culinary journey awaits you. At the Korona Hotel, we invite you to explore three different culinary worlds, each reflecting the rich flavors and traditions of its culture, brought to life through thoughtful design and captivating culinary experiences.
          </p>
        </motion.div>

        {/* Restaurants Zig-Zag Layout */}
        <div className="space-y-32 mb-24">
          {/* First Restaurant - Image Left, Content Right */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src={restaurantImages.romanov}
                  alt={RESTAURANTS[0].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-white" />
                <p className="text-xs text-white uppercase tracking-widest font-bold">
                  Elegant European-Russian Cuisine
                </p>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Romanov Restaurant
              </h3>
              <p className="text-white/90 leading-relaxed text-base mb-4">
                Step into the refined atmosphere of Romanov, where classical European sophistication meets authentic Russian heritage.
              </p>
              <p className="text-white/90 leading-relaxed text-base">
                With a focus on traditional flavors, elevated presentation, and warm hospitality, this restaurant offers a regal dining experience inspired by the grandeur of imperial Russia.
              </p>
            </div>
          </motion.div>

          {/* Second Restaurant - Content Left, Image Right */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            {/* Content */}
            <div className="p-8 md:p-12 md:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-white" />
                <p className="text-xs text-white uppercase tracking-widest font-bold">
                  Rustic Charm, Time-Honored Traditions
                </p>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Uzbek & Tatar Restaurant
              </h3>
              <p className="text-white/90 leading-relaxed text-base mb-4">
                Discover the soulful flavors of the East in our Uzbek & Tatar restaurant, where clay, wood, and artisan textures create a rustic, intimate setting.
              </p>
              <p className="text-white/90 leading-relaxed text-base">
                Indulge in slow-cooked dishes and family-style hospitality rooted in centuries-old traditions of Central Asia.
              </p>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl md:order-2">
              <div className="aspect-[4/3] relative">
                <Image
                  src={restaurantImages["uzbek-tatar"]}
                  alt={RESTAURANTS[1].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Third Restaurant - Image Left, Content Right */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src={restaurantImages.georgian}
                  alt={RESTAURANTS[2].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-white" />
                <p className="text-xs text-white uppercase tracking-widest font-bold">
                  Bold Flavors, Laid-Back Vibes
                </p>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Georgian Beach Lounge
              </h3>
              <p className="text-white/90 leading-relaxed text-base mb-4">
                Bask in the relaxed ambiance of our Georgian restaurant, designed as a seaside loft-meets-lounge with open-air views and a coastal breeze.
              </p>
              <p className="text-white/90 leading-relaxed text-base">
                Known for its vibrant spices and generous spirit, Georgian cuisine here is served with a side of sunshine and style.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-10 md:p-16 border-[1.5px] border-gold-dark shadow-gold max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-dark" />

            <h3 className="font-serif text-3xl md:text-4xl font-bold text-deep-bronze mb-6">
              Taste the World at Hotel Korona
            </h3>
            <p className="text-lg text-bronze-dark mb-10 max-w-2xl mx-auto leading-relaxed">
              From imperial Russian cuisine to soulful Central Asian dishes and vibrant Georgian flavors,
              our restaurants offer an unforgettable culinary journey without leaving the hotel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary" className="shadow-gold hover:shadow-glow">
                Make a Reservation
              </Button>
              <Button size="lg" variant="secondary">
                View Full Menu
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Additional Features - Image Tiles */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {[
            {
              title: "Expert Chefs",
              desc: "Authentic recipes prepared by experienced culinary masters",
              image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
            },
            {
              title: "Special Events",
              desc: "Private dining experiences for celebrations and occasions",
              image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80"
            },
            {
              title: "Room Service",
              desc: "Enjoy our culinary offerings from the comfort of your room",
              image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer h-64 md:h-80"
            >
              {/* Background Image */}
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              {/* Default Overlay - Always visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Hover Overlay - Dark overlay for readability */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                {/* Title - Always visible */}
                <h4 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2 relative z-10 transition-all duration-300">
                  {feature.title}
                </h4>

                {/* Description - Visible on hover */}
                <p className="text-white text-sm md:text-base leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 relative z-10">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RestaurantsSection;
