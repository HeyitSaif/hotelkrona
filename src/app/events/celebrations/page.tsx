'use client';

import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { CELEBRATION_PACKAGES, EVENT_SPACES, EVENT_TYPES } from '@/lib/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

export default function CelebrationsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    guests: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Celebration inquiry:', formData);
  };

  return (
    <div className="min-h-screen bg-charcoal relative">
      {/* Fixed Full-Page Video Background */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
          onLoadedMetadata={(e) => {
            const video = e.target as HTMLVideoElement;
            video.play().catch(() => {
              // Autoplay failed, will retry on user interaction
            });
          }}
          onEnded={(e) => {
            const video = e.target as HTMLVideoElement;
            video.currentTime = 0;
            video.play();
          }}
        >
          <source src="/Parties&Celebrations.mp4" type="video/mp4" />
        </video>
        {/* Global Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ zIndex: 1 }}>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold-darker text-sm tracking-[0.2em] uppercase font-sans">Celebrate in Style</span>
              <div className="w-12 h-px bg-gold" />
            </div>

            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 text-shadow-strong">
              Parties & <span className="text-gold">Celebrations</span>
            </h1>
            <p className="text-xl text-white/95 max-w-2xl mx-auto text-shadow-light font-medium">
              Make your special moments unforgettable at Hotel Korona
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Types Overview */}
      <section className="py-24 relative" style={{ zIndex: 1 }}>
        <div className="px-4 md:px-8">
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
              <span className="text-gold text-xs tracking-[0.25em] uppercase font-sans font-bold">Event Types</span>
              <div className="h-px w-12 bg-gold"></div>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-ivory mb-4">
              Perfect for Every <span className="text-gold">Occasion</span>
            </h2>
            <p className="text-base md:text-lg text-ivory/90 leading-relaxed max-w-3xl mx-auto">
              Whatever the celebration, we make it unforgettable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EVENT_TYPES.map((type, index) => (
              <motion.div
                key={type.id}
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
                      backgroundImage: `url('${type.image}')`
                    }}
                  />

                  {/* Default Overlay - Subtle */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 transition-opacity duration-300 group-hover:opacity-0" />

                  {/* Hover Overlay - Darker for readability */}
                  <div className="absolute inset-0 bg-charcoal/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Title - Visible by default, hidden on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-all duration-300 opacity-100 group-hover:opacity-0">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                      {type.title}
                    </h3>
                  </div>

                  {/* Description - Visible on Hover */}
                  <div className="absolute inset-0 p-6 pt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <h3 className="font-serif text-2xl text-gold mb-4">{type.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{type.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 md:py-32 relative" style={{ zIndex: 1 }}>
        <div className="px-4 md:px-8">
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
              <span className="text-gold text-xs tracking-[0.25em] uppercase font-sans font-bold">Packages</span>
              <div className="h-px w-12 bg-gold"></div>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-ivory mb-4">
              Celebration <span className="text-gold">Packages</span>
            </h2>
            <p className="text-base md:text-lg text-ivory/90 leading-relaxed max-w-3xl mx-auto">
              Choose the perfect package for your celebration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {CELEBRATION_PACKAGES.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${pkg.image}')`
                    }}
                  />

                  {/* Default Overlay - Subtle */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 transition-opacity duration-300 group-hover:opacity-0" />

                  {/* Hover Overlay - Darker for readability */}
                  <div className="absolute inset-0 bg-charcoal/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Title - Visible by default, hidden on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-all duration-300 opacity-100 group-hover:opacity-0">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                      {pkg.name}
                    </h3>
                  </div>

                  {/* Features List - Visible on Hover */}
                  <div className="absolute inset-0 p-6 pt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <h3 className="font-serif text-2xl text-gold mb-4">{pkg.name}</h3>
                    <ul className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-white/90 text-sm">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-24 md:py-32 relative" style={{ zIndex: 1 }}>
        <div className="container mx-auto px-4">
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
              <span className="text-gold text-xs tracking-[0.25em] uppercase font-sans font-bold">Services</span>
              <div className="h-px w-12 bg-gold"></div>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-ivory mb-4">
              Event <span className="text-gold">Services</span>
            </h2>
            <p className="text-base md:text-lg text-ivory/90 leading-relaxed max-w-3xl mx-auto">
              Comprehensive services for every aspect of your celebration
            </p>
          </motion.div>

          <div className="space-y-24">
            {[
              {
                title: 'Food & Drinks',
                image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
                items: [
                  'Buffet or plated menu options',
                  "Kids' menus available",
                  'Special dietary accommodations',
                  'Open bar or consumption bar packages',
                  'Signature cocktails and mocktails'
                ]
              },
              {
                title: 'Decoration & Setup',
                image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
                items: [
                  'Table décor and centerpieces',
                  'Balloons and floral arrangements',
                  'Themed decoration options',
                  'Custom signage and banners',
                  'Lighting design for ambiance'
                ]
              },
              {
                title: 'Entertainment',
                image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
                items: [
                  'DJ services or live bands',
                  'Microphone and sound system',
                  'Dance floor setup',
                  'Projector and screen for slideshows',
                  'Background music playlists'
                ]
              },
              {
                title: 'Extras',
                image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80',
                items: [
                  'Professional photography',
                  'Custom celebration cakes',
                  'Room bookings for guests',
                  'Late-night snacks and coffee',
                  'Gift table and coat check'
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 border border-gold-dark/20">
                    <h3 className="font-serif text-3xl text-deep-bronze mb-6">{service.title}</h3>
                    <ul className="space-y-3">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-bronze-dark">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
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
      </section>

      {/* Event Spaces */}
      <section id="event-spaces" className="py-24 md:py-32 relative" style={{ zIndex: 1 }}>
        <div className="px-4 md:px-8">
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
              <span className="text-gold text-xs tracking-[0.25em] uppercase font-sans font-bold">Venues</span>
              <div className="h-px w-12 bg-gold"></div>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-ivory mb-4">
              Event <span className="text-gold">Spaces</span>
            </h2>
            <p className="text-base md:text-lg text-ivory/90 leading-relaxed max-w-3xl mx-auto">
              Choose the perfect setting for your celebration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EVENT_SPACES.map((space, index) => (
              <motion.div
                key={space.id}
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
                      backgroundImage: `url('${space.image}')`
                    }}
                  />

                  {/* Default Overlay - Subtle */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 transition-opacity duration-300 group-hover:opacity-0" />

                  {/* Hover Overlay - Darker for readability */}
                  <div className="absolute inset-0 bg-charcoal/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Title - Visible by default, hidden on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-all duration-300 opacity-100 group-hover:opacity-0">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white drop-shadow-lg mb-2">
                      {space.name}
                    </h3>
                    <p className="text-gold-darker font-semibold">Up to {space.capacity} guests</p>
                  </div>

                  {/* Description - Visible on Hover */}
                  <div className="absolute inset-0 p-6 pt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-serif text-2xl text-gold mb-3">{space.name}</h3>
                      <p className="text-gold-darker font-semibold mb-4">Up to {space.capacity} guests</p>
                      <p className="text-white/90 text-sm leading-relaxed">{space.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery & Testimonials */}
      <section className="py-24 md:py-32 relative" style={{ zIndex: 1 }}>
        <div className="px-4 md:px-8">
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
              <span className="text-gold text-xs tracking-[0.25em] uppercase font-sans font-bold">Gallery</span>
              <div className="h-px w-12 bg-gold"></div>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-ivory mb-4">
              Real <span className="text-gold">Celebrations</span>
            </h2>
            <p className="text-base md:text-lg text-ivory/90 leading-relaxed max-w-3xl mx-auto">
              Celebrations we've had the honor to host
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80',
              'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80',
              'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80',
              'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80',
              'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=600&q=80',
              'https://images.unsplash.com/photo-1519167758481-83f29da8fd97?w=600&q=80'
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-2xl aspect-square"
              >
                <Image
                  src={image}
                  alt={`Celebration ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: "Perfect place for my 40th birthday party. The terrace was beautiful, the food was amazing, and the staff made everything run smoothly.",
                author: "Dmitri K."
              },
              {
                quote: "We hosted our company anniversary here and it exceeded all expectations. Professional service and stunning venue!",
                author: "TechCorp Team"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 border border-gold-dark/20"
              >
                <p className="text-bronze-dark italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="text-gold-darker font-semibold">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-24 md:py-32 relative" style={{ zIndex: 1 }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="h-px w-12 bg-gold"></div>
                <span className="text-gold text-xs tracking-[0.25em] uppercase font-sans font-bold">Get In Touch</span>
                <div className="h-px w-12 bg-gold"></div>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-ivory mb-4">
                Plan Your <span className="text-gold">Celebration</span>
              </h2>
              <p className="text-base md:text-lg text-ivory/90 leading-relaxed">
                Tell us about your event and we'll create a custom proposal
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-gold-dark/20 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Input
                  label="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Input
                  label="Phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
                <div>
                  <label className="block text-deep-bronze mb-2 font-semibold">Type of Event</label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full bg-white border border-gold-dark/30 rounded-lg px-4 py-3 text-deep-bronze focus:outline-none focus:border-gold transition-colors"
                    required
                  >
                    <option value="">Select event type</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Input
                  label="Preferred Date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
                <Input
                  label="Number of Guests"
                  type="number"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  required
                />
              </div>

              <div className="mb-8">
                <label className="block text-deep-bronze mb-2 font-semibold">Additional Details</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-white border border-gold-dark/30 rounded-lg px-4 py-3 text-deep-bronze focus:outline-none focus:border-gold transition-colors"
                  placeholder="Tell us about your celebration plans, special requests, or questions..."
                  required
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Send Event Request
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 relative" style={{ zIndex: 1 }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="h-px w-12 bg-gold"></div>
                <span className="text-gold text-xs tracking-[0.25em] uppercase font-sans font-bold">FAQ</span>
                <div className="h-px w-12 bg-gold"></div>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-ivory mb-4">
                Common <span className="text-gold">Questions</span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: 'What is the minimum number of guests?',
                  a: 'We can accommodate events from 10 guests up to 100 guests depending on your chosen space and setup.'
                },
                {
                  q: 'Can we customize the menu?',
                  a: 'Absolutely! Our culinary team will work with you to create a custom menu that fits your preferences and dietary requirements.'
                },
                {
                  q: 'Is there a time limit for events?',
                  a: 'Standard packages include 4-5 hours. Extended hours can be arranged based on availability.'
                },
                {
                  q: 'Do you provide entertainment?',
                  a: 'We work with trusted DJs, live bands, and other entertainers. We can arrange this for you or you may bring your own.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/95 backdrop-blur-xl rounded-xl p-6 border border-gold-dark/20"
                >
                  <h3 className="font-serif text-lg text-deep-bronze mb-3">{faq.q}</h3>
                  <p className="text-bronze-dark">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
