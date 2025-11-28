'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { RESTAURANTS } from '@/lib/constants';

const restaurantImages: Record<string, string> = {
  romanov: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  "uzbek-tatar": "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80",
  georgian: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
};

const RestaurantsSection: React.FC = () => {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #d4a574 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        />
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
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-sans">Culinary Excellence</span>
            <div className="w-12 h-px bg-gold" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-dark-brown mb-6">
            Experience Our <span className="text-gold">Culinary World</span>
          </h2>
          <p className="text-lg text-bronze max-w-2xl mx-auto">
            Three unique dining concepts for every taste, each offering an authentic journey
            through different culinary traditions
          </p>
        </motion.div>

        {/* Restaurants Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {RESTAURANTS.map((restaurant, index) => (
            <motion.div
              key={restaurant.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="w-full"
            >
              <Card variant="elevated" className="h-full group overflow-hidden flex flex-col">
                {/* Restaurant Image */}
                <div className="relative mb-6 -mx-6 -mt-6 overflow-hidden rounded-t-xl">
                  <div className="aspect-[16/10] relative">
                    <Image
                      src={restaurantImages[restaurant.id] || restaurantImages.romanov}
                      alt={restaurant.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />

                    {/* Cuisine Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-gold text-dark-brown px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-medium">
                        {restaurant.cuisine.split(' ')[0]}
                      </span>
                    </div>

                    {/* Signature Feature */}
                    {restaurant.signature && (
                      <div className="absolute bottom-4 left-4 right-4 z-10">
                        <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 border border-gold shadow-medium">
                          <p className="text-sm text-gold font-medium flex items-center">
                            <span className="mr-2">⭐</span>
                            {restaurant.signature}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <CardHeader className="px-0">
                  <CardTitle className="text-2xl mb-2 group-hover:text-gold transition-colors duration-300">
                    {restaurant.name}
                  </CardTitle>
                  <p className="text-gold font-medium text-sm">{restaurant.cuisine}</p>
                </CardHeader>

                <CardContent className="space-y-5 px-0 flex-1">
                  <p className="text-bronze leading-relaxed text-sm">
                    {restaurant.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-medium text-gold uppercase tracking-wide">Atmosphere</p>
                    <p className="text-sm text-bronze italic leading-relaxed">
                      {restaurant.atmosphere}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {restaurant.keywords.map((keyword, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1.5 bg-sand text-bronze rounded-full border border-gold/30"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="bg-white backdrop-blur-sm rounded-2xl p-10 md:p-12 lg:p-16 border border-gold shadow-large max-w-5xl mx-auto">
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-dark-brown mb-6">
              Taste the World at Hotel Korona
            </h3>
            <p className="text-lg text-bronze mb-10 max-w-2xl mx-auto leading-relaxed">
              From imperial Russian cuisine to soulful Central Asian dishes and vibrant Georgian flavors,
              our restaurants offer an unforgettable culinary journey without leaving the hotel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary">
                Make a Reservation
              </Button>
              <Button size="lg" variant="secondary">
                View Full Menu
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 lg:gap-12 text-center"
        >
          {[
            { icon: "🍽️", title: "Room Service", desc: "Enjoy our culinary offerings from the comfort of your room" },
            { icon: "🥂", title: "Special Events", desc: "Private dining experiences for celebrations and occasions" },
            { icon: "👨‍🍳", title: "Expert Chefs", desc: "Authentic recipes prepared by experienced culinary masters" }
          ].map((feature, index) => (
            <div key={index} className="p-8 bg-white rounded-xl border border-gold/30 shadow-medium">
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h4 className="font-serif text-xl font-semibold text-gold mb-3">
                {feature.title}
              </h4>
              <p className="text-sm text-bronze leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RestaurantsSection;
