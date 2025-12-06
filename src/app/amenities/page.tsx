'use client';

import Button from '@/components/ui/Button';
import { HOTEL_AMENITIES, RESTAURANTS } from '@/lib/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const amenityCategories = [
  {
    id: 'dining',
    title: 'Dining & Culinary',
    icon: '🍽️',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    description: 'Three unique restaurants offering European, Central Asian, and Georgian cuisines. Room service available.',
    features: HOTEL_AMENITIES.dining,
    highlight: {
      title: 'Romanov Restaurant',
      desc: 'Our flagship restaurant serving refined European & Russian cuisine'
    }
  },
  {
    id: 'wellness',
    title: 'Wellness & Relaxation',
    icon: '🧘',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
    description: 'Unwind and rejuvenate with our wellness facilities designed for your complete relaxation.',
    features: HOTEL_AMENITIES.wellness,
    highlight: {
      title: 'Heated Outdoor Pool',
      desc: 'Swim year-round in our temperature-controlled pool'
    }
  },
  {
    id: 'recreation',
    title: 'Recreation & Activities',
    icon: '🏊',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    description: 'From beach activities to cultural excursions, discover endless ways to enjoy your stay.',
    features: HOTEL_AMENITIES.recreation,
    highlight: {
      title: 'Private Beach Access',
      desc: 'Crystal-clear waters just 150 meters from the hotel'
    }
  },
  {
    id: 'services',
    title: 'Guest Services',
    icon: '🛎️',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
    description: 'Our dedicated team is available around the clock to ensure your comfort and convenience.',
    features: HOTEL_AMENITIES.services,
    highlight: {
      title: '24/7 Concierge',
      desc: 'Personal assistance for reservations, tours, and special requests'
    }
  }
];

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen bg-charcoal">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80"
            alt="Hotel Korona Amenities"
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
              <span className="text-gold-darker text-sm tracking-[0.2em] uppercase font-sans">Hotel Facilities</span>
              <div className="w-12 h-px bg-gold" />
            </div>

            <h1 className="font-serif text-4xl md:text-6xl font-bold text-ivory mb-6 text-shadow-strong">
              Our <span className="text-gold">Amenities</span>
            </h1>
            <p className="text-xl text-ivory/90 max-w-2xl mx-auto text-shadow">
              Discover world-class facilities designed for your comfort and enjoyment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Amenity Cards */}
      <section className="py-20 bg-deep-bronze relative">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5">
           <div
             className="absolute inset-0"
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, #d4a574 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}
           />
        </div>

        <div className="px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenityCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-xl aspect-[3/4] cursor-pointer"
              >
                {/* Background Image */}
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Default overlay - minimal */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

                {/* Hover overlay - darker for readability */}
                <div className="absolute inset-0 bg-charcoal/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Title - Visible by default, hidden on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-all duration-300 opacity-100 group-hover:opacity-0">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                    {category.title}
                  </h3>
                </div>

                {/* Features List - Visible on Hover */}
                <div className="absolute inset-0 p-6 pt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <h3 className="font-serif text-2xl text-gold mb-4">{category.title}</h3>
                  <ul className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {category.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-white/90 text-sm">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurants Preview */}
      <section className="py-20 bg-charcoal relative">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #d4a574 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold text-sm tracking-[0.2em] uppercase font-sans">Taste the World</span>
              <div className="w-12 h-px bg-gold" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ivory mb-4">
              Three <span className="text-gold">Restaurants</span>
            </h2>
            <p className="text-ivory/80 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
              A culinary journey awaits you. At the Korona Hotel, we invite you to explore three different culinary worlds, each reflecting the rich flavors and traditions of its culture, brought to life through thoughtful design and captivating culinary experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {RESTAURANTS.map((restaurant, index) => (
              <motion.div
                key={restaurant.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-[400px] sm:h-[450px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: restaurant.id === 'romanov'
                        ? "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80')"
                        : restaurant.id === 'uzbek-tatar'
                        ? "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80')"
                        : "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80')"
                    }}
                  />

                  {/* Default Overlay - Subtle */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 transition-opacity duration-300 group-hover:opacity-0" />

                  {/* Hover Overlay - Darker for readability */}
                  <div className="absolute inset-0 bg-charcoal/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Title - Visible by default, hidden on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-all duration-300 opacity-100 group-hover:opacity-0">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white drop-shadow-lg mb-2">
                      {restaurant.name}
                    </h3>
                    <p className="text-gold-light font-medium text-sm uppercase tracking-wide">{restaurant.cuisine}</p>
                  </div>

                  {/* Details - Visible on Hover */}
                  <div className="absolute inset-0 p-6 pt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex-1">
                      <h3 className="font-serif text-2xl text-gold mb-3">{restaurant.name}</h3>
                      <p className="text-gold-light font-semibold text-sm uppercase tracking-wide mb-4">{restaurant.cuisine}</p>
                      <p className="text-white/90 text-base leading-relaxed mb-6">{restaurant.atmosphere}</p>
                    </div>
                    <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      <Link href="/contact" className="flex-1">
                        <button className="w-full px-4 py-2.5 bg-gold hover:bg-gold-light text-charcoal rounded-lg font-semibold text-sm transition-colors duration-200">
                          Menu
                        </button>
                      </Link>
                      <Link href="/booking" className="flex-1">
                        <button className="w-full px-4 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-lg font-semibold text-sm transition-colors duration-200">
                          Reserve
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-deep-bronze relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <div className="absolute right-0 bottom-0 w-96 h-96 bg-gold rounded-full blur-[100px]" />
           <div className="absolute left-0 top-0 w-96 h-96 bg-gold rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl font-bold text-ivory mb-4">
              Experience It All
            </h2>
            <p className="text-sand mb-8 max-w-xl mx-auto text-lg">
              Book your stay and enjoy all our world-class amenities during your visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" variant="primary">
                  Book Your Stay
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
