'use client';

import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-charcoal">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden flex items-center">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src="/Party.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/50 to-charcoal/80" style={{ zIndex: 1 }} />

        <div className="container mx-auto px-4 relative" style={{ zIndex: 10 }}>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold-darker text-sm tracking-[0.2em] uppercase font-sans">Celebrate With Us</span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold text-ivory mb-6 text-shadow-strong">
              Special <span className="text-gold">Events</span>
            </h1>
            <p className="text-xl md:text-2xl text-ivory/90 mb-8 text-shadow">
              Create unforgettable memories at Hotel Korona's stunning seaside venue
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-24 bg-deep-bronze relative">
        <div className="absolute inset-0 opacity-5">
           <div
             className="absolute inset-0"
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, #d4a574 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}
           />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ivory mb-4">
              Your Perfect <span className="text-gold">Celebration</span>
            </h2>
            <p className="text-sand text-lg max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we make every moment special
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Weddings Card */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]"
            >
              <Link href="/events/weddings">
                <div className="relative h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"
                    alt="Weddings"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="text-5xl mb-4">💒</div>
                    <h3 className="font-serif text-3xl font-bold text-ivory mb-3">Weddings</h3>
                    <p className="text-sand text-lg mb-4">Elegant seaside ceremonies and receptions</p>
                    <div className="inline-flex items-center gap-2 text-gold-darker font-semibold group-hover:gap-4 transition-all">
                      Explore Weddings
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Celebrations Card */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]"
            >
              <Link href="/events/celebrations">
                <div className="relative h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80"
                    alt="Celebrations"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="text-5xl mb-4">🎉</div>
                    <h3 className="font-serif text-3xl font-bold text-ivory mb-3">Celebrations</h3>
                    <p className="text-sand text-lg mb-4">Birthdays, anniversaries, corporate events</p>
                    <div className="inline-flex items-center gap-2 text-gold-darker font-semibold group-hover:gap-4 transition-all">
                      Explore Celebrations
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ivory mb-4">
              Why Choose <span className="text-gold">Hotel Korona</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🌊',
                title: 'Seaside Location',
                description: 'Stunning beachfront setting just 150m from the sea'
              },
              {
                icon: '🍽️',
                title: 'Exceptional Catering',
                description: 'Three restaurants with diverse cuisine options'
              },
              {
                icon: '🏰',
                title: 'Unique Venue',
                description: 'Castle-style architecture creates memorable atmosphere'
              },
              {
                icon: '👔',
                title: 'Professional Service',
                description: 'Dedicated event coordinators and 24/7 staff'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-morphism-dark rounded-2xl p-8 text-center border border-gold-dark/10 hover:border-gold-dark/30 transition-all"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-serif text-xl text-gold-darker mb-3">{feature.title}</h3>
                <p className="text-sand text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden min-h-[80vh] flex items-center justify-center">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src="/Party.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/75" style={{ zIndex: 1 }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/45" style={{ zIndex: 1 }} />

        <div className="container mx-auto px-4 text-center relative" style={{ zIndex: 10 }}>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-6 mb-8">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent" />
              <span className="text-gold-light text-sm tracking-[0.15em] uppercase font-sans font-bold" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>Start Planning</span>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent" />
            </div>

            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
              Ready to Plan Your <span className="text-transparent bg-clip-text bg-gradient-to-b from-gold-light via-gold to-white">Event</span>?
            </h2>
            <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed max-w-3xl mx-auto font-light" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
              Contact our events team to discuss your celebration and receive a custom proposal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="primary" className="text-lg px-12 py-5 shadow-gold hover:shadow-glow min-w-[240px]">
                  Contact Events Team
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
