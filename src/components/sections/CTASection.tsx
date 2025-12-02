'use client';

import Button from '@/components/ui/Button';
import { HOTEL_INFO } from '@/lib/constants';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden min-h-[80vh] flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/CTASection.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/45" />
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
              <div className="text-gold-light mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
              </div>
              <p className="text-[10px] text-gold-light uppercase tracking-[0.15em] font-bold mb-2">Call Us</p>
              <p className="text-white text-lg group-hover:text-gold-light transition-colors font-serif" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                {HOTEL_INFO.contact.phone}
              </p>
            </a>

            <a
              href={`mailto:${HOTEL_INFO.contact.email}`}
              className="group flex flex-col items-center p-8 bg-white/5 backdrop-blur-md rounded-2xl border-[1.5px] border-white/20 hover:border-gold-light/60 hover:bg-black/50 transition-all duration-300"
            >
              <div className="text-gold-light mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
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
              <div className="text-gold-light mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
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
