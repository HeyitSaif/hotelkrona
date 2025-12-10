'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { HOTEL_INFO } from '@/lib/constants';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-charcoal">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80"
            alt="Hotel Korona"
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
              <span className="text-gold-darker text-sm tracking-[0.2em] uppercase font-sans">Our Story</span>
              <div className="w-12 h-px bg-gold" />
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-ivory mb-6 text-shadow-strong">
              About <span className="text-gold">Hotel Korona</span>
            </h1>
            <p className="text-xl text-ivory/90 max-w-2xl mx-auto text-shadow">
              Where castle elegance meets coastal beauty on the shores of Crimea
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-deep-bronze relative">
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ivory mb-6">
                A Castle by the <span className="text-gold">Sea</span>
              </h2>
              <div className="space-y-6 text-sand leading-relaxed text-lg">
                <p>
                  Nestled in the picturesque resort town of Utyos, perfectly positioned between 
                  the vibrant cities of Alushta and Yalta, Hotel Korona stands as a testament to 
                  timeless elegance and modern comfort.
                </p>
                <p>
                  Our castle-style architecture draws inspiration from the nearby Princess 
                  Gagarina&apos;s Palace, creating a unique atmosphere where guests feel like 
                  royalty. Just 150 meters from pristine pebble beaches and crystal-clear 
                  waters, we offer the perfect blend of sea and mountain experiences.
                </p>
                <p>
                  With the majestic Mount Ayu-Dag (Bear Mountain) as our backdrop and the 
                  Black Sea at our doorstep, Hotel Korona provides an unforgettable escape 
                  for families, couples, and solo travelers alike.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-gold-dark/20 group">
                <Image
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                  alt="Hotel Korona exterior"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold-dark/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-gold-dark/20 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-16 bg-charcoal relative">
        <div className="px-4 md:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold text-sm tracking-[0.2em] uppercase font-sans">Castle-Style Architecture</span>
              <div className="w-12 h-px bg-gold" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ivory mb-4">
              Imperial <span className="text-gold">Elegance</span>
            </h2>
            <p className="text-ivory/80 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
              Our unique design captures the grandeur of imperial Russia while providing all modern comforts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Historic Design',
                desc: 'Castle-inspired exterior with turrets and stone facades reminiscent of Crimean palaces',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80'
              },
              {
                title: 'Elegant Interiors',
                desc: 'Carefully curated decor blending classical elegance with contemporary comfort',
                image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80'
              },
              {
                title: 'Garden Grounds',
                desc: 'Lush gardens and manicured lawns providing peaceful retreats throughout the property',
                image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
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
                      backgroundImage: `url('${item.image}')`
                    }}
                  />

                  {/* Default Overlay - Subtle */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 transition-opacity duration-300 group-hover:opacity-0" />

                  {/* Hover Overlay - Darker for readability */}
                  <div className="absolute inset-0 bg-charcoal/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Title - Visible by default, hidden on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-all duration-300 opacity-100 group-hover:opacity-0">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                      {item.title}
                    </h3>
                  </div>

                  {/* Details - Visible on Hover */}
                  <div className="absolute inset-0 p-6 pt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-serif text-2xl text-gold mb-4">{item.title}</h3>
                      <p className="text-white/90 text-base leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-deep-bronze relative">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5">
           <div
             className="absolute inset-0"
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, #d4a574 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}
           />
        </div>

        <div className="px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: 'Hospitality', desc: 'Warm welcome for every guest', image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80' },
              { value: 'Excellence', desc: 'Highest standards in all we do', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80' },
              { value: 'Sustainability', desc: 'Caring for our environment', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80' },
              { value: 'Family', desc: 'A home away from home', image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-xl aspect-[3/4] cursor-pointer"
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.value}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Default overlay - minimal */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

                {/* Hover overlay - darker for readability */}
                <div className="absolute inset-0 bg-charcoal/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Title - Visible by default, hidden on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-all duration-300 opacity-100 group-hover:opacity-0">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                    {item.value}
                  </h3>
                </div>

                {/* Description - Visible on Hover */}
                <div className="absolute inset-0 p-6 pt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <h3 className="font-serif text-2xl text-gold mb-4">{item.value}</h3>
                  <p className="text-white/90 text-base leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-charcoal relative">
        <div className="px-4 md:px-8">
          <div className="glass-morphism-dark rounded-2xl p-12 border border-gold-dark/20 shadow-glow">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: '10+', label: 'Years of Service' },
                { number: '500+', label: 'Happy Families Annually' },
                { number: '8', label: 'Unique Room Types' },
                { number: '3', label: 'Restaurants' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="font-serif text-4xl md:text-5xl font-bold text-gold-darker mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sand uppercase tracking-wider text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Experience the <span className="text-transparent bg-clip-text bg-gradient-to-b from-gold-light via-gold to-white">Magic</span>
            </h2>

            <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed max-w-3xl mx-auto font-light" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
              We invite you to become part of our story. Book your stay and discover why guests return year after year.
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
    </div>
  );
}
