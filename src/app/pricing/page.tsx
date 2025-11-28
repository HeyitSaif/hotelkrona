'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { ROOM_TYPES } from '@/lib/constants';
import { formatPrice } from '@/lib/utils';

const pricingPeriods = [
  { id: 1, name: 'Low Season', dates: 'Jan 1 - Jun 30', multiplier: 1 },
  { id: 2, name: 'Mid Season', dates: 'Jul 1 - Jul 15', multiplier: 1.5 },
  { id: 3, name: 'High Season', dates: 'Jul 16 - Aug 31', multiplier: 2.5 },
  { id: 4, name: 'Shoulder', dates: 'Sep 1 - Dec 31', multiplier: 1.2 },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-charcoal">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&q=80"
            alt="Hotel Korona pricing"
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
              <span className="text-gold text-sm tracking-[0.2em] uppercase font-sans">Transparent Pricing</span>
              <div className="w-12 h-px bg-gold" />
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-ivory mb-6 text-shadow-strong">
              Room <span className="text-gold">Rates</span>
            </h1>
            <p className="text-xl text-ivory/90 max-w-2xl mx-auto text-shadow">
              Clear, transparent pricing for all seasons. Find the perfect room for your budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="bg-gradient-to-r from-burgundy to-deep-bronze py-4 border-y border-gold/20">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-ivory font-semibold tracking-wide"
          >
            🎉 <span className="text-gold font-bold">Special Offer:</span> Book 8+ nights and get <span className="text-gold font-bold">15% OFF</span> your entire stay!
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-deep-bronze relative">
        {/* Background Pattern */}
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
          {/* Season Legend */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="font-serif text-2xl font-bold text-ivory mb-6 text-center">
              2025 Seasonal Rates
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {pricingPeriods.map((period) => (
                <div 
                  key={period.id}
                  className="glass-morphism-dark rounded-lg p-4 text-center border border-gold/10 hover:border-gold/30 transition-colors"
                >
                  <div className="text-gold font-semibold mb-1">{period.name}</div>
                  <div className="text-sand text-sm">{period.dates}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pricing Table */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overflow-x-auto mb-16 rounded-2xl border border-gold/10 shadow-2xl"
          >
            <table className="w-full min-w-[800px] bg-charcoal/80 backdrop-blur-sm">
              <thead>
                <tr className="border-b border-gold/20 bg-deep-bronze/80">
                  <th className="text-left py-5 px-6 text-gold font-serif text-lg">Room Type</th>
                  <th className="text-center py-5 px-6 text-ivory font-sans font-medium">Guests</th>
                  {pricingPeriods.map((period) => (
                    <th key={period.id} className="text-center py-5 px-6 text-ivory font-sans font-medium">
                      {period.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROOM_TYPES.map((room, index) => (
                  <motion.tr 
                    key={room.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="border-b border-gold/5 hover:bg-deep-bronze/40 transition-colors"
                  >
                    <td className="py-5 px-6">
                      <div className="font-semibold text-ivory mb-1">{room.nameEn}</div>
                      <div className="text-xs text-sand uppercase tracking-wider">{room.size} • {room.balcony ? 'Balcony' : 'No Balcony'}</div>
                    </td>
                    <td className="text-center py-5 px-6 text-ivory">{room.maxGuests}</td>
                    {pricingPeriods.map((period) => (
                      <td key={period.id} className="text-center py-5 px-6">
                        <span className="text-gold font-bold">
                          {formatPrice(Math.round(room.price * period.multiplier))}
                        </span>
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* What's Included */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-morphism-dark rounded-2xl p-8 mb-16 border border-gold/10"
          >
            <h3 className="font-serif text-xl font-bold text-gold mb-8 text-center">
              All Rates Include
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '🏊', title: 'Pool Access', desc: 'Outdoor heated pool & sun loungers' },
                { icon: '🏖️', title: 'Beach Access', desc: 'Private beach area (150m walk)' },
                { icon: '📶', title: 'Free WiFi', desc: 'High-speed internet throughout' },
                { icon: '🅿️', title: 'Parking', desc: 'Free on-site parking' },
                { icon: '🛎️', title: '24/7 Reception', desc: 'Round-the-clock assistance' },
                { icon: '🧹', title: 'Daily Housekeeping', desc: 'Fresh towels & linens' },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                  <div>
                    <div className="text-ivory font-semibold mb-1 group-hover:text-gold transition-colors">{item.title}</div>
                    <div className="text-sand text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Additional Services */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="font-serif text-xl font-bold text-ivory mb-8 text-center">
              Additional <span className="text-gold">Services</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { service: 'Breakfast (per person)', price: '450 ₽' },
                { service: 'Lunch (per person)', price: '750 ₽' },
                { service: 'Extra bed (adult)', price: '1,500 ₽' },
                { service: 'Extra bed (child under 12)', price: '1,000 ₽' },
                { service: 'Airport transfer (one-way)', price: '3,000 ₽' },
                { service: 'Late checkout (until 6 PM)', price: '50% of rate' },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center glass-morphism-dark rounded-lg p-5 border border-gold/5 hover:border-gold/30 transition-all duration-300"
                >
                  <span className="text-ivory font-medium">{item.service}</span>
                  <span className="text-gold font-bold bg-deep-bronze/50 px-3 py-1 rounded-md">{item.price}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Booking Policies */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-charcoal rounded-2xl p-8 border border-gold/10 shadow-large"
          >
            <h3 className="font-serif text-xl font-bold text-gold mb-8 text-center">
              Booking Policies
            </h3>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h4 className="text-ivory font-semibold mb-4 flex items-center text-lg">
                  <span className="mr-3 text-2xl">🕐</span> Check-in & Check-out
                </h4>
                <ul className="text-sand space-y-2 text-sm ml-10 list-disc">
                  <li>Check-in: 2:00 PM</li>
                  <li>Check-out: 12:00 PM</li>
                  <li>Early check-in subject to availability</li>
                  <li>Late checkout available for additional fee</li>
                </ul>
              </div>
              <div>
                <h4 className="text-ivory font-semibold mb-4 flex items-center text-lg">
                  <span className="mr-3 text-2xl">💳</span> Payment
                </h4>
                <ul className="text-sand space-y-2 text-sm ml-10 list-disc">
                  <li>30% deposit required to confirm booking</li>
                  <li>Balance due upon arrival</li>
                  <li>Cash & bank transfer accepted</li>
                  <li>Full prepayment for promotional rates</li>
                </ul>
              </div>
              <div>
                <h4 className="text-ivory font-semibold mb-4 flex items-center text-lg">
                  <span className="mr-3 text-2xl">❌</span> Cancellation
                </h4>
                <ul className="text-sand space-y-2 text-sm ml-10 list-disc">
                  <li>Free cancellation 7+ days before arrival</li>
                  <li>50% charge for 3-7 days notice</li>
                  <li>Full charge for less than 3 days notice</li>
                  <li>No-show: full charge applies</li>
                </ul>
              </div>
              <div>
                <h4 className="text-ivory font-semibold mb-4 flex items-center text-lg">
                  <span className="mr-3 text-2xl">👶</span> Children Policy
                </h4>
                <ul className="text-sand space-y-2 text-sm ml-10 list-disc">
                  <li>Children of all ages welcome</li>
                  <li>Under 3: free with existing bedding</li>
                  <li>3-12 years: reduced rate for extra bed</li>
                  <li>Cribs available upon request</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16"
          >
            <h3 className="font-serif text-3xl font-bold text-ivory mb-4">
              Ready to Book?
            </h3>
            <p className="text-sand mb-8 max-w-xl mx-auto text-lg">
              Choose your dates and room type to check availability and secure your reservation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" variant="primary">
                  Book Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Request Custom Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
