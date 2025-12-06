"use client";

import JobCard from '@/components/ui/JobCard';
import { HOTEL_INFO, JOB_POSITIONS } from '@/lib/constants';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';

const CareersPage: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 340;
      const gap = 24;
      const scrollAmount = cardWidth + gap;

      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
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
    <div className="min-h-screen bg-charcoal relative">
      {/* SEO: JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingsSchema) }}
      />

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
          <source src="/Career.mp4" type="video/mp4" />
        </video>
        {/* Global Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ zIndex: 1 }}>
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold-darker text-sm tracking-[0.2em] uppercase font-sans">Join Our Team</span>
              <div className="w-12 h-px bg-gold" />
            </div>

            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 text-shadow-strong">
              Work where others go on <span className="text-gold">holiday</span>
            </h1>
            <p className="text-xl text-white/95 max-w-2xl mx-auto text-shadow-light font-medium">
              Join the Hotel Korona team in Utyos, Crimea – live by the sea, grow in hospitality, and work with a team that treats you like family, not a number.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-24 md:py-32 bg-sand relative overflow-hidden" style={{ zIndex: 1 }}>
        {/* Left: Hero Image - 37.5% width, full height from viewport edge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hidden md:block absolute inset-y-0 left-0 w-[37.5%]"
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80')`,
              }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-y-1/2" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-y-1/2" />
        </div>

        {/* Content Container */}
        <div className="relative z-10">
          <div className="md:ml-[30%] px-4 md:px-8">
            {/* Section Label and Heading */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 flex flex-col items-center justify-center text-center"
            >
              {/* Label with lines */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-px w-12 bg-gold"></div>
                <span className="text-gold text-xs tracking-[0.25em] uppercase font-sans font-bold">Opportunities</span>
                <div className="h-px w-12 bg-gold"></div>
              </div>

              {/* Main Heading */}
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-dark-brown">
                Open <span className="text-gold">Positions</span>
              </h2>
            </motion.div>

            {/* Carousel */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mb-10"
            >
              {/* Left Arrow */}
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-11 md:h-11 bg-white/95 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Previous positions"
              >
                <ChevronLeftIcon className="w-5 h-5 text-charcoal" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-11 md:h-11 bg-white/95 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Next positions"
              >
                <ChevronRightIcon className="w-5 h-5 text-charcoal" />
              </button>

              {/* Scrollable Container */}
              <div
                ref={scrollContainerRef}
                className="overflow-x-auto scrollbar-hide scroll-smooth px-12"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <div className="flex gap-6">
                  {JOB_POSITIONS.map((job, index) => (
                    <div
                      key={job.id}
                      className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px]"
                    >
                      <JobCard job={job} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hide scrollbar globally for this section */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>

      {/* Benefits Section - Amenities Style */}
      <section className="py-24 md:py-32 bg-sand relative overflow-hidden" style={{ zIndex: 1 }}>
        {/* Right: Hero Image - 37.5% width, full height from viewport edge */}
        <div className="hidden md:block absolute inset-y-0 right-0 w-[37.5%]">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80')`,
              }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent" />
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-y-1/2" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-y-1/2" />
        </div>

        {/* Content Container */}
        <div className="relative z-10">
          <div className="md:mr-[30%] px-4 md:px-8">
            {/* Section Label and Heading */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 flex flex-col items-center justify-center text-center"
            >
              {/* Label with lines */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-px w-12 bg-gold"></div>
                <span className="text-gold text-xs tracking-[0.25em] uppercase font-sans font-bold">Why Join Us</span>
                <div className="h-px w-12 bg-gold"></div>
              </div>

              {/* Main Heading */}
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-dark-brown">
                Why your next job should be by the <span className="text-gold">sea</span>
              </h2>
            </motion.div>

            {/* Benefits Grid - Image Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Life by the Sea */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group relative"
              >
                <div className="relative h-[400px] sm:h-[450px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80')`
                    }}
                  />

                  {/* Default Overlay - Subtle */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 transition-opacity duration-300 group-hover:opacity-0" />

                  {/* Hover Overlay - Darker for readability */}
                  <div className="absolute inset-0 bg-charcoal/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Title - Visible by default, hidden on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-all duration-300 opacity-100 group-hover:opacity-0">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                      Life by the Sea
                    </h3>
                  </div>

                  {/* Description - Visible on Hover */}
                  <div className="absolute inset-0 p-6 pt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 overflow-y-auto">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-serif text-2xl text-gold mb-4">Life by the Sea</h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        Work in a beautiful coastal location just 150 meters from the Black Sea – with beaches and mountains only a short walk away. Start your shift with sea air instead of city smog and finish the day where other people come only for vacation.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Pay & Perks You Can Trust */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative"
              >
                <div className="relative h-[400px] sm:h-[450px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1554224311-beee460ae6ba?w=800&q=80')`
                    }}
                  />

                  {/* Default Overlay - Subtle */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 transition-opacity duration-300 group-hover:opacity-0" />

                  {/* Hover Overlay - Darker for readability */}
                  <div className="absolute inset-0 bg-charcoal/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Title - Visible by default, hidden on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-all duration-300 opacity-100 group-hover:opacity-0">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                      Pay & Perks You Can Trust
                    </h3>
                  </div>

                  {/* Description - Visible on Hover */}
                  <div className="absolute inset-0 p-6 pt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 overflow-y-auto">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-serif text-2xl text-gold mb-4">Pay & Perks You Can Trust</h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        Enjoy fair, on‑time salary with transparent conditions for seasonal and long‑term contracts. Get hot staff meals during your shifts and live in the hotel for free or in nearby staff housing, so moving here is easy and low‑stress.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Growth & Training */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group relative"
              >
                <div className="relative h-[400px] sm:h-[450px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80')`
                    }}
                  />

                  {/* Default Overlay - Subtle */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 transition-opacity duration-300 group-hover:opacity-0" />

                  {/* Hover Overlay - Darker for readability */}
                  <div className="absolute inset-0 bg-charcoal/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Title - Visible by default, hidden on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-all duration-300 opacity-100 group-hover:opacity-0">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                      Growth & Training
                    </h3>
                  </div>

                  {/* Description - Visible on Hover */}
                  <div className="absolute inset-0 p-6 pt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 overflow-y-auto">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-serif text-2xl text-gold mb-4">Growth & Training</h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        No experience? No problem. We offer training for entry‑level candidates and show you our standards step by step. From kitchen helper to cook or from cleaner to supervisor – there are clear, realistic paths to grow into more senior roles if you show commitment.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Real Team Culture */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group relative"
              >
                <div className="relative h-[400px] sm:h-[450px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80')`
                    }}
                  />

                  {/* Default Overlay - Subtle */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 transition-opacity duration-300 group-hover:opacity-0" />

                  {/* Hover Overlay - Darker for readability */}
                  <div className="absolute inset-0 bg-charcoal/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Title - Visible by default, hidden on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-all duration-300 opacity-100 group-hover:opacity-0">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                      Real Team Culture
                    </h3>
                  </div>

                  {/* Description - Visible on Hover */}
                  <div className="absolute inset-0 p-6 pt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 overflow-y-auto">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-serif text-2xl text-gold mb-4">Real Team Culture</h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        We foster a supportive, collaborative environment where every team member is valued and seen. Managers are on site, approachable, and work closely with the team, so your ideas are heard and good performance is noticed quickly – not lost in a big chain.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Video Background */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center" style={{ zIndex: 1 }}>
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

        <div className="container mx-auto px-4 relative z-20 py-32">
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
              <span className="text-gold-light text-sm tracking-[0.15em] uppercase font-sans font-bold" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                Join Our Team
              </span>
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
    </div>
  );
};

export default CareersPage;
