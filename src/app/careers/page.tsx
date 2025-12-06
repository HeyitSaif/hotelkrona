"use client";

import JobCard from '@/components/ui/JobCard';
import { HOTEL_INFO, JOB_POSITIONS } from '@/lib/constants';
import { motion } from 'framer-motion';
import React from 'react';

const CareersPage: React.FC = () => {
  // Generate JSON-LD structured data for job postings
  const jobPostingsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": JOB_POSITIONS.map((job, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "JobPosting",
        "title": job.title,
        "description": job.description,
        "datePosted": "2025-11-30",
        "employmentType": job.employmentType.toUpperCase().replace('-', '_'),
        "hiringOrganization": {
          "@type": "Organization",
          "name": HOTEL_INFO.name,
          "sameAs": "https://hotelkorona.com",
          "logo": "https://hotelkorona.com/logo.png"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": HOTEL_INFO.location.address,
            "addressLocality": "Alushta",
            "addressRegion": "Crimea",
            "addressCountry": "UA"
          }
        },
        "baseSalary": {
          "@type": "MonetaryAmount",
          "currency": "RUB",
          "value": {
            "@type": "QuantitativeValue",
            "minValue": "Competitive"
          }
        }
      }
    }))
  };

  return (
    <main className="min-h-screen bg-sand-light">
      {/* SEO: JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingsSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-bronze-dark via-deep-bronze to-bronze-dark text-white overflow-hidden">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80')"
          }}
        />

        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Careers at Hotel Korona
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-sand-light">
              Join our team and help us create unforgettable stays for our guests.
              We offer a friendly work environment, fair pay, and opportunities to
              grow within the hotel.
            </p>
          </motion.div>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 md:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0 C150,60 350,0 600,40 C850,80 1050,20 1200,60 L1200,120 L0,120 Z"
              fill="#FAF8F3"
            />
          </svg>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-bronze-dark mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our current job openings and find your perfect role at Hotel Korona
            </p>
          </motion.div>

          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {JOB_POSITIONS.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <JobCard job={job} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Working at Hotel Korona Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-bronze-dark mb-4">
              Working at Hotel Korona
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes our hotel a great place to build your career
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Team Culture */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80')`
                  }}
                />

                {/* Default Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 transition-opacity duration-300 group-hover:opacity-0" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-charcoal/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Title - Visible by default */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-all duration-300 opacity-100 group-hover:opacity-0">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                    Team Culture
                  </h3>
                </div>

                {/* Description - Visible on Hover */}
                <div className="absolute inset-0 p-6 pt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-serif text-2xl text-gold mb-4">Team Culture</h3>
                    <p className="text-white/90 text-base leading-relaxed">
                      We foster a supportive and collaborative environment where every team
                      member is valued. Join a diverse group of professionals who share a
                      passion for hospitality and excellence.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Location & Benefits */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80')`
                  }}
                />

                {/* Default Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 transition-opacity duration-300 group-hover:opacity-0" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-charcoal/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Title - Visible by default */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-all duration-300 opacity-100 group-hover:opacity-0">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                    Location & Benefits
                  </h3>
                </div>

                {/* Description - Visible on Hover */}
                <div className="absolute inset-0 p-6 pt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-serif text-2xl text-gold mb-4">Location & Benefits</h3>
                    <p className="text-white/90 text-base leading-relaxed">
                      Work in a beautiful coastal location just 150 meters from the beach.
                      Enjoy staff meals, competitive wages, live in the hotel for free, and the opportunity to be part
                      of Crimea's premier hospitality destination.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            <source src="/Career.mp4" type="video/mp4" />
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
              <span className="text-gold-light text-sm tracking-[0.15em] uppercase font-sans font-bold" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>Join Our Team</span>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold-light to-transparent" />
            </div>

            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
              Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-b from-gold-light via-gold to-white">Career Journey</span>?
            </h2>

            <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed max-w-3xl mx-auto font-light" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
              Join the Hotel Korona family and become part of Crimea&apos;s premier hospitality destination.
              Your future in luxury hospitality starts here.
            </p>

            {/* Contact Information */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
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
    </main>
  );
};

export default CareersPage;
