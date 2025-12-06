'use client';

import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-charcoal relative">
      {/* Fixed Full-Page Video Background - Covers Hero to CTA */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/Party.mp4" type="video/mp4" />
        </video>
        {/* Global Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ zIndex: 1 }}>
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold-darker text-sm tracking-[0.2em] uppercase font-sans">Celebrate With Us</span>
              <div className="w-12 h-px bg-gold" />
            </div>

            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 text-shadow-strong">
              Special <span className="text-gold">Events</span>
            </h1>
            <p className="text-xl text-white/95 max-w-2xl mx-auto text-shadow-light font-medium">
              Create unforgettable memories at Hotel Korona's stunning seaside venue
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-24 relative" style={{ zIndex: 1 }}>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 flex flex-col items-center justify-center text-center"
          >
            {/* Label with lines */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-px w-12 bg-gold"></div>
              <span className="text-gold text-xs tracking-[0.25em] uppercase font-sans font-bold">Your Perfect Celebration</span>
              <div className="h-px w-12 bg-gold"></div>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-ivory mb-4">
              Everything You <span className="text-gold">Need</span>
            </h2>
            <p className="text-base md:text-lg text-ivory/90 leading-relaxed max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, we make every moment special
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Weddings Card */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <Link href="/events/weddings">
                <div className="relative h-[400px] sm:h-[450px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80')"
                    }}
                  />

                  {/* Default Overlay - Subtle */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 transition-opacity duration-300 group-hover:opacity-0" />

                  {/* Hover Overlay - Darker for readability */}
                  <div className="absolute inset-0 bg-charcoal/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Title - Visible by default, hidden on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-all duration-300 opacity-100 group-hover:opacity-0">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                      Weddings
                    </h3>
                  </div>

                  {/* Features List - Visible on Hover */}
                  <div className="absolute inset-0 p-6 pt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <ul className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <li className="flex items-start gap-2 text-white/90 text-sm">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                        <span>Elegant seaside ceremonies</span>
                      </li>
                      <li className="flex items-start gap-2 text-white/90 text-sm">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                        <span>Stunning beachfront receptions</span>
                      </li>
                      <li className="flex items-start gap-2 text-white/90 text-sm">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                        <span>Castle-style venue</span>
                      </li>
                      <li className="flex items-start gap-2 text-white/90 text-sm">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                        <span>Personalized planning</span>
                      </li>
                      <li className="flex items-start gap-2 text-white/90 text-sm">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                        <span>Photo-perfect settings</span>
                      </li>
                      <li className="flex items-start gap-2 text-gold font-semibold text-sm mt-4">
                        <span>→</span>
                        <span>Learn more about our wedding services</span>
                      </li>
                    </ul>
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
              className="group relative"
            >
              <Link href="/events/celebrations">
                <div className="relative h-[400px] sm:h-[450px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80')"
                    }}
                  />

                  {/* Default Overlay - Subtle */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 transition-opacity duration-300 group-hover:opacity-0" />

                  {/* Hover Overlay - Darker for readability */}
                  <div className="absolute inset-0 bg-charcoal/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Title - Visible by default, hidden on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-all duration-300 opacity-100 group-hover:opacity-0">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                      Celebrations
                    </h3>
                  </div>

                  {/* Features List - Visible on Hover */}
                  <div className="absolute inset-0 p-6 pt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <h3 className="font-serif text-2xl text-gold mb-4">Celebrations</h3>
                    <ul className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <li className="flex items-start gap-2 text-white/90 text-sm">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                        <span>Birthday parties</span>
                      </li>
                      <li className="flex items-start gap-2 text-white/90 text-sm">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                        <span>Anniversary celebrations</span>
                      </li>
                      <li className="flex items-start gap-2 text-white/90 text-sm">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                        <span>Corporate events</span>
                      </li>
                      <li className="flex items-start gap-2 text-white/90 text-sm">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                        <span>Custom event menus</span>
                      </li>
                      <li className="flex items-start gap-2 text-white/90 text-sm">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                        <span>Dedicated event team</span>
                      </li>
                      <li className="flex items-start gap-2 text-gold font-semibold text-sm mt-4">
                        <span>→</span>
                        <span>Learn more about our celebration services</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ zIndex: 1 }}>
        {/* Content Container */}
        <div className="relative z-10">
          <div className="px-4 md:px-8">
          {/* Section Label and Heading */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 flex flex-col items-center justify-center text-center"
          >
            {/* Label with lines */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-px w-12 bg-gold"></div>
              <span className="text-gold text-xs tracking-[0.25em] uppercase font-sans font-bold">Why Choose Us</span>
              <div className="h-px w-12 bg-gold"></div>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-ivory mb-4">
              Hotel <span className="text-gold">Korona</span>
            </h2>
            <p className="text-base md:text-lg text-ivory/90 leading-relaxed max-w-3xl mx-auto">
              World-class facilities and services for your perfect celebration
            </p>
          </motion.div>

          {/* Amenities Grid - Image Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Seaside',
                image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
                features: [
                  'Stunning beachfront setting',
                  'Just 150m from the sea',
                  'Crystal-clear waters',
                  'Private beach access',
                  'Breathtaking sunset views'
                ]
              },
              {
                title: 'Catering',
                image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
                features: [
                  'Three unique restaurants',
                  'European & Russian cuisine',
                  'Central Asian specialties',
                  'Georgian dining experience',
                  'Custom event menus'
                ]
              },
              {
                title: 'Venue',
                image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
                features: [
                  'Castle-style architecture',
                  'Elegant event spaces',
                  'Indoor and outdoor options',
                  'Memorable atmosphere',
                  'Photo-perfect settings'
                ]
              },
              {
                title: 'Service',
                image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
                features: [
                  'Dedicated event coordinators',
                  '24/7 staff availability',
                  'Personalized planning',
                  'Expert guidance',
                  'Seamless execution'
                ]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
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
                      backgroundImage: `url('${feature.image}')`
                    }}
                  />

                  {/* Default Overlay - Subtle */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 transition-opacity duration-300 group-hover:opacity-0" />

                  {/* Hover Overlay - Darker for readability */}
                  <div className="absolute inset-0 bg-charcoal/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Title - Visible by default, hidden on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-all duration-300 opacity-100 group-hover:opacity-0">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Features List - Visible on Hover */}
                  <div className="absolute inset-0 p-6 pt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <h3 className="font-serif text-2xl text-gold mb-4">{feature.title}</h3>
                    <ul className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {feature.features.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-white/90 text-sm">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden" style={{ zIndex: 1 }}>
        <div className="container mx-auto px-4 text-center relative" style={{ zIndex: 10 }}>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-10 md:p-16 border-[1.5px] border-gold-dark shadow-gold max-w-5xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-dark" />

              <h3 className="font-serif text-3xl md:text-4xl font-bold text-deep-bronze mb-6">
                Ready to Plan Your <span className="text-gold">Event</span>?
              </h3>
              <p className="text-lg text-bronze-dark mb-10 max-w-2xl mx-auto leading-relaxed">
                Contact our events team to discuss your celebration and receive a custom proposal
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="primary" className="shadow-gold hover:shadow-glow">
                    Contact Events Team
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
