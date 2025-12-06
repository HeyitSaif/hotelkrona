'use client';

import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

export default function WeddingsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Wedding inquiry:', formData);
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
        >
          <source src="/Wedding.mp4" type="video/mp4" />
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
              <span className="text-gold-darker text-sm tracking-[0.2em] uppercase font-sans">Say I Do</span>
              <div className="w-12 h-px bg-gold" />
            </div>

            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 text-shadow-strong">
              Weddings at <span className="text-gold">Hotel Korona</span>
            </h1>
            <p className="text-xl text-white/95 max-w-2xl mx-auto text-shadow-light font-medium">
              Elegant seaside celebrations for up to 100 guests
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why This Venue */}
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
              <span className="text-gold text-xs tracking-[0.25em] uppercase font-sans font-bold">Why Choose Us</span>
              <div className="h-px w-12 bg-gold"></div>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-ivory mb-4">
              Why Choose <span className="text-gold">Our Venue</span>
            </h2>
            <p className="text-base md:text-lg text-ivory/90 leading-relaxed max-w-3xl mx-auto">
              Everything you need for your perfect wedding day
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Ceremony by the Sea',
                image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
                features: [
                  'Private beachfront deck',
                  'Stunning seaside views',
                  'Perfect photo opportunities',
                  'Sunset ceremonies available'
                ]
              },
              {
                title: 'All-in-One Venue',
                image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
                features: [
                  'Ceremony & reception',
                  'Castle-style architecture',
                  'Multiple event spaces',
                  'Seamless transitions'
                ]
              },
              {
                title: 'Dedicated Planner',
                image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
                features: [
                  'Personal coordinator',
                  'Full-service planning',
                  'Day-of coordination',
                  'Every detail managed'
                ]
              },
              {
                title: 'Guest Accommodation',
                image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80',
                features: [
                  'Special room rates',
                  'Complimentary bridal suite',
                  'Room blocks available',
                  'Late checkout options'
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
                    <ul className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {feature.features.map((item, idx) => (
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
      </section>

      {/* Wedding Packages */}
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
              Wedding <span className="text-gold">Packages</span>
            </h2>
            <p className="text-base md:text-lg text-ivory/90 leading-relaxed max-w-3xl mx-auto">
              Choose the perfect package for your celebration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                id: 'elopement',
                name: 'Intimate Elopement',
                description: 'Perfect for small, intimate ceremonies',
                image: 'https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=800&q=80',
                features: [
                  'Ceremony setup for 2-10 guests',
                  'Romantic beachfront location',
                  'Private dinner service',
                  'Professional photography (2 hours)',
                  'Bouquet & boutonniere',
                  'Celebration champagne'
                ]
              },
              {
                id: 'premium',
                name: 'Premium Package',
                description: 'Enhanced celebration with premium services',
                image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
                features: [
                  'Venue rental & ceremony setup',
                  'Upgraded floral décor',
                  'Professional photographer (6 hours)',
                  'Live music or DJ',
                  'Extended premium bar',
                  'Wedding cake',
                  'Bridal suite accommodation'
                ],
                popular: true
              },
              {
                id: 'classic',
                name: 'Classic Package',
                description: 'Everything you need for a beautiful celebration',
                image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
                features: [
                  'Venue rental for ceremony & reception',
                  'Basic décor and setup',
                  '3-course wedding menu',
                  'Standard bar package',
                  'Tables, chairs & linens',
                  'Event coordinator'
                ]
              }
            ].map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`relative h-[500px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  pkg.popular ? 'ring-2 ring-gold' : ''
                }`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-charcoal px-4 py-1 rounded-full text-sm font-bold z-20">
                      Most Popular
                    </div>
                  )}

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

      {/* Detailed Services */}
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
              Wedding <span className="text-gold">Services</span>
            </h2>
            <p className="text-base md:text-lg text-ivory/90 leading-relaxed max-w-3xl mx-auto">
              Comprehensive services for every aspect of your wedding
            </p>
          </motion.div>

          <div className="space-y-24">
            {[
              {
                title: 'Catering & Cake',
                image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80',
                items: [
                  'Customizable menu options from three restaurants',
                  'Private menu tastings for couples',
                  'Professional cake design and creation',
                  'Dietary accommodations (vegetarian, vegan, gluten-free)',
                  'Premium bar packages with sommelier selection'
                ]
              },
              {
                title: 'Decoration & Flowers',
                image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
                items: [
                  'Ceremony arches and aisle decoration',
                  'Table centerpieces and linens',
                  'Bridal bouquets and boutonnieres',
                  'Color theme coordination',
                  'Lighting design for ambiance'
                ]
              },
              {
                title: 'Accommodation',
                image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80',
                items: [
                  'Special room rates for wedding guests',
                  'Complimentary bridal suite',
                  'Room blocks available',
                  'Welcome amenities for guests',
                  'Late checkout options'
                ]
              },
              {
                title: 'Extras',
                image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
                items: [
                  'Professional photography and videography',
                  'Live music, DJ, or both',
                  'Fireworks display options',
                  'Makeup and hair styling services',
                  'Guest transportation coordination'
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

      {/* Real Weddings Gallery */}
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
              <span className="text-gold text-xs tracking-[0.25em] uppercase font-sans font-bold">Gallery</span>
              <div className="h-px w-12 bg-gold"></div>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-ivory mb-4">
              Real <span className="text-gold">Weddings</span>
            </h2>
            <p className="text-base md:text-lg text-ivory/90 leading-relaxed max-w-3xl mx-auto">
              Celebrations we've had the honor to host
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', caption: 'Anna & Mark, June 2024' },
              { image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80', caption: 'Sofia & Alex, August 2024' },
              { image: 'https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=600&q=80', caption: 'Elena & Dmitri, September 2024' },
              { image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80', caption: 'Marina & Ivan, May 2024' },
              { image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80', caption: 'Natasha & Sergei, July 2024' },
              { image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80', caption: 'Olga & Pavel, June 2024' }
            ].map((wedding, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-2xl aspect-square"
              >
                <Image
                  src={wedding.image}
                  alt={wedding.caption}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-ivory font-serif opacity-0 group-hover:opacity-100 transition-opacity">
                  {wedding.caption}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 border border-gold-dark/20 max-w-3xl mx-auto"
          >
            <p className="text-bronze-dark text-lg italic text-center mb-4">
              "Our wedding at Hotel Korona was absolutely magical. The beachfront ceremony was stunning, the food was incredible, and the staff took care of every detail. Our guests are still talking about it!"
            </p>
            <p className="text-gold text-center font-semibold">— Sofia & Alex</p>
          </motion.div>
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
                Plan Your <span className="text-gold">Wedding</span>
              </h2>
              <p className="text-base md:text-lg text-ivory/90 leading-relaxed">
                Tell us about your dream wedding and we'll create a custom proposal
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
                <Input
                  label="Preferred Date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
              </div>

              <div className="mb-6">
                <Input
                  label="Number of Guests"
                  type="number"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  required
                />
              </div>

              <div className="mb-8">
                <label className="block text-deep-bronze mb-2 font-semibold">Tell us about your wedding</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-white border border-gold-dark/30 rounded-lg px-4 py-3 text-deep-bronze focus:outline-none focus:border-gold transition-colors"
                  placeholder="Share your vision, special requests, or questions..."
                  required
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Send Wedding Inquiry
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
                Frequently Asked <span className="text-gold">Questions</span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: 'How many guests can you accommodate?',
                  a: 'We can host weddings from intimate elopements of 2-10 guests up to grand celebrations of 100 guests, depending on your chosen venue and setup.'
                },
                {
                  q: 'Do you offer indoor backup for bad weather?',
                  a: 'Yes, we have beautiful indoor spaces available as backup options to ensure your celebration proceeds perfectly regardless of weather.'
                },
                {
                  q: 'Can we bring our own vendors?',
                  a: 'We work with trusted preferred vendors, but are happy to discuss accommodating your chosen vendors. Some services like catering must be provided by our restaurants.'
                },
                {
                  q: 'What is included in the venue rental?',
                  a: 'Venue rental includes the ceremony and reception space, tables, chairs, linens, basic setup and cleanup, and a dedicated event coordinator.'
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

            <div className="mt-12 text-center bg-white/95 backdrop-blur-xl rounded-xl p-8 border border-gold-dark/20">
              <h3 className="font-serif text-xl text-deep-bronze mb-2">Wedding Coordinator</h3>
              <p className="text-bronze-dark mb-4">Contact our dedicated wedding specialist</p>
              <p className="text-gold font-semibold">Marina Petrova</p>
              <p className="text-bronze-dark">weddings@hotelkorona.com</p>
              <p className="text-bronze-dark">+7 (978) 705 33 34</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
