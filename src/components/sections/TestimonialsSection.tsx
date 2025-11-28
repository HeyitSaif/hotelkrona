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
    <section className="py-24 md:py-32 bg-sand relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center space-x-6 mb-6">
            <div className="w-16 h-px bg-gold-darker" />
            <span className="text-gold-darker text-sm tracking-[0.15em] uppercase font-sans font-bold">Testimonials</span>
            <div className="w-16 h-px bg-gold-darker" />
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-deep-bronze mb-6">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark to-gold">Guests Say</span>
          </h2>
          <p className="text-lg md:text-xl text-bronze-dark max-w-2xl mx-auto font-light">
            Real experiences from real travelers who have discovered the magic of Hotel Korona
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div
          className="relative max-w-5xl mx-auto px-8 md:px-16"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative overflow-visible">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <Card variant="light" className="text-center p-10 md:p-16 bg-white/95 backdrop-blur-xl shadow-elevated border-elegant relative">
                  {/* Large quote mark background */}
                  <div className="absolute top-8 left-8 text-9xl text-gold-dark/10 font-serif leading-none select-none pointer-events-none">
                    &ldquo;
                  </div>
                  
                  <CardContent className="relative z-10">
                    {/* Quote */}
                    <blockquote className="text-xl md:text-2xl lg:text-3xl text-deep-bronze leading-relaxed mb-10 font-serif italic">
                      &ldquo;{TESTIMONIALS[currentIndex].quote}&rdquo;
                    </blockquote>

                    {/* Rating */}
                    <div className="flex justify-center mb-8 space-x-1">
                      {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                        <motion.span 
                          key={i} 
                          className="text-gold-darker text-2xl"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + (i * 0.1) }}
                        >
                          ★
                        </motion.span>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-dark to-transparent mx-auto mb-8" />

                    {/* Author */}
                    <div className="space-y-2">
                      <p className="font-serif text-2xl font-bold text-deep-bronze">
                        {TESTIMONIALS[currentIndex].author}
                      </p>
                      <p className="text-gold-darker text-sm uppercase tracking-widest font-semibold">
                        {TESTIMONIALS[currentIndex].stayType}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                      {TESTIMONIALS[currentIndex].highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="text-[10px] px-4 py-1.5 bg-gold/20 text-gold-darker rounded-full border-[1.5px] border-gold-dark/30 uppercase tracking-wide font-bold"
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
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white border-[1.5px] border-gold-dark/40 rounded-full flex items-center justify-center text-gold-darker hover:bg-gold hover:text-deep-bronze transition-all duration-300 shadow-elegant hover:shadow-gold z-20 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white border-[1.5px] border-gold-dark/40 rounded-full flex items-center justify-center text-gold-darker hover:bg-gold hover:text-deep-bronze transition-all duration-300 shadow-elegant hover:shadow-gold z-20 group"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-12 space-x-4">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  currentIndex === index
                    ? 'bg-gold-darker w-12'
                    : 'bg-gold-dark/30 w-2 hover:bg-gold-dark/50'
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
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gold-dark/40 pt-16"
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
              className="text-center group"
            >
              <div className="font-serif text-4xl md:text-5xl font-bold text-deep-bronze mb-2 group-hover:text-gold-dark transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-bronze-dark text-xs uppercase tracking-[0.15em] font-bold">
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
