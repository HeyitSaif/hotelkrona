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
    <section className="py-24 md:py-32 bg-cream-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
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
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center space-x-6 mb-6">
            <div className="w-16 h-px bg-gold-darker" />
            <span className="text-gold-darker text-sm tracking-[0.15em] uppercase font-sans font-bold">Culinary Excellence</span>
            <div className="w-16 h-px bg-gold-darker" />
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-deep-bronze mb-6">
            Experience Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark to-gold">Culinary World</span>
          </h2>
          <p className="text-lg md:text-xl text-bronze-dark max-w-2xl mx-auto leading-relaxed font-light">
            Three unique dining concepts for every taste, each offering an authentic journey
            through different culinary traditions
          </p>
        </motion.div>

        {/* Restaurants Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-24">
          {RESTAURANTS.map((restaurant, index) => (
            <motion.div
              key={restaurant.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="w-full"
            >
              <Card variant="elevated" className="h-full group overflow-hidden flex flex-col hover:shadow-elevated transition-all duration-500">
                {/* Restaurant Image */}
                <div className="relative mb-6 -mx-6 -mt-6 overflow-hidden rounded-t-xl border-b border-sand-dark">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={restaurantImages[restaurant.id] || restaurantImages.romanov}
                      alt={restaurant.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Cuisine Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-white/95 backdrop-blur-md text-deep-bronze px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg border-[1.5px] border-gold-dark/40">
                        {restaurant.cuisine.split(' ')[0]}
                      </span>
                    </div>

                    {/* Signature Feature */}
                    {restaurant.signature && (
                      <div className="absolute bottom-4 left-4 right-4 z-10">
                        <div className="bg-black/70 backdrop-blur-md rounded-lg px-4 py-2 border-[1.5px] border-white/20 shadow-lg">
                          <p className="text-xs text-gold-light font-semibold flex items-center uppercase tracking-wide">
                            <span className="mr-2 text-lg">⭐</span>
                            {restaurant.signature}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <CardHeader className="px-0 pb-2">
                  <CardTitle className="text-2xl md:text-3xl mb-2 group-hover:text-gold-dark transition-colors duration-300 font-serif">
                    {restaurant.name}
                  </CardTitle>
                  <p className="text-gold-darker font-semibold text-sm uppercase tracking-widest">{restaurant.cuisine}</p>
                </CardHeader>

                <CardContent className="space-y-6 px-0 flex-1">
                  <p className="text-bronze-dark leading-relaxed text-sm font-light">
                    {restaurant.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-sand-dark/40">
                    <p className="text-xs font-bold text-gold-darker uppercase tracking-widest mt-4">Atmosphere</p>
                    <p className="text-sm text-deep-bronze italic leading-relaxed font-serif">
                      &quot;{restaurant.atmosphere}&quot;
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {restaurant.keywords.map((keyword, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-3 py-1.5 bg-sand/40 text-bronze-dark rounded-full border-[1.5px] border-gold-dark/30 uppercase tracking-wide font-bold"
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
            <div key={index} className="p-8 bg-white rounded-xl border-[1.5px] border-sand-dark shadow-elegant hover:shadow-hover-elegant transition-all duration-300 group hover:-translate-y-1">
              <div className="text-5xl mb-6 filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h4 className="font-serif text-xl font-semibold text-gold-darker mb-3 group-hover:text-deep-bronze transition-colors">
                {feature.title}
              </h4>
              <p className="text-sm text-bronze-dark leading-relaxed">
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
