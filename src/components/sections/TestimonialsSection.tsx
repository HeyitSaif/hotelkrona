'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Card, { CardContent } from '@/components/ui/Card';
import { TESTIMONIALS } from '@/lib/constants';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-sand relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-sans">Testimonials</span>
            <div className="w-12 h-px bg-gold" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-dark-brown mb-6">
            What Our <span className="text-gold">Guests Say</span>
          </h2>
          <p className="text-lg text-bronze max-w-2xl mx-auto">
            Real experiences from real travelers who have discovered the magic of Hotel Korona
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <Card variant="default" className="text-center p-8 md:p-12 bg-white">
                  <CardContent>
                    {/* Quote marks */}
                    <div className="text-6xl md:text-7xl text-gold/30 font-serif leading-none mb-4">"</div>
                    
                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl text-dark-brown leading-relaxed mb-8">
                      {TESTIMONIALS[currentIndex].quote}
                    </blockquote>

                    {/* Rating */}
                    <div className="flex justify-center mb-6">
                      {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                        <span key={i} className="text-gold text-xl mx-0.5">★</span>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="gold-line gold-line-center mb-6" />

                    {/* Author */}
                    <div className="space-y-1">
                      <p className="font-serif text-xl font-semibold text-gold">
                        {TESTIMONIALS[currentIndex].author}
                      </p>
                      <p className="text-bronze text-sm">
                        {TESTIMONIALS[currentIndex].stayType}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="mt-6 flex flex-wrap justify-center gap-2">
                      {TESTIMONIALS[currentIndex].highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="text-xs px-3 py-1 bg-gold/20 text-gold rounded-full border border-gold/40"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 md:-left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white border border-gold rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-dark-brown transition-all duration-300 shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 md:-right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white border border-gold rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-dark-brown transition-all duration-300 shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-gold w-8'
                    : 'bg-gold/30 hover:bg-gold/60'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "98%", label: "Guest Satisfaction" },
            { number: "500+", label: "Happy Families" },
            { number: "4.8", label: "Average Rating" },
            { number: "85%", label: "Return Guests" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-cream backdrop-blur-sm rounded-xl border border-gold shadow-medium"
            >
              <div className="font-serif text-3xl md:text-4xl font-bold text-gold mb-2">
                {stat.number}
              </div>
              <div className="text-bronze text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
