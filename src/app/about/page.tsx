'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

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
              <div className="w-12 h-px bg-gold-light" />
              <span className="text-gold-light text-sm tracking-[0.15em] uppercase font-sans font-bold">Our Story</span>
              <div className="w-12 h-px bg-gold-light" />
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-ivory mb-6" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
              About <span className="text-gold-light">Hotel Korona</span>
            </h1>
            <p className="text-xl text-ivory max-w-2xl mx-auto" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
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
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-bold text-ivory mb-4">
              Castle-Style <span className="text-gold">Architecture</span>
            </h2>
            <p className="text-sand max-w-2xl mx-auto text-lg">
              Our unique design captures the grandeur of imperial Russia while providing 
              all modern comforts
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏰',
                title: 'Historic Design',
                desc: 'Castle-inspired exterior with turrets and stone facades reminiscent of Crimean palaces'
              },
              {
                icon: '🎨',
                title: 'Elegant Interiors',
                desc: 'Carefully curated decor blending classical elegance with contemporary comfort'
              },
              {
                icon: '🌳',
                title: 'Garden Grounds',
                desc: 'Lush gardens and manicured lawns providing peaceful retreats throughout the property'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-morphism-dark rounded-2xl p-8 border border-gold-dark/10 text-center hover:border-gold-dark/30 transition-all duration-300 group"
              >
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="font-serif text-xl text-gold-darker mb-3">{item.title}</h3>
                <p className="text-sand leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-deep-bronze">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-bold text-ivory mb-4">
              Our <span className="text-gold">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '❤️', value: 'Hospitality', desc: 'Warm welcome for every guest' },
              { icon: '⭐', value: 'Excellence', desc: 'Highest standards in all we do' },
              { icon: '🌿', value: 'Sustainability', desc: 'Caring for our environment' },
              { icon: '👨‍👩‍👧‍👦', value: 'Family', desc: 'A home away from home' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-charcoal/30 p-6 rounded-xl border border-gold-dark/5 hover:border-gold-dark/20 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-serif text-lg text-gold-darker mb-2">{item.value}</h3>
                <p className="text-sand text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-charcoal relative">
        <div className="container mx-auto px-4">
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
      <section className="py-16 bg-deep-bronze">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl font-bold text-ivory mb-4">
              Experience the Magic
            </h2>
            <p className="text-sand mb-8 max-w-xl mx-auto text-lg">
              We invite you to become part of our story. Book your stay and discover 
              why guests return year after year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" variant="primary">
                  Book Your Stay
                </Button>
              </Link>
              <Link href="/gallery">
                <Button size="lg" variant="secondary">
                  View Gallery
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
