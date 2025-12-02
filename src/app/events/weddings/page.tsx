'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { WEDDING_PACKAGES, EVENT_SPACES } from '@/lib/constants';

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
    <div className="min-h-screen bg-charcoal">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
            alt="Weddings at Hotel Korona"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="container mx-auto px-4">
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
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-ivory mb-6 text-shadow-strong">
                Weddings at <span className="text-gold">Hotel Korona</span>
              </h1>
              <p className="text-xl md:text-2xl text-ivory/90 mb-10 text-shadow max-w-2xl mx-auto">
                Elegant seaside celebrations for up to 100 guests
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact-form">
                  <Button size="lg" variant="primary">
                    Request a Proposal
                  </Button>
                </a>
                <Button size="lg" variant="secondary">
                  Download Wedding Brochure
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why This Venue */}
      <section className="py-24 bg-cream relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark-brown mb-4">
              Why Choose <span className="text-gold">Our Venue</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🌊',
                title: 'Ceremony by the Sea',
                description: 'Private beachfront deck available for stunning seaside ceremonies'
              },
              {
                icon: '🏰',
                title: 'All-in-One Venue',
                description: 'Ceremony, dinner, and party all in one beautiful location'
              },
              {
                icon: '👔',
                title: 'Dedicated Planner',
                description: 'Personal wedding coordinator to manage every detail of your day'
              },
              {
                icon: '🛏️',
                title: 'Guest Accommodation',
                description: 'Special room rates for guests and complimentary bridal suite'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-serif text-xl text-dark-brown mb-3 font-bold">{feature.title}</h3>
                <p className="text-bronze text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Packages */}
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
              Wedding <span className="text-gold">Packages</span>
            </h2>
            <p className="text-sand text-lg">Choose the perfect package for your celebration</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {WEDDING_PACKAGES.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-morphism-dark rounded-2xl p-8 border ${
                  pkg.popular ? 'border-gold shadow-2xl scale-105' : 'border-gold-dark/10'
                } hover:border-gold-dark/30 transition-all relative`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-charcoal px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="font-serif text-2xl text-gold-darker mb-3">{pkg.name}</h3>
                <p className="text-sand text-sm mb-4">{pkg.description}</p>
                <div className="text-ivory font-semibold mb-6">{pkg.priceFrom}</div>
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-ivory/90 text-sm">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a href="#contact-form" className="text-gold-darker hover:text-gold transition-colors font-semibold inline-flex items-center gap-2">
              Compare all inclusions
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services */}
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
              Wedding <span className="text-gold">Services</span>
            </h2>
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
                  <h3 className="font-serif text-3xl text-gold-darker mb-6">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-ivory/90">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Weddings Gallery */}
      <section className="py-24 bg-deep-bronze relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ivory mb-4">
              Real <span className="text-gold">Weddings</span>
            </h2>
            <p className="text-sand text-lg">Celebrations we've had the honor to host</p>
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
            className="glass-morphism-dark rounded-2xl p-8 border border-gold-dark/10 max-w-3xl mx-auto"
          >
            <p className="text-ivory/90 text-lg italic text-center mb-4">
              "Our wedding at Hotel Korona was absolutely magical. The beachfront ceremony was stunning, the food was incredible, and the staff took care of every detail. Our guests are still talking about it!"
            </p>
            <p className="text-gold-darker text-center font-semibold">— Sofia & Alex</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-ivory mb-4">
                Plan Your <span className="text-gold">Wedding</span>
              </h2>
              <p className="text-sand text-lg">Tell us about your dream wedding and we'll create a custom proposal</p>
            </div>

            <form onSubmit={handleSubmit} className="glass-morphism-dark rounded-2xl p-8 md:p-12 border border-gold-dark/10">
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
                <label className="block text-sand mb-2 font-semibold">Tell us about your wedding</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-charcoal/50 border border-gold-dark/20 rounded-lg px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors"
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
      <section className="py-24 bg-deep-bronze">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-4xl font-bold text-ivory mb-12 text-center">
              Frequently Asked <span className="text-gold">Questions</span>
            </h2>

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
                  className="glass-morphism-dark rounded-xl p-6 border border-gold-dark/10"
                >
                  <h3 className="font-serif text-lg text-gold-darker mb-3">{faq.q}</h3>
                  <p className="text-sand">{faq.a}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center glass-morphism-dark rounded-xl p-8 border border-gold-dark/10">
              <h3 className="font-serif text-xl text-ivory mb-2">Wedding Coordinator</h3>
              <p className="text-sand mb-4">Contact our dedicated wedding specialist</p>
              <p className="text-gold-darker font-semibold">Marina Petrova</p>
              <p className="text-sand">weddings@hotelkorona.com</p>
              <p className="text-sand">+7 (978) 705 33 34</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
