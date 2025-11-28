'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { HOTEL_INFO } from '@/lib/constants';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80"
          alt="Hotel Korona at sunset"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bronze/95 via-bronze/90 to-bronze/95" />
      </div>

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5 z-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #d4a574 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Section Label */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-px bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-sans">Start Your Journey</span>
            <div className="w-16 h-px bg-gold" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-shadow-strong">
            Ready for Your <span className="text-gold">Dream Vacation</span>?
          </h2>

          <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto text-shadow-light">
            Experience the magic of Hotel Korona where castle elegance meets coastal beauty.
            Your perfect getaway awaits in the heart of Crimea&apos;s most beautiful resort town.
          </p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link href="/booking">
              <Button size="lg" variant="primary" className="text-base px-10 py-4">
                Book Now
              </Button>
            </Link>

            <Link href="/rooms">
              <Button size="lg" variant="outline" className="text-base px-10 py-4">
                View Our Rooms First
              </Button>
            </Link>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <a 
              href={`tel:${HOTEL_INFO.contact.phone}`}
              className="group flex flex-col items-center p-6 bg-white/20 backdrop-blur-sm rounded-xl border border-gold/30 hover:border-gold hover:bg-white/30 transition-all duration-300"
            >
              <span className="text-3xl mb-3">📞</span>
              <p className="text-xs text-gold uppercase tracking-wide mb-1">Call Us</p>
              <p className="text-white group-hover:text-gold transition-colors">
                {HOTEL_INFO.contact.phone}
              </p>
            </a>

            <a 
              href={`mailto:${HOTEL_INFO.contact.email}`}
              className="group flex flex-col items-center p-6 bg-white/20 backdrop-blur-sm rounded-xl border border-gold/30 hover:border-gold hover:bg-white/30 transition-all duration-300"
            >
              <span className="text-3xl mb-3">✉️</span>
              <p className="text-xs text-gold uppercase tracking-wide mb-1">Email Us</p>
              <p className="text-white group-hover:text-gold transition-colors text-sm">
                {HOTEL_INFO.contact.email}
              </p>
            </a>

            <a 
              href={`https://wa.me/${HOTEL_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-white/20 backdrop-blur-sm rounded-xl border border-gold/30 hover:border-gold hover:bg-white/30 transition-all duration-300"
            >
              <span className="text-3xl mb-3">💬</span>
              <p className="text-xs text-gold uppercase tracking-wide mb-1">WhatsApp</p>
              <p className="text-white group-hover:text-gold transition-colors">
                {HOTEL_INFO.contact.whatsapp}
              </p>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-gold/20 z-20" />
      <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-gold/20 z-20" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-gold/20 z-20" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-gold/20 z-20" />
    </section>
  );
};

export default CTASection;
