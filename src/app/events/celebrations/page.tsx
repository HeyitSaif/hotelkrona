'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { EVENT_TYPES, CELEBRATION_PACKAGES, EVENT_SPACES } from '@/lib/constants';

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
    <div className="min-h-screen bg-charcoal">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=80"
            alt="Celebrations at Hotel Korona"
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
                <span className="text-gold-darker text-sm tracking-[0.2em] uppercase font-sans">Celebrate in Style</span>
                <div className="w-12 h-px bg-gold" />
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-ivory mb-6 text-shadow-strong">
                Parties & <span className="text-gold">Celebrations</span>
              </h1>
              <p className="text-xl md:text-2xl text-ivory/90 mb-10 text-shadow max-w-2xl mx-auto">
                Birthdays, anniversaries, corporate events and more at Hotel Korona
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact-form">
                  <Button size="lg" variant="primary">
                    Request an Offer
                  </Button>
                </a>
                <a href="#event-spaces">
                  <Button size="lg" variant="secondary">
                    View Event Spaces
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Types Overview */}
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
              Your <span className="text-gold">Celebration</span>
            </h2>
            <p className="text-bronze text-lg">Whatever the occasion, we make it unforgettable</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {EVENT_TYPES.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{type.icon}</div>
                <h3 className="font-serif text-xl text-dark-brown mb-3 font-bold">{type.title}</h3>
                <p className="text-bronze text-sm leading-relaxed">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
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
              Packages & <span className="text-gold">Options</span>
            </h2>
            <p className="text-sand text-lg">Flexible packages tailored to your celebration</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {CELEBRATION_PACKAGES.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-morphism-dark rounded-2xl p-8 border border-gold-dark/10 hover:border-gold-dark/30 transition-all"
              >
                <h3 className="font-serif text-2xl text-gold-darker mb-3">{pkg.name}</h3>
                <p className="text-sand text-sm mb-6">{pkg.description}</p>
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
        </div>
      </section>

      {/* Services Details */}
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
              Event <span className="text-gold">Services</span>
            </h2>
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

      {/* Event Spaces */}
      <section id="event-spaces" className="py-24 bg-deep-bronze relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ivory mb-4">
              Event <span className="text-gold">Spaces</span>
            </h2>
            <p className="text-sand text-lg">Choose the perfect setting for your celebration</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {EVENT_SPACES.map((space, index) => (
              <motion.div
                key={space.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl aspect-[16/10] shadow-2xl"
              >
                <Image
                  src={space.image}
                  alt={space.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-serif text-2xl text-ivory mb-2">{space.name}</h3>
                  <p className="text-gold-darker font-semibold mb-2">Up to {space.capacity} guests</p>
                  <p className="text-sand text-sm">{space.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery & Testimonials */}
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
              Real <span className="text-gold">Celebrations</span>
            </h2>
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
              </motion.div>
            ))}
          </div>

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
                className="glass-morphism-dark rounded-2xl p-8 border border-gold-dark/10"
              >
                <p className="text-ivory/90 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="text-gold-darker font-semibold">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-24 bg-deep-bronze relative">
        <div className="absolute inset-0 opacity-10">
           <div className="absolute right-0 bottom-0 w-96 h-96 bg-gold rounded-full blur-[100px]" />
           <div className="absolute left-0 top-0 w-96 h-96 bg-gold rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-ivory mb-4">
                Plan Your <span className="text-gold">Celebration</span>
              </h2>
              <p className="text-sand text-lg">Tell us about your event and we'll create a custom proposal</p>
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
                <div>
                  <label className="block text-sand mb-2 font-semibold">Type of Event</label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full bg-charcoal/50 border border-gold-dark/20 rounded-lg px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors"
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
                <label className="block text-sand mb-2 font-semibold">Additional Details</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-charcoal/50 border border-gold-dark/20 rounded-lg px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors"
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
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-4xl font-bold text-ivory mb-12 text-center">
              Common <span className="text-gold">Questions</span>
            </h2>

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
                  className="glass-morphism-dark rounded-xl p-6 border border-gold-dark/10"
                >
                  <h3 className="font-serif text-lg text-gold-darker mb-3">{faq.q}</h3>
                  <p className="text-sand">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
