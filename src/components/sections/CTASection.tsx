'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { HOTEL_INFO } from '@/lib/constants';

const CTASection: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden min-h-[80vh] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80"
          alt="Hotel Korona at sunset"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/45" />
      </div>

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 z-10 pointer-events-none">
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
          className="text-center max-w-5xl mx-auto"
        >
          {/* Section Label */}
          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent" />
            <span className="text-gold-light text-sm tracking-[0.15em] uppercase font-sans font-bold" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>Start Your Journey</span>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent" />
          </div>

          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
            Ready for Your <span className="text-transparent bg-clip-text bg-gradient-to-b from-gold-light via-gold to-white">Dream Vacation</span>?
          </h2>

          <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed max-w-3xl mx-auto font-light" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
            Experience the magic of Hotel Korona where castle elegance meets coastal beauty.
            Your perfect getaway awaits in the heart of Crimea&apos;s most beautiful resort town.
          </p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <Link href="/booking">
              <Button size="lg" variant="primary" className="text-lg px-12 py-5 shadow-gold hover:shadow-glow min-w-[240px]">
                Book Now
              </Button>
            </Link>

            <Link href="/rooms">
              <Button size="lg" variant="outline" className="text-lg px-12 py-5 !border-[3px] !border-white !text-white hover:!bg-white hover:!text-deep-bronze min-w-[240px] backdrop-blur-sm">
                View Our Rooms
              </Button>
            </Link>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <a 
              href={`tel:${HOTEL_INFO.contact.phone}`}
              className="group flex flex-col items-center p-8 bg-white/5 backdrop-blur-md rounded-2xl border-[1.5px] border-white/20 hover:border-gold-light/60 hover:bg-black/50 transition-all duration-300"
            >
              <span className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📞</span>
              <p className="text-[10px] text-gold-light uppercase tracking-[0.15em] font-bold mb-2">Call Us</p>
              <p className="text-white text-lg group-hover:text-gold-light transition-colors font-serif" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                {HOTEL_INFO.contact.phone}
              </p>
            </a>

            <a 
              href={`mailto:${HOTEL_INFO.contact.email}`}
              className="group flex flex-col items-center p-8 bg-white/5 backdrop-blur-md rounded-2xl border-[1.5px] border-white/20 hover:border-gold-light/60 hover:bg-black/50 transition-all duration-300"
            >
              <span className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">✉️</span>
              <p className="text-[10px] text-gold-light uppercase tracking-[0.15em] font-bold mb-2">Email Us</p>
              <p className="text-white text-lg group-hover:text-gold-light transition-colors font-serif" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                {HOTEL_INFO.contact.email}
              </p>
            </a>

            <a 
              href={`https://wa.me/${HOTEL_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-8 bg-white/5 backdrop-blur-md rounded-2xl border-[1.5px] border-white/20 hover:border-gold-light/60 hover:bg-black/50 transition-all duration-300"
            >
              <span className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💬</span>
              <p className="text-[10px] text-gold-light uppercase tracking-[0.15em] font-bold mb-2">WhatsApp</p>
              <p className="text-white text-lg group-hover:text-gold-light transition-colors font-serif" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                {HOTEL_INFO.contact.whatsapp}
              </p>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-12 left-12 w-32 h-32 border-l-[2px] border-t-[2px] border-gold-light/50 z-20 hidden md:block" />
      <div className="absolute top-12 right-12 w-32 h-32 border-r-[2px] border-t-[2px] border-gold-light/50 z-20 hidden md:block" />
      <div className="absolute bottom-12 left-12 w-32 h-32 border-l-[2px] border-b-[2px] border-gold-light/50 z-20 hidden md:block" />
      <div className="absolute bottom-12 right-12 w-32 h-32 border-r-[2px] border-b-[2px] border-gold-light/50 z-20 hidden md:block" />
    </section>
  );
};

export default CTASection;
